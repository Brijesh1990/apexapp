import React, { useState } from 'react';
import { workflowSteps, commitments } from '../data/workflow';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function EPCProcess() {
  const [activeStep, setActiveStep] = useState('01');

  const currentStep = workflowSteps.find((s) => s.step === activeStep) || workflowSteps[0];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="EPC Process Lifecycle"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              METHODOLOGY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              A Disciplined Approach to Project Lifecycle
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We eliminate execution friction through our synchronized 5-stage turnkey EPC methodology. By integrating engineering models with procurement lead times and real-time construction telematics, Apex ensures zero project drift.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Process Pipeline */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step selector pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
            {workflowSteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeStep === step.step
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <span className={`text-2xl font-black font-mono block mb-1 ${activeStep === step.step ? 'text-blue-200' : 'text-slate-300'}`}>
                  {step.step}
                </span>
                <span className="text-sm font-bold block">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm" data-aos="fade-up">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Phase {currentStep.step} Detailed Specifications
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {currentStep.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {currentStep.description}
              </p>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Phase Deliverables &amp; Milestones
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStep.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section matching Screen 1 */}
      <section id="safety" className="py-20 lg:py-28 bg-[#091830] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              OUR CORE COMMITMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Uncompromising Quality &amp; Safety Standards
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              At Apex, safety is not merely a department—it is the foundational prerequisite for everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commitments.map((c, index) => (
              <div
                key={c.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="p-8 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center mb-6">
                    {c.id === 'safety' ? <ShieldCheck className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{c.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-3 py-1.5 rounded border border-blue-900 block text-center">
                    {c.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
