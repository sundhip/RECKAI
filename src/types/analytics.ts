export const ALLOWED_ANALYTICS_EVENTS = [
  "page_view",
  "work_view",
  "view_work",
  "original_view",
  "view_original",
  "build_view",
  "view_build",
  "service_view",
  "service_click",
  "process_view",
  "about_view",
  "start_project_click",
  "hero_start_project_click",
  "hero_explore_work_click",
  "original_product_click",
  "builds_section_click",
  "final_cta_click",
  "cta_click",
  "project_form_start",
  "project_form_step",
  "project_form_submit",
  "project_form_submitted",
  "project_form_error",
  "external_product_click",
  "contact_form_submit",
  "contact_submitted",
] as const;

export type AnalyticsEventName = (typeof ALLOWED_ANALYTICS_EVENTS)[number];

/**
 * Allowed event property keys.
 * Notice: STRICTLY EXCLUDES any PII, form values, names, emails, budgets, problem narratives.
 */
export const FORBIDDEN_PROPERTY_KEYS = [
  "name",
  "email",
  "company",
  "phone",
  "description",
  "problem",
  "budget",
  "aiRequirements",
  "password",
  "token",
  "secret",
  "note",
  "notes",
  "referenceUrl",
] as const;

export interface SafeEventProperties {
  slug?: string;
  category?: string;
  service?: string;
  action?: string;
  step?: number | string;
  source?: "direct" | "search" | "referral" | "social" | "campaign" | string;
  route?: string;
  durationMs?: number;
  status?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface AnalyticsEvent {
  event: AnalyticsEventName;
  properties?: SafeEventProperties;
  timestamp?: number;
}
