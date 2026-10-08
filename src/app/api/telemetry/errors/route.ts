import { NextRequest, NextResponse } from "next/server";
import { analyticsRepository } from "@/server/repositories/analytics.repository";
import { ErrorCategory } from "@/types/telemetry";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";
import { logger } from "@/lib/observability/logger";

export async function POST(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);

  try {
    const body = await req.json();

    const category: ErrorCategory = body.category || "FRONTEND_UNHANDLED";
    const rawMessage = typeof body.message === "string" ? body.message : "Unknown client error";
    // Sanitize and limit error message length
    const message = rawMessage.slice(0, 250);
    const route = typeof body.route === "string" ? body.route.slice(0, 80) : "/";

    const errorRecord = await analyticsRepository.recordError({
      category,
      message,
      route,
      timestamp: new Date().toISOString(),
      requestId,
      environment: process.env.NODE_ENV || "development",
      statusCode: typeof body.statusCode === "number" ? body.statusCode : undefined,
    });

    logger.error(`[Centralized Telemetry Error]: ${category} on ${route}`, {
      requestId,
      route,
      status: body.statusCode,
    });

    return NextResponse.json(
      { recorded: true, id: errorRecord.id },
      { status: 200, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
    );
  } catch {
    return new NextResponse(null, {
      status: 204,
      headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
    });
  }
}
