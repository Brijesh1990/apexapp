import React from 'react';
import { workflowSteps } from '../data/workflow';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkflowSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-200/60 overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-100">
            OUR EPC METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-4">
            Concept to Completion — A Disciplined EPC Lifecycle
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the first concept sketch to final handover, our team manages every stage of the project under one roof — ensuring schedule adherence and cost predictability.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 mb-10">
          {workflowSteps.map((step, index) => (
            <div
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 group-hover:bg-blue-600 transition-colors"></div>

              <div>
                {/* Large watermark number */}
                <div className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-blue-200 transition-colors mb-3 font-mono tracking-tighter">
                  {step.step}
                </div>

                {/* Step Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <span>Phase 0{index + 1}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/epc-process"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 tracking-wider uppercase"
          >
            <span>Learn More About Our 5-Stage EPC Execution Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
