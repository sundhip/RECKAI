import { NextRequest, NextResponse } from "next/server";
import { contactService } from "@/server/services/contact.service";
import { checkRateLimit, hashIp } from "@/lib/security/rate-limit";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";
import { logger } from "@/lib/observability/logger";

export async function POST(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);
  const startTime = Date.now();

  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";
    const ipHash = hashIp(clientIp);

    const rateLimit = checkRateLimit(ipHash);
    if (!rateLimit.success) {
      logger.security("Rate limit exceeded for contact endpoint", {
        requestId,
        route: "/api/contact",
        method: "POST",
        status: 429,
        durationMs: Date.now() - startTime,
      });

      return NextResponse.json(
        {
          error: "Too many messages sent. Please wait before contacting again.",
          retryAfter: rateLimit.resetInSeconds,
        },
        {
          status: 429,
          headers: {
            ...SECURITY_HEADERS,
            [X_REQUEST_ID_HEADER]: requestId,
            "Retry-After": String(rateLimit.resetInSeconds),
          },
        }
      );
    }

    const body = await req.json();
    const userAgent = req.headers.get("user-agent") || undefined;

    const result = await contactService.submitContact(body, ipHash, userAgent);

    if (!result.success) {
      logger.warn("Invalid contact payload received", {
        requestId,
        route: "/api/contact",
        method: "POST",
        status: 400,
        durationMs: Date.now() - startTime,
      });

      return NextResponse.json(
        { error: result.error || "Invalid contact message provided." },
        { status: 400, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      );
    }

    logger.info("Contact inquiry processed successfully", {
      requestId,
      route: "/api/contact",
      method: "POST",
      status: 201,
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We will be in touch shortly.",
        contactId: result.contactId,
      },
      { status: 201, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
    );
  } catch {
    logger.error("Unexpected error in contact route", {
      requestId,
      route: "/api/contact",
      method: "POST",
      status: 500,
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
    );
  }
}
