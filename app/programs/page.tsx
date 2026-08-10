import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { School, GraduationCap, Briefcase, Mic, Compass, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import BookingCTA from '@/components/home/BookingCTA';
import { PROGRAMS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Programs & Services | Amit Dobariya',
  description:
    'Explore motivational programs, school seminars, corporate keynotes, event anchoring, VASTRO spiritual coaching, and counselling by Amit Dobariya in Surat, Gujarat.',
};

export default function ProgramsPage() {
  const iconMap: Record<string, React.ElementType> = {
    School,
    GraduationCap,
    Briefcase,
    Mic,
    Compass,
    HeartHandshake,
  };

  return (
    <div className="pt-28 pb-16 md:pt-36">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <SectionHeading
          eyebrow="Signature Offerings"
          title="Programs & Transformational"
          highlightText="Services"
          subtitle="Explore tailored sessions designed for educational institutions, corporate organizations, families, and individuals."
        />
      </section>

      {/* Programs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="space-y-8">
          {PROGRAMS.map((program) => {
            const Icon = iconMap[program.iconName] || School;
            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep">
                      <Icon className="w-6 h-6 text-brand-fresh" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-brand-text/80 text-xs font-bold uppercase tracking-wider">
                      {program.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-text font-heading">
                    {program.title}
                  </h3>

                  <p className="text-brand-muted text-base leading-relaxed">
                    {program.fullDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-brand-text">
                    <span className="text-slate-400 font-normal">Target Audience: </span>
                    {program.targetAudience}
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase text-brand-text tracking-wider mb-2">Key Outcomes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.outcomes.map((out, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs font-medium text-brand-text">
                          <CheckCircle className="w-4 h-4 text-brand-fresh flex-shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center items-stretch lg:items-end border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 space-y-4">
                  <Link
                    href={`/contact?program=${program.id}`}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-deep text-white font-bold text-sm shadow-button hover:bg-brand-dark transition-all"
                  >
                    <span>Enquire For This Program</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                  <a
                    href={`https://wa.me/918155025217?text=${encodeURIComponent(`Hello Amit Sir, I would like to enquire about your program: ${program.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-brand-border text-brand-deep font-bold text-sm hover:bg-brand-light transition-all text-center"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
