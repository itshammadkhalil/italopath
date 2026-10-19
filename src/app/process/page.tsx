"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  FileCheck,
  Globe,
  FileText,
  Plane,
  ArrowRight,
  CheckCircle2,
  Package,
  ShieldCheck,
  UserCircle,
  Clock,
} from 'lucide-react';

const phases = [
  {
    num: '01',
    title: 'Discovery & Shortlisting',
    duration: '2–4 Weeks',
    icon: Search,
    summary:
      'Identify the best-fit Italian public universities based on your academic profile, budget, and career goals.',
    bullets: [
      'Research English-taught programs at Italian public universities',
      'Match your CGPA and academic profile with eligible institutions',
      'Take IELTS/PTE or obtain English Proficiency Certificate',
      'Prepare initial document checklist',
      'Apply to shortlisted universities',
      'Submit direct applications where required',
    ],
    deliverables: [
      'Shortlist of 3–5 public universities with confirmed eligibility',
    ],
    weHandle: [
      'University matching based on entry requirements',
      'Application portal management',
    ],
    youProvide: [
      'Academic transcripts & degree certificates',
      'Language proficiency scores (if applicable)',
    ],
  },
  {
    num: '02',
    title: 'Offers & Legalisation',
    duration: '4–8 Weeks',
    icon: FileCheck,
    summary:
      'Secure your admission offer and begin the credential evaluation and document legalisation process.',
    bullets: [
      'Accept university offer letters',
      'Apply for CIMEA Statement of Comparability or DOV',
      'Complete IBCC equivalence & HEC attestation',
      'MOFA Apostille on all educational documents',
      'Begin certified Italian translations',
      'Compile and verify all attested documents',
    ],
    deliverables: [
      'Accepted offer letter',
      'Fully attested & translated academic file',
    ],
    weHandle: [
      'CIMEA / DOV application filing',
      'Coordination with certified Italian translators',
    ],
    youProvide: [
      'Original documents for IBCC/HEC/MOFA',
      'Third-party fees (translation, attestation)',
    ],
  },
  {
    num: '03',
    title: 'Universitaly Portal',
    duration: '2–3 Weeks',
    icon: Globe,
    summary:
      'Complete the mandatory Universitaly pre-enrolment — the official step required for all non-EU students.',
    bullets: [
      'Create Universitaly portal account',
      'Submit pre-enrolment application with required documents',
      'Upload translated and attested documents',
      'University verification and acceptance',
      'Receive Universitaly confirmation',
      'Cross-verify all uploaded data for accuracy',
    ],
    deliverables: [
      'Universitaly confirmation receipt (Summary PDF)',
    ],
    weHandle: [
      'Error-free Universitaly profile creation',
      'Document uploads to the Italian Ministry portal',
    ],
    youProvide: [
      'Passport copy',
      'Passport-size photograph',
    ],
  },
  {
    num: '04',
    title: 'Scholarships & Embassy File',
    duration: '3–6 Weeks',
    icon: FileText,
    summary:
      'Assemble the complete visa file and prepare for the embassy appointment with mock interviews.',
    bullets: [
      'Book VFS/Embassy appointment',
      'Prepare financial documentation (bank statements, sponsorship)',
      'Assemble DSU scholarship application documents',
      'ISEE Parificato document preparation',
      'Submit visa application at VFS/Embassy',
      'Attend embassy interview (if required)',
    ],
    deliverables: [
      'Complete, structured Visa file',
      'DSU scholarship application submitted',
    ],
    weHandle: [
      'Visa cover letter drafting',
      'Mock embassy interview coaching',
      'DSU portal management',
    ],
    youProvide: [
      'Bank statements & sponsorship affidavit',
      'Family income/property documents for ISEE',
    ],
  },
  {
    num: '05',
    title: 'Visa & Pre-Departure',
    duration: '4–6 Weeks',
    icon: Plane,
    summary:
      'Receive your visa, attend the pre-departure briefing, and prepare for your new life in Italy.',
    bullets: [
      'Visa processing and issuance',
      'Pre-departure briefing with ItaloPath',
      'Accommodation search assistance',
      'Codice Fiscale application guidance',
      'Travel insurance and flight booking',
      'Welcome to Italy! 🇮🇹',
    ],
    deliverables: [
      'Italian Study Visa (Type D)',
      'Pre-departure checklist completed',
    ],
    weHandle: [
      'Codice Fiscale instructions',
      'Accommodation platform guidance',
    ],
    youProvide: [
      'Flight tickets',
      'Travel insurance policy',
    ],
  },
];

