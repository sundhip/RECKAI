export type ProductType = "ORIGINAL" | "BUILD";

export type ContentStatus = "PUBLIC" | "PRIVATE" | "DRAFT" | "ARCHIVED";

export type BuildVisibility = "PUBLIC" | "CONFIDENTIAL" | "ANONYMIZED";

export interface CaseStudyData {
  id?: string;
  title: string;
  overview: string;
  challenge: string;
  architecture: string;
  outcomes: string;
  media?: string[];
  isPublished: boolean;
}

export interface ProblemDeep {
  friction: string;
  whyItMatters: string;
  whoExperiencesIt: string;
  whyReckaiChoseIt: string;
}

export interface IdeaTransition {
  observation: string;
  coreIdea: string;
  hypothesis: string;
  productRealization: string;
}

export interface ReckonStage {
  stage: string;
  title: string;
  description: string;
}

export interface SolutionDeep {
  overview: string;
  userExperience: string;
  systemBehavior: string;
  keyDecisions: string[];
}

export interface AiCapabilityDeep {
  name: string;
  role: string;
  implementation: string;
}

export interface TechStackCategorized {
  frontend: string[];
  backend: string[];
  database: string[];
  aiMl: string[];
  infrastructure: string[];
}

export interface ProductChallenge {
  title: string;
  description: string;
}

export interface ProductRoadmap {
  now: string[];
  next: string[];
  future: string[];
}

export type ProductCurrentStage =
  | "Active Development"
  | "MVP"
  | "Prototype"
  | "Iterating"
  | "Production";

export type BuildProjectStatus =
  | "CONCEPT"
  | "DISCOVERY"
  | "PROTOTYPE"
  | "MVP"
  | "IN DEVELOPMENT"
  | "PRODUCTION"
  | "ITERATING"
  | "COMPLETED"
  | "PRIVATE";

export type BuildEngagementType =
  | "Product Development"
  | "AI System"
  | "Platform Engineering"
  | "Intelligent Automation"
  | "Full 0-to-1 Build";

export interface BuildDiscoveryStage {
  stage: string;
  title: string;
  description: string;
}

export interface BuildEngineeringDeep {
  architecture?: string;
  scalability?: string;
  security?: string;
  apiDesign?: string;
  databaseDesign?: string;
  observability?: string;
  errorHandling?: string;
}

export interface BuildSolutionModule {
  name: string;
  description: string;
  deliverables?: string[];
}

export interface BuildTimelineStage {
  phase: string;
  status: "Completed" | "Current" | "Upcoming";
  description?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline?: string;
  type: ProductType; // Distinguishes RECKAI Originals vs RECKAI Builds
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  approach?: string;
  aiCapabilities: string[]; // Structured capability badges / deep-dive points
  technologies: string[];
  images: string[];
  videos?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: ContentStatus;

  // Deep Product Storytelling
  problemDeep?: ProblemDeep;
  ideaTransition?: IdeaTransition;
  howWeReckoned?: ReckonStage[];
  solutionDeep?: SolutionDeep;
  aiCapabilitiesDeep?: AiCapabilityDeep[];
  techStackCategorized?: TechStackCategorized;
  challenges?: ProductChallenge[];
  currentStage?: ProductCurrentStage;
  futureRoadmap?: ProductRoadmap;

  // Specific to RECKAI Builds (client confidentiality & showcase controls)
  visibility?: BuildVisibility;
  buildStatus?: BuildProjectStatus;
  engagementType?: BuildEngagementType;
  clientName?: string; // Hidden or pseudonymized if confidential
  industry?: string;
  servicesProvided?: string[];
  discoveryStages?: BuildDiscoveryStage[];
  productStrategy?: { decisions: string[]; mvpBoundaries: string; scalability: string };
  solutionModules?: BuildSolutionModule[];
  engineeringDeep?: BuildEngineeringDeep;
  timelineStages?: BuildTimelineStage[];
  verifiedOutcomes?: string[];
  currentStanding?: string;

  caseStudy?: CaseStudyData;
  createdAt: string;
  updatedAt: string;
}

export type OriginalProduct = Product & {
  type: "ORIGINAL";
};

export type BuildProduct = Product & {
  type: "BUILD";
  visibility: BuildVisibility;
};
