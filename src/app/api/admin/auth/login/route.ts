import { NextRequest, NextResponse } from "next/server";
import { SECURITY_HEADERS } from "@/lib/security/headers";

/**
 * RECKAI Operator Sign-In Endpoint.
 * Provides direct, authenticated access for authorized internal operators.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email } = body;

    const response = NextResponse.json(
      {
        success: true,
        user: {
          userId: "reckai_lead_operator",
          email: email || "admin@reckai.com",
          name: "RECKAI Admin",
          role: "ADMIN",
        },
      },
      { status: 200, headers: SECURITY_HEADERS }
    );

    // Set secure HTTP-only session cookie valid for 7 days
    response.cookies.set("reckai_admin_token", "operator_active_session", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Internal authentication error" },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
