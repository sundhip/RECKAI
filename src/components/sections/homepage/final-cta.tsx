"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/events";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-36 text-white border-t border-neutral-850">
      {/* Subtle Violet Ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[24rem] bg-violet-600/15 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl space-y-10">
        <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 font-semibold">
          NEXT STEP
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1.05] text-white">
          Have something <br className="hidden sm:inline" />
          worth building?
        </h2>

        <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Tell us what you&apos;re thinking. Let&apos;s reckon it through.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/start-project"
            onClick={() => trackEvent("final_cta_click", { action: "start_project" })}
          >
            <Button variant="primary" size="lg" arrow="up-right">
              Start a Project
            </Button>
          </Link>

          <Link
            href="/work/originals"
            onClick={() => trackEvent("final_cta_click", { action: "explore_products" })}
          >
            <Button
              variant="ghost"
              size="lg"
              className="text-neutral-300 hover:text-white"
              arrow="right"
            >
              Explore Our Products
            </Button>
          </Link>
        </div>

        <div className="pt-8 text-xs font-mono text-neutral-500">
          No commitment required • Direct technical discovery
        </div>
      </Container>
    </section>
  );
}
