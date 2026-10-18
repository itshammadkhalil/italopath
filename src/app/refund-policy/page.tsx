import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ReceiptText,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Banknote,
  FileX,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "ItaloPath's refund policy for consultancy, admission, documentation, and visa preparation services. Clear terms on what is and isn't refundable.",
};

export default function RefundPolicyPage() {
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
              <ReceiptText className="w-5 h-5 text-[#10A985]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Refund Policy
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
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            ItaloPath operates on a transparent, milestone-based fee structure.
            This policy outlines our refund terms clearly so there are no
            surprises. Please read carefully before engaging our services.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-700 leading-relaxed">
                <strong>Important:</strong> By engaging ItaloPath&apos;s
                services and making any payment, you acknowledge and agree to
                this Refund Policy in its entirety.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Section 1 — Retainer */}
            <div className="border-l-2 border-red-300/50 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-500 bg-red-50 rounded-full px-2.5 py-1">
                  1.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Retainer & Consultation Fee
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The initial evaluation and profile consultation fee covers your
                academic profile assessment, eligibility analysis, university
                shortlisting report, and personalised roadmap creation.
              </p>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-700 font-medium">
                  Non-refundable once the assessment report has been delivered to
                  you.
                </p>
              </div>
            </div>

            {/* Section 2 — Admission Services */}
            <div className="border-l-2 border-red-300/50 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-500 bg-red-50 rounded-full px-2.5 py-1">
                  2.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Admission Processing Services
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Once your file has been formally processed and applications
                submitted to Italian universities — including document
                preparation, university portal submissions, and communication
                with institutions — the admission processing fees are consumed
                through operational hours.
              </p>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-700 font-medium">
                  Strictly non-refundable once applications have been submitted,
                  regardless of admission outcome.
                </p>
              </div>
            </div>

            {/* Section 3 — Third Party */}
            <div className="border-l-2 border-red-300/50 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-500 bg-red-50 rounded-full px-2.5 py-1">
                  3.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Third-Party Costs
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The following fees are paid directly to third-party
                organisations and are entirely outside ItaloPath&apos;s control:
              </p>
              <ul className="space-y-2.5 mb-4">
                {[
                  "MOFA Apostille fees",
                  "Courier and document shipping costs",
                  "Certified Italian translation charges",
                  "CIMEA application and credential evaluation fees",
                  "IBCC and HEC attestation fees",
                  "University application fees (where applicable)",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-sm text-red-700 font-medium">
                  Non-refundable under any circumstance. These payments are made
                  to independent third parties.
                </p>
              </div>
            </div>

            {/* Section 4 — Visa Refusal */}
            <div className="border-l-2 border-red-300/50 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-red-500 bg-red-50 rounded-full px-2.5 py-1">
                  4.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Visa Refusal / Appointment Issues
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Visa decisions are made exclusively by the Italian
                Embassy/Consulate. If your visa application is refused or you are
                unable to secure a VFS appointment slot due to embassy quotas or
                seasonal demand:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <FileX className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Document preparation services already rendered (financial
                    file structuring, cover letter drafting, mock interview
                    sessions) are <strong>not eligible for refund</strong> as the
                    work has been completed.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Banknote className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    VFS/embassy appointment fees paid by the client are
                    non-refundable as they are collected by VFS Global or the
                    embassy directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — Eligibility */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  5.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Refund Eligibility
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Refunds are only entertained under the following limited
                circumstance:
              </p>
              <div className="flex items-start gap-3 p-5 bg-[#10A985]/5 rounded-xl border border-[#10A985]/15">
                <CheckCircle className="w-5 h-5 text-[#10A985] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    If ItaloPath fails to submit agreed-upon applications due to
                    operational negligence on our part — specifically, missing a
                    university or Universitaly submission deadline that was
                    within our stated scope of work — a partial or full refund of
                    the relevant service fee may be issued.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Refund requests under this clause must be submitted in
                    writing within 14 days of the missed deadline, accompanied
                    by supporting evidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — Contact */}
            <div className="border-l-2 border-[#10A985]/30 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-[#10A985] bg-[#10A985]/10 rounded-full px-2.5 py-1">
                  6.0
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Contact for Refund Requests
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                All refund inquiries must be submitted in writing to{" "}
                <a
                  href="mailto:info@italopath.com"
                  className="text-[#10A985] font-medium hover:underline"
                >
                  info@italopath.com
                </a>{" "}
                with the subject line &ldquo;Refund Request — [Your Name]&rdquo;.
                We will respond within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
