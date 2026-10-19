import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  UtensilsCrossed, 
  Banknote, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Users,
  Briefcase,
  Building2,
  FileCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete DSU Italian Regional Scholarships Guide',
  description:
    'How to qualify for full tuition waivers, free hostel, and up to €8,500 living stipends. ISEE-Parificato calculation and document requirements explained for Pakistani students.',
};

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      
      {/* ════════════════════════════════════════════
          1. DYNAMIC HERO & ESTIMATOR CARD
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 border-b border-slate-800 relative overflow-hidden py-12 lg:py-14">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-emerald-500/[0.04] blur-[120px]"></div>
          <div className="absolute bottom-[-30%] right-[-10%] w-[40%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-4">
              💰 Need-Based Regional Funding
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Italian Regional Scholarships<br className="hidden sm:inline" /> (DSU) Guide
            </h1>
            <p className="text-sm lg:text-base text-slate-300 max-w-xl mt-3 leading-relaxed">
              A complete breakdown of ISEE Parificato calculations, 100% tuition waivers, subsidized accommodation, and up to €8,500 annual living allowances.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Zero Tuition Fees
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Monthly Cash Grants
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Free Canteen Passes
              </span>
            </div>
          </div>

          {/* Right Column (5 cols) - Modern Value Estimator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md text-white">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white tracking-wide">Regional Benefit Estimate</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  Up to €8,500/yr
                </span>
              </div>

              {/* List items */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Cash Stipend</span>
                  <span className="text-emerald-400 font-bold">€5,000 – €6,200/year</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Housing Support</span>
                  <span className="text-slate-200 font-medium text-right">Free Hostel or €2,500–€3,000 Stipend</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1.5">
                  <span className="text-slate-400">Daily Meals</span>
                  <span className="text-slate-200 font-medium text-right">1–2 Free Meals/Day at University Canteens</span>
                </div>
              </div>

              {/* Card Summary Box */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Net Tuition Cost</span>
                <span className="text-emerald-400 font-extrabold text-base">€0 / Year</span>
              </div>

              {/* Subtle text link */}
              <div className="mt-3.5 pt-2 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Calculate Your Family ISEE
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. 4-PILLAR COMPARATIVE BENEFITS
      ════════════════════════════════════════════ */}
      <section className="pt-12 pb-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">Comprehensive Benefits Breakdown</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            A DSU scholarship offers full-spectrum support, completely removing the financial barriers to living and studying in Italy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black text-emerald-600 mb-1">€6,200<span className="text-sm font-semibold text-slate-400">/yr</span></div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mt-4">
              <Banknote className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Cash Grant</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deposited directly into your Italian bank account to cover living expenses, books, and transport.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black text-emerald-600 mb-1">€3,000<span className="text-sm font-semibold text-slate-400">/yr</span></div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mt-4">
              <Home className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Free Accommodation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A guaranteed spot in university residence halls or a housing stipend if spots are unavailable.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black text-emerald-600 mb-1">€4,000<span className="text-sm font-semibold text-slate-400">/yr</span></div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mt-4">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tuition Waiver</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complete exemption from university tuition fees. You only pay a minor regional tax (approx. €156/yr).
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl font-black text-emerald-600 mb-1">Meals</div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mt-4">
              <UtensilsCrossed className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Free Canteen Meals</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full access to university canteens offering 2 free, high-quality Italian meals per day.
            </p>
          </div>
        </div>

        {/* Unified Summary Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/20">
            <CheckCircle2 className="w-5 h-5" />
            Total Annual Benefit: €7,000 – €8,500+ Guaranteed for Eligible Profiles
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3 & 4. DOCUMENTS & ISEE PARIFICATO
      ════════════════════════════════════════════ */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Required Financial Documents (3 Cards) */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Required Financial Documents</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                To calculate your ISEE score, you must provide officially translated and attested (MOFA) documents proving your family's financial status.
              </p>

              <div className="space-y-6">
                {/* Doc Card 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Family & Identity</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Family Registration Certificate (FRC)</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> NADRA Family Tree (if applicable)</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Passports / CNIC of all family members</li>
                    </ul>
                  </div>
                </div>

                {/* Doc Card 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Income Proof (Parents/Guardian)</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Salary Slips (last 3-6 months)</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Bank Statements (last 6 months)</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Employer Certificate or Tax Returns</li>
                    </ul>
                  </div>
                </div>

                {/* Doc Card 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-5 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Wealth & Property</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> FBR Wealth Statement / Asset Declaration</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Property/Land Ownership Valuation</li>
                      <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Utility Bills (as proof of residence size)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: ISEE Parificato Explained */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 bg-slate-900 rounded-3xl p-8 shadow-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                  <FileCheck className="w-3.5 h-3.5" />
                  Official CAF Processing
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6">ISEE Parificato Explained</h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-white font-semibold mb-2">What it is</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">The Italian equivalent of a financial means test designed specifically for foreign families with assets and income abroad.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">How it works</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">A designated CAF (Centro Assistenza Fiscale) in Italy processes your translated family financial documents to calculate your personalized ISEE score.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Why it matters</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">Your ISEE score is the single most important metric that determines both your eligibility for the scholarship and the total amount you receive.</p>
                  </div>
                </div>

                {/* Tip Box */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex gap-3 items-start">
                  <Info className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-emerald-100/90 leading-relaxed">
                    <strong className="text-emerald-400 font-semibold">Tip:</strong> An ISEE score under <span className="font-bold text-white">€24,000</span> generally guarantees the maximum stipend and free accommodation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. DISQUALIFICATION & SOLUTIONS
      ════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Protecting Your Scholarship</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Risks (Red/Amber) */}
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 lg:p-10">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Common Mistakes That Get Students Disqualified</h3>
            <ul className="space-y-5">
              {[
                "Missing or incomplete family financial documents during ISEE calculation.",
                "ISEE score calculated above the regional threshold due to improper asset declaration.",
                "Failure to meet minimum credit requirements (e.g., 20-30 ECTS) by the August deadline.",
                "Late submission of scholarship application on regional portals (ER.GO, EDISU, etc.).",
                "Inconsistent information between different financial documents."
              ].map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0 shadow-sm shadow-red-200"></span>
                  {mistake}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions (Emerald) */}
          <div className="bg-white border border-emerald-200 rounded-3xl p-8 lg:p-10 shadow-xl shadow-emerald-900/5">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">How ItaloPath Protects Your Scholarship</h3>
            <ul className="space-y-5">
              {[
                "Pre-assessment of your financial documents before translation to ensure correct ISEE scoring.",
                "Direct guidance on regional requirements for ER.GO, LazioDisco, EDISU, and DSU Toscana.",
                "Flawless application filing on regional portals ahead of tight deadlines.",
                "Strategic advice on property/asset declaration to keep your ISEE score optimized.",
                "Deadline tracking and minimum credit monitoring during your first year."
              ].map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#10A985] hover:bg-[#0D9070] rounded-xl transition-all shadow-lg hover:shadow-[#10A985]/20 hover:-translate-y-0.5"
          >
            Get Your Family ISEE Assessed Before Applying
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
