import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — RECKAI",
  description:
    "How RECKAI handles information submitted through project inquiries, contact forms, and website interactions.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          RECKAI collects only the information required to evaluate project inquiries, respond to communications, and operate reliable software. We do not sell data or track users across external platforms.
        </p>
      </Container>

      <Container className="max-w-3xl space-y-12 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            1. Information We Collect
          </h2>
          <p>
            When you interact with the RECKAI website, we collect information you directly provide to us:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
            <li>
              <strong>Project Inquiries:</strong> Name, work email address, company or organization name, role, project specifications, technical constraints, budget range, and timeline estimates submitted through our intake form.
            </li>
            <li>
              <strong>Contact Messages:</strong> Name, email address, and message content submitted through our contact form.
            </li>
            <li>
              <strong>Technical Logs:</strong> Anonymized request identifiers, hashed IP strings (for rate-limiting and DDoS mitigation), and standard browser user-agent strings. We do not persist raw IP addresses in permanent inquiry storage.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            2. How We Use Information
          </h2>
          <p>
            Information submitted to RECKAI is used exclusively for the following operational purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
            <li>Reviewing, scoping, and responding to commercial project inquiries.</li>
            <li>Direct engineering correspondence regarding potential collaboration.</li>
            <li>Enforcing system rate limits to prevent automated abuse and request flooding.</li>
            <li>Maintaining the security, performance, and uptime of our web infrastructure.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            3. Artificial Intelligence & Data Governance
          </h2>
          <p>
            We adhere to strict boundaries regarding proprietary information:
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Your project briefs, technical descriptions, and proprietary concepts are <strong>never</strong> used to train public machine learning models or shared with unauthorized third parties. Partner builds and commercial proposals are governed by strict confidentiality commitments.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            4. Third-Party Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            We rely on trusted cloud infrastructure providers (such as PostgreSQL hosting, transactional email dispatch, and edge compute) to serve this platform. These providers are bound by strict data protection agreements and access data only as required to execute cloud services.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
            5. Data Retention & Your Rights
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            We retain project inquiries only as long as necessary to fulfill evaluation and ongoing commercial relationships. You have the right to request access to, correction of, or permanent deletion of any personal contact information we hold.
          </p>
          <p className="text-sm pt-2">
            To request data deletion, contact us directly at{" "}
            <a href="mailto:contacts@reckai.site" className="text-violet-600 dark:text-violet-400 underline font-mono">
              contacts@reckai.site
            </a>.
          </p>
        </section>

        {/* Navigation back */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono">
          <Link href="/" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
            ← Return to RECKAI
          </Link>
          <Link href="/terms" className="text-violet-600 dark:text-violet-400 hover:underline">
            View Terms of Service →
          </Link>
        </div>
      </Container>
    </div>
  );
}
