import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RECKAI_SERVICES } from "@/data/services/services-data";
import { productService } from "@/server/services/product.service";
import { OriginalProductCard } from "@/components/products/original-card";
import { BuildProjectCard } from "@/components/products/build-card";
import {
  CapabilityCard,
  ServicePhilosophyFormula,
  AIArchitectureDiagram,
  CapabilityMapping,
} from "@/components/services/services-interactive";

export const metadata = {
  title: "Services & Capabilities — We Build the Systems Behind Intelligent Products | RECKAI",
  description:
    "From product strategy and engineering to AI, automation, and data systems, RECKAI brings the pieces together to turn ambitious ideas into working products.",
};

const MILESTONES = [
  {
    step: "01",
    title: "IDEA",
    description: "Understand what is actually worth building. Dissect the core friction before writing code.",
  },
  {
    step: "02",
    title: "PRODUCT",
    description: "Turn the problem into a clear product experience with validated user flows and tight boundaries.",
  },
  {
    step: "03",
    title: "ENGINEERING",
    description: "Build reliable, type-safe software around it with clean schemas and modular architecture.",
  },
  {
    step: "04",
    title: "INTELLIGENCE",
    description: "Introduce AI where it creates genuine value—vision, embeddings, and predictive algorithms.",
  },
  {
    step: "05",
    title: "SYSTEM",
    description: "Connect data, background workflows, real-time users, and cloud infrastructure into a unified whole.",
  },
  {
    step: "06",
    title: "IMPACT",
    description: "Ship to production, monitor telemetry, learn from real feedback, and continuously improve.",
  },
];

const AI_CAPABILITY_ROLES = [
  {
    action: "UNDERSTAND",
    focus: "Natural Language",
    description: "Synthesizing unstructured transcripts, semantic search queries, and domain-specific documents.",
  },
  {
    action: "SEE",
    focus: "Computer Vision",
    description: "Multimodal visual feature extraction, item classification, and physical environment analysis.",
  },
  {
    action: "PREDICT",
    focus: "Machine Learning",
    description: "Time-series cashflow curves, resource degradation windows, and predictive operational forecasting.",
  },
  {
    action: "RECOMMEND",
    focus: "Personalization",
    description: "Adaptive habit quests, contextual wardrobe recommendations, and cognitive pacing algorithms.",
  },
  {
    action: "GENERATE",
    focus: "Generative AI",
    description: "Procedural daily task synthesis, personalized morning briefings, and adaptive documentation.",
  },
  {
    action: "AUTOMATE",
    focus: "AI-Powered Workflows",
    description: "Intelligent background agent pipelines, multi-step tool calling, and exception triage.",
  },
  {
    action: "DECIDE",
    focus: "Decision Support",
    description: "Multi-parametric organ match scoring, urgency ranking, and deterministic clinical verification.",
  },
];

const ENGINEERING_PILLARS = [
  { name: "ARCHITECTURE", detail: "Clean domain boundaries, strict separation of concerns, and modular microservices." },
  { name: "SCALABILITY", detail: "Stateless edge routing, asynchronous queue workers, and horizontal database read-replicas." },
  { name: "SECURITY", detail: "Cryptographic ledgers, role-based access control, isolated enclaves, and sanitized inputs." },
  { name: "PERFORMANCE", detail: "Sub-100ms server response times, lightweight bundle footprints, and aggressive edge caching." },
  { name: "MAINTAINABILITY", detail: "100% strict TypeScript typing, shared design tokens, and self-documenting codebases." },
  { name: "OBSERVABILITY", detail: "Structured logging, real-time error telemetry, and latency profiling across all endpoints." },
  { name: "DEPLOYMENT", detail: "Automated CI/CD pipelines, containerized environments, and zero-downtime rolling releases." },
];

