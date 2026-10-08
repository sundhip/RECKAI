"use client";

import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/admin-layout";
import { Badge } from "@/components/ui/badge";

export default function AdminSettingsPage() {
  const [user, setUser] = useState<{ email: string; role: string; name: string } | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/auth/me");
        if (res.ok) {
          const d = await res.json();
          setUser(d.user);
        }
      } catch (err) {
        console.error("Failed to load user info", err);
      }
    }
    load();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-4xl">
        <div className="border-b border-neutral-850 pb-6">
          <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold">
            SYSTEM GOVERNANCE
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Operations Settings & Security
          </h1>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Active Operator Session
          </h3>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-2 border-b border-neutral-850">
              <span className="text-neutral-400">Operator Identity:</span>
              <span className="font-semibold text-white">{user?.name || "RECKAI OPERATOR"}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-neutral-850">
              <span className="text-neutral-400">Authenticated Email:</span>
              <span className="font-mono text-violet-400">{user?.email || "admin@reckai.com"}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-neutral-850">
              <span className="text-neutral-400">Assigned Privilege Tier:</span>
              <Badge variant="violet" className="font-mono text-[10px]">
                {user?.role || "ADMIN"}
              </Badge>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-neutral-400">Session Protocol:</span>
              <span className="text-neutral-300 font-mono">HMAC SHA-256 Signed HttpOnly Cookie</span>
            </div>
          </div>
        </div>

        {/* Role Privileges Matrix */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Access Control Architecture
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-neutral-800 text-[10px] text-neutral-400 uppercase">
                <tr>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Read Inquiries</th>
                  <th className="py-2.5 px-3">Append Notes</th>
                  <th className="py-2.5 px-3">Edit Projects</th>
                  <th className="py-2.5 px-3">Publish Live</th>
                  <th className="py-2.5 px-3">Convert to Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-850 text-neutral-300">
                <tr>
                  <td className="py-3 px-3 font-bold text-violet-400">ADMIN</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-neutral-200">EDITOR</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-neutral-400">VIEWER</td>
                  <td className="py-3 px-3 text-emerald-400">✓ YES</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                  <td className="py-3 px-3 text-neutral-500">✗ NO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Notification Boundaries */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            Infrastructure Safeguards
          </h3>

          <ul className="space-y-2 text-xs text-neutral-400 list-disc pl-5">
            <li>
              <strong className="text-white">Confidentiality Guarantee:</strong> Projects marked as <code className="text-violet-400">PRIVATE</code> are never returned in public sitemaps, search indices, or public API payloads.
            </li>
            <li>
              <strong className="text-white">Internal Notes Isolation:</strong> Operational commentary recorded in project inquiries is completely isolated from all client-facing models.
            </li>
            <li>
              <strong className="text-white">Honeypot Anti-Spam:</strong> Incoming requests with hidden traps are rejected before database persistence.
            </li>
            <li>
              <strong className="text-white">Cryptographic IP Hashing:</strong> IPs are hashed with salted SHA-256 for rate limiting and never stored in plain text.
            </li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
