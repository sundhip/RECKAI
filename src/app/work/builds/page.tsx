import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BuildProjectCard } from "@/components/products/build-card";
import { productService } from "@/server/services/product.service";

export const metadata = {
  title: "RECKAI Builds — Ideas Others Bring. Products We Build.",
  description:
    "RECKAI turns ambitious ideas, complex problems, and emerging opportunities into intelligent digital products. Partner with us for full 0-to-1 product engineering.",
};

const BUILD_PROCESS_STEPS = [
  {
    step: "01",
    name: "UNDERSTAND",
    description: "We immerse ourselves in your domain, business dynamics, user pain points, and commercial realities.",
  },
  {
    step: "02",
    name: "RECKON",
    description: "We challenge initial assumptions, analyze technical viability, and evaluate whether AI is truly the right lever.",
  },
  {
    step: "03",
    name: "DEFINE",
    description: "We establish firm MVP boundaries, user journeys, data contracts, and architectural foundations.",
  },
  {
    step: "04",
    name: "DESIGN",
    description: "We craft editorial-grade, human-centered UI/UX systems that feel natural, calm, and effortlessly intuitive.",
  },
  {
    step: "05",
    name: "ENGINEER",
    description: "We build clean, typed, modular codebases with resilient databases, security standards, and high-performance APIs.",
  },
  {
    step: "06",
    name: "ADD INTELLIGENCE",
    description: "We implement concrete ML pipelines, vision embeddings, agentic workflows, or predictive models where they create genuine leverage.",
  },
  {
    step: "07",
    name: "SHIP",
    description: "We deploy to production with automated CI/CD, telemetry, error tracking, and strict zero-downtime reliability.",
  },
  {
    step: "08",
    name: "IMPROVE",
    description: "We monitor telemetry, iterate based on real feedback, and scale the system as user adoption compounds.",
  },
];

const CAPABILITY_SERVICES = [
  {
    title: "AI Products",
    description: "End-to-end intelligent applications powered by multimodal models, agentic workflows, and predictive reasoning.",
  },
  {
    title: "Web Applications",
    description: "High-performance, editorial-grade Next.js and React platforms engineered for speed, responsiveness, and scale.",
  },
  {
    title: "Mobile Applications",
    description: "Fluid cross-platform and native mobile experiences designed with tactile feedback and offline resilience.",
  },
  {
    title: "Intelligent Automation",
    description: "Autonomous background workflows and deterministic data pipelines that replace manual operations.",
  },
  {
    title: "AI/ML Systems",
    description: "Custom embeddings, RAG architectures, classification pipelines, and fine-tuned open models.",
  },
  {
    title: "Data & Decision Systems",
    description: "Analytical cockpits, deterministic cross-matching algorithms, and real-time decision-support logic.",
  },
  {
    title: "Product Engineering",
    description: "Full-lifecycle 0-to-1 execution from napkin sketch to production-grade, investor-ready software.",
  },
  {
    title: "Custom Platforms",
    description: "Mission-critical internal operating systems, customer portals, and distributed microservice clusters.",
  },
];

