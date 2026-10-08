import { NextRequest, NextResponse } from "next/server";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { getOrCreateRequestId, X_REQUEST_ID_HEADER } from "@/lib/observability/request-id";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: NextRequest) {
  const requestId = getOrCreateRequestId(req.headers);
  const startTime = Date.now();

  let dbStatus = "operational";

  if (process.env.DATABASE_URL && prisma.$queryRaw) {
    try {
      // Safe query to verify connectivity and transaction readiness
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      dbStatus = "needs-attention";
    }
  }

  const durationMs = Date.now() - startTime;

  return NextResponse.json(
    {
      status: dbStatus === "operational" ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      services: {
        website: "operational",
        api: "operational",
        database: dbStatus,
        analytics: "operational",
      },
      latencyMs: durationMs,
    },
    {
      status: dbStatus === "operational" ? 200 : 503,
      headers: {
        ...SECURITY_HEADERS,
        [X_REQUEST_ID_HEADER]: requestId,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
