"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/events";

export function BuildsPreview() {
  const steps = [
    { label: "Your Idea", desc: "Problem or requirement" },
    { label: "Reckon", desc: "Rigorous feasibility & reasoning" },
    { label: "Design", desc: "High-craft UI & UX architecture" },
    { label: "Engineer", desc: "Full-stack code & databases" },
    { label: "Intelligence", desc: "Applied AI models & reasoning" },
    { label: "Shipped Product", desc: "Production release on cloud" },
  ];

  return (
    <section className="py-20 sm:py-28 border-y border-neutral-200/80 bg-neutral-50/50 dark:border-neutral-800/80 dark:bg-reckai-dark-surface/40">
      <Container className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="default" className="font-mono text-[10px] tracking-widest font-bold">
              RECKAI BUILDS
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Have an idea worth building?
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              Bring us the problem, the idea, or the opportunity. We don&apos;t just write tickets—we partner as a high-velocity product engineering team to turn concepts into real, production-ready software.
            </p>

            {/* Transformation Step Flow */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                The Product Transformation Pipeline
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {steps.map((st, idx) => (
                  <div
                    key={st.label}
                    className="p-3 rounded-xl border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-reckai-dark"
                  >
                    <div className="text-[10px] font-mono text-violet-600 dark:text-violet-400 font-bold">
                      0{idx + 1}
                    </div>
                    <div className="text-xs font-semibold text-neutral-900 dark:text-white mt-0.5">
                      {st.label}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/start-project"
                onClick={() => trackEvent("builds_section_click", { action: "start_project" })}
              >
                <Button variant="primary" size="lg" arrow="up-right">
                  Start a Project
                </Button>
              </Link>
              <Link href="/work/builds">
                <Button variant="outline" size="lg" arrow="right">
                  Learn About Builds
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Technically Credible Transformation Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-floating dark:border-neutral-800 dark:bg-reckai-dark space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-850 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600" />
                  <span className="text-xs font-mono text-neutral-500">
                    INTAKE ENGINE // ARCHITECTURE SYNTHESIS
                  </span>
                </div>
                <Badge variant="subtle" className="text-[10px]">
                  Bespoke Engineering
                </Badge>
              </div>

              {/* Transformation Stack */}
              <div className="space-y-4">
                {/* 1. Client Requirement Layer */}
                <div className="p-4 rounded-xl border border-neutral-200/70 bg-neutral-50/60 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Input Layer</div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Client Problem & Product Vision
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    &ldquo;We need an automated decision-support system to coordinate complex workflows with native AI reasoning.&rdquo;
                  </p>
                </div>

                {/* 2. RECKON Synthesis */}
                <div className="p-4 rounded-xl border border-violet-200/80 bg-violet-50/40 dark:border-violet-900/40 dark:bg-violet-950/20">
                  <div className="text-[10px] font-mono text-violet-600 dark:text-violet-400 uppercase font-semibold">
                    Reckon Layer
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Domain Reasoning & Schema Modeling
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="text-[10px] font-mono text-neutral-900 dark:text-neutral-200 px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-violet-200/60 dark:border-violet-800/50">
                      PostgreSQL Relational Graph
                    </span>
                    <span className="text-[10px] font-mono text-neutral-900 dark:text-neutral-200 px-2 py-0.5 rounded bg-white dark:bg-neutral-800 border border-violet-200/60 dark:border-violet-800/50">
                      Multi-Step Reasoning Pipeline
                    </span>
                  </div>
                </div>

                {/* 3. Shipped Production Product */}
                <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/30 dark:border-emerald-950/60 dark:bg-emerald-950/20">
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
                    Output Layer
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white mt-0.5">
                    Production Application Deployed
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">
                    Real-time web & mobile application, enterprise-grade authentication, 99.9% uptime SLA.
                  </p>
                </div>
              </div>

              {/* Trust statement */}
              <div className="text-[11px] font-mono text-neutral-400 text-center pt-2">
                Guaranteed client confidentiality • Zero outsourced code
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
