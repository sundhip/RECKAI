import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Terms of Service — RECKAI",
  description:
    "Terms governing the use of the RECKAI website, digital assets, and project inquiry channels.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 space-y-16">
      <Container className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase">
            LEGAL NOTICE
          </Badge>
          <span className="text-xs font-mono text-neutral-400">LAST UPDATED: OCTOBER 2026</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          These terms govern your access to the RECKAI website, content, and inquiry interfaces.
        </p>
      </Container>

      <Container className="max-w-3xl space-y-12 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            By accessing or browsing this website, you agree to comply with these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you should discontinue using the platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            2. Intellectual Property Rights
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            All text, code samples, design system tokens, brand assets, product architectures, and original software demonstrations (including <em>OmniXperience</em>, <em>EvolveAura</em>, <em>OrganXcell</em>, and <em>Finance</em>) are proprietary intellectual property owned by RECKAI unless explicitly specified otherwise. You may not reproduce, redistribute, or mirror our materials without written permission.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            3. Project Inquiries & Submissions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Submitting a project inquiry via our form does not create a binding development contract or partnership obligation. Formal engineering engagements are governed by separate, mutually executed Master Services Agreements (MSAs) and Statements of Work (SOWs) containing dedicated scope, payment schedules, and confidentiality covenants.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            4. Acceptable Use Policy
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            You agree not to misuse our systems. You must not:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 dark:text-neutral-400 text-sm">
            <li>Submit spam, malicious payloads, automated scraping bots, or script injections.</li>
            <li>Attempt to bypass rate limits or probe our API routes for security vulnerabilities.</li>
            <li>Impersonate any individual, organization, or commercial entity.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            5. Disclaimers & Limitation of Liability
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            The website and its demonstration content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. RECKAI shall not be liable for any indirect, incidental, or consequential damages resulting from the use of or inability to use this site.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            6. Contact Information
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            For legal notices, contract inquiries, or questions regarding these terms, reach us at{" "}
            <a href="mailto:contact@reckai.com" className="text-violet-600 dark:text-violet-400 underline font-mono">
              contact@reckai.com
            </a>.
          </p>
        </section>

        {/* Navigation back */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono">
          <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
            ← Return to RECKAI
          </Link>
          <Link href="/privacy" className="text-violet-600 dark:text-violet-400 hover:underline">
            View Privacy Policy →
          </Link>
        </div>
      </Container>
    </div>
  );
}
