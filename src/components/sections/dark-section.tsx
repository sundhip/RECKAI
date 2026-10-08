import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export interface DarkStorytellingProps {
  eyebrow?: string;
  headline?: string;
  manifesto?: string;
  supportingText?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function DarkStorytellingSection({
  eyebrow = "CORE PHILOSOPHY",
  headline = "THINK DEEPER. BUILD SMARTER.",
  manifesto = "RECKAI combines product thinking, engineering, and artificial intelligence to create digital products that solve genuine human and business friction.",
  supportingText = "From problems we discover to ideas others bring us, we turn possibilities into products.",
  ctaText = "Start a Project",
  ctaHref = "/start-project",
  secondaryCtaText = "Explore Our Products",
  secondaryCtaHref = "/work/originals",
  className,
}: DarkStorytellingProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-neutral-950 py-24 sm:py-36 text-white border-y border-neutral-850",
        className
      )}
    >
      {/* Restrained Violet Ambiance */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[24rem] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-900/10 blur-[100px] rounded-full pointer-events-none" />

      <Container variant="standard" className="relative z-10 text-center max-w-4xl space-y-10">
        {eyebrow && (
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 font-semibold">
            {eyebrow}
          </span>
        )}

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1.05] text-white">
          {headline}
        </h2>

        <p className="text-xl sm:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto">
          {manifesto}
        </p>

        {supportingText && (
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto font-mono">
            {supportingText}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {ctaText && ctaHref && (
            <Link href={ctaHref}>
              <Button variant="primary" size="lg" arrow="up-right">
                {ctaText}
              </Button>
            </Link>
          )}

          {secondaryCtaText && secondaryCtaHref && (
            <Link href={secondaryCtaHref}>
              <Button variant="ghost" size="lg" className="text-neutral-300 hover:text-white" arrow="right">
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
