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

                {/* Right Side Visual Telemetry Mock */}
                <div className="lg:col-span-5 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-subtle dark:border-neutral-800 dark:bg-neutral-900/60 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <span>LIVE RUNTIME</span>
                    <span className="text-emerald-500 font-bold">● ACTIVE</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850 text-xs space-y-1">
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        Wardrobe Computer Vision
                      </div>
                      <p className="text-neutral-500">
                        Contextual clothing classification and weather-adaptive styling loops.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850 text-xs space-y-1">
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        Circadian Schedule Buffer
                      </div>
                      <p className="text-neutral-500">
                        Calendar coordination with automated energy conservation zones.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-850 text-xs space-y-1">
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        Autonomous Liquidity Curve
                      </div>
                      <p className="text-neutral-500">
                        Predictive pacing engine alerting before discretionary commitments.
                      </p>
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
