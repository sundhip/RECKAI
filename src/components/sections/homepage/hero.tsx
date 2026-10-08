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
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52rem] h-[26rem] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container className="space-y-16 lg:space-y-24">
        {/* Top Copy Block */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn delayMs={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/90 bg-violet-50/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/50 dark:text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
              <span>INDEPENDENT PRODUCT STUDIO & LAB</span>
            </div>
          </FadeIn>

          <SlideUp delayMs={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tightest text-slate-950 dark:text-white leading-[1.03]">
              Think it. <br className="hidden sm:inline" />
              Build it. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
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
          <div className="rounded-3xl border border-neutral-200/90 bg-white/95 p-3 sm:p-5 shadow-floating backdrop-blur-md dark:border-neutral-800 dark:bg-[#111116]/95">
            {/* Window Chrome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-2 border-b border-neutral-200/80 dark:border-neutral-800 gap-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-mono text-neutral-500 hidden sm:inline">
                  reckai-platform // {activeTab}.reckai.app
                </span>
              </div>

              {/* Product Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-white text-violet-700 shadow-sm dark:bg-neutral-800 dark:text-violet-300 font-bold"
                        : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner Project Viewport */}
            <div className="relative mt-4 rounded-2xl bg-[#FBFBFD] p-5 sm:p-8 border border-neutral-200/80 dark:bg-[#0A0A0C] dark:border-neutral-800 space-y-6">
              {/* Product Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="violet" className="text-[10px] font-mono font-bold tracking-wider">
                      {current.badge}
                    </Badge>
                    <span className="text-xs font-mono text-neutral-500">
                      {current.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mt-1.5">
                    {current.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 mt-0.5">
                    {current.tagline}
                  </p>
                </div>
                <Link href={`/work/originals/${current.slug}`}>
                  <Button variant="outline" size="sm" arrow="right">
                    View Full Case Study
                  </Button>
                </Link>
              </div>

              {/* Real Project Screenshot Feature Mockup */}
              <div className="overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-950 shadow-medium dark:border-neutral-800 group relative">
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={current.image}
                    alt={`${current.name} actual platform screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[11px] bg-neutral-950/80 backdrop-blur px-2.5 py-1 rounded border border-neutral-700/60">
                    Active Production Interface
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/80 backdrop-blur px-2.5 py-1 rounded border border-emerald-800/60">
                    ● System Online
                  </span>
                </div>
              </div>

              {/* Feature Grid Directly From Current Project */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {current.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-neutral-200/80 bg-white p-4.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70 space-y-1.5"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {feat.subtitle}
                    </div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      {feat.title}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-violet-600 dark:text-violet-400 font-medium">
                      {feat.meta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Runtime Meta */}
              <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                <span>Verified RECKAI Production Deployment</span>
                <span className="text-violet-600 dark:text-violet-400 font-medium">
                  {current.name} — High Performance System
                </span>
              </div>
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
