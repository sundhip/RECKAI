import React from "react";
import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <div className="py-20 sm:py-28 animate-pulse space-y-12">
      <Container className="space-y-6 max-w-4xl">
        {/* Badge skeleton */}
        <div className="h-5 w-28 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        
        {/* Heading skeleton */}
        <div className="space-y-3">
          <div className="h-12 w-3/4 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-12 w-1/2 rounded-2xl bg-neutral-200/70 dark:bg-neutral-850" />
        </div>

        {/* Subtitle skeleton */}
        <div className="space-y-2 pt-2">
          <div className="h-4 w-full max-w-xl rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60" />
          <div className="h-4 w-4/5 max-w-lg rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60" />
        </div>
      </Container>

      {/* Grid cards skeleton */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200/60 bg-neutral-50/50 p-8 dark:border-neutral-800 dark:bg-neutral-900/30 space-y-4"
            >
              <div className="h-4 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-6 w-3/4 rounded-lg bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-2 pt-2">
                <div className="h-3 w-full rounded bg-neutral-200/60 dark:bg-neutral-800/60" />
                <div className="h-3 w-5/6 rounded bg-neutral-200/60 dark:bg-neutral-800/60" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
