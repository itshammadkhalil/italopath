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

## 🚀 3-Day Major Architectural & Design Evolution

### 1. Brand Identity & Global Domain Migration
- **Domain Finalization:** All canonical metadata, OpenGraph tags, sitemaps, and robots directives migrated from temporary aliases to **`https://italopath.tech`**.
- **Contact Channel Consolidation:** Every email link updated to **`info@italopath.tech`**.
- **Office Location De-cluttering:** Removed physical office text (*"Islamabad, Pakistan"*) from footer and contact pages to emphasize remote-first concierge consultancy across all Pakistani provinces.
- **Dynamic Next.js Icons:** Implemented `src/app/icon.tsx` (32x32 Favicon) and `src/app/apple-icon.tsx` (180x180 Apple Touch Icon) using Next.js `ImageResponse` with SVG-rendered emerald branding.
- **Intake Horizon Transition:** Updated all intake mentions across hero badges, forms, and metadata from 2026 to **`2027/2028`** (*Primary: Fall 2027 Intake • Secondary: 2028 Planning*). Past cases preserved as *"2025/2026 Placed"*.

### 2. UI/UX & Layout Overhauls
- **Homepage Hero Re-architecture:** Converted a centered, low-contrast header into a balanced 2-column layout (7 cols copy / 5 cols visual) with verified statistics (200+ students, €0 net tuition, 99% visa rate).
- **"Why Study in Italy?" Polish:** Removed muddy card text overlays in favor of high-contrast cards, updating legal travel accuracy to **29 Schengen countries**.
- **Process Tabbed Roadmap (`/process`):** Replaced an unwieldy vertical accordion with an interactive client-side 2-column roadmap dashboard (`activePhase` state selector, horizontal scroll on mobile, key deliverables checklist).
- **Scholarships Header (`/scholarships`):** Integrated a right-side *"Regional Benefit Estimate"* card outlining up to €8,500/year in stipends, free canteen meals, and 100% tuition waivers.
- **Comparison Table (`/about`):** Replaced an isolated dark card with a crisp, modern light-mode comparative table contrasting traditional agent practices against ItaloPath's transparent advisory model.
- **Assessment Form Simplification (`/contact`):** Removed confusing multi-step pills in favor of a clean 2-section layout with inner left Lucide icons (`User`, `Phone`, `Mail`, `MapPin`, `GraduationCap`, `Award`, `Languages`, `Calendar`, `FileText`).
- **Concierge Sidebar (`/contact`):** Designed an elevated 2-card sidebar featuring an active response card and a dark stepper timeline explaining what happens after submission.

### 3. Formspree Integration & Honeypot Bot Security
- **Serverless Form Handling:** Form submission wired directly to Formspree endpoint (`https://formspree.io/f/mgaojybz`) via AJAX `fetch`.
- **Form State Management:** Implemented clean loading states (`isSubmitting` with spinner) and success card confirmations with reset capability.
- **Honeypot Anti-Spam Trap (`_gotcha`):** Added a hidden input field (`tabIndex={-1}`, `opacity-0`, `pointer-events-none`) with client-side detection that silently neutralizes spam bots without consuming Formspree quota.

### 4. Vulnerability Mitigation & Dependency Hardening
- **Next.js Engine Upgrade:** Updated `next` from `16.3.4` to **`16.3.8`**, patching critical CVEs:
  - **CVE-2026-94544 / GHSA-vcvr-r3jv-pc5j:** Remote Code Execution vulnerability in `next/og` ImageResponse.
  - **GHSA-3w37-wq28-93x7 & GHSA-mcj8-r9mp-w47p:** Cache poisoning and draft mode content leakage in SSG/ISR.
  - **GHSA-cjq9-62q9-8jv4:** Server-Side Request Forgery in image optimization.
- **npm Dependency Overrides:** Enforced resolution overrides in `package.json` to eliminate transitive high-severity vulnerabilities:
  ```json
  "overrides": {
    "sharp": "^0.35.5",
    "source-map-js": "^1.2.2",
    "brace-expansion": "^2.0.1"
  }
  ```
  Result: **0 vulnerabilities** across all security audits.

### 5. Production Build & Hostinger Deployment Hardening
- **Linux Webpack Fallback:** Turbopack occasionally crashes when invoking `@tailwindcss/postcss` in restricted headless Linux build workers. Solved by explicitly specifying standard stable Webpack in build scripts:
  ```json
  "build": "next build --webpack"
  ```
- **Dynamic Port Binding (Hostinger 504 Fix):** Hostinger Cloud/VPS reverse proxies route traffic through dynamic `$PORT` environment variables. Next.js defaults to `3000`, causing Nginx gateway timeouts. Fixed by binding to `0.0.0.0` and fallback port expansion:
  ```json
  "start": "next start -H 0.0.0.0 -p ${PORT:-3000}"
  ```
- **HTTP Security Headers:** Configured enterprise security headers in `next.config.ts`:
  - `X-Frame-Options: DENY` (Anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

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
