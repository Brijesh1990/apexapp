import React from 'react';
import { Building2, Shield, Wrench, Compass, Cpu, Layers } from 'lucide-react';
import { partners } from '../data/workflow';

const partnerIcons = [Building2, Shield, Wrench, Compass, Cpu, Layers];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => {
            const Icon = partnerIcons[index % partnerIcons.length];
            return (
              <div
                key={partner.name}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-900 transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 cursor-default group"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
