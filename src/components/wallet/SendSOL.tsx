"use client";

import { useWallet } from "@lazorkit/wallet";
import { SystemProgram, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { Loader2 } from "lucide-react";

/**
 * Component for sending SOL with Gasless (Sponsored) Transactions.
 *
 * Features:
 * 1. Uses LazorKit's `signAndSendTransaction` to automatically trigger Paymaster sponsorship.
 * 2. Handles "Insufficient Funds" errors gracefully.
 * 3. Shows transaction signature and Explorer link on success.
 */
export function SendSOL() {
  const { signAndSendTransaction, smartWalletPubkey } = useWallet();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txSignature, setTxSignature] = useState("");
  const [status, setStatus] = useState<string>("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!smartWalletPubkey) return;

    try {
      setLoading(true);
      setTxSignature("");
      setStatus("Preparing transaction...");

      const destination = new PublicKey(recipient);
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const instruction = SystemProgram.transfer({
        fromPubkey: smartWalletPubkey,
        toPubkey: destination,
        lamports,
      });

      setStatus("Please sign with Passkey...");

      const signature = await signAndSendTransaction({
        instructions: [instruction],
      });

      setTxSignature(signature);
      setStatus("Success!");
      setAmount("");
    } catch (err: any) {
      console.error(err);
      let errorMessage = err.message || "Unknown error";
      if (errorMessage.includes("Custom:1") || errorMessage.includes("0x1")) {
        errorMessage =
          "Insufficient funds. Please fund your wallet with Devnet SOL first.";
      }
      setStatus("Failed: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 fire-shadow">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Send SOL
        </h3>
        <p className="text-sm text-zinc-500 mt-1">
          Gas fees are sponsored (free).
        </p>
      </div>

      <form onSubmit={handleSend} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Recipient
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Solana Address"
            className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all font-mono text-sm placeholder:text-zinc-700"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
            Amount (SOL)
          </label>
          <input
            type="number"
            step="0.000000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white transition-all font-mono text-lg placeholder:text-zinc-700"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white cursor-pointer text-black hover:bg-zinc-200 font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            "Confirm Transfer"
          )}
        </button>
      </form>

      {status && (
        <div
          className={`mt-6 p-4 rounded-xl text-sm font-medium ${
            status.includes("Success")
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : status.includes("Failed")
              ? "bg-red-500/10 text-red-400 border border-red-500/20"
              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
          }`}
        >
          {status}
          {txSignature && (
            <div className="mt-2">
              <a
                href={`https://explorer.solana.com/tx/${txSignature}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-300"
              >
                View on Explorer
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
