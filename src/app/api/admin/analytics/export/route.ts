import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { analyticsRepository } from "@/server/repositories/analytics.repository";
import { DateRangeFilter } from "@/types/telemetry";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";
import { adminRepository } from "@/server/repositories/admin.repository";

export async function GET(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);

  // Export requires at least EDITOR role
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse || !session) {
    return (
      errorResponse ||
      NextResponse.json(
        { error: "Unauthorized to export metrics." },
        { status: 401, headers: { ...SECURITY_HEADERS, [X_REQUEST_ID_HEADER]: requestId } }
      )
    );
  }

  const { searchParams } = new URL(req.url);
  const rawPeriod = searchParams.get("period");
  const period: DateRangeFilter =
    rawPeriod === "today" || rawPeriod === "7d" || rawPeriod === "90d" ? rawPeriod : "30d";

  const csvContent = await analyticsRepository.exportCsv(period);

  // Log export in system audit trail
  await adminRepository.recordAuditLog(
    session.email,
    "METRICS_EXPORTED",
    "ANALYTICS",
    period,
    `Exported business intelligence report for period: ${period}`
  );

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      ...SECURITY_HEADERS,
      [X_REQUEST_ID_HEADER]: requestId,
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="reckai-analytics-${period}-${Date.now()}.csv"`,
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
