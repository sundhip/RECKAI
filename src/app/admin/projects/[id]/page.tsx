"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectRecord, ProjectVisibility } from "@/types/admin";

export default function AdminProjectEditorPage() {
  const params = useParams();
  const id = params?.id as string;

  const [project, setProject] = useState<ProjectRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [showPublishModal, setShowPublishModal] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"ORIGINAL" | "BUILD">("BUILD");
  const [visibility, setVisibility] = useState<ProjectVisibility>("DRAFT");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [clientName, setClientName] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [aiCapabilities, setAiCapabilities] = useState("");
  const [technologies, setTechnologies] = useState("");

  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch(`/api/admin/projects/${id}`);
        if (res.ok) {
          const d = await res.json();
          const p: ProjectRecord = d.project;
          setProject(p);
          setName(p.name);
          setSlug(p.slug);
          setCategory(p.category);
          setType(p.type);
          setVisibility(p.visibility);
          setShortDescription(p.shortDescription);
          setDescription(p.description);
          setProblem(p.problem);
          setSolution(p.solution);
          setClientName(p.clientName || "");
          setLiveUrl(p.liveUrl || "");
          setGithubUrl(p.githubUrl || "");
          setAiCapabilities(p.aiCapabilities.join(", "));
          setTechnologies(p.technologies.join(", "));
        }
      } finally {
        setLoading(false);
      }
    }
    if (id) loadProject();
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          category,
          type,
          visibility,
          shortDescription,
          description,
          problem,
          solution,
          clientName: clientName || undefined,
          liveUrl: liveUrl || undefined,
          githubUrl: githubUrl || undefined,
          aiCapabilities: aiCapabilities
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          technologies: technologies
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });

      const d = await res.json();
      if (res.ok) {
        setProject(d.project);
        setMessage("Project configurations persisted successfully.");
      } else {
        setMessage(d.error || "Failed to save project.");
      }
    } catch {
      setMessage("Error updating project.");
    } finally {
      setSaving(false);
    }
  }

  async function handlePublishAction(action: "publish" | "unpublish" | "archive") {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, targetVisibility: "DRAFT" }),
      });
      const d = await res.json();
      if (res.ok) {
        setProject(d.project);
        setVisibility(d.project.visibility);
        setShowPublishModal(false);
        setMessage(`Action '${action}' executed successfully.`);
      } else {
        alert(d.error || "Action failed.");
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-12 text-center text-xs font-mono text-neutral-500">
          Loading project editor...
        </div>
      </AdminLayout>
    );
  }

  if (!project) {
    return (
      <AdminLayout>
        <div className="p-12 text-center space-y-3">
          <p className="text-sm font-semibold text-white">Project not found.</p>
          <Link href="/admin/projects" className="text-xs font-mono text-violet-400">
            ← Back to Projects
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl">
        {/* Top Breadcrumb & Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-4">
          <div className="flex items-center gap-3">
            <Link href="/admin/projects" className="text-xs font-mono text-neutral-400 hover:text-white">
              ← Projects
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-xs font-mono text-white font-bold">{project.name}</span>
            <span
              className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                visibility === "PUBLIC"
                  ? "bg-emerald-950 text-emerald-400 border border-emerald-800/40"
                  : visibility === "PRIVATE"
                  ? "bg-red-950 text-red-400 border border-red-800/40"
                  : "bg-amber-950 text-amber-400 border border-amber-800/40"
              }`}
            >
              {visibility}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {visibility === "PUBLIC" ? (
              <>
                <Link
                  href={
                    type === "ORIGINAL"
                      ? `/work/originals/${project.slug}`
                      : `/work/builds/${project.slug}`
                  }
                  target="_blank"
                >
                  <Button variant="outline" size="sm">
                    View Live Page ↗
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePublishAction("unpublish")}
                  disabled={saving}
                >
                  Unpublish to Draft
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowPublishModal(true)}
                disabled={saving}
              >
                Publish Project ↗
              </Button>
            )}

            <button
              type="button"
              onClick={() => handlePublishAction("archive")}
              className="text-xs font-mono text-red-400 hover:text-red-300 px-3 py-1.5"
            >
              Archive
            </button>
          </div>
        </div>

        {message && (
          <div className="rounded-xl border border-violet-800 bg-violet-950/40 p-4 text-xs font-mono text-violet-300">
            {message}
          </div>
        )}

        {/* Publish Confirmation Modal */}
        {showPublishModal && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="max-w-md w-full rounded-3xl border border-neutral-800 bg-neutral-900 p-6 space-y-4">
              <Badge variant="violet" className="font-mono text-xs">
                CONFIRM PUBLISHING
              </Badge>
              <h3 className="text-xl font-bold text-white">Publish this project?</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Making this project PUBLIC will immediately expose it on the RECKAI public website, sitemap, and search indexing pipelines.
              </p>
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3 space-y-1 text-xs font-mono">
                <div>Project: <strong className="text-white">{name}</strong></div>
                <div>Slug: <strong className="text-violet-400">/{slug}</strong></div>
                <div>Type: <strong className="text-white">{type}</strong></div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" size="sm" onClick={() => setShowPublishModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handlePublishAction("publish")}
                  disabled={saving}
                >
                  Confirm & Publish Live
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Editor Form */}
        <form onSubmit={handleSave} className="space-y-6 text-xs">
          {/* Card 1: Core Metadata */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              1. Basic Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">PROJECT NAME</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white focus:border-violet-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">URL SLUG</label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono focus:border-violet-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">TYPE</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as "ORIGINAL" | "BUILD")}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                >
                  <option value="ORIGINAL">RECKAI ORIGINAL</option>
                  <option value="BUILD">RECKAI BUILD</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">VISIBILITY</label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value as ProjectVisibility)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                >
                  <option value="DRAFT">DRAFT (Hidden)</option>
                  <option value="PUBLIC">PUBLIC (Live)</option>
                  <option value="PRIVATE">PRIVATE (Confidential)</option>
                  <option value="ARCHIVED">ARCHIVED</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">CATEGORY</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g. Intelligent Ecosystem"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">CLIENT / PARTNER NAME</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Leave empty for RECKAI Originals"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Descriptions & Formulation */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              2. Product Narrative & Architecture
            </h3>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">SHORT DESCRIPTION (HERO & CARDS)</label>
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">THE PROBLEM IT RECKONS WITH</label>
                <textarea
                  rows={3}
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">SOLUTION & ARCHITECTURE</label>
                <textarea
                  rows={3}
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">COMPLETE PRODUCT NARRATIVE</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Intelligence & Tech Stack */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              3. Applied Intelligence & Engineering
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">AI CAPABILITIES (COMMA SEPARATED)</label>
                <input
                  type="text"
                  value={aiCapabilities}
                  onChange={(e) => setAiCapabilities(e.target.value)}
                  placeholder="Embeddings, Real-time OCR, Anomaly Scoring"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">TECHNOLOGY STACK (COMMA SEPARATED)</label>
                <input
                  type="text"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="TypeScript, Next.js, PostgreSQL, PyTorch"
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">LIVE APPLICATION URL</label>
                <input
                  type="url"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 font-mono">GITHUB CODE REPOSITORY URL</label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-2">
            <Link href="/admin/projects">
              <Button type="button" variant="outline" size="md">
                Cancel
              </Button>
            </Link>
            <Button type="submit" variant="primary" size="md" disabled={saving}>
              {saving ? "Saving Changes..." : "Save Project Configuration"}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
