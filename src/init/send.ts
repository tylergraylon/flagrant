import {
  BlockhashWithExpiryBlockHeight,
  Connection,
  TransactionExpiredBlockheightExceededError,
  VersionedTransactionResponse,
  VersionedTransaction,
  LAMPORTS_PER_SOL,
  PublicKey,
  Keypair,
} from "@solana/web3.js";
import {
  buildUrl,
  JUPYTER_BASE_URL,
  JUPYTER_SOL_ADDRESS,
  JUPYTER_USDT_ADDRESS,
  wait,
} from "./utils";
import axios from "axios";
import { Provider } from "@reown/appkit-adapter-solana";
import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { Wallet } from "@project-serum/anchor";

interface ISwapFromSol {
  coin: string;
  amount: number;
  slippage: number;
}

type TransactionSenderAndConfirmationWaiterArgs = {
  serializedTransaction: Buffer;
  blockhashWithExpiryBlockHeight: BlockhashWithExpiryBlockHeight;
};

const SEND_OPTIONS = {
  skipPreflight: true,
};

export class SwapToken {
  constructor(private solConnection: Connection) {}
  async getQuoteAgaintSol(args: ISwapFromSol) {
    const url = buildUrl(
      JUPYTER_BASE_URL,
      `/quote?`,
      `inputMint=${JUPYTER_SOL_ADDRESS}`,
      `&outputMint=${args.coin}`,
      `&amount=${args.amount}`,
      `&slippageBps=${args.slippage}`,
      `&restrictIntermediateTokens=true`
    );

    const quoteRes = await axios.get(url);

    return quoteRes.data;
  }

  async serialiseDeserialiseTransaction({
    quoteResponse,
    userPublicKey,
    destinationAccount,
  }: {
    quoteResponse: { [key: string]: any };
    userPublicKey: string;
    destinationAccount: string;
  }) {
    const options = {
      quoteResponse,
      userPublicKey,
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: true,
      dynamicSlippage: {
        // This will set an optimized slippage to ensure high success rate
        maxBps: 300, // Make sure to set a reasonable cap here to prevent MEV
      },
      destinationTokenAccount: destinationAccount,
      prioritizationFeeLamports: {
        priorityLevelWithMaxLamports: {
          maxLamports: 10000000,
          priorityLevel: "veryHigh", // If you want to land transaction fast, set this to use `veryHigh`. You will pay on average higher priority fee.
        },
      },
    };

    const url = buildUrl(JUPYTER_BASE_URL, "/swap");

    const serRes = await axios.post(url, options);

    const swapRes = serRes.data;

    // console.log("swaptransa", swapRes.swapTransaction);

    const swapTransactionBuf = Buffer.from(swapRes.swapTransaction, "base64");
    const transaction = VersionedTransaction.deserialize(swapTransactionBuf);

    return { transaction, swapRes };
  }

  async executeTransaction({
    transaction,
  }: {
    transaction: VersionedTransaction;
  }) {
    const connection = this.solConnection;
    const latestBlockHash = await this.solConnection.getLatestBlockhash();

    // Execute the transaction
    const rawTransaction = transaction.serialize();
    const txid = await connection.sendRawTransaction(rawTransaction, {
      skipPreflight: true,
      maxRetries: 2,
    });
    const confirm = await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: txid,
    });

    console.log("confirm execute transaction", confirm);

    return txid;
  }

  static async swap(
    connection: Connection,
    address: string,
    wallet: Provider,
    destinationAccount: string,
    amount: number
  ) {
    try {
      //   const solToLamports = 0.0001 * LAMPORTS_PER_SOL;
      const swapService = new SwapToken(connection);
      const quote = await swapService.getQuoteAgaintSol({
        coin: JUPYTER_USDT_ADDRESS,
        amount,
        slippage: 50,
      });

      //   const wallet = new Wallet(
      //     Keypair.fromSecretKey(
      //       bs58.decode(
      //         '3UekLwYiMBS7hFYjKXDjqpjypJHrqsiZEYu4JgL9NVdaXMkASSkEmoEX1u1cuq8J41RRUo2qpWqGWYxdWZz7qEj1',
      //       ),
      //     ),
      //   );

      const { transaction, swapRes } =
        await swapService.serialiseDeserialiseTransaction({
          quoteResponse: quote,
          userPublicKey: address,
          destinationAccount,
        });

      const signedTransaction = await wallet.signTransaction(transaction);

      console.log("signed transaction", signedTransaction.signatures);

      const serializedTransaction = Buffer.from(transaction.serialize());

      const blockhash = transaction.message.recentBlockhash;

      console.log("signed trans", transaction.signatures);

      transaction.signatures;

      const transactionResponse =
        await swapService.transactionSenderAndConfirmationWaiter({
          serializedTransaction,
          blockhashWithExpiryBlockHeight: {
            blockhash,
            lastValidBlockHeight: swapRes.lastValidBlockHeight,
          },
        });

      console.log("txid", transactionResponse);
    } catch (error) {
      console.log("error ooo", error);
    }
  }

  async transactionSenderAndConfirmationWaiter({
    serializedTransaction,
    blockhashWithExpiryBlockHeight,
  }: TransactionSenderAndConfirmationWaiterArgs): Promise<VersionedTransactionResponse | null> {
    const connection = this.solConnection;
    const txid = await connection.sendRawTransaction(
      serializedTransaction,
      SEND_OPTIONS
    );

    console.log("connection is here", connection);

    const controller = new AbortController();
    const abortSignal = controller.signal;

    const abortableResender = async () => {
      while (true) {
        await wait(2_000);
        if (abortSignal.aborted) return;
        try {
          await connection.sendRawTransaction(
            serializedTransaction,
            SEND_OPTIONS
          );
        } catch (e) {
          console.warn(`Failed to resend transaction: ${e}`);
        }
      }
    };

    try {
      abortableResender();
      const lastValidBlockHeight =
        blockhashWithExpiryBlockHeight.lastValidBlockHeight - 150;

      // this would throw TransactionExpiredBlockheightExceededError
      await Promise.race([
        connection.confirmTransaction(
          {
            ...blockhashWithExpiryBlockHeight,
            lastValidBlockHeight,
            signature: txid,
            abortSignal,
          },
          "confirmed"
        ),
        new Promise(async (resolve) => {
          // in case ws socket died
          while (!abortSignal.aborted) {
            await wait(1_000);
            const tx = await connection.getSignatureStatus(txid, {
              searchTransactionHistory: false,
            });
            if (tx?.value?.confirmationStatus === "confirmed") {
              resolve(tx);
            }
          }
        }),
      ]);
    } catch (e) {
      if (e instanceof TransactionExpiredBlockheightExceededError) {
        // we consume this error and getTransaction would return null
        return null;
      } else {
        // invalid state from web3.js
        throw e;
      }
    } finally {
      controller.abort();
    }

    // in case rpc is not synced yet, we add some retries

    // console.log('promiseRetry', promiseRetry);

    const response = await connection.getTransaction(txid, {
      commitment: "confirmed",
      maxSupportedTransactionVersion: 0,
    });

    console.log("transaction getter", response);

    // const response = await promiseRetry(
    //   async (retry) => {

    //     if (!response) {
    //       retry(new Error(''));
    //     }
    //     return response;
    //   },
    //   {
    //     retries: 5,
    //     minTimeout: 1e3,
    //   },
    // );

    return response;
  }
}
