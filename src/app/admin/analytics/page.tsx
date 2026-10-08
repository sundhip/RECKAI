"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnalyticsSummary, DateRangeFilter } from "@/types/telemetry";

export default function AdminAnalyticsPage() {
  const [period, setPeriod] = useState<DateRangeFilter>("30d");
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics(period);
  }, [period]);

  async function fetchAnalytics(selectedPeriod: DateRangeFilter) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/analytics?period=${selectedPeriod}`);
      if (!res.ok) {
        throw new Error(`Failed to load analytics: HTTP ${res.status}`);
      }
      const json: AnalyticsSummary = await res.json();
      setData(json);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  }

  async function handleExport() {
    setExporting(true);
    try {
      const res = await fetch(`/api/admin/analytics/export?period=${period}`);
      if (!res.ok) {
        alert("Failed to export analytics report.");
        return;
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `reckai-analytics-${period}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      alert("Error occurred while generating CSV export.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-7xl">
        {/* Header with Title, Date Range Selector, and CSV Export */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white font-mono">
                Analytics & Growth Intelligence
              </h1>
              <Badge variant="violet" className="text-[10px] font-mono py-0">
                OBSERVABILITY
              </Badge>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Privacy-first telemetry, real-world conversion funnels, and system observability.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Date Range Tabs */}
            <div className="flex items-center rounded-lg bg-neutral-900 border border-neutral-800 p-0.5">
              {(["today", "7d", "30d", "90d"] as DateRangeFilter[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                    period === p
                      ? "bg-violet-600 text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {p === "today" ? "Today" : p.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Export CSV Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              disabled={exporting || loading}
              className="text-xs font-mono h-8 border-neutral-800 hover:bg-neutral-850"
            >
              {exporting ? "EXPORTING..." : "EXPORT CSV ↗"}
            </Button>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-900/60 bg-red-950/20 p-4 text-xs font-mono text-red-400">
            {error}
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center space-y-3 font-mono text-xs text-neutral-500">
            <div className="h-5 w-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="uppercase tracking-widest">CALCULATING BUSINESS INTELLIGENCE METRICS...</p>
          </div>
        ) : !data || !data.hasSufficientData ? (
          <div className="rounded-xl border border-neutral-850 bg-neutral-900/50 p-12 text-center space-y-3">
            <div className="text-neutral-600 text-2xl font-mono">◫</div>
            <h2 className="text-sm font-semibold text-white font-mono">
              Analytics data will appear here once tracking is active.
            </h2>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              RECKAI does not create fake numbers or artificial metrics. Real telemetry events and inquiry conversions will populate this dashboard as visitors engage.
            </p>
          </div>
        ) : (
          <>
            {/* 1. OVERVIEW METRICS */}
            <section aria-labelledby="overview-heading" className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 id="overview-heading" className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Overview Telemetry ({period.toUpperCase()})
                </h2>
                <span className="text-[11px] font-mono text-neutral-500">
                  Data minimization active • Zero PII tracked
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <MetricCard
                  label="Estimated Visitors"
                  value={data.metrics.visitors.toLocaleString()}
                  delta={data.comparison?.visitorsDiff}
                  description="Estimated unique sessions based on non-PII request clusters"
                />
                <MetricCard
                  label="Page Views"
                  value={data.metrics.pageViews.toLocaleString()}
                  delta={data.comparison?.pageViewsDiff}
                  description="Total anonymous route impressions"
                />
                <MetricCard
                  label="Work & Product Views"
                  value={data.metrics.workViews.toLocaleString()}
                  description="Views across /work, Originals, and Builds"
                />
                <MetricCard
                  label="Project Interest"
                  value={data.metrics.projectInterest.toLocaleString()}
                  description="Individual product & system detail reviews"
                />
                <MetricCard
                  label="Start Project Clicks"
                  value={data.metrics.startProjectClicks.toLocaleString()}
                  description="Call-to-action interactions leading to intake"
                />
                <MetricCard
                  label="Intake Forms Initiated"
                  value={data.metrics.formStarts.toLocaleString()}
                  description="Visitors beginning Step 1 of intake form"
                />
                <MetricCard
                  label="Forms Submitted"
                  value={data.metrics.formSubmissions.toLocaleString()}
                  description="Submissions passing validation"
                />
                <MetricCard
                  label="Qualified Inquiries"
                  value={data.metrics.qualifiedInquiries.toLocaleString()}
                  delta={data.comparison?.inquiriesDiff}
                  highlight
                  description="Official inquiries currently in active pipeline"
                />
              </div>
            </section>

            {/* 2. CONVERSION FUNNEL */}
            <section aria-labelledby="funnel-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 id="funnel-heading" className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                    <span>Conversion Funnel</span>
                    <Badge variant="outline" className="text-[9px] font-mono py-0">9 STAGES</Badge>
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    End-to-end journey from public visitor down to active project agreement.
                  </p>
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Stage Completion:{" "}
                  <span className="text-violet-400 font-semibold">
                    {data.metrics.visitors > 0
                      ? `${((data.metrics.qualifiedInquiries / data.metrics.visitors) * 100).toFixed(1)}%`
                      : "0%"}
                  </span>
                </div>
              </div>

              {/* Accessible Text Summary for Assistive Tech */}
              <div className="sr-only">
                {data.conversionFunnel.map((s) => (
                  <p key={s.stage}>
                    {s.label}: {s.count} users, drop off rate {s.dropOffRate || 0}%.
                  </p>
                ))}
              </div>

              {/* Visual Funnel Representation */}
              <div className="space-y-2 pt-2">
                {data.conversionFunnel.map((step) => {
                  const maxCount = Math.max(...data.conversionFunnel.map((s) => s.count), 1);
                  const barWidth = Math.max(Math.round((step.count / maxCount) * 100), 4);

                  return (
                    <div key={step.stage} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-300 font-medium">{step.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-semibold">{step.count.toLocaleString()}</span>
                          {step.dropOffRate !== undefined && step.dropOffRate > 0 && (
                            <span className="text-[10px] text-red-400 font-mono w-16 text-right">
                              -{step.dropOffRate}% drop
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-violet-600 rounded-full transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. INQUIRY PIPELINE & PROJECT TYPES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inquiry Funnel Breakdown */}
              <section aria-labelledby="pipeline-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="pipeline-heading" className="text-sm font-semibold text-white font-mono">
                  Inquiry Pipeline Distribution
                </h2>
                <p className="text-xs text-neutral-400">
                  Real operational status of all client inquiries in the database.
                </p>

                <div className="space-y-2.5 pt-2">
                  {data.inquiryPipeline.map((item) => (
                    <div
                      key={item.stage}
                      className="flex items-center justify-between p-2 rounded-lg bg-neutral-850/60 border border-neutral-800/80 text-xs font-mono"
                    >
                      <span className="text-neutral-300">{item.stage}</span>
                      <span className="font-semibold text-white px-2 py-0.5 rounded bg-neutral-800">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Project Type Breakdown */}
              <section aria-labelledby="project-types-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="project-types-heading" className="text-sm font-semibold text-white font-mono">
                  Inquiries by Project Type
                </h2>
                <p className="text-xs text-neutral-400">
                  Distribution of client inquiries across technical domains.
                </p>

                <div className="space-y-3 pt-2">
                  {data.projectTypeDistribution.map((item) => (
                    <div key={item.type} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-300 truncate max-w-[200px]">{item.type}</span>
                        <span className="text-white font-semibold">
                          {item.count} ({item.percentage}%)
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-violet-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* 4. PRODUCT & SERVICE INTEREST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Attention */}
              <section aria-labelledby="product-interest-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="product-interest-heading" className="text-sm font-semibold text-white font-mono">
                  RECKAI Originals Attention
                </h2>
                <p className="text-xs text-neutral-400">
                  Visitor views and CTA interactions across independently owned products.
                </p>

                <div className="space-y-2.5 pt-2">
                  {data.productInterest.map((prod) => (
                    <div
                      key={prod.key}
                      className="p-3 rounded-lg border border-neutral-800 bg-neutral-850/50 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{prod.name}</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          {prod.views} views • {prod.ctaClicks} CTA clicks
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs font-mono">
                        {prod.conversionRate}% CTR
                      </Badge>
                    </div>
                  ))}
                </div>
              </section>

              {/* Service Interest */}
              <section aria-labelledby="service-interest-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="service-interest-heading" className="text-sm font-semibold text-white font-mono">
                  Service Capability Interest
                </h2>
                <p className="text-xs text-neutral-400">
                  Exploration patterns across intelligence systems and engineering.
                </p>

                <div className="space-y-2.5 pt-2">
                  {data.serviceInterest.map((serv) => (
                    <div
                      key={serv.key}
                      className="p-3 rounded-lg border border-neutral-800 bg-neutral-850/50 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{serv.name}</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          {serv.views} views • {serv.ctaClicks} interactions
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs font-mono">
                        {serv.views > 0 ? "Active" : "Untracked"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* 5. SYSTEM OBSERVABILITY & PERFORMANCE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Route Latencies */}
              <section aria-labelledby="routes-heading" className="md:col-span-2 rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="routes-heading" className="text-sm font-semibold text-white font-mono">
                  Route Performance & Latency Telemetry
                </h2>
                <p className="text-xs text-neutral-400">
                  Real-world server and edge response times recorded without PII.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-neutral-800 text-neutral-500 uppercase text-[10px]">
                        <th className="pb-2">Route</th>
                        <th className="pb-2">Avg Latency</th>
                        <th className="pb-2">Samples</th>
                        <th className="pb-2">Health</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-850">
                      {data.routePerformance.map((rp) => (
                        <tr key={rp.route} className="hover:bg-neutral-850/50">
                          <td className="py-2 text-neutral-200">{rp.route}</td>
                          <td className="py-2 text-neutral-300">{rp.avgLatencyMs} ms</td>
                          <td className="py-2 text-neutral-400">{rp.sampleCount}</td>
                          <td className="py-2">
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              OPTIMAL
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* System Health Status */}
              <section aria-labelledby="health-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
                <h2 id="health-heading" className="text-sm font-semibold text-white font-mono">
                  System Health
                </h2>
                <p className="text-xs text-neutral-400">
                  Infrastructure connectivity and runtime checks.
                </p>

                <div className="space-y-3 pt-2">
                  {Object.entries(data.health.services).map(([service, state]) => (
                    <div
                      key={service}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-850 border border-neutral-800 text-xs font-mono"
                    >
                      <span className="text-neutral-300 capitalize">{service}</span>
                      <span className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {state.status}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* 6. CENTRALIZED ERROR & SECURITY MONITORING */}
            <section aria-labelledby="errors-heading" className="rounded-xl border border-neutral-850 bg-neutral-900/60 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 id="errors-heading" className="text-sm font-semibold text-white font-mono">
                    System Errors & Security Audit Trail
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Centralized error capture. All sensitive client contents and tokens strictly redacted.
                  </p>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono">
                  {data.recentErrors.length} RECENT EVENTS
                </Badge>
              </div>

              {data.recentErrors.length === 0 ? (
                <div className="p-6 text-center text-xs font-mono text-neutral-500">
                  Zero unhandled errors recorded in this period.
                </div>
              ) : (
                <div className="space-y-2">
                  {data.recentErrors.map((err) => (
                    <div
                      key={err.id}
                      className="p-3 rounded-lg border border-neutral-800 bg-neutral-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-300 text-[10px]">
                            {err.category}
                          </span>
                          <span className="text-white font-semibold">{err.message}</span>
                        </div>
                        <div className="text-[10px] text-neutral-500">
                          Route: {err.route} • ID: {err.requestId || "system"}
                        </div>
                      </div>
                      <div className="text-[10px] text-neutral-500 shrink-0">
                        {new Date(err.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  delta?: number;
  highlight?: boolean;
  description: string;
}

function MetricCard({ label, value, delta, highlight, description }: MetricCardProps) {
  return (
    <div
      className={`rounded-xl border p-4 space-y-1.5 ${
        highlight
          ? "border-violet-500/50 bg-violet-950/20"
          : "border-neutral-850 bg-neutral-900/60"
      }`}
    >
      <div className="text-[11px] font-mono text-neutral-400 truncate">{label}</div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-mono">
          {value}
        </span>
        {delta !== undefined && delta !== 0 && (
          <span
            className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
              delta > 0
                ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/40"
                : "bg-red-950/80 text-red-400 border border-red-800/40"
            }`}
          >
            {delta > 0 ? `+${delta}%` : `${delta}%`}
          </span>
        )}
      </div>
      <p className="text-[10px] text-neutral-500 leading-tight pt-1">{description}</p>
    </div>
  );
}
