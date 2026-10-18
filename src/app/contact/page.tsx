"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  ArrowRight,
  ClipboardList,
  PhoneCall,
  FileText,
  UserCheck
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
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Free Eligibility Evaluation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Submit your academic profile and our Italy education specialists will assess your eligibility for Italian universities and DSU scholarships within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* LEFT: Assessment Form */}
          <div className="w-full lg:w-2/3 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Thank you!</h2>
                  <p className="text-slate-600 text-lg max-w-md">
                    Your profile has been submitted successfully. We'll contact you within 24–48 hours via WhatsApp to discuss your options.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    Submit another profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          placeholder="Enter your full name"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1.5">
                          WhatsApp Phone Number
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          required
                          placeholder="+92 300 1234567"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* City */}
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1.5">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          placeholder="e.g., Islamabad, Lahore, Karachi"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* Education Level */}
                      <div>
                        <label htmlFor="educationLevel" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Current Education Level
                        </label>
                        <select
                          id="educationLevel"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                        >
                          <option value="" disabled>Select your education level</option>
                          <option value="intermediate">Intermediate (FSc/ICS)</option>
                          <option value="alevels">A-Levels</option>
                          <option value="bachelors">Bachelor's Degree</option>
                          <option value="masters">Master's Degree</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Passing Year & Marks / CGPA */}
                      <div>
                        <label htmlFor="marks" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Passing Year & Marks / CGPA
                        </label>
                        <input
                          type="text"
                          id="marks"
                          required
                          placeholder="e.g., 2024 — 3.5/4.0 CGPA or 78%"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>

                      {/* English Test Status */}
                      <div>
                        <label htmlFor="englishTest" className="block text-sm font-medium text-slate-700 mb-1.5">
                          English Test Status
                        </label>
                        <select
                          id="englishTest"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                        >
                          <option value="" disabled>Select your test status</option>
                          <option value="ielts_6_plus">IELTS (6.0+)</option>
                          <option value="ielts_below_6">IELTS (Below 6.0)</option>
                          <option value="pte">PTE Academic</option>
                          <option value="epc">English Proficiency Certificate</option>
                          <option value="not_taken">Not Yet Taken</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Target Intake */}
                      <div>
                        <label htmlFor="targetIntake" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Target Intake
                        </label>
                        <select
                          id="targetIntake"
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 bg-white"
                        >
                          <option value="" disabled>Select target intake</option>
                          <option value="sep_2026">September 2026</option>
                          <option value="feb_2027">February 2027</option>
                          <option value="sep_2027">September 2027</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        placeholder="Any specific questions or details about your profile..."
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400 resize-y"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl py-3.5 px-4 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Submit Profile for Review
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Contact Sidebar */}
          <div className="w-full lg:w-1/3 flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Card 1: Direct Contact */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a href="tel:+923001234567" className="text-sm hover:text-emerald-600 transition-colors">+92 300 123 4567</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href="mailto:info@italopath.com" className="text-sm hover:text-emerald-600 transition-colors">info@italopath.com</a>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/923001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl py-3 px-4 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Card 2: Office Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-500" />
                Office Hours
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Monday – Saturday</span>
                  <span>10:00 AM – 7:00 PM (PKT)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Response time: <span className="font-medium text-slate-900">Within 24 hours</span>
                </p>
              </div>
            </div>

            {/* Card 3: What Happens Next? */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 relative overflow-hidden">
              <h3 className="text-lg font-bold text-slate-900 mb-5 relative z-10">What Happens Next?</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border-2 border-white flex items-center justify-center shrink-0 relative z-20">
                    <ClipboardList className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Step 1: Profile Review</h4>
                    <p className="text-xs text-slate-500 mt-0.5">24–48 hrs</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center shrink-0 relative z-20">
                    <PhoneCall className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Step 2: Eligibility Assessment Call</h4>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center shrink-0 relative z-20">
                    <FileText className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Step 3: Customized Plan & Fee Quote</h4>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center shrink-0 relative z-20">
                    <UserCheck className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Step 4: Onboarding & Document Collection</h4>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-100 z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
