export type AdminRole = "ADMIN" | "EDITOR" | "VIEWER";

export interface AdminUser {
  id: string;
  clerkUserId?: string;
  email: string;
  name: string;
  role: AdminRole;
  lastLoginAt?: string;
  createdAt: string;
}

export interface AdminSession {
  userId: string;
  clerkUserId?: string;
  email: string;
  name: string;
  role: AdminRole;
  exp: number; // Expiration timestamp in seconds
}

export type InquiryStatus =
  | "NEW"
  | "REVIEWING"
  | "CONTACTED"
  | "DISCOVERY"
  | "PROPOSAL"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "REJECTED";

export interface InternalNote {
  id: string;
  inquiryId: string;
  authorEmail: string;
  authorName: string;
  createdAt: string;
  content: string;
}

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  projectType: string;
  stage?: string;
  description: string;
  problem: string;
  aiRequirements?: string;
  timeline?: string;
  budget?: string;
  referenceUrl?: string;
  status: InquiryStatus;
  ipHash?: string;
  hasAiReqs?: boolean;
  createdAt: string;
  updatedAt: string;
  notes: InternalNote[];
  convertedProjectId?: string;
}

export type ProjectType = "ORIGINAL" | "BUILD";
export type ProjectVisibility = "DRAFT" | "PUBLIC" | "PRIVATE" | "ARCHIVED";

export interface ProjectRecord {
  id: string;
  slug: string;
  name: string;
  type: ProjectType;
  category: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  approach?: string;
  aiCapabilities: string[];
  technologies: string[];
  images: string[];
  videos?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  visibility: ProjectVisibility;
  clientName?: string;
  industry?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MediaAsset {
  id: string;
  projectId?: string;
  filename: string;
  url: string;
  type: "IMAGE" | "VIDEO" | "DOCUMENT";
  altText?: string;
  caption?: string;
  visibility: ProjectVisibility;
  sizeBytes: number;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  actorEmail: string;
  actorClerkUserId?: string;
  action: string;
  resourceType: string;
  resourceId: string;
  details?: string;
  createdAt: string;
}

export interface ContentSettings {
  featuredProjectSlugs: string[];
  announcementText?: string;
  announcementActive: boolean;
  ctaHeading: string;
  ctaSubtext: string;
}
