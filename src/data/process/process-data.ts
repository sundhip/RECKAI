import { ProcessStep } from "@/types/process";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    slug: "understand",
    name: "UNDERSTAND",
    tagline: "Understand the problem.",
    shortDescription: "Immersing in the user, the context, existing workflows, constraints, and root causes.",
    description:
      "Before building anything, RECKAI needs to understand the user, the problem, the commercial context, existing manual workflows, constraints, desired outcome, and technical realities. We don't accept problem statements at face value; we examine why the friction exists in the first place.",
    statement: "The better we understand the problem, the less we have to guess later.",
    principles: [
      "Interrogate the user's daily lived experience, not abstract market reports",
      "Map every manual workaround and informal spreadsheet currently compensating for failure",
      "Isolate technical and domain boundaries before entertaining solutions",
      "Clarify what success actually looks like in verifiable terms",
    ],
    outputs: [
      "User & Context Friction Map",
      "Baseline Workflow Audit",
      "System Constraints Document",
      "Root Problem Definition",
    ],
  },
  {
    number: "02",
    slug: "reckon",
    name: "RECKON",
    tagline: "Reckon with what's possible.",
    shortDescription: "Thinking deeply, questioning assumptions, evaluating trade-offs, and comparing architectures.",
    description:
      "This is our signature stage. To 'reckon' means to think deeply, reason through possibilities, question conventional wisdom, compare architectural paths, challenge assumptions, and uncover high-leverage opportunities. We evaluate whether the problem even requires custom software or if a simpler solution is superior.",
    statement: "We want the product to be explainable, deliberate, and necessary—never accidental.",
    principles: [
      "Challenge initial assumptions: Is this actually a technical problem, or a process flaw?",
      "Model multiple solution trajectories and stress-test their failure modes",
      "Explicitly weigh trade-offs: speed vs. scalability, determinism vs. probabilistic AI",
      "Reject industry cargo-culting: use only what genuinely creates product leverage",
    ],
    outputs: [
      "Architectural Trade-Off Matrix",
      "Hypothesis & Viability Analysis",
      "AI vs. Deterministic Evaluation",
      "Strategic Decision Blueprint",
    ],
  },
  {
    number: "03",
    slug: "define",
    name: "DEFINE",
    tagline: "Define what should actually be built.",
    shortDescription: "Separating what is interesting from what is necessary and establishing firm MVP boundaries.",
    description:
      "Not every requested feature belongs in version one. We translate the reckoned concept into a lean, razor-sharp product scope. We establish clear boundaries between core necessities and downstream ideas, preventing feature bloat from killing momentum.",
    statement: "We separate what's interesting from what's necessary.",
    principles: [
      "Define strict MVP boundaries that solve the core problem completely",
      "Sequence user journeys so value is delivered in the first 60 seconds",
      "Draft explicit schema contracts and API specifications before coding",
      "Document what is intentionally excluded and why",
    ],
    outputs: [
      "MVP Scope & Boundaries Contract",
      "Core Entity Relationship Schemas",
      "Feature Prioritization Matrix",
      "Product Requirements Specification",
    ],
  },
  {
    number: "04",
    slug: "design",
    name: "DESIGN",
    tagline: "Design the experience.",
    shortDescription: "Crafting calm, editorial layouts, structured navigation, design tokens, and tactile prototypes.",
    description:
      "We design products for clarity and focus. Our design approach prioritizes editorial typography, generous whitespace, logical information architecture, and micro-interactions that communicate state effortlessly without sensory overload.",
    statement: "Design is not surface decoration; it is the physical architecture of human attention.",
    principles: [
      "Build interfaces that respect human focus and minimize cognitive friction",
      "Establish cohesive design token architectures (spacing, type, colors, radii)",
      "Prototype interaction state transitions and edge states (empty, loading, error)",
      "Design mobile and responsive experiences as first-class citizens",
    ],
    outputs: [
      "Information Architecture Maps",
      "High-Fidelity Responsive Layouts",
      "Design Token System (Tailwind / Tokens)",
      "Interactive Functional Prototypes",
    ],
  },
  {
    number: "05",
    slug: "engineer",
    name: "ENGINEER",
    tagline: "Engineer the product.",
    shortDescription: "Writing clean, type-safe, modular codebases with resilient databases and cloud infrastructure.",
    description:
      "We engineer production-grade software. We don't rely on fragile low-code tools or copy-paste starter templates. We write clean, typed TypeScript and modern server architectures with strict database integrity and automated testing.",
    statement: "Demos are easy. We engineer systems that survive real-world production loads.",
    principles: [
      "100% strict TypeScript typing from database schemas to frontend UI components",
      "Relational data integrity with automated migrations and cryptographic auditability",
      "Stateless, horizontal edge scalability with low-latency server execution",
      "Zero dead weight: minimal dependencies and audited bundle sizes",
    ],
    outputs: [
      "Production Codebase (Next.js 14 / TypeScript)",
      "Relational Database Migrations (PostgreSQL)",
      "Modular Server-Side APIs",
      "Automated Test Suites & Linter Rules",
    ],
  },
  {
    number: "06",
    slug: "intelligentize",
    name: "INTELLIGENTIZE",
    tagline: "Add intelligence where it matters.",
    shortDescription: "Introducing machine intelligence, vision, embeddings, and predictive algorithms where they create genuine leverage.",
    description:
      "We introduce AI only where it creates genuine leverage—never as a marketing gimmick. Whether deploying computer vision for wardrobe classification, psychometric scoring for attention habits, or deterministic cross-matching algorithms for clinical organ allocation, we anchor intelligence in real value.",
    statement: "We don't add AI because a product needs an AI label. We use intelligence when it makes the product more useful.",
    principles: [
      "Only deploy AI when deterministic software cannot solve the problem better",
      "Enforce strict schema validation and guardrails on all model outputs",
      "Optimize inference latency and cost per transaction aggressively",
      "Provide transparent fallbacks when probabilistic models encounter edge cases",
    ],
    outputs: [
      "Vector & Embedding Pipelines",
      "Multimodal Perception Workflows",
      "Deterministic Safety Guardrails",
      "Model Inference & Latency Optimizations",
    ],
  },
  {
    number: "07",
    slug: "ship",
    name: "SHIP",
    tagline: "Make it real.",
    shortDescription: "Deploying to production with automated CI/CD, telemetry, error tracking, and zero downtime.",
    description:
      "Shipping is where theory meets reality. We deploy code to isolated edge environments and cloud infrastructures with continuous integration, automated rollbacks, real-time error tracking, and strict security headers.",
    statement: "Shipping is not an event at the end of a project; it is the discipline of continuous production readiness.",
    principles: [
      "Automated CI/CD pipelines with zero-downtime rolling deployments",
      "Comprehensive telemetry: structured logging, latency profiling, error alarms",
      "Strict security posture: rate limiting, CSRF protection, input sanitization",
      "Verification of actual user onboarding and data flow in production",
    ],
    outputs: [
      "Production Edge Deployment (Cloudflare / AWS)",
      "Automated CI/CD Pipeline (GitHub Actions)",
      "Error Tracking & Observability Dashboard",
      "Operational Runbook & Handover Documentation",
    ],
  },
  {
    number: "08",
    slug: "evolve",
    name: "EVOLVE",
    tagline: "Shipping isn't the end.",
    shortDescription: "Observing live telemetry, gathering real feedback, prioritizing bottlenecks, and continuously refining.",
    description:
      "A product's life begins when real humans use it. After launch, we observe telemetry, gather qualitative feedback, identify unexpected friction points, and iteratively deploy enhancements to compound product advantage.",
    statement: "Great products are not born in isolation; they evolve through disciplined observation and continuous iteration.",
    principles: [
      "Observe real user behavioral patterns and eliminate emerging friction",
      "Continuously tune database query performance and API response times",
      "Incorporate newly validated features based on empirical usage data",
      "Refine machine intelligence pipelines as domain data accumulates",
    ],
    outputs: [
      "Live Usage Telemetry Reports",
      "Iterative Product Enhancements",
      "Performance & Query Optimizations",
      "Compounding Feature Roadmap",
    ],
  },
];
