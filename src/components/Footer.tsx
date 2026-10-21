import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/scholarships", label: "DSU Scholarships" },
  { href: "/process", label: "Process & Timeline" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Free Assessment" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Italo<span className="text-emerald">Path</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for Italian higher education admissions, Universitaly processing, and regional scholarship applications.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* Instagram */}
              <a
                href="https://instagram.com/italopath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/italopath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/italopath"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-400 hover:text-emerald transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+923001234567" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                    +92 300 123 4567
                  </a>
                  <p className="text-xs text-slate-500">Mon–Sat, 10am–7pm PKT</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                <a href="mailto:info@italopath.tech" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  info@italopath.tech
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-300">Office Hours</p>
                  <p className="text-xs text-slate-500">Mon–Sat: 10:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="group text-sm text-slate-400 hover:text-emerald transition-colors duration-200 flex items-center gap-1.5"
                >
                  Privacy Policy
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="group text-sm text-slate-400 hover:text-emerald transition-colors duration-200 flex items-center gap-1.5"
                >
                  Terms of Service
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="group text-sm text-slate-400 hover:text-emerald transition-colors duration-200 flex items-center gap-1.5"
                >
                  Refund Policy
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-6">
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="text-slate-400 font-medium">Disclaimer:</span>{" "}
              ItaloPath is an independent educational consultancy and is not affiliated with any Italian embassy, consulate, or government body. Embassy appointment slots, visa decisions, and admission outcomes are entirely at the discretion of the respective Italian Diplomatic Missions and universities. We do not guarantee visa approval, university admission, or scholarship grants. Our role is limited to guidance, document preparation, and application facilitation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} ItaloPath. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              Made by{" "}
              <a
                href="https://novastackltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 transition-colors"
              >
                NovaStack
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
