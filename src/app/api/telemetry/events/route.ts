import { NextRequest, NextResponse } from "next/server";
import { analyticsRepository } from "@/server/repositories/analytics.repository";
import {
  isValidAnalyticsEvent,
  sanitizeEventProperties,
} from "@/lib/analytics/events";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";

export async function POST(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);

  try {
    const body = await req.json();

    if (!body || typeof body !== "object" || !body.event) {
      return NextResponse.json(
        { error: "Invalid telemetry payload" },
        { status: 400, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      );
    }

    if (!isValidAnalyticsEvent(body.event)) {
      return NextResponse.json(
        { error: "Unrecognized analytics event name" },
        { status: 422, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      );
    }

    const safeProperties = sanitizeEventProperties(body.properties);

    await analyticsRepository.recordEvent({
      event: body.event,
      properties: safeProperties,
      timestamp: typeof body.timestamp === "number" ? body.timestamp : Date.now(),
    });

    return new NextResponse(null, {
      status: 204,
      headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
    });
  } catch {
    // Fail silently with 204 to preserve client stability
    return new NextResponse(null, {
      status: 204,
      headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
    });
  }
}
