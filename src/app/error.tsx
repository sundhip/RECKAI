"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error details to server / observability console
    // In production, digest contains the unique telemetry hash; stack traces and SQL are never shown to users
    console.error("[RECKAI Production Error Handler]:", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <div className="py-24 sm:py-36 relative overflow-hidden">
      <Container className="relative z-10 max-w-xl text-center space-y-8">
        <div className="space-y-3">
          <Badge variant="outline" className="font-mono text-xs text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50">
            SYSTEM NOTICE
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Something interrupted this process.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            An unexpected error occurred while processing this request. No sensitive data was exposed, and our engineering logs have recorded the occurrence.
          </p>
          {error.digest && (
            <div className="text-[11px] font-mono text-neutral-400">
              Reference code: <span className="text-neutral-600 dark:text-neutral-300">{error.digest}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="md" onClick={() => reset()}>
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="md">
              Return Home
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Think. Build. Impact.
          </span>
        </div>
      </Container>
    </div>
  );
}
