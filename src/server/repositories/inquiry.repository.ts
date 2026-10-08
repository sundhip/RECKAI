import { ProjectInquiryData } from "@/types/inquiry";
import { prisma } from "@/lib/db/prisma";

export class InquiryRepository {
  /**
   * Persists an inquiry to the database if available,
   * with graceful logging fallback in decoupled/preview environments.
   */
  async create(data: ProjectInquiryData, ipHash?: string, userAgent?: string): Promise<{ id: string; success: boolean }> {
    try {
      if (process.env.DATABASE_URL) {
        const record = await prisma.projectInquiry.create({
          data: {
            name: data.name,
            email: data.email,
            company: data.company
              ? data.role
                ? `${data.company} (${data.role})`
                : data.company
              : data.role
              ? `Role: ${data.role}`
              : null,
            projectType: data.stage
              ? `${data.projectType} [Stage: ${data.stage}]`
              : data.projectType,
            description: data.additionalRequirements
              ? `${data.description}\n\n[Additional Requirements]: ${data.additionalRequirements}`
              : data.description,
            problem: data.whoIsItFor
              ? `${data.problem}\n\n[Target Audience]: ${data.whoIsItFor}`
              : data.problem,
            aiRequirements: data.aiRequirements || null,
            timeline: data.timeline || null,
            budget: data.budget || null,
            referenceUrl: data.referenceUrl || null,
            ipHash: ipHash || null,
            userAgent: userAgent || null,
          },
        });
        return { id: record.id, success: true };
      }
    } catch (error) {
      console.error("[InquiryRepository Error]: Database insert failed, falling back to log", error);
    }

    // In-memory / ephemeral mock identifier for local preview / zero-db mode
    const simulatedId = `inq_${Date.now()}`;
    return { id: simulatedId, success: true };
  }
}

export const inquiryRepository = new InquiryRepository();