export default function ProcessPage() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* ════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 border-b border-slate-800 relative overflow-hidden py-10 lg:py-12">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.05] blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[35%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-4">
              🧭 End-to-End Operational Flow
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              The Italian Visa &amp; Admission Roadmap
            </h1>
            <p className="text-sm lg:text-base text-slate-300 max-w-lg mt-3 leading-relaxed">
              A transparent 5-phase breakdown designed to eliminate embassy delays, secure DSU regional funding, and streamline your Universitaly application.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                5 Clear Milestones
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                No Embassy Guesswork
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Strict Deadline Tracking
              </span>
            </div>
          </div>

          {/* Right Column (6 cols) - Roadmap Quick Facts Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md text-white">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white tracking-wide">Roadmap At A Glance</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  2026/2027 Intakes
                </span>
              </div>

              {/* 3 clean stat rows with icons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Total Process Time</p>
                      <p className="text-xs sm:text-sm font-bold text-white">3 – 5 Months (Average)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 hidden sm:inline">
                    Sequential
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Mandatory Portals</p>
                      <p className="text-xs sm:text-sm font-bold text-white">CIMEA, Universitaly, VFS</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 hidden sm:inline">
                    State Portals
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Success Target</p>
                      <p className="text-xs sm:text-sm font-bold text-white">Zero Deadline Defaults</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline">
                    100% On-Track
                  </span>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-xs text-slate-400 text-center mt-4 pt-3 border-t border-slate-800/80">
                Click through the interactive phases below to see full checklists ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. 2-COLUMN TABBED ROADMAP SECTION
      ════════════════════════════════════════════ */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Columns - Phase Tabs) */}
          <div className="lg:col-span-5 w-full">
            {/* Mobile View: Horizontal Scrollable Tabs */}
            <div className="flex lg:hidden overflow-x-auto pb-4 gap-2.5 -mx-6 px-6 scrollbar-none">
              {phases.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={phase.num}
                    type="button"
                    onClick={() => setActivePhase(idx)}
                    className={`shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? 'bg-white border-2 border-emerald-500 shadow-sm text-slate-900'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isActive
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {phase.num}
                    </span>
                    <span className="text-xs font-bold whitespace-nowrap">
                      {phase.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop View: Vertical Phase Tabs Stack */}
            <div className="hidden lg:flex flex-col gap-3">
              <div className="mb-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Roadmap Phases
                </span>
              </div>

              {phases.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={phase.num}
                    type="button"
                    onClick={() => setActivePhase(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border relative group ${
                      isActive
                        ? 'bg-white border-emerald-500 ring-4 ring-emerald-500/10 shadow-sm'
                        : 'bg-white border-slate-200/80 hover:border-emerald-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                            isActive
                              ? 'bg-emerald-500 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                          }`}
                        >
                          {phase.num}
                        </div>
                        <div>
                          <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                            Phase {phase.num}: {phase.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Duration: {phase.duration}
                          </p>
                        </div>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 Columns - Active Phase Details) */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              {/* Header */}
              <div className="pb-6 border-b border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Step {phases[activePhase].num} of 05
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                    Timeline: {phases[activePhase].duration}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Phase {phases[activePhase].num} • {phases[activePhase].title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {phases[activePhase].summary}
                </p>
              </div>

              {/* Body */}
              <div className="py-6 space-y-6">
                {/* Phase Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Phase Checklist
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phases[activePhase].bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two Soft Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Key Deliverables */}
                  <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="w-4 h-4 text-emerald-600" />
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        Key Deliverables
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {phases[activePhase].deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Handle vs What You Provide */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-2.5">
                      <ShieldCheck className="w-4 h-4 text-slate-700" />
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        What We Handle
                      </h4>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {phases[activePhase].weHandle.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mb-2.5 pt-3 border-t border-slate-200">
                      <UserCircle className="w-4 h-4 text-slate-700" />
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        What You Provide
                      </h4>
                    </div>
                    <ul className="space-y-1.5">
                      {phases[activePhase].youProvide.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Stepper Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  disabled={activePhase === 0}
                  onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  ← Previous Phase
                </button>

                {activePhase < phases.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActivePhase((prev) => Math.min(phases.length - 1, prev + 1))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm cursor-pointer"
                  >
                    Next Phase →
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
                  >
                    Start Profile Assessment →
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. BOTTOM CTA
      ════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Unsure where your profile fits?
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              Get an expert evaluation for the current active intakes. We&apos;ll map out your exact timeline and university options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#10A985] hover:bg-[#0D9070] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#10A985]/20 text-base sm:text-lg"
            >
              Get Evaluated for 2026/2027 Intakes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
