import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Mic, Building2, School, Sparkles, Trophy, Users, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';
import { ANCHOR_FORMATS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Professional Anchor & Event Host in Surat | Amit Dobariya',
  description:
    'Book Amit Dobariya as a professional event anchor, keynote host, award show emcee, and master of ceremonies in Surat, Gujarat.',
};

export default function AnchorPage() {
  const faqs = [
    {
      q: 'What event formats does Amit Dobariya anchor?',
      a: 'Amit hosts corporate summits, educational annual functions, college youth festivals, award ceremonies, press conferences, and public cultural events.',
    },
    {
      q: 'Does Amit anchor in Gujarati, Hindi, and English?',
      a: 'Yes, Amit delivers seamless trilingual stage hosting (Gujarati, Hindi, English), adapting to corporate standards or lively youth energy as needed.',
    },
    {
      q: 'Can Amit manage high-profile VIP protocols and timing transitions?',
      a: 'Absolutely. With years of live stage experience, Amit ensures agenda timing is strictly maintained while keeping audience energy high.',
    },
  ];

  return (
    <div className="pt-28 pb-16 md:pt-36">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          eyebrow="Master of Ceremonies & Stage Host"
          title="Professional Anchor & Event Host in"
          highlightText="Surat & Gujarat"
          subtitle="Energy. Connection. Confidence. Presence. Transforming events into unforgettable stage experiences."
        />
      </section>

      {/* Visual Feature */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image
                src="/images/amit-anchor-01.webp"
                alt="Amit Dobariya Stage Anchor and Event Host Surat"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-brand-fresh text-white text-xs font-bold uppercase tracking-wider">
                  Master of Ceremonies
                </span>
                <h3 className="text-xl font-bold font-heading mt-2">vocal Command & Crowd Energy</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-brand-text font-heading">
              Why Event Organizers Choose Amit Dobariya
            </h3>
            <p className="text-brand-muted text-base leading-relaxed">
              An event host is the heartbeat of the stage. Amit Dobariya brings magnetic vocal clarity, spontaneous audience interaction, and strict agenda decorum to make every segment flow effortlessly.
            </p>

            <div className="space-y-3">
              {[
                'Impeccable agenda timing & VIP protocol management',
                'High stage energy that prevents crowd fatigue',
                'Natural humor and warm audience interaction',
                'Trilingual command in Gujarati, Hindi, and English',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-fresh flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact?type=anchor"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-deep text-white font-bold text-sm shadow-button hover:bg-brand-dark transition-all"
              >
                <Mic className="w-4 h-4 mr-2 text-brand-fresh" />
                <span>Book Amit as an Anchor</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Formats Grid */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Available Event Formats"
            title="Stage Hosting Services for Every"
            highlightText="Occasion"
            subtitle="Explore available event formats engineered for maximum stage impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANCHOR_FORMATS.map((format, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep mb-4">
                  <Mic className="w-5 h-5 text-brand-fresh" />
                </div>
                <h3 className="text-base font-bold text-brand-text mb-2 font-heading">{format.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Anchor Booking FAQ"
          title="Frequently Asked"
          highlightText="Questions"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
              <h4 className="text-base font-bold text-brand-text font-heading flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-brand-fresh flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 ml-8 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
