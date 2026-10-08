"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Button } from "@/components/ui/button";
import { ProjectRecord } from "@/types/admin";

export default function AdminContentPage() {
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Form states
  const [announcementActive, setAnnouncementActive] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const [ctaHeading, setCtaHeading] = useState("");
  const [ctaSubtext, setCtaSubtext] = useState("");
  const [featuredSlugs, setFeaturedSlugs] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [settRes, projRes] = await Promise.all([
          fetch("/api/admin/content"),
          fetch("/api/admin/projects"),
        ]);
        if (settRes.ok) {
          const d = await settRes.json();
          const s = d.settings;
          setAnnouncementActive(s.announcementActive);
          setAnnouncementText(s.announcementText || "");
          setCtaHeading(s.ctaHeading);
          setCtaSubtext(s.ctaSubtext);
          setFeaturedSlugs(s.featuredProjectSlugs || []);
        }
        if (projRes.ok) {
          const d = await projRes.json();
          setProjects(d.projects || []);
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          announcementActive,
          announcementText,
          ctaHeading,
          ctaSubtext,
          featuredProjectSlugs: featuredSlugs,
        }),
      });

      const d = await res.json();
      if (res.ok) {
        setMessage("Content configurations published successfully.");
      } else {
        setMessage(d.error || "Save failed.");
      }
    } finally {
      setSaving(false);
    }
  }

  function toggleFeatured(slug: string) {
    if (featuredSlugs.includes(slug)) {
      setFeaturedSlugs(featuredSlugs.filter((s) => s !== slug));
    } else {
      setFeaturedSlugs([...featuredSlugs, slug]);
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-12 text-center text-xs font-mono text-neutral-500">
          Loading content controls...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl">
        <div className="border-b border-neutral-850 pb-6">
          <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
            SITE CONFIGURATION
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Content Controls & Highlights
          </h1>
        </div>

        {message && (
          <div className="rounded-xl border border-violet-800 bg-violet-950/40 p-4 text-xs font-mono text-violet-300">
            {message}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6 text-xs">
          {/* Featured Projects Selection */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Featured Product Highlights
              </h3>
              <p className="text-neutral-400 text-xs">
                Select which products and systems appear on the homepage and top Work showcases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {projects.map((p) => {
                const isFeatured = featuredSlugs.includes(p.slug);
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => toggleFeatured(p.slug)}
                    className={`p-3.5 rounded-xl border text-left transition-colors flex items-center justify-between ${
                      isFeatured
                        ? "border-violet-500 bg-violet-950/40 text-white"
                        : "border-neutral-850 bg-neutral-950/50 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs text-white">{p.name}</div>
                      <div className="text-[10px] font-mono text-neutral-500">
                        {p.type} • {p.visibility}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-violet-400">
                      {isFeatured ? "★ FEATURED" : "+ Feature"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Announcement Banner */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  Global Announcement
                </h3>
                <p className="text-neutral-400 text-xs">
                  Display an urgent notice or system launch alert across the top of all public pages.
                </p>
              </div>
              <label className="flex items-center gap-2 cursor-pointer font-mono text-xs">
                <input
                  type="checkbox"
                  checked={announcementActive}
                  onChange={(e) => setAnnouncementActive(e.target.checked)}
                  className="rounded border-neutral-700 bg-neutral-950 text-violet-600 focus:ring-violet-500"
                />
                <span className={announcementActive ? "text-emerald-400 font-bold" : "text-neutral-500"}>
                  {announcementActive ? "ACTIVE" : "INACTIVE"}
                </span>
              </label>
            </div>

            <div className="space-y-1">
              <label className="text-neutral-400 font-mono">BANNER NOTICE TEXT</label>
              <input
                type="text"
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                placeholder="e.g. Announcing OmniXperience v2.0 Architecture..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
              />
            </div>
          </div>

          {/* CTA Copy */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              Global Intake CTA Copy
            </h3>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-neutral-400 font-mono">HEADING</label>
                <input
                  type="text"
                  value={ctaHeading}
                  onChange={(e) => setCtaHeading(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-neutral-400 font-mono">SUPPORTING COPY</label>
                <textarea
                  rows={2}
                  value={ctaSubtext}
                  onChange={(e) => setCtaSubtext(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" variant="primary" size="md" disabled={saving}>
              {saving ? "Updating Content..." : "Save Content Settings"}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
