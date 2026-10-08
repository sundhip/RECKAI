import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "wide" | "standard" | "narrow";
}

export function Container({
  variant = "standard",
  className,
  children,
  ...props
}: ContainerProps) {
  const variantStyles = {
    narrow: "max-w-narrow",
    standard: "max-w-standard",
    wide: "max-w-wide",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
