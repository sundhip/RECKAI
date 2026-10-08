"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/theme-provider";
import { Icons } from "@/components/ui/icons";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center justify-center h-9 w-9 rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-neutral-400 opacity-60 ${className}`}
        aria-hidden="true"
      >
        <span className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex items-center gap-2 rounded-xl p-2 border border-neutral-200/80 bg-white/90 text-neutral-700 shadow-sm transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white ${className}`}
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        {isDark ? (
          <Icons.Sun className="h-4 w-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
        ) : (
          <Icons.Moon className="h-4 w-4 text-violet-600 transition-transform duration-200 hover:-rotate-12" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
