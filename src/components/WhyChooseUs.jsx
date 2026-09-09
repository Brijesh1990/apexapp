import React from 'react';
import { ShieldCheck, Globe, Clock, Scale, Cpu, Users } from 'lucide-react';
import { edgeFeatures } from '../data/services';

const iconMap = {
  ShieldCheck,
  Globe,
  Clock,
  Scale,
  Cpu,
  Users
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7" data-aos="fade-right">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              THE APEX EDGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight">
              Why Global Leaders Choose Us
            </h2>
          </div>
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                “Our commitment to precision engineering and project integrity is what defines our partnership with global enterprise stakeholders.”
              </p>
            </div>
          </div>
        </div>

        {/* 6 Features in 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {edgeFeatures.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
