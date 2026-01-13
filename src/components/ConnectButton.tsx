"use client";

import { useWallet } from "@lazorkit/wallet";

export function ConnectButton() {
  const { connect, disconnect, isConnected, isConnecting, wallet } =
    useWallet();

  if (isConnected && wallet) {
    return (
      <button
        onClick={() => disconnect()}
        className="bg-black text-white hover:opacity-90 cursor-pointer font-bold py-3 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
      >
        Disconnect {wallet.smartWallet.slice(0, 4)}...
        {wallet.smartWallet.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect()}
      disabled={isConnecting}
      className="bg-black text-white hover:opacity-90 cursor-pointer font-bold py-3 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide"
    >
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
