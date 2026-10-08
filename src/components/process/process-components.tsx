"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROCESS_STEPS } from "@/data/process/process-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------
   1. ProcessSignature (Section 4: Transition & Word Cycle)
   ------------------------------------------------------------------------- */
export function ProcessSignature() {
  const [activeWord, setActiveWord] = useState<number>(0);
  const words = [
    { word: "THINK", sub: "Deep formulation & trade-off analysis" },
    { word: "BUILD", sub: "Modular, type-safe full-stack engineering" },
    { word: "SHIP", sub: "Automated production readiness & zero-downtime" },
    { word: "EVOLVE", sub: "Continuous telemetry & iterative compounding" },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-8 text-center">
      <div className="space-y-2 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          Guiding Philosophy
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          Think deeply. Build deliberately. Ship intelligently.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
        {words.map((item, idx) => (
          <button
            key={item.word}
            type="button"
            onClick={() => setActiveWord(idx)}
            className={`p-6 rounded-2xl border transition-all text-left ${
              activeWord === idx
                ? "border-violet-500 bg-white dark:bg-neutral-950 shadow-medium"
                : "border-neutral-200/60 bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/40 hover:border-neutral-300"
            }`}
          >
            <div
              className={`text-2xl sm:text-3xl font-extrabold tracking-wider ${
                activeWord === idx ? "text-violet-600 dark:text-violet-400" : "text-neutral-900 dark:text-white"
              }`}
            >
              {item.word}
            </div>
            <p className="text-xs text-neutral-500 font-mono mt-2 leading-relaxed">
              {item.sub}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   2. ProcessExplorer (Section 5 & 22: Interactive Process Timeline)
   ------------------------------------------------------------------------- */
export function ProcessExplorer() {
  const [selectedSlug, setSelectedSlug] = useState("understand");
  const currentStep = PROCESS_STEPS.find((s) => s.slug === selectedSlug) || PROCESS_STEPS[0];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm space-y-10">
      <div className="space-y-3 max-w-2xl">
        <Badge variant="violet" className="text-xs font-mono">
          INTERACTIVE TIMELINE
        </Badge>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          The 8 Iterative Stages
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Select any stage to inspect our specific thinking, operational principles, and verifiable deliverables.
        </p>
      </div>

      {/* Step Selector Ribbon */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PROCESS_STEPS.map((step) => (
          <button
            key={step.slug}
            type="button"
            onClick={() => setSelectedSlug(step.slug)}
            className={`shrink-0 rounded-xl px-4 py-3 text-left transition-all ${
              selectedSlug === step.slug
                ? "bg-violet-600 text-white shadow-sm font-bold"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-750"
            }`}
          >
            <div className="text-[10px] font-mono opacity-80 uppercase tracking-widest">
              STAGE {step.number}
            </div>
            <div className="text-xs sm:text-sm font-semibold mt-0.5">
              {step.name}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Step Deep Dive Display */}
      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 sm:p-10 dark:border-neutral-800 dark:bg-neutral-950/60 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold">
                STAGE {currentStep.number} OF 08
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="text-xs font-mono text-neutral-500 uppercase">{currentStep.name}</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              {currentStep.tagline}
            </h4>
          </div>

          <div className="rounded-xl border border-violet-100 bg-violet-50/60 px-4 py-2 dark:border-violet-900/40 dark:bg-violet-950/20 text-xs font-mono text-violet-700 dark:text-violet-300 shrink-0">
            &ldquo;{currentStep.statement}&rdquo;
          </div>
        </div>

        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl">
          {currentStep.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
          {/* Principles */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
              Guiding Principles
            </span>
            <ul className="space-y-2.5">
              {currentStep.principles.map((pr, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-800 dark:text-neutral-200">
                  <span className="text-violet-600 font-bold mt-0.5">✦</span>
                  <span className="leading-relaxed">{pr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tangible Deliverables / Outputs */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
              Verifiable Outputs
            </span>
            <ul className="space-y-2.5">
              {currentStep.outputs.map((out, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-800 dark:text-neutral-200">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span className="leading-relaxed font-mono">{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   3. ReckonDecisionFlow (Section 7: Visual Decision Chain)
   ------------------------------------------------------------------------- */
export function ReckonDecisionFlow() {
  const steps = [
    { step: "01", name: "PROBLEM", desc: "Isolate the core human or operational friction" },
    { step: "02", name: "QUESTIONS", desc: "Interrogate assumptions & failure modes" },
    { step: "03", name: "OPTIONS", desc: "Model alternative architectures & algorithms" },
    { step: "04", name: "TRADE-OFFS", desc: "Weigh speed, cost, precision, and latency" },
    { step: "05", name: "DECISION", desc: "Commit to an explainable, necessary system" },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-950 text-white p-8 sm:p-12 dark:border-neutral-800 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
          Signature Decision Model
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          How We Reckon Before We Code
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed">
          We don&rsquo;t jump straight from problem to feature request. Every architecture passes through disciplined reasoning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
        {steps.map((st, i) => (
          <div
            key={st.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-2 relative"
          >
            <div className="text-[10px] font-mono text-violet-400 font-bold">
              PHASE {st.step}
            </div>
            <div className="text-lg font-bold text-white mt-1">
              {st.name}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {st.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-neutral-600 text-xs z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   4. AIDecisionFramework (Section 12: Interactive AI Verification Tree)
   ------------------------------------------------------------------------- */
export function AIDecisionFramework() {
  const [q1, setQ1] = useState<boolean | null>(true);
  const [q2, setQ2] = useState<boolean | null>(true);
  const [q3, setQ3] = useState<boolean | null>(true);

  const isAIApproved = q1 === true && q2 === true && q3 === true;

  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/20 p-8 sm:p-12 dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <Badge variant="violet" className="text-xs font-mono">
          AI DECISION FRAMEWORK
        </Badge>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Should this actually use AI?
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Test our criteria below. If any checkpoint fails, RECKAI strictly deploys simpler, more dependable software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Checkpoint 1 */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
          <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold">
            CHECKPOINT 01
          </span>
          <h4 className="text-base font-bold text-neutral-900 dark:text-white">
            Does AI solve a genuine problem?
          </h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Or is it being requested merely as a marketing buzzword for investors?
          </p>
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setQ1(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q1 === true
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              YES (Real Problem)
            </button>
            <button
              type="button"
              onClick={() => setQ1(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q1 === false
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              NO (Just Hype)
            </button>
          </div>
        </div>

        {/* Checkpoint 2 */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
          <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold">
            CHECKPOINT 02
          </span>
          <h4 className="text-base font-bold text-neutral-900 dark:text-white">
            Is AI better than deterministic code?
          </h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Can simple mathematical logic, relational queries, or rule trees solve it faster?
          </p>
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setQ2(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q2 === true
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              YES (AI is Better)
            </button>
            <button
              type="button"
              onClick={() => setQ2(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q2 === false
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              NO (Code is Better)
            </button>
          </div>
        </div>

        {/* Checkpoint 3 */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
          <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold">
            CHECKPOINT 03
          </span>
          <h4 className="text-base font-bold text-neutral-900 dark:text-white">
            Can it be implemented reliably?
          </h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Can inference latency, token costs, and hallucinations be safely managed?
          </p>
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setQ3(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q3 === true
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              YES (Reliable)
            </button>
            <button
              type="button"
              onClick={() => setQ3(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                q3 === false
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              NO (Too Fragile)
            </button>
          </div>
        </div>
      </div>

      {/* Result Outcome */}
      <div
        className={`p-6 rounded-2xl border text-center transition-all ${
          isAIApproved
            ? "border-emerald-300 bg-emerald-50/60 dark:border-emerald-900/60 dark:bg-emerald-950/20"
            : "border-amber-300 bg-amber-50/60 dark:border-amber-900/60 dark:bg-amber-950/20"
        }`}
      >
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
          ARCHITECTURAL VERDICT
        </div>
        <div
          className={`text-2xl font-black mt-1 ${
            isAIApproved ? "text-emerald-700 dark:text-emerald-300" : "text-amber-800 dark:text-amber-200"
          }`}
        >
          {isAIApproved ? "ADD INTELLIGENCE" : "USE THE SIMPLER SYSTEM"}
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 max-w-md mx-auto">
          {isAIApproved
            ? "All three criteria satisfied: AI creates defensible leverage, exceeds deterministic solutions, and operates within safe boundaries."
            : "One or more criteria failed. RECKAI will build the solution using reliable, lower-cost, deterministic software."}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   5. OriginalsVsBuildsProcess (Section 15: Dual Mode Process)
   ------------------------------------------------------------------------- */
export function OriginalsVsBuildsProcess() {
  return (
    <div className="space-y-10">
      <div className="space-y-3 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          Methodology Dual-Pillar
        </span>
        <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
          One process. Two ways to build.
        </h3>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The same standard of thinking, design craft, and engineering rigor powers both sides of RECKAI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card A: Originals */}
        <div className="rounded-3xl border border-violet-200/80 bg-white p-8 sm:p-10 dark:border-violet-900/40 dark:bg-neutral-900/70 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="violet" className="font-mono text-[10px] tracking-widest uppercase">
                RECKAI ORIGINALS
              </Badge>
              <span className="text-xs font-mono text-neutral-400">Proprietary IP</span>
            </div>

            <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">
              &ldquo;We discover the problem ourselves.&rdquo;
            </h4>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Born from our own observations of friction in daily life and enterprise operations. We test new architectural patterns, train local models, and operate live systems as our own users.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2 font-bold">
                Execution Sequence
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {["OBSERVE", "RESEARCH", "RECKON", "CREATE", "BUILD", "SHIP", "EVOLVE"].map((step, idx, arr) => (
                  <span key={step} className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 font-medium">
                      {step}
                    </span>
                    {idx < arr.length - 1 && <span className="text-neutral-400">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <Link href="/work/originals">
              <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
                <span>Explore RECKAI Originals</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Card B: Builds */}
        <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/70 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="default" className="font-mono text-[10px] tracking-widest uppercase">
                RECKAI BUILDS
              </Badge>
              <span className="text-xs font-mono text-neutral-400">Partner Engineering</span>
            </div>

            <h4 className="text-2xl font-bold text-neutral-950 dark:text-white">
              &ldquo;You bring the problem. We build with you.&rdquo;
            </h4>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We partner with founders, executives, and organizations to architect and deliver mission-critical software, custom AI models, and automated operations under transparent milestone commitments.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2 font-bold">
                Execution Sequence
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {["DISCOVER", "RECKON", "DEFINE", "DESIGN", "ENGINEER", "INTELLIGENTIZE", "SHIP", "EVOLVE"].map(
                  (step, idx, arr) => (
                    <span key={step} className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                      <span className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 font-medium">
                        {step}
                      </span>
                      {idx < arr.length - 1 && <span className="text-neutral-400">→</span>}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <Link href="/work/builds">
              <Button variant="outline" size="sm" arrow="right" className="w-full justify-between">
                <span>Explore RECKAI Builds</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   6. IterationLoop (Section 19: Signature Circular Loop)
   ------------------------------------------------------------------------- */
export function IterationLoop() {
  const loopNodes = [
    { title: "THINK", desc: "Question, reason, and discover" },
    { title: "BUILD", desc: "Type-safe engineering & design" },
    { title: "MEASURE", desc: "Live production telemetry" },
    { title: "LEARN", desc: "Analyze real behavioral patterns" },
    { title: "IMPROVE", desc: "Compound product leverage" },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          Continuous Compounding
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          The Iteration Loop
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Product development is not a straight line from start to finish. It is a compounding loop where every cycle sharpens the system.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 font-mono text-xs sm:text-sm">
        {loopNodes.map((node, i) => (
          <React.Fragment key={node.title}>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 text-center space-y-1 shadow-sm">
              <div className="font-extrabold text-violet-600 dark:text-violet-400">{node.title}</div>
              <div className="text-[11px] text-neutral-500 font-sans">{node.desc}</div>
            </div>
            {i < loopNodes.length - 1 && (
              <span className="text-neutral-400 font-bold text-base">→</span>
            )}
          </React.Fragment>
        ))}
        <span className="text-violet-600 dark:text-violet-400 font-bold text-base">↺</span>
      </div>
    </div>
  );
}
