import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { navLinks, footerLinks } from '../data/navigation';
import RightDrawer from './RightDrawer';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route navigation
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Utility Bar for B2B Trust */}
      <div className="bg-[#071324] text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Registered Office: 150 Feet Ring Road, Rajkot, Gujarat</span>
            </span>
            <span className="hidden lg:inline-block text-slate-500">•</span>
            <span className="hidden lg:flex items-center gap-1 text-sky-400 font-semibold">
              Pan-India Industrial EPC &amp; PEB Execution
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${footerLinks.contactInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>{footerLinks.contactInfo.displayPhone || footerLinks.contactInfo.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${footerLinks.contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              <span>{footerLinks.contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md border-b border-slate-200/90 py-2.5' : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-slate-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action buttons on right */}
          <div className="flex items-center gap-3">
            {/* Get a Free Consultation Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger Toggler (Opens right side drawer) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open side menu"
              aria-controls="right-drawer-menu"
              className="p-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Right Drawer */}
      <RightDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
