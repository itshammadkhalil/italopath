import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://italopath.tech'),
  title: {
    default: "ItaloPath | Italy Study Visa & DSU Scholarship Consultants",
    template: "%s | ItaloPath",
  },
  description:
    "Top consultancy for Pakistani students applying to Italian public universities for 2027/2028 intakes. Secure 100% tuition waivers, €8,500/year DSU regional scholarships, Universitaly filings, and verified visa dossier handling.",
  keywords: [
    "Italy study visa Pakistan 2027",
    "Italy study visa 2027 2028",
    "DSU scholarship Italy 2027",
    "Universitaly pre enrolment 2027",
    "CIMEA statement of comparability",
    "free education in Italy",
    "Italian student visa requirements",
    "study in Italy without IELTS",
    "ISEE Parificato",
    "Italian university admission 2027",
    "ER.GO scholarship",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'ItaloPath',
    title: "ItaloPath | Italy Study Visa & DSU Scholarship Consultants",
    description:
      "Top consultancy for Pakistani students applying to Italian public universities for 2027/2028 intakes. Secure 100% tuition waivers, €8,500/year DSU regional scholarships, Universitaly filings, and verified visa dossier handling.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "ItaloPath | Italy Study Visa & DSU Scholarship Consultants",
    description:
      "Top consultancy for Pakistani students applying to Italian public universities for 2027/2028 intakes. Secure 100% tuition waivers, €8,500/year DSU regional scholarships, Universitaly filings, and verified visa dossier handling.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "ItaloPath",
  url: "https://italopath.tech",
  logo: "https://italopath.tech/icon",
  description:
    "Specialized study visa & DSU regional scholarships advisory for Italian public universities.",
  email: "info@italopath.tech",
  sameAs: ["https://www.instagram.com/italopath"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
    email: "info@italopath.tech",
    availableLanguage: ["English", "Urdu"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
