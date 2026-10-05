import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Building2, CheckCircle2, UserCheck } from 'lucide-react';
import ContactFormSection from '../components/ContactFormSection';
import { footerLinks } from '../data/navigation';

export default function Contact() {
  const operationsHubs = [
    {
      region: 'Corporate & Registered Office',
      city: 'Vadodara, Gujarat',
      contactPerson: 'Mr. Rushit Kapadiya',
      designation: 'Director',
      address: '411, 4th, Kamaxi Kunj, Station Chhani Road, Vadodara - 390002, Gujarat, India',
      phone: '+918045800695',
      displayPhone: '+91 80458 00695',
      email: 'bd@relinfinite.com',
      badge: 'Main Headquarters',
      isPrimary: true
    },
    {
      region: 'Manufacturing & PEB Desk',
      city: 'Ahmedabad - Sanand Cluster',
      contactPerson: 'PEB Projects Desk',
      designation: 'Engineering Estimations',
      address: 'Industrial Engineering Desk, Sanand Industrial Area, Gujarat, India',
      phone: '+918045800695',
      displayPhone: '+91 80458 00695',
      email: 'bd@relinfinite.com',
      badge: 'Factory & Steel Fabrication',
      isPrimary: false
    },
    {
      region: 'Western Regional Operations',
      city: 'Mumbai - Pune Corridor',
      contactPerson: 'EPC Project Cell',
      designation: 'Logistics & Coordination',
      address: 'Industrial Logistics & EPC Coordination Hub, Maharashtra, India',
      phone: '+918045800695',
      displayPhone: '+91 80458 00695',
      email: 'bd@relinfinite.com',
      badge: 'Warehouse & Logistics Desk',
      isPrimary: false
    }
  ];

  return (
    <main className="bg-white">
      {/* Contact Hero */}
      <section className="relative py-20 lg:py-28 bg-[#071324] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Relinfinite Projexive Pvt. Ltd - Contact Industrial EPC Team"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';
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
              CONTACT RELINFINITE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-md">
              Let's Build Something Reliable, Together
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              Reach out to our leadership and project engineers for industrial plant civil works, warehouse constructions, and turnkey PEB design-build solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Operations & Project Hubs Row */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
              REGISTERED HEADQUARTERS &amp; HUBS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Corporate Office &amp; Engineering Desks
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Connect directly with our Director and senior industrial engineering leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operationsHubs.map((hub, idx) => (
              <div
                key={hub.city}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`bg-white p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                  hub.isPrimary
                    ? 'border-blue-500/80 shadow-lg ring-2 ring-blue-500/10'
                    : 'border-slate-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase text-blue-600">
                      {hub.region}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        hub.isPrimary
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 bg-slate-100'
                      }`}
                    >
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{hub.city}</h3>

                  {hub.contactPerson && (
                    <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-700 bg-slate-50 py-1.5 px-2.5 rounded-lg border border-slate-100">
                      <UserCheck className="w-4 h-4 text-blue-600" />
                      <span>{hub.contactPerson} ({hub.designation})</span>
                    </div>
                  )}

                  <div className="space-y-3 text-xs text-slate-600 mb-5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium text-slate-700">{hub.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <a href={`tel:${hub.phone}`} className="hover:text-blue-700 font-bold text-slate-900">
                        {hub.displayPhone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <a href={`mailto:${hub.email}`} className="hover:text-blue-700 font-semibold text-blue-700 truncate">
                        {hub.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11px] text-emerald-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Desk Open • Mon–Sat 09:00–19:00 IST</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Proposal Request Form Section */}
      <ContactFormSection />
    </main>
  );
}
