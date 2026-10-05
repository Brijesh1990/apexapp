import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false, showTagline = true, className = '', iconOnly = false }) {
  const brandColor = light ? '#ffffff' : '#17449E';
  const taglineColor = light ? '#cbd5e1' : '#292D32';

  return (
    <Link
      to="/"
      aria-label="Relinfinite - Home"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Precision Geometric Monogram Emblem (P + R) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 160 160"
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:rotate-[-2deg] group-hover:drop-shadow-[0_4px_12px_rgba(23,68,158,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 10 L 105 10 C 135 10 155 28 155 58 C 155 86 136 104 108 106 L 155 150 L 118 150 L 78 110 L 38 110 L 38 150 L 10 150 Z M 38 38 L 38 82 L 100 82 C 116 82 126 73 126 60 C 126 47 116 38 100 38 Z"
            fill={brandColor}
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none select-none">
          {/* Main Brand Title */}
          <span
            className="text-[19px] sm:text-[22px] font-[900] tracking-[0.03em] uppercase transition-colors"
            style={{ color: brandColor, fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            RELINFINITE
          </span>

          {/* Subtitle / Tagline */}
          {showTagline && (
            <span
              className="text-[7.5px] sm:text-[8.5px] font-extrabold tracking-[0.01em] uppercase mt-0.5"
              style={{ color: taglineColor }}
            >
              An Industrial and Infrastructure Construction Company
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
