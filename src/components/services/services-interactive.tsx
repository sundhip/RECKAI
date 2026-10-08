"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Service } from "@/types/service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------
   1. CapabilityCard
   ------------------------------------------------------------------------- */
export function CapabilityCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60 shadow-subtle hover:border-violet-300 dark:hover:border-violet-700/60 transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="subtle" className="font-mono text-[10px] tracking-widest font-semibold uppercase">
            {service.category}
          </Badge>
          <span className="text-[11px] font-mono text-neutral-400">
            0{service.order}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {service.name}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            What We Deliver
          </span>
          <ul className="space-y-2">
            {service.capabilities.slice(0, 4).map((cap) => (
              <li key={cap} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                <span className="text-violet-600 font-bold">→</span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors flex items-center gap-1.5"
        >
          <span>Explore Capability Details</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   2. ServicePhilosophyFormula ("Not a menu. A system.")
   ------------------------------------------------------------------------- */
export function ServicePhilosophyFormula() {
  const elements = [
    { label: "PRODUCT THINKING", color: "text-neutral-900 dark:text-white" },
    { label: "DESIGN", color: "text-neutral-900 dark:text-white" },
    { label: "ENGINEERING", color: "text-neutral-900 dark:text-white" },
    { label: "AI", color: "text-violet-600 dark:text-violet-400 font-bold" },
    { label: "DATA", color: "text-neutral-900 dark:text-white" },
    { label: "AUTOMATION", color: "text-neutral-900 dark:text-white" },
  ];

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
          Architecture Philosophy
        </span>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Not a menu. A system.
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Traditional agencies sell disconnected deliverables: a design mock here, an API contractor there. At RECKAI, our capabilities are designed as an integrated machine.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono tracking-wider text-center">
          {elements.map((item, idx) => (
            <React.Fragment key={item.label}>
              <span className={`px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 ${item.color}`}>
                {item.label}
              </span>
              {idx < elements.length - 1 && (
                <span className="text-neutral-400 font-bold text-sm">+</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-neutral-400 font-bold text-sm">=</span>
          <span className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold tracking-wider shadow-sm">
            INTELLIGENT PRODUCT
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   3. AIArchitectureDiagram (Section 8: Interactive Conceptual Architecture)
   ------------------------------------------------------------------------- */
export function AIArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<"all" | "ai" | "data" | "automation">("all");

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-neutral-950 text-white p-8 sm:p-14 dark:border-neutral-800 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
            System Topology
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            AI Product Architecture
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            How intelligence, data pipelines, and user interaction coordinate within a modern RECKAI system.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono">
          <button
            onClick={() => setActiveLayer("all")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeLayer === "all" ? "bg-violet-600 text-white font-bold" : "text-neutral-400 hover:text-white"
            }`}
          >
            Full Stack
          </button>
          <button
            onClick={() => setActiveLayer("ai")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeLayer === "ai" ? "bg-violet-600 text-white font-bold" : "text-neutral-400 hover:text-white"
            }`}
          >
            AI Engine
          </button>
          <button
            onClick={() => setActiveLayer("data")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeLayer === "data" ? "bg-violet-600 text-white font-bold" : "text-neutral-400 hover:text-white"
            }`}
          >
            Data Layer
          </button>
          <button
            onClick={() => setActiveLayer("automation")}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeLayer === "automation" ? "bg-violet-600 text-white font-bold" : "text-neutral-400 hover:text-white"
            }`}
          >
            Automation
          </button>
        </div>
      </div>

      {/* Conceptual Diagram Flow */}
      <div className="max-w-2xl mx-auto space-y-4 font-mono text-xs">
        {/* User Layer */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4 text-center">
          <div className="text-[10px] text-neutral-400 uppercase">HUMAN INTERACTION</div>
          <div className="text-base font-bold text-white mt-1">USER & CLIENT CHANNELS</div>
          <div className="text-[11px] text-neutral-400 mt-0.5">Web Application · Mobile App · Internal Cockpit</div>
        </div>

        <div className="text-center text-violet-400 text-lg">↓</div>

        {/* Product Experience Layer */}
        <div className="rounded-2xl border border-neutral-700 bg-neutral-900 p-4 text-center">
          <div className="text-[10px] text-neutral-400 uppercase">FRONTEND ARCHITECTURE</div>
          <div className="text-base font-bold text-white mt-1">PRODUCT INTERACTION LAYER</div>
          <div className="text-[11px] text-neutral-400 mt-0.5">Responsive Layouts · State Hydration · Low-Latency Streaming</div>
        </div>

        <div className="text-center text-violet-400 text-lg">↓</div>

        {/* Core Triad (AI, Data, Automation) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className={`rounded-2xl border p-4 text-center transition-all ${
              activeLayer === "all" || activeLayer === "ai"
                ? "border-violet-500 bg-violet-950/40 text-white"
                : "border-neutral-850 bg-neutral-900/40 text-neutral-500 opacity-40"
            }`}
          >
            <span className="text-[10px] font-bold uppercase text-violet-400">01 / REASONING</span>
            <div className="font-bold text-sm mt-1">AI & ML PIPELINES</div>
            <div className="text-[11px] text-neutral-400 mt-1">Embeddings, Vision, Model Inference, Agentic Tool Calls</div>
          </div>

          <div
            className={`rounded-2xl border p-4 text-center transition-all ${
              activeLayer === "all" || activeLayer === "data"
                ? "border-emerald-500 bg-emerald-950/40 text-white"
                : "border-neutral-850 bg-neutral-900/40 text-neutral-500 opacity-40"
            }`}
          >
            <span className="text-[10px] font-bold uppercase text-emerald-400">02 / TRUTH</span>
            <div className="font-bold text-sm mt-1">DATA INTEGRITY LAYER</div>
            <div className="text-[11px] text-neutral-400 mt-1">PostgreSQL, Real-Time Streams, Cryptographic Audit Ledger</div>
          </div>

          <div
            className={`rounded-2xl border p-4 text-center transition-all ${
              activeLayer === "all" || activeLayer === "automation"
                ? "border-amber-500 bg-amber-950/40 text-white"
                : "border-neutral-850 bg-neutral-900/40 text-neutral-500 opacity-40"
            }`}
          >
            <span className="text-[10px] font-bold uppercase text-amber-400">03 / EXECUTION</span>
            <div className="font-bold text-sm mt-1">AUTOMATION WORKERS</div>
            <div className="text-[11px] text-neutral-400 mt-1">Event Queues, Webhooks, Idempotent Background Daemons</div>
          </div>
        </div>

        <div className="text-center text-violet-400 text-lg">↓</div>

        {/* Intelligence Experience Synthesis */}
        <div className="rounded-2xl border border-violet-700 bg-gradient-to-r from-violet-950/60 to-neutral-900 p-5 text-center">
          <div className="text-[10px] text-violet-400 uppercase font-bold">SYNTHESIS & OUTPUT</div>
          <div className="text-lg font-bold text-white mt-1">INTELLIGENT USER EXPERIENCE</div>
          <div className="text-[11px] text-neutral-300 mt-0.5">Deterministic Guardrails · Real-Time Actionable Decisions · Zero Guesswork</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   4. CapabilityMapping (Section 15: Interactive Project Matcher)
   ------------------------------------------------------------------------- */
interface MappingOption {
  id: string;
  label: string;
  summary: string;
  recommendedCapabilities: string[];
  firstStep: string;
}

const MAPPING_OPTIONS: MappingOption[] = [
  {
    id: "idea",
    label: "I have an idea",
    summary: "You have a compelling hypothesis or market friction and need technical validation and product definition.",
    recommendedCapabilities: [
      "Product Strategy (Problem discovery & MVP boundaries)",
      "Product Design (Flows & UI prototypes)",
      "Software Engineering (Technical feasibility spikes)",
    ],
    firstStep: "A 2-week Product Discovery Sprint to turn the raw concept into an investor-ready architectural blueprint.",
  },
  {
    id: "mvp",
    label: "I need an MVP",
    summary: "You need a production-grade 0-to-1 product built quickly, cleanly, and ready to onboard real users.",
    recommendedCapabilities: [
      "Product Strategy (Tight MVP scoping)",
      "Product Design (High-craft responsive UI)",
      "Software Engineering (Full-stack Next.js & PostgreSQL build)",
    ],
    firstStep: "Defining strict MVP boundaries and initiating a 6–8 week engineering sprint.",
  },
  {
    id: "existing-improve",
    label: "I need an existing product improved",
    summary: "Your current software has hit performance, design, or architecture bottlenecks and needs modernization.",
    recommendedCapabilities: [
      "Software Engineering (Refactoring, TypeScript & performance tuning)",
      "Product Design (Design system unification & UX overhaul)",
      "Data Systems (Database query optimization)",
    ],
    firstStep: "A comprehensive codebase and UX audit to identify high-leverage refactoring priorities.",
  },
  {
    id: "add-ai",
    label: "I need AI added to a product",
    summary: "You have an existing operational workflow or application that would benefit from genuine machine intelligence.",
    recommendedCapabilities: [
      "AI & Machine Intelligence (Embeddings, classification & model evaluation)",
      "Software Engineering (API integration & low-latency streaming)",
      "Data Systems (Vector search & retrieval pipelines)",
    ],
    firstStep: "A viability assessment ensuring AI creates defensible leverage without introducing probabilistic errors.",
  },
  {
    id: "workflow",
    label: "I need an intelligent workflow",
    summary: "Your team is losing hundreds of hours to manual triage, copy-pasting, and disconnected spreadsheets.",
    recommendedCapabilities: [
      "Intelligent Automation (Event-driven background queues)",
      "Data Systems (Real-time synchronization & dashboards)",
      "AI Intelligence (Automated classification & parsing)",
    ],
    firstStep: "Mapping your end-to-end operational pipeline to replace manual handoffs with background software.",
  },
  {
    id: "platform",
    label: "I need a custom platform",
    summary: "You require a complex, mission-critical internal platform, multi-tenant portal, or distributed architecture.",
    recommendedCapabilities: [
      "Software Engineering (High-throughput microservices & cloud infrastructure)",
      "Data Systems (Cryptographic ledgers & relational data graph)",
      "Product Design (Multi-role administrative UI systems)",
    ],
    firstStep: "Architecting a multi-tenant systems contract and role-based access model.",
  },
  {
    id: "help-figure-out",
    label: "I need help figuring it out",
    summary: "You see an emerging opportunity or friction point, but aren't certain what technical shape the solution should take.",
    recommendedCapabilities: [
      "Product Strategy (Deep friction inquiry & technological evaluation)",
      "Technical Advisory (Choosing between SaaS, custom build, or AI)",
    ],
    firstStep: "An open technical conversation where we reckon with the problem together.",
  },
];

export function CapabilityMapping() {
  const [selectedId, setSelectedId] = useState("idea");
  const selected = MAPPING_OPTIONS.find((o) => o.id === selectedId) || MAPPING_OPTIONS[0];

  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/20 p-8 sm:p-12 dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <Badge variant="violet" className="text-xs font-mono">
          CAPABILITY MAPPING
        </Badge>
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          What are you trying to build?
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Select your current situation to see how RECKAI combines capabilities to solve your exact challenge.
        </p>
      </div>

      {/* Options Selector Grid */}
      <div className="flex flex-wrap gap-2">
        {MAPPING_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedId(opt.id)}
            className={`rounded-xl px-4 py-2.5 text-xs font-medium transition-all ${
              selectedId === opt.id
                ? "bg-violet-600 text-white shadow-sm font-semibold"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-750"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Selected Result Card */}
      <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm space-y-6">
        <div>
          <div className="text-xs font-mono uppercase text-violet-600 dark:text-violet-400 font-bold">
            Engagement Context
          </div>
          <p className="mt-1 text-base sm:text-lg font-medium text-neutral-900 dark:text-white leading-relaxed">
            {selected.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Recommended Capabilities
            </span>
            <ul className="mt-2 space-y-2">
              {selected.recommendedCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="text-violet-600 font-bold">✦</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Where We Begin
            </span>
            <p className="mt-2 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-mono">
              {selected.firstStep}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Link href="/start-project">
            <Button variant="primary" size="md" arrow="up-right">
              Discuss Your Project ↗
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
