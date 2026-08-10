import React from 'react';
import Link from 'next/link';
import { ArrowRight, School, GraduationCap, Briefcase, Mic, Compass, HeartHandshake, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { PROGRAMS } from '@/data/siteData';

export default function ProgramsGrid() {
  const iconMap: Record<string, React.ElementType> = {
    School,
    GraduationCap,
    Briefcase,
    Mic,
    Compass,
    HeartHandshake,
  };

  return (
    <section className="py-20 md:py-28 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Programs & Services"
          title="Designed for Deep Impact &"
          highlightText="Measurable Transformation"
          subtitle="Whether for school auditoriums, corporate conferences, or personal life clarity, explore Amit Dobariya&apos;s signature engagements."
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = iconMap[program.iconName] || School;
            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-deep group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-brand-fresh" />
                    </div>
                    {program.featured && (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-brand-deep text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-brand-text mb-3 font-heading group-hover:text-brand-deep transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    {program.shortDesc}
                  </p>

                  {/* Target Audience Badge */}
                  <div className="mb-6 p-3 rounded-xl bg-slate-50 text-xs font-semibold text-brand-text/80">
                    <span className="text-slate-400 font-normal">Ideal for: </span>
                    {program.targetAudience}
                  </div>

                  {/* Key Outcomes List */}
                  <div className="space-y-2 mb-6">
                    {program.outcomes.slice(0, 3).map((outcome, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-medium text-brand-text/90">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-fresh flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/contact?program=${program.id}`}
                    className="inline-flex items-center text-sm font-bold text-brand-deep group-hover:text-brand-dark transition-colors"
                  >
                    <span>Enquire For This Program</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Programs Action */}
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-brand-border text-brand-deep font-bold text-sm shadow-sm hover:bg-brand-light transition-all"
          >
            <span>View Complete Programs Catalog</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
