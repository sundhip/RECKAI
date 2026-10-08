import {
  InquiryRecord,
  InquiryStatus,
  ProjectRecord,
  ProjectType,
  ProjectVisibility,
  MediaAsset,
  AuditLog,
  ContentSettings,
  InternalNote,
} from "@/types/admin";
import { RECKAI_ORIGINALS } from "@/data/products/originals";

class AdminRepository {
  private inquiries: InquiryRecord[] = [];
  private projects: ProjectRecord[] = [];
  private media: MediaAsset[] = [];
  private auditLogs: AuditLog[] = [];
  private contentSettings: ContentSettings = {
    featuredProjectSlugs: ["omnixperience", "evolveaura", "organxcell", "finance"],
    announcementActive: false,
    announcementText: "",
    ctaHeading: "Have something worth building?",
    ctaSubtext: "Tell us what you're thinking. Whether it's an ambitious startup or an intelligent enterprise system.",
  };

  constructor() {
    this.seedInitialData();
  }

  private seedInitialData() {
    // 1. Seed Originals from product data
    RECKAI_ORIGINALS.forEach((prod) => {
      this.projects.push({
        id: prod.id,
        slug: prod.slug,
        name: prod.name,
        type: "ORIGINAL",
        category: prod.category,
        shortDescription: prod.shortDescription,
        description: prod.description,
        problem: prod.problem,
        solution: prod.solution,
        approach: prod.approach,
        aiCapabilities: prod.aiCapabilities || [],
        technologies: prod.technologies || [],
        images: prod.images || [],
        videos: prod.videos || [],
        liveUrl: prod.liveUrl,
        githubUrl: prod.githubUrl,
        featured: prod.featured || true,
        visibility: "PUBLIC",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
        updatedAt: new Date().toISOString(),
      });
    });

    // 2. Seed Initial Demonstrative Partner Builds
    this.projects.push(
      {
        id: "build-ambient-os",
        slug: "ambient-intelligence-workplace",
        name: "Ambient Intelligence Substrate",
        type: "BUILD",
        category: "Enterprise System",
        shortDescription: "Autonomous event-driven coordination layer for distributed operations.",
        description: "An internal intelligence fabric synthesizing calendar streams, document context, and operational queues without continuous manual polling.",
        problem: "Executives spend 30% of working hours coordinating asynchronous dependencies across disparate teams.",
        solution: "A local-first ambient reasoning system that proactively generates actionable daily synthesis briefs.",
        aiCapabilities: ["Asynchronous Event Synthesis", "Contextual Attention Scoring"],
        technologies: ["TypeScript", "Next.js", "PostgreSQL", "TailwindCSS"],
        images: ["/images/builds/ambient.png"],
        featured: false,
        visibility: "PRIVATE", // Strictly confidential
        clientName: "Stealth Enterprise Partner",
        industry: "Enterprise Productivity",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: "build-spectral-data",
        slug: "spectral-imaging-pipeline",
        name: "Hyperspectral Ingestion Engine",
        type: "BUILD",
        category: "Data & Perception",
        shortDescription: "Ultra-low-latency spectral dataset transformation pipeline.",
        description: "Ingests raw multispectral satellite imagery, normalizes radiometry, and indexes features into a high-dimensional vector space.",
        problem: "Raw optical satellite payloads require hours of batch preprocessing before downstream analytics can run.",
        solution: "Stream-processing architecture executing radiometric calibration and embedding indexing in under 2 seconds.",
        aiCapabilities: ["Hyperspectral Feature Extraction", "Vector Similarity Indexing"],
        technologies: ["Rust", "Python", "Pgvector", "Next.js"],
        images: ["/images/builds/spectral.png"],
        featured: true,
        visibility: "PUBLIC",
        clientName: "Earth Systems Labs",
        industry: "Geospatial Intelligence",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20).toISOString(),
        updatedAt: new Date().toISOString(),
      }
    );

