"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MAIN_NAV_LINKS, PRIMARY_CTA } from "@/data/navigation/nav-links";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
        aria-label="Open primary navigation menu"
        className="inline-flex items-center justify-center rounded-xl p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 transition-colors"
      >
        <Icons.Menu size={22} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-floating dark:bg-reckai-dark-surface dark:border-l dark:border-neutral-800 transform transition-transform duration-300 ease-in-out flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="space-y-6">
          {/* Top header row */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-lg font-bold tracking-tight text-neutral-950 dark:text-white">
              RECK<span className="text-violet-600">AI</span>
            </span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <Icons.Close size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="space-y-4">
            {MAIN_NAV_LINKS.map((link) => {
              if (link.href === "/work") {
                return (
                  <div key={link.href} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setWorkExpanded(!workExpanded)}
                      className="flex w-full items-center justify-between text-base font-semibold text-neutral-900 dark:text-white"
                    >
                      <span>Work</span>
                      <span className="text-xs text-neutral-400">
                        {workExpanded ? "▲" : "▼"}
                      </span>
                    </button>

                    {workExpanded && (
                      <div className="pl-4 space-y-2 border-l-2 border-violet-100 dark:border-violet-950/60">
                        <Link
                          href="/work/originals"
                          onClick={closeMenu}
                          className="block text-sm font-medium text-neutral-600 hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400 py-1"
                        >
                          RECKAI Originals
                        </Link>
                        <Link
                          href="/work/builds"
                          onClick={closeMenu}
                          className="block text-sm font-medium text-neutral-600 hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400 py-1"
                        >
                          RECKAI Builds
                        </Link>
                        <Link
                          href="/work"
                          onClick={closeMenu}
                          className="block text-xs font-mono text-neutral-400 hover:text-neutral-900 dark:hover:text-white py-1"
                        >
                          All Products →
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
                    className="block text-base font-semibold text-neutral-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-400 py-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
          <Link href={PRIMARY_CTA.href} onClick={closeMenu} className="block w-full">
            <Button variant="primary" size="md" className="w-full justify-center" arrow="up-right">
              {PRIMARY_CTA.label}
            </Button>
          </Link>
          <p className="text-center text-[11px] font-mono text-neutral-400">
            Think. Build. Impact.
          </p>
        </div>
      </div>
    </div>
  );
}
