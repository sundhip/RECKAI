"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Button } from "@/components/ui/button";
import { InquiryRecord, InquiryStatus } from "@/types/admin";

export default function AdminInquiryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [inquiry, setInquiry] = useState<InquiryRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [noteContent, setNoteContent] = useState("");
  const [convertStatus, setConvertStatus] = useState<string | null>(null);

  useEffect(() => {
    async function loadInquiry() {
      try {
        const res = await fetch(`/api/admin/inquiries/${id}`);
        if (res.ok) {
          const data = await res.json();
          setInquiry(data.inquiry);
        }
      } catch (err) {
        console.error("Failed to load inquiry", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) loadInquiry();
  }, [id]);

  async function handleStatusChange(newStatus: InquiryStatus) {
    if (!inquiry) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const data = await res.json();
        setInquiry(data.inquiry);
      }
    } finally {
      setUpdating(false);
    }
  }

  async function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!noteContent.trim() || !inquiry) return;

    try {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: noteContent }),
      });
      if (res.ok) {
        const data = await res.json();
        setInquiry({
          ...inquiry,
          notes: [data.note, ...inquiry.notes],
        });
        setNoteContent("");
      }
    } catch (err) {
      console.error("Failed to add note", err);
    }
  }

  async function handleConvertToBuild() {
    if (!inquiry) return;
    const confirm = window.confirm(
      `Convert inquiry from "${inquiry.name}" into an official RECKAI Build project? (Will default to DRAFT visibility)`
    );
    if (!confirm) return;

    setUpdating(true);
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryId: inquiry.id }),
      });

      const data = await res.json();
      if (res.ok) {
        setConvertStatus(`Converted to project: ${data.project.name}`);
        router.push(`/admin/projects/${data.project.id}`);
      } else {
        alert(data.error || "Failed to convert.");
      }
    } finally {
      setUpdating(false);
    }
  }

  const pipelineStages: InquiryStatus[] = [
    "NEW",
    "REVIEWING",
    "CONTACTED",
    "DISCOVERY",
    "PROPOSAL",
    "IN_PROGRESS",
    "COMPLETED",
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-12 text-center font-mono text-xs text-neutral-500">
          Loading inquiry specifications...
        </div>
      </AdminLayout>
    );
  }

  if (!inquiry) {
    return (
      <AdminLayout>
        <div className="space-y-4">
          <Link href="/admin/inquiries" className="text-xs font-mono text-violet-400">
            ← Back to Inquiries
          </Link>
          <div className="p-12 text-center text-sm font-semibold text-neutral-400">
            Inquiry not found.
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-5xl">
        {/* Navigation Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/inquiries"
              className="text-xs font-mono text-neutral-400 hover:text-white"
            >
              ← Inquiries
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-xs font-mono text-violet-400 font-bold">{inquiry.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {inquiry.convertedProjectId ? (
              <Link href={`/admin/projects/${inquiry.convertedProjectId}`}>
                <Button variant="outline" size="sm">
                  View Associated Build ↗
                </Button>
              </Link>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={handleConvertToBuild}
                disabled={updating}
              >
                Convert to Build ↗
              </Button>
            )}
          </div>
        </div>

        {convertStatus && (
          <div className="rounded-xl border border-emerald-800 bg-emerald-950/40 p-4 text-xs font-mono text-emerald-300">
            {convertStatus}
          </div>
        )}

        {/* Visual Pipeline Bar */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-bold">
              PIPELINE PROGRESSION
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              Current: <strong className="text-violet-400 font-bold">{inquiry.status}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-1">
            {pipelineStages.map((stage, idx) => {
              const isCurrent = inquiry.status === stage;
              return (
                <button
                  key={stage}
                  type="button"
                  disabled={updating}
                  onClick={() => handleStatusChange(stage)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isCurrent
                      ? "border-violet-500 bg-violet-600 text-white font-bold shadow-sm"
                      : "border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <div className="text-[9px] font-mono opacity-70">0{idx + 1}</div>
                  <div className="text-[11px] font-mono font-semibold mt-0.5">{stage}</div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              disabled={updating}
              onClick={() => handleStatusChange("REJECTED")}
              className={`text-[11px] font-mono px-3 py-1 rounded transition-colors ${
                inquiry.status === "REJECTED"
                  ? "bg-red-950 text-red-400 border border-red-800 font-bold"
                  : "text-neutral-500 hover:text-red-400"
              }`}
            >
              Mark as Rejected
            </button>
          </div>
        </div>

        {/* Specifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Details */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
              CLIENT SPECIFICATION
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Contact:</span>
                <span className="font-semibold text-white">{inquiry.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Email:</span>
                <a
                  href={`mailto:${inquiry.email}`}
                  className="font-mono text-violet-400 hover:underline"
                >
                  {inquiry.email}
                </a>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Company:</span>
                <span className="text-neutral-200">{inquiry.company || "Not provided"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Role:</span>
                <span className="text-neutral-200">{inquiry.role || "Not provided"}</span>
              </div>
            </div>
          </div>

          {/* Project Scoping Details */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
              ENGAGEMENT PARAMETERS
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Project Type:</span>
                <span className="font-semibold text-white font-mono">{inquiry.projectType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Current Stage:</span>
                <span className="text-neutral-200">{inquiry.stage || "Discovery"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-850">
                <span className="text-neutral-500">Timeline:</span>
                <span className="text-neutral-200">{inquiry.timeline || "Not specified"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Budget Range:</span>
                <span className="text-emerald-400 font-mono font-semibold">
                  {inquiry.budget || "Unspecified"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Description & Project Brief */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="text-[10px] font-mono uppercase text-violet-400 font-bold block">
              THE RECKONED PROBLEM
            </span>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap font-sans">
              {inquiry.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-3">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">
              PROJECT SPECIFICATION & IDEA
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap font-sans">
              {inquiry.description}
            </p>
          </div>

          {inquiry.aiRequirements && (
            <div className="rounded-2xl border border-violet-900/40 bg-violet-950/20 p-6 space-y-3">
              <span className="text-[10px] font-mono uppercase text-violet-400 font-bold block">
                MACHINE INTELLIGENCE & AI REQUIREMENTS
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap font-sans">
                {inquiry.aiRequirements}
              </p>
            </div>
          )}
        </div>

        {/* Confidential Internal Notes (Isolated from Public) */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Internal Operational Notes
              </h3>
              <p className="text-[11px] text-neutral-500">
                Confidential team notes. Never exposed publicly or returned in client-side responses.
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              {inquiry.notes.length} {inquiry.notes.length === 1 ? "note" : "notes"}
            </span>
          </div>

          {/* Add Note Form */}
          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              rows={3}
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Record technical considerations, discovery call takeaways, or architectural decisions..."
              className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
            <div className="flex justify-end">
              <Button type="submit" variant="outline" size="sm" disabled={!noteContent.trim()}>
                Append Internal Note
              </Button>
            </div>
          </form>

          {/* Notes History */}
          <div className="space-y-3 pt-2">
            {inquiry.notes.length === 0 ? (
              <p className="text-xs text-neutral-600 text-center py-4 font-mono">
                No internal notes recorded yet.
              </p>
            ) : (
              inquiry.notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-semibold text-violet-400">{note.authorName}</span>
                    <span className="text-neutral-500">
                      {new Date(note.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 whitespace-pre-wrap">{note.content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
