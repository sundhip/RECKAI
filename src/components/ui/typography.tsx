import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Display({ as: Tag = "h1", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tightest leading-[1.04] text-neutral-950 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Heading1({ as: Tag = "h1", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-neutral-950 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Heading2({ as: Tag = "h2", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-neutral-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Heading3({ as: Tag = "h3", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.25] text-neutral-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Heading4({ as: Tag = "h4", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-lg sm:text-xl font-semibold tracking-tight leading-[1.4] text-neutral-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function BodyLarge({ as: Tag = "p", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Body({ as: Tag = "p", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function BodySmall({ as: Tag = "p", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-sm text-neutral-500 dark:text-neutral-400 leading-normal font-normal",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Caption({ as: Tag = "span", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-xs text-neutral-500 dark:text-neutral-400 leading-tight font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Label({ as: Tag = "span", className, children, ...props }: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
