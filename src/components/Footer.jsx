import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { footerLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#071324] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Brand & Mission */}
          <div>
            <h3 className="text-base font-extrabold tracking-wider text-white uppercase mb-4">
              APEX INDUSTRIAL EPC
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Delivering excellence in engineering, procurement, and construction for the global industrial sector. Building the future with precision and integrity.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              NAVIGATION
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

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
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

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-4">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{footerLinks.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${footerLinks.contactInfo.phone}`} className="hover:text-white transition-colors">
                  {footerLinks.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${footerLinks.contactInfo.email}`} className="hover:text-white transition-colors truncate">
                  {footerLinks.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`https://${footerLinks.contactInfo.website}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {footerLinks.contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Apex Industrial EPC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
