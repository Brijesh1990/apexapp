import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { commitments } from '../data/workflow';

export default function CommitmentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and 2 Commitment Cards */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              OUR CORE COMMITMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white mb-8 leading-tight">
              Uncompromising Quality &amp; Safety Standards
            </h2>

            <div className="space-y-6">
              {commitments.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/70 hover:border-blue-500/60 hover:bg-slate-800/80 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.id === 'safety' ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3 font-normal">
                      {item.description}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                      {item.metrics}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industrial Inspection Photo */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop"
                alt="Quality assurance technical inspector verifying industrial safety compliance"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop';
                }}
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              {/* Overlay telemetry banner */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-slate-950/85 backdrop-blur-sm border border-slate-700/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block">Site Inspection Status</span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider">Verified 100% Compliant</span>
                </div>
                <span className="font-mono text-blue-400 bg-blue-950/80 px-2 py-1 rounded border border-blue-900">
                  ISO 9001 • NBC Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
