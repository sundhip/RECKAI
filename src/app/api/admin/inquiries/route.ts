import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(req: NextRequest) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const url = new URL(req.url);
  const status = url.searchParams.get("status") || undefined;
  const search = url.searchParams.get("search") || undefined;

  const inquiries = await adminRepository.getInquiries({ status, search });

  // Return minimal overview fields for table performance & security
  const sanitizedList = inquiries.map((i) => ({
    id: i.id,
    name: i.name,
    email: i.email,
    company: i.company,
    projectType: i.projectType,
    status: i.status,
    createdAt: i.createdAt,
    noteCount: i.notes.length,
    hasAiReqs: Boolean(i.aiRequirements),
    convertedProjectId: i.convertedProjectId,
  }));

  return NextResponse.json(
    { inquiries: sanitizedList, total: sanitizedList.length },
    { status: 200, headers: SECURITY_HEADERS }
  );
}

export async function POST(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "ADMIN");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const { inquiryId } = body;

    if (!inquiryId) {
      return NextResponse.json(
        { error: "inquiryId is required to convert an inquiry." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const createdProject = await adminRepository.convertInquiryToBuild(
      inquiryId,
      session!.email
    );

    if (!createdProject) {
      return NextResponse.json(
        { error: "Inquiry not found or could not be converted." },
        { status: 404, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Inquiry converted to draft Build project: ${createdProject.name}`,
        project: createdProject,
      },
      { status: 201, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[POST /api/admin/inquiries convert Error]:", error);
    return NextResponse.json(
      { error: "Failed to convert inquiry to project." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
