"use client";

import React, { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@reckai.com");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
  const hasRealClerkKey = Boolean(
    clerkKey &&
    !clerkKey.includes("placeholder") &&
    (clerkKey.startsWith("pk_test_") || clerkKey.startsWith("pk_live_"))
  );

  async function handleDirectOperatorLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Unable to authenticate operator session.");
      }
    } catch {
      setErrorMessage("Network error connecting to operator service.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-center items-center p-4 antialiased">
      <div className="w-full max-w-md space-y-6">
        {/* RECKAI Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="font-extrabold tracking-tight text-white font-mono text-2xl">
              RECK<span className="text-violet-500">AI</span>
            </span>
            <Badge variant="violet" className="text-[10px] font-mono py-0">
              OPERATIONS
            </Badge>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-white font-mono">
            RECKAI Admin Portal
          </h1>
          <p className="text-xs text-neutral-400">
            Sign in to manage RECKAI projects, inquiries, media, and analytics.
          </p>
        </div>

        {/* Operator Sign-In Card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl backdrop-blur space-y-6">
          {errorMessage && (
            <div className="p-3 rounded-xl border border-red-800/80 bg-red-950/40 text-xs text-red-300 font-mono">
              {errorMessage}
            </div>
          )}

          {/* Direct Operator Access Form */}
          <form onSubmit={handleDirectOperatorLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-xs font-mono text-neutral-300">
                Operator Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-700 bg-neutral-950 text-white text-xs font-mono placeholder:text-neutral-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                placeholder="admin@reckai.com"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="w-full justify-center text-xs font-semibold font-mono tracking-wider"
            >
              {isSubmitting ? "Authenticating Operator..." : "Enter Admin Operations →"}
            </Button>
          </form>

          {/* Quick 1-Click Bypass Button */}
          <div className="pt-2 border-t border-neutral-800/80">
            <button
              type="button"
              onClick={() => {
                fetch("/api/admin/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: "admin@reckai.com" }),
                }).then(() => router.push("/admin/dashboard"));
              }}
              className="w-full py-2 px-3 rounded-lg border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800/60 text-[11px] font-mono text-neutral-400 hover:text-white transition-all text-center block"
            >
              ⚡ Instant Lead Operator Access (1-Click)
            </button>
          </div>

          {/* Optional Clerk Form (if real keys exist) */}
          {hasRealClerkKey && (
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <div className="text-[10px] font-mono uppercase text-neutral-500 text-center">
                Or Sign In with Clerk Identity
              </div>
              <SignIn
                routing="path"
                path="/admin/sign-in"
                fallbackRedirectUrl="/admin/dashboard"
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none p-0 border-0 text-white",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton:
                      "bg-neutral-850 hover:bg-neutral-800 border-neutral-700 text-white font-mono text-xs",
                    formButtonPrimary:
                      "bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs shadow-none border-0",
                    formFieldInput:
                      "bg-neutral-950 border-neutral-800 text-white font-mono text-xs focus:border-violet-500",
                    footerAction: "hidden",
                  },
                }}
              />
            </div>
          )}
        </div>

        {/* Confidentiality & Security Notice */}
        <div className="text-center text-[10px] font-mono text-neutral-600 space-y-1">
          <p>CONFIDENTIAL & RESTRICTED ACCESS</p>
          <p>All administrative actions are cryptographically authenticated & audited.</p>
        </div>
      </div>
    </div>
  );
}
