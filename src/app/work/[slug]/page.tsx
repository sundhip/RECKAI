import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { productService } from "@/server/services/product.service";
import { siteConfig } from "@/lib/config/site";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = await productService.getPublicProducts();
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — ${siteConfig.name}`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await productService.getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  if (product.type === "ORIGINAL") {
    redirect(`/work/originals/${product.slug}`);
  }

  const isOriginal = false;

  return (
    <div className="py-20 space-y-16">
      {/* Product Hero */}
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Link
            href={isOriginal ? "/work/originals" : "/work/builds"}
            className="text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to {isOriginal ? "Originals" : "Builds"}
          </Link>
          <span className="text-neutral-300">•</span>
          <Badge variant={isOriginal ? "violet" : "default"}>
            {isOriginal ? "RECKAI Original" : "RECKAI Build"}
          </Badge>
          <span className="text-xs font-mono text-neutral-500">{product.category}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {product.name}
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          {product.description}
        </p>
      </Container>

      {/* Problem & Solution Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-red-100 bg-red-50/20 dark:border-red-950/40 dark:bg-red-950/10">
            <CardHeader>
              <div className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400">
                The Problem
              </div>
              <CardTitle className="mt-2 text-xl">Friction Identified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.problem}
              </p>
            </CardContent>
          </Card>

          <Card className="border-violet-100 bg-violet-50/20 dark:border-violet-950/40 dark:bg-violet-950/10">
            <CardHeader>
              <div className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400">
                The Solution
              </div>
              <CardTitle className="mt-2 text-xl">The Reckoned Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.solution}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Intelligence & Tech Specifications */}
      <Container className="space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Specifications
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mt-1">
            Core Intelligence & Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Capabilities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI & Intelligence Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.aiCapabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="text-violet-600 mt-0.5">✦</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Engineering & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-mono text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* CTA Footer */}
      <Container>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 text-center dark:border-neutral-800 dark:bg-reckai-dark-surface">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            Have a problem in this domain?
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            RECKAI develops intelligent software both independently and in partnership with ambitious companies.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/start-project">
              <Button variant="primary" size="md">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="md">
                Contact Technical Team
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
