"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ProductExperienceSimProps {
  slug: string;
}

export function ProductExperienceSim({ slug }: ProductExperienceSimProps) {
  if (slug === "omnixperience") {
    return <OmniXperienceSim />;
  }
  if (slug === "evolveaura") {
    return <EvolveAuraSim />;
  }
  if (slug === "organxcell") {
    return <OrganXcellSim />;
  }
  if (slug === "finance") {
    return <FinanceSim />;
  }
  return null;
}

/* =========================================================================
   1. OMNIXPERIENCE SIMULATION
   ========================================================================= */
function OmniXperienceSim() {
  const [activeTab, setActiveTab] = useState<"briefing" | "wardrobe" | "circadian" | "liquidity">("briefing");

  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-neutral-50/60 p-6 sm:p-10 shadow-medium dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              Live Synthesis Runtime
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            OmniXperience Daily Context Engine
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">
            Synchronizing Wardrobe, Circadian Flow, Environmental Sensors & Liquidity Pacing
          </p>
        </div>

        {/* Navigation Selector */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          {(
            [
              { id: "briefing", label: "Morning Synthesis" },
              { id: "wardrobe", label: "Wardrobe Vision" },
              { id: "circadian", label: "Circadian Flow" },
              { id: "liquidity", label: "Liquidity Pacing" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {activeTab === "briefing" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-5 dark:border-violet-900/30 dark:bg-violet-950/20">
              <div className="flex items-center justify-between text-xs font-mono text-violet-700 dark:text-violet-300">
                <span>07:15 AM SYNTHESIS</span>
                <span>CONFIDENCE: 98.4%</span>
              </div>
              <p className="mt-2 text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
                &ldquo;Good morning. Forecast indicates 14°C with intermittent drizzle until 2 PM. You have an Executive Strategy Review at 11:30 AM followed by two deep-focus blocks. Today&rsquo;s wardrobe is optimized for tailored warmth. Calendar transit buffers adjusted by +20 minutes. Daily discretionary liquidity paced at $65.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Environment</span>
                <div className="text-xl font-bold text-neutral-900 dark:text-white mt-1">14°C · Light Rain</div>
                <div className="text-xs text-neutral-500 mt-1">UV Index 2 · Humidity 78%</div>
              </div>
              <div className="rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Selected Ensemble</span>
                <div className="text-xl font-bold text-neutral-900 dark:text-white mt-1">Cashmere & Trench</div>
                <div className="text-xs text-neutral-500 mt-1">Charcoal / Camel · Harmony 96%</div>
              </div>
              <div className="rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Schedule State</span>
                <div className="text-xl font-bold text-neutral-900 dark:text-white mt-1">3 Blocks · 1 Review</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Protected 3.5h Deep Work</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "wardrobe" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>OUTERWEAR</span>
                <span className="text-violet-600 font-semibold">MATCH 98%</span>
              </div>
              <div className="h-32 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-sm font-mono text-neutral-500">
                [Waterproof Gabardine Trench]
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Selected for 78% precipitation probability and formal meeting etiquette.
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>MID LAYER</span>
                <span className="text-violet-600 font-semibold">MATCH 94%</span>
              </div>
              <div className="h-32 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-sm font-mono text-neutral-500">
                [Charcoal Merino Crewneck]
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Optimal thermal equilibrium for 19°C indoor climate control.
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>FOOTWEAR</span>
                <span className="text-violet-600 font-semibold">MATCH 99%</span>
              </div>
              <div className="h-32 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-sm font-mono text-neutral-500">
                [Water-Resistant Chelsea Boots]
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                Tread grip verified against wet metropolitan pavement conditions.
              </div>
            </div>
          </div>
        )}

        {activeTab === "circadian" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Dynamic Circadian Timeline
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-500">08:30 - 09:00</span>
                    <span className="text-sm font-medium">Cognitive Ramp-Up & Low-Stress Triage</span>
                  </div>
                  <Badge variant="default" className="text-[10px]">Autopilot</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-violet-50/60 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/30">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-violet-600">09:30 - 11:30</span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">Deep Work Block I — Architectural Modeling</span>
                  </div>
                  <Badge variant="violet" className="text-[10px]">Notifications Muted</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-600">11:30 - 12:30</span>
                    <span className="text-sm font-medium">Executive Strategy Review</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">Meeting +20m Transit Buffer</Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "liquidity" && (
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase text-neutral-400">Daily Discretionary Buffer</span>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">$65.00 <span className="text-xs text-neutral-500 font-normal">paced for month-end reserve</span></div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">PACE: OPTIMAL</span>
                <div className="text-xs text-neutral-500">Savings Target Track: 104%</div>
              </div>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: "38%" }} />
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              Deterministic rule: Discretionary spend recalculates daily based on upcoming recurring obligations, preventing end-of-month cash pinches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   2. EVOLVEAURA SIMULATION
   ========================================================================= */
function EvolveAuraSim() {
  const [archetype, setArchetype] = useState<"Scholar" | "Warrior" | "Sage" | "Creator">("Scholar");

  const archetypeConfig = {
    Scholar: {
      tag: "Intellectual Rigor & Systematic Synthesis",
      score: 88,
      readiness: "Optimal for Deep Cognitive Absorption",
      quests: [
        { title: "Deep Architectural Study", duration: "90 min", status: "In Progress" },
        { title: "Source Text Exegesis / Reading", duration: "45 min", status: "Scheduled" },
        { title: "Nightly Screen Detox (No LED after 9 PM)", duration: "60 min", status: "Pending" },
      ],
      detoxHours: "4.2 hrs screen-free logged",
    },
    Warrior: {
      tag: "Discipline, Execution & High Output",
      score: 92,
      readiness: "High Energy & Kinetic Drive",
      quests: [
        { title: "Sprint Implementation (Uninterrupted Code)", duration: "120 min", status: "In Progress" },
        { title: "Physical Conditioning & Mobility Protocol", duration: "50 min", status: "Scheduled" },
        { title: "Zero Dopamine-Loop Audit", duration: "Continuous", status: "Active" },
      ],
      detoxHours: "3.8 hrs screen-free logged",
    },
    Sage: {
      tag: "Equilibrium, Reflection & Mental Clarity",
      score: 84,
      readiness: "Calm, Reflective State",
      quests: [
        { title: "Mindfulness & Breathwork Session", duration: "30 min", status: "Completed" },
        { title: "Unstructured Analog Journaling", duration: "40 min", status: "Scheduled" },
        { title: "Ambient Walk (No Headphones / Phone)", duration: "45 min", status: "Pending" },
      ],
      detoxHours: "5.5 hrs screen-free logged",
    },
    Creator: {
      tag: "Generative Flow, Synthesis & Divergent Thought",
      score: 90,
      readiness: "Peak Flow State & Exploration",
      quests: [
        { title: "Original Concept Drafting & Ideation", duration: "90 min", status: "In Progress" },
        { title: "Visual & Semantic Moodboard Synthesis", duration: "60 min", status: "Scheduled" },
        { title: "Digital Input Fasting (Consume Zero Media)", duration: "All Afternoon", status: "Active" },
      ],
      detoxHours: "4.0 hrs screen-free logged",
    },
  };

  const current = archetypeConfig[archetype];

  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-neutral-50/60 p-6 sm:p-10 shadow-medium dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="violet" className="text-[10px] font-mono">BEHAVIORAL ENGINE</Badge>
            <span className="text-xs font-mono text-neutral-400">Psychological Habit Model</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            EvolveAura Archetypal Focus System
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">
            Select an archetype to view how daily quests dynamically recalibrate to cognitive capacity
          </p>
        </div>

        {/* Archetype Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          {(["Scholar", "Warrior", "Sage", "Creator"] as const).map((arch) => (
            <button
              key={arch}
              onClick={() => setArchetype(arch)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                archetype === arch
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-white font-bold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {arch}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Cognitive Score */}
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
          <div className="text-xs font-mono uppercase text-neutral-400">
            Cognitive State Score
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-violet-600 dark:text-violet-400">
              {current.score}
            </span>
            <span className="text-sm font-mono text-neutral-400">/ 100</span>
          </div>
          <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            ● {current.readiness}
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Calculated via psychometric self-reporting, sleep duration, and screen fragmentation metrics.
          </p>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="text-[11px] font-mono uppercase text-neutral-400">Digital Detox Status</div>
            <div className="text-sm font-bold text-neutral-900 dark:text-white mt-1">
              {current.detoxHours}
            </div>
            <div className="text-xs text-neutral-500 mt-1">Non-punitive streak tracking active</div>
          </div>
        </div>

        {/* Right Column: Dynamic Quests */}
        <div className="lg:col-span-2 rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400">
                Active Archetype
              </div>
              <div className="text-base font-bold text-neutral-900 dark:text-white">
                The {archetype} — <span className="text-violet-600 dark:text-violet-400 font-normal">{current.tag}</span>
              </div>
            </div>
            <Badge variant="outline" className="text-[10px] font-mono">3 Calibrated Quests</Badge>
          </div>

          <div className="space-y-3 pt-2">
            {current.quests.map((quest, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/60 dark:border-neutral-800 dark:bg-neutral-850"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300 text-xs font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {quest.title}
                    </div>
                    <div className="text-xs text-neutral-500 font-mono">Paced for {quest.duration}</div>
                  </div>
                </div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-md ${
                    quest.status === "In Progress" || quest.status === "Active"
                      ? "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                      : quest.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  }`}
                >
                  {quest.status}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-violet-50/40 border border-violet-100/60 dark:bg-violet-950/20 dark:border-violet-900/30 text-[11px] text-neutral-600 dark:text-neutral-400">
            <strong>Ethical Guardrail:</strong> EvolveAura never deploys fake urgency timers, badges designed for dopamine addiction, or punitive penalties when a day is missed.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. ORGANXCELL SIMULATION
   ========================================================================= */
function OrganXcellSim() {
  const [selectedDonor, setSelectedDonor] = useState<"D-4091" | "D-8102">("D-4091");

  const donorData = {
    "D-4091": {
      organ: "Kidney (Left)",
      bloodGroup: "O+",
      coldIschemiaWindow: "03:42:10 remaining (Max 24h)",
      hlaProfile: "A*02, A*24, B*07, B*44, DRB1*04, DRB1*15",
      origin: "Memorial Regional Trauma Center · Philadelphia, PA",
      topRecipients: [
        {
          rank: 1,
          id: "REC-9912",
          score: "96.4%",
          hlaMatch: "6/6 Full Match",
          urgencyTier: "Tier 1A (Critical)",
          transitTime: "1h 12m (Medevac)",
          safetyCheck: "Cross-Match Negative",
        },
        {
          rank: 2,
          id: "REC-3419",
          score: "91.2%",
          hlaMatch: "5/6 Antigen Match",
          urgencyTier: "Tier 1B",
          transitTime: "2h 40m (Ground)",
          safetyCheck: "Cross-Match Negative",
        },
      ],
    },
    "D-8102": {
      organ: "Heart",
      bloodGroup: "A-",
      coldIschemiaWindow: "01:54:20 remaining (Max 4h)",
      hlaProfile: "A*01, A*03, B*08, B*35, DRB1*03, DRB1*11",
      origin: "St. Jude University Hospital · Boston, MA",
      topRecipients: [
        {
          rank: 1,
          id: "REC-1044",
          score: "98.1%",
          hlaMatch: "6/6 Full Match",
          urgencyTier: "Status 1A (ECMO/Impella)",
          transitTime: "45m (Air Ambulance)",
          safetyCheck: "Cross-Match Negative",
        },
        {
          rank: 2,
          id: "REC-7782",
          score: "87.5%",
          hlaMatch: "4/6 Antigen Match",
          urgencyTier: "Status 1B",
          transitTime: "1h 30m (Air Ambulance)",
          safetyCheck: "Cross-Match Negative",
        },
      ],
    },
  };

  const current = donorData[selectedDonor];

  return (
    <div className="rounded-3xl border border-red-200/80 bg-gradient-to-b from-white to-neutral-50/60 p-6 sm:p-10 shadow-medium dark:border-red-950/40 dark:from-neutral-900 dark:to-neutral-950 space-y-6">
      {/* Disclaimer Banner */}
      <div className="rounded-xl border border-amber-300 bg-amber-50/80 p-3.5 dark:border-amber-900/60 dark:bg-amber-950/30 text-xs text-amber-900 dark:text-amber-200">
        <strong>CLINICAL DECISION SUPPORT NOTICE:</strong> OrganXcell is an intelligent algorithmic decision-support tool. It computes HLA cross-matching, urgency scores, and transit feasibility for clinical review. It does NOT make autonomous medical decisions or replace certified transplant surgical teams.
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
              Clinical Registry Telemetry
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            OrganXcell Allocation & Transit Matrix
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">
            Deterministic HLA 6-Antigen Matching, Waitlist Urgency & Transit Feasibility
          </p>
        </div>

        {/* Donor Selector */}
        <div className="flex gap-2">
          {(["D-4091", "D-8102"] as const).map((donor) => (
            <button
              key={donor}
              onClick={() => setSelectedDonor(donor)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-all ${
                selectedDonor === donor
                  ? "bg-red-600 text-white font-bold shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400"
              }`}
            >
              Donor {donor} ({donor === "D-4091" ? "Kidney" : "Heart"})
            </button>
          ))}
        </div>
      </div>

      {/* Donor Info Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-850 text-xs">
        <div>
          <span className="font-mono text-neutral-400">ORGAN & BLOOD</span>
          <div className="font-bold text-sm text-neutral-900 dark:text-white mt-0.5">
            {current.organ} · {current.bloodGroup}
          </div>
        </div>
        <div>
          <span className="font-mono text-neutral-400">COLD ISCHEMIA BUFFER</span>
          <div className="font-bold text-sm text-red-600 dark:text-red-400 mt-0.5 font-mono">
            {current.coldIschemiaWindow}
          </div>
        </div>
        <div>
          <span className="font-mono text-neutral-400">HLA PHENOTYPE</span>
          <div className="font-mono text-xs text-neutral-900 dark:text-white mt-0.5">
            {current.hlaProfile}
          </div>
        </div>
        <div>
          <span className="font-mono text-neutral-400">ORIGIN PROCUREMENT</span>
          <div className="text-neutral-900 dark:text-white mt-0.5 font-medium">
            {current.origin}
          </div>
        </div>
      </div>

      {/* Ranked Recipient Matches */}
      <div className="space-y-3">
        <div className="text-xs font-mono uppercase text-neutral-400">
          Ranked Clinical Allocation Queue (Real-Time Scored)
        </div>
        <div className="space-y-3">
          {current.topRecipients.map((rec) => (
            <div
              key={rec.id}
              className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 font-mono font-bold text-sm">
                    #{rec.rank}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-neutral-900 dark:text-white font-mono">
                        {rec.id}
                      </span>
                      <Badge variant="violet" className="text-[10px] font-mono">
                        {rec.hlaMatch}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        {rec.urgencyTier}
                      </Badge>
                    </div>
                    <div className="text-xs text-neutral-500 font-mono mt-0.5">
                      Transit Feasibility: {rec.transitTime} · Verification: {rec.safetyCheck}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black text-red-600 dark:text-red-400 font-mono">
                    {rec.score}
                  </div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400">
                    Calculated Match Index
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. RECKAI FINANCE SIMULATION
   ========================================================================= */
function FinanceSim() {
  const [scenario, setScenario] = useState<"base" | "capex" | "delay">("base");

  const scenarios = {
    base: {
      title: "Base Forecast Trajectory",
      runway: "18.4 Months",
      monthlyBurn: "$12,400 / mo",
      pacing: "Optimal (Surplus buffer +$4,100)",
      description: "Baseline organic revenue curve with standard recurring vendor commitments.",
      alerts: [
        { type: "Positive", text: "Safe liquidity horizon sustained through Q4 2027" },
        { type: "Notice", text: "2 redundant cloud subscriptions flagged ($480/yr recovery)" },
      ],
    },
    capex: {
      title: "Planned $25k Capex / Tax Outflow",
      runway: "14.2 Months",
      monthlyBurn: "$16,200 / mo (Paced)",
      pacing: "Calibrated (-12% discretionary buffer)",
      description: "Simulating sudden capital expenditure or scheduled quarterly tax allocation.",
      alerts: [
        { type: "Warning", text: "Discretionary spend throttled by 12% to preserve emergency float" },
        { type: "Positive", text: "Zero debt facility draw required; liquidity corridor intact" },
      ],
    },
    delay: {
      title: "30-Day Client Invoice Payment Delay",
      runway: "15.8 Months",
      monthlyBurn: "$12,400 / mo",
      pacing: "Defensive Pacing Activated",
      description: "Modeling cash volatility if two major enterprise accounts delay invoice settlement.",
      alerts: [
        { type: "Action", text: "Autonomous alert: delay optional vendor renewals until Day 45" },
        { type: "Positive", text: "Runway remains above mandatory 12-month safety threshold" },
      ],
    },
  };

  const active = scenarios[scenario];

  return (
    <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-neutral-50/60 p-6 sm:p-10 shadow-medium dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              Forward-Looking Wealth Engine
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            RECKAI Finance Cashflow Modeling Console
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-0.5">
            Test how different liquidity events affect predictive runway and autonomous pacing
          </p>
        </div>

        {/* Scenario Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800">
          {(
            [
              { id: "base", label: "Baseline" },
              { id: "capex", label: "$25k Capex Outflow" },
              { id: "delay", label: "Invoice Delay" },
            ] as const
          ).map((s) => (
            <button
              key={s.id}
              onClick={() => setScenario(s.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                scenario === s.id
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-white font-bold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2">
          <span className="text-xs font-mono uppercase text-neutral-400">Projected Runway</span>
          <div className="text-4xl font-extrabold text-violet-600 dark:text-violet-400 font-mono">
            {active.runway}
          </div>
          <p className="text-xs text-neutral-500">{active.description}</p>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2">
          <span className="text-xs font-mono uppercase text-neutral-400">Effective Burn Pacing</span>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white font-mono">
            {active.monthlyBurn}
          </div>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">
            {active.pacing}
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2">
          <span className="text-xs font-mono uppercase text-neutral-400">Predictive Anomaly Radar</span>
          <div className="space-y-1.5 pt-1">
            {active.alerts.map((alert, idx) => (
              <div
                key={idx}
                className="text-xs p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800 flex items-start gap-2"
              >
                <span className="text-violet-600 font-bold">✦</span>
                <span className="text-neutral-700 dark:text-neutral-300">{alert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-[11px] font-mono text-neutral-400 border-t border-neutral-100 dark:border-neutral-800 pt-3">
        Disclaimer: RECKAI Finance provides algorithmic cashflow modeling and liquidity pacing software. It does not provide legal financial advice or guaranteed yield predictions.
      </div>
    </div>
  );
}
