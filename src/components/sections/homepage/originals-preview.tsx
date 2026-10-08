"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OriginalProductCard } from "@/components/products/original-card";
import { OriginalProduct } from "@/types/product";
import { trackEvent } from "@/lib/analytics/events";

export function OriginalsPreview({ originals }: { originals: OriginalProduct[] }) {
  const featured = originals.find((p) => p.slug === "omnixperience") || originals[0];
  const others = originals.filter((p) => p.id !== featured?.id);

  return (
    <section className="py-20 sm:py-28">
      <Container className="space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-8 dark:border-neutral-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              RECKAI ORIGINALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Products born from problems we believe are worth solving.
            </h2>
          </div>
          <Link
            href="/work/originals"
            onClick={() => trackEvent("original_product_click", { action: "view_all" })}
          >
            <Button variant="ghost" size="sm" arrow="right">
              View All Originals ({originals.length})
            </Button>
          </Link>
        </div>

        {/* Editorial Product Layout: Large Feature + Secondary Grid */}
        <div className="space-y-8">
          {/* Featured Large Hero Card */}
          {featured && (
            <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-neutral-50/50 p-8 sm:p-12 shadow-medium dark:border-violet-900/40 dark:from-reckai-dark-surface dark:to-reckai-dark">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="violet" className="font-mono text-[10px] tracking-widest font-bold">
                      FLAGSHIP ORIGINAL
                    </Badge>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {featured.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
                    {featured.name}
                  </h3>

                  <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                    {featured.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Core Intelligence Modules
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featured.aiCapabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-lg bg-white border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:bg-neutral-850 dark:border-neutral-750 dark:text-neutral-200 shadow-sm"
                        >
                          ✦ {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/work/originals/${featured.slug}`}
                      onClick={() =>
                        trackEvent("original_product_click", { slug: featured.slug })
                      }
                    >
                      <Button variant="primary" size="md" arrow="right">
                        Explore {featured.name} Architecture
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Side Visual Live Product Screenshot Showcase */}
                <div className="lg:col-span-5 relative group">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-floating dark:border-neutral-800 transition-all duration-300">
                    {/* Window Chrome Header */}
                    <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-900/90 px-3.5 py-2">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {featured.slug}.reckai.app // live
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                        ● OPERATIONAL
                      </span>
                    </div>

                    {/* Real Screenshot */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <img
                        src={featured.images?.[0] || "/images/projects/omnipresence.png"}
                        alt={`${featured.name} application preview`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <span className="font-semibold drop-shadow">{featured.name}</span>
                        <span className="text-[10px] font-mono bg-violet-600/90 px-2 py-0.5 rounded backdrop-blur">
                          Active System
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((product) => (
              <OriginalProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
