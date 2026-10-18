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
  title: {
    default: "ItaloPath — Your Gateway to Italian Higher Education",
    template: "%s | ItaloPath",
  },
  description:
    "Specialized boutique consultancy for Italy study visas, Universitaly processing, DSU/ER.GO/LazioDisco scholarships, and university admissions. Transparent, honest, results-driven.",
  keywords: [
    "Italy study visa",
    "Universitaly",
    "DSU scholarship",
    "ER.GO scholarship",
    "LazioDisco",
    "Italian university admission",
    "study in Italy",
    "ISEE Parificato",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
