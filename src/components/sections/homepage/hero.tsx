"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics/events";
import { FadeIn, SlideUp } from "@/components/motion/motion-primitives";

type TabId = "prosperhigh" | "omnipresence" | "evolveaura" | "organxcell";

export function Hero() {
  const [activeTab, setActiveTab] = useState<TabId>("prosperhigh");

  const projectDetails: Record<
    TabId,
    {
      name: string;
      badge: string;
      category: string;
      tagline: string;
      slug: string;
      image: string;
      features: { title: string; subtitle: string; desc: string; meta: string }[];
    }
  > = {
    prosperhigh: {
      name: "ProsperHigh",
      badge: "DECISION INTELLIGENCE v3.0",
      category: "Multi-Agent Investment Intelligence",
      tagline: "Understand Your Investments. Understand Why.",
      slug: "prosperhigh",
      image: "/images/projects/prosperhigh.png",
      features: [
        {
          title: "7 Domain Intelligence Agents",
          subtitle: "Independent Analysis",
          desc: "Market, Technical, News, Fundamental, Regulatory, Risk, and Synthesis agents evaluate stocks independently before reaching a decision.",
          meta: "● Model-Agnostic Multi-Agent Architecture",
        },
        {
          title: "Personalized Risk Engine",
          subtitle: "Tailored Calibration",
          desc: "Your investor risk profile (0–100 score), goals, and existing holdings determine suitability—producing unique recommendations for each investor.",
          meta: "✓ Risk-Calibrated Suitability Curve",
        },
        {
          title: "Citation-Backed Research (RAG)",
          subtitle: "Verifiable Disclosures",
          desc: "Every AI conclusion traces directly to verified source documents—annual reports, exchange filings, and corporate disclosures with page citations.",
          meta: "● Source-Verified Evidence Trace",
        },
      ],
    },
    omnipresence: {
      name: "OmniPresence",
      badge: "OP AI PLATFORM",
      category: "Personal Intelligence Platform",
      tagline: "Your Everyday Life, Intelligently Unified.",
      slug: "omnipresence",
      image: "/images/projects/omnipresence.png",
      features: [
        {
          title: "Digital Wardrobe & Wear Tracking",
          subtitle: "Real Closet Ingestion",
          desc: "Catalog every piece with colors, seasons, and fit. Track wear counts and timestamped event history with one-click logging.",
          meta: "● Real-Time Garment Telemetry",
        },
        {
          title: "OP AI Outfit Recommendation",
          subtitle: "Contextual Styling",
          desc: "Multi-factor intelligence combining occasion fit, personal style affinities, color harmony, and wear rotation balancing.",
          meta: "✓ Multi-Factor Occasion Matching",
        },
        {
          title: "Interactive Outfit Planning",
          subtitle: "Visual Scheduling",
          desc: "Compose complete looks from real wardrobe items, schedule planned dates on your calendar, and log entire outfits with a single tap.",
          meta: "● 1-Tap Calendar Coordination",
        },
      ],
    },
    evolveaura: {
      name: "EvolveAura",
      badge: "DIGITAL DETOX & HABITS",
      category: "Behavioral Digital Detox",
      tagline: "Redirect Your Dopamine. Level Up in Real Life.",
      slug: "evolveaura",
      image: "/images/projects/evolveaura.png",
      features: [
        {
          title: "The 4 Core Archetypes",
          subtitle: "Psychology-Driven Paths",
          desc: "Choose your active daily path: Scholar (Deep Focus & Recall), Warrior (Discipline & Energy), Sage (Mindfulness), Creator (Curiosity & Flow).",
          meta: "● Dynamic Archetypal Calibration",
        },
        {
          title: "Dynamic Generated Daily Quests",
          subtitle: "Adaptive Task Engine",
          desc: "Replaces endless to-do lists with 3 calibrated, achievable daily quests that dynamically scale to your current cognitive capacity.",
          meta: "✓ Non-Punitive Streak Tracking",
        },
        {
          title: "Attention Detox Index",
          subtitle: "Dopamine Loop Disruption",
          desc: "Replaces addictive short-form video loops with real-world habit mastery, measuring screen-free intervals and cognitive recovery.",
          meta: "● Sustained Deep-Work Focus Score",
        },
      ],
    },
    organxcell: {
      name: "OrganXcell",
      badge: "SIH 2025 · 20 HOSPITALS ONLINE",
      category: "Clinical Allocation Network",
      tagline: "Making Every Match Count — India's Organ Donation Network",
      slug: "organxcell",
      image: "/images/projects/organxcell.png",
      features: [
        {
          title: "Deterministic HLA Matching",
          subtitle: "6-Antigen Biology Matrix",
          desc: "AI-powered clinical cross-matching computing biological compatibility, urgency rankings, and cross-match verification in milliseconds.",
          meta: "● 98.7% Match Success Rate",
        },
        {
          title: "Live Logistics & Transit Tracker",
          subtitle: "Cold Ischemia Clock",
          desc: "Real-time air ambulance and ground transit tracking ensuring organ transport strictly within physiological viability thresholds.",
          meta: "✓ Automated Route Pacing & Medevac Sync",
        },
        {
          title: "Verified Registry Scale",
          subtitle: "Nationwide Coordination",
          desc: "Direct integration across 20+ participating hospital networks with 2,154 lives saved, 11,612 donors, and 7,027 matched recipients.",
          meta: "● Cryptographic Clinical Audit Trail",
        },
      ],
    },
  };

  const current = projectDetails[activeTab];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pb-40">
      {/* Background ambient lighting and subtle engineering grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[28rem] bg-gradient-to-tr from-violet-500/15 via-indigo-500/10 to-purple-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-50 dark:opacity-20" />

      <Container className="space-y-16 lg:space-y-24 relative">
        {/* Top Copy Block */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn delayMs={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/90 bg-gradient-to-r from-violet-50 via-white to-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/50 dark:text-violet-300 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
              <span>INDEPENDENT PRODUCT STUDIO & LAB</span>
            </div>
          </FadeIn>

          <SlideUp delayMs={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tightest leading-[1.02]">
              <span className="text-slate-950 dark:text-white">Think it. </span>
              <br className="hidden sm:inline" />
              <span className="text-slate-950 dark:text-white">Build it. </span>
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
                Make it intelligent.
              </span>
            </h1>
          </SlideUp>

          <SlideUp delayMs={300}>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              RECKAI creates and engineers intelligent software products. We build our own proprietary platforms from scratch and partner with founders to turn ambitious problems into production systems.
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
                  Explore All Products
                </Button>
              </Link>
            </div>
          </SlideUp>
        </div>

        {/* Real Projects Workstation Showcase */}
        <SlideUp delayMs={500} className="relative max-w-5xl mx-auto space-y-6">
          {/* Section Heading for Product Runtime Workstation */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/90 bg-violet-50/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/50 dark:text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE PRODUCT SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Explore Our Live Software Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-400 max-w-xl mx-auto">
              Select any of our flagship platforms below to inspect the real interface and architecture.
            </p>
          </div>

          {/* Workstation Container */}
          <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-xl dark:border-neutral-800 dark:bg-reckai-dark-surface dark:shadow-none">
            {/* Window Chrome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-1 border-b border-slate-200/80 dark:border-neutral-800 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-2xs" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-2xs" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-2xs" />
                </div>
                <span className="ml-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-neutral-400 hidden sm:inline">
                  reckai-platform // {activeTab}.reckai.app
                </span>
              </div>

              {/* Product Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100/90 dark:bg-neutral-900 border border-slate-200/80 dark:border-neutral-800">
                {(
                  [
                    { id: "prosperhigh", label: "ProsperHigh" },
                    { id: "omnipresence", label: "OmniPresence" },
                    { id: "evolveaura", label: "EvolveAura" },
                    { id: "organxcell", label: "OrganXcell" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md scale-[1.02] dark:bg-none dark:bg-neutral-800 dark:text-violet-300 dark:shadow-none"
                        : "text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white hover:bg-white/80 dark:hover:bg-neutral-800/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Project Viewport */}
            <div className="relative mt-4 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/60 p-5 sm:p-7 border border-slate-200/80 dark:bg-[#0A0A0C] dark:border-neutral-800 space-y-6">
              {/* Product Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-neutral-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="violet" className="text-xs font-mono font-bold tracking-wider">
                      {current.badge}
                    </Badge>
                    <span className="text-xs sm:text-sm font-mono text-slate-700 dark:text-neutral-300 font-medium">
                      {current.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white mt-1.5">
                    {current.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-neutral-300 font-medium mt-1">
                    {current.tagline}
                  </p>
                </div>
                <Link href={`/work/originals/${current.slug}`}>
                  <Button variant="outline" size="sm" arrow="right">
                    View Full Case Study
                  </Button>
                </Link>
              </div>

              {/* Real Project Screenshot in a Realistic Desktop Browser Frame */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-xl dark:border-neutral-800 dark:bg-[#0A0A0C] group">
                {/* Browser Top Navigation Chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/95 dark:bg-neutral-900 border-b border-slate-200/80 dark:border-neutral-800">
                  {/* Traffic Light Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-2xs" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-2xs" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-2xs" />
                  </div>

                  {/* Sleek Centered URL Address Pill */}
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-slate-200/80 dark:border-neutral-700/80 text-xs sm:text-sm font-mono text-slate-800 dark:text-neutral-200 shadow-2xs max-w-xs sm:max-w-md w-full justify-center">
                    <svg className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate">https://{current.slug}.reckai.app</span>
                  </div>

                  {/* Right Status Indicator */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="hidden sm:inline">LIVE RUNTIME</span>
                  </div>
                </div>

                {/* Screenshot Display - Pristine, Uncut, Uncovered */}
                <div className="w-full overflow-hidden bg-slate-950 dark:bg-[#0A0A0C] flex items-center justify-center p-0.5 sm:p-1">
                  <img
                    src={current.image}
                    alt={`${current.name} actual interface screenshot`}
                    className="w-full h-auto max-h-[540px] object-contain rounded-b-xl transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Feature Grid Directly From Current Project - Symmetrical, Balanced Heights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 items-stretch pt-1">
                {current.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-sm dark:border-neutral-800 dark:bg-reckai-dark-surface hover:border-violet-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 px-2.5 py-1 rounded border border-violet-200/60 dark:border-violet-800/40">
                          {feat.subtitle}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-500 dark:text-neutral-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mt-2">
                        {feat.title}
                      </h4>
                      <p className="text-sm sm:text-[15px] text-slate-700 dark:text-neutral-200 leading-relaxed mt-2.5 font-normal">
                        {feat.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-neutral-800 text-xs sm:text-sm font-mono text-violet-700 dark:text-violet-400 font-semibold flex items-center gap-1.5">
                      <span>{feat.meta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Runtime Meta */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono text-slate-700 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Verified RECKAI Production Deployment · Architecture v3.4</span>
                </div>
                <Link
                  href={`/work/originals/${current.slug}`}
                  className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-semibold flex items-center gap-1 group text-xs sm:text-sm"
                >
                  <span>{current.name} Technical Case Study</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
