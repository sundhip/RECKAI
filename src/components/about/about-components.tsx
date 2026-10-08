"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  RECKON_PHILOSOPHY_PILLARS,
  COMPANY_PRINCIPLES,
  CULTURE_PRINCIPLES,
  RESPONSIBLE_AI_PILLARS,
  PROOF_CHAIN,
} from "@/data/about/about-data";
import { RECKAI_ORIGINALS } from "@/data/products/originals";

/* -------------------------------------------------------------------------
   1. AboutHero
   ------------------------------------------------------------------------- */
export function AboutHero() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="violet" className="text-xs font-mono tracking-widest uppercase">
            COMPANY & PHILOSOPHY
          </Badge>
          <span className="text-xs font-mono text-neutral-400">
            EST. 2026 • RECKON + AI
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
          We reckon with problems worth solving.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-3xl">
          RECKAI is an AI-powered product company building intelligent digital products — our own products and products we build with others.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link href="/work">
          <Button variant="primary" size="lg" arrow="right">
            Explore Our Work
          </Button>
        </Link>
        <Link href="/start-project">
          <Button variant="outline" size="lg" arrow="up-right">
            Start a Project
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   2. ReckaiSignatureVisual (Interactive Word Transition)
   ------------------------------------------------------------------------- */
export function ReckaiSignatureVisual() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const transitions = [
    {
      label: "ETYMOLOGY",
      primary: "RECKON",
      sub: "Thinking, reasoning, evaluating, questioning, solving.",
    },
    {
      label: "SYNTHESIS",
      primary: "RECKAI",
      sub: "RECKON + AI: Deep human reasoning meets machine intelligence.",
    },
    {
      label: "CREED",
      primary: "THINK. BUILD. IMPACT.",
      sub: "Deliberate intellect. Type-safe craft. Real-world utility.",
    },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-xl space-y-8">
      {/* Subtle background glow */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-violet-600/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6 relative z-10">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 font-bold block mb-1">
            Identity Origin
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            The Anatomy of RECKAI
          </h2>
        </div>
        <div className="flex gap-2">
          {transitions.map((item, idx) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeStage === idx
                  ? "bg-violet-600 text-white shadow-sm"
                  : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 py-4 relative z-10">
        <div className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-mono">
          {transitions[activeStage].primary}
        </div>
        <p className="text-sm sm:text-base text-neutral-400 font-mono max-w-2xl leading-relaxed">
          {transitions[activeStage].sub}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   3. CompanyStatement
   ------------------------------------------------------------------------- */
export function CompanyStatement() {
  return (
    <div className="space-y-6 max-w-4xl">
      <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-bold">
        Company Statement
      </span>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.12]">
        &ldquo;We believe technology is most useful when it solves something real.&rdquo;
      </h2>
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
        RECKAI exists to identify meaningful problems, reason through them with clarity, and turn good ideas into products people can actually use every day. We avoid vanity metrics and inflated claims—focusing entirely on verified utility and solid engineering.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------
   4. WhatIsReckAI (3 Connected Cards)
   ------------------------------------------------------------------------- */
export function WhatIsReckAI() {
  const cards = [
    {
      badge: "RECKAI ORIGINALS",
      title: "Product Company",
      desc: "We imagine and build products of our own. Born from problems we observe in daily life, operations, and technical workflows.",
      accent: "border-violet-500/30",
    },
    {
      badge: "RECKAI BUILDS",
      title: "Build Partner",
      desc: "We help founders, organizations, and businesses turn ideas and complex domain problems into working, shippable software systems.",
      accent: "border-neutral-200/80 dark:border-neutral-800",
    },
    {
      badge: "PURPOSEFUL AI",
      title: "Intelligence Company",
      desc: "We embed artificial intelligence where machine reasoning, neural perception, and automation make software genuinely more useful.",
      accent: "border-neutral-200/80 dark:border-neutral-800",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
          Three Dimensions
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          What RECKAI Is
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`rounded-3xl border ${c.accent} bg-white p-8 dark:bg-neutral-900/60 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <Badge variant="violet" className="text-[10px] font-mono tracking-wider">
                {c.badge}
              </Badge>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                {c.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   5. OriginalsBuildsSplit (Major Split Section)
   ------------------------------------------------------------------------- */
export function OriginalsBuildsSplit() {
  const originalsChain = ["WE FIND THE PROBLEM", "WE RECKON", "WE BUILD", "WE OWN", "WE EVOLVE"];
  const buildsChain = ["YOU BRING THE PROBLEM", "WE RECKON TOGETHER", "WE BUILD", "WE SHIP", "WE IMPROVE"];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/50 p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-10">
      <div className="space-y-2 max-w-2xl">
        <Badge variant="outline" className="text-xs font-mono">
          DUAL OPERATIONAL ENGINE
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Two ways to build.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Whether self-directed or in close collaboration with partners, the same rigorous standard applies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Originals */}
        <div className="rounded-2xl border border-violet-200/80 bg-white p-8 dark:border-violet-900/40 dark:bg-neutral-950 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                01 / RECKAI ORIGINALS
              </span>
              <span className="text-xs font-mono text-neutral-400">Proprietary</span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Self-Directed Software
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We identify problems we believe are worth solving and build products around them. We own the codebase, test new paradigms, and continuously iterate.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block">
                Execution Pathway:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {originalsChain.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
                      {step}
                    </span>
                    {idx < originalsChain.length - 1 && (
                      <span className="text-neutral-400 font-bold">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <Link href="/work/originals">
              <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
                <span>Explore Originals</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Builds */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-neutral-950 dark:text-white">
                02 / RECKAI BUILDS
              </span>
              <span className="text-xs font-mono text-neutral-400">Co-Engineered</span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Partner Engineering
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We work with founders, organizations, and businesses to turn ideas and complex requirements into intelligent products with committed milestones and transparent architecture.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold block">
                Execution Pathway:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {buildsChain.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
                      {step}
                    </span>
                    {idx < buildsChain.length - 1 && (
                      <span className="text-neutral-400 font-bold">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <Link href="/work/builds">
              <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
                <span>Explore Builds</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   6. WhyReckAI
   ------------------------------------------------------------------------- */
export function WhyReckAI() {
  const steps = [
    { label: "WHAT", desc: "Isolate the actual problem" },
    { label: "WHY", desc: "Validate commercial/human necessity" },
    { label: "HOW", desc: "Architect modular, type-safe systems" },
    { label: "WHEN", desc: "Sequence sprints for fast validation" },
    { label: "WHY AI", desc: "Verify computational necessity" },
    { label: "WHAT NEXT", desc: "Measure live telemetry & compound" },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-8">
      <div className="space-y-4 max-w-3xl">
        <Badge variant="violet" className="text-xs font-mono">
          FOUNDATIONAL PURPOSE
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          Because building software isn&apos;t the hard part.
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The harder part is knowing what should be built, why it matters, how it should work, and where intelligence actually belongs. Anyone can scaffold boilerplate; deliberate product formulation is rare.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
        {steps.map((st, i) => (
          <div
            key={st.label}
            className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-4 dark:border-neutral-800 dark:bg-neutral-950 space-y-1.5 text-center"
          >
            <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
              0{i + 1}
            </div>
            <div className="text-base font-extrabold text-neutral-950 dark:text-white font-mono">
              {st.label}
            </div>
            <div className="text-[11px] text-neutral-500 leading-tight">
              {st.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <Link href="/process">
          <Button variant="outline" size="sm" arrow="right">
            See How We Work
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   7. ReckonPhilosophy (5 Core Pillars)
   ------------------------------------------------------------------------- */
export function ReckonPhilosophy() {
  return (
    <div className="space-y-8">
      <div className="space-y-3 max-w-3xl">
        <Badge variant="outline" className="text-xs font-mono">
          THE RECKON PHILOSOPHY
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Reckon before you build.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          We don&apos;t treat requirements as unquestionable instructions. We ask questions, challenge assumptions, explore alternatives, and make decisions deliberately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {RECKON_PHILOSOPHY_PILLARS.map((p, i) => (
          <div
            key={p.name}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-mono">
                {p.name}
              </h3>
              <p className="text-xs font-medium text-neutral-900 dark:text-neutral-200 leading-relaxed">
                {p.tagline}
              </p>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed pt-2 border-t border-neutral-100 dark:border-neutral-800">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   8. PrinciplesGrid (6 Principles)
   ------------------------------------------------------------------------- */
export function PrinciplesGrid() {
  return (
    <div className="space-y-8">
      <div className="space-y-3 max-w-2xl">
        <Badge variant="outline" className="text-xs font-mono">
          CORE OPERATING PRINCIPLES
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Guiding every commit and decision.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Principles that remain constant across all our engineering lifecycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPANY_PRINCIPLES.map((pr) => (
          <Card key={pr.number} className="flex flex-col justify-between hover:border-violet-300 dark:hover:border-violet-800 transition-colors">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                  {pr.number}
                </span>
                <span className="text-[10px] font-mono uppercase text-neutral-400">
                  PRINCIPLE
                </span>
              </div>
              <CardTitle className="text-xl">
                {pr.title}
              </CardTitle>
              <div className="text-xs font-mono text-neutral-500 italic">
                &ldquo;{pr.quote}&rdquo;
              </div>
              <CardDescription className="text-xs leading-relaxed pt-2">
                {pr.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   9. HumanCenteredSection
   ------------------------------------------------------------------------- */
export function HumanCenteredSection() {
  const points = [
    { title: "Usability & Clarity", desc: "Intuitive workflows with zero cognitive clutter. Software that respects attention." },
    { title: "Accessibility (a11y)", desc: "WCAG-conscious semantic hierarchy, keyboard navigability, and rigorous contrast compliance." },
    { title: "Reliability & Uptime", desc: "Dependable, typed systems with continuous monitoring, error recovery, and zero silent data loss." },
    { title: "Human Agency", desc: "AI that augments discernment rather than replacing human autonomy with black boxes." },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-8">
      <div className="space-y-3 max-w-3xl">
        <Badge variant="outline" className="text-xs font-mono">
          HUMAN-CENTERED SYSTEMS
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Technology is only useful when people can use it.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The most sophisticated neural network or cloud cluster is worthless if the interface is baffling, inaccessible, or untrustworthy. We anchor all technical decisions in verified human utility.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {points.map((pt) => (
          <div
            key={pt.title}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 space-y-2 shadow-sm"
          >
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {pt.title}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {pt.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   10. ResponsibleAI
   ------------------------------------------------------------------------- */
export function ResponsibleAI() {
  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/20 p-8 sm:p-14 dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-8">
      <div className="space-y-3 max-w-3xl">
        <Badge variant="violet" className="text-xs font-mono">
          SAFETY & ETHICS
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Intelligence needs responsibility.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          We take a disciplined, sober approach to machine learning. We do not claim medical or legal omniscience, nor do we invent certifications. We build secure, verifiable boundaries around non-deterministic systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESPONSIBLE_AI_PILLARS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/80 space-y-2"
          >
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   11. PortfolioPreview (Actual RECKAI Originals)
   ------------------------------------------------------------------------- */
export function PortfolioPreview() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <Badge variant="violet" className="text-xs font-mono">
            PROPRIETARY ECOSYSTEM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            RECKAI Originals
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Software products we conceived, designed, engineered, and continuously evolve.
          </p>
        </div>
        <Link href="/work/originals">
          <Button variant="outline" size="sm" arrow="right">
            Explore All Originals
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RECKAI_ORIGINALS.map((prod) => (
          <div
            key={prod.slug}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-4 flex flex-col justify-between hover:border-violet-300 dark:hover:border-violet-800 transition-colors"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-violet-600 dark:text-violet-400 font-bold uppercase">
                RECKAI ORIGINAL
              </span>
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                {prod.name}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {prod.tagline}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Link
                href={`/work/originals/${prod.slug}`}
                className="text-xs font-mono text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Explore</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   12. BuildsPreview (Respecting Confidentiality)
   ------------------------------------------------------------------------- */
export function BuildsPreview() {
  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <Badge variant="outline" className="text-xs font-mono">
            PARTNER WORK & DISCLOSURE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            RECKAI Builds
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Some of the products we build are private. What we can share is only part of the work. We honor partner non-disclosure agreements strictly and never invent fictitious public client logos.
          </p>
        </div>
        <Link href="/work/builds" className="shrink-0">
          <Button variant="primary" size="md" arrow="right">
            Explore Builds
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   13. FutureDirection (Where We're Going)
   ------------------------------------------------------------------------- */
export function FutureDirection() {
  return (
    <div className="space-y-6 max-w-3xl">
      <Badge variant="violet" className="text-xs font-mono">
        WHERE WE&apos;RE GOING
      </Badge>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
        Build better things.
      </h2>
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
        We&apos;re building RECKAI into a company that can discover problems, create products, build intelligent systems, and continuously improve them over years. We measure ourselves not by speculative headcount expansion, but by the tangible leverage our software provides to the people who rely on it.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------
   14. CultureSection (How We Work)
   ------------------------------------------------------------------------- */
export function CultureSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3 max-w-2xl">
        <Badge variant="outline" className="text-xs font-mono">
          INTERNAL CULTURE
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          How we work.
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          No corporate theatre. No empty buzzwords. A direct culture rooted in intellectual honesty and rigorous execution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CULTURE_PRINCIPLES.map((c) => (
          <div
            key={c.keyword}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-2"
          >
            <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
              {c.keyword}
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {c.headline}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   15. TrustSection & ProofSystem
   ------------------------------------------------------------------------- */
export function TrustSection() {
  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-950 text-white p-8 sm:p-14 space-y-10">
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
          EVIDENCE-BASED CREDIBILITY
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Trust earned through demonstrated work.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          We don&apos;t rely on paid awards, fabricated partner carousels, or unverified statistical claims. RECKAI&apos;s credibility stems from real code, working software, and transparent technical architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-neutral-800">
        {PROOF_CHAIN.map((node) => (
          <div
            key={node.stage}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 space-y-2"
          >
            <div className="text-xs font-mono text-violet-400 font-bold">
              NODE {node.stage}
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              {node.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   16. TeamTruthSection (Truthful Representation)
   ------------------------------------------------------------------------- */
export function TeamTruthSection() {
  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-8 sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/40 text-center max-w-3xl mx-auto space-y-3">
      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
        PEOPLE & FOCUS
      </span>
      <p className="text-base sm:text-lg font-medium text-neutral-950 dark:text-white leading-relaxed">
        &ldquo;RECKAI is being built by a focused team of product designers, software engineers, and machine learning architects who care about doing meaningful work without distraction.&rdquo;
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------
   17. CareersSection
   ------------------------------------------------------------------------- */
export function CareersSection() {
  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <Badge variant="violet" className="text-xs font-mono">
            JOIN US
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Want to build with us?
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We&apos;re interested in people who like thinking deeply, building carefully, and solving difficult problems. We do not post fictional openings—if you are a builder with exceptional craft, reach out directly.
          </p>
        </div>
        <Link href="/contact" className="shrink-0">
          <Button variant="outline" size="md" arrow="right">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   18. AboutCTA
   ------------------------------------------------------------------------- */
export function AboutCTA() {
  return (
    <div className="rounded-3xl bg-neutral-950 text-white p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border border-neutral-800 shadow-2xl">
      {/* Ambient subtle glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="space-y-4 max-w-2xl mx-auto relative z-10">
        <Badge variant="violet" className="font-mono text-xs">
          START THE CONVERSATION
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Have something worth building?
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          Tell us what you&apos;re thinking. Whether it&apos;s an ambitious startup, an enterprise data challenge, or an intelligent system waiting to be architected.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
        <Link href="/start-project">
          <Button variant="primary" size="lg" arrow="up-right">
            Start a Project
          </Button>
        </Link>
        <Link href="/work">
          <Button variant="outline" size="lg" arrow="right" className="border-neutral-700 text-white hover:bg-neutral-900">
            Explore Our Work
          </Button>
        </Link>
      </div>

      <div className="pt-8 border-t border-neutral-900 relative z-10">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Think. Build. Impact.
        </span>
      </div>
    </div>
  );
}
