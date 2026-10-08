import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OriginalProductCard } from "@/components/products/original-card";
import { ProductExperienceSim } from "@/components/products/product-experience-sim";
import { productService } from "@/server/services/product.service";

export const metadata = {
  title: "RECKAI Originals — Independent Digital Products",
  description:
    "Products born from problems worth solving. Explore proprietary software independently conceived, architected, and built by RECKAI.",
};

export default async function OriginalsPage() {
  const originals = await productService.getOriginals();
  const flagship = originals.find((p) => p.slug === "omnixperience") || originals[0];

  return (
    <div className="py-20 sm:py-28 space-y-24">
      {/* 1. Header Section */}
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="violet" className="font-mono text-xs tracking-widest font-bold">
            RECKAI ORIGINALS
          </Badge>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Proprietary Products & Internal IP
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
          Products born from problems worth solving.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          We don&rsquo;t wait for someone to ask us what to build. We identify human and systemic friction, reckon through domain realities, engineer resilient architectures, and launch products of our own.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#product-library">
            <Button variant="primary" size="md" arrow="right">
              Explore All Originals ({originals.length})
            </Button>
          </a>
          <Link href="/work/builds">
            <Button variant="outline" size="md" arrow="right">
              View RECKAI Builds (Client Systems)
            </Button>
          </Link>
        </div>
      </Container>

      {/* 2. Flagship Editorial Showcase (OmniXperience) */}
      {flagship && (
        <Container className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
                Flagship Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
                {flagship.name} — Personal Lifestyle OS
              </h2>
            </div>
            <Link href={`/work/originals/${flagship.slug}`}>
              <Button variant="ghost" size="sm" arrow="right">
                Explore Full {flagship.name} Architecture
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <Badge variant="violet" className="text-xs font-mono">
                  {flagship.category}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {flagship.tagline}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                  {flagship.description}
                </p>
              </div>

              {/* Core Intelligence Modules */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Applied Intelligence Systems
                </span>
                <div className="flex flex-wrap gap-2">
                  {flagship.aiCapabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-lg bg-neutral-100 border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
                    >
                      ✦ {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link href={`/work/originals/${flagship.slug}`}>
                  <Button variant="primary" size="md" arrow="right">
                    Dive Into {flagship.name} Deep Dive
                  </Button>
                </Link>
              </div>
            </div>

            {/* Interactive Telemetry / Product Experience Sim */}
            <div className="lg:col-span-7">
              <ProductExperienceSim slug={flagship.slug} />
            </div>
          </div>
        </Container>
      )}

      {/* 3. Complete Originals Product Library */}
      <Container id="product-library" className="space-y-12">
        <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              The Product Library
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Current RECKAI Originals
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Each product represents an independent venture built from zero to production. We own and evolve them continuously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {originals.map((product) => (
            <OriginalProductCard key={product.id} product={product} featured={product.slug === "omnixperience"} />
          ))}
        </div>
      </Container>

      {/* 4. Philosophy: The DNA of RECKAI Originals */}
      <Container className="space-y-12">
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-14 dark:border-neutral-800 dark:bg-neutral-900/40 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              Our Product Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Why RECKAI Builds Its Own Products
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We are not just an engineering consultancy or agency that builds for clients and walks away. We are product creators with our own skin in the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-sm font-mono font-bold text-violet-600 dark:text-violet-400">
                01 / Independent Problem Discovery
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Unconstrained by Client Briefs
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                When we observe daily friction—whether in morning cognitive overload, habit burnout, or organ matching bottlenecks—we don&rsquo;t wait for a tender. We reckon through it and build.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-mono font-bold text-violet-600 dark:text-violet-400">
                02 / Architectural Proving Ground
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Zero Compromise Testing
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Our own products serve as our testing ground for applied AI, distributed consensus, deterministic workflows, and performance optimization.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-mono font-bold text-violet-600 dark:text-violet-400">
                03 / True Skin In The Game
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                We Live With What We Build
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Operating live software teaches hard realities about user experience, edge cases, data privacy, and operational resilience that cannot be learned in abstract theory.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* 5. Bridge to RECKAI Builds */}
      <Container>
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-12 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="default" className="text-xs font-mono">
              THE OTHER HALF OF RECKAI
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Need custom intelligent systems for your organization?
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Through <strong>RECKAI Builds</strong>, we apply the same product rigor, architecture, and AI engineering to solve complex challenges for startups, enterprises, and research partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/work/builds">
              <Button variant="outline" size="md" arrow="right">
                Explore RECKAI Builds
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
