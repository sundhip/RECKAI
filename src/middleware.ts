import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/api/admin(.*)",
]);

const isPublicAdminRoute = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/login(.*)",
]);

export default clerkMiddleware((auth, req) => {
  // If Clerk secret is not configured yet (local mock/testing mode), pass through to server guards
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.next();
  }

  // Protect internal admin routes and administrative APIs while allowing public admin sign-in
  if (isProtectedRoute(req) && !isPublicAdminRoute(req)) {
    auth().protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
