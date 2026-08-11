import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, ShieldCheck, Target, MessageSquare, HeartHandshake, Compass, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { SPEAKING_TOPICS } from '@/data/siteData';
import { FEATURED_SPEAKER_IMAGE } from '@/data/mediaData';

export default function SpeakerSection() {
  const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    ShieldCheck,
    Target,
    MessageSquare,
    HeartHandshake,
    Compass,
  };

  return (
    <section className="py-20 md:py-28 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Motivational Keynotes & Seminars"
          title="Motivational Speaking That"
          highlightText="Moves People to Action"
          subtitle="Delivering high-energy keynotes for schools, colleges, corporate summits, and public gatherings across Gujarat."
        />

        {/* Top Feature: Stage Imagery & Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] w-full border-4 border-white bg-slate-200 group">
              <Image
                src={FEATURED_SPEAKER_IMAGE}
                alt="Amit Dobariya Motivational Speaker on Stage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-brand-fresh text-white text-xs font-extrabold uppercase tracking-wider">
                  250+ School Seminars
                </span>
                <h3 className="text-xl font-bold mt-2">Youth & Student Empowerment Keynotes</h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 bg-white p-8 rounded-3xl shadow-sm border border-brand-border">
            <h3 className="text-2xl font-bold text-brand-text font-heading">
              Why Audiences Experience Immediate Impact
            </h3>
            <p className="text-brand-muted text-base leading-relaxed">
              Amit Dobariya does not just talk about motivation — he creates interactive, energetic experiences where students and professionals conquer self-doubt, reframe challenges, and build clear action blueprints.
            </p>

            <ul className="space-y-3">
              {[
                'High-voltage stage energy that maintains 100% crowd focus',
                'Real-life relatable stories tailored to Indian & Gujarati youth',
                'Actionable stress-busting & exam confidence techniques',
                'Clear goal setting and high-performance daily habits',
              ].map((point, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm font-semibold text-brand-text">
                  <CheckCircle className="w-5 h-5 text-brand-fresh flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                href="/motivational-speaker"
                className="inline-flex items-center text-brand-deep font-bold text-sm hover:underline"
              >
                <span>Explore Speaking Programs & Topics</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKING_TOPICS.map((topic) => {
            const Icon = iconMap[topic.icon] || GraduationCap;
            return (
              <div
                key={topic.id}
                className="bg-white p-7 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep mb-5">
                    <Icon className="w-6 h-6 text-brand-fresh" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-2.5 font-heading">
                    {topic.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {topic.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-deep uppercase tracking-wider">
                    {topic.target}
                  </span>
                  <Link
                    href={`/contact?topic=${topic.id}`}
                    className="p-1.5 rounded-lg text-brand-deep hover:bg-brand-light"
                    aria-label={`Enquire about ${topic.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/contact?type=speaking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-deep text-white font-bold text-base shadow-button hover:bg-brand-dark transition-all group"
          >
            <span>Invite Amit to Your Next Event</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
