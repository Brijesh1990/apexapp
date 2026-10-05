import React from 'react';
import { teamMembers } from '../data/team';

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-100">
            TECHNICAL TALENT &amp; LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-4">
            Experienced Civil Engineers &amp; Structural Designers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our multi-disciplinary engineering leadership brings decades of collective site-proven experience across Indian industrial hubs.
          </p>
        </div>

        {/* 5 Column Grid of Team Portraits */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 transition-all duration-300 bg-white flex flex-col justify-between"
            >
              {/* Portrait Image */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                />
                {/* Subtle dark gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover details */}
                <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-bold text-white leading-tight">{member.name}</p>
                  <p className="text-[11px] text-sky-300 font-medium">{member.role}</p>
                  <p className="text-[10px] text-slate-300 mt-1 line-clamp-2">{member.specialty}</p>
                </div>
              </div>

              {/* Sub-label visible at all times */}
              <div className="p-3.5 bg-white text-center border-t border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <h4 className="text-sm font-bold text-slate-900 truncate">{member.name}</h4>
                <p className="text-xs text-blue-600 font-semibold truncate mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
