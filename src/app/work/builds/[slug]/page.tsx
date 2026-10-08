import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { productService } from "@/server/services/product.service";
import {
  BuildCaseStudyHero,
  ClientContext,
  ProblemSection,
  DiscoverySection,
  ProductStrategy,
  SolutionSection,
  AIIntelligenceSection,
  TechnologySection,
  OutcomeSection,
  BuildTimeline,
  StartProjectCTA,
} from "@/components/case-studies/build-case-study";
import { siteConfig } from "@/lib/config/site";
import { BuildProduct } from "@/types/product";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const builds = await productService.getBuilds();
  return builds
    .filter((b) => b.visibility === "PUBLIC" || b.visibility === "ANONYMIZED")
    .map((b) => ({
      slug: b.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await productService.getProductBySlug(params.slug);
  if (!product || product.type !== "BUILD" || product.visibility === "CONFIDENTIAL") {
    return {};
  }

  const isAnonymized = product.visibility === "ANONYMIZED";
  const title = isAnonymized
    ? `Enterprise Solution (${product.industry || "Case Study"}) — RECKAI Builds`
    : `${product.name} — RECKAI Builds Case Study`;

  return {
    title,
    description: product.shortDescription,
    openGraph: {
      title,
      description: product.description,
      siteName: siteConfig.name,
    },
  };
}

export default async function BuildDetailPage({ params }: PageProps) {
  const product = await productService.getProductBySlug(params.slug);

  if (
    !product ||
    product.type !== "BUILD" ||
    product.visibility === "CONFIDENTIAL"
  ) {
    notFound();
  }

  const buildProject = product as BuildProduct;

  return (
    <div className="py-20 sm:py-28 space-y-24">
      {/* 1. Hero */}
      <BuildCaseStudyHero project={buildProject} />

      {/* 2. Client & Engagement Context */}
      <Container>
        <ClientContext project={buildProject} />
      </Container>

      {/* 3. The Problem */}
      <Container>
        <ProblemSection project={buildProject} />
      </Container>

      {/* 4. Discovery & Reckoning ("Before we built it, we reckoned with it") */}
      <Container>
        <DiscoverySection project={buildProject} />
      </Container>

      {/* 5. Product Strategy & Scoping */}
      <Container>
        <ProductStrategy project={buildProject} />
      </Container>

      {/* 6. The Delivered Solution */}
      <Container>
        <SolutionSection project={buildProject} />
      </Container>

      {/* 7. Where Intelligence Enters The Product */}
      <Container>
        <AIIntelligenceSection project={buildProject} />
      </Container>

      {/* 8. Technologies & Engineering */}
      <Container>
        <TechnologySection project={buildProject} />
      </Container>

      {/* 9. Verified Outcomes / "Where it stands" */}
      <Container>
        <OutcomeSection project={buildProject} />
      </Container>

      {/* 10. Execution Timeline */}
      <Container>
        <BuildTimeline project={buildProject} />
      </Container>

      {/* 11. Project Intake Interlocking CTA */}
      <Container>
        <StartProjectCTA />
      </Container>
    </div>
  );
}
