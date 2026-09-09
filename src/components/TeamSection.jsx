import React from 'react';
import { teamMembers } from '../data/team';

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
            OUR CORE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight">
            Our Expert Team Members
          </h2>
        </div>

        {/* 5 Column Grid of Team Portraits matching Screen 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              {/* Portrait Image */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                />
                {/* Subtle dark gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover details */}
                <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-bold">{member.name}</p>
                  <p className="text-xs text-blue-300 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Sub-label visible at all times */}
              <div className="p-3 bg-white text-center border-t border-slate-50 group-hover:bg-slate-50 transition-colors">
                <h4 className="text-sm font-bold text-slate-900 truncate">{member.name}</h4>
                <p className="text-xs text-slate-500 truncate mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
