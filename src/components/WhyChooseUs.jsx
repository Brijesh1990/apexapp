import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Users, DraftingCompass, Building, Layers, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      id: 'end-to-end',
      title: 'End-to-end EPC expertise',
      highlight: 'Concept to Completion',
      desc: 'Single accountable partner managing feasibility, architectural & structural design, global procurement, civil construction, and final commissioning without fragmented handoffs.',
      icon: Layers,
      color: 'bg-blue-600'
    },
    {
      id: 'engineers',
      title: 'Experienced civil engineers & structural designers',
      highlight: 'Deep Engineering Talent',
      desc: 'Our veteran in-house technical team brings decades of cumulative experience handling complex loadings, soil variations, thermal expansions, and specialized equipment foundations.',
      icon: DraftingCompass,
      color: 'bg-indigo-600'
    },
    {
      id: 'compliance',
      title: 'Strong safety and quality compliance standards',
      highlight: 'Zero-Harm & Rigorous QA',
      desc: 'Disciplined QA/QC testing protocols for concrete, structural steel, and welding, paired with strict jobsite safety cultures meeting National Building Code (NBC) and international benchmarks.',
      icon: ShieldCheck,
      color: 'bg-emerald-600'
    },
    {
      id: 'peb-custom',
      title: 'Custom-engineered PEB structures built to exact specifications',
      highlight: 'Factory-to-Site Precision',
      desc: 'Engineered for optimal clear spans, crane capacity, seismic endurance, and meteorological parameters. Manufactured in controlled factory environments for rapid on-site erection.',
      icon: Building,
      color: 'bg-sky-600'
    },
    {
      id: 'track-record',
      title: 'Proven track record across critical sectors',
      highlight: 'Chemical • Power • Warehousing • Infra',
      desc: 'Demonstrated execution capability across highly demanding chemical manufacturing facilities, heavy power generation plants, automated logistics warehouses, and public infrastructure.',
      icon: Users,
      color: 'bg-amber-600'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="why-choose-relinfinite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7" data-aos="fade-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-100">
              TRUST • RELIABILITY • PRECISION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
              Why Choose Relinfinite
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
              When industrial assets represent millions in capital investment, industrialists, architects, and developers trust Relinfinite to de-risk engineering and guarantee on-time turnkey execution.
            </p>
          </div>
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-xs">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                “We engineer solutions that are safe, efficient, and built to last. Our risk-first philosophy ensures project timelines and budget integrity remain rock-solid.”
              </p>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mt-3">
                — Relinfinite Engineering Philosophy
              </span>
            </div>
          </div>
        </div>

        {/* 5 Core Points Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                    {item.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified EPC Benchmark</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct consultation callout */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-gradient-to-br from-[#0c2447] via-[#091b35] to-[#071324] text-white rounded-2xl p-7 shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="inline-block text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-2">
                PROJECT CONSULTATION
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                Have a Complex Industrial Site?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Our senior structural designers and civil estimators are ready to evaluate your architectural drawings, soil reports, and PEB specifications.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all group"
            >
              <span>Request Technical Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
