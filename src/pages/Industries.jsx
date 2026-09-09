import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Flame, Ship, FlaskConical, Warehouse, ArrowRight, ShieldCheck } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Industries() {
  const industries = [
    {
      title: 'Renewable Energy & Power Generation',
      icon: Sun,
      desc: 'Utility-scale solar farms, onshore/offshore wind farms, and integrated Battery Energy Storage Systems (BESS) designed for grid stability.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
      stats: '4.2+ GW Delivered',
      specs: ['Single-axis solar tracking arrays', 'High-voltage GIS substations', 'BESS containerized storage', 'Subsea transmission cable lay']
    },
    {
      title: 'Oil, Gas & Petrochemical Refining',
      icon: Flame,
      desc: 'High-complexity refinery units, hydrocrackers, sulfur recovery plants, and crude distillation overhauls under SIL-3 safety loops.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
      stats: '140+ Refinery Revamps',
      specs: ['ASME Sec VIII pressure vessels', 'Class 1 Div 1 explosion proofing', 'Flare systems & vapor recovery', 'Catalytic cracker integration']
    },
    {
      title: 'Civil Infrastructure & Maritime Ports',
      icon: Ship,
      desc: 'Deep-water container berths, heavy cargo terminals, causeways, and multimodal transit hubs designed for seismic resilience.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop',
      stats: '60+ Civil Assets Built',
      specs: ['Post-Panamax automated berths', 'Deep sheet-pile retaining walls', 'Marine dock heavy-lift crane rails', 'Storm surge protection barriers']
    },
    {
      title: 'Chemical & Specialty Processing',
      icon: FlaskConical,
      desc: 'Specialized chemical synthesis facilities, hazardous material containment systems, and high-purity fluid transfer conduits.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      stats: '99.98% Safety Score',
      specs: ['Hastelloy & Inconel alloy piping', 'Corrosion-resistant scrubbers', 'Double-containment tanks', 'Continuous telemetry monitoring']
    },
    {
      title: 'Commercial Logistics & Warehousing',
      icon: Warehouse,
      desc: 'Next-generation fulfillment centers, automated high-bay warehouses, and temperature-controlled food/pharmaceutical logistics.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      stats: '18M+ Sq Ft Delivered',
      specs: ['Laser-guided automated vehicles (AGV)', 'Super-flat slab tolerance FF/FL', 'Thermal insulated envelope', 'High-speed multi-dock bays']
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
            alt="Apex Industrial EPC Sectors"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              TARGET SECTORS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Critical Industries That Drive the Global Economy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              From continuous energy production to trans-oceanic freight hubs, Apex engineers industrial assets designed to endure the most demanding operational environments on Earth.
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
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-900">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-blue-600 text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="absolute bottom-3 right-3 text-xs font-mono font-bold text-blue-300 bg-slate-900/80 px-2.5 py-1 rounded">
                        {ind.stats}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        {ind.desc}
                      </p>

                      <div className="space-y-1.5 border-t border-slate-100 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Capabilities
                        </p>
                        {ind.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors"
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
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Sector-Specific Compliance &amp; Engineering Standards
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            Every facility built complies strictly with NFPA, ASME Section VIII, API 650/620, IEEE, and OSHA 1926 standards, accompanied by full material traceability logs.
          </p>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
