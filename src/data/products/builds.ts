import { BuildProduct } from "@/types/product";

/**
 * RECKAI BUILDS DATA REPOSITORY
 * 
 * Strict Trust Strategy Rule:
 * We NEVER introduce fake client names, fictitious case studies, or mock client logos.
 * Client projects will only be populated here once formally contracted, built,
 * and authorized for showcase with appropriate visibility controls:
 * - 'PUBLIC': Showcaseable with full client attribution
 * - 'ANONYMIZED': Case study shared with client name omitted
 * - 'CONFIDENTIAL': Internal only / hidden from public feeds
 */
export const RECKAI_BUILDS: BuildProduct[] = [
  // Live / verified customer projects are added here as client approvals are granted.
  // Currently strictly kept empty to uphold RECKAI's 100% authentic trust policy.
];

/**
 * Filter helper that guarantees confidential projects are never exposed in public listings.
 */
export function getPublicBuilds(): BuildProduct[] {
  return RECKAI_BUILDS.filter(
    (b) => b.status === "PUBLIC" && b.visibility !== "CONFIDENTIAL"
  );
}
