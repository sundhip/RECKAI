import { NextRequest, NextResponse } from "next/server";
import { inquiryService } from "@/server/services/inquiry.service";
import { checkRateLimit, hashIp } from "@/lib/security/rate-limit";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";
import { logger } from "@/lib/observability/logger";
import { analyticsRepository } from "@/server/repositories/analytics.repository";

export async function POST(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);
  const startTime = Date.now();

  try {
    // 1. Rate limiting check
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";
    const ipHash = hashIp(clientIp);

    const rateLimit = checkRateLimit(ipHash);
    if (!rateLimit.success) {
      logger.security("Rate limit exceeded for inquiry endpoint", {
        requestId,
        route: "/api/project-inquiries",
        method: "POST",
        status: 429,
        durationMs: Date.now() - startTime,
      });

      await analyticsRepository.recordError({
        category: "RATE_LIMIT_EXCEEDED",
        message: "IP rate limit threshold reached for inquiry endpoint",
        route: "/api/project-inquiries",
        timestamp: new Date().toISOString(),
        requestId,
        environment: process.env.NODE_ENV || "development",
        statusCode: 429,
      });

      return NextResponse.json(
        {
          error: "Too many requests. Please wait before submitting again.",
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

    // 2. Parse request JSON body
    const body = await req.json();
    const userAgent = req.headers.get("user-agent") || undefined;

    // Honeypot anti-spam trap: silently drop if filled
    if (body.honeypot) {
      logger.security("Honeypot field triggered and payload discarded", {
        requestId,
        route: "/api/project-inquiries",
        method: "POST",
        status: 200,
        durationMs: Date.now() - startTime,
      });

      return NextResponse.json(
        { success: true, message: "Project inquiry received." },
        { status: 200, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      );
    }

    // 3. Process inquiry via Service layer
    const result = await inquiryService.submitInquiry(body, ipHash, userAgent);

    if (!result.success) {
      logger.warn("Invalid inquiry data received", {
        requestId,
        route: "/api/project-inquiries",
        method: "POST",
        status: 400,
        durationMs: Date.now() - startTime,
      });

      return NextResponse.json(
        { error: result.error || "Invalid inquiry data provided." },
        { status: 400, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      );
    }

    logger.info("Project inquiry processed successfully", {
      requestId,
      route: "/api/project-inquiries",
      method: "POST",
      status: 201,
      durationMs: Date.now() - startTime,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry received. Our team will review your specifications.",
        inquiryId: result.inquiryId,
      },
      { status: 201, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
    );
  } catch {
    logger.error("Unexpected error in inquiry intake", {
      requestId,
      route: "/api/project-inquiries",
      method: "POST",
      status: 500,
      durationMs: Date.now() - startTime,
    });

    await analyticsRepository.recordError({
      category: "API_FAILURE",
      message: "Unexpected error occurred during inquiry submission",
      route: "/api/project-inquiries",
      timestamp: new Date().toISOString(),
      requestId,
      environment: process.env.NODE_ENV || "development",
      statusCode: 500,
    });

    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
    );
  }
}
