import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import TeamSection from '../components/TeamSection';
import CtaBanner from '../components/CtaBanner';

export default function About() {
  const milestones = [
    { year: '1994', title: 'Founding & First Industrial Contract', desc: 'Apex was founded in Houston, TX, delivering regional petrochemical mechanical retrofits.' },
    { year: '2005', title: 'International Expansion', desc: 'Opened offices in the UK and Singapore, managing trans-continental marine and offshore terminals.' },
    { year: '2015', title: 'ISO 9001:2015 Certification', desc: 'Achieved world-class quality management compliance across all global operations and procurement lines.' },
    { year: '2020', title: 'Renewable Power Division', desc: 'Pioneered utility-scale solar arrays and offshore wind substation EPC across North America and Europe.' },
    { year: '2026', title: '350+ Mega-Projects Landmark', desc: 'Now operating across 24 nations with over $6B in delivered industrial and infrastructure assets.' }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Apex EPC Infrastructure"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              ABOUT APEX INDUSTRIAL EPC
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Engineering Global Progress For Over Three Decades
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded on the principles of disciplined construction, meticulous procurement, and innovative engineering, Apex delivers the critical infrastructure that powers global industries.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6" data-aos="fade-right">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
                OUR LEGACY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                From Regional Fabricator to Worldwide EPC Powerhouse
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                What began as a specialized structural fabrication shop in Houston has evolved into an international EPC firm handling multi-billion dollar industrial complexes, LNG terminals, solar farms, and automated logistics megahubs.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Throughout three decades of fluctuating markets and technological transformation, our core philosophy remains unchanged: zero-harm safety, unrelenting quality, and transparent collaboration with every client.
              </p>
            </div>

            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Accredited ISO 9001:2015</h3>
                    <p className="text-xs text-slate-500">Certificate No. USA-EPC-90821-QMS</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our quality management framework is audited annually by independent certifying bodies. Every supplier, blueprint, weld, and concrete pour is traceable through our digital twin QA verification protocols.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero Non-Conformances</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>ASME &amp; API Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>OSHA VPP Star Level</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>ISO 14001 Environmental</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center" data-aos="fade-up">
              Key Historical Milestones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-blue-600 block mb-2 font-mono">
                      {m.year}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{m.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <TeamSection />

      {/* Bottom CTA */}
      <CtaBanner />
    </main>
  );
}
