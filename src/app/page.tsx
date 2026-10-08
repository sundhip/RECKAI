import { productService } from "@/server/services/product.service";
import {
  Hero,
  WhatIsRECKAI,
  OriginalsPreview,
  BuildsPreview,
  ServicesPreview,
  ProcessPreview,
  Differentiation,
  IntelligencePreview,
  FinalCTA,
} from "@/components/sections/homepage";

export const metadata = {
  title: "RECKAI — Think. Build. Impact.",
  description:
    "An AI-powered product company that imagines, builds and ships intelligent digital products — both independently through RECKAI Originals and in partnership with founders and enterprises through RECKAI Builds.",
};

export default async function HomePage() {
  const originals = await productService.getOriginals();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero: Editorial Headline, Dual CTAs, Interactive Product Workstation */}
      <Hero />

      {/* 2. What Is RECKAI: We build what should exist (Originals vs Builds side-by-side) */}
      <WhatIsRECKAI />

      {/* 3. Products We Create: RECKAI Originals (Flagship OmniXperience + Suite) */}
      <OriginalsPreview originals={originals} />

      {/* 4. Products We Build For Others: RECKAI Builds (Idea to Shipped Software) */}
      <BuildsPreview />

      {/* 5. How We Work: The 7-step RECKON Process */}
      <ProcessPreview />

      {/* 6. What We Can Build: Genuine Engineering Capabilities */}
      <ServicesPreview />

      {/* 7. Why RECKAI: We don't just build what we're asked to build */}
      <Differentiation />

      {/* 8. Machine Intelligence: Applied Technology Suite */}
      <IntelligencePreview />

      {/* 9. Final High-Impact Dark CTA: Have something worth building? */}
      <FinalCTA />
    </div>
  );
}
