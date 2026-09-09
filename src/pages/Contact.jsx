import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import ContactFormSection from '../components/ContactFormSection';

export default function Contact() {
  const globalOffices = [
    {
      region: 'Near Raiya Road Rajkot',
      city: 'Rajkot,360005',
      address: 'Near 150 feet ring road Rajkot, 360005',
      phone: '+91-9998003879',
      email: 'info@apexindustrial.com'
    },
    {
       region: 'Near Raiya Road Rajkot',
      city: 'Rajkot,360005',
      address: 'Near 150 feet ring road Rajkot, 360005',
      phone: '+91-9998003879',
      email: 'info@apexindustrial.com'
    },
    {
       region: 'Near Raiya Road Rajkot',
      city: 'Rajkot,360005',
      address: 'Near 150 feet ring road Rajkot, 360005',
      phone: '+91-9998003879',
      email: 'info@apexindustrial.com'
    },
    {
       region: 'Near Raiya Road Rajkot',
      city: 'Rajkot,360005',
      address: 'Near 150 feet ring road Rajkot, 360005',
      phone: '+91-9998003879',
      email: 'info@apexindustrial.com'
    }
  ];

  return (
    <main className="bg-white">
      {/* Contact Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop"
            alt="Apex Contact Global"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              GLOBAL CONTACT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Initiate Technical Collaboration
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect directly with our senior EPC directors, procurement executives, and technical estimators to schedule a site feasibility review or request an RFP packet.
            </p>
          </div>
        </div>
      </section>

      {/* Global Regional Hubs */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
              WORLDWIDE FOOTPRINT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              International Engineering &amp; Operations Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalOffices.map((office, idx) => (
              <div
                key={office.city}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-blue-600 block mb-1">
                    {office.region}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{office.city}</h3>
                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-blue-600">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-blue-600 truncate">{office.email}</a>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Office Open • Mon–Fri 08:00–18:00</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Proposal Form Section from Screen 1 */}
      <ContactFormSection />
    </main>
  );
}
