import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  arrow?: "none" | "right" | "up-right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      arrow = "none",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_4px_18px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.45)] focus-visible:ring-offset-white dark:focus-visible:ring-offset-reckai-dark",
      secondary:
        "bg-slate-100/90 text-slate-900 hover:bg-slate-200/90 border border-slate-200/80 dark:bg-neutral-800 dark:text-white dark:border-neutral-700/80 dark:hover:bg-neutral-700",
      dark:
        "bg-neutral-950 text-white hover:bg-neutral-850 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-subtle",
      outline:
        "border border-slate-300/90 bg-white/80 text-slate-800 hover:bg-slate-50 hover:border-violet-400 shadow-2xs dark:border-neutral-700/80 dark:bg-neutral-900/40 dark:text-neutral-200 dark:hover:bg-neutral-850 dark:hover:border-neutral-600",
      ghost:
        "bg-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wide gap-1.5",
      md: "h-11 px-5 text-sm tracking-wide gap-2",
      lg: "h-13 px-7 text-base tracking-wide gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{children}</span>
        {arrow === "right" && !isLoading && (
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        )}
        {arrow === "up-right" && !isLoading && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
