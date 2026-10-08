import { NextRequest, NextResponse } from "next/server";
import { requireAdminAuth } from "@/lib/auth/admin-guard";
import { adminRepository } from "@/server/repositories/admin.repository";
import { SECURITY_HEADERS } from "@/lib/security/headers";
import { ProjectType, ProjectVisibility } from "@/types/admin";

export async function GET(req: NextRequest) {
  const { errorResponse } = requireAdminAuth(req, "VIEWER");
  if (errorResponse) return errorResponse;

  const url = new URL(req.url);
  const type = (url.searchParams.get("type") as ProjectType) || undefined;
  const visibility = (url.searchParams.get("visibility") as ProjectVisibility) || undefined;
  const search = url.searchParams.get("search") || undefined;

  const projects = await adminRepository.getProjects({ type, visibility, search });

  return NextResponse.json(
    { projects, total: projects.length },
    { status: 200, headers: SECURITY_HEADERS }
  );
}

export async function POST(req: NextRequest) {
  const { session, errorResponse } = requireAdminAuth(req, "EDITOR");
  if (errorResponse) return errorResponse;

  try {
    const body = await req.json();
    const {
      name,
      slug,
      type,
      category,
      shortDescription,
      description,
      problem,
      solution,
      approach,
      aiCapabilities,
      technologies,
      images,
      videos,
      liveUrl,
      githubUrl,
      featured,
      visibility,
      clientName,
      industry,
    } = body;

    if (!name || !slug || !type || !category || !description) {
      return NextResponse.json(
        { error: "Missing required project fields (name, slug, type, category, description)." },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }

    const created = await adminRepository.updateProject(
      slug,
      {
        name,
        slug,
        type: type || "BUILD",
        category,
        shortDescription: shortDescription || description.slice(0, 160),
        description,
        problem: problem || "",
        solution: solution || "",
        approach,
        aiCapabilities: aiCapabilities || [],
        technologies: technologies || [],
        images: images || [],
        videos: videos || [],
        liveUrl,
        githubUrl,
        featured: Boolean(featured),
        visibility: visibility || "DRAFT",
        clientName,
        industry,
      },
      session!.email
    );

    return NextResponse.json(
      { success: true, project: created },
      { status: 201, headers: SECURITY_HEADERS }
    );
  } catch (error) {
    console.error("[POST /api/admin/projects Error]:", error);
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500, headers: SECURITY_HEADERS }
    );
  }
}
