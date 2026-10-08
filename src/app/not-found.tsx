import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 blur-[130px] pointer-events-none rounded-full" />

      <Container className="relative z-10 max-w-2xl text-center space-y-8">
        <div className="space-y-3">
          <Badge variant="violet" className="font-mono text-xs uppercase tracking-widest">
            404 — UNEXPLORED ROUTE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-lg mx-auto">
            Looks like you&apos;ve reached somewhere RECKAI hasn&apos;t built yet.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button variant="primary" size="lg" arrow="right">
              Back to RECKAI
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" size="lg" arrow="right">
              Explore Our Work
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
