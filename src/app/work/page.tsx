import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OriginalProductCard } from "@/components/products/original-card";
import { BuildProjectCard } from "@/components/products/build-card";
import { productService } from "@/server/services/product.service";

export const metadata = {
  title: "Work — RECKAI Originals & Builds",
  description:
    "Explore digital products independently built by RECKAI, and intelligent solutions engineered for partners and clients.",
};

export default async function WorkPage() {
  const originals = await productService.getOriginals();
  const builds = await productService.getBuilds();

  return (
    <div className="py-20 space-y-20">
      <Container className="space-y-4">
        <Badge variant="violet">Portfolio</Badge>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Our Work
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          RECKAI builds in two distinct ways: through our own proprietary products (**RECKAI Originals**), and through intelligent solutions engineered for founders and businesses (**RECKAI Builds**).
        </p>

        <div className="flex gap-4 pt-4">
          <Link href="/work/originals">
            <Button variant="outline" size="sm" arrow="right">
              Originals ({originals.length})
            </Button>
          </Link>
          <Link href="/work/builds">
            <Button variant="outline" size="sm" arrow="right">
              Builds ({builds.length})
            </Button>
          </Link>
        </div>
      </Container>

      {/* Section: Originals */}
      <section>
        <Container className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Pillar A
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
              RECKAI Originals
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Products born from problems we believe are worth solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {originals.map((product) => (
              <OriginalProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Builds */}
      <section className="border-t border-neutral-200/80 bg-neutral-50/40 py-16 dark:border-neutral-800/80 dark:bg-reckai-dark-surface/40">
        <Container className="space-y-6 max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Pillar B
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            RECKAI Builds
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            From someone else&apos;s idea to something real. We partner with founders, businesses, and enterprises to build customized applications, intelligent platforms, and production-grade software.
          </p>
          {builds.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-6">
              {builds.map((b) => (
                <BuildProjectCard key={b.id} project={b} />
              ))}
            </div>
          )}
          <div className="pt-2">
            <Link href="/start-project">
              <Button variant="primary" size="md" arrow="up-right">
                Initiate a Customer Project
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
