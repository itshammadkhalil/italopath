# ItaloPath

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Security](https://img.shields.io/badge/Security-Audited_0_Vulnerabilities-emerald?style=for-the-badge&logo=shield)](https://github.com/itshammadkhalil/italopath)
[![Deployment](https://img.shields.io/badge/Hostinger-Production_Ready-6c5ce7?style=for-the-badge&logo=hostinger&logoColor=white)](https://italopath.tech)
[![Domain](https://img.shields.io/badge/Live_Domain-italopath.tech-10b981?style=for-the-badge)](https://italopath.tech)

**Elite Higher Education Advisory Platform for Italian Public Universities & Regional DSU Scholarships**

---

## 📖 Executive Overview

**ItaloPath** is a modern, high-performance web platform built to provide Pakistani students with an ethical, transparent, and comprehensive roadmap for studying in Italy. Designed as an anti-agency alternative to high-fee sub-agents, ItaloPath guides applicants through each critical phase of the Italian academic journey:
- **Degree Equivalence & Attestation:** IBCC, HEC, and MOFA Apostille workflows.
- **Credential Evaluation:** CIMEA Statement of Comparability and consular Declaration of Value (DOV).
- **Universitaly Processing:** Official non-EU pre-enrolment portal filings.
- **Regional DSU Scholarships:** Needs-based grants up to €8,500/year, 100% tuition waivers, and free canteens via ISEE Parificato calculations.
- **Study Visa Dossier Preparation:** Strict VFS document audits, financial proof structuring, and mock embassy interviews.

Official Portal: [https://italopath.tech](https://italopath.tech)  
Official Communications: [info@italopath.tech](mailto:info@italopath.tech)  
Target Cycles: **2027/2028 Academic Year** (Primary: Fall 2027 Intake • Secondary: 2028 Planning)

---

## 🛠️ Tech Stack & System Specifications

| Layer | Technology | Version | Purpose / Architectural Note |
|---|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.8` | App Router, Server/Client Hybrid Architecture, Webpack compilation |
| **Runtime / UI** | [React](https://react.dev/) | `19.2.8` | Concurrent mode, Actions, and React Compiler optimizations |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0` | Strict type-safety across routes, props, and server configurations |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0` | CSS-first configuration via `@tailwindcss/postcss` |
| **Icons** | [lucide-react](https://lucide.dev/) | `^1.43.0` | Accessible tree-shaken SVG iconography |
| **Form Backend** | [Formspree](https://formspree.io/) | v2 Endpoint | Serverless AJAX assessment submissions with honeypot security |
| **Dynamic Favicons**| `next/og` (`ImageResponse`) | Built-in | Dynamic brand icon (`icon.tsx`) and Apple icon (`apple-icon.tsx`) |
| **Linting & Code Style** | ESLint | `^9.0` | `eslint-config-next` standards |
| **Security Auditing** | npm Overrides | Native | Strict resolution overrides for `sharp`, `brace-expansion`, `source-map-js` |

---

## 🏗️ Project Architecture

```
italopath-app/
├── public/
│   ├── favicon.ico                  # Fallback legacy browser favicon
│   └── images/                      # AI-curated WebP-optimized photography
│       ├── hero-university.png      # Historic Italian university courtyard
│       ├── students-collaborating.png # Peer study collaboration
│       ├── italian-cityscape.png    # Italian metropolitan architecture
│       ├── lecture-hall.png         # Modern university auditorium
│       ├── scholarship-euros.png    # DSU financial support imagery
│       ├── happy-graduates.png      # Successful graduation ceremony
│       └── university-courtyard.png # Campus architectural view
│
├── src/
│   ├── app/                         # Next.js App Router (13+ Routes)
│   │   ├── layout.tsx               # Root layout: Header, Footer, Metadata, Fonts
│   │   ├── page.tsx                 # Home: 2-col hero, 4-col benefits, coverage banner, FAQ
│   │   ├── globals.css              # Tailwind v4 theme tokens & custom scrollbars
│   │   ├── icon.tsx                 # Dynamic SVG/PNG Favicon (ImageResponse)
│   │   ├── apple-icon.tsx           # Dynamic Apple Touch Icon (ImageResponse)
│   │   ├── robots.ts                # Dynamic robots.txt generation
│   │   ├── sitemap.ts               # Dynamic XML sitemap generator
│   │   │
│   │   ├── about/
│   │   │   ├── layout.tsx           # Metadata for About page
│   │   │   └── page.tsx             # Founder creed & "Traditional vs ItaloPath" table
│   │   │
│   │   ├── contact/
│   │   │   ├── layout.tsx           # Metadata for Assessment portal
│   │   │   └── page.tsx             # Formspree assessment form & concierge sidebar
│   │   │
│   │   ├── process/
│   │   │   ├── layout.tsx           # Metadata for Process page
│   │   │   └── page.tsx             # Interactive 5-Phase tabbed roadmap dashboard
│   │   │
│   │   ├── scholarships/
│   │   │   └── page.tsx             # DSU regional guide, CAF rules & ISEE estimator
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx             # 6 core advisory tiers + transparent pricing models
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx             # GDPR & Pakistani data privacy compliance policy
│   │   │
│   │   ├── terms-of-service/
│   │   │   └── page.tsx             # Advisory scope, disclaimers, and jurisdiction
│   │   │
│   │   └── refund-policy/
│   │       └── page.tsx             # Transparent milestone-based refund policy
│   │
│   └── components/
│       ├── Header.tsx               # Glassmorphic dark navigation bar with active route pills
│       └── Footer.tsx               # Comprehensive 4-column footer with legal links
│
├── next.config.ts                   # Webpack build flags & HTTP security headers
├── postcss.config.mjs               # Clean PostCSS plugin config
├── tsconfig.json                    # Compiler flags & path aliases (@/*)
└── package.json                     # Dependency overrides, scripts & engine specs
```

---

## 🗺️ Route Map & Feature Directory

| Route | Page Name | Core Functionality & Highlights |
|---|---|---|
| `/` | **Home** | Left-aligned 2-column hero, live intake badge (`2027/2028`), 4-column factual benefit cards (29 Schengen countries), 50+ university coverage marquee, verified student testimonials, and conversion triggers. |
| `/process` | **Process & Timeline** | Interactive 5-phase tabbed roadmap dashboard (`Discovery`, `Offers & Legalisation`, `Universitaly`, `Scholarships & Embassy`, `Visa & Pre-Departure`). Right-side deliverable checklist with milestone facts card. |
| `/scholarships` | **DSU Regional Guide** | Comprehensive ISEE Parificato calculator breakdown, €8,500 financial estimator card, 4-pillar benefits breakdown (Tuition, Stipend, Canteen, Housing), MOFA translation requirements, and disqualification risk matrix. |
| `/services` | **Advisory Services** | 6 modular advisory offerings with structured 3-tier service plans (*Essential Admission*, *Comprehensive Visa*, *Full DSU Concierge*) with milestone pricing and zero commission conflicts. |
| `/about` | **About & Manifesto** | Founders' mission, boutique agency creed, and high-impact comparative matrix: **Traditional Agents vs. ItaloPath** (credential security, portal ownership, and fee transparency). |
| `/contact` | **Assessment Portal** | High-converting 2-stage academic evaluation form connected to Formspree, honeypot bot trap, live field validation, and premium dark concierge sidebar with response guarantee. |
| `/privacy-policy` | **Privacy Policy** | GDPR-aligned document explaining encryption, data retention, MOFA file handling, and client data sovereignty. |
| `/terms-of-service` | **Terms of Service** | Legal boundaries, clear disclaimer regarding Italian Diplomatic Mission authority, and dispute jurisdiction. |
| `/refund-policy` | **Refund Policy** | Milestone-based refund schedule with explicit differentiation between advisory fees and third-party fees (CIMEA, Apostille, VFS). |
| `/sitemap.xml` | **XML Sitemap** | Automated search engine crawl map targeting canonical `https://italopath.tech` URLs. |
| `/robots.txt` | **Robots Directive** | Automated crawler rules granting indexing while disallowing internal API endpoints. |

---

## 📋 Release Notes & Architectural Changelog (v1.1.0 - Production Readiness)

- **Platform Core & Domain:**
  - Migrated canonical domain, OpenGraph metadata, sitemaps, and robots directives to **`https://italopath.tech`**.
  - Unified all inquiry and support communication under **`info@italopath.tech`**.
  - Streamlined branding by removing physical office references to emphasize a remote-first concierge advisory model across Pakistan.
  - Implemented dynamic, scalable SVG favicons (`src/app/icon.tsx`) and Apple Touch icons (`src/app/apple-icon.tsx`) utilizing `next/og` `ImageResponse`.

- **Intake Horizon:**
  - Transitioned all active recruitment and counseling cycles globally to **`2027/2028`** (*Primary: Fall 2027 Intake • Secondary: 2028 Planning*).
  - Preserved verified historical placement data as *"2025/2026 Placed"*.

- **UI/UX Enhancements:**
  - **Split-Hero Architecture:** Shifted to a high-converting 2-column split hero with live trust indicators, verified statistics, and quick-action assessment triggers.
  - **Schengen Mobility Clarification:** Updated European travel mobility benchmarks to reflect all **29 Schengen countries**.
  - **Interactive Process Dashboard (`/process`):** Replaced vertical accordions with a 2-column tabbed roadmap featuring phase status pills, timelines, and deliverables checklists.
  - **Compact DSU Estimator (`/scholarships`):** Integrated regional benefit calculator detailing up to €8,500/year stipends, free canteen cards, and complete tuition exemptions.
  - **High-Trust Comparison Tables (`/about`):** Added a clear side-by-side comparison illustrating ItaloPath's ethical, direct-application model versus traditional agent practices.
  - **Concierge Sidebar & Form Flow (`/contact`):** Streamlined the student assessment form with embedded Lucide iconography, paired with a dark-mode status sidebar detailing post-submission review workflows.

- **Security & Compliance:**
  - **Honeypot Anti-Bot Filter:** Integrated client-side honeypot trap (`_gotcha`) to neutralize automated spam submissions before contacting Formspree endpoints.
  - **Next.js Engine Upgrade:** Updated core framework to **`16.3.8`**, resolving upstream CVEs (CVE-2026-94544, GHSA-3w37-wq28-93x7, GHSA-mcj8-r9mp-w47p, GHSA-cjq9-62q9-8jv4).
  - **Dependency Vulnerability Overrides:** Enforced strict npm overrides in `package.json` for `sharp`, `source-map-js`, and `brace-expansion`, achieving **0 vulnerabilities** across all security audits.

- **Production Deployment:**
  - **Webpack Build Engine Configuration:** Switched production build target to `next build --webpack` for reliable compilation on headless Linux container environments.
  - **Dynamic Container Port Binding:** Enhanced runtime startup script to bind to `0.0.0.0` and dynamically honor the platform-assigned `$PORT` variable (`next start -H 0.0.0.0 -p ${PORT:-3000}`), preventing reverse proxy 504 Gateway Timeouts.
  - **HTTP Security Headers:** Configured strict headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) in `next.config.ts`.

---

## ⚙️ Local Development Setup

### Prerequisites
- **Node.js:** `v20.x` or higher (recommended: Node 20 LTS)
- **Package Manager:** `npm` (bundled with Node)

### Installation & Execution

```bash
# 1. Clone repository
git clone https://github.com/itshammadkhalil/italopath.git
cd italopath/italopath-app

# 2. Install dependencies (honoring overrides)
npm install

# 3. Start local development server (Webpack mode)
npm run dev

# 4. Open http://localhost:3000 in your browser
```

### Build & Verification Commands

```bash
# Type-checking
npx tsc --noEmit

# Production build
npm run build

# Start production server locally
npm run start

# Security audit check
npm audit
```

---

## 🚢 Production Deployment (Hostinger / Linux Containers)

When deploying to Hostinger or other containerized Linux environments:
1. **Repository Link:** Connect your GitHub repository (`main` branch).
2. **Build Directory:** Ensure the root directory points to `/italopath-app` if deploying from a nested repo structure.
3. **Build Command:** `npm run build` (runs `next build --webpack`).
4. **Start Command:** `npm run start` (runs `next start -H 0.0.0.0 -p ${PORT:-3000}`).
5. **Node Environment:** Select Node.js `20.x` or `22.x`.

---

## ⚖️ Disclaimer & Legal Boundaries

**ItaloPath** is an independent educational consulting service and is **not affiliated with, endorsed by, or representing any Italian embassy, consulate, or government ministry**. 
- University admissions, regional DSU scholarship awards, and visa issuances are exclusively determined by Italian universities, regional agencies (e.g., ER.GO, EDISU, LazioDisco), and the Italian Ministry of Foreign Affairs (MAECI).
- ItaloPath does not sell embassy appointments or guarantee visa issuance. Our scope is strictly limited to academic profile matching, document verification, translation guidance, and application dossier compilation.

---

© 2026–2027 **ItaloPath**. All rights reserved. Registered for 2027/2028 Intakes.  
Live at [https://italopath.tech](https://italopath.tech)
