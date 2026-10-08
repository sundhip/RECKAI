"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/sign-in");
  }, [router]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-mono text-xs">
      <div className="space-y-3 text-center">
        <div className="h-4 w-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-neutral-500 uppercase tracking-widest">
          REDIRECTING TO RECKAI CLERK AUTHENTICATION...
        </p>
      </div>
    </div>
  );
}
