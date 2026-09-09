import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { footerLinks } from '../data/navigation';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function ContactFormSection() {
// create a desructured state for add task via form 
const [fullName, setFullname] = useState('')
const [company, setCompany] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [projectType, setProjectType] = useState('')
const [projectLocation, setProjectLocation] = useState('')
const [message, setMessage] = useState('')
const navigate=useNavigate();
//create a variables to stored sending email config
const YOUR_SERVICE_ID="service_q9b0xoo";
const YOUR_TEMPLATE_ID="template_lsydxhd";
const YOUR_PUBLIC_KEY="I3OKeIkWPY2_W0BsP";

//create a function of form handeling to add all data in local storage
const handleSubmit = (e) => {
e.preventDefault();
const newContact = {
id: Date.now(),
fullName:fullName, 
company:company,
email:email,
phone:phone,
projectType:projectType,
projectLocation: projectLocation,
message:message

};

// for send email set email js method 
emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, 
YOUR_PUBLIC_KEY)
// Add the new task to local storage
const existingTasks = JSON.parse(localStorage.getItem('contacts')) || [];
existingTasks.push(newContact);
localStorage.setItem('contacts', JSON.stringify(existingTasks));
// Show success toast notification
toast.success('Thanks for contact with us Will get in touch with you soon!');
// Clear the form
setFullname('');
setCompany('');
setEmail('');
setPhone('');
setProjectType('');
setProjectLocation('');
setMessage('');

navigate('/contact');

};


const [formData, setFormData] = useState({
fullName: '',
company: '',
email: '',
phone: '',
projectType: 'Industrial EPC',
projectLocation: '',
message: ''
});

const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};


return (
<section id="contact-discussion" className="py-20 lg:py-28 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
{/* Left Column: Contact details */}
<div className="lg:col-span-5 flex flex-col justify-between" data-aos="fade-right">
<div>
<span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
GET IN TOUCH
</span>
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
Start a Project Discussion
</h2>
<p className="text-slate-600 text-base leading-relaxed mb-10">
Our team of technical experts is ready to assist you with feasibility studies, conceptual design, or full-scale EPC proposals.
</p>

{/* Direct Contacts List */}
<div className="space-y-8">
{/* Headquarters */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
<MapPin className="w-5 h-5" />
</div>
<div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
GLOBAL HEADQUARTERS
</span>
<p className="text-sm font-semibold text-slate-800">
{footerLinks.contactInfo.address}
</p>
</div>
</div>

{/* Direct Line */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
<Phone className="w-5 h-5" />
</div>
<div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
DIRECT LINE
</span>
<a
href={`tel:${footerLinks.contactInfo.phone}`}
className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
>
{footerLinks.contactInfo.phone}
</a>
</div>
</div>

{/* General Inquiries */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
<Mail className="w-5 h-5" />
</div>
<div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
GENERAL INQUIRIES
</span>
<a
href={`mailto:${footerLinks.contactInfo.proposalsEmail}`}
className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
>
{footerLinks.contactInfo.proposalsEmail}
</a>
</div>
</div>
</div>
</div>

{/* Support hours note */}
<div className="mt-12 pt-6 border-t border-slate-100 text-xs text-slate-500">
Response SLA: Technical proposals acknowledged within 24 business hours.
</div>
</div>

{/* Right Column: Proposal Request Form matching Screen 1 */}
<div className="lg:col-span-7" data-aos="fade-left">
<div className="bg-[#eef2f6] rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
{submitted ? (
<div className="py-12 text-center space-y-4">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
<CheckCircle2 className="w-10 h-10" />
</div>
<h3 className="text-2xl font-bold text-slate-900">Proposal Request Received</h3>
<p className="text-slate-600 max-w-md mx-auto text-sm">
Thank you, <span className="font-semibold">{formData.fullName || 'Partner'}</span>. Our senior industrial solutions director will review your scope specifications and connect with you shortly.
</p>
<button
onClick={() => {
setSubmitted(false);
setFormData({
fullName: '',
company: '',
email: '',
phone: '',
projectType: 'Industrial EPC',
projectLocation: '',
message: ''
});
}}
className="mt-4 px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
>
Send Another Request
</button>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
<ToastContainer />
{/* Row 1: Full Name & Company */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
FULL NAME
</label>
<input
type="text"
name="fullName"
required
value={formData.fullName}
onChange={handleChange}
placeholder="Brijesh Kumar Pandey"
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
COMPANY
</label>
<input
type="text"
name="company"
required
value={formData.company}
onChange={handleChange}
placeholder="Enterprise Corp"
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
/>
</div>
</div>

{/* Row 2: Work Email & Phone Number */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
WORK EMAIL
</label>
<input
type="email"
name="email"
required
value={formData.email}
onChange={handleChange}
placeholder="info@enterprise.com"
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
PHONE NUMBER
</label>
<input
type="tel"
name="phone"
value={formData.phone}
onChange={handleChange}
placeholder="(+91) 9998003879"
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
/>
</div>
</div>

{/* Row 3: Project Type & Project Location */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
PROJECT TYPE
</label>
<select
name="projectType"
value={formData.projectType}
onChange={handleChange}
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
>
<option value="Industrial EPC">Industrial EPC</option>
<option value="Commercial Warehouse">Commercial Warehouse</option>
<option value="Infrastructure">Infrastructure</option>
<option value="Chemical Processing">Chemical Processing</option>
<option value="Power Generation">Power Generation</option>
<option value="Project Management">Project Management</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
PROJECT LOCATION
</label>
<input
type="text"
name="projectLocation"
value={formData.projectLocation}
onChange={handleChange}
placeholder="City, Country"
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
/>
</div>
</div>

{/* Row 4: Message / Scope Overview */}
<div>
<label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
MESSAGE / SCOPE OVERVIEW
</label>
<textarea
name="message"
rows="4"
required
value={formData.message}
onChange={handleChange}
placeholder="Provide a brief overview of your project requirements..."
className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
></textarea>
</div>

{/* Submit Button */}
<button
type="submit"
disabled={loading}
className="w-full py-3.5 rounded-lg bg-[#1253a4] hover:bg-[#0e4487] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
>
{loading ? (
<span>Transmitting Specifications...</span>
) : (
<>
<Send className="w-4 h-4" />
<span>Send Proposal Request</span>
</>
)}
</button>

{/* Fine print */}
<p className="text-[11px] text-slate-500 text-center leading-relaxed pt-2">
By submitting this form, you agree to our Privacy Policy and consent to being contacted by our technical sales team.
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
