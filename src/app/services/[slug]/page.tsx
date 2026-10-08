import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RECKAI_SERVICES, getServiceBySlug } from "@/data/services/services-data";
import { productService } from "@/server/services/product.service";
import { OriginalProductCard } from "@/components/products/original-card";
import { siteConfig } from "@/lib/config/site";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RECKAI_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.name} — Capabilities | RECKAI`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} — ${service.tagline}`,
      description: service.description,
      siteName: siteConfig.name,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Load relevant originals that use this capability
  const allOriginals = await productService.getOriginals();
  const relevantOriginals = service.relatedProducts
    ? allOriginals.filter((p) => service.relatedProducts!.includes(p.slug))
    : [];

  return (
    <div className="py-20 sm:py-28 space-y-24">
      {/* 1. HERO SECTION */}
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Back to All Capabilities
          </Link>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <Badge variant="violet" className="text-[10px] font-mono tracking-widest uppercase">
            {service.category}
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
          {service.name}
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-medium max-w-3xl leading-relaxed">
          {service.tagline}
        </p>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/start-project">
            <Button variant="primary" size="md" arrow="up-right">
              Start a Project with Us ↗
            </Button>
          </Link>
          <Link href="/process">
            <Button variant="outline" size="md" arrow="right">
              Explore Our Process →
            </Button>
          </Link>
        </div>
      </Container>

      {/* 2. WHAT THIS MEANS */}
      <Container>
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            The Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
            What This Means
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {service.whatThisMeans}
          </p>
        </div>
      </Container>

      {/* 3. PROBLEMS WE SOLVE */}
      <Container className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            Domain Friction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            Problems We Solve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.problemsWeSolve.map((prob, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-red-100 bg-red-50/20 p-6 dark:border-red-950/40 dark:bg-red-950/10 space-y-2"
            >
              <div className="text-xs font-mono text-red-600 dark:text-red-400 font-bold">
                Friction Point 0{idx + 1}
              </div>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                {prob}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 4. CAPABILITIES (WHAT WE DELIVER) */}
      <Container className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Deliverables & Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            Specific Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
            >
              <span className="text-violet-600 font-bold text-sm">✦</span>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">{cap}</h3>
            </div>
          ))}
        </div>
      </Container>

      {/* 5. HOW WE WORK (METHODOLOGY) */}
      <Container className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.howWeWork.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
            >
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                PHASE 0{idx + 1}
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 6. RELEVANT PRODUCTS (EVIDENCE IN RECKAI ORIGINALS) */}
      {relevantOriginals.length > 0 && (
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              Evidence in Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              Applied in RECKAI Originals
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              We prove this capability in our own products before offering it to partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relevantOriginals.map((prod) => (
              <OriginalProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </Container>
      )}

      {/* 7. TECHNOLOGIES & TOOLS */}
      <Container className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            Engineering Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            Technologies We Deploy
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {service.technologies.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-mono text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              #{t}
            </span>
          ))}
        </div>
      </Container>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {service.faqs && service.faqs.length > 0 && (
        <Container className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
              >
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">{faq.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* 9. BOTTOM CTA */}
      <Container>
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-14 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="default" className="text-xs font-mono">
              GET IN TOUCH
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Ready to build with {service.name}?
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Tell us what problem you&rsquo;re facing. We&rsquo;ll review your requirements and reckon with the solution together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/services">
              <Button variant="outline" size="md">
                All Capabilities
              </Button>
            </Link>
            <Link href="/start-project">
              <Button variant="primary" size="md" arrow="up-right">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
