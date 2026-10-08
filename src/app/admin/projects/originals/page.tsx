"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Badge } from "@/components/ui/badge";
import { ProjectRecord } from "@/types/admin";

export default function AdminOriginalsPage() {
  const [originals, setOriginals] = useState<ProjectRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/projects?type=ORIGINAL");
        if (res.ok) {
          const d = await res.json();
          setOriginals(d.projects || []);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

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
              <span className="text-xs font-mono text-violet-400 uppercase font-bold">
                RECKAI ORIGINALS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Proprietary Products
            </h1>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            {originals.length} products defined
          </span>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-neutral-500">
            Loading originals...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {originals.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="violet" className="text-[10px] font-mono">
                      ORIGINAL
                    </Badge>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        p.visibility === "PUBLIC"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800/40"
                          : "bg-amber-950 text-amber-400 border border-amber-800/40"
                      }`}
                    >
                      {p.visibility}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <div className="text-xs font-mono text-neutral-500">/{p.slug}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{p.shortDescription}</p>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {p.aiCapabilities.slice(0, 3).map((ai) => (
                      <span
                        key={ai}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-850 text-neutral-300"
                      >
                        {ai}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <Link
                    href={`/work/originals/${p.slug}`}
                    target="_blank"
                    className="text-xs font-mono text-neutral-400 hover:text-white"
                  >
                    Public View ↗
                  </Link>
                  <Link
                    href={`/admin/projects/${p.id}`}
                    className="text-xs font-mono text-violet-400 font-bold hover:underline"
                  >
                    Configure Project →
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
