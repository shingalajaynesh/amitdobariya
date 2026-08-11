import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { School, GraduationCap, Briefcase, HeartHandshake, ShieldCheck, Target, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';
import { SPEAKING_TOPICS } from '@/data/siteData';
import { FEATURED_SPEAKER_IMAGE } from '@/data/mediaData';

export const metadata: Metadata = {
  title: 'Motivational Speaker in Surat & Gujarat | Amit Dobariya',
  description:
    'Book Amit Dobariya, top motivational speaker in Surat & Gujarat for school seminars, college youth festivals, corporate keynotes, and student motivation.',
};

export default function MotivationalSpeakerPage() {
  const faqs = [
    {
      q: 'What types of events does Amit Dobariya address as a motivational speaker?',
      a: 'Amit addresses school student seminars (8th to 12th standards), college youth leadership programs, corporate motivational keynotes, parent-child transformation workshops, and public keynotes across Gujarat.',
    },
    {
      q: 'In which languages can the motivational session be conducted?',
      a: 'Sessions are delivered fluently in Gujarati, English, and Hindi, tailored specifically to the preference of the audience.',
    },
    {
      q: 'How do we invite Amit Dobariya for a school or college seminar?',
      a: 'You can submit an inquiry through our online Booking Form, call +91 81550 25217 directly, or send an instant WhatsApp message specifying your institution name and tentative dates.',
    },
    {
      q: 'What is the duration of a typical motivational keynote?',
      a: 'Standard sessions range from 60 to 90 minutes for school & college keynotes, and up to half-day interactive workshops for corporate teams.',
    },
  ];

  return (
    <div className="pt-28 pb-16 md:pt-36">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          eyebrow="Motivational Keynotes & Seminars"
          title="Motivational Speaker in"
          highlightText="Surat & Gujarat"
          subtitle="Inspiring students, empowering youth, and energizing corporate teams through high-impact stage presence and actionable motivation."
        />
      </section>

      {/* Hero Visual & Feature */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image
                src={FEATURED_SPEAKER_IMAGE}
                alt="Amit Dobariya Motivational Speaker Surat Gujarat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-brand-fresh text-white text-xs font-bold uppercase tracking-wider">
                  250+ Schools • 500+ Seminars
                </span>
                <h3 className="text-xl font-bold font-heading mt-2">Connecting Heart & Mind on Stage</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-brand-text font-heading">
              What Audiences Expect from Amit Dobariya&apos;s Keynotes
            </h3>
            <p className="text-brand-muted text-base leading-relaxed">
              Unlike generic motivational talks, Amit combines GTU engineering analytical clarity with deep emotional empathy. Every session is designed to leave attendees with practical mental tools, higher self-belief, and zero hesitation.
            </p>

            <div className="space-y-3">
              {[
                'Actionable strategies to overcome exam & career anxiety',
                'Unshakable self-confidence and stage fear management',
                'Clear daily habits for goal setting and discipline',
                'Empathetic parent-child communication insight',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-fresh flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact?type=speaking"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-deep text-white font-bold text-sm shadow-button hover:bg-brand-dark transition-all"
              >
                <span>Book a Motivational Session</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Formats Grid */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Keynote Categories"
            title="Tailored Seminars for Every"
            highlightText="Audience"
            subtitle="Customized agendas for educational institutions, corporate teams, and community gatherings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKING_TOPICS.map((topic) => (
              <div key={topic.id} className="bg-white p-7 rounded-2xl border border-brand-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep mb-4">
                  <Target className="w-5 h-5 text-brand-fresh" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2 font-heading">{topic.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">{topic.desc}</p>
                <div className="text-xs font-semibold text-brand-deep uppercase tracking-wider pt-3 border-t border-slate-100">
                  {topic.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked"
          highlightText="Questions"
          subtitle="Everything you need to know about booking Amit Dobariya for speaking engagements."
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

      {/* Internal Navigation Links */}
      <section className="pb-16 text-center">
        <p className="text-xs text-brand-muted mb-4">Explore other services by Amit Dobariya:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/anchor" className="text-xs font-bold text-brand-deep hover:underline">
            Professional Anchor & Host →
          </Link>
          <Link href="/programs" className="text-xs font-bold text-brand-deep hover:underline">
            All Programs Catalog →
          </Link>
          <Link href="/contact" className="text-xs font-bold text-brand-deep hover:underline">
            Contact / Booking →
          </Link>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
