import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative bg-[#071324] text-white py-14 lg:py-18 overflow-hidden">
      {/* Background Image: High visibility industrial site banner */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
          alt="Relinfinite Industrial EPC Construction"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover object-center opacity-40 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051326]/95 via-[#092244]/85 to-[#0b3b78]/70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div data-aos="fade-right" className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-sky-300 font-bold text-xs tracking-wider uppercase mb-3 backdrop-blur-md shadow-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              TURNKEY EPC PARTNER • PAN-INDIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white drop-shadow-md">
              Planning an industrial project?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              Partner with an EPC contractor who understands your risks, your timeline, and your standards.
            </p>
          </div>

          <div data-aos="fade-left" className="shrink-0 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-blue-900 font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 group cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-blue-700" />
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
