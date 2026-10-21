"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
  FileCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';

interface PhaseItem {
  num: string;
  shortName: string;
  tag: string;
  title: string;
  duration: string;
  docCount: string;
  summary: string;
  milestones: { title: string; desc: string }[];
  weHandle: string[];
  youProvide: string[];
}

const phases: PhaseItem[] = [
  {
    num: '01',
    shortName: 'Discovery',
    tag: 'Phase 01 of 05 • Profile Discovery & Selection',
    title: 'Academic Profile Discovery & University Matching',
    duration: '2–4 Weeks Execution Window',
    docCount: '4 Essential Documents',
    summary:
      'Identify the highest-probability English-taught degree programs across Italian public universities. We map your specific GPA, language proficiency, and budget against verified admission criteria.',
    milestones: [
      {
        title: 'English-Taught Degree Profiling',
        desc: 'Screen and match your CGPA and academic background against 50+ public universities with verified non-EU entry criteria.',
      },
      {
        title: 'Language Eligibility Determination',
        desc: 'Evaluate qualification for English Medium of Instruction (MOI) waivers vs. official IELTS/PTE academic benchmarks.',
      },
      {
        title: 'Multi-University Portal Applications',
        desc: 'Submit and manage direct admissions applications across 3–5 targeted public institutions via their official student portals.',
      },
      {
        title: 'Conditional Offer Letter Acquisition',
        desc: 'Secure official admission acceptance letters required to initiate ministerial legalisation and DSU funding.',
      },
    ],
    weHandle: [
      'University curriculum & eligibility mapping',
      'Direct application portal management',
      'Professor & international admission desk liaison',
      'Strict intake deadline tracking',
    ],
    youProvide: [
      'Official transcripts & provisional degree certificates',
      'English proficiency certificate or IELTS/PTE report',
      'Updated European format CV (Europass)',
      'Valid Passport scan (valid for minimum 18 months)',
    ],
  },
  {
    num: '02',
    shortName: 'Legalisation',
    tag: 'Phase 02 of 05 • Attestation & Equivalence',
    title: 'Academic Attestation & CIMEA Equivalence',
    duration: '4–8 Weeks Execution Window',
    docCount: '6 Verified Documents',
    summary:
      'Navigate the complex Pakistani attestation chain and obtain official Italian credential recognition. We eliminate the primary cause of embassy dossier rejection.',
    milestones: [
      {
        title: 'IBCC & HEC Document Attestations',
        desc: 'Complete mandatory preliminary equivalence verification for intermediate certificates and higher education degrees.',
      },
      {
        title: 'MOFA Apostille / Legalisation Stamp',
        desc: 'Secure Ministry of Foreign Affairs legalisation on original educational documents and family certificates.',
      },
      {
        title: 'CIMEA Statement of Comparability / DOV',
        desc: 'Expedite digital equivalence filing via CIMEA DiploMe portal or consular Declaration of Value.',
      },
      {
        title: 'Sworn Italian Translations',
        desc: 'Certified Italian translation of educational transcripts and civil records by officially recognized legal translators.',
      },
    ],
    weHandle: [
      'CIMEA DiploMe digital portal filing & tracking',
      'Coordination with certified Italian sworn translators',
      'Rigorous pre-submission seal and stamp audits',
      'Document sequence compilation for embassy compliance',
    ],
    youProvide: [
      'Original matric/inter & degree certificates',
      'IBCC, HEC, and MOFA attestation challans',
      'Family Registration Certificate (FRC) from NADRA',
      'Third-party government and translation fees',
    ],
  },
  {
    num: '03',
    shortName: 'Universitaly',
    tag: 'Phase 03 of 05 • Ministerial Pre-Enrolment',
    title: 'Mandatory Universitaly Portal Filing',
    duration: '2–3 Weeks Execution Window',
    docCount: '5 Digital Uploads',
    summary:
      'Execute the mandatory pre-enrolment on the Italian Ministry of Universities and Research (MUR) portal. This step is legally required to unlock your embassy visa file.',
    milestones: [
      {
        title: 'Ministerial Account & Dossier Configuration',
        desc: 'Configure your verified student profile on the Italian Universitaly pre-enrolment portal.',
      },
      {
        title: 'Credential & Equivalence Attachment',
        desc: 'Upload certified CIMEA statements, official offer letters, and designate consular jurisdiction (Islamabad or Karachi).',
      },
      {
        title: 'University Validation & Endorsement',
        desc: 'Monitor institutional review until the university international office electronically validates your pre-enrolment.',
      },
      {
        title: 'Ministerial Summary PDF (Riepilogo)',
        desc: 'Obtain the official validated Universitaly receipt with digital QR seal required for visa appointment booking.',
      },
    ],
    weHandle: [
      'Error-free profile creation on MUR Universitaly system',
      'Direct liaison with university registrars for fast-track validation',
      'Jurisdiction assignment between Islamabad & Karachi consulates',
      'Digital validation audit and Riepilogo retrieval',
    ],
    youProvide: [
      'Approved university admission offer',
      'CIMEA Statement of Comparability / Verification',
      'Biometric white-background digital photograph',
      'Valid international passport',
    ],
  },
  {
    num: '04',
    shortName: 'DSU & Visa',
    tag: 'Phase 04 of 05 • Scholarships & Visa Dossier',
    title: 'DSU Regional Scholarship & Visa Submission',
    duration: '3–6 Weeks Execution Window',
    docCount: '8 Financial Documents',
    summary:
      'Assemble your bulletproof financial dossier and apply for up to €8,500/year in regional DSU scholarships while securing your biometric visa submission slot.',
    milestones: [
      {
        title: 'VFS Global Embassy Appointment Slot',
        desc: 'Track and lock biometric study visa appointment dates at authorized VFS centers without black-market agents.',
      },
      {
        title: 'Financial Proof & Sponsorship Structuring',
        desc: 'Structure 6-month verifiable bank statements, tax returns, and legal sponsorship affidavits meeting MAECI standards.',
      },
      {
        title: 'Regional DSU Scholarship & ISEE Parificato',
        desc: 'Calculate ISEE metrics, compile family asset valuations, and submit regional grant applications for €8,500 + free meals.',
      },
      {
        title: 'Consular Mock Interview Coaching',
        desc: 'Rigorous 1-on-1 interview simulations testing academic rationale, post-study goals, and financial literacy.',
      },
    ],
    weHandle: [
      'Sponsorship affidavit drafting & bank audit',
      'Regional DSU scholarship portal submission (ER.GO, DiscoLazio, EDISU)',
      'Comprehensive visa cover letter & statement of purpose',
      'Personalized 1-on-1 consular interview prep sessions',
    ],
    youProvide: [
      '6-month bank statement with required closing balance',
      'Sponsor tax returns, employment proofs & salary slips',
      'Family wealth and property documentation for ISEE',
      'VFS appointment booking fee & consular visa fee',
    ],
  },
  {
    num: '05',
    shortName: 'Departure',
    tag: 'Phase 05 of 05 • Relocation & Settlement',
    title: 'Visa Issuance & Italian Onboarding',
    duration: '4–6 Weeks Execution Window',
    docCount: '3 Final Deliverables',
    summary:
      'Receive your Italian National Visa (Type D), complete crucial pre-departure protocols, and prepare for smooth onboarding and university matriculation.',
    milestones: [
      {
        title: 'National Study Visa (Type D) Audit',
        desc: 'Receive your stamped passport and verify visa validity dates, entry conditions, and Schengen duration.',
      },
      {
        title: 'Italian Tax Code (Codice Fiscale) Guidance',
        desc: 'Obtain your official Italian fiscal code needed for opening local bank accounts, signing leases, and SIM cards.',
      },
      {
        title: 'Verified Student Housing Sourcing',
        desc: 'Guidance through university residences and verified private housing contracts to satisfy immigration checks.',
      },
      {
        title: 'Permesso di Soggiorno Briefing',
        desc: 'Complete breakdown of filing your Italian Residence Permit within 8 days of landing at Italian Poste Italiane.',
      },
    ],
    weHandle: [
      'Codice Fiscale filing instructions & forms',
      'Post-arrival Permesso di Soggiorno kit roadmap',
      'Accommodation verification assistance',
      'Student network connection in your destination city',
    ],
    youProvide: [
      'Flight ticket booking to destination Italian airport',
      'Schengen-compliant international student health insurance',
      'Original attested educational dossier for physical enrollment',
      'Passport with stamped Type D study visa',
    ],
  },
];

