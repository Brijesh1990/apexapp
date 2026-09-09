import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../data/navigation';
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
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md border-b border-slate-200/80 py-3' : 'border-b border-slate-100 py-4'
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
                    isActive ? 'text-blue-600 font-semibold' : 'text-slate-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action buttons on right */}
          <div className="flex items-center gap-3">
            {/* Get in Touch Button (Desktop & Tablet) */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#1351a5] hover:bg-[#0f448c] text-white text-[14px] font-medium shadow-xs hover:shadow transition-all duration-200"
            >
              Get in Touch
            </Link>

            {/* Hamburger Toggler (Opens right side drawer) */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open side menu"
              aria-controls="right-drawer-menu"
              className="p-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
