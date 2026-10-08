"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

export interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  delayMs?: number;
  threshold?: number;
}

/**
 * Universal Viewport Reveal Observer hook.
 * Fires entrance animations when elements enter the screen,
 * automatically bypasses animations when user prefers reduced motion.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, trigger immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export function FadeIn({
  delayMs = 0,
  threshold = 0.1,
  className,
  children,
  ...props
}: MotionProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-opacity duration-700 ease-out",
        isInView ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SlideUp({
  delayMs = 0,
  threshold = 0.15,
  className,
  children,
  ...props
}: MotionProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 motion-reduce:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Reveal({
  delayMs = 0,
  threshold = 0.15,
  className,
  children,
  ...props
}: MotionProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-all duration-600 cubic-bezier(0.16, 1, 0.3, 1)",
        isInView
          ? "opacity-100 translate-y-0 filter-none"
          : "opacity-0 translate-y-4 blur-[2px] motion-reduce:translate-y-0 motion-reduce:filter-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ScaleIn({
  delayMs = 0,
  threshold = 0.15,
  className,
  children,
  ...props
}: MotionProps) {
  const { ref, isInView } = useInView(threshold);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-all duration-600 ease-out",
        isInView
          ? "opacity-100 scale-100"
          : "opacity-0 scale-[0.97] motion-reduce:scale-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageReveal({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-800 ease-out",
        isInView ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Stagger({
  staggerMs = 80,
  className,
  children,
}: {
  staggerMs?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            style={{ transitionDelay: `${index * staggerMs}ms` }}
            className={cn(
              "transition-all duration-500 ease-out",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 motion-reduce:translate-y-0"
            )}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
