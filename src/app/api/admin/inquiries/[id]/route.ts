import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { InquiryStatus } from "@/types/admin";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const inquiry = await adminRepository.getInquiryById(params.id);
  if (!inquiry) {
    return NextResponse.json(
      { error: "Inquiry not found." },
      { status: 404, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json({ inquiry }, { status: 200, headers: SECURITY_HEADERS });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const { status } = body;

    const validStatuses: InquiryStatus[] = [
      "NEW",
      "REVIEWING",
      "CONTACTED",
      "DISCOVERY",
      "PROPOSAL",
      "IN_PROGRESS",
      "COMPLETED",
      "REJECTED",
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value provided." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const updated = await adminRepository.updateInquiryStatus(
      params.id,
      status,
      session!.email
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Inquiry not found." },
        { status: 404, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      { success: true, inquiry: updated },
      { status: 200, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[PATCH /api/admin/inquiries/[id] Error]:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry status." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const { content } = body;

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { error: "Note content cannot be empty." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const note = await adminRepository.addInquiryNote(
      params.id,
      session!.email,
      session!.name,
      content.trim()
    );

    if (!note) {
      return NextResponse.json(
        { error: "Inquiry not found." },
        { status: 404, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      { success: true, note },
      { status: 201, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[POST /api/admin/inquiries/[id] Note Error]:", error);
    return NextResponse.json(
      { error: "Failed to append internal note." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
