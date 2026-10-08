import { NextResponse } from "next/server";
import { SECURITY_HEADERS } from "@/lib/security/headers";

/**
 * Obsolete custom password endpoint retired in favor of Clerk Authentication (Phase 12).
 */
export async function POST() {
  return NextResponse.json(
    {
      error: "Custom password authentication has been retired. Please authenticate via Clerk at /admin/sign-in.",
      signInUrl: "/admin/sign-in",
    },
    { status: 410, headers: SECURITY_HEADERS }
  );
}
