import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Zap, Warehouse, Layers, Factory, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Industries() {
  const industries = [
    {
      title: 'Chemical Plant Construction',
      icon: Flame,
      desc: 'Civil works engineered to withstand demanding industrial environments, aggressive chemical reactions, and heavy dynamic equipment loads.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      stats: 'Demanding Environments',
      specs: [
        'Acid/alkali resistant specialized concrete & floorings',
        'Secondary chemical containment bund walls',
        'Reactor & distillation column heavy foundations',
        'Effluent treatment and hazardous drainage systems'
      ]
    },
    {
      title: 'Power Plant Construction',
      icon: Zap,
      desc: 'Structural and civil solutions built for thermal fatigue resistance, heavy turbo-generator basemats, and zero-defect operational longevity.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop',
      stats: 'Thermal & Dynamic Reliability',
      specs: [
        'Heavy mass concrete foundations for turbines',
        'Boiler structural frames & chimney pedestals',
        'High-voltage GIS switchyard civil works',
        'Intake cooling conduits & environmental containment'
      ]
    },
    {
      title: 'Warehouse & Logistics Hubs (PEB)',
      icon: Warehouse,
      desc: 'Functional, scalable civil infrastructure and custom pre-engineered steel buildings optimized for rapid construction and maximum clear spans.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      stats: 'Rapid Site Erection',
      specs: [
        'Column-free clear spans up to 60+ meters',
        'Super-flat FM2-grade industrial concrete flooring',
        'Integrated hydraulic dock leveler pits',
        'Factory-fabricated structural steel with bolted assembly'
      ]
    },
    {
      title: 'Infrastructure Projects',
      icon: Layers,
      desc: 'Civil construction supporting large-scale industrial estates, manufacturing clusters, internal roads, and heavy transit drainage systems.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=800&auto=format&fit=crop',
      stats: 'Decade-Long Durability',
      specs: [
        'Heavy truck concrete pavements & internal roads',
        'Stormwater detention canals and culverts',
        'Industrial utility trenches and overhead pipe racks',
        'Substation switchyard foundations'
      ]
    },
    {
      title: 'Manufacturing Facility Shells & Industrial Sheds',
      icon: Factory,
      desc: 'Turnkey industrial sheds and manufacturing facilities engineered to house heavy overhead cranes, manufacturing lines, and process machinery.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
      stats: 'High Strength-to-Weight',
      specs: [
        'Heavy overhead crane girder provisions (10T–50T)',
        'Natural roof lighting louvers & continuous ridge vents',
        'Integrated two-tier administrative civil blocks',
        'Seismic and high-wind zone compliance'
      ]
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#071324] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Relinfinite Target Industries in India"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover object-center opacity-65 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040c18]/95 via-[#061427]/80 to-[#071324]/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-[#040c18]/40"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-sky-300 font-bold text-xs tracking-wider uppercase mb-4 backdrop-blur-md shadow-md">
              CROSS-SECTOR INDUSTRIAL EXPERIENCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-md">
              Proven Track Record Across Key Industrial Sectors
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              Relinfinite delivers risk-first civil engineering and Pre-Engineered Building (PEB) solutions tailored to the exacting operational, safety, and regulatory standards of Indian industry.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-400"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-900">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=800&auto=format&fit=crop';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-blue-600 text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="absolute bottom-3 right-3 text-xs font-mono font-bold text-sky-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                        {ind.stats}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        {ind.desc}
                      </p>

                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Engineering Highlights
                        </p>
                        {ind.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Inquire Sector Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance / Safety Callout */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Sector-Specific Compliance &amp; Engineering Standards
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
            Every project is executed in compliance with Indian Standards (IS Codes), National Building Code (NBC), factory act safety protocols, and third-party quality audits.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500 font-mono">
            <span className="px-3 py-1 bg-slate-100 rounded-md">IS 800:2007 (Steel)</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">IS 456:2000 (Concrete)</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">IS 1893 (Seismic)</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">IS 875 (Wind Loads)</span>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
