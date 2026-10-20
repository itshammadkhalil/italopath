import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Trash2, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ItaloPath collects, uses, stores, and protects your personal data during the Italian university admission and visa application process.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-5 h-5 text-[#10A985]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Privacy Policy
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
            ItaloPath is committed to protecting your personal information.
            This Privacy Policy explains what data we collect, why we collect
            it, and how we safeguard it throughout our engagement.
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  1.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Personal Data Collected
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                In order to provide our university admission, scholarship, and
                visa filing services, we collect the following categories of
                personal data:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Academic transcripts, degree certificates, and mark sheets",
                  "CNIC / Passport copies and identification documents",
                  "Bank statements and financial documentation",
                  "Family Registration Certificates (FRC) and NADRA records",
                  "Income certificates, property valuations, and FBR wealth statements",
                  "Contact information: full name, email address, phone/WhatsApp number, and city of residence",
                  "English proficiency test scores (IELTS, PTE, etc.)",
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

            {/* Section 2 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  2.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Purpose of Data Collection
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your personal data is collected and processed strictly for the
                following purposes:
              </p>
              <ul className="space-y-2.5">
                {[
                  "University admission applications and course shortlisting",
                  "Universitaly pre-enrolment portal submissions",
                  "CIMEA Statement of Comparability / Declaration of Value (DOV) applications",
                  "Italian regional scholarship (DSU) file preparation, including ISEE Parificato documentation",
                  "Visa appointment booking and embassy documentation filing",
                  "Document legalisation coordination (IBCC, HEC, MOFA Apostille, certified Italian translation)",
                  "Eligibility assessment and personalised consultation",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <Eye className="w-4 h-4 text-[#10A985] mt-1 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  3.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Third-Party Sharing
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Your data may be shared with the following parties strictly in
                the context of your application:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "Italian universities to which you are applying",
                  "CIMEA and credential evaluation bodies",
                  "The Universitaly portal (Italian Ministry of Education)",
                  "Certified Italian translation agencies",
                  "Regional scholarship agencies (ER.GO, LazioDisco, EDISU, etc.)",
                  "VFS Global / Italian Embassy or Consulate (for visa appointments)",
                  "Document attestation bodies (IBCC, HEC, MOFA)",
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
              <div className="bg-[#10A985]/5 border border-[#10A985]/15 rounded-xl p-4">
                <p className="text-sm text-slate-700 font-medium">
                  <strong>We never sell, rent, or share your personal data with
                  marketers, advertisers, or any unrelated third parties.</strong>{" "}
                  Your data is used exclusively for the services you have engaged
                  us to provide.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  4.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Data Storage & Security
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Lock,
                    title: "Encryption",
                    desc: "All sensitive documents are stored with encryption at rest and transmitted using secure, encrypted channels (TLS/SSL).",
                  },
                  {
                    icon: Server,
                    title: "Strict Confidentiality",
                    desc: "Access to your files is restricted to authorised ItaloPath team members directly involved in your case. We maintain strict internal confidentiality protocols.",
                  },
                  {
                    icon: Trash2,
                    title: "Right to Deletion",
                    desc: "Upon completion of our services, you may request the deletion of all your personal data and documents from our systems. Requests are honoured within 30 business days.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="w-10 h-10 bg-[#10A985]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#10A985]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  5.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Contact & Inquiries
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                For any questions, concerns, or data deletion requests regarding
                this Privacy Policy, please contact us at{" "}
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
