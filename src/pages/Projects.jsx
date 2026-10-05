import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { galleryItems, caseStudyData, industrialProjects } from '../data/projects';
import CtaBanner from '../components/CtaBanner';

export default function Projects() {
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('industrial'); // 'industrial' | 'gallery'

  const nextCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev + 1) % caseStudyData.images.length);
  };

  const prevCaseStudy = () => {
    setCaseStudyIndex((prev) => (prev - 1 + caseStudyData.images.length) % caseStudyData.images.length);
  };

  const currentCaseImage = caseStudyData.images[caseStudyIndex];
  const imageUrl = typeof currentCaseImage === 'string' ? currentCaseImage : currentCaseImage?.url;
  const imageCaption = typeof currentCaseImage === 'object' ? currentCaseImage?.caption : caseStudyData.description;

  return (
    <main className="bg-white">
      {/* 1. Projects Hero Section */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold tracking-widest text-blue-800 uppercase">
                  PORTFOLIO &amp; EXECUTION
                </span>
              </div>

              <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
                Engineered<br />
                <span className="italic font-light text-blue-700">Excellence</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-normal">
                A selection of industrial civil works, chemical plant foundations, power infrastructure, and custom Pre-Engineered Buildings delivered across India from Concept to Completion.
              </p>

              {/* Quick Tab Switcher */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('industrial')}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === 'industrial'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Turnkey EPC Projects
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === 'gallery'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Structural &amp; Site Gallery
                </button>
              </div>
            </div>

            {/* Right Architectural Hero Photo */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-4/3 sm:aspect-16/10">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop"
                  alt="Relinfinite Industrial EPC Construction in India"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs border border-slate-700/60">
                  <span className="text-sky-400 font-bold uppercase block">Pan-India Industrial EPC</span>
                  <span className="text-sm font-semibold">Chemical Plants • Power Plants • Warehouses • PEB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Projects View */}
      {activeTab === 'industrial' ? (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14" data-aos="fade-up">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
                PROJECT PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Turnkey Industrial EPC &amp; PEB Landmarks
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrialProjects.map((p, idx) => (
                <div
                  key={p.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-600" />
                        {p.location} • {p.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {p.description}
                      </p>
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
      ) : (
        /* Structural Gallery View */
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14" data-aos="fade-up">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
                SITE PHOTOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Structural &amp; Execution Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100 mb-4 shadow-xs group-hover:shadow-md transition-shadow aspect-4/3">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                        {item.category} • {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Featured Case Study Section */}
      <section className="py-20 lg:py-28 bg-[#071324] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div data-aos="fade-right">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/40 text-[11px] font-semibold tracking-wider text-sky-300 uppercase mb-4">
                FEATURED EPC CASE STUDY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {caseStudyData.title}
              </h2>
            </div>

            <div data-aos="fade-left" className="text-right">
              <span className="text-[11px] uppercase tracking-widest text-slate-400 block mb-1 font-semibold">
                {caseStudyData.category}
              </span>
              <span className="text-sm font-medium text-sky-400">
                {caseStudyData.location} • {caseStudyData.year}
              </span>
            </div>
          </div>

          {/* Interactive Case Study Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-16/9 mb-8 group" data-aos="zoom-in">
            <img
              src={imageUrl}
              alt={caseStudyData.title}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

            {/* Left Circular Arrow */}
            <button
              onClick={prevCaseStudy}
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Right Circular Arrow */}
            <button
              onClick={nextCaseStudy}
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Pagination indicator */}
            <div className="absolute bottom-6 right-6 px-3 py-1 rounded-md bg-slate-950/80 text-xs font-mono text-slate-300 backdrop-blur-xs">
              0{caseStudyIndex + 1} / 0{caseStudyData.images.length}
            </div>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8">
            {caseStudyData.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="text-[11px] text-slate-400 uppercase font-mono block">{m.label}</span>
                <span className="text-lg sm:text-xl font-extrabold text-sky-400">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {imageCaption}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </main>
  );
}
