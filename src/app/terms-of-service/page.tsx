import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  AlertTriangle,
  UserCheck,
  CalendarClock,
  Scale,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing ItaloPath's consultancy services for Italian university admissions, documentation guidance, and visa file preparation.",
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#10A985] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#10A985]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#10A985]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
          </div>
          <p className="text-slate-500 text-sm">
            Last Updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-slate-600 leading-relaxed mb-12 text-lg">
            By engaging ItaloPath&apos;s services, you agree to the following
            terms and conditions. Please read them carefully before proceeding
            with any service package.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  1.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Scope of Service
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                ItaloPath provides the following consultancy and facilitation
                services:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Academic profile evaluation and university shortlisting based on CGPA, field of study, and budget",
                  "Document legalisation guidance: IBCC equivalence, HEC attestation, MOFA Apostille coordination",
                  "CIMEA Statement of Comparability and Declaration of Value (DOV) application assistance",
                  "Universitaly pre-enrolment portal setup, document upload, and submission monitoring",
                  "Italian regional scholarship (DSU) file preparation, including ISEE Parificato documentation assembly",
                  "Visa documentation structuring, cover letter drafting, and embassy interview coaching",
                  "Pre-departure briefing and initial settlement guidance",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10A985] mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 — Critical Disclaimer */}
            <div className="border-l-2 border-amber-400/50 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 rounded-full px-2.5 py-1">
                  2.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Strict Disclaimer on Decisions
                </h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-amber-800 mb-2">
                      Critical Notice
                    </p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      ItaloPath is an <strong>independent educational consulting
                      agency</strong>. We are <strong>NOT</strong> an embassy,
                      consulate, Italian government body, or university
                      representative.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The following decisions are entirely at the discretion of the
                respective institutions and are beyond ItaloPath&apos;s control:
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Scale,
                    text: "University admission decisions — acceptance or rejection is solely determined by the university's admission committee.",
                  },
                  {
                    icon: ShieldAlert,
                    text: "Italian study visa approval or denial — visa decisions are made exclusively by the Italian Embassy/Consulate.",
                  },
                  {
                    icon: CalendarClock,
                    text: "Regional scholarship (DSU) allotments — scholarship grants are determined by regional agencies (ER.GO, LazioDisco, EDISU) based on ISEE scores and credit requirements.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <Icon className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">
                ItaloPath does not guarantee any of these outcomes. Our role is
                limited to preparing the strongest possible application and
                documentation on your behalf.
              </p>
            </div>

            {/* Section 3 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  3.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Client Responsibilities
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                As a client of ItaloPath, you are responsible for:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Providing genuine, non-fraudulent, and properly attested documents",
                  "Ensuring the accuracy of all information shared with ItaloPath",
                  "Responding to communication and document requests in a timely manner",
                  "Meeting all university and embassy deadlines as communicated",
                  "Arranging and paying for third-party attestation, translation, and courier costs independently",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <UserCheck className="w-4 h-4 text-[#10A985] mt-1 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-red-700 leading-relaxed">
                    <strong>Zero Tolerance for Fraud:</strong> Submitting fake
                    degrees, falsified financial statements, altered transcripts,
                    or any fraudulent documentation will result in{" "}
                    <strong>immediate termination of services with no refund</strong>{" "}
                    and permanent blacklisting. ItaloPath reserves the right to
                    report fraudulent activity to relevant authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  4.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Embassy Slots & Delays
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                ItaloPath does <strong>not sell, reserve, or guarantee</strong>{" "}
                embassy or VFS appointment slots. Appointment availability is
                managed solely by VFS Global and the Italian diplomatic missions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Delays caused by embassy appointment queues, seasonal demand
                surges (particularly June–August), internal embassy policy
                changes, or force majeure events are{" "}
                <strong>external factors beyond our control</strong> and do not
                constitute a breach of our service agreement.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  5.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Governing Law
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                These Terms of Service are governed by the applicable laws of
                Pakistan. Any disputes arising from or related to our services
                shall be resolved through mutual consultation and, failing that,
                through the appropriate legal channels in Islamabad, Pakistan.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  6.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">Contact</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a
                  href="mailto:info@italopath.tech"
                  className="text-[#10A985] font-medium hover:underline"
                >
                  info@italopath.tech
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
