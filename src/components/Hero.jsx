import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, HardHat, Building2, CheckCircle2, Factory, Warehouse, Zap } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      badge: 'INDUSTRIAL EPC • CONCEPT TO COMPLETION',
      headlinePart1: 'Building Trust.',
      headlinePart2: 'Delivering Excellence.',
      subheadline:
        'Relinfinite is a full-service Industrial EPC company delivering projects from Concept to Completion — with precision engineering, uncompromised safety, and on-time execution across India.',
      primaryCta: 'Get a Free Consultation',
      primaryLink: '/contact',
      secondaryCta: 'Explore Our Services',
      secondaryLink: '/services',
      bg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop',
      fallbackBg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      tag: 'Pan-India Turnkey Solutions',
      icon: Factory
    },
    {
      id: 1,
      badge: 'PRE-ENGINEERED BUILDINGS (PEB) & WAREHOUSES',
      headlinePart1: 'Pre-Engineered Buildings.',
      headlinePart2: 'Built for Speed & Scale.',
      subheadline:
        'Custom-engineered steel structures factory-fabricated with millimeter accuracy and assembled on-site for rapid delivery, optimal spatial efficiency, and lower lifecycle costs.',
      primaryCta: 'Get a PEB Quote',
      primaryLink: '/services',
      secondaryCta: 'View Projects',
      secondaryLink: '/projects',
      bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      fallbackBg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop',
      tag: 'Millimeter-Grade Fabrication',
      icon: Warehouse
    },
    {
      id: 2,
      badge: 'CHEMICAL, POWER & INFRASTRUCTURE',
      headlinePart1: 'Risk-First Engineering.',
      headlinePart2: 'Built for Harsh Demands.',
      subheadline:
        'Specialized civil foundations for chemical plants, power stations, and infrastructure designed to withstand high chemical, thermal, and dynamic operating loads across India.',
      primaryCta: 'Request Site Assessment',
      primaryLink: '/contact',
      secondaryCta: 'Our 5-Step Process',
      secondaryLink: '/epc-process',
      bg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop',
      fallbackBg: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop',
      tag: 'Chemical & Power Civil Works',
      icon: Zap
    }
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto slide rotation every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = slides[activeSlide];

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[760px] flex items-center bg-[#071324] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3 Sliding Background Images with buttery smooth crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, idx) => {
          const isActive = activeSlide === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.bg}
                alt={slide.headlinePart1 + ' ' + slide.headlinePart2}
                onError={(e) => {
                  e.currentTarget.src = slide.fallbackBg;
                }}
                className={`w-full h-full object-cover object-center opacity-70 transform transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Directional contrast scrim: dark on left for 100% text legibility, clear on right for vivid industrial view */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#030914]/95 via-[#061427]/80 to-[#071324]/30 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/40 pointer-events-none"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl backdrop-blur-[1px] p-2 sm:p-0 rounded-2xl">
          {/* Subtitle tag */}
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/35 border border-blue-400/40 text-sky-300 font-bold text-xs tracking-wider uppercase backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              {current.badge}
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-200 tracking-wider bg-slate-900/70 px-2.5 py-1 rounded-md border border-slate-700/70 backdrop-blur-sm shadow-xs">
              {current.tag}
            </span>
          </div>

          {/* Main Headline with key-based re-animation */}
          <div key={`headline-${activeSlide}`} className="transition-all duration-500 ease-out">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-lg">
              <span>{current.headlinePart1}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                {current.headlinePart2}
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed max-w-2xl mb-10 font-normal drop-shadow-md">
              {current.subheadline}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={current.primaryLink}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/40 hover:shadow-blue-500/50 transition-all group cursor-pointer"
              >
                <span>{current.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={current.secondaryLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white border border-slate-600/80 font-semibold text-sm sm:text-base transition-all backdrop-blur-md shadow-lg cursor-pointer hover:border-slate-400"
              >
                <span>{current.secondaryCta}</span>
                <ChevronRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-10 border-t border-slate-700/60">
            <div className="flex items-center gap-2.5 bg-slate-900/70 p-2.5 rounded-xl border border-slate-800/90 backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-100">Concept to Completion</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-900/70 p-2.5 rounded-xl border border-slate-800/90 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-100">Uncompromised Safety</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-900/70 p-2.5 rounded-xl border border-slate-800/90 backdrop-blur-md col-span-2 sm:col-span-1">
              <Building2 className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-100">Pan-India Execution</span>
            </div>
          </div>
        </div>

        {/* Carousel Slider Controls: Slide Indicators, Counter & Next/Prev Arrows */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 sm:mt-12 pt-2">
          {/* Slide dots and counter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeSlide === index
                      ? 'w-10 h-2.5 bg-blue-500 shadow-md shadow-blue-500/50'
                      : 'w-2.5 h-2.5 bg-slate-500 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-slate-200 tracking-wider bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60 shadow-xs">
              0{activeSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Previous and Next Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700/70 hover:border-blue-500 transition-all cursor-pointer backdrop-blur-md shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700/70 hover:border-blue-500 transition-all cursor-pointer backdrop-blur-md shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

