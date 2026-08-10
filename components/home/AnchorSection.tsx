import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mic, Building2, School, Sparkles, Trophy, Users } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { ANCHOR_FORMATS } from '@/data/siteData';

export default function AnchorSection() {
  const iconMap: Record<string, React.ElementType> = {
    Building2,
    School,
    Sparkles,
    Trophy,
    Users,
    Mic,
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Master of Ceremonies & Stage Host"
          title="An Anchor Who Turns an Event Into"
          highlightText="an Unforgettable Experience"
          subtitle="Combining high vocal command, impeccable protocol timing, and warm crowd connection for premier stage hosting in Surat & Gujarat."
        />

        {/* Anchor Highlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Anchor Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ANCHOR_FORMATS.map((format, idx) => {
              const Icon = iconMap[format.icon] || Mic;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-border hover:bg-brand-light/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-deep mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-brand-fresh" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text mb-2 font-heading">
                    {format.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {format.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Anchor Image Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/5] w-full bg-slate-100 group">
              <Image
                src="/images/amit-anchor-01.webp"
                alt="Amit Dobariya Event Host and Professional Stage Anchor"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-sm text-xs font-bold">
                  <Mic className="w-3.5 h-3.5" />
                  <span>Stage Authority & Energy</span>
                </div>
                <h3 className="text-xl font-bold font-heading">Seamless Event Flow & Crowd Engagement</h3>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                href="/contact?type=anchor"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-deep text-white font-bold text-base shadow-button hover:bg-brand-dark transition-all group"
              >
                <Mic className="w-5 h-5 mr-2 text-brand-fresh" />
                <span>Book Amit as an Anchor</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
