import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,
  Banknote,
  Globe,
  Briefcase,
  Shield,
  Eye,
  Target,
  ArrowRight,
  MessageCircle,
  Quote,
  CheckCircle,
  Building2,
  FileCheck,
  Users,
  Award,
} from 'lucide-react';

const universities = [
  { name: "Sapienza University of Rome", short: "Sapienza" },
  { name: "Politecnico di Milano", short: "PoliMi" },
  { name: "Alma Mater — University of Bologna", short: "UNIBO" },
  { name: "University of Padua", short: "UNIPD" },
  { name: "Politecnico di Torino", short: "PoliTO" },
  { name: "University of Milan", short: "UNIMI" },
  { name: "University of Florence", short: "UNIFI" },
  { name: "University of Turin", short: "UNITO" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — Premium 2-column split layout
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#090D16]">
        {/* Background mesh gradients — subtle, not washed-out */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[60%] rounded-full bg-[#10A985]/[0.04] blur-[120px]"></div>
          <div className="absolute bottom-[-25%] right-[-10%] w-[45%] h-[55%] rounded-full bg-blue-500/[0.03] blur-[120px]"></div>
          <div className="absolute top-[40%] right-[30%] w-[25%] h-[25%] rounded-full bg-violet-500/[0.02] blur-[100px]"></div>
        </div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 z-[1] opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* ── Left Column: 7 cols ── */}
            <div className="lg:col-span-7">
              {/* Intake badge */}
              <div className="animate-fade-in-up mb-8">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-slate-700/60 text-sm font-medium text-slate-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A985] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10A985]"></span>
                  </span>
                  🇮🇹 Italian Intakes 2026/2027 Open
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up delay-100 leading-[1.1]">
                Study in Italy with{' '}
                <span className="bg-gradient-to-r from-[#10A985] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
                  Fully Funded Scholarships
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 animate-fade-in-up delay-200">
                Direct admissions into top public universities, 100% tuition waivers, and €8,500/yr regional grants. Fully transparent process from Universitaly to visa approval.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#10A985] hover:bg-[#0D9070] text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#10A985]/20 hover:shadow-xl hover:shadow-[#10A985]/30 hover:-translate-y-0.5"
                >
                  Check Eligibility
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/[0.04] border border-slate-700/60 hover:bg-white/[0.08] hover:border-slate-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust metric line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 animate-fade-in-up delay-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10A985]" />
                  Transparent Processing
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10A985]" />
                  Official CIMEA/Universitaly
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10A985]" />
                  Zero Hidden Fees
                </span>
              </div>
            </div>

            {/* ── Right Column: 5 cols — Visual Focus ── */}
            <div className="lg:col-span-5 relative animate-fade-in-up delay-200 py-4 lg:py-8">
              {/* Main image frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-slate-700/40 aspect-[4/5] max-h-[520px]">
                <Image
                  src="/images/university-courtyard.png"
                  alt="Historic Italian university courtyard with Renaissance arches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
                {/* Subtle inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/60 via-transparent to-[#090D16]/20"></div>
              </div>

              {/* Floating Badge — Top Right: DSU Grant */}
              <div className="absolute -top-3 -right-3 sm:top-4 sm:-right-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl px-4 py-3 shadow-xl shadow-black/30 animate-fade-in-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#10A985]/15 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#10A985]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-tight">€8,500<span className="text-sm font-medium text-slate-400">/yr</span></div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">DSU Regional Grant</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge — Bottom Left: Universitaly */}
              <div className="absolute -bottom-3 -left-3 sm:bottom-6 sm:-left-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl px-4 py-3 shadow-xl shadow-black/30 animate-fade-in-up delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-500/15 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">Universitaly 2026</div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Verified Applications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Stats Bar — Dark glass container ── */}
          <div className="mt-12 animate-fade-in-up delay-400">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-md overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {[
                  { value: "200+", label: "Students Placed" },
                  { value: "€8.5K", label: "Avg. Scholarship" },
                  { value: "95%", label: "Visa Success Rate" },
                  { value: "30+", label: "Partner Universities" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`text-center py-6 px-4 ${
                      idx < 3 ? "border-r border-slate-800/60" : ""
                    } ${idx < 2 ? "border-b sm:border-b-0 border-slate-800/60" : idx === 2 ? "border-b sm:border-b-0 border-slate-800/60" : ""}`}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHY STUDY IN ITALY — Image-rich cards
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10A985]/10 text-[#10A985] text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Why Italy?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Study in Italy?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">World-class education paired with unmatched financial support and a lifestyle most students only dream of.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {/* Tuition Card */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-2xl">
                <Image src="/images/lecture-hall.png" alt="Italian lecture hall" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-10 h-10 bg-[#10A985]/15 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5 text-[#10A985]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Tuition Waivers</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Most Italian public universities charge <span className="text-[#10A985] font-semibold">€0–€200/year</span> for eligible students. Study at world-ranked institutions for a fraction of the cost.
                  </p>
                </div>
              </div>
            </div>

            {/* DSU Card */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-2xl">
                <Image src="/images/scholarship-euros.png" alt="Italian scholarship documents" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-10 h-10 bg-[#10A985]/15 rounded-xl flex items-center justify-center mb-4">
                    <Banknote className="w-5 h-5 text-[#10A985]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">DSU Scholarships</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Regional cash grants of <span className="text-[#10A985] font-semibold">€7,000–€8,500/year</span> plus free accommodation & canteen meals through ER.GO, LazioDisco, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Schengen Card */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-2xl">
                <Image src="/images/italian-cityscape.png" alt="Florence skyline" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-10 h-10 bg-[#10A985]/15 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-[#10A985]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Schengen Mobility</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Travel across <span className="text-[#10A985] font-semibold">29 Schengen countries</span> with your Italian student residence permit. Weekend in Paris, study in Milan.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Rights Card */}
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300">
              <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-2xl">
                <Image src="/images/students-collaborating.png" alt="Students collaborating" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-10 h-10 bg-[#10A985]/15 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5 text-[#10A985]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Part-Time Work Rights</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Legal right to work <span className="text-[#10A985] font-semibold">20 hours/week</span> during your studies, helping you gain experience and support your living costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          STUDENT LIFE — Full-width image+text alternating
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="relative group">
              <div className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                <Image src="/images/students-collaborating.png" alt="Diverse international students studying together in an Italian piazza" fill sizes="100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#10A985]/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#10A985]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">200+</div>
                    <div className="text-xs text-slate-500">Students Placed in 2024–25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10A985]/10 text-[#10A985] text-sm font-semibold mb-6">
                <Globe className="w-4 h-4" />
                Student Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Study in Historic Halls.<br />
                <span className="text-[#10A985]">Live the Italian Dream.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Italy isn&apos;t just a study destination — it&apos;s a life-changing experience. From Renaissance lecture halls in Bologna to cutting-edge labs in Milan, you&apos;ll study in environments that have shaped human knowledge for centuries.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Study at universities ranked in the global top 200",
                  "Live in cities with rich culture, art, and cuisine",
                  "Join a vibrant international student community",
                  "Build a career pathway into the European job market",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10A985] mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="inline-flex items-center gap-2 text-[#10A985] font-semibold hover:gap-3 transition-all duration-200">
                Explore Our Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          4-STEP PATHWAY — With courtyard image bg
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background courtyard image */}
        <Image src="/images/university-courtyard.png" alt="Italian university courtyard" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0F172A]/92"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm font-semibold text-white mb-4 backdrop-blur-sm">
              <FileCheck className="w-4 h-4 text-[#10A985]" />
              Step-by-Step
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Your Journey to Italy in 4 Steps</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A clear, transparent roadmap from initial consultation to arriving in Italy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: '01', title: 'Profile Assessment', desc: 'We evaluate your academic background, CGPA, and financial eligibility for the best-fit universities.', icon: Target },
              { num: '02', title: 'Document Preparation', desc: 'IBCC, HEC, MOFA attestation, certified Italian translations, and CIMEA/DOV applications.', icon: FileCheck },
              { num: '03', title: 'Universitaly & Visa', desc: 'Universitaly pre-enrolment, DSU scholarship filing, visa documentation and embassy coaching.', icon: Globe },
              { num: '04', title: 'Welcome to Italy', desc: 'Pre-departure briefing, accommodation search, Codice Fiscale, and permesso di soggiorno guidance.', icon: GraduationCap },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] hover:border-[#10A985]/30 transition-all duration-500 relative">
                  <div className="absolute top-5 right-5 text-5xl font-black text-white/[0.04] group-hover:text-[#10A985]/10 transition-colors">{step.num}</div>
                  <div className="w-12 h-12 bg-[#10A985]/15 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#10A985]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/process" className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] border border-white/[0.1] text-white font-semibold rounded-xl hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-200 backdrop-blur-sm">
              View Full Roadmap
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHY ITALOPATH — Trust section with image
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text side first on this row */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10A985]/10 text-[#10A985] text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Why Families Trust<br />
                <span className="text-[#10A985]">ItaloPath</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In an industry plagued by false promises and hidden fees, we chose a different path. Radical transparency, honest assessments, and zero visa guarantees — because that&apos;s what you deserve.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Eye, title: "Transparent File Handling", desc: "Every document is shared with you. No black-box processing. You own your complete file." },
                  { icon: Shield, title: "No Fake Visa Promises", desc: "We never guarantee visa outcomes. Embassies decide independently. We prepare your strongest case." },
                  { icon: Target, title: "Personalized University Selection", desc: "We match your CGPA, budget, and career goals with the right Italian university — not a one-size-fits-all list." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#10A985]/20 transition-all duration-300">
                      <div className="w-11 h-11 bg-[#10A985]/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#10A985]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image side */}
            <div className="relative group order-first lg:order-last">
              <div className="relative h-[400px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                <Image src="/images/happy-graduates.png" alt="International students celebrating graduation at an Italian university" fill sizes="100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">95%</div>
                    <div className="text-xs text-slate-500">Visa Approval Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          TRANSPARENT ADMISSIONS — Authority / trust section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10A985]/10 text-[#10A985] text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Transparent Admissions with ItaloPath</h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">We work directly with Italian institutional processes — CIMEA credential validation, Universitaly pre-enrolment, and embassy documentation — with full visibility at every step.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col h-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                <Image src="/images/scholarship-euros.png" alt="Italian visa and university documents" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10A985]/10 text-[#10A985] text-xs font-semibold mb-3">
                    <FileCheck className="w-3.5 h-3.5" />
                    CIMEA Validated
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Credential Evaluation</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Your qualifications are validated through CIMEA&apos;s official Statement of Comparability — recognized by all Italian universities.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col h-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                <Image src="/images/university-courtyard.png" alt="Historic Italian university courtyard" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10A985]/10 text-[#10A985] text-xs font-semibold mb-3">
                    <Globe className="w-3.5 h-3.5" />
                    Universitaly Portal
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Enrolment Filing</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">We guide you through every step of the Universitaly portal — document uploads, deadline monitoring, and confirmation tracking.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col h-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                <Image src="/images/lecture-hall.png" alt="Students in Italian lecture hall" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10A985]/10 text-[#10A985] text-xs font-semibold mb-3">
                    <Shield className="w-3.5 h-3.5" />
                    Embassy Ready
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Visa Documentation</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Complete visa file preparation with financial documentation structuring, cover letters, and one-on-one mock interview coaching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          UNIVERSITY PARTNERS — Multi-university badge marquee
      ═══════════════════════════════════════════════════════ */}
      <section className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-2">
              Applications Across 50+ Italian Public Institutions
            </p>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              We assist with admissions and Universitaly filings for English-taught programs across all major state universities in Italy.
            </p>
          </div>

          {/* Pill badge rows */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl py-6 px-6 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Politecnico di Milano", code: "PoliMi" },
                { name: "Sapienza University of Rome", code: "SAP" },
                { name: "University of Bologna", code: "UNIBO" },
                { name: "University of Padua", code: "UNIPD" },
                { name: "Politecnico di Torino", code: "PoliTO" },
                { name: "University of Milan", code: "UNIMI" },
                { name: "University of Florence", code: "UNIFI" },
                { name: "University of Pisa", code: "UNIPI" },
                { name: "University of Genoa", code: "UNIGE" },
                { name: "Ca' Foscari Venice", code: "CAFOS" },
                { name: "University of Messina", code: "UNIME" },
                { name: "University of Pavia", code: "UNIPV" },
              ].map((uni, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-full hover:border-emerald-500/40 hover:bg-slate-800 transition-all duration-200 cursor-default"
                >
                  <span className="text-[10px] font-black text-emerald-500/70 group-hover:text-emerald-400 tracking-wider transition-colors shrink-0">
                    🇮🇹
                  </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                    {uni.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-400 transition-colors hidden sm:inline">
                    {uni.code}
                  </span>
                </div>
              ))}

              {/* Overflow pill */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 border border-dashed border-slate-700/60 rounded-full cursor-default">
                <span className="text-sm font-medium text-slate-500 whitespace-nowrap">+ 40 more universities</span>
              </div>
            </div>
          </div>

          {/* Disclaimer pill */}
          <div className="flex justify-center mt-5">
            <span className="inline-flex items-center gap-2 text-xs text-slate-500 px-4 py-2 bg-slate-900/60 border border-slate-800 rounded-full">
              <span className="text-emerald-500">✓</span>
              100% Public State Universities
              <span className="text-slate-700">•</span>
              <span className="text-emerald-500">✓</span>
              Merit-Based Admissions
              <span className="text-slate-700">•</span>
              <span className="text-emerald-500">✓</span>
              No Private Tie-in Biases
            </span>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS — Verified student profiles
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10A985]/10 text-[#10A985] text-sm font-semibold mb-4">
              <Quote className="w-4 h-4" />
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-500">Real results from real students who trusted ItaloPath.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                badge: "Full DSU Awardee",
                badgeColor: "bg-emerald-50 text-emerald-700 border border-emerald-200",
                text: "ItaloPath guided me through every step. I secured a full DSU scholarship — free accommodation, meals, and a ",
                highlight: "€6,500 Cash Grant",
                textEnd: " deposited directly to my Italian bank. Zero tuition. Could not have done this without them.",
                initials: "AR",
                color: "bg-blue-600",
                author: "Ahmed R.",
                course: "MSc Data Science, University of Bologna",
                intake: "2025/2026 Intake"
              },
              {
                stars: 5,
                badge: "Verified Student Visa",
                badgeColor: "bg-blue-50 text-blue-700 border border-blue-200",
                text: "Their honest approach set them apart. No false promises. They told me upfront, prepared the strongest file possible, and my visa was approved on first attempt. The ",
                highlight: "Fast-track CIMEA",
                textEnd: " process saved weeks of confusion.",
                initials: "FK",
                color: "bg-rose-600",
                author: "Fatima K.",
                course: "MSc International Relations, Sapienza University",
                intake: "2024/2025 Intake"
              },
              {
                stars: 5,
                badge: "PoliMi Admitted",
                badgeColor: "bg-amber-50 text-amber-700 border border-amber-200",
                text: "From document prep to visa coaching, they were with me throughout. The mock interview sessions were invaluable. I got into ",
                highlight: "Politecnico di Milano",
                textEnd: " with Zero Tuition and a full scholarship file ready before the deadline. Highly recommend!",
                initials: "HM",
                color: "bg-violet-600",
                author: "Hassan M.",
                course: "MEng Mechanical Engineering, PoliMi",
                intake: "2025/2026 Intake"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300/60 transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-base">★</span>
                  ))}
                </div>

                {/* Badge */}
                <span className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold mb-4 ${t.badgeColor}`}>
                  ✓ {t.badge}
                </span>

                {/* Quote */}
                <p className="text-slate-700 leading-relaxed text-sm mb-6 flex-1">
                  &ldquo;{t.text}<strong className="text-slate-900 font-bold">{t.highlight}</strong>{t.textEnd}&rdquo;
                </p>

                {/* Student Identity */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-sm font-black text-white">{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500 truncate">{t.course}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded-md whitespace-nowrap">{t.intake}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          LEAD CAPTURE CTA — With Florence background
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/italian-cityscape.png" alt="Florence sunset panorama" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#10A985]/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Ready to Start Your <br className="hidden sm:block" />Italian Education Journey?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100 leading-relaxed">
            Get a free eligibility evaluation from our Italy education specialists. We&apos;ll assess your profile and create a personalized roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10A985] hover:bg-[#0D9070] text-white font-bold rounded-xl transition-all duration-200 text-lg shadow-lg shadow-[#10A985]/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
