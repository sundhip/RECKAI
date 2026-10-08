import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(req: NextRequest) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const url = new URL(req.url);
  const limit = Math.min(Number(url.searchParams.get("limit")) || 50, 100);

  const logs = await adminRepository.getAuditLogs(limit);
  return NextResponse.json({ logs }, { status: 200, headers: SECURITY_HEADERS });
}