const TECH_CATEGORIES = [
  {
    category: "FRONTEND",
    items: ["Next.js 14 App Router", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix Primitives"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "FastAPI / Python", "Next.js Route Handlers", "REST & GraphQL", "WebSocket Streaming"],
  },
  {
    category: "DATABASE & STORAGE",
    items: ["PostgreSQL", "Prisma ORM", "pgvector", "Redis Cache", "Encrypted Cloud Storage"],
  },
  {
    category: "AI & ML INFRASTRUCTURE",
    items: ["Multimodal Embeddings", "Vector Search", "Python / PyTorch", "Hosted Frontier APIs", "Local SLMs"],
  },
  {
    category: "INFRASTRUCTURE & DEPLOYMENT",
    items: ["Cloudflare Edge", "AWS Enclaves", "Docker Containers", "Automated CI/CD", "Structured Logging"],
  },
  {
    category: "DESIGN & SPECIFICATION",
    items: ["Design Tokens", "Figma Design Systems", "WCAG AA Standards", "Domain Contracts"],
  },
];

export default async function ServicesPage() {
  const originals = await productService.getOriginals();
  const builds = await productService.getBuilds();
  const publicBuilds = builds.filter(
    (b) => b.visibility === "PUBLIC" || b.visibility === "ANONYMIZED"
  );

  return (
    <div className="py-20 sm:py-28 space-y-28">
      {/* 1. HERO SECTION */}
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="violet" className="font-mono text-xs tracking-widest font-bold">
            SERVICES & CAPABILITIES
          </Badge>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Product Engineering & Intelligence
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
          We build the systems behind intelligent products.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          From product strategy and engineering to AI, automation, and data systems, RECKAI brings the pieces together to turn ambitious ideas into working products.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/start-project">
            <Button variant="primary" size="md" arrow="up-right">
              Start a Project ↗
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" size="md" arrow="right">
              See What We Build →
            </Button>
          </Link>
        </div>
      </Container>

      {/* 2. SERVICE PHILOSOPHY ("Not a menu. A system.") */}
      <Container>
        <ServicePhilosophyFormula />
      </Container>

      {/* 3. CORE CAPABILITY SYSTEM (6 Capability Cards) */}
      <Container className="space-y-10">
        <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Capability Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Core Engineering Capabilities
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Each capability is built to operate autonomously or interconnect as a unified product engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECKAI_SERVICES.map((service) => (
            <CapabilityCard key={service.id} service={service} />
          ))}
        </div>
      </Container>

      {/* 4. "FROM IDEA TO INTELLIGENCE" ("Where capability becomes product.") */}
      <Container className="space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Product Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Where capability becomes product.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            How raw ideas systematically evolve from strategic understanding into living, intelligent software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MILESTONES.map((m) => (
            <div
              key={m.step}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2 hover:border-violet-300 dark:hover:border-violet-700/60 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                {m.step} / PHASE
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{m.title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 5. AI SECTION ("AI should do something.") */}
      <Container className="space-y-12">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Applied Machine Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            AI should do something.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We don&rsquo;t add AI because a product needs an AI label. We use intelligence when it makes the product more useful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_CAPABILITY_ROLES.map((ai) => (
            <div
              key={ai.action}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2 hover:border-violet-400 dark:hover:border-violet-700 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase">
                {ai.action}
              </span>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">{ai.focus}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {ai.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 6. AI PRODUCT ARCHITECTURE (Interactive Visual Topology) */}
      <Container>
        <AIArchitectureDiagram />
      </Container>

      {/* 7. STRATEGIC WHEN TO USE AI ("Not every problem needs AI.") */}
      <Container className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <Badge variant="subtle" className="text-xs font-mono">
            STRATEGIC PRAGMATISM
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Not every problem needs AI.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Knowing when <em>not</em> to use AI is just as vital as knowing how to deploy it. We protect our partners from unnecessary cost and fragility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column A: AI Makes Sense */}
          <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50/20 p-8 dark:border-emerald-950/40 dark:bg-emerald-950/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                AI Makes Sense When:
              </h3>
            </div>
            <ul className="space-y-3 pt-2">
              {[
                "Patterns and correlations are difficult or impossible to process manually",
                "Contextual personalization and adaptive behavior matter to the user",
                "Forward-looking time-series prediction creates clear business leverage",
                "Natural language or unstructured perceptual inputs are central to the workflow",
                "Repetitive, high-volume decisions can be significantly assisted",
                "Massive multi-dimensional datasets require high-speed intelligent filtering",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800 dark:text-neutral-200">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: AI Doesn't Need to be Forced */}
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                AI Doesn&rsquo;t Need to be Forced When:
              </h3>
            </div>
            <ul className="space-y-3 pt-2">
              {[
                "A simple, deterministic mathematical rule solves the problem better and faster",
                "The issue is fundamentally a user experience or navigation hierarchy flaw",
                "Probabilistic variance introduces unacceptable legal, clinical, or financial risk",
                "Inference latency and API token costs heavily outweigh user benefits",
                "Conventional relational databases and typed queries solve the problem cleanly",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="text-amber-500 font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* 8. ENGINEERING SECTION ("Built to survive beyond the demo.") */}
      <Container className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            Engineering Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Built to survive beyond the demo.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Prototypes are easy to spin up in a weekend. Production systems demand stability, maintainability, and architectural discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ENGINEERING_PILLARS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2"
            >
              <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                {p.name}
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 9. PRODUCT ENGINEERING LIFECYCLE */}
      <Container>
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-12 dark:border-neutral-800 dark:bg-neutral-900/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              Full Lifecycle Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              From Discovery to Continuous Iteration.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We guide products across every stage: <strong>DISCOVER</strong> $\rightarrow$ <strong>DEFINE</strong> $\rightarrow$ <strong>DESIGN</strong> $\rightarrow$ <strong>BUILD</strong> $\rightarrow$ <strong>INTELLIGENCE</strong> $\rightarrow$ <strong>TEST</strong> $\rightarrow$ <strong>DEPLOY</strong> $\rightarrow$ <strong>ITERATE</strong>.
            </p>
          </div>

          <Link href="/process">
            <Button variant="outline" size="md" arrow="right" className="shrink-0">
              See Our Process →
            </Button>
          </Link>
        </div>
      </Container>

      {/* 10. INTERACTIVE CAPABILITY MAPPING */}
      <Container>
        <CapabilityMapping />
      </Container>

      {/* 11. ORIGINALS CONNECTION */}
      <Container className="space-y-10">
        <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
              Living Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              We use our own products as proof of how we think.
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Explore how RECKAI combines these exact engineering and intelligence systems in our proprietary products.
            </p>
          </div>

          <Link href="/work/originals">
            <Button variant="ghost" size="sm" arrow="right">
              Explore All Originals ({originals.length})
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {originals.map((prod) => (
            <OriginalProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </Container>

      {/* 12. BUILDS CONNECTION */}
      <Container className="space-y-10">
        <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Partner Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              And we build for others.
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Applying the same product rigor, architecture, and applied intelligence to partner products.
            </p>
          </div>

          <Link href="/work/builds">
            <Button variant="ghost" size="sm" arrow="right">
              Explore RECKAI Builds →
            </Button>
          </Link>
        </div>

        {publicBuilds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicBuilds.map((project) => (
              <BuildProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-12 text-center dark:border-neutral-800 dark:bg-neutral-900/40 max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
              Some products are public. Some are still being built.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
              In accordance with our authenticity policy, confidential client builds remain private until authorized for public showcase.
            </p>
            <div className="pt-2">
              <Link href="/work/builds">
                <Button variant="outline" size="sm">
                  View Builds & Privacy Standard →
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>

      {/* 13. TECHNOLOGY SECTION (Categorized by actual use) */}
      <Container className="space-y-10">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            Technology Grounding
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Technologies in Production
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            We select technologies based on reliability, strict type safety, and real developer productivity—not ephemeral industry fads.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-3"
            >
              <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* 14. CUSTOM BUILD CONNECTION & FINAL CTA */}
      <Container>
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-14 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="default" className="text-xs font-mono">
              DIRECT INTAKE
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Need something specific?
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Tell us the problem. We can figure out the architecture, product, and intelligence layer together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/start-project">
              <Button variant="primary" size="lg" arrow="up-right">
                Start a Project ↗
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Technical Team
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
