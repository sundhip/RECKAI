import { OriginalProduct } from "@/types/product";

export const RECKAI_ORIGINALS: OriginalProduct[] = [
  {
    id: "original-omnipresence",
    slug: "omnipresence",
    name: "OmniPresence",
    tagline: "Your Everyday Life, Intelligently Unified.",
    category: "Personal Intelligence Platform",
    type: "ORIGINAL",
    shortDescription:
      "OmniPresence pairs digital wardrobe management, wear analytics, and context-driven outfit planning with OP AI — curating what to wear from your real closet.",
    description:
      "OmniPresence rethinks personal productivity and lifestyle coordination. Rather than fragmenting daily decisions across disconnected single-purpose apps, OmniPresence unifies digital wardrobe tracking, wear analytics, and context-driven outfit planning with OP AI.",
    problem:
      "Everyday lifestyle decisions—such as wardrobe choices, clothing wear frequency, and outfit planning—are scattered across closets, spreadsheets, and disconnected tools without intelligent coordination.",
    solution:
      "An intelligent lifestyle platform pairing digital wardrobe management, wear analytics, and context-driven outfit planning with OP AI to curate what to wear from your real closet.",
    approach:
      "Combines computer vision garment attributes, wear telemetry, and occasion-specific contextual matching algorithms.",
    
    problemDeep: {
      friction:
        "Every morning, high-performing individuals spend non-trivial cognitive energy deciding what to wear, adjusting calendars, checking weather, coordinating routines, and assessing daily spending bandwidth. Today, this requires checking 4 to 6 separate, isolated mobile applications.",
      whyItMatters:
        "Decision fatigue drains mental clarity before the workday even begins. Fragmented single-purpose tools fail because human life is deeply interdependent: wardrobe depends on the weather and the day's meetings; spending depends on planned events; health routines depend on sleep and calendar pacing.",
      whoExperiencesIt:
        "Founders, executives, creatives, and modern professionals seeking cognitive flow and intentional lifestyle execution.",
      whyReckaiChoseIt:
        "We recognized that applied artificial intelligence is mature enough to connect disparate contextual streams into a calm, proactive personal operating layer.",
    },

    ideaTransition: {
      observation:
        "People spend 15–20 minutes every morning toggling between weather apps, calendars, wardrobe choices, and banking dashboards.",
      coreIdea:
        "Unify lifestyle context into a single morning synthesis engine that makes intelligent recommendations without intrusive notifications.",
      hypothesis:
        "Combining multimodal vision (for clothing) with deterministic scheduling algorithms will eliminate morning friction and improve daily clarity.",
      productRealization:
        "OmniXperience: an integrated ecosystem featuring wardrobe intelligence, circadian routine adaptation, schedule buffering, and financial pacing.",
    },

    howWeReckoned: [
      {
        stage: "01",
        title: "Understand Cognitive Friction",
        description:
          "Mapped every daily micro-decision across wardrobe, calendar, skincare, and finance to identify compounding cognitive friction.",
      },
      {
        stage: "02",
        title: "Multimodal Vision Feasibility",
        description:
          "Prototyped visual embeddings for clothing item tagging, color-harmony rules, and weather compatibility scoring.",
      },
      {
        stage: "03",
        title: "Contextual Interlock Modeling",
        description:
          "Architected the relational graph connecting weather telemetry, calendar events, aesthetic preferences, and daily expense safety curves.",
      },
      {
        stage: "04",
        title: "Calm Interface Prototyping",
        description:
          "Designed an editorial, high-clarity interface that presents proactive recommendations without chaotic dashboard clutter.",
      },
      {
        stage: "05",
        title: "Iterative Refinement",
        description:
          "Continuously refined inference speed and local data privacy guardrails to keep personal lifestyle data secure.",
      },
    ],

    solutionDeep: {
      overview:
        "OmniXperience acts as an intelligent personal operating system. It ingests contextual feeds and presents a unified daily brief that coordinates style, schedule, and personal pacing.",
      userExperience:
        "A serene morning overview showing today's inferred outfit (synchronized with meetings and weather), automatic schedule buffers, adapted skincare steps, and spending headroom.",
      systemBehavior:
        "Autonomous local agents run daily batch synthesis, evaluating meteorological forecasts against wardrobe inventory and calendar demands.",
      keyDecisions: [
        "Proactive briefs over chat interfaces: eliminating typing prompts in favor of ready-to-use recommendations.",
        "Zero data selling or third-party advertising telemetry.",
        "Deterministic boundaries for finance: machine learning offers insights, but strict rule systems enforce safety ceilings.",
      ],
    },

    aiCapabilities: [
      "Multimodal Wardrobe & Style Analysis",
      "Dynamic Context-Aware Daily Scheduling",
      "Algorithmic Skincare Routine Adaptation",
      "Contextual Personal Finance Pacing",
    ],

    aiCapabilitiesDeep: [
      {
        name: "Multimodal Wardrobe Vision",
        role: "Visual classification & outfit pairing",
        implementation:
          "Extracts garment attributes (fabric weight, formal level, color palette) and cross-references daily weather telemetry and meeting formality.",
      },
      {
        name: "Circadian Calendar Buffering",
        role: "Energy-aware schedule pacing",
        implementation:
          "Evaluates meeting density and proactively recommends 15–30 minute cognitive recovery buffers prior to high-stakes presentations.",
      },
      {
        name: "Adaptive Skincare Matrix",
        role: "Environment-reactive routine adjustment",
        implementation:
          "Adjusts hydration and UV-protection recommendations based on real-time localized humidity and UV-index telemetry.",
      },
      {
        name: "Contextual Expense Pacing",
        role: "Discretionary spending guardrails",
        implementation:
          "Simulates end-of-month liquidity curves before approving discretionary calendar commitments.",
      },
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Multimodal Vision Models",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    techStackCategorized: {
      frontend: ["Next.js 14 App Router", "React 18", "Tailwind CSS", "Framer-inspired CSS transitions"],
      backend: ["Next.js Server Actions", "Node.js runtime", "Edge Middleware"],
      database: ["PostgreSQL", "Prisma ORM", "Vector Embeddings Storage"],
      aiMl: ["Multimodal Vision APIs", "Contextual Heuristic Rules", "Time-Series Forecasting"],
      infrastructure: ["Edge Deployment", "Secure Secret Enclaves", "Automated CI/CD"],
    },

    challenges: [
      {
        title: "Subjective Style Representation",
        description:
          "Formalizing aesthetic harmony and personal style preferences into machine-verifiable embeddings without producing generic fashion clichés.",
      },
      {
        title: "Context Interdependence",
        description:
          "Balancing conflicting constraints—such as a rainy forecast requiring casual boots alongside an executive meeting requiring formal attire.",
      },
    ],

    currentStage: "Active Development",

    futureRoadmap: {
      now: ["Core wardrobe tagging & vision pipeline", "Context-aware morning briefing generation", "Schedule buffer recommendations"],
      next: ["Algorithmic skincare adaptations based on live environmental sensors", "Discretionary liquidity simulations"],
      future: ["Fully encrypted on-device inference for complete biometric and personal data privacy"],
    },

    images: ["/images/projects/omnipresence.png"],
    featured: true,
    status: "PUBLIC",
    createdAt: "2026-01-15T00:00:00Z",
    updatedAt: "2026-10-01T00:00:00Z",
  },

  {
    id: "original-evolveaura",
    slug: "evolveaura",
    name: "EvolveAura",
    tagline: "Redirect Your Dopamine. Level Up in Real Life.",
    category: "Cognitive Wellbeing & Productivity",
    type: "ORIGINAL",
    shortDescription:
      "A psychology-driven digital detox platform replacing instant-gratification loops of Reels, Shorts, and TikTok with a real-life gamified evolution system.",
    description:
      "EvolveAura bridges the gap between deep mental wellbeing and intentional daily execution. By replacing algorithmic dopamine loops with a real-life gamified evolution system, it empowers users through 4 calibrated archetypes (Scholar, Warrior, Sage, Creator).",
    problem:
      "Conventional productivity tools treat humans like linear task processors, ignoring burnout, cognitive fatigue, and compulsive digital distraction.",
    solution:
      "A psychologically informed system that measures daily cognitive capacity, scores digital detox progress, and generates adaptive, gamified quest paths tailored to real human rhythm.",
    approach:
      "Psychometric scoring algorithms paired with adaptive reinforcement feedback loops to incentivize sustained focus without burnout.",

    problemDeep: {
      friction:
        "Knowledge workers sit before endless to-do lists while battling constant notification fragmentation, dopamine exhaustion, and compulsive screen addiction.",
      whyItMatters:
        "Traditional productivity software treats humans like task robots—more checkboxes, more alerts, more stress. It fails to account for biological cognitive fatigue or attention depletion.",
      whoExperiencesIt:
        "Software engineers, designers, writers, students, and professionals suffering from chronic context-switching and mental burnout.",
      whyReckaiChoseIt:
        "We wanted a productivity tool that protects human attention rather than exploiting it—one that treats habit progression as an engaging, archetypal quest.",
    },

    ideaTransition: {
      observation:
        "Linear to-do lists trigger anxiety when unfinished, leading to avoidance, doom-scrolling, and compounded guilt.",
      coreIdea:
        "Reframe daily productivity through cognitive pacing and archetypal character paths (Scholar, Warrior, Sage, Creator).",
      hypothesis:
        "Gamifying daily execution around attention detox scores and tailored archetypes will build durable habits without inducing burnout.",
      productRealization:
        "EvolveAura: a cognitive wellbeing companion featuring psychometric intake, daily quest generation, and detox scoring.",
    },

    howWeReckoned: [
      {
        stage: "01",
        title: "Attention Friction Research",
        description:
          "Audited behavioral patterns surrounding screen addiction, doom-scrolling, and attention fragmentation.",
      },
      {
        stage: "02",
        title: "Four Archetypes Formulation",
        description:
          "Formulated the 4 Core Paths: Scholar (intellectual rigor), Warrior (discipline & grit), Sage (mindfulness & equilibrium), and Creator (expressive flow).",
      },
      {
        stage: "03",
        title: "Cognitive Scoring Architecture",
        description:
          "Engineered a daily 0–100 Cognitive State algorithm that factors in sleep, deep work intervals, and screen-free intervals.",
      },
      {
        stage: "04",
        title: "Quest Generation Prototyping",
        description:
          "Built a procedural quest generation engine that scales task difficulty based on real-time cognitive readiness.",
      },
      {
        stage: "05",
        title: "Ethical Guardrails Verification",
        description:
          "Strictly ensured zero addictive dark patterns: no infinite scrolls, no manipulative push notification alerts.",
      },
    ],

    solutionDeep: {
      overview:
        "EvolveAura replaces endless to-do lists with structured, gamified quests and intentional digital detox rituals.",
      userExperience:
        "Users check in with a brief morning cognitive pulse, choose their active path (Scholar, Warrior, Sage, Creator), and receive 3 calibrated quests for the day.",
      systemBehavior:
        "The system evaluates task completion rates, screen-free intervals, and subjective clarity to compute an ongoing Attention Detox Index.",
      keyDecisions: [
        "No clinically diagnostic claims: clearly positioned as a behavioral productivity companion, not medical software.",
        "Calm visual hierarchy with muted earth and violet tones to avoid sensory overstimulation.",
        "Hard cap of 3 priority quests per day to prevent overwhelm.",
      ],
    },

    aiCapabilities: [
      "Psychological & Cognitive State Evaluation",
      "Dynamic Adaptive Quest Generation",
      "Digital Detox Index & Habit Scoring",
      "Personalized Cognitive Recovery Paths",
    ],

    aiCapabilitiesDeep: [
      {
        name: "Cognitive State Scoring",
        role: "Daily capacity estimation",
        implementation:
          "Aggregates behavioral check-ins, focus session lengths, and screen-free periods to compute a 0–100 daily readiness score.",
      },
      {
        name: "Adaptive Quest Generator",
        role: "Calibrated daily task generation",
        implementation:
          "Procedurally synthesizes actionable quests matching the user's chosen archetype and daily energy capacity.",
      },
      {
        name: "Detox Index Calculator",
        role: "Habit reinforcement feedback",
        implementation:
          "Computes evening recovery scores based on uninterrupted deep-work windows and screen-free evening boundaries.",
      },
    ],

    technologies: [
      "React / Next.js",
      "TypeScript",
      "Behavioral Analytics Engine",
      "Tailwind CSS",
    ],

    techStackCategorized: {
      frontend: ["Next.js 14", "React 18", "Tailwind CSS", "Interactive Archetype Dials"],
      backend: ["Next.js Server Actions", "Node.js"],
      database: ["PostgreSQL", "Local Encrypted Client Cache"],
      aiMl: ["Procedural Quest Generation", "Heuristic Behavioral Scoring"],
      infrastructure: ["Edge Hosting", "Zero Third-Party Ad Trackers"],
    },

    challenges: [
      {
        title: "Avoiding Toxic Gamification",
        description:
          "Gamification often creates anxiety through broken streaks. We had to design non-punitive reset mechanics that encourage sustainable recovery.",
      },
      {
        title: "Subjective Self-Reporting Calibration",
        description:
          "Normalizing user-reported energy levels to ensure quest difficulty accurately reflects actual daily bandwidth.",
      },
    ],

    currentStage: "Active Development",

    futureRoadmap: {
      now: ["Cognitive state intake & 4 archetypal paths", "Daily 3-quest procedural generation", "Detox Index calculation"],
      next: ["Ambient desktop distraction shields", "Reflective journaling modules"],
      future: ["Wearable biometric synchronization for automated HRV and sleep input"],
    },

    images: ["/images/projects/evolveaura.png"],
    featured: true,
    status: "PUBLIC",
    createdAt: "2026-02-10T00:00:00Z",
    updatedAt: "2026-10-01T00:00:00Z",
  },

  {
    id: "original-organxcell",
    slug: "organxcell",
    name: "OrganXcell",
    tagline: "India's Organ Donation Coordination Platform — Making Every Match Count",
    category: "Clinical Logistics & Healthcare Network",
    type: "ORIGINAL",
    shortDescription:
      "India's organ donation coordination platform — AI-powered matching, real-time transport tracking, digital consent, and simple dashboards connecting 20+ hospitals (SIH 2025).",
    description:
      "OrganXcell addresses the critical bottleneck in life-saving organ transplants. It calculates HLA/biological compatibility, urgency rankings, and logistical transit feasibility in real time to accelerate decision-making for clinical teams.",
    problem:
      "Organ allocation workflows remain manual, fragmented, and geographically constrained, leading to viable organ degradation and tragic allocation delays.",
    solution:
      "A deterministic, high-integrity matching platform that calculates multi-variable compatibility and logistics speed, providing transplant centers with immediate, auditable recommendations.",
    approach:
      "Algorithmic HLA cross-matching matrix paired with real-time geographical transit optimization and strict clinical auditability.",

    problemDeep: {
      friction:
        "When a donor organ becomes available, surgical teams face a critical, decaying countdown: viable donor organs degrade within hours (cold ischemia time). Allocation processes still rely heavily on fragmented phone calls, manual spreadsheet cross-referencing, and legacy databases.",
      whyItMatters:
        "Minutes matter in organ viability. Allocation delays or logistical miscalculations can render a viable donor organ unusable or lead to suboptimal recipient compatibility.",
      whoExperiencesIt:
        "Transplant coordinators, clinical logistics teams, donor procurement organizations, and waitlisted patients.",
      whyReckaiChoseIt:
        "This is an urgent domain where algorithmic precision, high-integrity data structures, and real-time computation provide immense life-saving value.",
    },

    ideaTransition: {
      observation:
        "Clinical coordinators spend vital hours calculating compatibility rankings manually while cold ischemia clocks tick down.",
      coreIdea:
        "Build a deterministic decision-support matching engine that instantly cross-references HLA biological compatibility, medical urgency, and real-time transit routing.",
      hypothesis:
        "Providing clinical teams with auditable, instantaneous multi-variable compatibility scoring will compress allocation decision windows significantly.",
      productRealization:
        "OrganXcell: an intelligent clinical decision-support platform featuring HLA cross-matching, cold ischemia tracking, and immutable audit trails.",
    },

    howWeReckoned: [
      {
        stage: "01",
        title: "Clinical Protocol Research",
        description:
          "Studied standard HLA compatibility parameters, panel-reactive antibody (PRA) thresholds, and organ procurement organization (OPO) workflows.",
      },
      {
        stage: "02",
        title: "Strict Non-Replacement Mandate",
        description:
          "Formulated the core product rule: OrganXcell is an intelligent decision-support platform; all final medical allocation decisions remain strictly in clinical hands.",
      },
      {
        stage: "03",
        title: "Deterministic Match Matrix",
        description:
          "Engineered a mathematical HLA cross-matching matrix that guarantees zero probabilistic hallucination and complete reproducibility.",
      },
      {
        stage: "04",
        title: "Transit Logistics Integration",
        description:
          "Integrated geographical routing algorithms to factor ground and air transit times into organ cold ischemia viability limits.",
      },
      {
        stage: "05",
        title: "Cryptographic Audit Trails",
        description:
          "Architected tamper-evident event logging to ensure regulatory compliance and complete allocation transparency.",
      },
    ],

    solutionDeep: {
      overview:
        "OrganXcell acts as a centralized clinical decision-support command center. It models biological compatibility, recipient priority tiers, and transit feasibility in real time.",
      userExperience:
        "Transplant teams view a clean priority dashboard ranking candidates by compatibility, medical urgency, and estimated transit arrival time.",
      systemBehavior:
        "Upon donor registration, the platform runs instantaneous multi-variable matching across the waitlist and initiates live cold ischemia countdowns.",
      keyDecisions: [
        "Zero AI replacement of medical staff: pure decision support with full clinical oversight.",
        "Deterministic algorithms only for biological matching: zero black-box generative models in critical matching logic.",
        "Strict HIPAA/clinical privacy isolation standards.",
      ],
    },

    aiCapabilities: [
      "Multi-Parametric Recipient Prioritization",
      "HLA & Biological Donor Compatibility Logic",
      "Real-Time Cold Ischemia Time Logistics Optimization",
      "Automated Regulatory & Clinical Audit Logging",
    ],

    aiCapabilitiesDeep: [
      {
        name: "HLA Cross-Match Engine",
        role: "Biological compatibility verification",
        implementation:
          "Calculates 6-antigen compatibility and donor-specific antibody (DSA) risk factors using deterministic scoring matrices.",
      },
      {
        name: "Transit Logistics Optimizer",
        role: "Viability preservation",
        implementation:
          "Models travel duration across flight and ground corridors against cold ischemia decay curves to verify recipient reachability.",
      },
      {
        name: "Auditable Allocation Ledger",
        role: "Regulatory compliance",
        implementation:
          "Logs every algorithmic score and clinical verification step to an immutable cryptographic event log for hospital compliance review.",
      },
    ],

    technologies: [
      "Next.js / Node.js",
      "TypeScript",
      "Relational Clinical Graph",
      "PostgreSQL",
    ],

    techStackCategorized: {
      frontend: ["Next.js 14", "React 18", "Tailwind CSS", "High-Precision Real-Time Dashboards"],
      backend: ["Node.js Microservices", "Fast API Routes", "Strict Type Validation"],
      database: ["PostgreSQL (Relational Patient & Organ Graph)", "Cryptographic Audit Ledger"],
      aiMl: ["Multi-Parametric Ranking Algorithms", "Geo-Transit Optimization"],
      infrastructure: ["HIPAA-Ready Cloud Enclaves", "High-Availability Redundant Failover"],
    },

    challenges: [
      {
        title: "Life-Critical Determinism",
        description:
          "Unlike commercial software, matching logic cannot tolerate probabilistic variance or hallucinations. Every ranking must be mathematically provable.",
      },
      {
        title: "Dynamic Cold Ischemia Variables",
        description:
          "Accounting for weather delays, flight cancellations, and surgical team availability while managing expiring organ viability windows.",
      },
    ],

    currentStage: "Active Development",

    futureRoadmap: {
      now: ["Core HLA 6-antigen matching matrix", "Waitlist prioritization queue", "Cold ischemia countdown tracker"],
      next: ["Integrated air/ground logistics transit API", "Multi-hospital regional test sandbox"],
      future: ["National organ bank federation protocol with decentralized compliance verification"],
    },

    images: ["/images/projects/organxcell.png"],
    featured: true,
    status: "PUBLIC",
    createdAt: "2026-03-01T00:00:00Z",
    updatedAt: "2026-10-01T00:00:00Z",
  },

  {
    id: "original-prosperhigh",
    slug: "prosperhigh",
    name: "ProsperHigh",
    tagline: "Understand Your Investments. Understand Why.",
    category: "Explainable Multi-Agent Investment Intelligence",
    type: "ORIGINAL",
    shortDescription:
      "ProsperHigh combines live market data, portfolio risk analysis, financial research, and multi-agent AI reasoning to provide personalized, explainable investment insights.",
    description:
      "ProsperHigh delivers explainable decision intelligence for modern investors. Powered by 7 domain intelligence agents, a personalized risk engine, and citation-backed research (RAG), it demystifies complex financial research so you understand not just what to invest in, but why.",
    problem:
      "Retail and institutional investors navigate opaque financial metrics and black-box trading signals without verifiable source citations or individualized risk calibration.",
    solution:
      "An explainable multi-agent investment platform combining 7 specialized agents, real-time market telemetry, and citation-backed document analysis.",
    approach:
      "Multi-agent collaborative reasoning (Market, Technical, News, Fundamental, Regulatory, Risk, Synthesis) tracing every insight to verified corporate disclosures.",

    problemDeep: {
      friction:
        "Nearly every personal finance and small business accounting app shows pretty charts of what you spent last month. But people don't live in last month—they need to know if they can safely afford an expense three weeks from now.",
      whyItMatters:
        "Passive backward-looking accounting leaves users blind to upcoming liquidity crunches, irregular expense compounding, and optimal savings windows.",
      whoExperiencesIt:
        "Founders, freelancers with volatile monthly income, professionals, and small business operators managing dynamic cashflows.",
      whyReckaiChoseIt:
        "We believe financial software should be forward-looking: helping users model their financial trajectory instead of merely categorizing past receipts.",
    },

    ideaTransition: {
      observation:
        "Spreadsheets are still the #1 tool for financial planning because commercial apps only provide static backward-looking categorization.",
      coreIdea:
        "Build a proactive financial decision engine that models future liquidity curves based on recurring volatility and goals.",
      hypothesis:
        "Simulating forward-looking cashflow scenarios reduces financial anxiety and prevents cashflow shortfalls before they occur.",
      productRealization:
        "RECKAI Finance: a predictive cashflow platform with anomaly detection, forward-looking pacing, and capital allocation simulations.",
    },

    howWeReckoned: [
      {
        stage: "01",
        title: "Cashflow Failure Analysis",
        description:
          "Studied how volatile income earners make financial forecasting errors and where traditional budgeting apps fail.",
      },
      {
        stage: "02",
        title: "Time-Series Predictive Modeling",
        description:
          "Engineered probabilistic cashflow trajectory models that factor in recurring bills, irregular client payments, and seasonal variances.",
      },
      {
        stage: "03",
        title: "Deterministic Safety Rules",
        description:
          "Implemented strict mathematical guardrails: machine learning suggests pacing curves, but hard double-entry accounting rules verify ledger integrity.",
      },
      {
        stage: "04",
        title: "Intuitive Trajectory Visualization",
        description:
          "Designed a forward-looking timeline graph that visualizes estimated account balances 30, 60, and 90 days into the future.",
      },
      {
        stage: "05",
        title: "Ethical Integrity Standard",
        description:
          "No affiliate credit card push notifications, no predatory loan recommendations, and no fabricated returns.",
      },
    ],

    solutionDeep: {
      overview:
        "RECKAI Finance provides forward-looking financial foresight. It tracks income volatility, maps future burn rate, and computes safe-to-spend allowances in real time.",
      userExperience:
        "Users see their financial trajectory line curving into the future, with automated alerts flagging upcoming dip points weeks before they occur.",
      systemBehavior:
        "The engine continuously recalculates trajectory models whenever new transactions or invoices are recorded.",
      keyDecisions: [
        "No promises of financial performance or trading returns: purely focused on cashflow management and clarity.",
        "Zero monetization through high-interest credit card affiliate recommendations.",
        "Client-side encryption for sensitive ledger details.",
      ],
    },

    aiCapabilities: [
      "Predictive Cashflow & Liquidity Forecasting",
      "Automated Anomaly & Run-Rate Detection",
      "Intelligent Capital Allocation Suggestions",
    ],

    aiCapabilitiesDeep: [
      {
        name: "Time-Series Liquidity Forecaster",
        role: "Forward cashflow trajectory",
        implementation:
          "Models 30-to-90 day account balances using historical volatility curves and recurring commitment schedules.",
      },
      {
        name: "Spending Anomaly & Creep Detector",
        role: "Subscription & run-rate alerts",
        implementation:
          "Detects stealth price increases in recurring subscriptions and flags compounding category budget leaks.",
      },
      {
        name: "Dynamic Capital Pacing Engine",
        role: "Safe-to-spend allowance",
        implementation:
          "Calculates daily discretionary spending headroom based on upcoming tax obligations and savings thresholds.",
      },
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Time-Series Forecasting Models",
      "Tailwind CSS",
    ],

    techStackCategorized: {
      frontend: ["Next.js 14", "React 18", "Tailwind CSS", "High-Performance Financial Curve Renderers"],
      backend: ["Next.js Server Actions", "Node.js"],
      database: ["PostgreSQL (Double-Entry Ledger Schema)", "Encrypted User Enclave"],
      aiMl: ["Time-Series Cashflow Forecasting", "Anomaly Detection Algorithms"],
      infrastructure: ["Edge API Layer", "SOC2-Compliant Encrypted Cloud"],
    },

    challenges: [
      {
        title: "Volatile Income Prediction",
        description:
          "Accurately modeling cashflows for freelancers and founders whose income fluctuates widely month to month.",
      },
      {
        title: "Balancing Precision with Usability",
        description:
          "Presenting complex time-series forecast confidence intervals without overwhelming users with statistical jargon.",
      },
    ],

    currentStage: "Active Development",

    futureRoadmap: {
      now: ["Forward-looking cashflow trajectory graph", "Recurring bill anomaly detector", "Safe-to-spend daily pacing"],
      next: ["Scenario simulation sandbox ('What if I hire?' or 'What if invoice is late?')"],
      future: ["Automated recurring subscription negotiation and optimization protocols"],
    },

    images: ["/images/projects/prosperhigh.png"],
    featured: true,
    status: "PUBLIC",
    createdAt: "2026-04-12T00:00:00Z",
    updatedAt: "2026-10-01T00:00:00Z",
  },
];
