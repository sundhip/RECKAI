import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "dark" | "outline";
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white/95 border border-slate-200/90 shadow-[0_4px_24px_-2px_rgba(99,102,241,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_-4px_rgba(99,102,241,0.12)] hover:border-violet-300/80 dark:bg-[#111116]/95 dark:border-neutral-800 dark:hover:border-neutral-700 dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
    subtle:
      "bg-gradient-to-b from-white/90 to-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-violet-300/60 shadow-xs dark:bg-neutral-900/50 dark:border-neutral-800 dark:hover:bg-neutral-900",
    dark:
      "bg-neutral-950 text-white border border-neutral-800 shadow-xl hover:border-neutral-700",
    outline:
      "bg-transparent border border-slate-200/90 hover:border-violet-400/60 dark:border-neutral-800 dark:hover:border-violet-400/50",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("py-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center pt-4 mt-auto border-t border-neutral-100 dark:border-neutral-850", className)} {...props}>
      {children}
    </div>
  );
}
