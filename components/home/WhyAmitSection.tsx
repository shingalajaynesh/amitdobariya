import React from 'react';
import { BrainCircuit, Award, Sparkles, Compass, Zap, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { WHY_AMIT_PILLARS } from '@/data/siteData';

export default function WhyAmitSection() {
  const iconMap: Record<string, React.ElementType> = {
    BrainCircuit,
    Award,
    Sparkles,
    Compass,
    Zap,
    MapPin,
    MessageSquare,
    ShieldCheck,
  };

  return (
    <section className="py-20 md:py-28 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Differentiation Factor"
          title="Why Audiences & Institutions"
          highlightText="Connect With Amit"
          subtitle="A rare synthesis of technical analytical clarity, magnetic vocal energy, and genuine human empathy."
        />

        {/* 6-8 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AMIT_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-brand-fresh" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2.5 font-heading group-hover:text-brand-deep transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