    // 3. Seed Initial Realistic Inquiries
    this.inquiries.push(
      {
        id: "inq_01",
        name: "Dr. Marcus Chen",
        email: "m.chen@bionext-labs.org",
        company: "BioNext Genomics",
        role: "Chief Scientific Officer",
        projectType: "Intelligent Data Platform",
        stage: "Early Prototype",
        problem: "Our sequencing pipelines generate massive multi-omic variant files that biological researchers cannot explore without writing custom Python notebooks.",
        description: "We need an interactive, browser-based genomic exploration platform with low-latency variant visualization and automated annotation pipelines.",
        aiRequirements: "Local embedding search across gene ontology graphs and automated literature summary extraction.",
        timeline: "3–4 months",
        budget: "$50k – $100k",
        referenceUrl: "https://bionext-labs.org",
        status: "DISCOVERY",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        notes: [
          {
            id: "note_01",
            inquiryId: "inq_01",
            authorEmail: "admin@reckai.com",
            authorName: "RECKAI Engineering",
            content: "Conducted initial technical scoping call. Data models are based on standard VCF files. Strong candidate for RECKAI Builds.",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
          },
        ],
      },
      {
        id: "inq_02",
        name: "Elena Rostova",
        email: "elena@synthetix-capital.com",
        company: "Synthetix Capital",
        role: "Managing Partner",
        projectType: "Algorithmic Accounting Engine",
        stage: "Concept / Discovery",
        problem: "Portfolio fund reconciliations require 4 days of manual spreadsheet cross-referencing every month-end.",
        description: "An automated double-entry ledger invariant verification engine that flags multi-currency discrepancies at transaction ingestion.",
        aiRequirements: "Anomaly detection for high-frequency ledger deltas.",
        timeline: "2–3 months",
        budget: "$25k – $50k",
        status: "NEW",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        notes: [],
      }
    );

    // 4. Seed Media
    this.media.push(
      {
        id: "med_01",
        projectId: "original-omnixperience",
        filename: "omnixperience-hero.png",
        url: "/images/products/omnixperience-mock.png",
        type: "IMAGE",
        altText: "OmniXperience Workspace Canvas",
        caption: "Unified personal operating environment",
        visibility: "PUBLIC",
        sizeBytes: 420000,
        createdAt: new Date().toISOString(),
      },
      {
        id: "med_02",
        projectId: "build-ambient-os",
        filename: "ambient-os-architecture.pdf",
        url: "/docs/private/ambient-architecture.pdf",
        type: "DOCUMENT",
        altText: "Confidential System Architecture Document",
        caption: "Private partner architecture blueprint",
        visibility: "PRIVATE",
        sizeBytes: 1250000,
        createdAt: new Date().toISOString(),
      }
    );

