export type InquiryStatus =
  | "NEW"
  | "REVIEWING"
  | "CONTACTED"
  | "DISCOVERY"
  | "PROPOSAL"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "REJECTED";

export interface ProjectInquiryData {
  id?: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  projectType: string;
  description: string;
  problem: string;
  whoIsItFor?: string;
  stage?: string;
  aiRequirements?: string;
  timeline?: string;
  budget?: string;
  additionalRequirements?: string;
  referenceUrl?: string;
  status?: InquiryStatus;
  createdAt?: string;
}
