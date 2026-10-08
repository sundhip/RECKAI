"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaAsset } from "@/types/admin";

export default function AdminMediaPage() {
  const [media, setMedia] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // New asset form
  const [filename, setFilename] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"IMAGE" | "VIDEO" | "DOCUMENT">("IMAGE");
  const [caption, setCaption] = useState("");
  const [visibility, setVisibility] = useState<"PUBLIC" | "PRIVATE" | "DRAFT">("PUBLIC");

  useEffect(() => {
    async function loadMedia() {
      try {
        const res = await fetch("/api/admin/media");
        if (res.ok) {
          const d = await res.json();
          setMedia(d.media || []);
        }
      } finally {
        setLoading(false);
      }
    }
    loadMedia();
  }, []);

  async function handleAddAsset(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename, url, type, caption, visibility }),
      });
      if (res.ok) {
        const d = await res.json();
        setMedia([d.media, ...media]);
        setShowUploadModal(false);
        setFilename("");
        setUrl("");
        setCaption("");
      }
    } catch (err) {
      console.error("Failed to add media", err);
    }
  }

  async function handleDeleteAsset(id: string) {
    if (!window.confirm("Remove this media record from repository?")) return;
    try {
      const res = await fetch(`/api/admin/media?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setMedia(media.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete media", err);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
              ASSET STORAGE
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Media Library
            </h1>
          </div>
          <Button variant="primary" size="sm" onClick={() => setShowUploadModal(true)}>
            + Register Asset
          </Button>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="max-w-md w-full rounded-3xl border border-neutral-800 bg-neutral-900 p-6 space-y-4">
              <Badge variant="violet" className="font-mono text-xs">
                REGISTER MEDIA ASSET
              </Badge>
              <h3 className="text-xl font-bold text-white">Add Asset to Library</h3>
              <form onSubmit={handleAddAsset} className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-neutral-400 font-mono">FILENAME</label>
                  <input
                    type="text"
                    required
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    placeholder="e.g. system-architecture.png"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-neutral-400 font-mono">ASSET STORAGE URL</label>
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="/images/... or https://..."
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">TYPE</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value as "IMAGE" | "VIDEO" | "DOCUMENT")}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                    >
                      <option value="IMAGE">IMAGE</option>
                      <option value="VIDEO">VIDEO</option>
                      <option value="DOCUMENT">DOCUMENT</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-neutral-400 font-mono">VISIBILITY</label>
                    <select
                      value={visibility}
                      onChange={(e) => setVisibility(e.target.value as "PUBLIC" | "PRIVATE" | "DRAFT")}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                    >
                      <option value="PUBLIC">PUBLIC</option>
                      <option value="PRIVATE">PRIVATE (Confidential)</option>
                      <option value="DRAFT">DRAFT</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-neutral-400 font-mono">CAPTION / DESCRIPTION</label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Editorial caption..."
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-3 text-white"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowUploadModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Persist Asset
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Media Grid */}
        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-neutral-500">
            Loading media items...
          </div>
        ) : media.length === 0 ? (
          <div className="p-12 text-center text-xs text-neutral-500 font-mono">
            No media assets registered.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {media.map((asset) => (
              <div
                key={asset.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-850 text-neutral-300 font-semibold">
                      {asset.type}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                        asset.visibility === "PUBLIC"
                          ? "bg-emerald-950 text-emerald-400"
                          : "bg-red-950 text-red-400"
                      }`}
                    >
                      {asset.visibility}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white truncate font-mono">
                    {asset.filename}
                  </h3>
                  <div className="text-[11px] font-mono text-neutral-500 truncate">
                    {asset.url}
                  </div>
                  {asset.caption && (
                    <p className="text-xs text-neutral-400">{asset.caption}</p>
                  )}
                </div>

                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 text-[10px]">
                    {(asset.sizeBytes / 1024).toFixed(0)} KB
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteAsset(asset.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
