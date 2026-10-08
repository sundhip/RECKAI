import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/layout/container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "dark";
  containerVariant?: "full" | "wide" | "standard" | "narrow";
}

export function Section({
  variant = "default",
  containerVariant = "standard",
  className,
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    default: "bg-white text-neutral-900 dark:bg-reckai-dark dark:text-white",
    muted:
      "bg-neutral-50/70 text-neutral-900 border-y border-neutral-200/60 dark:bg-reckai-dark-surface/50 dark:border-neutral-800/60 dark:text-white",
    dark: "bg-reckai-dark text-white border-y border-neutral-800/80",
  };

  return (
    <section
      className={cn("py-20 sm:py-28 relative overflow-hidden", variantStyles[variant], className)}
      {...props}
    >
      <Container variant={containerVariant}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  align = "left",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { align?: "left" | "center" | "right" }) {
  const alignStyles = {
    left: "text-left max-w-2xl",
    center: "text-center max-w-3xl mx-auto",
    right: "text-right max-w-2xl ml-auto",
  };

  return (
    <div className={cn("space-y-4 mb-12 sm:mb-16", alignStyles[align], className)} {...props}>
      {children}
    </div>
  );
}

export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function DisplayHeading({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function BodyText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "border-0 border-t border-neutral-200/70 dark:border-neutral-800/70 my-16 sm:my-24",
        className
      )}
    />
  );
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
  variant?: "dark" | "default";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "rounded-3xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden transition-all",
        isDark
          ? "bg-neutral-950 text-white border border-neutral-850 shadow-floating"
          : "bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-subtle",
        className
      )}
    >
      {/* Subtle violet ambiance if dark */}
      {isDark && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-600/10 blur-3xl pointer-events-none rounded-full" />
      )}

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {eyebrow && <Eyebrow className={isDark ? "text-violet-400" : "text-violet-600"}>{eyebrow}</Eyebrow>}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h2>
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed",
            isDark ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </div>
  );
}
