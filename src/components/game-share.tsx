"use client";

import { useState } from "react";

export function GameShare({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    await navigator.clipboard.writeText(`${text}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyText}
      title={copied ? "Копирано!" : "Копирај резултат"}
      className={`flex flex-shrink-0 items-center gap-1.5 rounded-lg p-2.5 transition-colors ${
        copied
          ? "bg-green-500/10 text-green-500"
          : "border border-white/10 bg-white/5 text-white/30 hover:text-white/70"
      }`}
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs font-medium">Копирано!</span>
        </>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )}
    </button>
  );
}
