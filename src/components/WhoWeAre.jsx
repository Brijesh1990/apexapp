import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="800">
            {/* Tag */}
            <div className="mb-3">
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Engineering Solutions That Move Projects Forward
            </h2>

            {/* Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              With over three decades of operational excellence, Apex Industrial EPC stands at the forefront of the global construction landscape. We specialize in large-scale turnkey solutions that integrate world-class engineering with strategic procurement and disciplined construction management.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 py-4 mb-8 border-y border-slate-100">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-tight">
                  350+
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mt-1">
                  PROJECTS COMPLETED
                </div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-tight">
                  24
                </div>
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mt-1">
                  COUNTRIES SERVED
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium text-sm transition-all duration-200"
              >
                <span>Learn About Our Legacy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Column with ISO Accredited Badge */}
          <div className="lg:col-span-6 relative" data-aos="fade-left" data-aos-duration="800">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Photo: Team of engineers on jobsite */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Apex Industrial EPC engineers reviewing site blueprints in safety hard hats"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge: Accredited ISO 9001:2015 */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-8 bg-[#0c3c78] text-white p-5 sm:p-6 rounded-xl shadow-xl flex items-center gap-4 border border-blue-500/30"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-blue-200 block">
                    ACCREDITED
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white block">
                    ISO 9001:2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
