"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  CheckCircle,
  ArrowRight,
  Lock,
  User,
  MapPin,
  GraduationCap,
  Award,
  Languages,
  Calendar,
  FileText,
  ChevronDown
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* ════════════════════════════════════════════
          1. UNIFIED DARK HERO BANNER
      ════════════════════════════════════════════ */}
      <section className="bg-slate-950 text-white py-12 lg:py-14 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[5%] w-[40%] h-[60%] rounded-full bg-emerald-500/[0.04] blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[10%] w-[35%] h-[50%] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mb-4">
              📋 Free Academic Evaluation
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Evaluate Your Eligibility for Italy
            </h1>
            <p className="text-sm lg:text-base text-slate-300 max-w-xl mt-3 leading-relaxed">
              Submit your academic scores for a comprehensive check on Italian public university admissions and DSU scholarship criteria. 100% confidential, response within 24 hours.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Free CGPA &amp; Credit Check
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Zero Spam Policy
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                Direct WhatsApp Analysis
              </span>
            </div>
          </div>

          {/* Right Column (5 cols) - Evaluation Perks Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-md text-white">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white tracking-wide">What You Will Receive</span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  100% Free
                </span>
              </div>

              <div className="space-y-3">
                {[
                  "Shortlist of 3–5 eligible public universities",
                  "DSU / Regional scholarship eligibility status",
                  "Clear document attestation roadmap (IBCC / HEC / MOFA)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs py-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  No commitment required • Free expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. FORM & SIDEBAR GRID
      ════════════════════════════════════════════ */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto px-6">
          
          {/* LEFT: Assessment Form (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Evaluation Request Received!</h2>
                  <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                    Our academic advisers will analyze your qualifications against entry requirements and DSU scholarship criteria. We will contact you via WhatsApp within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors"
                  >
                    ← Submit another profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Header & Micro-Trust */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-2.5">
                      ⚡ Free 2-Minute Assessment
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                      Academic Profile &amp; Eligibility Evaluation
                    </h2>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Submit your details for official course shortlisting and DSU regional grant eligibility.
                    </p>
                  </div>

                  {/* Section 1: Contact Information */}
                  <div className="space-y-4">
                    <div className="pb-1.5 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Contact Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <input
                            type="text"
                            id="fullName"
                            required
                            placeholder="e.g., Muhammad Ali"
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* WhatsApp Phone Number */}
                      <div>
                        <label htmlFor="whatsapp" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          WhatsApp Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <input
                            type="tel"
                            id="whatsapp"
                            required
                            placeholder="+92 300 1234567"
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Current City */}
                      <div>
                        <label htmlFor="city" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Current City *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <input
                            type="text"
                            id="city"
                            required
                            placeholder="e.g., Islamabad, Lahore, Karachi"
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Academic Background */}
                  <div className="space-y-4 pt-1">
                    <div className="pb-1.5 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Academic Background
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Current Education Level */}
                      <div>
                        <label htmlFor="educationLevel" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Current Education Level *
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <select
                            id="educationLevel"
                            required
                            defaultValue=""
                            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select your education level</option>
                            <option value="intermediate">Intermediate (FSc / ICS / ICom)</option>
                            <option value="alevels">A-Levels</option>
                            <option value="bachelors">Bachelor&apos;s Degree (16 Years)</option>
                            <option value="masters">Master&apos;s Degree (18 Years)</option>
                            <option value="other">Other Qualification</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>

                      {/* Passing Year & Marks / CGPA */}
                      <div>
                        <label htmlFor="marks" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Passing Year &amp; Marks / CGPA *
                        </label>
                        <div className="relative">
                          <Award className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <input
                            type="text"
                            id="marks"
                            required
                            placeholder="e.g., 2024 — 3.4/4.0 CGPA or 78%"
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* English Test Status */}
                      <div>
                        <label htmlFor="englishTest" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          English Test Status *
                        </label>
                        <div className="relative">
                          <Languages className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <select
                            id="englishTest"
                            required
                            defaultValue=""
                            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select test status</option>
                            <option value="ielts_6_plus">IELTS (6.0 or higher)</option>
                            <option value="ielts_below_6">IELTS (Below 6.0)</option>
                            <option value="pte">PTE Academic</option>
                            <option value="epc">English Proficiency Certificate (EPC)</option>
                            <option value="not_taken">Not Yet Taken / Planning to Take</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>

                      {/* Target Intake */}
                      <div>
                        <label htmlFor="targetIntake" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                          Target Intake *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                          <select
                            id="targetIntake"
                            required
                            defaultValue=""
                            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select target intake</option>
                            <option value="sep_2027">September 2027 (Fall Intake)</option>
                            <option value="feb_2028">February 2028 (Spring Intake - Select Programs)</option>
                            <option value="sep_2028">September 2028 (Future Planning)</option>
                            <option value="undecided">General Counseling / Undecided</option>
                          </select>
                          <ChevronDown className="absolute right-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="pt-1">
                      <label htmlFor="notes" className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 block">
                        Intended Field of Study or Special Questions
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3 text-slate-400 w-4 h-4 pointer-events-none" />
                        <textarea
                          id="notes"
                          rows={3}
                          placeholder="e.g., Interested in Computer Science or Mechanical Engineering masters programs. Need guidance on DSU ISEE requirements."
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-y"
                        />
                      </div>
                    </div>
                  </div>

                  {/* High-Impact CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Profile...
                        </span>
                      ) : (
                        <>
                          <span>Submit for Immediate Eligibility Review</span>
                          <ArrowRight className="w-4 h-4 ml-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-400 text-center mt-3 flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>256-bit Encrypted • Strictly Confidential • Zero Spam Guarantee</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Contact Sidebar (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: Direct Contact */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-5 sm:p-6">
              <h3 className="text-base font-bold text-slate-900 mb-4">Direct Contact</h3>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Phone</p>
                    <a href="tel:+923001234567" className="text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors">
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:info@italopath.tech" className="text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors">
                      info@italopath.tech
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://wa.me/923001234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 shadow-sm transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat on WhatsApp
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1 border-t border-slate-100 mt-2">
                  Mon–Sat: 10:00 AM – 7:00 PM (PKT) • Typical response &lt; 24h
                </div>
              </div>
            </div>

            {/* Card 2: What Happens Next? */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">What Happens Next?</h3>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  3 Steps
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    num: "01",
                    title: "Profile Review",
                    desc: "Our specialists analyze transcripts, GPA, and degree equivalency for Italian public universities.",
                  },
                  {
                    num: "02",
                    title: "Matching Check",
                    desc: "Cross-reference course catalogs and regional DSU scholarship income thresholds.",
                  },
                  {
                    num: "03",
                    title: "Direct WhatsApp Consultation",
                    desc: "Receive your tailored eligibility report and next steps within 24 hours.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