export default function ProcessPage() {
  const [activePhase, setActivePhase] = useState<number>(0);

  // Keyboard navigation for power users (left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setActivePhase((prev) => Math.min(phases.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActivePhase((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ════════════════════════════════════════════
          1. HERO HEADER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 relative overflow-hidden pt-12 pb-14 border-b border-slate-800">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.05] blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[35%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
                🧭 Executive European Advisory Roadmap
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                The Italian Visa &amp; Admission Roadmap
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-3.5 leading-relaxed">
                A structured 5-phase advisory roadmap designed to eliminate embassy delays, secure DSU regional scholarship grants, and guarantee non-EU Universitaly compliance.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  5 Sequential Milestones
                </span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Zero Embassy Defaults
                </span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Proactive Deadline Tracking
                </span>
              </div>
            </div>

            {/* Right Column (5 cols) - Roadmap Quick Facts Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md text-white">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-sm font-bold text-white tracking-wide">Roadmap Specifications</span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    2027/2028 Intakes
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Execution Window</p>
                        <p className="text-xs sm:text-sm font-bold text-white">3 – 5 Months (Sequential)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 hidden sm:inline">
                      End-to-End
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Governing Portals</p>
                        <p className="text-xs sm:text-sm font-bold text-white">CIMEA, Universitaly, VFS</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 hidden sm:inline">
                      Official
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Scholarship Scope</p>
                        <p className="text-xs sm:text-sm font-bold text-white">€8,500/yr + 100% Tuition</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline">
                      DSU / CAF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. MAIN ADVISORY ROADMAP SECTION
      ════════════════════════════════════════════ */}
      <section className="bg-slate-50/70 py-12 border-t border-slate-200/60">
        {/* 2.1 TOP VISUAL STEPPER */}
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <div className="relative">
            {/* Background connecting line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0 hidden md:block rounded-full" />
            {/* Active progress line */}
            <div
              className="absolute top-6 left-0 h-1 bg-emerald-500 -translate-y-1/2 z-0 hidden md:block rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
            />

            {/* Step Nodes */}
            <div className="flex items-center justify-between relative z-10 overflow-x-auto pb-4 md:pb-0 scrollbar-none gap-6 md:gap-0">
              {phases.map((phase, idx) => {
                const isActive = activePhase === idx;
                const isCompleted = idx < activePhase;
                return (
                  <button
                    key={phase.num}
                    type="button"
                    onClick={() => setActivePhase(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none min-w-[95px] md:min-w-0"
                    aria-label={`Switch to Phase ${phase.num}: ${phase.shortName}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-extrabold transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/25 shadow-lg shadow-emerald-500/30 scale-110'
                          : isCompleted
                          ? 'bg-emerald-600 text-white shadow-sm hover:scale-105'
                          : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-emerald-400 group-hover:text-emerald-600'
                      }`}
                    >
                      {isCompleted ? '✓' : phase.num}
                    </div>
                    <span
                      className={`text-xs mt-2.5 tracking-tight font-semibold transition-colors text-center ${
                        isActive
                          ? 'text-slate-900 font-bold'
                          : isCompleted
                          ? 'text-emerald-700'
                          : 'text-slate-500 group-hover:text-slate-800'
                      }`}
                    >
                      {phase.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2.2 ACTIVE PHASE SHOWCASE CARD */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50">
            {/* Card Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {phases[activePhase].tag}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                  {phases[activePhase].title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed max-w-2xl">
                  {phases[activePhase].summary}
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 shrink-0 mt-2 lg:mt-0">
                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200/80">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  {phases[activePhase].duration}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold border border-emerald-200/80">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  {phases[activePhase].docCount}
                </span>
              </div>
            </div>

            {/* Clean 2-Column Content Split Inside Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8">
              {/* Left Column (7 cols): Phase Milestones & Deliverables */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Phase Milestones &amp; Deliverables
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">4 Core Execution Items</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {phases[activePhase].milestones.map((item, idx) => (
                    <div key={idx} className="py-4 first:pt-1 flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): Strategic Support Pillars */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                {/* Card 1: What ItaloPath Executes */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        What ItaloPath Executes
                      </h4>
                      <p className="text-[11px] text-slate-400">Direct agency operational oversight</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {phases[activePhase].weHandle.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 2: Client Action Required */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-700">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                        Client Action Required
                      </h4>
                      <p className="text-[11px] text-emerald-700/80">Documentation &amp; inputs to provide</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {phases[activePhase].youProvide.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                type="button"
                disabled={activePhase === 0}
                onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                className="text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                ← Previous Step
              </button>

              <div className="text-xs font-semibold text-slate-400 hidden sm:block">
                Phase {activePhase + 1} of {phases.length} • Use ← → arrow keys to navigate
              </div>

              {activePhase < phases.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActivePhase((prev) => Math.min(phases.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm cursor-pointer"
                >
                  Proceed to Next Phase →
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
                >
                  Start Profile Assessment →
                </Link>
              )}
            </div>
          </div>

          {/* 2.3 BOTTOM FLOATING BANNER */}
          <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                ⚡ Take The First Step Today
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ready to initiate Phase {phases[activePhase].num} for your profile?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Book your comprehensive 2027/2028 admission &amp; DSU scholarship evaluation.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20"
            >
              Initiate Phase {phases[activePhase].num} Evaluation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. BOTTOM CTA
      ════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-100/60 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Unsure where your profile fits?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              Get an expert evaluation for the current active intakes. We&apos;ll map out your exact timeline and university options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20 text-base sm:text-lg"
            >
              Get Evaluated for 2027/2028 Intakes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
