import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 'senior-civil-engineer',
      title: 'Senior Civil Project Engineer (Industrial & Plants)',
      department: 'Civil Construction',
      location: 'Rajkot / Dahej, Gujarat',
      type: 'Full-time',
      experience: '6+ Years',
      description: 'Lead civil construction works for chemical plants, machine foundations, and industrial infrastructure with rigorous site safety and quality standards.'
    },
    {
      id: 'peb-structural-designer',
      title: 'Pre-Engineered Building (PEB) Structural Designer',
      department: 'Structural Engineering',
      location: 'Rajkot / Ahmedabad, Gujarat',
      type: 'Full-time',
      experience: '5+ Years',
      description: 'Perform structural design and factory fabrication modeling for large-span steel warehouses and industrial sheds using STAAD.Pro and MBS.'
    },
    {
      id: 'site-ehs-officer',
      title: 'Site Safety & EHS Manager',
      department: 'Quality & Safety Compliance',
      location: 'Pan-India Project Sites',
      type: 'Full-time',
      experience: '4+ Years',
      description: 'Enforce zero-harm safety standards, lead daily tool-box talks, hazard assessments, and ensure compliance with NBC and Indian safety regulations.'
    },
    {
      id: 'project-planning-engineer',
      title: 'Project Planning & Quantity Estimation Engineer',
      department: 'Project Management & Sourcing',
      location: 'Rajkot Headquarters',
      type: 'Full-time',
      experience: '3+ Years',
      description: 'Prepare detailed Bar Bending Schedules (BBS), quantity estimation, vendor procurement coordination, and Primavera/MS Project milestone tracking.'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#071324] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Careers at Relinfinite Projexive"
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
              CAREERS AT RELINFINITE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-md">
              Build India's Industrial Future With Us
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal drop-shadow-sm">
              Join a team of passionate civil engineers, structural designers, and industrial project leaders driving engineering excellence and precision PEB manufacturing across India.
            </p>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Open Engineering &amp; Site Positions
            </h2>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {job.experience}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <p className="text-slate-600 text-sm max-w-2xl">{job.description}</p>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200">
            {applied ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-slate-600 text-sm">
                  Thank you for applying for <span className="font-semibold text-blue-700">{selectedJob.title}</span>. Our HR team will reach out after reviewing your credentials.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setApplied(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Apply for Position
                </h3>
                <p className="text-xs text-blue-600 font-semibold mb-6">{selectedJob.title}</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplied(true);
                  }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Full Legal Name</label>
                    <input type="text" required placeholder="e.g. Ramesh Patel" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Email Address</label>
                    <input type="email" required placeholder="ramesh@example.com" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Phone Number</label>
                    <input type="tel" required placeholder="(+91) 98765 43210" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Years of EPC / Construction Experience</label>
                    <input type="number" min="0" placeholder="5" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Brief Summary of Experience &amp; Projects Handled</label>
                    <textarea rows="3" placeholder="Summarize your key achievements and technical software proficiency..." className="w-full px-3 py-2 border rounded-md"></textarea>
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-4 border-t">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 cursor-pointer shadow-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <CtaBanner />
    </main>
  );
}
