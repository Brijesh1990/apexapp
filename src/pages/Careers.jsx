import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 'lead-structural-engineer',
      title: 'Lead Structural Engineer (Offshore / Energy)',
      department: 'Detail Engineering',
      location: 'Houston, TX / Hybrid',
      type: 'Full-time',
      experience: '8+ Years',
      description: 'Lead structural finite-element calculations, seismic design, and 3D BIM integration for offshore turbine foundations and industrial processing units.'
    },
    {
      id: 'senior-procurement-manager',
      title: 'Senior Global Procurement Manager',
      department: 'Procurement & Logistics',
      location: 'Houston, TX / Global Travel',
      type: 'Full-time',
      experience: '10+ Years',
      description: 'Direct tier-1 mill and OEM supplier contracts for high-pressure steel, alloy piping, and heavy rotating equipment across international suppliers.'
    },
    {
      id: 'bim-5d-coordinator',
      title: 'BIM 5D Virtual Design & Construction Coordinator',
      department: 'Technical Innovation',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '5+ Years',
      description: 'Coordinate multi-trade clash detection, 4D construction schedule sequencing, and 5D cost forecasting models using Revit, Navisworks, and Synchro.'
    },
    {
      id: 'field-hse-director',
      title: 'Field HSE Safety Director',
      department: 'Quality & Safety',
      location: 'Nevada Solar Site / On-site',
      type: 'Full-time',
      experience: '7+ Years',
      description: 'Enforce zero-harm safety standards, lead daily toolbox audits, OSHA compliance, and site emergency response protocols across a 600-person site.'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#091830] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2070&auto=format&fit=crop"
            alt="Careers at Apex"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#091830]/90 to-[#0c2344]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              JOIN OUR MISSION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Build the Infrastructure of the Next Century
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At Apex Industrial EPC, you'll work alongside world-class engineers, architects, and construction visionaries delivering projects that power cities and transform economies.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Current Open Positions
            </h2>
            <p className="text-slate-600 text-sm">
              Explore global opportunities in structural engineering, field superintendence, and project controls.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-blue-600 block mb-1">
                    {job.department}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs tracking-wide transition-colors cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {applied ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Thank you for applying for the <span className="font-semibold">{selectedJob.title}</span> role. Our talent acquisition committee will review your qualifications.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setApplied(false);
                  }}
                  className="mt-4 px-5 py-2 rounded bg-blue-600 text-white text-xs font-medium hover:bg-blue-700"
                >
                  Done
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
                    <input type="text" required placeholder="Jane Doe" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Email Address</label>
                    <input type="email" required placeholder="jane@example.com" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">LinkedIn Profile or Portfolio URL</label>
                    <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Years of EPC / Construction Experience</label>
                    <input type="number" min="0" placeholder="5" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold uppercase mb-1">Cover Note / Certifications (PE, PMP, OSHA)</label>
                    <textarea rows="3" placeholder="Briefly summarize your technical qualifications..." className="w-full px-3 py-2 border rounded-md"></textarea>
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-4 border-t">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700"
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
