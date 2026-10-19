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
  ChevronDown,
} from 'lucide-react';

const phases = [
  {
    num: '01',
    title: 'Phase 01 • Discovery & Shortlisting',
    shortLabel: 'Admissions',
    duration: 'Duration: 2–4 Weeks',
    icon: Search,
    color: 'bg-blue-500',
    colorLight: 'bg-blue-50 text-blue-600',
    borderColor: 'border-blue-500',
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
    title: 'Phase 02 • Offers & Legalisation',
    shortLabel: 'CIMEA & MOFA',
    duration: 'Duration: 4–8 Weeks',
    icon: FileCheck,
    color: 'bg-violet-500',
    colorLight: 'bg-violet-50 text-violet-600',
    borderColor: 'border-violet-500',
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
    title: 'Phase 03 • Universitaly Portal',
    shortLabel: 'Universitaly',
    duration: 'Duration: 2–3 Weeks',
    icon: Globe,
    color: 'bg-emerald-500',
    colorLight: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-500',
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
    title: 'Phase 04 • Scholarships & Embassy File',
    shortLabel: 'DSU & Visa',
    duration: 'Duration: 3–6 Weeks',
    icon: FileText,
    color: 'bg-amber-500',
    colorLight: 'bg-amber-50 text-amber-600',
    borderColor: 'border-amber-500',
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
    title: 'Phase 05 • Visa & Pre-Departure',
    shortLabel: 'Departure',
    duration: 'Duration: 4–6 Weeks',
    icon: Plane,
    color: 'bg-rose-500',
    colorLight: 'bg-rose-50 text-rose-600',
    borderColor: 'border-rose-500',
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
  const [activePhase, setActivePhase] = useState<string>(phases[0].num);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* ════════════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 border-b border-slate-800 relative overflow-hidden py-10 lg:py-12">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.05] blur-[120px]"></div>
          <div className="absolute bottom-[-30%] left-[-10%] w-[35%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]"></div>
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

          {/* Right Column (6 cols) - Interactive Mini-Stepper Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md text-white">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800">
                <span className="text-sm font-bold text-white tracking-wide">Milestone Overview</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  100% Transparent
                </span>
              </div>

              <div className="space-y-1.5">
                {[
                  { num: '01', title: 'Discovery & Shortlisting', time: '2–4 wks' },
                  { num: '02', title: 'Offers & Document Legalisation', time: '4–8 wks' },
                  { num: '03', title: 'Universitaly Portal Filing', time: '2–3 wks' },
                  { num: '04', title: 'Scholarships & Embassy Dossier', time: '3–6 wks' },
                  { num: '05', title: 'Visa Decision & Departure', time: '4–6 wks' },
                ].map((step) => {
                  const isActive = activePhase === step.num;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActivePhase(step.num)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all duration-200 ${
                        isActive
                          ? 'bg-slate-800 border border-emerald-500/40 text-white'
                          : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                            isActive
                              ? 'bg-emerald-500 text-slate-950 font-black'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {step.num}
                        </span>
                        <span className={`font-medium ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {step.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium shrink-0 ml-2">
                        {step.time}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-3 pt-2.5 border-t border-slate-800/80">
                Scroll down for actionable phase checklists ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PREMIUM CARD ARCHITECTURE (Interactive)
      ════════════════════════════════════════════ */}
      <section className="pt-10 pb-16 relative z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.num;

              return (
                <div
                  key={phase.num}
                  className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden flex shadow-sm hover:shadow-md ${
                    isActive ? 'border-slate-300 shadow-xl' : 'border-slate-200'
                  }`}
                >
                  {/* Left Accent Strip */}
                  <div className={`w-2 shrink-0 transition-colors duration-500 ${isActive ? phase.color : 'bg-slate-200'}`}></div>

                  <div className="flex-1">
                    {/* ── Card Header (Clickable Toggle) ── */}
                    <button
                      onClick={() => setActivePhase(phase.num === activePhase ? '' : phase.num)}
                      className="w-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${
                              isActive ? phase.colorLight : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            Step {phase.num}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200/60">
                            {phase.duration}
                          </span>
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {phase.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-5 shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                            isActive ? phase.colorLight : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform duration-500 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* ── Two-Tone Expandable Body ── */}
                    <div
                      className={`grid grid-rows-[0fr] transition-all duration-500 ease-in-out ${
                        isActive ? 'grid-rows-[1fr]' : ''
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-5 gap-8">
                          
                          {/* Left Zone: Checklist */}
                          <div className="lg:col-span-3">
                            <p className="text-slate-600 leading-relaxed mb-6">
                              {phase.summary}
                            </p>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Phase Checklist</h4>
                            <ul className="space-y-3.5">
                              {phase.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm text-slate-600"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-[#10A985] shrink-0" />
                                  <span className="leading-relaxed mt-0.5">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Right Zone: Tinted Container for Responsibilities */}
                          <div className="lg:col-span-2 space-y-4">
                            {/* Key Deliverables */}
                            <div className="bg-[#10A985]/5 border border-[#10A985]/20 rounded-xl p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <Package className="w-4 h-4 text-[#10A985]" />
                                <h4 className="text-sm font-bold text-[#10A985] uppercase tracking-wider">
                                  Key Deliverables
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {phase.deliverables.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10A985] mt-2 shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* What We Handle */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                              <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-4 h-4 text-slate-500" />
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                                  What We Handle
                                </h4>
                              </div>
                              <ul className="space-y-2 mb-5">
                                {phase.weHandle.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="text-slate-400 mt-0.5">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>

                              {/* What You Provide */}
                              <div className="flex items-center gap-2 mb-3 pt-4 border-t border-slate-200">
                                <UserCircle className="w-4 h-4 text-slate-500" />
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                                  What You Provide
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {phase.youProvide.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="text-slate-400 mt-0.5">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Unsure where your profile fits?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Get an expert evaluation for the current active intakes. We'll map out your exact timeline and university options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#10A985] hover:bg-[#0D9070] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#10A985]/20 text-lg"
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
