"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics/events";
import { FadeIn, SlideUp } from "@/components/motion/motion-primitives";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"omnixperience" | "evolveaura" | "organxcell">("omnixperience");

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pb-40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[24rem] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="space-y-16 lg:space-y-24">
        {/* Top Copy Block */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn delayMs={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/40 dark:text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span>RECKON + AI</span>
            </div>
          </FadeIn>

          <SlideUp delayMs={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tightest text-neutral-950 dark:text-white leading-[1.03]">
              Think it. <br className="hidden sm:inline" />
              Build it. <br className="hidden sm:inline" />
              <span className="text-violet-600 dark:text-violet-400">
                Make it intelligent.
              </span>
            </h1>
          </SlideUp>

          <SlideUp delayMs={300}>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              We design, engineer, and ship intelligent digital products. From solving complex technical challenges in-house to partnering with ambitious founders, we turn ambitious ideas into clean, production-ready software.
            </p>
          </SlideUp>

          <SlideUp delayMs={400}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/start-project"
                onClick={() => trackEvent("hero_start_project_click")}
              >
                <Button variant="primary" size="lg" arrow="up-right">
                  Start a Project
                </Button>
              </Link>

              <Link
                href="/work"
                onClick={() => trackEvent("hero_explore_work_click")}
              >
                <Button variant="outline" size="lg" arrow="right">
                  Explore Our Work
                </Button>
              </Link>
            </div>
          </SlideUp>
        </div>

        {/* Sophisticated Hero Visual: Real RECKAI Product Workstations */}
        <SlideUp delayMs={500} className="relative max-w-5xl mx-auto space-y-6">
          {/* Section Heading for Product Runtime Workstation */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/50 dark:text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE INTERACTIVE RUNTIME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Experience RECKAI Systems in Real Time
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              Interact with live architectural simulations of our flagship software. Select a product below to inspect real-time decision telemetry.
            </p>
          </div>

          {/* Workstation Container */}
          <div className="rounded-3xl border border-neutral-200/90 bg-neutral-50/80 p-3 sm:p-5 shadow-floating backdrop-blur-md dark:border-neutral-800 dark:bg-reckai-dark-surface/90">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-neutral-200/60 dark:border-neutral-800/80">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="ml-3 text-xs font-mono text-neutral-500 hidden sm:inline">
                  reckai-product-runtime // v2.6.4
                </span>
              </div>

              {/* Product Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-200/60 dark:bg-neutral-900">
                <button
                  type="button"
                  onClick={() => setActiveTab("omnixperience")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "omnixperience"
                      ? "bg-white text-violet-700 shadow-sm dark:bg-neutral-800 dark:text-violet-300"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  OmniXperience
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("evolveaura")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "evolveaura"
                      ? "bg-white text-violet-700 shadow-sm dark:bg-neutral-800 dark:text-violet-300"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  EvolveAura
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("organxcell")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "organxcell"
                      ? "bg-white text-violet-700 shadow-sm dark:bg-neutral-800 dark:text-violet-300"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  OrganXcell
                </button>
              </div>
            </div>

            {/* Inner Interactive Product Viewport */}
            <div className="relative mt-3 rounded-2xl bg-white p-6 sm:p-8 border border-neutral-200/70 dark:bg-reckai-dark dark:border-neutral-850 min-h-[380px] flex flex-col justify-between">
              {activeTab === "omnixperience" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-850 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="violet">RECKAI ORIGINAL</Badge>
                        <span className="text-xs font-mono text-neutral-400">Ecosystem Matrix</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mt-1">
                        OmniXperience Personal Intelligence
                      </h3>
                    </div>
                    <Link href="/work/originals/omnixperience">
                      <Button variant="ghost" size="sm" arrow="right">
                        Explore Full Architecture
                      </Button>
                    </Link>
                  </div>

                  {/* UI Telemetry Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Wardrobe Vision
                      </div>
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                        Context Styling
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Multimodal visual inference syncing with 18°C rainfall forecast.
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-violet-600 dark:text-violet-400">
                        <span>● Inferred Palette: Charcoal / Heather</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Schedule Coordination
                      </div>
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                        Adaptive Pacing
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Proactive 45m buffer inserted prior to technical architecture review.
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                        <span>✓ Energy Optimization: High</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Financial Engine
                      </div>
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                        Daily Liquidity Safe
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Predictive cashflow curves maintain 3.2x surplus safety threshold.
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-violet-600 dark:text-violet-400">
                        <span>● Predictive Confidence: 98.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "evolveaura" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-850 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="violet">RECKAI ORIGINAL</Badge>
                        <span className="text-xs font-mono text-neutral-400">Cognitive Wellbeing</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mt-1">
                        EvolveAura Habit & Detox Platform
                      </h3>
                    </div>
                    <Link href="/work/originals/evolveaura">
                      <Button variant="ghost" size="sm" arrow="right">
                        Explore Full Architecture
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Cognitive State Score
                      </div>
                      <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mt-1">
                        88 <span className="text-xs font-normal text-neutral-500">/ 100</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                        Psychometric score indicates sustained deep work readiness.
                      </p>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/60 sm:col-span-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        Dynamic Generated Daily Quests
                      </div>
                      <div className="mt-2.5 space-y-2">
                        <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white text-neutral-900 dark:bg-neutral-800/90 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <span className="font-semibold text-neutral-900 dark:text-neutral-100">1. Deep Code Architecture (90m uninterrupted)</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold bg-emerald-100/80 dark:bg-emerald-950/80 px-2 py-0.5 rounded">Active</span>
                        </div>
                        <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white text-neutral-900 dark:bg-neutral-800/90 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                          <span className="font-semibold text-neutral-900 dark:text-neutral-100">2. Evening Digital Detox Protocol (0 screens after 9pm)</span>
                          <span className="text-neutral-600 dark:text-neutral-400 font-mono text-[10px] font-medium bg-neutral-100 dark:bg-neutral-700/60 px-2 py-0.5 rounded">Scheduled</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "organxcell" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-850 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="violet">RECKAI ORIGINAL</Badge>
                        <span className="text-xs font-mono text-neutral-400">Clinical Logistics</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mt-1">
                        OrganXcell Allocation Engine
                      </h3>
                    </div>
                    <Link href="/work/originals/organxcell">
                      <Button variant="ghost" size="sm" arrow="right">
                        Explore Full Architecture
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Biological Match Matrix
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                        99.4%
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                        HLA 6-antigen compatibility verified without cross-reactive antibodies.
                      </p>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Cold Ischemia Transit
                      </div>
                      <div className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">
                        03:42:10
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                        Guaranteed arrival 4.2h within viable physiological threshold.
                      </p>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Audit Verification
                      </div>
                      <div className="text-xs font-mono text-violet-600 dark:text-violet-400 mt-2">
                        Hash: #8f042e9a...
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                        Immutable cryptographic clinical log recorded for compliance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Runtime Meta */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Autonomous Pipeline: Online</span>
                <span className="text-violet-600 dark:text-violet-400">RECKAI Core Intelligence Layer</span>
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
