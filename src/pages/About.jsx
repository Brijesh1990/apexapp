import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, Target, Compass, HardHat, Layers, DraftingCompass, Factory } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function About() {
  const differentiators = [
    {
      id: 'full-cycle',
      title: 'Full-cycle EPC capability',
      subtitle: 'Design, procurement and construction under a single accountable team',
      description:
        'We eliminate contractor friction and communication silos. From initial soil testing and FEED to architectural blueprints, vendor procurement, and final on-site civil and PEB handover, you interface with one dedicated engineering leadership team.',
      icon: Layers,
      tag: 'Single Accountability'
    },
    {
      id: 'risk-first',
      title: 'Risk-first engineering',
      subtitle: 'Every project begins with a thorough risk and site assessment',
      description:
        'Industrial projects cannot afford structural blindspots or geotechnical surprises. We model seismic, wind, ground-bearing, and chemical exposure risks upfront to design resilient foundations and high-tolerance superstructures.',
      icon: ShieldCheck,
      tag: 'De-Risking Investments'
    },
    {
      id: 'cross-sector',
      title: 'Cross-sector experience',
      subtitle: 'Chemical plants, power plants, warehouses, and infrastructure',
      description:
        'Our engineering repertoire spans aggressive chemical processing facilities requiring specialized civil bunds, heavy power plant machine foundations, automated high-bay warehouses, and critical regional infrastructure.',
      icon: Factory,
      tag: 'Multi-Disciplinary'
    },
    {
      id: 'precision',
      title: 'Factory-to-site precision',
      subtitle: 'Pre-engineered components manufactured off-site for faster, cleaner execution',
      description:
        'By pre-engineering primary structural frames, purlins, and wall claddings in state-of-the-art factory setups, we compress on-site construction schedules, reduce jobsite waste, and achieve millimeter-grade structural tolerances.',
      icon: DraftingCompass,
      tag: 'Precision Assembly'
    }
  ];

  return (
    <main className="bg-white">
      {/* About Hero Banner: Clearly visible industrial photo with high-contrast text */}
      <section className="relative py-24 lg:py-32 bg-[#071324] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Relinfinite Projexive Industrial EPC Construction in India"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover object-center opacity-60 scale-100"
          />
          {/* High contrast directional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040c18]/95 via-[#061427]/80 to-[#071324]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-sky-300 font-bold text-xs tracking-wider uppercase mb-4 backdrop-blur-md shadow-md">
              ABOUT RELINFINITE PROJEXIVE PVT. LTD
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] drop-shadow-md">
              Building Trust. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                Delivering Excellence.
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm max-w-2xl">
              A full-service Industrial EPC company delivering projects from Concept to Completion with precision engineering, uncompromised safety, and on-time execution across India.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHO WE ARE */}
      <section className="py-20 lg:py-24 bg-white" id="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7" data-aos="fade-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase border border-blue-100 mb-3">
                <Compass className="w-3.5 h-3.5" />
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Guiding Every Project From Concept to Completion
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                At <strong className="text-slate-900 font-semibold">Relinfinite</strong>, we provide a complete range of EPC (Engineering, Procurement &amp; Construction) services, guiding every project from Concept to Completion while adhering to the highest standards of quality and safety.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Our strength lies in our experience — understanding and assessing project risks, navigating complex technologies, and solving location-specific site difficulties. This allows us to design and deliver solutions that are not just functional, but genuinely effective for our clients' business goals.
              </p>

              {/* Core Strengths Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Precision Structural Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Turnkey Civil Construction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Custom Pre-Engineered Buildings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">Site-Specific Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                  alt="Relinfinite engineers on industrial construction site in India"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                  <div className="text-xs uppercase font-mono font-bold tracking-wider text-sky-400 mb-1">
                    B2B TRUSTED PARTNER
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">
                    Industrialists • Developers • Architects • Consultants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR APPROACH */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80" id="approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1" data-aos="fade-right">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                  <DraftingCompass className="w-8 h-8 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Disciplined Pre-Construction Roadmapping
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  By simulating structural load conditions, procurement lead-times, and on-site assembly sequences before breaking ground, we eliminate costly change orders and rework.
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>Early Architectural &amp; Engineering Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>Comprehensive Geotechnical &amp; Wind Risk Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>Optimized Material Sourcing &amp; Off-Site Fabrication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-800 font-bold text-xs tracking-wider uppercase mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Success Starts Long Before the First Brick is Laid
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                We believe a successful industrial project starts long before the first brick is laid. Our engineers and designers work closely with architects, consultants, and industrial clients to assess feasibility, mitigate risk, and build a project roadmap that balances speed, cost, and long-term durability.
              </p>
              <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200/60">
                <p className="text-sm text-blue-900 font-medium leading-relaxed">
                  Whether building a specialized chemical manufacturing facility, a heavy-duty power plant civil foundation, or a high-throughput logistics PEB hub, our collaborative framework guarantees clarity and technical rigor at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT SETS US APART */}
      <section className="py-20 lg:py-28 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-100">
              OUR COMPETITIVE ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Why leading developers, architects, and industrial conglomerates across India choose Relinfinite as their long-term EPC partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider px-2.5 py-1 bg-white rounded-md border border-slate-200">
                        {diff.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mb-4">
                      {diff.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SECTION 4: OUR MISSION */}
          <div
            data-aos="zoom-in"
            className="rounded-3xl bg-gradient-to-br from-[#071324] via-[#091b35] to-[#0c2447] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-blue-900/50"
          >
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 font-bold text-xs tracking-wider uppercase mb-4 border border-blue-400/30">
                <Target className="w-3.5 h-3.5" />
                OUR MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-6 leading-snug">
                “To be India's most reliable industrial EPC partner — transforming complex engineering challenges into high-performance, safely delivered assets.”
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
                We measure our success not just by the square footage erected, but by the operational efficiency, safety, and longevity of every facility handed over to our clients.
              </p>

              {/* Exact CTA: View Our Services → */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all group"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </main>
  );
}
