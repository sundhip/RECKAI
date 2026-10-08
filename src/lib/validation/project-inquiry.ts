import { z } from "zod";

export const projectInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(255, "Email is too long"),
  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters")
    .optional(),
  role: z
    .string()
    .trim()
    .max(100, "Role cannot exceed 100 characters")
    .optional(),
  projectType: z
    .string()
    .trim()
    .min(2, "Please select or describe the project archetype")
    .max(100, "Project type description is too long"),
  description: z
    .string()
    .trim()
    .min(10, "Please provide at least 10 characters describing what you want to build")
    .max(5000, "Description cannot exceed 5000 characters"),
  problem: z
    .string()
    .trim()
    .min(10, "Please describe the core problem to be solved (min 10 characters)")
    .max(5000, "Problem description cannot exceed 5000 characters"),
  whoIsItFor: z
    .string()
    .trim()
    .max(2000, "Target user description cannot exceed 2000 characters")
    .optional(),
  stage: z
    .string()
    .trim()
    .max(100, "Stage value cannot exceed 100 characters")
    .optional(),
  aiRequirements: z
    .string()
    .trim()
    .max(3000, "AI requirements description cannot exceed 3000 characters")
    .optional(),
  timeline: z
    .string()
    .trim()
    .max(100, "Timeline value cannot exceed 100 characters")
    .optional(),
  budget: z
    .string()
    .trim()
    .max(100, "Budget value cannot exceed 100 characters")
    .optional(),
  additionalRequirements: z
    .string()
    .trim()
    .max(4000, "Additional requirements cannot exceed 4000 characters")
    .optional(),
  referenceUrl: z
    .string()
    .trim()
    .url("Please provide a valid URL")
    .or(z.literal(""))
    .optional(),
  honeypot: z
    .string()
    .max(0, "Invalid input detected")
    .optional()
    .or(z.literal("")),
});

export type ProjectInquiryInput = z.infer<typeof projectInquirySchema>;
