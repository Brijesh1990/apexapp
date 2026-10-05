import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, ShieldCheck, CheckCircle2, Compass, Layers, HardHat } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="about-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="800">
            {/* Tag */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase border border-blue-100">
                <Compass className="w-3.5 h-3.5" />
                TRUSTED INDUSTRIAL EPC PARTNER IN INDIA
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.18] mb-6">
              Engineering Solutions From Concept to Completion — Built For Indian Industry
            </h2>

            {/* Paragraph 1 (SEO introduction) */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5 font-normal">
              <strong className="text-slate-900 font-semibold">Relinfinite</strong> is a trusted EPC company in India, offering end-to-end industrial construction and engineering solutions for clients across manufacturing, warehousing, power, and infrastructure sectors. From the first concept sketch to final handover, our team manages every stage of the project — design, procurement, construction, and commissioning — under one roof.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              We specialize in understanding project risk, complex technical requirements, and site-specific challenges, allowing us to engineer solutions that are safe, efficient, and built to last.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 mb-8 border-y border-slate-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Single-Source Accountability</h4>
                  <p className="text-xs text-slate-500 leading-normal">Design, procurement &amp; civil build unified under one roof.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Risk-First Engineering</h4>
                  <p className="text-xs text-slate-500 leading-normal">Early geotechnical &amp; constructability risk assessment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Multi-Sector Expertise</h4>
                  <p className="text-xs text-slate-500 leading-normal">Chemical, power, warehousing &amp; core infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HardHat className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">On-Time Project Handover</h4>
                  <p className="text-xs text-slate-500 leading-normal">Rigorous project scheduling and site supervision.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <span>Discover Relinfinite</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-all duration-200"
              >
                <span>View Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Right Column with Visual Badges */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-duration="800">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Photo: Industrial EPC engineers on site */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Relinfinite civil engineers and project managers reviewing industrial plant blueprints in India"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-white">
                  <p className="text-xs font-mono font-semibold uppercase text-sky-400">
                    RELENIFINITE PROJEXIVE PVT. LTD
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    Delivering Projects From Concept to Completion
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="absolute -top-5 -left-4 sm:top-6 sm:-left-8 bg-[#0c3c78] text-white p-4 sm:p-5 rounded-xl shadow-xl flex items-center gap-3.5 border border-blue-400/30"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-200 block">
                    EPC CONTRACTOR
                  </span>
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-white block">
                    Pan-India Footprint
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
