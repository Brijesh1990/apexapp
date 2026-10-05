import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Building2 } from 'lucide-react';
import Logo from './Logo';
import { navLinks, footerLinks } from '../data/navigation';

export default function RightDrawer({ isOpen, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Right-sliding Drawer */}
      <aside
        id="right-drawer-menu"
        aria-label="Mobile and Quick Navigation"
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[400px] bg-slate-950 text-white z-50 shadow-2xl border-l border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <Logo light={true} />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body / Nav Links */}
        <div className="px-6 py-6 overflow-y-auto flex-1 space-y-1">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-3">Navigation</p>
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-60" />
              </NavLink>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="pt-6">
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold shadow-lg shadow-blue-600/25 transition-all text-center"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Details in Drawer */}
          <div className="pt-8 border-t border-slate-800/80 mt-6 space-y-3">
            <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-2">Registered Headquarters</p>
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{footerLinks.contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`tel:${footerLinks.contactInfo.phone}`} className="hover:text-blue-300 transition-colors font-medium">
                {footerLinks.contactInfo.displayPhone || footerLinks.contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${footerLinks.contactInfo.email}`} className="hover:text-blue-300 transition-colors truncate">
                {footerLinks.contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Footer with Socials */}
        <div className="p-6 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Relinfinite Projexive Pvt. Ltd</span>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-1.5 rounded bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
