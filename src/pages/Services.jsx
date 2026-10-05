import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Factory,
  Warehouse,
  Flame,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cog,
  Truck,
  DraftingCompass,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Services() {
  const industrialConstructionTypes = [
    {
      id: 'chemical-plant',
      title: 'Chemical Plant Construction',
      tagline: 'Civil works engineered to withstand demanding industrial environments',
      description:
        'Engineered to resist aggressive chemicals, acidic vapors, high thermal variations, and strict hazardous containment protocols. Includes specialized bund walls, chemical-resistant screeds, explosive relief walling, and heavy equipment foundations for reactors and distillation columns.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
      features: [
        'Chemical-resistant acid/alkali proof flooring & bunds',
        'Vibration-damped foundations for pumps & reactors',
        'Strict environmental containment & effluent trenches',
        'Explosion venting & certified safety barriers'
      ]
    },
    {
      id: 'power-plant',
      title: 'Power Plant Construction',
      tagline: 'Structural and civil solutions built for reliability and long-term performance',
      description:
        'Civil infrastructure designed for heavy turbine basemats, boiler supports, thermal expansion tolerances, switchyards, and cooling water circuits. We deliver rigid, defect-free concrete pours capable of withstanding dynamic operational vibrations.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop',
      features: [
        'Mass concrete pours for turbo-generator foundations',
        'Switchyard civil works & GIS substation buildings',
        'Cooling tower basins & intake-outfall canals',
        'Thermal fatigue and dynamic resonance modeling'
      ]
    },
    {
      id: 'warehouse-construction',
      title: 'Warehouse Construction',
      tagline: 'Functional, scalable civil infrastructure for storage and logistics facilities',
      description:
        'High-specification civil construction tailored for high-bay storage, automated logistics operations, and heavy forklift traffic. We specialize in super-flat FM2-grade industrial concrete floors, heavy-duty apron paving, and integrated docking bays.',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      features: [
        'Super-flat industrial floors for VNA / ASRS automated trucks',
        'Hydraulic dock leveler pit construction & retaining walls',
        'Heavy-duty external concrete pavements for 40ft container trailers',
        'Administrative civil blocks & driver amenity amenities'
      ]
    },
    {
      id: 'infrastructure-projects',
      title: 'Infrastructure Projects',
      tagline: 'Civil construction supporting large-scale industrial and public infrastructure',
      description:
        'Turnkey civil engineering for private industrial zones and public works, including access roads, arterial stormwater drainage networks, culverts, utility pipe racks, and perimeter security structures designed for multi-decade life cycles.',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=800&auto=format&fit=crop',
      features: [
        'Industrial internal roads and heavy truck transit bridges',
        'Large-volume stormwater detention reservoirs & drainage',
        'Overhead pipe-rack concrete pedestals & cable trenches',
        'Comprehensive industrial park boundary and gate complexes'
      ]
    }
  ];

  const pebSteps = [
    {
      step: '01',
      title: 'Requirement Finalization',
      desc: 'We work with you to understand load, span, usage, and site parameters.',
      detail: 'Includes clear-span evaluation, crane girder provisions (5T to 50T), wind load zoning, and architectural cladding preferences.',
      icon: DraftingCompass
    },
    {
      step: '02',
      title: 'Factory Fabrication',
      desc: 'Primary and secondary structural members are precision-manufactured off-site.',
      detail: 'Fabricated using high-strength steel plates, automated submerged arc welding, shot-blasting, and epoxy primer coatings in quality-controlled conditions.',
      icon: Cog
    },
    {
      step: '03',
      title: 'Site Assembly',
      desc: 'Components are transported and assembled on-site for rapid, efficient installation.',
      detail: 'High-tensile bolted connections ensure fast, crane-assisted erection with zero hot-work on site, cutting project schedules by up to 50%.',
      icon: Truck
    }
  ];

  const pebIdealFor = [
    { title: 'Industrial warehouses & logistics hubs', desc: 'Column-free large storage bays with optimized clear heights for racking.' },
    { title: 'Manufacturing facility shells', desc: 'Custom bays for assembly lines, overhead cranes, and mechanical ventilation.' },
    { title: 'Storage and distribution centers', desc: 'Fast turnaround construction with multiple loading and unloading docks.' },
    { title: 'Large-span industrial sheds', desc: 'Heavy fabrication yards, aircraft hangars, and agricultural storage.' }
  ];

  return (
    <main className="bg-white">
      {/* Services Hero */}
      <section className="relative py-20 lg:py-28 bg-[#071324] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
            alt="Relinfinite Industrial EPC Services India"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop';
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
              SERVICES OVERVIEW
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-md">
              Industrial EPC &amp; Pre-Engineered Building Solutions
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              Relinfinite offers two core service verticals, both built around our Concept-to-Completion EPC philosophy — combining precision civil engineering with advanced pre-engineered steel construction across India.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK VERTICAL NAVIGATION BAR */}
      <section className="sticky top-16 z-30 bg-slate-900 text-white border-y border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Jump to Vertical:</span>
          <div className="flex items-center gap-3">
            <a
              href="#industrial-construction"
              className="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-colors"
            >
              (A) Industrial Construction Solutions
            </a>
            <a
              href="#peb-buildings"
              className="px-4 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold tracking-wide transition-colors"
            >
              (B) Pre-Engineered Buildings (PEB)
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VERTICAL (A): INDUSTRIAL CONSTRUCTION SOLUTIONS */}
      {/* ============================================================ */}
      <section id="industrial-construction" className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                A
              </span>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                CORE VERTICAL ONE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Industrial Construction Solutions
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
              With a team of experienced builders and energetic designers, Relinfinite is committed to delivering the finest civil construction and interior services in the industrial sector. Our civil engineering team is experienced across a wide range of project types, including:
            </p>
          </div>

          {/* 4 Project Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industrialConstructionTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-400"
                >
                  <div className="h-48 overflow-hidden relative bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                        {item.tagline}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/80">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standards & CTA Callout */}
          <div
            data-aos="fade-up"
            className="p-8 sm:p-10 rounded-2xl bg-[#091b35] text-white border border-blue-900/60 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 font-bold text-xs uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                QUALITY &amp; SAFETY ASSURANCE
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Every project is executed with strict quality control, safety compliance, and attention to site-specific engineering challenges — ensuring durable, dependable results.
              </p>
            </div>

            <Link
              to="/contact?type=Industrial Construction"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all shrink-0"
            >
              <span>Request a Site Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VERTICAL (B): INDUSTRIAL / WAREHOUSE & PEB */}
      {/* ============================================================ */}
      <section id="peb-buildings" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm">
                B
              </span>
              <span className="text-sky-700 font-bold text-xs uppercase tracking-wider">
                CORE VERTICAL TWO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Industrial / Warehouse &amp; Pre-Engineered Buildings (PEB)
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
              Pre-Engineered Steel Buildings (PEB) are designed around your exact operational requirements — offering faster construction timelines, structural efficiency, and long-term cost savings compared to conventional construction.
            </p>
          </div>

          {/* HOW IT WORKS (3 STEPS) */}
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-1">
                ENGINEERING WORKFLOW
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                How It Works
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pebSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.step}
                    data-aos="fade-up"
                    data-aos-delay={idx * 150}
                    className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm relative flex flex-col justify-between hover:border-sky-400 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div>
                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-mono font-black text-sky-600">
                          {step.step}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                          <StepIcon className="w-6 h-6 stroke-[1.8]" />
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-slate-700 text-sm font-semibold mb-3">
                        {step.desc}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">
                        {step.detail}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <span>Step {idx + 1} of 3</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IDEAL FOR & GET A PEB QUOTE SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Ideal For Cards */}
            <div className="lg:col-span-7" data-aos="fade-right">
              <span className="text-sky-600 font-bold text-xs uppercase tracking-wider block mb-2">
                APPLICATIONS &amp; SUITABILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Ideal For
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pebIdealFor.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PEB Quote Action Card */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="bg-gradient-to-br from-[#0c2447] via-[#091b35] to-[#071324] text-white p-8 rounded-2xl shadow-xl border border-sky-500/30">
                <span className="inline-block px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                  RAPID TURNKEY ESTIMATE
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Need a Customized PEB Structure?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  Share your building dimensions (clear height, width, length, and crane load) for a comprehensive proposal from Relinfinite's structural estimators.
                </p>

                <div className="space-y-2 mb-8 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>30% to 50% Faster Erection Times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Cost-effective High Clear Spans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    <span>Factory-fabricated with zero jobsite rework</span>
                  </div>
                </div>

                <Link
                  to="/contact?type=PEB & Warehouse"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all"
                >
                  <span>Get a PEB Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Conventional vs PEB Comparison Table */}
          <div data-aos="fade-up" className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h4 className="text-lg font-bold text-slate-900">
                Why Pre-Engineered Buildings Outperform Conventional Construction
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Comparative analysis for industrial developers and warehouse operators
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-4 sm:px-6">Parameter</th>
                    <th className="p-4 sm:px-6 text-blue-700 bg-blue-50/50">Relinfinite PEB System</th>
                    <th className="p-4 sm:px-6 text-slate-500">Conventional Construction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 sm:px-6 font-semibold text-slate-900">Construction Timeline</td>
                    <td className="p-4 sm:px-6 text-blue-800 font-medium bg-blue-50/30">Up to 40-50% faster with off-site fabrication</td>
                    <td className="p-4 sm:px-6 text-slate-500">Protracted, prone to weather &amp; labor delays</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:px-6 font-semibold text-slate-900">Clear Span Capability</td>
                    <td className="p-4 sm:px-6 text-blue-800 font-medium bg-blue-50/30">Large column-free spans up to 60+ meters</td>
                    <td className="p-4 sm:px-6 text-slate-500">Requires frequent interior columns</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:px-6 font-semibold text-slate-900">Foundation Loads</td>
                    <td className="p-4 sm:px-6 text-blue-800 font-medium bg-blue-50/30">Lightweight high-strength steel reduces footing costs</td>
                    <td className="p-4 sm:px-6 text-slate-500">Heavy concrete structures require deep foundations</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:px-6 font-semibold text-slate-900">Quality Control</td>
                    <td className="p-4 sm:px-6 text-blue-800 font-medium bg-blue-50/30">Strict factory tolerance &amp; robotic welding</td>
                    <td className="p-4 sm:px-6 text-slate-500">Manual site curing with variable quality</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </main>
  );
}
