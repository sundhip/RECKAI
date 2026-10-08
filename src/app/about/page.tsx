import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";
import {
  AboutHero,
  ReckaiSignatureVisual,
  CompanyStatement,
  WhatIsReckAI,
  OriginalsBuildsSplit,
  WhyReckAI,
  ReckonPhilosophy,
  PrinciplesGrid,
  HumanCenteredSection,
  ResponsibleAI,
  PortfolioPreview,
  BuildsPreview,
  FutureDirection,
  CultureSection,
  TrustSection,
  TeamTruthSection,
  CareersSection,
  AboutCTA,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About RECKAI — Company Identity & Philosophy",
  description:
    "We reckon with problems worth solving. RECKAI is an AI-powered product company building intelligent digital products — our own products and products we build with others.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About RECKAI — Company Identity & Philosophy",
    description:
      "We reckon with problems worth solving. Deliberate thinking, rigorous engineering, and purposeful AI systems.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: "Think. Build. Impact.",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter],
  };

  return (
    <div className="py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO */}
      <section>
        <Container>
          <AboutHero />
        </Container>
      </section>

      {/* 2. SIGNATURE INTERACTIVE VISUAL */}
      <section>
        <Container>
          <ReckaiSignatureVisual />
        </Container>
      </section>

      {/* 3. COMPANY STATEMENT */}
      <section>
        <Container>
          <CompanyStatement />
        </Container>
      </section>

      {/* 4. WHAT RECKAI IS (3 Cards) */}
      <section>
        <Container>
          <WhatIsReckAI />
        </Container>
      </section>

      {/* 5. OUR TWO SIDES */}
      <section>
        <Container>
          <OriginalsBuildsSplit />
        </Container>
      </section>

      {/* 6. WHY RECKAI EXISTS */}
      <section>
        <Container>
          <WhyReckAI />
        </Container>
      </section>

      {/* 7. THE RECKON PHILOSOPHY */}
      <section>
        <Container>
          <ReckonPhilosophy />
        </Container>
      </section>

      {/* 8. PRINCIPLES GRID */}
      <section>
        <Container>
          <PrinciplesGrid />
        </Container>
      </section>

      {/* 9. BUILDING FOR PEOPLE */}
      <section>
        <Container>
          <HumanCenteredSection />
        </Container>
      </section>

      {/* 10. RESPONSIBLE AI */}
      <section>
        <Container>
          <ResponsibleAI />
        </Container>
      </section>

      {/* 11. PORTFOLIO PREVIEW */}
      <section>
        <Container>
          <PortfolioPreview />
        </Container>
      </section>

      {/* 12. BUILDS PREVIEW */}
      <section>
        <Container>
          <BuildsPreview />
        </Container>
      </section>

      {/* 13. WHERE WE'RE GOING */}
      <section>
        <Container>
          <FutureDirection />
        </Container>
      </section>

      {/* 14. CULTURE / HOW WE WORK */}
      <section>
        <Container>
          <CultureSection />
        </Container>
      </section>

      {/* 15. TRUST & PROOF SYSTEM */}
      <section>
        <Container>
          <TrustSection />
        </Container>
      </section>

      {/* 16. TRUTHFUL TEAM STATEMENT */}
      <section>
        <Container>
          <TeamTruthSection />
        </Container>
      </section>

      {/* 17. CAREERS / JOIN US */}
      <section>
        <Container>
          <CareersSection />
        </Container>
      </section>

      {/* 18. FINAL ABOUT CTA */}
      <section>
        <Container>
          <AboutCTA />
        </Container>
      </section>
    </div>
  );
}
