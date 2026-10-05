import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, ShieldCheck, Building2 } from 'lucide-react';
import { footerLinks } from '../data/navigation';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Industrial Construction',
    projectLocation: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // EmailJS config
  const YOUR_SERVICE_ID = 'service_q9b0xoo';
  const YOUR_TEMPLATE_ID = 'template_lsydxhd';
  const YOUR_PUBLIC_KEY = 'I3OKeIkWPY2_W0BsP';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newContact = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...formData
    };

    try {
      // Attempt sending via EmailJS if configured
      if (YOUR_SERVICE_ID && YOUR_TEMPLATE_ID && YOUR_PUBLIC_KEY) {
        await emailjs.send(
          YOUR_SERVICE_ID,
          YOUR_TEMPLATE_ID,
          {
            from_name: formData.fullName,
            company_name: formData.companyName,
            reply_to: formData.email,
            phone_number: formData.phone,
            project_type: formData.projectType,
            project_location: formData.projectLocation,
            message: formData.message
          },
          YOUR_PUBLIC_KEY
        ).catch((err) => {
          console.warn('EmailJS delivery fallback:', err);
        });
      }
    } catch (err) {
      console.warn('EmailJS error:', err);
    }

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('contacts')) || [];
      existing.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    setLoading(false);
    setSubmitted(true);
    toast.success('Enquiry submitted successfully! Our team will respond within 24–48 hours.');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      projectType: 'Industrial Construction',
      projectLocation: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between" data-aos="fade-right">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-3 border border-blue-100">
                <Building2 className="w-3.5 h-3.5" />
                RELENIFINITE PROJEXIVE PVT. LTD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Let's Build Something Reliable, Together
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
                Have a project in mind? Whether you're an architect, developer, or industrial client, our team is ready to assess your requirements and propose the right EPC solution.
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                {/* Headquarters */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      REGISTERED OFFICE &amp; OPERATIONS
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {footerLinks.contactInfo.company}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {footerLinks.contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      DIRECT CONSULTATION DESK
                    </span>
                    <a
                      href={`tel:${footerLinks.contactInfo.phone}`}
                      className="text-sm font-bold text-blue-700 hover:underline block"
                    >
                      {footerLinks.contactInfo.displayPhone || footerLinks.contactInfo.phone}
                    </a>
                    <span className="text-[11px] text-slate-500">Available Mon–Sat: 09:00 AM – 07:00 PM IST</span>
                  </div>
                </div>

                {/* General Inquiries */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      OFFICIAL ENQUIRY EMAIL
                    </span>
                    <a
                      href={`mailto:${footerLinks.contactInfo.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors block truncate"
                    >
                      {footerLinks.contactInfo.email}
                    </a>
                    <a
                      href={`mailto:${footerLinks.contactInfo.proposalsEmail}`}
                      className="text-xs text-slate-500 hover:text-blue-600 transition-colors block truncate"
                    >
                      {footerLinks.contactInfo.proposalsEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* SLA badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs font-medium">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span>
                  <strong>Prompt Evaluation:</strong> Our team typically responds within 24–48 hours with next steps and feasibility insights.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName || 'Partner'}</span>. Your enquiry for <span className="font-semibold text-blue-700">{formData.projectType}</span> at <span className="font-semibold text-slate-900">{formData.projectLocation || 'your site'}</span> has been registered.
                  </p>
                  <p className="text-xs text-blue-700 font-semibold">
                    Our team typically responds within 24–48 hours with next steps.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">Project Enquiry Form</h3>
                    <p className="text-xs text-slate-500">Please provide your project parameters below.</p>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Industrial Enterprises Ltd."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (+91) 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Project Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all cursor-pointer font-medium"
                      >
                        <option value="Industrial Construction">Industrial Construction</option>
                        <option value="PEB & Warehouse">PEB &amp; Warehouse</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        required
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="e.g. Sanand, Gujarat / Pune, MH"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your plot size, building span/height, estimated timelines, or specific industrial requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>

                  {/* Supporting line (exact requirement) */}
                  <p className="text-xs text-slate-500 text-center font-medium pt-1">
                    Our team typically responds within 24–48 hours with next steps.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
