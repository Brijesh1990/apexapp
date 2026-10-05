import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Warehouse, ShieldAlert, ArrowRight, CheckCircle2, Cog, Layers } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-200/70" id="core-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs tracking-wider uppercase mb-3">
            OUR CORE SERVICES (SNAPSHOT)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mb-4">
            End-to-End Industrial EPC Verticals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Relinfinite offers two primary service verticals, engineered to transform industrial blueprints into durable, high-performance physical assets across India.
          </p>
        </div>

        {/* 2 Flagship Core Verticals Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {/* Card 1: Industrial Construction Solutions */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
          >
            {/* Image Header with Badge */}
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial civil construction for chemical and power plants in India - Relinfinite"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-xs text-white text-xs font-bold tracking-wider uppercase">
                  Vertical A • Civil &amp; EPC
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Industrial Construction Solutions
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-slate-700 text-base font-semibold leading-relaxed mb-4">
                  Civil construction for chemical plants, power plants, warehouses &amp; infrastructure projects.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Our experienced civil engineering and structural team delivers robust turnkey foundations, heavy machinery supports, industrial superstructure framing, and demanding facility interiors with strict quality and safety compliance.
                </p>

                {/* Sub-specialties */}
                <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Chemical Plants:</strong> Civil works engineered to withstand aggressive environments.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Power Plants:</strong> Structural &amp; civil solutions built for thermal and mechanical load reliability.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Warehouses &amp; Infra:</strong> Scalable civil works for logistics hubs and utility networks.</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services#industrial-construction"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 group/link transition-colors"
                >
                  <span>Explore Construction Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs font-mono font-medium text-slate-400">Concept to Completion</span>
              </div>
            </div>
          </div>

          {/* Card 2: PEB & Warehouse Steel Structures */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
          >
            {/* Image Header with Badge */}
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="Pre-engineered steel building PEB warehouse construction manufacturer in India - Relinfinite"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-sky-600/90 backdrop-blur-xs text-white text-xs font-bold tracking-wider uppercase">
                  Vertical B • Engineered Steel
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Industrial / Warehouse &amp; Pre-Engineered Buildings (PEB)
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-slate-700 text-base font-semibold leading-relaxed mb-4">
                  Custom-engineered steel structures, factory-fabricated and site-assembled for speed and precision.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Pre-Engineered Buildings deliver unmatched structural efficiency, optimized load distribution, and expedited erection times compared to conventional concrete frames, making them the industry standard for modern logistics and manufacturing.
                </p>

                {/* Sub-specialties */}
                <div className="space-y-3 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Custom Engineering:</strong> Tailored load, span, crane clearance, and architectural requirements.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Factory Fabrication:</strong> Off-site precision manufacturing of primary &amp; secondary steel members.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Fast Site Assembly:</strong> Bolted modular connections ensure high speed with clean jobsite execution.</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services#peb-buildings"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-800 group/link transition-colors"
                >
                  <span>Explore PEB Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs font-mono font-medium text-slate-400">High Precision Steel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA button for Services */}
        <div className="text-center" data-aos="fade-up">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-200 group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
