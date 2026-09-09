import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      subtitle: 'ENGINEERING • PROCUREMENT • CONSTRUCTION',
      title1: 'Building Trust.',
      title2: 'Delivering Excellence.',
      description: 'Global leaders in industrial EPC solutions. We transform complex engineering challenges into high-performance assets through precision, integrity, and technical innovation.',
      bg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop'
    },
    {
      subtitle: 'GLOBAL INDUSTRIAL SCALE & PRECISION',
      title1: 'Engineering Next.',
      title2: 'Empowering Industry.',
      description: 'Harnessing advanced BIM modeling, state-of-the-art materials science, and disciplined turnkey execution for enterprise energy and manufacturing assets.',
      bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
    },
    {
      subtitle: 'RENEWABLE & CRITICAL INFRASTRUCTURE',
      title1: 'Sustainable Power.',
      title2: 'Global Resiliency.',
      description: 'Accelerating the energy transition through utility-scale clean energy complexes, automated logistics hubs, and certified zero-incident jobsites.',
      bg: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center bg-[#0a182f] overflow-hidden">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={current.bg}
          alt="Industrial EPC Crane and Construction Structure"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-all duration-1000 ease-out"
        />
        {/* Navy/Blue Industrial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#091b35]/90 to-[#0c2447]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08172c] via-transparent to-transparent"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtitle tag */}
          <div data-aos="fade-down" data-aos-duration="700" className="mb-6">
            <span className="text-[#38bdf8] font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase inline-block">
              {current.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            <span>{current.title1}</span>
            <br />
            <span className="text-slate-100">{current.title2}</span>
          </h1>

          {/* Subtext description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-10 font-normal"
          >
            {current.description}
          </p>

          {/* Quick buttons */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all group"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium transition-all"
            >
              <span>Our Capabilities</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Carousel Slider Dots */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex items-center justify-center gap-2.5 mt-16 sm:mt-20"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === index
                  ? 'w-8 h-2 bg-white'
                  : 'w-2.5 h-2.5 bg-slate-500/60 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
