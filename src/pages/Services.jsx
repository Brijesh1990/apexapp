import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Warehouse, Layers, Droplets, Zap, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import CtaBanner from '../components/CtaBanner';

const iconMap = {
  Factory,
  Warehouse,
  Layers,
  Droplets,
  Zap,
  Briefcase
};

export default function Services() {
  return (
    <main className="bg-white">
      {/* Services Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
            alt="Apex Industrial EPC Services"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              EPC SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Integrated Technical Capabilities
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We engineer, procure, and construct the mission-critical assets of the modern world. Our integrated multi-disciplinary approach eliminates handoff risks and guarantees schedule adherence.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-dive service sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Factory;
            const isReversed = index % 2 === 1;

            return (
              <div
                id={svc.id}
                key={svc.id}
                data-aos="fade-up"
                className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-xs hover:shadow-lg transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase text-blue-600 block">
                          Capability 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {svc.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {svc.fullDescription}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                    >
                      <span>Request Proposal for {svc.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Stat / Highlight Card */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#f0f4f9] rounded-xl p-8 border border-slate-200 text-center">
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-500 block mb-2">
                        Demonstrated Track Record
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono mb-3">
                        {svc.stats}
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Executed under ASME, API, OSHA &amp; ISO 9001:2015 turnkey operational frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </main>
  );
}
