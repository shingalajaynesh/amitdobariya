import React from 'react';
import { School, Mic, HeartHandshake, Compass } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export default function StatsSection() {
  const statIcons = [School, Mic, HeartHandshake, Compass];

  return (
    <section className="py-16 bg-gradient-green text-white relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10A77A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/60">
          {SITE_CONFIG.stats.map((stat, idx) => {
            const Icon = statIcons[idx] || School;
            return (
              <div key={idx} className="pt-6 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 text-center sm:text-left flex flex-col justify-between">
                <div className="flex items-center justify-center sm:justify-start space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-emerald-200 uppercase tracking-wider text-xs">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-emerald-100/70 mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
