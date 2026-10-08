import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { analyticsRepository } from "@/server/repositories/analytics.repository";
import { DateRangeFilter } from "@/types/telemetry";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";

export async function GET(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);

  // Require at least VIEWER role
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const { searchParams } = new URL(req.url);
  const rawPeriod = searchParams.get("period");
  const period: DateRangeFilter =
    rawPeriod === "today" || rawPeriod === "7d" || rawPeriod === "90d" ? rawPeriod : "30d";

  const summary = await analyticsRepository.getSummary(period);

  return NextResponse.json(summary, {
    status: 200,
    headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId },
  });
}
