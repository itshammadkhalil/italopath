"use client";

import { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  GraduationCap
} from 'lucide-react';

const faqs = [
  {
    q: "Can any consultancy guarantee a visa?",
    a: "No. Absolutely not. Visa decisions are made exclusively by Italian embassies and consulates. Any consultancy claiming to guarantee visa approval is misleading you. What we can do is ensure your documentation is strictly compliant with embassy requirements to maximize your chances."
  },
  {
    q: "What if my VFS appointment gets delayed?",
    a: "VFS appointment availability depends heavily on seasonal demand and embassy backlogs. During peak season (June–August), slots fill instantly. We help you monitor slot availability and guide you on optimal booking strategies, but we cannot bypass or control VFS scheduling."
  },
  {
    q: "Are university entry requirements really that simple?",
    a: "Italian public universities generally have transparent barriers to entry compared to the UK or US — but they're not zero. You still need a valid secondary/university qualification, language proficiency (IELTS/PTE), and in some cases, must pass an entrance exam (TOLC). We evaluate your eligibility honestly."
  },
  {
    q: "What if I don't get the DSU scholarship?",
    a: "DSU regional scholarships are competitive and strictly based on your family's financial situation (ISEE score) and academic merit. If your ISEE Parificato is above the regional threshold, you will not qualify for the maximum benefits. We assess your financial documents before you commit to applying."
  },
  {
    q: "How much does studying in Italy actually cost?",
    a: "With a scholarship: potentially €0 for tuition + free accommodation + cash grants. Without: tuition at public universities ranges from €200–€4,000/year depending on your ISEE, plus €400–€700/month in living costs depending on the city. We give you a realistic budget breakdown upfront."
  }
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-24">
      
      {/* ════════════════════════════════════════════
          1. UNIFIED PREMIUM HERO
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white py-12 lg:py-14 px-6 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[10%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.04] blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-4">
              🇮🇹 Ethical Advisory Standard
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              The Anti-Consultancy Approach
            </h1>
            <p className="text-sm lg:text-base text-slate-300 max-w-xl mt-3 leading-relaxed">
              Built out of frustration with misleading agents, hidden charges, and fake visa guarantees. We provide strictly legal, transparent pathways to Italian public universities.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Direct Student Support
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                100% Legal Framework
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Zero False Guarantees
              </span>
            </div>
          </div>

          {/* Right Column (5 cols) - Creed Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md text-white">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white tracking-wide">Core Operating Principles</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  Strict Policy
                </span>
              </div>

              {/* 3 bullet rows */}
              <div className="space-y-3">
                {[
                  {
                    title: "Zero Commission from Universities",
                    desc: "No biased recommendations",
                  },
                  {
                    title: "Full Portal Ownership",
                    desc: "You keep your own Universitaly logins",
                  },
                  {
                    title: "Document Integrity",
                    desc: "We reject forged or altered paperwork",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs py-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">{item.title}</span>
                      <span className="text-slate-400 block text-[11px] mt-0.5">({item.desc})</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                <p className="text-xs text-slate-400 font-medium italic">
                  Our commitment to merit-based education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. BUILT ON TRANSPARENCY
      ════════════════════════════════════════════ */}
      <section className="pt-12 pb-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">Built on Absolute Transparency</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">We don&apos;t sell dreams; we execute legal pathways. Our process is rooted in honesty and compliance with Italian law.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Search className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">100% Document Transparency</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Every document we submit on your behalf—to CIMEA, Universitaly, or the Embassy—is shared with you. You own your application.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Honest Assessment</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              We rigorously evaluate your academic and financial profile. If you don&apos;t qualify for a university or scholarship, we will tell you upfront before taking your money.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldAlert className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">No Visa Guarantees</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Visas are granted exclusively by the Italian Diplomatic Missions. We guarantee a flawless file, but we never guarantee a visa.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. HOW WE'RE DIFFERENT (Comparison)
      ════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/60 border-y border-slate-200/60 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold uppercase tracking-wider">
              HEAD-TO-HEAD COMPARISON
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 text-center mt-3 mb-8">
              How We&apos;re Different
            </h2>
          </div>

          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1.5fr] gap-4 pb-4 border-b border-slate-200/80 items-center">
            <div className="hidden md:block text-xs font-bold text-slate-400 uppercase tracking-wider">CRITERIA</div>
            <div className="text-center text-xs font-bold text-rose-500 uppercase tracking-wider">TRADITIONAL AGENTS</div>
            <div className="text-center text-xs font-bold text-emerald-600 uppercase tracking-wider">ITALOPATH</div>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              { label: "Visa Outcome", bad: "Fake 100% Guarantees", good: "Honest File Prep Only" },
              { label: "University Selection", bad: "Partner Unis Only (Commission based)", good: "Top Public Universities (Merit based)" },
              { label: "Pricing Structure", bad: "Hidden Fees & Cuts", good: "Flat Transparent Fee" },
              { label: "Account Control", bad: "Agents keep your passwords", good: "You own your portals" },
              { label: "Scholarship Support", bad: "Ignored or charged extra", good: "Core DSU processing included" },
            ].map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1.5fr] gap-4 py-4 items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="hidden md:block font-bold text-sm text-slate-800">{row.label}</div>
                <div className="flex justify-center">
                  <span className="text-rose-600 bg-rose-50/70 border border-rose-200/60 rounded-xl px-3 py-2 text-xs font-medium inline-flex items-center gap-1.5 text-center">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{row.bad}</span>
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 text-center shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{row.good}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. FOUNDER / OPERATIONAL ETHICS (Manifesto)
      ════════════════════════════════════════════ */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (5 Cols - Structured Credibility Card) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            {/* Top accent: Soft emerald glow in corner */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium inline-block mb-4">
                🇮🇹 Ground Truth
              </span>
              <h3 className="text-xl font-bold text-white mb-6">Our Operational Standard</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-semibold">Direct Italian University Liaison:</strong> Zero middlemen or local subcontracted agents.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-semibold">Student Portal Ownership:</strong> You hold all passwords to Universitaly and regional portals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-semibold">Strict Documentation Ethics:</strong> Flawless legalisation without forged or inflated credentials.
                  </span>
                </li>
              </ul>

              <span className="text-xs text-slate-400 border-t border-slate-800 pt-4 mt-6 block">
                Built on absolute student advocacy.
              </span>
            </div>
          </div>

          {/* Right Column (7 Cols - High-Impact Manifesto) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              OUR MANIFESTO
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Italy?
            </h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Higher education should be accessible based on your intellect and hard work, not the size of your bank balance.
              </p>
              <p>
                Italy’s DSU scholarship framework is one of the most generous in the world, yet thousands of students miss out each intake due to bureaucratic errors, missed deadlines, or poor guidance from uneducated agents.
              </p>
              <div className="bg-slate-50 border-l-4 border-emerald-500 p-5 rounded-r-xl my-6 text-slate-900 font-medium text-base italic leading-relaxed">
                &ldquo;We handle your applications with the exact same precision and urgency we would use for our own.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. REALITY CHECK FAQ
      ════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">The Reality Check FAQ</h2>
            <p className="text-lg text-slate-500">We prefer brutal honesty over comfortable lies.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-slate-50/50 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900 pr-8">{faq.q}</span>
                    <ChevronDown 
                      className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : 'group-hover:text-slate-600'}`}
                    />
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 text-sm">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
