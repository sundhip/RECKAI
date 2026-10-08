import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function GET(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  return NextResponse.json(
    {
      authenticated: true,
      user: {
        userId: session!.userId,
        email: session!.email,
        name: session!.name,
        role: session!.role,
      },
    },
    { status: 200, headers: SECURITY_HEADERS }
  );
}
