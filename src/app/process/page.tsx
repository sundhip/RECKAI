import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PROCESS_STEPS } from "@/data/process/process-data";
import {
  ProcessSignature,
  ProcessExplorer,
  ReckonDecisionFlow,
  AIDecisionFramework,
  OriginalsVsBuildsProcess,
  IterationLoop,
} from "@/components/process";

export const metadata: Metadata = {
  title: "The RECKAI Process — Think, Build, Ship, Evolve",
  description:
    "We don't rush to build. We understand the problem, reckon with its constraints, and engineer intelligent digital systems that actually work.",
};

export default function ProcessPage() {
  const realProductCases = [
    {
      product: "OmniXperience",
      type: "RECKAI Original",
      href: "/work/originals/omnixperience",
      reckonedProblem:
        "Context fragmentation across disconnected SaaS tools forces high cognitive overhead and breaks flow state.",
      architecturalDecision:
        "Designed a unified workspace substrate with local-first operational transformation rather than another web iframe wrapper.",
      outcome:
        "Instant keyboard-driven switching, offline-first reliability, and sub-100ms response latencies.",
    },
    {
      product: "EvolveAura",
      type: "RECKAI Original",
      href: "/work/originals/evolveaura",
      reckonedProblem:
        "Generic design tokens fail across extreme screen modalities and dynamic lighting environments.",
      architecturalDecision:
        "Built a perceptual design intelligence pipeline evaluating APCA contrast algorithms dynamically in real-time.",
      outcome:
        "Mathematically verified WCAG/APCA compliance and fluid layout adaptability across mobile, desktop, and ambient displays.",
    },
    {
      product: "OrganXcell",
      type: "RECKAI Original",
      href: "/work/originals/organxcell",
      reckonedProblem:
        "Biomedical data structures suffer from incompatible lab formats, making multi-omic correlation slow and error-prone.",
      architecturalDecision:
        "Constructed a strict zero-loss data ingestion engine with automated schema normalization and deterministic validation pipelines.",
      outcome:
        "Unified multi-modal cellular visualization and verifiable dataset lineage without manual translation bottlenecks.",
    },
    {
      product: "Finance Platform",
      type: "RECKAI Original",
      href: "/work/originals/finance",
      reckonedProblem:
        "Traditional accounting platforms detect ledger discrepancies post-factum through batch processing rather than at transaction ingress.",
      architecturalDecision:
        "Implemented immutable double-entry ledger invariants verified concurrently via stream-processing and real-time statistical anomaly detection.",
      outcome:
        "Zero unaccounted divergence, continuous automated auditability, and immediate settlement visibility.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative">
        <Container className="space-y-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="violet" className="text-xs font-mono tracking-widest uppercase">
                ENGINEERING METHODOLOGY
              </Badge>
              <span className="text-xs font-mono text-neutral-400">
                THINK → BUILD → SHIP → EVOLVE
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              We don&apos;t rush <br className="hidden sm:inline" />
              to build.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-2xl">
              We understand the problem. We reckon with its constraints. Then we engineer systems that actually work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/start-project">
              <Button variant="primary" size="lg" arrow="up-right">
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" size="lg" arrow="right">
                Explore Our Work
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. SIGNATURE / GUIDING PHILOSOPHY */}
      <section>
        <Container>
          <ProcessSignature />
        </Container>
      </section>

      {/* 3. INTERACTIVE 8-STAGE TIMELINE EXPLORER */}
      <section id="timeline">
        <Container>
          <ProcessExplorer />
        </Container>
      </section>

      {/* 4. THE 8 SEQUENTIAL STAGES DETAILED OVERVIEW */}
      <section className="space-y-12">
        <Container className="space-y-4">
          <Badge variant="outline" className="text-xs font-mono">
            END-TO-END BLUEPRINT
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            From First Question to Compounding System
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Every product we build—whether a RECKAI Original or a client system—progresses through eight deliberate stages. No skipping steps. No superficial templates.
          </p>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <Card
                key={s.slug}
                className="flex flex-col justify-between hover:border-violet-300 dark:hover:border-violet-800 transition-all group"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                      STAGE {s.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-400">
                      {s.slug}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {s.name}
                  </CardTitle>
                  <div className="text-xs font-mono text-neutral-500 italic">
                    &ldquo;{s.statement}&rdquo;
                  </div>
                  <CardDescription className="text-xs leading-relaxed pt-1">
                    {s.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 border-t border-neutral-100 dark:border-neutral-800 mt-4 py-4 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Outputs:
                  </span>
                  <div className="space-y-1.5">
                    {s.outputs.slice(0, 2).map((out, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] font-mono text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5"
                      >
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span className="leading-snug">{out}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. THE RECKON STAGE DEEP DIVE & DECISION CHAIN */}
      <section>
        <Container>
          <ReckonDecisionFlow />
        </Container>
      </section>

      {/* 6. APPLIED AI DECISION FRAMEWORK */}
      <section>
        <Container>
          <AIDecisionFramework />
        </Container>
      </section>

      {/* 7. SPEED VS. RIGOR */}
      <section className="space-y-8">
        <Container className="space-y-4">
          <Badge variant="outline" className="text-xs font-mono">
            BALANCED EXECUTION
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Move fast. Don&apos;t move blindly.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            The software industry often forces a false choice between reckless velocity and paralyzed deliberation. RECKAI treats speed and rigor as mutually reinforcing.
          </p>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Speed Column */}
            <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  VELOCITY WITHOUT SHORTCUTS
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                  Where We Accelerate
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-emerald-500 font-bold mt-0.5">01</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Rapid Prototyping & Functional Spikes:</strong>
                    We validate complex algorithmic assumptions within 48 hours using working vertical slices rather than endless slide decks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-emerald-500 font-bold mt-0.5">02</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Continuous Weekly Deployments:</strong>
                    Working software deployed to staging every Friday. No multi-month development black holes where progress is invisible.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-emerald-500 font-bold mt-0.5">03</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Zero Bureaucratic Overhead:</strong>
                    Direct communication with the engineers and product architects designing your system—no account manager telephone games.
                  </span>
                </li>
              </ul>
            </div>

            {/* Rigor Column */}
            <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">
                  DISCIPLINE OVER EXPEDIENCY
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                  Where We Refuse to Cut Corners
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-violet-500 font-bold mt-0.5">01</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Strict Type Safety & Schemas:</strong>
                    End-to-end typed interfaces from database schemas to client UI components prevent entire classes of runtime anomalies.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-violet-500 font-bold mt-0.5">02</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Data Invariant Verification:</strong>
                    Financial balances, biomedical data structures, and user permissions are validated at ingress with strict mathematical checks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-violet-500 font-bold mt-0.5">03</span>
                  <span>
                    <strong className="text-neutral-950 dark:text-white block font-medium mb-0.5">Architectural Longevity:</strong>
                    We avoid passing hype and brittle dependencies. We build clean, modular architectures that a new team can maintain without fear.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-6 text-center dark:border-neutral-800 dark:bg-neutral-900/40">
            <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400">
              &ldquo;The goal isn&apos;t maximum speed. It&apos;s useful progress that compounds over time.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* 8. COLLABORATION MODEL */}
      <section className="space-y-8">
        <Container className="space-y-4">
          <Badge variant="outline" className="text-xs font-mono">
            PARTNERSHIP DYNAMICS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            You don&apos;t disappear after handing us a brief.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Building intelligent software is a collaborative inquiry. We work alongside founders, executives, and subject-matter experts with shared context and complete transparency.
          </p>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-3">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">
                01 / ALIGNMENT CADENCE
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Weekly Milestone Demos
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Every Friday, we walk through live, clickable code in staging environments. You test real workflows, assess latency, and steer nuance early before commitments solidify.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-3">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">
                02 / SHARED VISIBILITY
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Open Git & Architecture Logs
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                You retain complete visibility into code commits, architecture decision records (ADRs), and automated test suites throughout the active sprint lifecycle.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-3">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">
                03 / INTELLECTUAL HONESTY
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                We Challenge Unsound Assumptions
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                If a requested feature creates technical debt or an unnecessary AI model wastes compute, we speak up and propose a cleaner alternative. We protect your product&apos;s longevity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. DECISION-MAKING MATRIX */}
      <section className="space-y-8">
        <Container className="space-y-4">
          <Badge variant="outline" className="text-xs font-mono">
            ARCHITECTURAL GOVERNANCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Every decision has a reason.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            We document why choices were made so your team understands the trade-offs years after launch.
          </p>
        </Container>

        <Container>
          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-800/50 font-mono text-neutral-500 uppercase text-[11px]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Decision Dimension</th>
                  <th className="py-3.5 px-4 sm:px-6">Option A (Default)</th>
                  <th className="py-3.5 px-4 sm:px-6">Option B (Alternative)</th>
                  <th className="py-3.5 px-4 sm:px-6">How RECKAI Decides</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-700 dark:text-neutral-300">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-950 dark:text-white">
                    Data Persistence
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Relational (PostgreSQL)
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Document / NoSQL
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-neutral-600 dark:text-neutral-400">
                    Strong ACID guarantees and schema invariance win unless document shapes are truly polymorphic and unconstrained.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-950 dark:text-white">
                    Intelligence Engine
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Deterministic Algorithms
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    LLM / Neural Pipeline
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-neutral-600 dark:text-neutral-400">
                    If logic can be expressed in deterministic code, we never introduce LLM latency, cost, or non-deterministic variance.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-950 dark:text-white">
                    State Management
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Server-Driven (RSC)
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Client-Side Reactive Stores
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-neutral-600 dark:text-neutral-400">
                    Default to zero client bundle overhead with server components; push state to client only when micro-interactions require real-time tactile feedback.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-950 dark:text-white">
                    Infrastructure Model
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Managed Edge & Serverless
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs">
                    Dedicated Kubernetes Fleet
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-xs text-neutral-600 dark:text-neutral-400">
                    Deploy managed edge compute to minimize operational toil; transition to dedicated container orchestration only when sustained workloads justify the maintenance cost.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 10. DUAL PILLARS: ORIGINALS VS. BUILDS PROCESS */}
      <section>
        <Container>
          <OriginalsVsBuildsProcess />
        </Container>
      </section>

      {/* 11. COMPOUNDING ITERATION LOOP */}
      <section>
        <Container>
          <IterationLoop />
        </Container>
      </section>

      {/* 12. EVIDENCE IN REAL PRODUCTS */}
      <section className="space-y-12">
        <Container className="space-y-4">
          <Badge variant="outline" className="text-xs font-mono">
            APPLIED EVIDENCE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            How this process shaped our own products.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Our methodology is not academic. It was developed and refined across the four RECKAI Originals we engineer and operate every day.
          </p>
        </Container>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realProductCases.map((item) => (
              <div
                key={item.product}
                className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/60 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold uppercase">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">Case Analysis</span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                    {item.product}
                  </h3>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div>
                      <span className="font-mono text-[11px] uppercase text-neutral-400 block font-bold">
                        The Reckoned Problem:
                      </span>
                      <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                        {item.reckonedProblem}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] uppercase text-neutral-400 block font-bold">
                        Architectural Decision:
                      </span>
                      <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                        {item.architecturalDecision}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] uppercase text-emerald-600 dark:text-emerald-400 block font-bold">
                        Observable Result:
                      </span>
                      <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <Link href={item.href}>
                    <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
                      <span>View {item.product} Details</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 13. FINAL DARK EDITORIAL CTA */}
      <section>
        <Container>
          <div className="rounded-3xl bg-neutral-950 text-white p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border border-neutral-800 shadow-2xl">
            {/* Ambient subtle glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 blur-[120px] pointer-events-none rounded-full" />

            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <Badge variant="violet" className="font-mono text-xs">
                RECKON → BUILD → SHIP → EVOLVE
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Have a problem worth reckoning with?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether you have an early-stage product concept or a complex legacy architecture that requires intelligent evolution, let&apos;s evaluate the constraints and build the right system together.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
              <Link href="/start-project">
                <Button variant="primary" size="lg" arrow="up-right">
                  Start a Project
                </Button>
              </Link>
              <Link href="/work/builds">
                <Button variant="outline" size="lg" arrow="right" className="border-neutral-700 text-white hover:bg-neutral-900">
                  Explore RECKAI Builds
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-neutral-900 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Think. Build. Impact.
              </span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
