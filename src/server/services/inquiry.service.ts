import { ProjectInquiryInput, projectInquirySchema } from "@/lib/validation/project-inquiry";
import { inquiryRepository } from "@/server/repositories/inquiry.repository";
import { adminRepository } from "@/server/repositories/admin.repository";
import { analyticsRepository } from "@/server/repositories/analytics.repository";

export class InquiryService {
  async submitInquiry(
    rawInput: unknown,
    ipHash?: string,
    userAgent?: string
  ): Promise<{ success: boolean; inquiryId?: string; error?: string }> {
    const parseResult = projectInquirySchema.safeParse(rawInput);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues.map((i) => i.message).join(", ");
      return { success: false, error: errorMsg };
    }

    const data: ProjectInquiryInput = parseResult.data;
    const result = await inquiryRepository.create(data, ipHash, userAgent);

    // Sync to admin repository for internal ops visibility
    await adminRepository.addInquiry({
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      projectType: data.projectType,
      stage: data.stage,
      problem: data.problem,
      description: data.description,
      aiRequirements: data.aiRequirements,
      timeline: data.timeline,
      budget: data.budget,
      referenceUrl: data.referenceUrl,
    });

    // Record telemetry event strictly without PII
    await analyticsRepository.recordEvent({
      event: "project_form_submit",
      properties: { category: data.projectType },
      timestamp: Date.now(),
    });

    // Optional email dispatch hook
    if (process.env.EMAIL_SERVICE_KEY) {
      console.log(`[InquiryService]: New project inquiry received from ${data.email} (${data.name})`);
    }

    return { success: true, inquiryId: result.id };
  }
}

export const inquiryService = new InquiryService();
