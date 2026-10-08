import React from "react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Differentiation() {
  const points = [
    {
      title: "Product Thinking Over Ticket Taking",
      desc: "We don't mindlessly execute feature requests. We interrogate the underlying problem to ensure every line of code creates genuine human or commercial value.",
    },
    {
      title: "AI Where It Actually Helps",
      desc: "We reject superficial AI wrappers. We integrate machine intelligence only where predictive modeling, multimodal perception, or automation truly unlocks superior capability.",
    },
    {
      title: "Real Software Craftsmanship",
      desc: "From strict TypeScript schemas to deterministic database migrations and sub-second page performance, we build software designed to endure.",
    },
    {
      title: "Battle-Tested Dual Model",
      desc: "Because we engineer our own proprietary software (RECKAI Originals), our client partners benefit from techniques, tooling, and architectures we have personally battle-tested.",
    },
    {
      title: "Rapid Iterative Momentum",
      desc: "We break complex projects into shippable milestones, validating technical hypotheses early rather than building in isolation for months.",
    },
    {
      title: "Radical Transparency",
      desc: "No outsourced development, no fake metrics, no hidden markups. We communicate with technical candor and take ownership of the outcome.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container className="space-y-16">
        <div className="max-w-3xl space-y-4">
          <Badge variant="violet">WHY RECKAI</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            We don&apos;t just build what we&apos;re asked to build.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Whether the idea comes from us or from you, we begin by understanding the problem before deciding what should be built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => (
            <Card key={pt.title} className="p-6 sm:p-8">
              <CardHeader className="p-0 pb-3">
                <CardTitle className="text-lg sm:text-xl font-bold">
                  {pt.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pt.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
