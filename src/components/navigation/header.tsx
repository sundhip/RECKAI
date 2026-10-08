import Link from "next/link";
import { MAIN_NAV_LINKS, PRIMARY_CTA } from "@/data/navigation/nav-links";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-2xs dark:border-neutral-800/80 dark:bg-reckai-dark/90">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
          >
            <span className="text-xl font-extrabold tracking-tightest text-slate-950 dark:text-white">
              RECK<span className="text-violet-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {MAIN_NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white transition-colors py-2"
                >
                  {link.label}
                </Link>

                {link.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-64">
                    <div className="rounded-xl border border-neutral-200 bg-white p-2 shadow-elevated dark:border-neutral-800 dark:bg-reckai-dark-surface">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg p-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                        >
                          <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                            {child.label}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Action & Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Link href={PRIMARY_CTA.href} className="hidden sm:inline-flex">
            <Button variant="primary" size="sm" arrow="up-right">
              {PRIMARY_CTA.label}
            </Button>
          </Link>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
