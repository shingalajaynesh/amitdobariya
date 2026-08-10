import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { TESTIMONIALS } from '@/data/siteData';

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Feedback & Experiences"
          title="Voices of Impact &"
          highlightText="Transformation"
          subtitle="Real impressions from school administrators, corporate event managers, and counselling clients across Gujarat."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep">
                    <Quote className="w-5 h-5 text-brand-fresh" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-brand-text/70 text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                <p className="text-brand-text text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-brand-text text-base font-heading">
                  {item.author}
                </h4>
                <p className="text-xs text-brand-muted">
                  {item.role} • {item.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
