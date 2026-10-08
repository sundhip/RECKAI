"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/admin-layout";
import { ProjectRecord, ProjectVisibility } from "@/types/admin";

export default function AdminBuildsPage() {
  const [builds, setBuilds] = useState<ProjectRecord[]>([]);
  const [visibilityFilter, setVisibilityFilter] = useState<ProjectVisibility | "ALL">("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const params = new URLSearchParams({ type: "BUILD" });
        if (visibilityFilter !== "ALL") params.set("visibility", visibilityFilter);

        const res = await fetch(`/api/admin/projects?${params.toString()}`);
        if (res.ok) {
          const d = await res.json();
          setBuilds(d.projects || []);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [visibilityFilter]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/admin/projects" className="text-xs font-mono text-neutral-400">
                ← All Projects
              </Link>
              <span className="text-neutral-700">/</span>
              <span className="text-xs font-mono text-neutral-400 uppercase font-bold">
                RECKAI BUILDS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Partner Builds & Systems
            </h1>
          </div>

          <div className="flex gap-2">
            {(["ALL", "PUBLIC", "PRIVATE", "DRAFT", "ARCHIVED"] as const).map((vis) => (
              <button
                key={vis}
                type="button"
                onClick={() => setVisibilityFilter(vis)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  visibilityFilter === vis
                    ? "bg-violet-600 text-white font-bold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white"
                }`}
              >
                {vis}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-neutral-500">
            Loading builds...
          </div>
        ) : builds.length === 0 ? (
          <div className="p-12 text-center text-xs font-mono text-neutral-500">
            No partner builds found under current visibility filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {builds.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold">
                      RECKAI BUILD
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        b.visibility === "PUBLIC"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800/40"
                          : b.visibility === "PRIVATE"
                          ? "bg-red-950 text-red-400 border border-red-800/40"
                          : "bg-amber-950 text-amber-400 border border-amber-800/40"
                      }`}
                    >
                      {b.visibility === "PRIVATE" ? "🔒 CONFIDENTIAL (PRIVATE)" : b.visibility}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{b.name}</h3>
                  <div className="text-xs font-mono text-neutral-400">
                    Partner: <span className="text-white font-semibold">{b.clientName || "Confidential"}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{b.shortDescription}</p>
                </div>

                <div className="pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">
                    {b.category}
                  </span>
                  <Link
                    href={`/admin/projects/${b.id}`}
                    className="text-xs font-mono text-violet-400 font-bold hover:underline"
                  >
                    Manage Build →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
