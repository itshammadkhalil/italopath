import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  GraduationCap, 
  FileCheck, 
  Award, 
  Globe, 
  Banknote, 
  Shield,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Zap,
  Check,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = { 
  title: 'Our Services & Pricing | ItaloPath', 
  description: 'Comprehensive Italy study visa and university admission packages. Structured pricing, zero hidden fees, and zero success commissions.' 
};

export default function ServicesPage() {
  const services = [
    {
      title: "University Admission & Shortlisting",
      icon: GraduationCap,
      description: "We match your academic profile (CGPA, field of study) with the best Italian public universities offering English-taught degrees.",
      points: [
        "CGPA-based university matching",
        "Entrance exam (TOLC) guidance",
        "Application timeline management"
      ],
      pill: "Phase: Stage 1",
      delay: "100ms"
    },
    {
      title: "Document Legalisation",
      icon: FileCheck,
      description: "Navigate IBCC equivalence, HEC attestation, MOFA Apostille, and certified Italian translation requirements with precise guidance.",
      points: [
        "HEC & IBCC tracking",
        "MOFA Apostille assistance",
        "Certified translation coordination"
      ],
      pill: "Timeline: 3-6 Weeks",
      delay: "200ms"
    },
    {
      title: "CIMEA Statement of Comparability",
      icon: Award,
      description: "Obtain your Declaration of Value (DOV) or CIMEA Statement of Comparability — essential for university enrolment.",
      points: [
        "CIMEA portal navigation",
        "DOV consulate filing guidance",
        "Credential evaluation support"
      ],
      pill: "Deliverable: Verified CIMEA",
      delay: "300ms"
    },
    {
      title: "Universitaly Pre-Enrolment",
      icon: Globe,
      description: "Complete your Universitaly pre-enrolment application accurately — the mandatory step for non-EU students studying in Italy.",
      points: [
        "Portal account setup",
        "Document upload formatting",
        "Embassy routing confirmation"
      ],
      pill: "Deliverable: Universitaly Summary",
      delay: "400ms"
    },
    {
      title: "DSU Scholarship File Prep",
      icon: Banknote,
      description: "Prepare bulletproof DSU scholarship applications for regional agencies with perfectly calculated ISEE Parificato documentation.",
      points: [
        "ISEE Parificato document assembly",
        "FBR wealth & income proofing",
        "Regional portal (ER.GO, etc.) filing"
      ],
      pill: "Timeline: Summer (June-Aug)",
      delay: "500ms"
    },
    {
      title: "Visa Dossier & Interview Prep",
      icon: Shield,
      description: "Comprehensive visa file structuring and one-on-one embassy interview coaching to present your strongest case to VFS.",
      points: [
        "Financial documentation structuring",
        "Professional cover letter drafting",
        "Mock interview sessions"
      ],
      pill: "Phase: Final Stage",
      delay: "600ms"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* ════════════════════════════════════════════
          1. SLEEK HEADER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white pt-32 pb-20 px-6 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.04] blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center text-sm font-medium text-slate-400 mb-8 space-x-2 animate-fade-in-up">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4 text-emerald-400" />
            Specialized Italian Visa Advisory
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up delay-100 max-w-4xl mx-auto">
            Comprehensive Services for Italian Higher Education
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            From university admissions and Universitaly filings to DSU scholarships and visa file preparation — structured for maximum approval rates.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. CORE SERVICE CARDS (3x2 Grid)
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">The Core Expertise</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Our proven methodology broken down into actionable phases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                <div>
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md uppercase tracking-wider">
                    {service.pill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. STRUCTURED PRICING PACKAGES
      ════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Transparent Consulting Packages</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Flat fees. No hidden percentages. Choose the level of support you need.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Tier 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 flex flex-col h-full hover:bg-slate-800/80 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Admissions Only</h3>
              <p className="text-sm text-slate-400 mb-8 h-10">For students who just need university admission and initial DOV/CIMEA guidance.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> University shortlisting (up to 3)
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Application filing & tracking
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Initial CIMEA/DOV guidance
                </li>
              </ul>
              
              <div className="mb-6 inline-flex items-center justify-center w-full px-4 py-2 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700">
                Milestone: 50% upfront, 50% on offer letter
              </div>
              
              <Link 
                href="/contact?plan=admissions" 
                className="block w-full text-center py-3 px-6 rounded-xl font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Select This Plan
              </Link>
            </div>

            {/* Tier 2 (Most Popular) */}
            <div className="bg-slate-800 border-2 border-emerald-500 rounded-3xl p-8 flex flex-col h-full relative transform lg:-translate-y-4 shadow-2xl shadow-emerald-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                Most Popular
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Full End-to-End Package</h3>
              <p className="text-sm text-emerald-100/70 mb-8 h-10">From profile assessment to boarding your flight to Italy. We handle it all.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Admissions & Shortlisting
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> CIMEA & Document Legalisation
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Universitaly Portal Processing
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> DSU Scholarship Prep (ISEE)
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> VFS Visa Dossier & Mock Interview
                </li>
              </ul>
              
              <div className="mb-6 inline-flex items-center justify-center w-full px-4 py-2 bg-slate-900/80 text-emerald-300 text-xs font-medium rounded-lg border border-emerald-500/30">
                Milestone: 50% upfront, 50% on pre-enrolment
              </div>
              
              <Link 
                href="/contact?plan=full" 
                className="block w-full text-center py-4 px-6 rounded-xl font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Select This Plan
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 flex flex-col h-full hover:bg-slate-800/80 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Scholarship & Visa Only</h3>
              <p className="text-sm text-slate-400 mb-8 h-10">For students who already secured university admission and only need final step execution.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full DSU Scholarship handling
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Universitaly pre-enrolment review
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> VFS Visa Dossier assembly
                </li>
              </ul>
              
              <div className="mb-6 inline-flex items-center justify-center w-full px-4 py-2 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700">
                Milestone: 50% upfront, 50% on visa file completion
              </div>
              
              <Link 
                href="/contact?plan=visa" 
                className="block w-full text-center py-3 px-6 rounded-xl font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Select This Plan
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. TRUST REASSURANCE BANNER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-100 py-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <ShieldCheck className="w-10 h-10 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-slate-900">Zero Success Fees. Zero Hidden Percentages.</h4>
              <p className="text-slate-600 text-sm">Unlike other agents, we do not take a cut of your DSU scholarship stipend. 100% of your scholarship belongs to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. BOTTOM CTA
      ════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-10 md:p-14 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Need custom advice before committing?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Message us directly on WhatsApp for a quick, no-obligation profile evaluation.
          </p>
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#25D366] rounded-full hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
