/**
 * Lightweight class name combiner without heavy external dependencies
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ").trim();
}
