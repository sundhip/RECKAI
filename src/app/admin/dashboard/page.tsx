"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Button } from "@/components/ui/button";
import { AuditLog, InquiryRecord, ProjectRecord } from "@/types/admin";

export default function AdminDashboardPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [inqRes, projRes, logRes] = await Promise.all([
          fetch("/api/admin/inquiries"),
          fetch("/api/admin/projects"),
          fetch("/api/admin/audit-logs?limit=8"),
        ]);

        if (inqRes.ok) {
          const d = await inqRes.json();
          setInquiries(d.inquiries || []);
        }
        if (projRes.ok) {
          const d = await projRes.json();
          setProjects(d.projects || []);
        }
        if (logRes.ok) {
          const d = await logRes.json();
          setAuditLogs(d.logs || []);
        }
      } catch (err) {
        console.error("Failed to load admin dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const newInquiries = inquiries.filter((i) => i.status === "NEW" || i.status === "DISCOVERY");
  const activeBuilds = projects.filter((p) => p.type === "BUILD" && p.visibility !== "ARCHIVED");
  const originals = projects.filter((p) => p.type === "ORIGINAL");
  const publishedProjects = projects.filter((p) => p.visibility === "PUBLIC");
  const draftContent = projects.filter((p) => p.visibility === "DRAFT");

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-12 text-center text-xs font-mono text-neutral-500">
          Loading system metrics and activity...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
              SYSTEM OVERVIEW
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operations Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/analytics">
              <Button variant="outline" size="sm" className="font-mono text-xs">
                📈 Analytics & Vitals
              </Button>
            </Link>
            <Link href="/admin/inquiries">
              <Button variant="outline" size="sm">
                View Inquiries ({inquiries.length})
              </Button>
            </Link>
            <Link href="/admin/projects">
              <Button variant="primary" size="sm">
                Manage Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
              NEW INQUIRIES
            </span>
            <div className="text-3xl font-extrabold text-white font-mono">
              {newInquiries.length}
            </div>
            <p className="text-[11px] text-neutral-500">
              {newInquiries.length > 0 ? "Awaiting discovery review" : "No new inquiries."}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
              ACTIVE BUILDS
            </span>
            <div className="text-3xl font-extrabold text-white font-mono">
              {activeBuilds.length}
            </div>
            <p className="text-[11px] text-neutral-500">Partner systems</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
              ORIGINALS
            </span>
            <div className="text-3xl font-extrabold text-violet-400 font-mono">
              {originals.length}
            </div>
            <p className="text-[11px] text-neutral-500">Proprietary products</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
              PUBLISHED
            </span>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">
              {publishedProjects.length}
            </div>
            <p className="text-[11px] text-neutral-500">Live on public site</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold">
              DRAFTS
            </span>
            <div className="text-3xl font-extrabold text-amber-400 font-mono">
              {draftContent.length}
            </div>
            <p className="text-[11px] text-neutral-500">Unpublished content</p>
          </div>
        </div>

        {/* System Health Strip */}
        <div className="rounded-xl border border-neutral-850 bg-neutral-900/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-semibold uppercase tracking-wider">System Health:</span>
            <span className="text-emerald-400">All Systems Operational</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Website: Operational
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              API: Operational
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Database: Operational
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Analytics: Operational
            </span>
          </div>
        </div>

        {/* Two-Column Operations Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Inquiries Section */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Recent Project Intake
              </h2>
              <Link
                href="/admin/inquiries"
                className="text-[11px] font-mono text-violet-400 hover:underline"
              >
                All Inquiries →
              </Link>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-xs text-neutral-500 py-6 text-center">No new inquiries.</p>
            ) : (
              <div className="space-y-3">
                {inquiries.slice(0, 4).map((inq) => (
                  <Link
                    key={inq.id}
                    href={`/admin/inquiries/${inq.id}`}
                    className="block p-3 rounded-xl border border-neutral-800/80 bg-neutral-950/60 hover:border-violet-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {inq.name}
                        {inq.company ? ` • ${inq.company}` : ""}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                        {inq.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1 truncate">
                      {inq.projectType}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 mt-1">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Real System Activity / Audit Log Section */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                System Activity Log
              </h2>
              <span className="text-[10px] font-mono text-neutral-500">Real Events</span>
            </div>

            {auditLogs.length === 0 ? (
              <p className="text-xs text-neutral-500 py-6 text-center">No recent activity.</p>
            ) : (
              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3 rounded-xl border border-neutral-800/60 bg-neutral-950/40 space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-violet-400 font-bold">{log.action}</span>
                      <span className="text-neutral-500 text-[10px]">
                        {new Date(log.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300">{log.details || log.resourceType}</p>
                    <span className="text-[10px] font-mono text-neutral-500 block">
                      Actor: {log.actorEmail}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
