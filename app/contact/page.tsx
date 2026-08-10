import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import BookingForm from '@/components/contact/BookingForm';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contact & Booking | Amit Dobariya',
  description:
    'Invite Amit Dobariya for school seminars, college keynotes, corporate event anchoring, or personal coaching in Surat, Gujarat. Call +91 81550 25217 or WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36 bg-gradient-light min-h-screen">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Amit Dobariya for Your"
          highlightText="Next Event"
          subtitle="Fill out the form below or contact us directly on WhatsApp or phone for immediate availability and event dates."
        />
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-fresh/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold font-heading">
                Direct Inquiry Channels
              </h3>
              
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                For urgent event dates, school booking inquiries, or corporate hosting requirements, reach out directly:
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={SITE_CONFIG.contact.phoneLink}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/50 hover:border-emerald-500 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block">
                      Call Directly
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {SITE_CONFIG.contact.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={SITE_CONFIG.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block">
                      WhatsApp Chat
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +91 81550 25217
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={SITE_CONFIG.contact.emailLink}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/50 hover:border-emerald-500 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate block">
                      {SITE_CONFIG.contact.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/50">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block">
                      Base Location
                    </span>
                    <span className="text-sm font-bold text-white">
                      {SITE_CONFIG.contact.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Event Response Assurance */}
            <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-3">
              <div className="flex items-center space-x-2 text-brand-deep font-bold text-sm">
                <Clock className="w-4 h-4 text-brand-fresh" />
                <span>Response Time Guarantee</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                All event inquiries sent via the booking form or WhatsApp are reviewed and acknowledged within 12–24 business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>
      </section>
    </div>
  );
}
