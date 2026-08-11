'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENT_LOGOS } from '@/data/clientLogosData';
import SectionHeading from '@/components/common/SectionHeading';

export default function ClientLogosTicker() {
  const row1 = CLIENT_LOGOS.slice(0, 15);
  const row2 = CLIENT_LOGOS.slice(15);

  // Duplicate for seamless 100% marquee loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section className="py-16 md:py-24 bg-brand-light/60 border-y border-brand-border/60 overflow-hidden relative">
      {/* Decorative Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <SectionHeading
          eyebrow="Trusted Partnerships & Client Network"
          title="Organizations & Institutions That Trust"
          highlightText="Amit Dobariya"
          subtitle="Empowering leading educational trusts, corporate brands, rotary/lions clubs, and event organizers across Surat and Gujarat."
        />
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* Row 1: Leftward Infinite Marquee */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee space-x-4 sm:space-x-6 py-2">
            {marqueeRow1.map((client, idx) => (
              <div
                key={`r1_${client.id}_${idx}`}
                className="h-20 sm:h-24 w-44 sm:w-56 shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-4 flex items-center justify-center group hover:border-brand-fresh hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.url}
                    alt={client.name}
                    fill
                    sizes="224px"
                    className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-reverse space-x-4 sm:space-x-6 py-2">
            {marqueeRow2.map((client, idx) => (
              <div
                key={`r2_${client.id}_${idx}`}
                className="h-20 sm:h-24 w-44 sm:w-56 shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-4 flex items-center justify-center group hover:border-brand-fresh hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.url}
                    alt={client.name}
                    fill
                    sizes="224px"
                    className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
