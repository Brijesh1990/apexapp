import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck, UserCheck } from 'lucide-react';
import Logo from './Logo';
import { footerLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#06101e] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Identity (span 4) */}
          <div className="lg:col-span-4">
            <Logo light={true} showTagline={true} className="mb-5" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              <strong className="text-white">RELINFINITE PROJEXIVE PVT. LTD</strong> is a trusted industrial EPC and infrastructure company delivering turnkey projects from Concept to Completion across India.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Precision engineering, uncompromised safety, and on-time execution for chemical plants, power stations, pre-engineered buildings (PEB), and heavy industrial warehouses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Verticals & Services (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              EPC VERTICALS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services#industrial-construction" className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors block">
                  Industrial Construction Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#industrial-construction" className="text-xs text-slate-500 hover:text-slate-300 transition-colors block pl-2 border-l border-slate-800">
                  • Chemical Plant Civil Works
                </Link>
              </li>
              <li>
                <Link to="/services#industrial-construction" className="text-xs text-slate-500 hover:text-slate-300 transition-colors block pl-2 border-l border-slate-800">
                  • Power Plant Structural Works
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors block mt-2">
                  Pre-Engineered Buildings (PEB)
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs text-slate-500 hover:text-slate-300 transition-colors block pl-2 border-l border-slate-800">
                  • Warehouses &amp; Logistics Hubs
                </Link>
              </li>
              <li>
                <Link to="/services#peb-buildings" className="text-xs text-slate-500 hover:text-slate-300 transition-colors block pl-2 border-l border-slate-800">
                  • Large-Span Industrial Sheds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              CONTACT INFO
            </h4>

            {/* Director Highlights */}
            <div className="mb-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-0.5">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{footerLinks.contactInfo.contactPerson}</span>
              </div>
              <span className="text-[11px] text-slate-400">{footerLinks.contactInfo.designation}</span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">{footerLinks.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${footerLinks.contactInfo.phone}`} className="hover:text-white transition-colors font-semibold text-slate-200">
                  {footerLinks.contactInfo.displayPhone || footerLinks.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${footerLinks.contactInfo.email}`} className="hover:text-white transition-colors truncate font-medium text-slate-200">
                  {footerLinks.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-400">
                  {footerLinks.contactInfo.website}
                </span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-sky-400 font-semibold block mb-0.5">Response SLA:</span>
              <span>Technical team responds within 24–48 hours.</span>
            </div>
          </div>
        </div>

        {/* SEO Keyword Pills Bar for On-Page Authority */}
        <div className="py-6 border-t border-slate-800/80 mb-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Industrial EPC Core Capabilities in India:
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">EPC company in India</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Industrial EPC contractor</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Industrial construction company India</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Pre-engineered building (PEB) manufacturer</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Warehouse construction company India</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Civil construction for chemical plants</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">Power plant civil construction contractor</span>
            <span className="px-2.5 py-1 rounded-sm bg-slate-900 border border-slate-800">PEB structures for warehouses India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 RELINFINITE PROJEXIVE PVT. LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
