import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group transition-transform hover:scale-[1.02] ${className}`}>
      {/* Industrial Structural Geometric Icon */}
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 flex items-center justify-center p-2 shadow-md group-hover:shadow-blue-500/25 transition-all">
        {/* Abstract Infinity / Structural Truss Mark */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-[2.2]" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3 8 6-16 3 8h3" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 ring-2 ring-white"></span>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`text-[19px] font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
            REL<span className="text-blue-600">INFINITE</span>
          </span>
        </div>
        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5 ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          PROJEXIVE PVT. LTD • EPC
        </span>
      </div>
    </Link>
  );
}
