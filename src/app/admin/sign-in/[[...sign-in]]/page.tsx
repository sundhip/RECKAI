"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AdminSignInPage() {
  const hasClerkKeys = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

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
              INTERNAL
            </Badge>
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-white font-mono">
            RECKAI Admin
          </h1>
          <p className="text-xs text-neutral-400">
            Sign in to manage RECKAI. Authorized internal operators only.
          </p>
        </div>

        {/* Clerk Sign-In Component or Dev Mock Guidance */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-2xl backdrop-blur">
          {hasClerkKeys ? (
            <SignIn
              routing="path"
              path="/admin/sign-in"
              fallbackRedirectUrl="/admin/dashboard"
              signUpUrl={undefined} // Disables public self-registration link
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
                    "bg-neutral-950 border-neutral-800 text-white font-mono text-xs focus:border-violet-500 focus:ring-violet-500",
                  formFieldLabel: "text-neutral-400 font-mono text-xs",
                  footerAction: "hidden", // Hide public sign-up link
                },
              }}
            />
          ) : (
            <div className="space-y-4 text-center font-mono text-xs">
              <div className="p-4 rounded-xl border border-violet-900/40 bg-violet-950/20 text-neutral-300 space-y-2">
                <div className="text-violet-400 font-semibold uppercase tracking-wider">
                  CLERK IDENTITY READY
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  Clerk is configured as the authoritative identity provider. In local development before setting live keys, you can access the dashboard directly.
                </p>
              </div>
              <Link
                href="/admin/dashboard"
                className="block w-full py-2.5 px-4 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
              >
                Enter Admin Operations →
              </Link>
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
