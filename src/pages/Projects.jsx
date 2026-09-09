import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { galleryItems, caseStudyData, industrialProjects } from '../data/projects';

export default function Projects() {
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'industrial'

  const nextCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev + 1) % caseStudyData.images.length);
  };

  const prevCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev - 1 + caseStudyData.images.length) % caseStudyData.images.length);
  };

  return (
    <main className="bg-white">
      {/* 1. Projects Hero Section matching Screen 2 */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6" data-aos="fade-right">
              {/* Tag in outlined box */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-xs border border-slate-300 text-[11px] font-bold tracking-widest text-slate-700 uppercase">
                  PORTFOLIO
                </span>
              </div>

              {/* Serif Headline */}
              <h1 className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-normal text-[#123962] tracking-tight leading-[0.95] mb-8">
                Our<br />
                <span className="italic font-light">Work</span>
              </h1>

              {/* Subtext description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-normal">
                A collection of selected projects, creative work, and experiences crafted with precision and purpose. We bridge the gap between aesthetics and function.
              </p>

              {/* Quick Tab Switcher */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-all ${
                    activeTab === 'gallery'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Design & Spatial Gallery
                </button>
                <button
                  onClick={() => setActiveTab('industrial')}
                  className={`px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-all ${
                    activeTab === 'industrial'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Mega EPC Infrastructure
                </button>
              </div>
            </div>

            {/* Right Architectural Hero Photo */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-4/3 sm:aspect-16/10">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial architectural interior corridor and steel railings"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gallery Section matching Screen 2 */}
      {activeTab === 'gallery' ? (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Big Title */}
            <div className="mb-14" data-aos="fade-up">
              <h2 className="font-serif-title text-5xl sm:text-6xl lg:text-7xl font-normal text-[#123962] tracking-tight">
                Gallery
              </h2>
            </div>

            {/* Masonry-Style 3-Column Layout from Screen 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex flex-col justify-between cursor-pointer"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-4 shadow-xs group-hover:shadow-md transition-shadow">
                    <div className={item.aspect || 'aspect-4/3'}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Title & Meta Row matching Screen 2 */}
                  <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                        {item.category}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Mega EPC Infrastructure View */
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14" data-aos="fade-up">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
                GLOBAL ASSETS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Industrial EPC Turnkey Portfolio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrialProjects.map((p, idx) => (
                <div
                  key={p.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block mb-1">{p.location} • {p.year}</span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{p.description}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">{p.client}</span>
                      <Link to="/contact" className="text-blue-600 font-bold hover:underline">
                        Inquire →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Featured Case Study Section matching Screen 2 */}
      <section className="py-20 lg:py-28 bg-[#091b33] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div data-aos="fade-right">
              <span className="inline-block px-3 py-1 rounded-xs border border-blue-400/40 text-[11px] font-semibold tracking-wider text-blue-300 uppercase mb-4">
                {caseStudyData.tag}
              </span>
              <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                {caseStudyData.title}
              </h2>
            </div>

            <div data-aos="fade-left" className="text-right">
              <span className="text-[11px] uppercase tracking-widest text-slate-400 block mb-1 font-semibold">
                {caseStudyData.category}
              </span>
              <span className="text-sm font-medium text-slate-300">
                {caseStudyData.vol}
              </span>
            </div>
          </div>

          {/* Interactive Case Study Image Showcase with circular arrows */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-16/9 mb-8 group" data-aos="zoom-in">
            <img
              src={caseStudyData.images[caseStudyIndex]}
              alt="Brutalist architectural facade with louvers and soft natural daylight"
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

            {/* Left Circular Arrow */}
            <button
              onClick={prevCaseStudy}
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Circular Arrow */}
            <button
              onClick={nextCaseStudy}
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Pagination indicator */}
            <div className="absolute bottom-6 right-6 px-3 py-1 rounded bg-slate-950/70 text-xs font-mono text-slate-300 backdrop-blur-xs">
              0{caseStudyIndex + 1} / 0{caseStudyData.images.length}
            </div>
          </div>

          {/* Case Study Caption matching Screen 2 */}
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {caseStudyData.description}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Have a project in mind? CTA Section matching Screen 2 */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
            Let's create something meaningful together. We are currently accepting new client requests for Q3 &amp; Q4 2026.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#1351a5] hover:bg-[#0f448c] text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
