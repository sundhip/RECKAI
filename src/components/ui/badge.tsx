import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "violet" | "outline" | "subtle";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-slate-100 text-slate-800 border border-slate-200/80 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700/60 shadow-2xs",
    violet:
      "bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-200/80 dark:from-violet-950/60 dark:to-purple-950/40 dark:text-violet-300 dark:border-violet-800/60 shadow-2xs",
    outline:
      "border border-slate-300/80 text-slate-700 dark:border-neutral-700 dark:text-neutral-300 bg-white/50 dark:bg-neutral-900/40",
    subtle:
      "bg-slate-100/70 text-slate-600 dark:bg-neutral-900 dark:text-neutral-400 border border-slate-200/50 dark:border-neutral-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
