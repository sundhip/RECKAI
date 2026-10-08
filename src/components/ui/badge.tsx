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
      "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
    violet:
      "bg-violet-50 text-violet-700 border border-violet-200/60 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/50",
    outline:
      "border border-neutral-200 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300",
    subtle:
      "bg-neutral-50 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400",
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
