"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BuildProduct } from "@/types/product";
import { cn } from "@/lib/utils/cn";

/* -------------------------------------------------------------------------
   1. BuildCaseStudyHero
   ------------------------------------------------------------------------- */
export function BuildCaseStudyHero({ project }: { project: BuildProduct }) {
  const isAnonymized = project.visibility === "ANONYMIZED";
  const isConfidential = project.visibility === "CONFIDENTIAL";
  const status = project.buildStatus || project.currentStage || "IN DEVELOPMENT";

  return (
    <div className="py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <Container className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/work/builds"
              className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              ← Back to RECKAI Builds
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <Badge variant="default" className="text-[10px] font-mono tracking-widest font-bold">
              RECKAI BUILD
            </Badge>
            {project.industry && (
              <span className="text-xs font-mono text-neutral-500">{project.industry}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Badge variant="outline" className="text-xs font-mono">
              {status}
            </Badge>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
          {isAnonymized ? `Enterprise Solution — ${project.industry || "Proprietary"}` : project.name}
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-medium max-w-3xl leading-relaxed">
          {project.tagline || project.shortDescription}
        </p>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {isConfidential && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-800 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300 font-mono">
            CONFIDENTIAL ENGAGEMENT: Specific organizational identities and proprietary metrics remain restricted under client non-disclosure agreement.
          </div>
        )}
      </Container>
    </div>
  );
}

/* -------------------------------------------------------------------------
   2. ClientContext & BuildOverview
   ------------------------------------------------------------------------- */
export function ClientContext({ project }: { project: BuildProduct }) {
  const isAnonymized = project.visibility === "ANONYMIZED";
  const isConfidential = project.visibility === "CONFIDENTIAL";

  const clientDisplay = isConfidential
    ? "Confidential Partner"
    : isAnonymized
    ? `Enterprise Client (${project.industry || "Private Sector"})`
    : project.clientName || "Confidential Partner";

  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/40">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <span className="block text-[11px] font-mono uppercase text-neutral-400">Built For</span>
          <span className="text-sm font-bold text-neutral-900 dark:text-white mt-1 block">
            {clientDisplay}
          </span>
        </div>

        {project.industry && (
          <div>
            <span className="block text-[11px] font-mono uppercase text-neutral-400">Industry</span>
            <span className="text-sm font-bold text-neutral-900 dark:text-white mt-1 block">
              {project.industry}
            </span>
          </div>
        )}

        <div>
          <span className="block text-[11px] font-mono uppercase text-neutral-400">Engagement</span>
          <span className="text-sm font-bold text-neutral-900 dark:text-white mt-1 block">
            {project.engagementType || "Product Engineering & Intelligence"}
          </span>
        </div>

        <div>
          <span className="block text-[11px] font-mono uppercase text-neutral-400">Status</span>
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-1 block">
            {project.buildStatus || project.currentStage || "Active"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   3. ProblemSection
   ------------------------------------------------------------------------- */
export function ProblemSection({ project }: { project: BuildProduct }) {
  if (!project.problem && !project.problemDeep) return null;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
          01 / The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          The Problem
        </h2>
      </div>

      <div className="rounded-2xl border border-red-100 bg-red-50/20 p-6 sm:p-8 dark:border-red-950/40 dark:bg-red-950/10 space-y-4">
        <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
          {project.problem}
        </p>

        {project.problemDeep && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-red-100/80 dark:border-red-950/60">
            <div>
              <span className="text-xs font-mono uppercase text-red-600 dark:text-red-400 font-bold">
                Why Existing Approaches Failed
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
                {project.problemDeep.whyItMatters}
              </p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-red-600 dark:text-red-400 font-bold">
                Who Experienced The Friction
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1 leading-relaxed">
                {project.problemDeep.whoExperiencesIt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   4. DiscoverySection / HowWeReckoned
   ------------------------------------------------------------------------- */
export function DiscoverySection({ project }: { project: BuildProduct }) {
  const stages = project.discoveryStages || [
    { stage: "01", title: "Understand", description: "Dissect client context, user friction, and existing manual constraints." },
    { stage: "02", title: "Question", description: "Challenge legacy assumptions, verify edge cases, and eliminate unnecessary complexity." },
    { stage: "03", title: "Research", description: "Evaluate domain constraints, regulatory boundaries, and technical feasibility." },
    { stage: "04", title: "Define", description: "Establish tight MVP boundaries, data flows, and precise system contracts." },
    { stage: "05", title: "Prioritize", description: "Sequence core architectures, AI integration points, and user journey paths." },
    { stage: "06", title: "Design", description: "Produce high-fidelity UI systems and production data models." },
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          02 / Discovery & Reckoning
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Before we built it, we reckoned with it.
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
          We don&rsquo;t simply receive requirements and blindly code. We think alongside our partners to define the true solution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((st) => (
          <div
            key={st.stage}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
          >
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
              {st.stage} — {st.title}
            </span>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {st.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   5. ProductStrategy
   ------------------------------------------------------------------------- */
export function ProductStrategy({ project }: { project: BuildProduct }) {
  if (!project.productStrategy && !project.solutionDeep) return null;

  const strategy = project.productStrategy;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
          03 / Product Strategy
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Strategic Architecture & Scoping
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategy?.decisions && (
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
            <span className="text-xs font-mono uppercase text-violet-600 font-bold">Key Scoping Decisions</span>
            <ul className="space-y-2">
              {strategy.decisions.map((d, i) => (
                <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                  <span className="text-violet-600">✦</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {strategy?.mvpBoundaries && (
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
            <span className="text-xs font-mono uppercase text-neutral-400 font-bold">MVP Boundaries</span>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {strategy.mvpBoundaries}
            </p>
          </div>
        )}

        {strategy?.scalability && (
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
            <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Scalability & Security</span>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {strategy.scalability}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   6. SolutionSection
   ------------------------------------------------------------------------- */
export function SolutionSection({ project }: { project: BuildProduct }) {
  if (!project.solution && (!project.solutionModules || project.solutionModules.length === 0)) return null;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
          04 / The Delivered System
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          What we built.
        </h2>
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
        <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
          {project.solution}
        </p>

        {project.solutionModules && project.solutionModules.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            {project.solutionModules.map((mod) => (
              <div key={mod.name} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 space-y-2">
                <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                  {mod.name}
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   7. AIIntelligenceSection
   ------------------------------------------------------------------------- */
export function AIIntelligenceSection({ project }: { project: BuildProduct }) {
  if (!project.aiCapabilities || project.aiCapabilities.length === 0) return null;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          05 / Applied Intelligence
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Where intelligence enters the product.
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
          Applied AI capabilities solving specific bottlenecks with concrete technical roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.aiCapabilities.map((cap) => (
          <div
            key={cap}
            className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-violet-600 font-bold">✦</span>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">{cap}</h3>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Integrated system intelligence handling automated classification, deterministic boundaries, or predictive reasoning.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   8. TechnologySection & EngineeringSection
   ------------------------------------------------------------------------- */
export function TechnologySection({ project }: { project: BuildProduct }) {
  if (!project.technologies || project.technologies.length === 0) return null;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
          06 / Technology Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          Technologies & Infrastructure
        </h2>
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-mono text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              #{t}
            </span>
          ))}
        </div>

        {project.engineeringDeep && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs">
            {project.engineeringDeep.architecture && (
              <div>
                <span className="font-mono text-neutral-400 uppercase">Architecture</span>
                <p className="text-neutral-700 dark:text-neutral-300 mt-1">{project.engineeringDeep.architecture}</p>
              </div>
            )}
            {project.engineeringDeep.security && (
              <div>
                <span className="font-mono text-neutral-400 uppercase">Security & Isolation</span>
                <p className="text-neutral-700 dark:text-neutral-300 mt-1">{project.engineeringDeep.security}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   9. OutcomeSection / "Where it stands"
   ------------------------------------------------------------------------- */
export function OutcomeSection({ project }: { project: BuildProduct }) {
  const hasOutcomes = project.verifiedOutcomes && project.verifiedOutcomes.length > 0;

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          07 / Status & Outcomes
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
          {hasOutcomes ? "Verified Outcomes" : "Where it stands"}
        </h2>
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/40">
        {hasOutcomes ? (
          <ul className="space-y-3">
            {project.verifiedOutcomes!.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800 dark:text-neutral-200">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs">
                {project.buildStatus || project.currentStage || "Active Development"}
              </Badge>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.currentStanding ||
                "This project is currently in active development or undergoing continuous iteration. Performance metrics and production outcomes are published only upon formal verification."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   10. BuildTimeline
   ------------------------------------------------------------------------- */
export function BuildTimeline({ project }: { project: BuildProduct }) {
  if (!project.timelineStages || project.timelineStages.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
        Execution Timeline
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {project.timelineStages.map((stage) => (
          <div
            key={stage.phase}
            className="p-4 rounded-xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-900 space-y-1"
          >
            <span
              className={cn(
                "text-[10px] font-mono px-2 py-0.5 rounded-full",
                stage.status === "Completed"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                  : stage.status === "Current"
                  ? "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              )}
            >
              {stage.status}
            </span>
            <div className="text-sm font-bold text-neutral-900 dark:text-white pt-1">{stage.phase}</div>
            {stage.description && <div className="text-xs text-neutral-500">{stage.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   11. StartProjectCTA
   ------------------------------------------------------------------------- */
export function StartProjectCTA() {
  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-12 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-2 max-w-2xl">
        <Badge variant="default" className="text-xs font-mono">
          PARTNER WITH RECKAI
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Have something worth building?
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Tell us what you&rsquo;re thinking. We&rsquo;ll reckon with the problem before we start writing the solution.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 shrink-0">
        <Link href="/work/builds">
          <Button variant="outline" size="md">
            All Builds
          </Button>
        </Link>
        <Link href="/start-project">
          <Button variant="primary" size="md" arrow="up-right">
            Start a Project
          </Button>
        </Link>
      </div>
    </div>
  );
}
