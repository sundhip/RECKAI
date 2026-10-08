import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-white",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
            : "border-neutral-200/90 focus:border-violet-600 focus:ring-violet-600 dark:border-neutral-800 dark:focus:border-violet-400",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-white",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
            : "border-neutral-200/90 focus:border-violet-600 focus:ring-violet-600 dark:border-neutral-800 dark:focus:border-violet-400",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-900 dark:text-white",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
            : "border-neutral-200/90 focus:border-violet-600 focus:ring-violet-600 dark:border-neutral-800 dark:focus:border-violet-400",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const reactId = React.useId();
    const generatedId = id || reactId;

    return (
      <label htmlFor={generatedId} className="flex items-center gap-3 cursor-pointer select-none">
        <input
          ref={ref}
          type="checkbox"
          id={generatedId}
          className={cn(
            "h-4 w-4 rounded border-neutral-300 text-violet-600 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-900 dark:checked:bg-violet-600",
            className
          )}
          {...props}
        />
        <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-normal">
          {label}
        </span>
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const reactId = React.useId();
    const generatedId = id || reactId;

    return (
      <label htmlFor={generatedId} className="flex items-center gap-3 cursor-pointer select-none">
        <input
          ref={ref}
          type="radio"
          id={generatedId}
          className={cn(
            "h-4 w-4 border-neutral-300 text-violet-600 focus:ring-violet-500 dark:border-neutral-700 dark:bg-neutral-900",
            className
          )}
          {...props}
        />
        <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-normal">
          {label}
        </span>
      </label>
    );
  }
);
Radio.displayName = "Radio";

export function FormField({
  label,
  description,
  error,
  required,
  className,
  children,
}: {
  label: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          {label} {required && <span className="text-violet-600 dark:text-violet-400">*</span>}
        </label>
      </div>
      {description && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      )}
      {children}
      {error && <FormError message={error} />}
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <p className="text-xs text-red-600 dark:text-red-400 font-medium pt-0.5">
      {message}
    </p>
  );
}

export function FormSuccess({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-xs text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
      {message}
    </div>
  );
}
