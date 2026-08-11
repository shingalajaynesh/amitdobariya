'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Mic, Sparkles, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';
import { FEATURED_HERO_IMAGE } from '@/data/mediaData';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-light">
      {/* Decorative Subtle Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-fresh/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-deep/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-light border border-brand-border text-brand-deep shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-fresh animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
                Motivational Speaker • Anchor • Transformational Coach
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-text tracking-tight leading-[1.12]">
              Words That <span className="text-gradient">Inspire</span>.<br />
              Experiences That <span className="text-gradient">Transform</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
              Empowering students, professionals, and families across Gujarat to discover unshakeable confidence, mental clarity, and purpose through high-energy motivational speaking, master event anchoring, and transformational coaching.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact?type=speaking"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-brand-deep text-white font-bold text-base shadow-button hover:bg-brand-dark transition-all duration-200 group active:scale-95"
              >
                <span>Invite Amit to Speak</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact?type=anchor"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-brand-deep font-bold text-base border-2 border-brand-deep/30 hover:border-brand-deep hover:bg-brand-light transition-all duration-200 group active:scale-95 shadow-sm"
              >
                <Mic className="w-5 h-5 mr-2 text-brand-fresh" />
                <span>Book as an Anchor</span>
              </Link>
            </div>

            {/* Quick WhatsApp Inquiry Link */}
            <div className="pt-2 flex items-center space-x-3 text-sm font-medium text-brand-muted">
              <span className="text-slate-400">Prefer instant chat?</span>
              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#25D366] font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 fill-[#25D366] text-white" />
                <span>Enquire directly on WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-900/10">
              {SITE_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-deep font-heading">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-semibold text-brand-text uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Photo Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Decorative Accent Card */}
            <div className="absolute -inset-4 bg-gradient-green rounded-3xl opacity-20 transform rotate-2 scale-95 blur-lg -z-10" />
            
            {/* Main Styled Photo Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group max-w-md w-full">
              <div className="relative aspect-[4/5] w-full bg-slate-100">
                <Image
                  src={FEATURED_HERO_IMAGE}
                  alt="Amit Dobariya Motivational Speaker and Event Anchor"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-brand-border flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep">
                    <Sparkles className="w-5 h-5 text-brand-fresh" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Amit Dobariya</h4>
                    <p className="text-xs font-medium text-brand-muted">Surat, Gujarat</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-light text-brand-deep text-xs font-bold flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5 mr-1 text-brand-fresh" />
                  <span>250+ Schools</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
