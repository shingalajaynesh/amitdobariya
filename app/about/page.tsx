import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { GraduationCap, Compass, School, Mic, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import StatsSection from '@/components/home/StatsSection';
import BookingCTA from '@/components/home/BookingCTA';
import { SITE_CONFIG } from '@/data/siteData';
import { FEATURED_ABOUT_IMAGE } from '@/data/mediaData';

export const metadata: Metadata = {
  title: 'About Amit Dobariya | GTU Chemical Engineer, Speaker & Spiritual Coach',
  description:
    'Discover the journey of Amit Dobariya: GTU Chemical Engineering graduate turned Motivational Speaker, Event Anchor, and Founder of VASTRO in Surat, Gujarat.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36">
      
      {/* Hero Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          eyebrow="The Story & Vision"
          title="Bridging Analytical Logic with"
          highlightText="Human Transformation"
          subtitle="From Chemical Engineering at GTU to inspiring thousands across 250+ schools and corporate stages."
        />
      </section>

      {/* Main Bio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100">
              <Image
                src={FEATURED_ABOUT_IMAGE}
                alt="Amit Dobariya Motivational Speaker and Transformational Coach"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-text">
              Analytical Thinking Meets Deep Emotional Resonance
            </h3>

            <div className="space-y-4 text-brand-muted text-base leading-relaxed">
              <p>
                Amit Dobariya holds a background in <strong>Chemical Engineering from Gujarat Technological University (GTU)</strong>. Equipped with a sharp analytical mindset, he quickly realized that the biggest challenges people face — whether students, professionals, or families — stem from unaddressed mindset hurdles, exam anxiety, and emotional communication gaps.
              </p>

              <p>
                Driven by a deep passion for human potential, Amit pivoted into full-time motivational speaking, event anchoring, and transformational coaching. Over the past several years, he has conducted <strong>over 500+ motivational programs</strong> and addressed <strong>250+ school seminars</strong> across Surat and Gujarat.
              </p>

              <p>
                As the founder of <strong>VASTRO</strong>, Amit brings together scientific critical thinking and spiritual self-awareness (meditation, tarot, numerology, hypnosis, and mindfulness) to help individuals discover long-lasting inner peace and clarity.
              </p>
            </div>

            {/* Key Expertise Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              {[
                'GTU Chemical Engineering Graduate',
                'Founder of VASTRO Platform',
                '250+ School Seminars Reached',
                '500+ Motivational Stage Keynotes',
                '100+ Personal Counselling Engagements',
                'Professional Event Host & Anchor',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-sm font-semibold text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-fresh flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?type=speaking"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-deep text-white font-bold text-sm shadow-button hover:bg-brand-dark transition-all"
              >
                <span>Invite Amit to Speak</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact?type=anchor"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-brand-border text-brand-deep font-bold text-sm hover:bg-brand-light transition-all"
              >
                <Mic className="w-4 h-4 mr-2 text-brand-fresh" />
                <span>Book as an Anchor</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Stats Banner */}
      <StatsSection />

      {/* Booking CTA */}
      <div className="mt-20">
        <BookingCTA />
      </div>

    </div>
  );
}
