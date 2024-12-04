"use client";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TrustWalletAdapter,
  LedgerWalletAdapter,
  SafePalWalletAdapter,
  SalmonWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { ReactNode, useEffect, useState } from "react";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [
    new TrustWalletAdapter(),
    new LedgerWalletAdapter(),
    new SolflareWalletAdapter(),
    new PhantomWalletAdapter(),

    new SafePalWalletAdapter(),
    new SalmonWalletAdapter(),
  ],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "540c3caae82daa9a1699911ad58c4cc4";

// 2. Create a metadata object - optional
// const metadata = {
//   name: "AppKit",
//   description: "AppKit Solana Example",
//   url: "https://example.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.githubusercontent.com/u/179229932"],
// };

// 3. Create modal

export default function WalletInit({ children }: { children: ReactNode }) {
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);

    createAppKit({
      adapters: [solanaWeb3JsAdapter],
      networks: [
        {
          ...solana,
          rpcUrls: {
            default: {
              http: [
                "https://wispy-green-glade.solana-mainnet.quiknode.pro/4b3f864453cae039adf27ecdf9de9d529cb45b38",
              ],
            },
          },
        },
      ],

      // featuredWalletIds: [
      //   "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      //   "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      //   "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
      // ],
      // excludeWalletIds: [
      //   "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
      //   "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
      // ],
      //   metadata: metadata,
      enableInjected: true,
      projectId,
      features: {
        analytics: true, // Optional - defaults to your Cloud configuration
        email: false, // default to true
        socials: [],
      },
    });
  }, []);
  if (!hydrate) return null;
  return <main>{children}</main>;
}
