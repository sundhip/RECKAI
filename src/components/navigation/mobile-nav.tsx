"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { MAIN_NAV_LINKS, PRIMARY_CTA } from "@/data/navigation/nav-links";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        className="inline-flex items-center justify-center rounded-xl p-2.5 text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
      >
        <Icons.Menu size={22} />
      </button>

      {/* Render via Portal to escape header backdrop-filter / stacking context */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed inset-0 z-[100] flex flex-col bg-white text-neutral-900 dark:bg-[#0A0A0C] dark:text-neutral-100"
          >
            {/* Top Bar */}
            <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-neutral-200/80 bg-white dark:border-neutral-800 dark:bg-[#0A0A0C]">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-2"
              >
                <span className="text-xl font-bold tracking-tightest text-neutral-950 dark:text-white">
                  RECK<span className="text-violet-600">AI</span>
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="rounded-xl p-2.5 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                >
                  <Icons.Close size={22} />
                </button>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 bg-white dark:bg-[#0A0A0C]">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {MAIN_NAV_LINKS.map((link) => {
                  if (link.href === "/work") {
                    return (
                      <div
                        key={link.href}
                        className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-4 dark:border-neutral-800 dark:bg-neutral-900/60"
                      >
                        <button
                          type="button"
                          onClick={() => setWorkExpanded(!workExpanded)}
                          className="flex w-full items-center justify-between text-lg font-bold text-neutral-950 dark:text-white"
                        >
                          <span>Work</span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {workExpanded ? "COLLAPSE ▲" : "EXPAND ▼"}
                          </span>
                        </button>

                        {workExpanded && (
                          <div className="mt-4 pt-3 space-y-3 border-t border-neutral-200/80 dark:border-neutral-800 pl-2">
                            <Link
                              href="/work/originals"
                              onClick={closeMenu}
                              className="block py-1.5 text-base font-medium text-neutral-700 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400 transition-colors"
                            >
                              <div className="font-semibold text-neutral-900 dark:text-white">
                                RECKAI Originals
                              </div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                Proprietary products we imagine, design and build
                              </div>
                            </Link>

                            <Link
                              href="/work/builds"
                              onClick={closeMenu}
                              className="block py-1.5 text-base font-medium text-neutral-700 hover:text-violet-600 dark:text-neutral-300 dark:hover:text-violet-400 transition-colors"
                            >
                              <div className="font-semibold text-neutral-900 dark:text-white">
                                RECKAI Builds
                              </div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                Custom platforms engineered for partner enterprises
                              </div>
                            </Link>

                            <Link
                              href="/work"
                              onClick={closeMenu}
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-600 dark:text-violet-400 pt-2 font-medium"
                            >
                              <span>Browse all software</span>
                              <Icons.ArrowRight size={12} />
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between rounded-xl p-3 text-lg font-semibold text-neutral-900 hover:bg-neutral-100 hover:text-violet-600 dark:text-white dark:hover:bg-neutral-900 dark:hover:text-violet-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <Icons.ChevronRight
                          size={18}
                          className="text-neutral-400"
                        />
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* Operating Layer Link */}
              <div className="pt-2">
                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span>Internal Admin System →</span>
                </Link>
              </div>
            </div>

            {/* Bottom Sticky Action Area */}
            <div className="shrink-0 p-6 border-t border-neutral-200/80 bg-neutral-50/90 dark:border-neutral-800 dark:bg-[#111116] space-y-3">
              <Link
                href={PRIMARY_CTA.href}
                onClick={closeMenu}
                className="block w-full"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-medium text-base font-semibold"
                  arrow="up-right"
                >
                  {PRIMARY_CTA.label}
                </Button>
              </Link>
              <p className="text-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
                Think deeply. Build cleanly. Ship intelligent software.
              </p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
