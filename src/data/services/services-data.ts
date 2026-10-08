import { Service } from "@/types/service";

export const RECKAI_SERVICES: Service[] = [
  {
    id: "service-product-strategy",
    slug: "product-strategy",
    name: "Product Strategy",
    category: "Foundation & Scoping",
    tagline: "Before we build, we reckon.",
    shortDescription:
      "Transforming raw problems, ambitious ideas, and market friction into validated product architectures and tight MVP boundaries.",
    description:
      "We don't start with code. We start with deep thinking. RECKAI Product Strategy interrogates the real problem, identifies user friction, eliminates unnecessary complexity, and defines a viable, defensible product model.",
    whatThisMeans:
      "Most software projects fail not because of bad code, but because they built the wrong thing. We define the problem with mathematical clarity, identify who experiences the friction, and establish exactly what needs to be built first—and what must be intentionally left out.",
    capabilities: [
      "Product discovery & domain research",
      "Problem definition & friction mapping",
      "MVP scoping & boundary definition",
      "System architecture modeling",
      "Feature prioritization & roadmap sequencing",
    ],
    problemsWeSolve: [
      "Vague requirements that lead to costly scope creep and blown budgets",
      "Premature engineering before the core problem hypothesis is validated",
      "Confusion over whether an idea actually requires applied AI or simple software",
      "Unfocused feature bloat that dilutes user value",
    ],
    howWeWork: [
      "01 / Discovery Sprint: Deep stakeholder and domain immersion",
      "02 / Friction Mapping: Identifying the specific bottleneck worth eliminating",
      "03 / Technical Viability: Assessing software, AI, and data constraints",
      "04 / Architectural Blueprint: Delivering specifications, data models, and user journeys",
    ],
    technologies: [
      "System Architecture Mapping",
      "Domain-Driven Modeling",
      "User Journey Synthesis",
      "PRD & Contract Specifications",
    ],
    relatedProducts: ["omnixperience", "finance"],
    featured: true,
    order: 1,
    faqs: [
      {
        question: "When should we engage RECKAI for Product Strategy?",
        answer:
          "At the earliest stage of an idea, before hiring developers or committing capital, or when an existing product has hit an architectural plateau and needs strategic refactoring.",
      },
      {
        question: "Do you deliver code during the Product Strategy phase?",
        answer:
          "Product Strategy delivers system architecture blueprints, data schemas, user flows, and technical feasibility spikes—ensuring that when engineering begins, every line of code has a clear purpose.",
      },
    ],
  },

  {
    id: "service-product-design",
    slug: "product-design",
    name: "Product Design",
    category: "Experience & Interface",
    tagline: "Calm, editorial, and effortless human interaction.",
    shortDescription:
      "Crafting high-craft digital product experiences, design systems, and responsive interfaces that make complex systems feel natural.",
    description:
      "We design software for humans who value cognitive clarity. Our design philosophy prioritizes whitespace, editorial typography, logical hierarchies, and purposeful motion over distracting visual noise.",
    whatThisMeans:
      "Good design is not decorative styling applied at the end; it is the structural user experience. We map the mental model of the user to the technical capabilities of the system, creating interfaces that feel intuitive from the first click.",
    capabilities: [
      "UX strategy & behavioral interaction design",
      "Editorial UI design & responsive layouts",
      "Scalable design systems & token architectures",
      "Interactive high-fidelity prototyping",
      "Micro-interactions & intentional motion systems",
    ],
    problemsWeSolve: [
      "Cluttered, high-friction dashboards that overwhelm users with cognitive overload",
      "Inconsistent UI patterns that slow down product iteration",
      "Mobile interfaces that feel like broken desktop compromises",
      "Boring, generic template aesthetics that fail to build trust",
    ],
    howWeWork: [
      "01 / Information Architecture: Organizing complex entities into clear hierarchies",
      "02 / Wireframing & Flow Validation: Testing navigation rhythms before pixels",
      "03 / High-Craft UI Design: Developing cohesive visual design and typography tokens",
      "04 / Interactive Prototyping: Validating live behavior and tactile responsiveness",
    ],
    technologies: [
      "Tailwind CSS Tokens",
      "Figma Systems",
      "Framer Motion / CSS Transitions",
      "Radix UI Primitives",
      "WCAG 2.1 AA Accessibility",
    ],
    relatedProducts: ["evolveaura", "omnixperience"],
    featured: true,
    order: 2,
    faqs: [
      {
        question: "Do your designers also write code?",
        answer:
          "Yes. Our design engineering team works directly in React and Tailwind CSS tokens, ensuring that design vision and production implementation match with pixel precision.",
      },
    ],
  },

  {
    id: "service-software-engineering",
    slug: "software-engineering",
    name: "Software Engineering",
    category: "Core Architecture & Build",
    tagline: "Built to survive beyond the demo.",
    shortDescription:
      "Full-stack web, mobile, and backend engineering using modern, type-safe technologies built for speed, reliability, and scale.",
    description:
      "We engineer production-grade software with rigorous architectural standards. From high-performance Next.js frontends to resilient PostgreSQL schemas and cloud infrastructure, our code is built to last.",
    whatThisMeans:
      "Demos are easy; production software is hard. We write clean, typed, modular codebases with automated testing, continuous integration, zero-downtime deployments, and strict observability.",
    capabilities: [
      "Modern Web Applications (Next.js, React, TypeScript)",
      "Native & Cross-Platform Mobile Applications",
      "High-Throughput Backend APIs & Microservices",
      "Relational & Document Database Engineering (PostgreSQL, Prisma)",
      "Cloud Infrastructure, Enclaves & CI/CD Pipelines",
    ],
    problemsWeSolve: [
      "Slow, bloated frontends that suffer from severe performance bottlenecks",
      "Unmaintainable spaghetti codebases built by short-term contract agencies",
      "Database bottlenecks that crash under growing query complexity",
      "Security vulnerabilities and lack of audit logging in critical systems",
    ],
    howWeWork: [
      "01 / Technical Architecture: Defining schemas, APIs, and infrastructure blueprints",
      "02 / Core Build Sprint: Rapid, type-safe development with daily verifiable progress",
      "03 / Performance & Security Auditing: Load testing, vulnerability scanning, and latency optimization",
      "04 / Production Deployment: Automated deployment pipelines with telemetry monitoring",
    ],
    technologies: [
      "Next.js 14 App Router",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "AWS / Cloudflare Edge",
    ],
    relatedProducts: ["organxcell", "finance", "omnixperience"],
    featured: true,
    order: 3,
    faqs: [
      {
        question: "What is your primary technology stack?",
        answer:
          "We specialize in modern TypeScript ecosystems: Next.js 14, React 18, Node.js, and PostgreSQL, backed by Cloudflare and AWS infrastructure.",
      },
      {
        question: "Do you hand over the source code completely?",
        answer:
          "Always. All client builds include complete intellectual property handover, clean git histories, and thorough architectural documentation.",
      },
    ],
  },

  {
    id: "service-ai-intelligence",
    slug: "ai-intelligence",
    name: "AI & Machine Intelligence",
    category: "Applied Intelligence",
    tagline: "AI should do something.",
    shortDescription:
      "Integrating machine intelligence where it creates concrete leverage—vision, natural language, embeddings, and predictive algorithms.",
    description:
      "We don't add AI because a product needs an AI buzzword. We introduce machine intelligence when it makes the product fundamentally more capable: extracting insights, personalizing context, or automating decisions.",
    whatThisMeans:
      "Applied AI is an engineering discipline, not magic. We design domain-specific pipelines that combine deterministic rules, vector embeddings, fine-tuned models, and evaluation guardrails to ensure precision, low latency, and predictable costs.",
    capabilities: [
      "AI product architecture & model evaluation",
      "Custom vector embeddings & intelligent search",
      "Computer vision & multimodal classification pipelines",
      "Predictive analytics & time-series modeling",
      "Agentic workflows & tool-calling automation",
      "Safety guardrails & hallucination mitigation",
    ],
    problemsWeSolve: [
      "Superficial AI wrappers that provide no real user value or defensibility",
      "High model inference costs and unpredictable latency",
      "Probabilistic hallucinations in mission-critical applications",
      "Unstructured data that cannot be leveraged by standard software",
    ],
    howWeWork: [
      "01 / Viability Audit: Determining whether the problem genuinely needs AI vs deterministic code",
      "02 / Data & Pipeline Design: Structuring embeddings, preprocessing, and context vectors",
      "03 / Model Integration: Connecting models with strict schema validation and fallback logic",
      "04 / Evaluation & Guardrails: Measuring accuracy, latency, and cost per inference",
    ],
    technologies: [
      "Multimodal Embeddings",
      "Vector Search (pgvector, Qdrant)",
      "Python / PyTorch",
      "OpenAI, Claude, Gemini APIs",
      "Local Small Language Models (SLMs)",
      "Deterministic Guardrails",
    ],
    relatedProducts: ["omnixperience", "organxcell", "evolveaura"],
    featured: true,
    order: 4,
    faqs: [
      {
        question: "Do you build custom models or use foundational APIs?",
        answer:
          "We choose the right tool for the job: state-of-the-art hosted frontier models for complex reasoning, and lightweight fine-tuned or local models for privacy, low latency, and cost-efficiency.",
      },
      {
        question: "How do you prevent hallucinations in critical software?",
        answer:
          "We use strict deterministic boundary checking: structured JSON schema enforcement, multi-step verification, and rule-based fallback handlers where probabilistic errors cannot be tolerated.",
      },
    ],
  },

  {
    id: "service-automation",
    slug: "automation",
    name: "Intelligent Automation",
    category: "Operations & Background Logic",
    tagline: "Eliminating manual bottlenecks with software.",
    shortDescription:
      "Autonomous background workflows, event-driven pipelines, and intelligent agents that replace repetitive human triage.",
    description:
      "When business processes rely on human copy-pasting, manual triage, and spreadsheet synchronization, operations stall. We build resilient background systems that run autonomously 24/7.",
    whatThisMeans:
      "Automation must be reliable. We engineer distributed background queues, webhook processors, and multi-system integrations with automatic retries, idempotency guarantees, and comprehensive error logging.",
    capabilities: [
      "Event-driven background workflow automation",
      "Intelligent autonomous agent execution",
      "Multi-platform API integration & data synchronization",
      "Automated document & transaction processing",
      "Operational monitoring & exception routing",
    ],
    problemsWeSolve: [
      "Manual administrative friction draining high-value executive and technical time",
      "Disconnected SaaS tools that require fragile manual updates",
      "Missed deadlines and dropped notifications in critical operational pipelines",
      "Inability to scale transaction volume without hiring proportional headcount",
    ],
    howWeWork: [
      "01 / Process Audit: Mapping existing manual human handoffs and failure points",
      "02 / Architecture & Queueing: Designing idempotent distributed tasks",
      "03 / Integration Engineering: Connecting third-party APIs with retry logic",
      "04 / Telemetry & Alerting: Real-time alerting for edge cases and exceptions",
    ],
    technologies: [
      "Distributed Message Queues",
      "Event-Driven Webhooks",
      "Microservice Workers",
      "REST & GraphQL Pipelines",
      "Zero-Downtime Retries",
    ],
    relatedProducts: ["organxcell", "finance"],
    featured: true,
    order: 5,
    faqs: [
      {
        question: "What happens if a third-party API goes down during an automation?",
        answer:
          "Our automation systems are designed with dead-letter queues, exponential backoff retries, and automated fallback routing so operations never lose data.",
      },
    ],
  },

  {
    id: "service-data-systems",
    slug: "data-systems",
    name: "Data & Decision Systems",
    category: "Analytics & Intelligence",
    tagline: "Turn messy streams into auditable decisions.",
    shortDescription:
      "High-integrity data pipelines, decision-support algorithms, and analytical cockpits built for mission-critical operations.",
    description:
      "Data is only useful if it enables timely, accurate decisions. We engineer deterministic algorithms, real-time analytics engines, and high-precision dashboards that give leadership total situational awareness.",
    whatThisMeans:
      "We build data systems that tell the truth. By combining clean relational structures, cryptographic auditability, and deterministic ranking algorithms, we empower clinical, financial, and operational teams to act with confidence.",
    capabilities: [
      "High-integrity data pipeline architecture",
      "Deterministic decision-support engines",
      "Real-time operational dashboards & cockpits",
      "Cryptographic audit trails & event sourcing",
      "Time-series analysis & liquidity modeling",
    ],
    problemsWeSolve: [
      "Fragmented, conflicting data sources across legacy systems",
      "Slow, sluggish analytical queries that freeze under large datasets",
      "Lack of compliance auditability in regulated domains",
      "Misleading backward-looking reporting that fails to guide forward action",
    ],
    howWeWork: [
      "01 / Data Ingestion Modeling: Designing schema definitions and validation layers",
      "02 / Algorithm Engineering: Writing mathematically verifiable scoring/matching rules",
      "03 / Cockpit Development: Building real-time interactive UI dashboards",
      "04 / Audit Verification: Ensuring full cryptographic traceability for compliance",
    ],
    technologies: [
      "PostgreSQL & TimeScaleDB",
      "Redis Caching",
      "Real-Time WebSockets",
      "Cryptographic Hash Trees",
      "High-Precision Mathematics",
    ],
    relatedProducts: ["organxcell", "finance"],
    featured: true,
    order: 6,
    faqs: [
      {
        question: "How do decision-support systems differ from autonomous AI?",
        answer:
          "Decision-support systems compute multi-variable compatibility, rank possibilities, and flag risks for human verification, ensuring licensed experts maintain final authority in critical situations.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return RECKAI_SERVICES.find((s) => s.slug === slug);
}
