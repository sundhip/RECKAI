import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function CaseStudyHero({
  eyebrow,
  title,
  tagline,
  client,
  industry,
  timeline,
  className,
}: {
  eyebrow?: string;
  title: string;
  tagline: string;
  client?: string;
  industry?: string;
  timeline?: string;
  className?: string;
}) {
  return (
    <div className={cn("py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80", className)}>
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="violet">{eyebrow || "Case Study"}</Badge>
          {industry && <span className="text-xs font-mono text-neutral-500">{industry}</span>}
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          {tagline}
        </p>

        {(client || timeline) && (
          <div className="flex flex-wrap gap-8 pt-4 text-xs font-mono text-neutral-500">
            {client && (
              <div>
                <span className="block text-neutral-400 uppercase text-[10px]">Client / Partner</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-semibold">{client}</span>
              </div>
            )}
            {timeline && (
              <div>
                <span className="block text-neutral-400 uppercase text-[10px]">Execution Timeline</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-semibold">{timeline}</span>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export function ProblemSection({
  problem,
  frictionPoints,
}: {
  problem: string;
  frictionPoints?: string[];
}) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
        01 / The Problem
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
        The Core Friction
      </h3>
      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {problem}
      </p>
      {frictionPoints && frictionPoints.length > 0 && (
        <ul className="space-y-2 pt-2">
          {frictionPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="text-red-500 font-mono text-xs mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ApproachSection({
  approach,
  principles,
}: {
  approach: string;
  principles?: string[];
}) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
        02 / The Reckoning
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
        Strategic Architecture & Approach
      </h3>
      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {approach}
      </p>
      {principles && principles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {principles.map((pr, idx) => (
            <div key={idx} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400">P{idx + 1}</span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-1 font-medium">{pr}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SolutionSection({
  solution,
  features,
}: {
  solution: string;
  features?: string[];
}) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
        03 / The Built Solution
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
        Shipped Software & Implementation
      </h3>
      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {solution}
      </p>
      {features && features.length > 0 && (
        <div className="space-y-2 pt-2">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AISection({
  capabilities,
}: {
  capabilities: { title: string; description: string }[];
}) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
        04 / Applied Intelligence
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
        Machine Intelligence & Model Architecture
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {capabilities.map((cap, idx) => (
          <Card key={idx} className="p-5">
            <CardHeader className="p-0 pb-2">
              <CardTitle className="text-base font-semibold text-violet-600 dark:text-violet-400">
                ✦ {cap.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {cap.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function TechnologySection({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="space-y-4">
      <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
        Tech Stack & Infrastructure
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-mono text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OutcomeSection({
  narrative,
  highlights,
}: {
  narrative: string;
  highlights?: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 dark:border-neutral-800 dark:bg-reckai-dark-surface space-y-4">
      <div className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
        Outcomes & Shipped Impact
      </div>
      <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {narrative}
      </p>
      {highlights && highlights.length > 0 && (
        <ul className="space-y-1.5 pt-2">
          {highlights.map((h, idx) => (
            <li key={idx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
              <span className="text-violet-600">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function NextProject({
  title,
  slug,
  type = "ORIGINAL",
}: {
  title: string;
  slug: string;
  type?: "ORIGINAL" | "BUILD";
}) {
  return (
    <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 py-16 text-center space-y-4">
      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
        Next {type === "ORIGINAL" ? "Original Product" : "Case Study"}
      </span>
      <h4 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h4>
      <div className="pt-2">
        <Link href={`/work/${slug}`}>
          <Button variant="outline" size="sm" arrow="right">
            Continue Reading
          </Button>
        </Link>
      </div>
    </div>
  );
}
