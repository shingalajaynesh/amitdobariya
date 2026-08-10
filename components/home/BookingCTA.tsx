import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, ArrowRight, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export default function BookingCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-green text-white relative overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-fresh/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-700/50">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <span>Bookings Open Across Gujarat & Beyond</span>
        </div>

        {/* Large Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Create an <span className="text-emerald-400">Impactful Experience</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
          Invite Amit Dobariya for your next school seminar, college festival, corporate keynote, event anchoring, or personal transformation session.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={SITE_CONFIG.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg hover:bg-[#20bd5a] transition-all group"
          >
            <MessageCircle className="w-5 h-5 mr-2.5 fill-white text-[#25D366]" />
            <span>Enquire on WhatsApp</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={SITE_CONFIG.contact.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-brand-dark font-bold text-base shadow-lg hover:bg-emerald-50 transition-all"
          >
            <Phone className="w-5 h-5 mr-2.5 text-brand-deep" />
            <span>Call +91 81550 25217</span>
          </a>
        </div>

        {/* Subtle Email info */}
        <p className="text-xs text-emerald-200/70 pt-2">
          Or send event details directly to <a href={SITE_CONFIG.contact.emailLink} className="underline text-emerald-300">{SITE_CONFIG.contact.email}</a>
        </p>

      </div>
    </section>
  );
}
