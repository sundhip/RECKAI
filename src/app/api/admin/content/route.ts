import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(req: NextRequest) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const settings = await adminRepository.getContentSettings();
  return NextResponse.json({ settings }, { status: 200, headers: SECURITY_HEADERS });
}

export async function PATCH(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "ADMIN");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const updated = await adminRepository.updateContentSettings(body, session!.email);

    return NextResponse.json(
      { success: true, settings: updated },
      { status: 200, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[PATCH /api/admin/content Error]:", error);
    return NextResponse.json(
      { error: "Failed to update content settings." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
