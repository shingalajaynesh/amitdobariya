import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Brain, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

export default function VastroSection() {
  const vastroFeatures = [
    {
      title: 'Science & Logic Fusion',
      desc: 'Grounding spiritual self-awareness in logical engineering frameworks — clear, rational, and structured.',
      icon: Brain,
    },
    {
      title: 'Mindfulness & Meditation',
      desc: 'Practical daily focus, mental stillness, and stress-reduction techniques.',
      icon: Compass,
    },
    {
      title: 'Tarot & Intuitive Clarity',
      desc: 'Reflective life guidance, decision clarity, and self-awareness exploration.',
      icon: Eye,
    },
    {
      title: 'Numerology & Mind Patterns',
      desc: 'Understanding personal strengths, life numbers, and growth cycles.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VASTRO Container */}
        <div className="bg-gradient-to-br from-brand-dark via-brand-deep to-emerald-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-fresh/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-700/50">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Spiritual Coaching & Mind Awareness</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Founder of <span className="text-emerald-400">VASTRO</span>
              </h2>

              <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
                Founded by Amit Dobariya, <strong>VASTRO</strong> is a specialized platform designed to bring practical science and deep spirituality together. It empowers individuals to understand their inner mind, resolve emotional conflict, and find true direction.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-200 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline mr-2" />
                <span>
                  <strong>Ethical Approach:</strong> Professional spiritual guidance focusing strictly on self-awareness, mental clarity, and mindfulness — free from unscientific medical claims.
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?topic=vastro"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-emerald-400 text-brand-dark font-bold text-sm hover:bg-emerald-300 transition-all shadow-button"
                >
                  <span>Enquire for VASTRO Coaching</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Features Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vastroFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-800/40 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-900/80 flex items-center justify-center text-emerald-400 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 font-heading">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-emerald-100/70 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
