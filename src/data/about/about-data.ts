import {
  CompanyPrinciple,
  ReckonPillar,
  CulturePrinciple,
  ProofNode,
  ResponsibleAIPillar,
} from "@/types/about";

export const RECKON_PHILOSOPHY_PILLARS: ReckonPillar[] = [
  {
    name: "QUESTION",
    tagline: "Don't assume the first answer is the right one.",
    description:
      "We interrogate requirements, test baseline assumptions, and identify hidden constraints before committing to code.",
  },
  {
    name: "UNDERSTAND",
    tagline: "Understand the actual problem before designing the solution.",
    description:
      "We isolate the root human or operational friction rather than patching over superficial symptoms.",
  },
  {
    name: "SIMPLIFY",
    tagline: "Remove complexity that doesn't create value.",
    description:
      "Every line of code and every UI component introduces cognitive and operational debt. Complexity must earn its place.",
  },
  {
    name: "INTELLIGENTIZE",
    tagline: "Use AI where it genuinely improves the product.",
    description:
      "We deploy AI only when computational reasoning, embeddings, or neural perception create tangible leverage over deterministic logic.",
  },
  {
    name: "EVOLVE",
    tagline: "Treat shipping as the beginning of learning.",
    description:
      "Production deployment is not the finish line. We observe real behavior, measure telemetry, and iteratively refine the system.",
  },
];

export const COMPANY_PRINCIPLES: CompanyPrinciple[] = [
  {
    number: "01",
    title: "Problems Before Technology",
    quote: "Start with the problem, not the technology.",
    description:
      "Technology is an implementation detail. We begin by asking what needs to be solved, for whom, and why existing solutions fall short.",
  },
  {
    number: "02",
    title: "Product Before Features",
    quote: "A product is more than a collection of features.",
    description:
      "Coherence beats quantity. A cohesive, focused tool with three polished workflows outperforms a sprawling maze of disjointed toggles.",
  },
  {
    number: "03",
    title: "Intelligence With Purpose",
    quote: "AI should solve something, not decorate something.",
    description:
      "We reject cosmetic AI wrappers. If a deterministic algorithm or well-structured database solves it better, we use code—not models.",
  },
  {
    number: "04",
    title: "Simple When Possible",
    quote: "Complexity should earn its place.",
    description:
      "The easiest system to maintain, scale, and reason about is the simplest one that completely solves the problem. We ruthlessly prune unnecessary moving parts.",
  },
  {
    number: "05",
    title: "Ship and Learn",
    quote: "Real products teach you things prototypes cannot.",
    description:
      "Friction only reveals itself in production when real people interact with real data. We build deliberate vertical slices and ship early to learn faster.",
  },
  {
    number: "06",
    title: "Build for the Real World",
    quote: "Production matters.",
    description:
      "Offline states, network latency, edge cases, error recovery, and system resilience are not afterthoughts. Software must endure chaotic real-world environments.",
  },
];

export const CULTURE_PRINCIPLES: CulturePrinciple[] = [
  {
    keyword: "CURIOUS",
    headline: "Driven by inquiry, not dogma.",
    description:
      "We ask fundamental questions, study adjacent disciplines, and refuse to accept 'that's how it's always been done.'",
  },
  {
    keyword: "DIRECT",
    headline: "Intellectual honesty over pleasant ambiguity.",
    description:
      "We communicate trade-offs plainly, identify flaws early, and speak truthfully about feasibility and limitations.",
  },
  {
    keyword: "CRAFT-DRIVEN",
    headline: "Obsessive care in every layer.",
    description:
      "From database schema indices to responsive micro-spacing, we take pride in clean execution and quiet elegance.",
  },
  {
    keyword: "TECHNICAL",
    headline: "Rigorous engineering foundations.",
    description:
      "We understand systems from first principles—data structures, network protocols, memory models, and algorithmic complexity.",
  },
  {
    keyword: "USER-FOCUSED",
    headline: "Grounding in human utility.",
    description:
      "We design for the person on the other side of the glass. Software exists to amplify human capability, not showcase engineering vanity.",
  },
  {
    keyword: "ITERATIVE",
    headline: "Compounding incremental perfection.",
    description:
      "We prefer fast, disciplined iteration cycles over massive, speculative bets that lack feedback loops.",
  },
];

export const RESPONSIBLE_AI_PILLARS: ResponsibleAIPillar[] = [
  {
    title: "Appropriate Usage",
    description:
      "We deploy AI models only where probabilistic reasoning creates verifiable user leverage, strictly falling back to deterministic software elsewhere.",
  },
  {
    title: "Data Privacy & Governance",
    description:
      "User data belongs to users. We enforce strict data minimization, client-side encryption where possible, and never train public models on proprietary client data.",
  },
  {
    title: "Deterministic Safety & Security",
    description:
      "Non-deterministic model outputs are bounded by schema validators (Zod/Pydantic), strict type checks, and defensive sanitation pipelines.",
  },
  {
    title: "Transparency & Explainability",
    description:
      "We build systems that make their reasoning visible. Users should always understand when AI is acting, why a decision was made, and how to override it.",
  },
  {
    title: "Human Oversight & Agency",
    description:
      "AI augments human judgment; it does not silently replace it. Critical or high-impact actions always require human confirmation.",
  },
  {
    title: "Reliability & Failure Modes",
    description:
      "Models fail, hallucinate, and face rate limits. We design graceful degraded states and deterministic fallbacks so systems remain operable under failure.",
  },
];

export const PROOF_CHAIN: ProofNode[] = [
  {
    stage: "01",
    title: "WHAT WE BELIEVE",
    description:
      "Technology is most useful when it solves something real through disciplined reasoning and purposeful intelligence.",
  },
  {
    stage: "02",
    title: "HOW WE WORK",
    description:
      "An 8-stage methodology from understanding friction to engineering type-safe software and continuous production evolution.",
  },
  {
    stage: "03",
    title: "WHAT WE BUILD",
    description:
      "Proprietary RECKAI Originals and high-impact custom systems built alongside ambitious founders and organizations.",
  },
  {
    stage: "04",
    title: "WHAT WE SHIP",
    description:
      "Production-grade, verified software operating live in the real world with measurable reliability and zero vanity metrics.",
  },
];
