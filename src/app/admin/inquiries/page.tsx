"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/admin-layout";
import { InquiryRecord, InquiryStatus } from "@/types/admin";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInquiries() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedStatus !== "ALL") params.set("status", selectedStatus);
        if (search) params.set("search", search);

        const res = await fetch(`/api/admin/inquiries?${params.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setInquiries(data.inquiries || []);
        }
      } catch (err) {
        console.error("Failed to load inquiries", err);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchInquiries();
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedStatus, search]);

  const statuses: (InquiryStatus | "ALL")[] = [
    "ALL",
    "NEW",
    "REVIEWING",
    "CONTACTED",
    "DISCOVERY",
    "PROPOSAL",
    "IN_PROGRESS",
    "COMPLETED",
    "REJECTED",
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
              CUSTOMER PIPELINE
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Project Inquiries
            </h1>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Total records: <span className="text-white font-bold">{inquiries.length}</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by client name, email, company, or project type..."
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {statuses.map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 ${
                  selectedStatus === st
                    ? "bg-violet-600 text-white font-bold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-xs font-mono text-neutral-500">
              Loading inquiries...
            </div>
          ) : inquiries.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <p className="text-sm font-semibold text-white">No inquiries match the current filter.</p>
              <p className="text-xs text-neutral-500">
                Project inquiries submitted via /start-project will appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-neutral-800 bg-neutral-900/70 font-mono text-neutral-400 uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-5">Client Name</th>
                    <th className="py-3 px-5">Organization</th>
                    <th className="py-3 px-5">Project Scope</th>
                    <th className="py-3 px-5">Pipeline Status</th>
                    <th className="py-3 px-5">Received</th>
                    <th className="py-3 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-850">
                  {inquiries.map((inq) => (
                    <tr
                      key={inq.id}
                      className="hover:bg-neutral-850/40 transition-colors group cursor-pointer"
                    >
                      <td className="py-4 px-5 font-medium text-white">
                        <Link href={`/admin/inquiries/${inq.id}`} className="block">
                          {inq.name}
                          <span className="block text-[11px] font-mono text-neutral-500">
                            {inq.email}
                          </span>
                        </Link>
                      </td>
                      <td className="py-4 px-5 text-neutral-300">
                        {inq.company || <span className="text-neutral-600 font-mono">—</span>}
                      </td>
                      <td className="py-4 px-5 text-neutral-300">
                        <span className="font-mono text-xs">{inq.projectType}</span>
                        {(inq.hasAiReqs || inq.aiRequirements) && (
                          <span className="ml-2 inline-block text-[9px] font-mono px-1.5 py-0.2 rounded bg-violet-950 text-violet-400 border border-violet-800/40">
                            AI
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                            inq.status === "NEW"
                              ? "bg-violet-900/60 text-violet-300 border border-violet-700/50"
                              : inq.status === "DISCOVERY" || inq.status === "IN_PROGRESS"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800/50"
                              : inq.status === "REJECTED"
                              ? "bg-red-950 text-red-400 border border-red-800/50"
                              : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-mono text-neutral-500 text-[11px]">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-5 text-right font-mono text-xs">
                        <Link
                          href={`/admin/inquiries/${inq.id}`}
                          className="text-violet-400 hover:text-white hover:underline font-semibold"
                        >
                          Inspect →
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