export default async function BuildsPage() {
  const builds = await productService.getBuilds();
  const publicBuilds = builds.filter(
    (b) => b.visibility === "PUBLIC" || b.visibility === "ANONYMIZED"
  );

  return (
    <div className="py-20 sm:py-28 space-y-24">
      {/* 1. HERO SECTION */}
      <Container className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="default" className="font-mono text-xs tracking-widest font-bold">
            RECKAI BUILDS
          </Badge>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Customer & Partner Engineering
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl">
          Ideas worth building.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          RECKAI turns ambitious ideas, complex problems, and emerging opportunities into intelligent digital products. We partner with founders, businesses, and organizations to engineer software that thinks deeply and executes flawlessly.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/start-project">
            <Button variant="primary" size="md" arrow="up-right">
              Start a Project ↗
            </Button>
          </Link>
          <Link href="/process">
            <Button variant="outline" size="md" arrow="right">
              See Our Process →
            </Button>
          </Link>
        </div>
      </Container>

      {/* 2. BUILD PHILOSOPHY */}
      <Container className="space-y-12">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Product Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            You bring the problem. We reckon with it.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            RECKAI does not simply receive a feature list and churn out code like a traditional body-shop agency. We are product partners. We scrutinize the friction, test technical feasibility, challenge assumptions, and engineer intelligent systems that last.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILD_PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2 hover:border-violet-300 dark:hover:border-violet-700/60 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                {s.step}
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">{s.name}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* 3. CUSTOMER BUILD LIBRARY */}
      <Container className="space-y-10">
        <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
            Verified Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Customer Builds
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Software systems, AI integrations, and digital platforms engineered for our partners.
          </p>
        </div>

        {publicBuilds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicBuilds.map((project) => (
              <BuildProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-14 text-center dark:border-neutral-800 dark:bg-neutral-900/40 max-w-3xl mx-auto space-y-5">
            <Badge variant="subtle" className="font-mono text-xs">
              PORTFOLIO DISCLOSURE & INTEGRITY
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
              Some products are public. Some are still being built.
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              In accordance with RECKAI&rsquo;s strict authenticity standard, we do not fabricate fictional client logos, synthetic case studies, or mock testimonials. Projects engineered under confidential non-disclosure agreements or currently in active stealth development remain private until public launch authorization.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link href="/start-project">
                <Button variant="primary" size="md">
                  Initiate a Project
                </Button>
              </Link>
              <Link href="/work/originals">
                <Button variant="outline" size="md">
                  Explore RECKAI Originals →
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>

      {/* 4. CONFIDENTIAL PROJECT SECTION */}
      <Container>
        <div className="rounded-3xl border border-neutral-200/80 bg-neutral-950 text-white p-8 sm:p-14 dark:border-neutral-800 space-y-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
              Confidentiality First
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Not everything we build can be shown.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Some of the products we work on are private, early-stage, or confidential. What we can show is only part of what we build. We respect proprietary IP and sign mutual non-disclosure agreements prior to deep technical discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-2">
              <div className="text-xs font-mono text-violet-400 font-semibold">DISCIPLINE 01</div>
              <h3 className="text-base font-bold text-white">Stealth Founder Incubations</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pre-launch architectures and investor prototypes kept strictly confidential until public unveiling.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-2">
              <div className="text-xs font-mono text-violet-400 font-semibold">DISCIPLINE 02</div>
              <h3 className="text-base font-bold text-white">Enterprise Workflow Logic</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Custom operational automation engines and data systems embedded deeply within proprietary back-offices.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 space-y-2">
              <div className="text-xs font-mono text-violet-400 font-semibold">DISCIPLINE 03</div>
              <h3 className="text-base font-bold text-white">Isolated Security Enclaves</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Mission-critical architectures engineered for HIPAA, SOC2, and data-sovereign enterprise environments.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link href="/contact">
              <Button variant="outline" size="md" arrow="up-right" className="bg-transparent text-white border-neutral-700 hover:bg-neutral-850">
                Talk to RECKAI ↗
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* 5. SERVICES CONNECTION ("What we can build") */}
      <Container className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Engineering Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            What we can build.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            From specialized machine intelligence modules to complete production-scale web and mobile ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITY_SERVICES.map((srv) => (
            <div
              key={srv.title}
              className="rounded-2xl border border-neutral-200/80 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 space-y-2 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">{srv.title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {srv.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link href="/services">
            <Button variant="outline" size="sm" arrow="right">
              View Detailed Services Architecture →
            </Button>
          </Link>
        </div>
      </Container>

      {/* 6. PROJECT INTAKE CALL TO ACTION */}
      <Container>
        <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-r from-violet-50/50 via-white to-neutral-50/50 p-8 sm:p-14 dark:border-violet-900/40 dark:from-violet-950/20 dark:via-neutral-900 dark:to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="default" className="text-xs font-mono">
              COLLABORATION INTAKE
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Have something worth building?
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Tell us what you&rsquo;re thinking. We&rsquo;ll reckon with the problem before we start writing the solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/start-project">
              <Button variant="primary" size="lg" arrow="up-right">
                Start a Project ↗
              </Button>
            </Link>
            <Link href="/work/originals">
              <Button variant="outline" size="lg">
                Explore RECKAI Originals
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
