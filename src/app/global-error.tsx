"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[RECKAI Global Root Error]:", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-violet-950/60 text-violet-400 border border-violet-800/50">
            CRITICAL APPLICATION NOTICE
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            System initialization interrupted.
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed">
            The application encountered an unexpected initialization failure. Please reload the interface or return to the main entry point.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="px-5 py-2.5 rounded-full bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700 transition-colors"
            >
              Retry Session
            </button>
            <a
              href="/"
              className="px-5 py-2.5 rounded-full border border-neutral-800 text-white text-xs font-semibold hover:bg-neutral-900 transition-colors"
            >
              Return Home
            </a>
          </div>
          <div className="pt-6 border-t border-neutral-900 text-xs font-mono text-neutral-600">
            RECKAI — Think. Build. Impact.
          </div>
        </div>
      </body>
    </html>
  );
}
