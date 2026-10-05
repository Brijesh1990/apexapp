import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { industrialProjects } from '../data/projects';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'CHEMICAL', 'POWER', 'WAREHOUSE', 'INFRASTRUCTURE'];

  const filteredProjects = activeFilter === 'ALL'
    ? industrialProjects.slice(0, 3)
    : industrialProjects.filter(p => p.category === activeFilter).slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#071324] text-white overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div data-aos="fade-right">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              PROVEN TRACK RECORD ACROSS INDIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white">
              Engineered Excellence Across Critical Sectors
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From high-tolerance chemical plants and heavy power stations to rapid-erection PEB warehouses and regional infrastructure.
            </p>
          </div>

          {/* Filter Pills */}
          <div data-aos="fade-left" className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/50 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Relinfinite Industrial EPC in India`}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-90"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-[11px] font-bold tracking-wide uppercase text-sky-300 border border-slate-700/60">
                    {project.tag}
                  </span>
                </div>

                {/* Project Info pinned at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Description preview */}
              <div className="p-5 bg-slate-900/90 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div data-aos="fade-up" className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#071324] font-bold text-sm tracking-wide shadow-lg transition-all duration-200"
          >
            <span>Explore All Projects &amp; Case Studies</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
