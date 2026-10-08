"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/events";

export function ProcessPreview() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      desc: "Deeply study the friction, user psychology, and domain realities.",
    },
    {
      step: "02",
      title: "Reckon",
      desc: "Reason through technical feasibility, eliminate false assumptions, and formulate the core architecture.",
      highlight: true,
    },
    {
      step: "03",
      title: "Design",
      desc: "Craft high-hierarchy editorial UI, fluid layout rhythm, and responsive tactile interactions.",
    },
    {
      step: "04",
      title: "Engineer",
      desc: "Write type-safe, resilient full-stack code with zero bloat and scalable database schemas.",
    },
    {
      step: "05",
      title: "Add Intelligence",
      desc: "Integrate multimodal models, machine learning, and contextual inference where it genuinely helps.",
    },
    {
      step: "06",
      title: "Deploy",
      desc: "Ship to production infrastructure with automated CI/CD, SSL, and sub-second edge routing.",
    },
    {
      step: "07",
      title: "Improve",
      desc: "Audit performance, observe user interactions, and iteratively elevate capability.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200/80 bg-neutral-50/50 dark:border-neutral-800/80 dark:bg-reckai-dark-surface/40">
      <Container className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="violet">METHODOLOGY</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              We reckon before we build.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Good products start with understanding the problem. Deliberate thinking prevents building software nobody needs.
            </p>
          </div>
          <Link
            href="/process"
            onClick={() => trackEvent("process_view", { action: "view_process_page" })}
          >
            <Button variant="ghost" size="sm" arrow="right">
              Explore The Methodology
            </Button>
          </Link>
        </div>

        {/* 7-Step Sequence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                st.highlight
                  ? "border-2 border-violet-500 bg-violet-50/60 dark:bg-violet-950/30 dark:border-violet-600 shadow-violet-glow"
                  : "border border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-reckai-dark"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className={st.highlight ? "text-violet-600 dark:text-violet-400" : "text-neutral-400"}>
                    {st.step}
                  </span>
                  {st.highlight && (
                    <Badge variant="violet" className="text-[10px] uppercase">
                      Core Ethos
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white mt-4">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
