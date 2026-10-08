import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/data/navigation/nav-links";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 bg-neutral-50/50 py-16 dark:border-neutral-800/80 dark:bg-reckai-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-neutral-200/60 dark:border-neutral-800/60">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tightest text-neutral-950 dark:text-white">
                RECK<span className="text-violet-600">AI</span>
              </span>
            </Link>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              An AI-powered product company that imagines, builds and ships intelligent digital products — both independently and for others.
            </p>
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              Think. Build. Impact.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Work
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/work/originals" className="hover:text-violet-600 transition-colors">
                  RECKAI Originals
                </Link>
              </li>
              <li>
                <Link href="/work/builds" className="hover:text-violet-600 transition-colors">
                  RECKAI Builds
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-violet-600 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Company
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/services" className="hover:text-violet-600 transition-colors">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-violet-600 transition-colors">
                  Reckon Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-600 transition-colors">
                  About RECKAI
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Conversion Col */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Engage
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Have an idea or business problem that requires intelligent engineering?
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-xs font-semibold text-white hover:bg-violet-700 transition-colors text-center"
              >
                {PRIMARY_CTA.label}
              </Link>
              <Link
                href={SECONDARY_CTA.href}
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors text-center dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {SECONDARY_CTA.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} RECKAI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>RECKON + AI</span>
            <span>Zero Fake Claims Policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
