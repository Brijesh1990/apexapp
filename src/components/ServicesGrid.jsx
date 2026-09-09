import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Warehouse, Layers, Droplets, Zap, Briefcase, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Factory,
  Warehouse,
  Layers,
  Droplets,
  Zap,
  Briefcase
};

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#f6f8fa] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-4">
            Integrated Technical Capabilities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive EPC services tailored for the world's most demanding industrial sectors.
          </p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Factory;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-[#edf2f7] hover:bg-white rounded-xl p-8 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-2 border-t border-slate-200/60 group-hover:border-transparent">
                  <Link
                    to={`/services#${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 tracking-wide uppercase transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
