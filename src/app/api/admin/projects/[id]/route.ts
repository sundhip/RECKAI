import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const project = await adminRepository.getProjectById(params.id);
  if (!project) {
    return NextResponse.json(
      { error: "Project not found." },
      { status: 404, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json({ project }, { status: 200, headers: SECURITY_HEADERS });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const { action, targetVisibility, ...updates } = body;

    // 1. Publishing Workflow Actions
    if (action === "publish") {
      // Require ADMIN or EDITOR
      const published = await adminRepository.publishProject(params.id, session!.email);
      if (!published) {
        return NextResponse.json(
          { error: "Project not found." },
          { status: 404, headers: SECURITY_HEADERS }
        );
      }
      return NextResponse.json(
        { success: true, message: "Project published to public website.", project: published },
        { status: 200, headers: SECURITY_HEADERS }
      );
    }

    if (action === "unpublish") {
      const target = targetVisibility === "PRIVATE" ? "PRIVATE" : "DRAFT";
      const unpublished = await adminRepository.unpublishProject(
        params.id,
        target,
        session!.email
      );
      if (!unpublished) {
        return NextResponse.json(
          { error: "Project not found." },
          { status: 404, headers: SECURITY_HEADERS }
        );
      }
      return NextResponse.json(
        { success: true, message: `Project unpublished (moved to ${target}).`, project: unpublished },
        { status: 200, headers: SECURITY_HEADERS }
      );
    }

    if (action === "archive") {
      const archived = await adminRepository.archiveProject(params.id, session!.email);
      if (!archived) {
        return NextResponse.json(
          { error: "Project not found." },
          { status: 404, headers: SECURITY_HEADERS }
        );
      }
      return NextResponse.json(
        { success: true, message: "Project archived.", project: archived },
        { status: 200, headers: SECURITY_HEADERS }
      );
    }

    // 2. Regular Field Updates
    const updated = await adminRepository.updateProject(params.id, updates, session!.email);
    if (!updated) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404, headers: SECURITY_HEADERS }
      );
    }

    return NextResponse.json(
      { success: true, message: "Project updated successfully.", project: updated },
      { status: 200, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[PATCH /api/admin/projects/[id] Error]:", error);
    return NextResponse.json(
      { error: "Failed to update project." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, errorResponse } = requireAdminAuth(req, "ADMIN");
  if (errorResponse) return errorResponse;

  // Safe deletion: move to ARCHIVED rather than destructive DB wipe
  const archived = await adminRepository.archiveProject(params.id, session!.email);
  if (!archived) {
    return NextResponse.json(
      { error: "Project not found." },
      { status: 404, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json(
    { success: true, message: "Project safely archived.", project: archived },
    { status: 200, headers: SECURITY_HEADERS }
  );
}
