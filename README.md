# RECKAI — Production Platform Foundation

> **Think. Build. Impact.**  
> An AI-powered product company that imagines, builds and ships intelligent digital products — both independently and for others.

---

## 1. Architectural Model

RECKAI operates on a balanced **two-sided product engine**:

```
                         RECKAI
                            │
              ┌─────────────┴─────────────┐
              │                           │
       RECKAI ORIGINALS             RECKAI BUILDS
              │                           │
       Problems we discover         Ideas customers bring
              │                           │
       Products we create           Products we build
              │                           │
              └─────────────┬─────────────┘
                            │
                     THINK → BUILD
                            │
                     AI + SOFTWARE
```

* **RECKAI Originals**: Independent proprietary products conceived, researched, designed, built, and operated by RECKAI. Current portfolio: *OmniXperience*, *EvolveAura*, *OrganXcell*, and *Finance Platform*.
* **RECKAI Builds**: Intelligent software solutions and full 0-to-1 applications built for founders, businesses, and enterprises via our structured intake pipeline.

---

## 2. Technology Stack

* **Frontend**: Next.js 14 (App Router, React Server Components), React 18, TypeScript (Strict).
* **Styling**: Tailwind CSS with custom design tokens (Electric Violet `#7C3AED`, Deep Charcoal `#111827`, Dark Surface `#121218`).
* **Validation**: Zod (Dual client-side UX feedback and strict server-side validation).
* **Database & ORM**: PostgreSQL with Prisma ORM (`prisma/schema.prisma`).
* **Security**: In-memory sliding-window rate limiting, anonymous IP hashing, security headers (CSP, HSTS, X-Frame-Options).
* **Analytics**: Privacy-friendly event tracking dispatch (`trackEvent`) for high-intent conversion telemetry.
* **SEO**: Dynamic sitemap generation (`/sitemap.xml`), crawler instructions (`/robots.txt`), OpenGraph, and title templates.

---

## 3. Directory Structure

```text
reckai/
├── prisma/
│   └── schema.prisma             # PostgreSQL schema (Product, Inquiry, Contact, CaseStudy, Admin)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout with SEO metadata, Header, and Footer
│   │   ├── page.tsx              # Homepage narrative (Manifesto, Dual Model, Originals Spotlight)
│   │   ├── not-found.tsx         # 404 handler
│   │   ├── error.tsx             # 500 error boundary
│   │   ├── loading.tsx           # Global suspense loading
│   │   ├── sitemap.ts            # Dynamic XML sitemap
│   │   ├── robots.ts             # Robots.txt directives
│   │   ├── work/
│   │   │   ├── page.tsx          # Dual portfolio index
│   │   │   ├── originals/        # RECKAI Originals directory
│   │   │   ├── builds/           # RECKAI Builds directory
│   │   │   └── [slug]/           # Dynamic product detail page
│   │   ├── services/             # Capabilities overview
│   │   ├── process/              # The 8-stage RECKON methodology
│   │   ├── about/                # Brand ethos & etymology (Reckon + AI)
│   │   ├── contact/              # Direct contact page
│   │   ├── start-project/        # Structured client intake engine
│   │   └── api/
│   │       ├── project-inquiries # Rate-limited POST inquiry endpoint
│   │       ├── contact/          # Rate-limited POST contact endpoint
│   │       ├── products/         # Filterable GET products list
│   │       │   └── [slug]/       # GET product by slug
│   │       └── health/           # System operational check
│   ├── components/
│   │   ├── ui/                   # Reusable atomic UI (Button, Card, Badge, Container)
│   │   ├── navigation/           # Header, Footer, and mobile navigation
│   │   ├── layout/               # Grid and container wrappers
│   │   └── forms/                # ProjectInquiryForm, ContactForm
│   ├── data/
│   │   ├── products/             # Typed static data (originals.ts, builds.ts)
│   │   ├── services/             # Capabilities data
│   │   └── navigation/           # Navigation links and CTA hierarchy
│   ├── lib/
│   │   ├── config/               # Site configuration and domain readiness
│   │   ├── db/                   # Prisma client singleton
│   │   ├── validation/           # Zod schemas (inquiry, contact, product)
│   │   ├── security/             # Rate limiting, IP hashing, security headers
│   │   ├── analytics/            # Event tracking utilities
│   │   └── utils/                # Styling helpers (cn)
│   ├── server/
│   │   ├── repositories/         # Product, Inquiry, Contact persistence layers
│   │   └── services/             # Business logic and dispatch workflows
│   └── types/                    # Core TypeScript models (Product, Inquiry, Contact, Analytics)
├── .env.example                  # Environment configuration template
└── tailwind.config.ts            # Design system tokens and styling rules
```

---

## 4. Setup & Local Development

### Prerequisites
* Node.js v18.17+ (v22 recommended)
* npm or pnpm

### Quickstart
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Verify build and types:
   ```bash
   npm run build
   ```

---

## 5. Domain & Production Deployment Readiness

* **Domain Agnostic**: No domain name is hard-coded into components. Configure `NEXT_PUBLIC_SITE_URL` in hosting environment settings (e.g., `https://reckai.com`).
* **Database Connection**: Set `DATABASE_URL` with your PostgreSQL credentials. In decoupled preview modes, fallback memory adapters allow static verification without live database credentials.
* **Email Provider**: Set `EMAIL_SERVICE_KEY` and `INQUIRY_NOTIFICATION_EMAIL` to forward project inquiries to the founding engineering team.
