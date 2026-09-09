import React from 'react';
import { workflowSteps } from '../data/workflow';

export default function WorkflowSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
            OUR WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight">
            A Disciplined Approach to Project Lifecycle
          </h2>
        </div>

        {/* 5-Step Pipeline Grid matching Screen 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {workflowSteps.map((step, index) => (
            <div
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors"></div>

              <div>
                {/* Large watermark number */}
                <div className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-blue-100 transition-colors mb-4 font-mono tracking-tighter">
                  {step.step}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
