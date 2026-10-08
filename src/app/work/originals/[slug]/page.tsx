import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ProductExperienceSim } from "@/components/products/product-experience-sim";
import { productService } from "@/server/services/product.service";
import { siteConfig } from "@/lib/config/site";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const originals = await productService.getOriginals();
  return originals.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.slug);
  if (!product || product.type !== "ORIGINAL") return {};

  return {
    title: `${product.name} — RECKAI Originals`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — ${product.tagline || product.shortDescription}`,
      description: product.description,
      siteName: siteConfig.name,
    },
  };
}

export default async function OriginalProductDetailPage({ params }: PageProps) {
  const product = await productService.getProductBySlug(params.slug);

  if (!product || product.type !== "ORIGINAL") {
    notFound();
  }

  const allOriginals = await productService.getOriginals();
  const currentIndex = allOriginals.findIndex((p) => p.slug === product.slug);
  const prevProduct =
    currentIndex > 0
      ? allOriginals[currentIndex - 1]
      : allOriginals[allOriginals.length - 1];
  const nextProduct =
    currentIndex < allOriginals.length - 1
      ? allOriginals[currentIndex + 1]
      : allOriginals[0];

  return (
    <div className="py-20 sm:py-28 space-y-24">
      {/* 1. PRODUCT HERO */}
      <Container className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <Link
              href="/work/originals"
              className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              ← Back to RECKAI Originals
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <Badge variant="violet" className="text-[10px] font-mono tracking-widest font-bold">
              RECKAI ORIGINAL
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Badge variant="outline" className="text-xs font-mono">
              {product.currentStage || "Active Development"}
            </Badge>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            {product.category}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-medium leading-relaxed">
            {product.tagline || product.shortDescription}
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* Real Product Screenshot Showcase */}
        {product.images && product.images[0] && (
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-xl dark:border-neutral-800">
            <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/95 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300">
                <span>🔒</span>
                <span>https://{product.slug}.reckai.app</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Production
              </span>
            </div>
            <div className="w-full overflow-hidden bg-slate-950 flex items-center justify-center p-1">
              <img
                src={product.images[0]}
                alt={`${product.name} application screenshot`}
                className="w-full h-auto max-h-[620px] object-contain object-top rounded-b-2xl"
              />
            </div>
          </div>
        )}

        {/* Hero Interactive Telemetry Frame */}
        <div className="pt-4">
          <ProductExperienceSim slug={product.slug} />
        </div>
      </Container>

      {/* 2. PRODUCT OVERVIEW & SIGNALS */}
      <Container>
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Category Domain</span>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">{product.category}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Target Cohort</span>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">
                {product.problemDeep?.whoExperiencesIt?.split(",")[0] || "Founders & Professionals"}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Engineering State</span>
              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                {product.currentStage || "Active Development"}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-neutral-400">Intelligence Focus</span>
              <div className="text-sm font-bold text-violet-600 dark:text-violet-400 font-mono">
                {product.aiCapabilities.length} Applied Systems
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. THE PROBLEM (DEEP DIVE) */}
      {product.problemDeep && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
              01 / The Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              The Problem We Identified
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-100 bg-red-50/20 dark:border-red-950/40 dark:bg-red-950/10">
              <CardHeader>
                <div className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400">
                  Observed Friction
                </div>
                <CardTitle className="mt-2 text-xl">The Daily Strain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {product.problemDeep.friction}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Systemic Impact
                </div>
                <CardTitle className="mt-2 text-xl">Why It Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {product.problemDeep.whyItMatters}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Human Context
                </div>
                <CardTitle className="mt-2 text-xl">Who Experiences It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {product.problemDeep.whoExperiencesIt}
                </p>
              </CardContent>
            </Card>

            <Card className="border-violet-100 bg-violet-50/20 dark:border-violet-950/40 dark:bg-violet-950/10">
              <CardHeader>
                <div className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  RECKAI Conviction
                </div>
                <CardTitle className="mt-2 text-xl">Why RECKAI Chose This</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {product.problemDeep.whyReckaiChoseIt}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      )}

      {/* 4. THE IDEA & GENESIS (IDEA TRANSITION) */}
      {product.ideaTransition && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              02 / Product Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              From Observation to Product
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              Every RECKAI Original progresses through an explicit reasoning chain before code is written.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-violet-600 dark:text-violet-400 font-bold">
                Step 01 · Observation
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.ideaTransition.observation}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-violet-600 dark:text-violet-400 font-bold">
                Step 02 · Core Idea
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.ideaTransition.coreIdea}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-violet-600 dark:text-violet-400 font-bold">
                Step 03 · Hypothesis
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.ideaTransition.hypothesis}
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-6 dark:border-violet-900 dark:bg-violet-950/20 space-y-3">
              <span className="text-xs font-mono uppercase text-violet-700 dark:text-violet-300 font-bold">
                Step 04 · Realization
              </span>
              <p className="text-sm text-neutral-900 dark:text-white leading-relaxed font-medium">
                {product.ideaTransition.productRealization}
              </p>
            </div>
          </div>
        </Container>
      )}

      {/* 5. HOW WE RECKONED (METHODOLOGY BREAKDOWN) */}
      {product.howWeReckoned && product.howWeReckoned.length > 0 && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              03 / Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              How We Reckoned Through The Architecture
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              The systematic stages of evaluation, technical experiments, and architectural decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.howWeReckoned.map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                    STAGE {item.stage}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* 6. THE SOLUTION ARCHITECTURE (SOLUTION DEEP) */}
      {product.solutionDeep && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              04 / Architecture & Behavior
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              The Reckoned Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">Solution Overview & User Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Overview</h4>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {product.solutionDeep.overview}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    User Experience & Rhythm
                  </h4>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {product.solutionDeep.userExperience}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Autonomous System Behavior
                  </h4>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {product.solutionDeep.systemBehavior}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-100 bg-violet-50/20 dark:border-violet-950/40 dark:bg-violet-950/10">
              <CardHeader>
                <div className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  Architectural Rigor
                </div>
                <CardTitle className="mt-2 text-xl">Key Product Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.solutionDeep.keyDecisions.map((decision, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    >
                      <span className="text-violet-600 font-bold mt-0.5">✦</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      )}

      {/* 7. WHERE INTELLIGENCE ENTERS THE PRODUCT */}
      {product.aiCapabilitiesDeep && product.aiCapabilitiesDeep.length > 0 && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              05 / Applied Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              Where Intelligence Enters The Product
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              Concrete machine intelligence and deterministic algorithms—zero marketing buzzwords.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.aiCapabilitiesDeep.map((ai) => (
              <div
                key={ai.name}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-violet-600">✦</span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{ai.name}</h3>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400">Product Role</span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-0.5 font-medium">
                    {ai.role}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400">Implementation</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed font-mono">
                    {ai.implementation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* 8. PRODUCT ENGINEERING & TECH STACK */}
      {product.techStackCategorized && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              06 / Engineering Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              Technology Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Frontend</span>
              <div className="flex flex-wrap gap-1.5">
                {product.techStackCategorized.frontend.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono dark:bg-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Backend</span>
              <div className="flex flex-wrap gap-1.5">
                {product.techStackCategorized.backend.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono dark:bg-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Database</span>
              <div className="flex flex-wrap gap-1.5">
                {product.techStackCategorized.database.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono dark:bg-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/30 p-5 dark:border-violet-900 dark:bg-violet-950/20 space-y-3">
              <span className="text-xs font-mono uppercase text-violet-700 dark:text-violet-300 font-bold">
                AI / ML Layer
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.techStackCategorized.aiMl.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white border border-neutral-200 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400 font-bold">Infrastructure</span>
              <div className="flex flex-wrap gap-1.5">
                {product.techStackCategorized.infrastructure.map((t) => (
                  <span key={t} className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono dark:bg-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      )}

      {/* 9. ENGINEERING CHALLENGES */}
      {product.challenges && product.challenges.length > 0 && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              07 / Technical Realities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              Engineering & Domain Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.challenges.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                  Challenge #{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{c.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* 10. CURRENT STAGE & FUTURE ROADMAP */}
      <Container className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            08 / Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            Current State & Product Roadmap
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Current Stage: <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{product.currentStage || "Active Development"}</span>
          </p>
        </div>

        {product.futureRoadmap && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/20 p-6 dark:border-emerald-950/40 dark:bg-emerald-950/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
                  NOW · Current Focus
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <ul className="space-y-2.5">
                {product.futureRoadmap.now.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-violet-200/80 bg-violet-50/20 p-6 dark:border-violet-950/40 dark:bg-violet-950/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
                NEXT · Coming Up
              </span>
              <ul className="space-y-2.5">
                {product.futureRoadmap.next.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                    <span className="text-violet-600 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                FUTURE · Horizon
              </span>
              <ul className="space-y-2.5">
                {product.futureRoadmap.future.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="text-neutral-400 font-bold">○</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>

      {/* 11. NAVIGATION & BOTTOM CTAs */}
      <Container className="space-y-12">
        {/* Previous / Next Product Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-neutral-200/80 dark:border-neutral-800 py-6">
          <Link
            href={`/work/originals/${prevProduct.slug}`}
            className="flex flex-col group p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            <span className="text-xs font-mono text-neutral-400">← PREVIOUS ORIGINAL</span>
            <span className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mt-1">
              {prevProduct.name}
            </span>
          </Link>

          <Link
            href={`/work/originals/${nextProduct.slug}`}
            className="flex flex-col sm:items-end group p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            <span className="text-xs font-mono text-neutral-400">NEXT ORIGINAL →</span>
            <span className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mt-1">
              {nextProduct.name}
            </span>
          </Link>
        </div>

        {/* Interlocking Call To Action */}
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-12 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <Badge variant="default" className="text-xs font-mono">
              COLLABORATE WITH RECKAI
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Have a problem in this domain?
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We build our own products, but we also partner with organizations to architect and deliver intelligent systems through <strong>RECKAI Builds</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/work/originals">
              <Button variant="outline" size="md">
                All Originals
              </Button>
            </Link>
            <Link href="/start-project">
              <Button variant="primary" size="md">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
