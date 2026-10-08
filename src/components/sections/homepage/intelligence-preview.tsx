import React from "react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function IntelligencePreview() {
  const capabilities = [
    {
      name: "Artificial Intelligence",
      description: "Custom reasoning pipelines and LLM orchestration tuned for domain workflows.",
    },
    {
      name: "Machine Learning",
      description: "Supervised and unsupervised models for predictive scoring and behavioral clustering.",
    },
    {
      name: "Computer Vision",
      description: "Multimodal visual inspection, document perception, and wardrobe classification.",
    },
    {
      name: "Recommendation Systems",
      description: "Context-aware heuristic and vector-based personalized recommendation matrices.",
    },
    {
      name: "Intelligent Automation",
      description: "Multi-step automated workflows eliminating human cognitive fatigue and repetitive friction.",
    },
    {
      name: "Data Intelligence",
      description: "Relational modeling, vector search, time-series forecasting, and auditable pipelines.",
    },
    {
      name: "Dynamic Personalization",
      description: "Interfaces and state machines that proactively adapt to user habits and rhythms.",
    },
    {
      name: "Intelligent Interfaces",
      description: "Tactile, responsive digital interfaces designed to surface insights with zero cognitive clutter.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-neutral-200/80 bg-neutral-50/50 dark:border-neutral-800/80 dark:bg-reckai-dark-surface/40">
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <Badge variant="violet">TECHNOLOGY & INTELLIGENCE</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Applied machine intelligence.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            We build with modern computational intelligence across our own software products and partner platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-reckai-dark transition-all duration-200 hover:border-violet-300 dark:hover:border-violet-800/60"
            >
              <div className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold mb-2">
                ✦ {cap.name}
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
