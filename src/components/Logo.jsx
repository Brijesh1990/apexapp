import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group transition-transform hover:scale-[1.02] ${className}`}>
      {/* Blue Geometric Icon matching mockup */}
      <div className="w-8 h-8 rounded-md bg-blue-700 flex items-end justify-center p-1.5 gap-0.5 shadow-sm group-hover:bg-blue-600 transition-colors">
        <span className="w-1 bg-white rounded-xs h-2.5"></span>
        <span className="w-1 bg-white rounded-xs h-4"></span>
        <span className="w-1 bg-white rounded-xs h-3"></span>
        <span className="w-1 bg-white rounded-xs h-5"></span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          Apex Industrial <span className="font-semibold text-blue-600">EPC</span>
        </span>
      </div>
    </Link>
  );
}
