import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(req: NextRequest) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const url = new URL(req.url);
  const projectId = url.searchParams.get("projectId") || undefined;
  const type = url.searchParams.get("type") || undefined;

  const media = await adminRepository.getMedia({ projectId, type });
  return NextResponse.json({ media }, { status: 200, headers: SECURITY_HEADERS });
}

export async function POST(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const { filename, url, type, projectId, altText, caption, visibility, sizeBytes } = body;

    if (!filename || !url) {
      return NextResponse.json(
        { error: "Filename and URL are required." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const created = await adminRepository.addMedia(
      {
        filename,
        url,
        type: type || "IMAGE",
        projectId,
        altText,
        caption,
        visibility: visibility || "PUBLIC",
        sizeBytes: sizeBytes || 1024,
      },
      session!.email
    );

    return NextResponse.json({ success: true, media: created }, { status: 201, headers: SECURITY_HEADERS });
  } catch (error) {
    console.error("[POST /api/admin/media Error]:", error);
    return NextResponse.json(
      { error: "Failed to create media record." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Asset ID is required." },
      { status: 400, headers: SECURITY_HEADERS }
    );
  }

  const success = await adminRepository.deleteMedia(id, session!.email);
  if (!success) {
    return NextResponse.json(
      { error: "Media item not found." },
      { status: 404, headers: SECURITY_HEADERS }
    );
  }

  return NextResponse.json(
    { success: true, message: "Media item removed." },
    { status: 200, headers: SECURITY_HEADERS }
  );
}
