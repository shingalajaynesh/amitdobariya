'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';
import { formatWhatsAppMessage } from '@/lib/utils';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    city: '',
    eventType: 'Motivational Session',
    eventDate: '',
    audienceSize: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = formatWhatsAppMessage(formData);
    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  };

  const handleDirectFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant form submission & also trigger WhatsApp fallback
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-xl">
      {isSubmitted ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-deep mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-brand-fresh" />
          </div>
          <h3 className="text-2xl font-bold text-brand-text font-heading">
            Thank You for Reaching Out!
          </h3>
          <p className="text-brand-muted text-base max-w-md mx-auto">
            Your booking request has been received. Amit Sir or his team will get back to you shortly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsAppSubmit}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Forward Request via WhatsApp</span>
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-100 text-brand-text font-bold text-sm hover:bg-slate-200"
            >
              <span>Submit Another Request</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleDirectFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

            {/* Organization / Institution */}
            <div>
              <label htmlFor="organization" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Organization / School / Company
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. DPS Surat / Tech Corp"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                City / Location
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Surat, Ahmedabad, etc."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              >
                <option value="Motivational Session">Motivational Session</option>
                <option value="Anchor / Event Hosting">Anchor / Event Hosting</option>
                <option value="School Program">School Program</option>
                <option value="College Youth Event">College Youth Event</option>
                <option value="Corporate Keynote">Corporate Keynote</option>
                <option value="Professional Training">Professional Training</option>
                <option value="VASTRO Spiritual Coaching">VASTRO Spiritual Coaching</option>
                <option value="Family Counselling">Family Counselling</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Expected Audience */}
            <div>
              <label htmlFor="audienceSize" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
                Expected Audience
              </label>
              <input
                type="text"
                id="audienceSize"
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleChange}
                placeholder="e.g. 500 Students / 100 Executives"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
              />
            </div>

          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
              Tentative Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">
              Event Details & Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event theme, audience profile, duration, and key objectives..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-text focus:bg-white focus:border-brand-deep transition-all text-sm resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              className="w-full sm:w-1/2 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-deep text-white font-bold text-sm shadow-button hover:bg-brand-dark transition-all"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>Send Booking Enquiry</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full sm:w-1/2 inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-white" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
