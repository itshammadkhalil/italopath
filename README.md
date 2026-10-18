# ItaloPath

**Italy Study Visa & Scholarship Advisory Platform**

ItaloPath is a boutique educational consultancy website built to guide Pakistani students through the complete Italian higher education journey — from university admissions and CIMEA credential validation to DSU regional scholarships, Universitaly pre-enrolment, and visa file preparation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **UI Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) |
| **Icons** | [lucide-react v1.43](https://lucide.dev/) |
| **Runtime** | React 19 / React DOM 19 |
| **Compiler** | React Compiler (babel-plugin-react-compiler) |
| **Linting** | ESLint 9 + eslint-config-next |
| **Font** | Geist Sans + Geist Mono (Next.js built-in) |
| **Images** | Next.js `Image` component with static optimization |

---

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/italopath.git
cd italopath/italopath-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Other Scripts

```bash
npm run build    # Production build (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Project Architecture

```
italopath-app/
├── public/
│   └── images/              # AI-generated site imagery (7 photos)
│       ├── hero-university.png
│       ├── students-collaborating.png
│       ├── italian-cityscape.png
│       ├── lecture-hall.png
│       ├── scholarship-euros.png
│       ├── happy-graduates.png
│       └── university-courtyard.png
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout (Header + Footer)
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles + Tailwind directives
│   │   ├── robots.ts        # SEO: robots.txt generation
│   │   ├── sitemap.ts       # SEO: sitemap.xml generation
│   │   │
│   │   ├── about/
│   │   │   ├── layout.tsx   # Metadata for /about
│   │   │   └── page.tsx     # About + FAQ client component
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx     # Assessment request form
│   │   │
│   │   ├── process/
│   │   │   ├── layout.tsx   # Metadata for /process
│   │   │   └── page.tsx     # Interactive roadmap dashboard (client)
│   │   │
│   │   ├── scholarships/
│   │   │   └── page.tsx     # DSU Scholarships guide
│   │   │
│   │   ├── services/
│   │   │   └── page.tsx     # Services + pricing tiers
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx     # Privacy Policy
│   │   │
│   │   ├── terms-of-service/
│   │   │   └── page.tsx     # Terms of Service
│   │   │
│   │   └── refund-policy/
│   │       └── page.tsx     # Refund Policy
│   │
│   └── components/
│       ├── Header.tsx       # Sticky dark navbar (transparent + blur)
│       └── Footer.tsx       # 4-column footer with social + legal links
│
├── next.config.ts           # Next.js config: security headers, reactCompiler
├── tailwind.config.ts       # Tailwind v4 configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Available Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Why Italy, Student Life, Process Steps, Testimonials, CTA |
| `/services` | Services | 6 core services + 3-tier pricing packages |
| `/scholarships` | DSU Guide | ISEE Parificato, financial documents, disqualification risks |
| `/process` | Process Roadmap | Interactive 5-phase client-side accordion dashboard |
| `/about` | About | Philosophy pillars, comparison table, FAQ accordion |
| `/contact` | Contact | Profile assessment form with sticky sidebar |
| `/privacy-policy` | Privacy | GDPR-aligned data collection and usage policy |
| `/terms-of-service` | Terms | Scope of service, disclaimer, payment terms |
| `/refund-policy` | Refund | Milestone-based refund conditions |
| `/sitemap.xml` | — | Auto-generated sitemap (Next.js) |
| `/robots.txt` | — | Auto-generated robots file (Next.js) |

---

## SEO & Security

- **Sitemap:** Auto-generated at `/sitemap.xml` via `src/app/sitemap.ts`
- **Robots:** Auto-generated at `/robots.txt` via `src/app/robots.ts`
- **Security Headers** (applied globally via `next.config.ts`):
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `X-DNS-Prefetch-Control: on`
- **Metadata:** Each page exports its own `Metadata` object for titles and descriptions

---

## Disclaimer

ItaloPath is an independent educational consultancy and is **not affiliated with any Italian embassy, consulate, or government body**. Visa decisions, university admissions, and scholarship grants are entirely at the discretion of the respective institutions. ItaloPath's role is limited to guidance, document preparation, and application facilitation.

---

© 2026 ItaloPath. All rights reserved.