    // 5. Seed Audit Log
    this.auditLogs.push({
      id: "log_01",
      actorEmail: "system@reckai.com",
      action: "SYSTEM_INITIALIZED",
      resourceType: "SYSTEM",
      resourceId: "core",
      details: "RECKAI Operations substrate activated.",
      createdAt: new Date().toISOString(),
    });
  }

  /* -------------------------------------------------------------------------
     INQUIRIES
     ------------------------------------------------------------------------- */
  async getInquiries(filter?: { status?: string; search?: string }): Promise<InquiryRecord[]> {
    let list = [...this.inquiries];
    if (filter?.status && filter.status !== "ALL") {
      list = list.filter((i) => i.status === filter.status);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.email.toLowerCase().includes(q) ||
          (i.company && i.company.toLowerCase().includes(q)) ||
          i.projectType.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async addInquiry(
    inquiry: Omit<InquiryRecord, "id" | "status" | "createdAt" | "updatedAt" | "notes">
  ): Promise<InquiryRecord> {
    const record: InquiryRecord = {
      ...inquiry,
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      status: "NEW",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: [],
    };
    this.inquiries.unshift(record);
    return record;
  }

  async getInquiryById(id: string): Promise<InquiryRecord | null> {
    return this.inquiries.find((i) => i.id === id) || null;
  }

  async updateInquiryStatus(
    id: string,
    status: InquiryStatus,
    actorEmail: string
  ): Promise<InquiryRecord | null> {
    const inq = this.inquiries.find((i) => i.id === id);
    if (!inq) return null;

    const oldStatus = inq.status;
    inq.status = status;
    inq.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      actorEmail,
      "INQUIRY_STATUS_UPDATED",
      "INQUIRY",
      id,
      `Changed status from ${oldStatus} to ${status}`
    );

    return inq;
  }

  async addInquiryNote(
    inquiryId: string,
    authorEmail: string,
    authorName: string,
    content: string
  ): Promise<InternalNote | null> {
    const inq = this.inquiries.find((i) => i.id === inquiryId);
    if (!inq) return null;

    const note: InternalNote = {
      id: `note_${Date.now()}`,
      inquiryId,
      authorEmail,
      authorName,
      content,
      createdAt: new Date().toISOString(),
    };

    inq.notes.unshift(note);
    inq.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      authorEmail,
      "INTERNAL_NOTE_ADDED",
      "INQUIRY",
      inquiryId,
      `Added note: "${content.slice(0, 40)}..."`
    );

    return note;
  }

  async convertInquiryToBuild(inquiryId: string, actorEmail: string): Promise<ProjectRecord | null> {
    const inq = this.inquiries.find((i) => i.id === inquiryId);
    if (!inq) return null;

    const slug = inq.company
      ? inq.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      : `build-${inq.id}`;

    const newProject: ProjectRecord = {
      id: `build_${Date.now()}`,
      slug,
      name: `${inq.company || inq.name} System`,
      type: "BUILD",
      category: inq.projectType,
      shortDescription: inq.description.slice(0, 160),
      description: inq.description,
      problem: inq.problem,
      solution: "In discovery and engineering scoping with partner.",
      aiCapabilities: inq.aiRequirements ? [inq.aiRequirements.slice(0, 50)] : [],
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
      images: [],
      featured: false,
      visibility: "DRAFT", // Default strictly DRAFT
      clientName: inq.company || inq.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.projects.unshift(newProject);
    inq.convertedProjectId = newProject.id;
    inq.status = "IN_PROGRESS";
    inq.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      actorEmail,
      "INQUIRY_CONVERTED_TO_BUILD",
      "PROJECT",
      newProject.id,
      `Converted inquiry ${inquiryId} to Build project: ${newProject.name}`
    );

    return newProject;
  }

  /* -------------------------------------------------------------------------
     PROJECTS
     ------------------------------------------------------------------------- */
  async getProjects(filter?: {
    type?: ProjectType;
    visibility?: ProjectVisibility;
    search?: string;
  }): Promise<ProjectRecord[]> {
    let list = [...this.projects];
    if (filter?.type) {
      list = list.filter((p) => p.type === filter.type);
    }
    if (filter?.visibility) {
      list = list.filter((p) => p.visibility === filter.visibility);
    }
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  async getProjectById(id: string): Promise<ProjectRecord | null> {
    return this.projects.find((p) => p.id === id || p.slug === id) || null;
  }

  async updateProject(
    id: string,
    updates: Partial<ProjectRecord>,
    actorEmail: string
  ): Promise<ProjectRecord | null> {
    const project = this.projects.find((p) => p.id === id || p.slug === id);
    if (!project) return null;

    Object.assign(project, updates, { updatedAt: new Date().toISOString() });

    await this.recordAuditLog(
      actorEmail,
      "PROJECT_UPDATED",
      "PROJECT",
      project.id,
      `Updated fields on project ${project.name}`
    );

    return project;
  }

  async publishProject(id: string, actorEmail: string): Promise<ProjectRecord | null> {
    const project = this.projects.find((p) => p.id === id || p.slug === id);
    if (!project) return null;

    project.visibility = "PUBLIC";
    project.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      actorEmail,
      "PROJECT_PUBLISHED",
      "PROJECT",
      project.id,
      `Published project ${project.name} to public website`
    );

    return project;
  }

  async unpublishProject(
    id: string,
    targetVisibility: "DRAFT" | "PRIVATE",
    actorEmail: string
  ): Promise<ProjectRecord | null> {
    const project = this.projects.find((p) => p.id === id || p.slug === id);
    if (!project) return null;

    project.visibility = targetVisibility;
    project.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      actorEmail,
      "PROJECT_UNPUBLISHED",
      "PROJECT",
      project.id,
      `Unpublished project ${project.name} (moved to ${targetVisibility})`
    );

    return project;
  }

  async archiveProject(id: string, actorEmail: string): Promise<ProjectRecord | null> {
    const project = this.projects.find((p) => p.id === id || p.slug === id);
    if (!project) return null;

    project.visibility = "ARCHIVED";
    project.updatedAt = new Date().toISOString();

    await this.recordAuditLog(
      actorEmail,
      "PROJECT_ARCHIVED",
      "PROJECT",
      project.id,
      `Archived project ${project.name}`
    );

    return project;
  }

  /* -------------------------------------------------------------------------
     MEDIA ASSETS
     ------------------------------------------------------------------------- */
  async getMedia(filter?: { projectId?: string; type?: string }): Promise<MediaAsset[]> {
    let list = [...this.media];
    if (filter?.projectId) {
      list = list.filter((m) => m.projectId === filter.projectId);
    }
    if (filter?.type) {
      list = list.filter((m) => m.type === filter.type);
    }
    return list;
  }

  async addMedia(
    data: Omit<MediaAsset, "id" | "createdAt">,
    actorEmail: string
  ): Promise<MediaAsset> {
    const asset: MediaAsset = {
      ...data,
      id: `med_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.media.unshift(asset);

    await this.recordAuditLog(
      actorEmail,
      "MEDIA_UPLOADED",
      "MEDIA",
      asset.id,
      `Uploaded asset ${asset.filename}`
    );

    return asset;
  }

  async deleteMedia(id: string, actorEmail: string): Promise<boolean> {
    const idx = this.media.findIndex((m) => m.id === id);
    if (idx === -1) return false;

    const asset = this.media[idx];
    this.media.splice(idx, 1);

    await this.recordAuditLog(
      actorEmail,
      "MEDIA_DELETED",
      "MEDIA",
      id,
      `Deleted asset ${asset.filename}`
    );

    return true;
  }

  /* -------------------------------------------------------------------------
     AUDIT LOGS
     ------------------------------------------------------------------------- */
  async recordAuditLog(
    actorEmail: string,
    action: string,
    resourceType: string,
    resourceId: string,
    details?: string,
    actorClerkUserId?: string
  ): Promise<AuditLog> {
    const log: AuditLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      actorEmail,
      actorClerkUserId,
      action,
      resourceType,
      resourceId,
      details,
      createdAt: new Date().toISOString(),
    };
    this.auditLogs.unshift(log);
    // Keep reasonable bounded size
    if (this.auditLogs.length > 500) {
      this.auditLogs.pop();
    }
    return log;
  }

  async getAuditLogs(limit: number = 50): Promise<AuditLog[]> {
    return this.auditLogs.slice(0, limit);
  }

  /* -------------------------------------------------------------------------
     CONTENT & SETTINGS
     ------------------------------------------------------------------------- */
  async getContentSettings(): Promise<ContentSettings> {
    return { ...this.contentSettings };
  }

  async updateContentSettings(
    updates: Partial<ContentSettings>,
    actorEmail: string
  ): Promise<ContentSettings> {
    Object.assign(this.contentSettings, updates);

    await this.recordAuditLog(
      actorEmail,
      "CONTENT_SETTINGS_UPDATED",
      "CONTENT",
      "global",
      "Updated global content configuration."
    );

    return { ...this.contentSettings };
  }
}

export const adminRepository = new AdminRepository();
