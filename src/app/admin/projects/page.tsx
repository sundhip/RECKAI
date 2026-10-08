"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Button } from "@/components/ui/button";
import { ProjectRecord, ProjectType, ProjectVisibility } from "@/types/admin";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [selectedType, setSelectedType] = useState<ProjectType | "ALL">("ALL");
  const [selectedVisibility, setSelectedVisibility] = useState<ProjectVisibility | "ALL">("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedType !== "ALL") params.set("type", selectedType);
        if (selectedVisibility !== "ALL") params.set("visibility", selectedVisibility);
        if (search) params.set("search", search);

        const res = await fetch(`/api/admin/projects?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data.projects || []);
        }
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    }
    const t = setTimeout(loadProjects, 150);
    return () => clearTimeout(t);
  }, [selectedType, selectedVisibility, search]);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
              PORTFOLIO & ENGINE
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Project Management
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/projects/originals">
              <Button variant="outline" size="sm">
                Originals ({projects.filter((p) => p.type === "ORIGINAL").length})
              </Button>
            </Link>
            <Link href="/admin/projects/builds">
              <Button variant="outline" size="sm">
                Builds ({projects.filter((p) => p.type === "BUILD").length})
              </Button>
            </Link>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, slug, or category..."
            className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          />

          <div className="flex gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as ProjectType | "ALL")}
              className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 font-mono"
            >
              <option value="ALL">All Types</option>
              <option value="ORIGINAL">Originals Only</option>
              <option value="BUILD">Builds Only</option>
            </select>

            <select
              value={selectedVisibility}
              onChange={(e) => setSelectedVisibility(e.target.value as ProjectVisibility | "ALL")}
              className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-neutral-300 font-mono"
            >
              <option value="ALL">All Visibilities</option>
              <option value="PUBLIC">Public</option>
              <option value="DRAFT">Draft</option>
              <option value="PRIVATE">Private (Confidential)</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>
        </div>

        {/* Projects Table */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-xs font-mono text-neutral-500">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center text-xs text-neutral-500 font-mono">
              No projects found matching criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-neutral-800 bg-neutral-900/70 font-mono text-neutral-400 uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-5">Project Name</th>
                    <th className="py-3 px-5">Type</th>
                    <th className="py-3 px-5">Visibility</th>
                    <th className="py-3 px-5">Category</th>
                    <th className="py-3 px-5">Client / Partner</th>
                    <th className="py-3 px-5">Updated</th>
                    <th className="py-3 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-850">
                  {projects.map((p) => (
                    <tr key={p.id} className="hover:bg-neutral-850/40 transition-colors">
                      <td className="py-4 px-5">
                        <Link href={`/admin/projects/${p.id}`} className="block">
                          <span className="font-bold text-white hover:text-violet-400 transition-colors">
                            {p.name}
                          </span>
                          <span className="block text-[11px] font-mono text-neutral-500">
                            /{p.slug}
                          </span>
                        </Link>
                      </td>
                      <td className="py-4 px-5 font-mono text-xs">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            p.type === "ORIGINAL"
                              ? "bg-violet-950 text-violet-400 border border-violet-800/40"
                              : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          {p.type}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-mono text-xs">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            p.visibility === "PUBLIC"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800/40"
                              : p.visibility === "PRIVATE"
                              ? "bg-red-950 text-red-400 border border-red-800/40"
                              : p.visibility === "DRAFT"
                              ? "bg-amber-950 text-amber-400 border border-amber-800/40"
                              : "bg-neutral-850 text-neutral-500"
                          }`}
                        >
                          {p.visibility}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-neutral-400 font-mono text-[11px]">
                        {p.category}
                      </td>
                      <td className="py-4 px-5 text-neutral-300 text-xs">
                        {p.clientName || (
                          <span className="text-neutral-600 font-mono">RECKAI Internal</span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-neutral-500 font-mono text-[11px]">
                        {new Date(p.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-5 text-right font-mono">
                        <Link
                          href={`/admin/projects/${p.id}`}
                          className="text-violet-400 hover:text-white hover:underline text-xs"
                        >
                          Edit →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
