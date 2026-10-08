export type WebVitalsName = "LCP" | "CLS" | "INP" | "TTFB" | "FCP";

export interface WebVitalsMetric {
  id: string;
  name: WebVitalsName;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  route: string;
  timestamp: number;
}

export type ErrorCategory =
  | "FRONTEND_UNHANDLED"
  | "API_FAILURE"
  | "DATABASE_FAILURE"
  | "FORM_SUBMISSION_ERROR"
  | "SECURITY_ANOMALY"
  | "RATE_LIMIT_EXCEEDED";

export interface SystemErrorRecord {
  id: string;
  category: ErrorCategory;
  message: string;
  route: string;
  timestamp: string;
  requestId?: string;
  environment: string;
  statusCode?: number;
}

export type SystemHealthStatus = "Operational" | "Needs attention" | "Degraded";

export interface ServiceHealthState {
  status: SystemHealthStatus;
  latencyMs?: number;
  message?: string;
}

export interface SystemHealthOverview {
  overall: SystemHealthStatus;
  timestamp: string;
  services: {
    website: ServiceHealthState;
    api: ServiceHealthState;
    database: ServiceHealthState;
    email: ServiceHealthState;
    analytics: ServiceHealthState;
  };
}

export type DateRangeFilter = "today" | "7d" | "30d" | "90d";

export interface ConversionFunnelStep {
  stage: string;
  label: string;
  count: number;
  dropOffRate?: number; // percentage (0-100)
}

export interface ProjectTypeMetric {
  type: string;
  count: number;
  percentage: number;
}

export interface ItemInterestMetric {
  key: string;
  name: string;
  views: number;
  ctaClicks: number;
  conversionRate?: number;
}

export interface RoutePerformanceMetric {
  route: string;
  avgLatencyMs: number;
  sampleCount: number;
  status: "fast" | "moderate" | "slow";
}

export interface AnalyticsSummary {
  period: DateRangeFilter;
  startDate: string;
  endDate: string;
  metrics: {
    visitors: number;
    pageViews: number;
    workViews: number;
    projectInterest: number;
    startProjectClicks: number;
    formStarts: number;
    formSubmissions: number;
    qualifiedInquiries: number;
  };
  comparison?: {
    visitorsDiff: number;
    pageViewsDiff: number;
    inquiriesDiff: number;
  };
  conversionFunnel: ConversionFunnelStep[];
  inquiryPipeline: {
    stage: string;
    count: number;
  }[];
  projectTypeDistribution: ProjectTypeMetric[];
  productInterest: ItemInterestMetric[];
  serviceInterest: ItemInterestMetric[];
  routePerformance: RoutePerformanceMetric[];
  recentErrors: SystemErrorRecord[];
  health: SystemHealthOverview;
  hasSufficientData: boolean;
}
