"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/events";

export function ServicesPreview() {
  const capabilities = [
    {
      title: "AI Products",
      desc: "Intelligent digital products designed around real human use cases, from multimodal analysis to multi-step reasoning agents.",
      tags: ["Multi-Agent Pipelines", "Multimodal Perception", "Reasoning Workflows"],
    },
    {
      title: "Web Applications",
      desc: "Production-grade web platforms engineered with Next.js, React, and TypeScript—built for high performance and scalability.",
      tags: ["Full-Stack Next.js", "Type-Safe Architecture", "Fluid UI/UX"],
    },
    {
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile products built for tactile reliability, offline resilience, and delightful user interaction.",
      tags: ["iOS & Android", "Offline Sync", "Tactile Haptics"],
    },
    {
      title: "Intelligent Systems",
      desc: "Automated decision-support, predictive models, real-time recommendation engines, and high-throughput data processing.",
      tags: ["Decision Support", "Predictive Analytics", "Automated Workflows"],
    },
    {
      title: "Custom Software",
      desc: "Bespoke digital systems and infrastructure built specifically around complex operational bottlenecks and enterprise needs.",
      tags: ["Database Architecture", "Cloud APIs", "Modernization"],
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-8 dark:border-neutral-800/80">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="violet">CAPABILITIES</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              What we can build
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Technology engineered around genuine utility, not inflated buzzwords.
            </p>
          </div>
          <Link
            href="/services"
            onClick={() => trackEvent("service_click", { action: "view_all" })}
          >
            <Button variant="ghost" size="sm" arrow="right">
              View All Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <Card
              key={cap.title}
              className="flex flex-col justify-between hover:border-violet-300 dark:hover:border-violet-800/60"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  {cap.title}
                </CardTitle>
                <CardDescription className="text-sm mt-2 leading-relaxed">
                  {cap.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-850">
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-neutral-100 px-2.5 py-1 text-[11px] font-mono text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/start-project"
                  onClick={() => trackEvent("service_click", { service: cap.title })}
                >
                  <Button variant="ghost" size="sm" arrow="right" className="px-0 hover:bg-transparent">
                    <span className="text-violet-600 dark:text-violet-400 font-semibold text-xs">
                      Start {cap.title} Project →
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
