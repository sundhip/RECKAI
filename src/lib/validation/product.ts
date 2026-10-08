import { z } from "zod";

export const productSchema = z.object({
  slug: z.string().trim().min(2).max(100).regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  name: z.string().trim().min(2).max(100),
  category: z.string().trim().min(2).max(100),
  type: z.enum(["ORIGINAL", "BUILD"]),
  shortDescription: z.string().trim().min(10).max(300),
  description: z.string().trim().min(20).max(5000),
  problem: z.string().trim().min(20).max(5000),
  solution: z.string().trim().min(20).max(5000),
  approach: z.string().trim().max(5000).optional(),
  aiCapabilities: z.array(z.string().trim()).default([]),
  technologies: z.array(z.string().trim()).default([]),
  images: z.array(z.string().trim()).default([]),
  videos: z.array(z.string().trim()).default([]).optional(),
  liveUrl: z.string().trim().url().optional().or(z.literal("")),
  githubUrl: z.string().trim().url().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  status: z.enum(["PUBLIC", "PRIVATE", "DRAFT", "ARCHIVED"]).default("DRAFT"),
  
  // Specific to Builds
  visibility: z.enum(["PUBLIC", "CONFIDENTIAL", "ANONYMIZED"]).optional().default("PUBLIC"),
  clientName: z.string().trim().max(100).optional(),
  industry: z.string().trim().max(100).optional(),
  servicesProvided: z.array(z.string().trim()).default([]).optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
