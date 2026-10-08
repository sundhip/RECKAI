import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WhatIsRECKAI() {
  return (
    <section className="py-20 sm:py-28 border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 dark:border-neutral-800/80 dark:bg-reckai-dark-surface/40 relative">
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40 dark:opacity-15" />
      <Container className="space-y-16 relative">
        {/* Intro Manifesto */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="violet">THE COMPANY</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
            We build what should exist.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed font-normal">
            RECKAI combines product thinking, software engineering, and artificial intelligence to create useful digital products. We operate in two distinct ways—creating our own proprietary products and engineering intelligent software for partners.
          </p>
        </div>

        {/* Side-by-Side Dual Distinction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: RECKAI Originals */}
          <Card className="flex flex-col justify-between border-violet-200/90 bg-gradient-to-b from-white via-white to-violet-50/20 shadow-[0_4px_24px_rgba(124,58,237,0.06)] hover:shadow-[0_12px_36px_rgba(124,58,237,0.12)] hover:border-violet-400/80 dark:border-violet-900/40 dark:from-[#111116] dark:to-[#0A0A0C]">
            <CardHeader>
              <div className="flex items-center justify-between pb-2">
                <Badge variant="violet" className="font-mono text-[10px] tracking-widest font-bold">
                  RECKAI ORIGINALS
                </Badge>
                <span className="text-xs font-mono text-neutral-400">Pillar 01</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl mt-2">
                Problems we discover. <br />
                <span className="text-violet-600 dark:text-violet-400">Products we create.</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base mt-2">
                We independently identify friction, research domain complexity, reason through the architecture, engineer full-stack systems, add applied AI, and launch our own products.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 pt-4 border-t border-neutral-100 dark:border-neutral-850">
              <div className="rounded-xl border border-neutral-200/80 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/80 text-xs font-mono text-neutral-700 dark:text-neutral-300 space-y-1">
                <div className="text-[10px] text-violet-600 dark:text-violet-400 uppercase font-semibold">Lifecycle</div>
                <div>Problem Discovery → Deep Architecture → Design</div>
                <div>→ Full-Stack Engineering → Added Intelligence → Shipped IP</div>
              </div>

              <Link href="/work/originals" className="inline-block">
                <Button variant="outline" size="sm" arrow="right">
                  Explore Originals
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pillar 2: RECKAI Builds */}
          <Card className="flex flex-col justify-between border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(99,102,241,0.08)] hover:border-slate-300 dark:border-neutral-800 dark:from-[#111116] dark:to-[#0A0A0C]">
            <CardHeader>
              <div className="flex items-center justify-between pb-2">
                <Badge variant="default" className="font-mono text-[10px] tracking-widest font-bold">
                  RECKAI BUILDS
                </Badge>
                <span className="text-xs font-mono text-slate-400 dark:text-neutral-500">Pillar 02</span>
              </div>
              <CardTitle className="text-2xl sm:text-3xl mt-2">
                Ideas others bring. <br />
                <span className="text-slate-950 dark:text-white">Products we build.</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base mt-2">
                We partner with ambitious founders, businesses, and enterprises to turn complex problems and visionary concepts into shippable applications, mobile platforms, and custom AI systems.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 pt-4 border-t border-slate-100 dark:border-neutral-850">
              <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/80 text-xs font-mono text-slate-700 dark:text-neutral-300 space-y-1">
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 uppercase font-semibold">Lifecycle</div>
                <div>Partner Vision → Technical Architecture → Design System</div>
                <div>→ Full-Stack Build → Applied Intelligence → Production Launch</div>
              </div>

              <Link href="/start-project" className="inline-block">
                <Button variant="primary" size="sm" arrow="up-right">
                  Start a Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
