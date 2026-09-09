import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-[#1253a4] text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-normal">
              Let's discuss how our EPC expertise can bring your vision to life.
            </p>
          </div>

          <div data-aos="fade-left">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#08172c] hover:bg-[#0c2447] text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 shrink-0"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Schedule a Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
