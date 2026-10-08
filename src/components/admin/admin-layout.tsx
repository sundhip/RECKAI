"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{
    email: string;
    role: string;
    name: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth/me");
        if (!res.ok) {
          router.push("/admin/sign-in");
          return;
        }
        const data = await res.json();
        setCurrentUser(data.user);
      } catch {
        router.push("/admin/sign-in");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  async function handleLogout() {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
    } finally {
      router.push("/admin/sign-in");
    }
  }

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: "❖" },
    { label: "Inquiries", href: "/admin/inquiries", icon: "✉" },
    { label: "Analytics", href: "/admin/analytics", icon: "📈" },
    {
      label: "Projects",
      href: "/admin/projects",
      icon: "◫",
      subItems: [
        { label: "Originals", href: "/admin/projects/originals" },
        { label: "Builds", href: "/admin/projects/builds" },
      ],
    },
    { label: "Media Library", href: "/admin/media", icon: "▤" },
    { label: "Content Controls", href: "/admin/content", icon: "⚙" },
    { label: "Settings", href: "/admin/settings", icon: "⌾" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-mono text-xs">
        <div className="space-y-3 text-center">
          <div className="h-4 w-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-neutral-500 uppercase tracking-widest">
            AUTHENTICATING RECKAI OPS...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col md:flex-row antialiased">
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-850 bg-neutral-900/90 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-tight text-white font-mono text-sm">
            RECK<span className="text-violet-500">AI</span>
          </span>
          <Badge variant="violet" className="text-[10px] font-mono py-0">
            OPS
          </Badge>
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-xs font-mono text-neutral-400 border border-neutral-800 rounded px-2 py-1"
        >
          {mobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`w-full md:w-64 border-r border-neutral-850 bg-neutral-925 flex flex-col justify-between shrink-0 p-5 z-40 ${
          mobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="space-y-6">
          {/* Logo & Environment Badge */}
          <div className="hidden md:flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white font-mono text-base">
                RECK<span className="text-violet-500">AI</span>
              </span>
              <Badge variant="violet" className="text-[9px] font-mono tracking-widest py-0">
                OPS
              </Badge>
            </Link>
            <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              LIVE
            </span>
          </div>

          {/* User Status Card */}
          {currentUser && (
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white truncate max-w-[130px]">
                  {currentUser.name}
                </span>
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-violet-950 text-violet-400 border border-violet-800/40">
                  {currentUser.role}
                </span>
              </div>
              <div className="text-[10px] font-mono text-neutral-500 truncate">
                {currentUser.email}
              </div>
            </div>
          )}

          {/* Nav Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

              return (
                <div key={item.label} className="space-y-0.5">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-violet-600 text-white font-semibold"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-850"
                    }`}
                  >
                    <span className="font-mono text-xs opacity-75">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>

                  {/* Sub items */}
                  {item.subItems && (
                    <div className="pl-6 space-y-0.5 pt-0.5">
                      {item.subItems.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                              isSubActive
                                ? "text-violet-400 font-bold"
                                : "text-neutral-500 hover:text-neutral-300"
                            }`}
                          >
                            ↳ {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-neutral-850 space-y-2">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-850 transition-colors"
          >
            <span>View Website</span>
            <span>↗</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-red-400 hover:text-red-300 hover:bg-red-950/30 transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 max-w-7xl overflow-x-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
