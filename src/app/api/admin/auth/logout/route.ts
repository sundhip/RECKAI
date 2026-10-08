import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/auth/session";
import { SECURITY_HEADERS } from "@/lib/security/headers";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logged out." },
    { status: 200, headers: SECURITY_HEADERS }
  );
  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}
