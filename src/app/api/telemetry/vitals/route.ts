import { NextRequest, NextResponse } from "next/server";
import { analyticsRepository } from "@/server/repositories/analytics.repository";
import { WebVitalsMetric } from "@/types/telemetry";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";

export async function POST(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);

  try {
    const body = (await req.json()) as Partial<WebVitalsMetric>;

    if (
      !body ||
      typeof body !== "object" ||
      !body.name ||
      typeof body.value !== "number" ||
      !body.route
    ) {
      return new NextResponse(null, {
        status: 204,
        headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
      });
    }

    const vital: WebVitalsMetric = {
      id: body.id || `vital_${Date.now()}`,
      name: body.name,
      value: body.value,
      rating: body.rating || (body.value < 1000 ? "good" : "needs-improvement"),
      route: body.route.slice(0, 80),
      timestamp: body.timestamp || Date.now(),
    };

    await analyticsRepository.recordVital(vital);

    return new NextResponse(null, {
      status: 204,
      headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
    });
  } catch {
    return new NextResponse(null, {
      status: 204,
      headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
    });
  }
}
