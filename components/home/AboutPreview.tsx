import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { SITE_CONFIG } from '@/data/siteData';

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Story Behind The Purpose"
          title="More Than a Speaker —"
          highlightText="A Catalyst for Transformation"
          subtitle="Combining engineering logic, stage mastery, and spiritual self-awareness to inspire real human change."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100 aspect-[4/5] w-full">
              <Image
                src="/images/amit-about.webp"
                alt="Amit Dobariya Spiritual Coach and Transformational Speaker"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-8 sm:-right-6 p-5 rounded-2xl bg-white shadow-xl border border-brand-border max-w-xs hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-deep flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-brand-fresh" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">GTU Chemical Engineer</h4>
                  <p className="text-xs text-brand-muted">Scientific Mindset Applied to Mindset Transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-brand-text/90 text-base md:text-lg leading-relaxed">
              <p>
                With a rigorous academic background in <strong className="text-brand-deep font-semibold">Chemical Engineering from Gujarat Technological University (GTU)</strong>, Amit Dobariya approaches human mindset not with abstract jargon, but with structured analytical logic.
              </p>

              <p>
                His professional journey evolved naturally toward inspiring, guiding, and uplifting people. Seeing students struggle with exam pressure, individuals battle self-doubt, and families experience miscommunication, Amit dedicated his life to stage keynotes and transformational coaching.
              </p>

              <p>
                He is the founder of <strong className="text-brand-deep font-semibold">VASTRO</strong> — a pioneering platform dedicated to bringing practical science and spiritual self-awareness together.
              </p>
            </div>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Practical Critical Thinking',
                'Empathy & Mind Clarity',
                'Fear & Stress Management',
                'Meditation & Tarot Wisdom',
                'Effective Communication',
                'Family & Parent Counselling',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-sm font-semibold text-brand-text">
                  <CheckCircle2 className="w-5 h-5 text-brand-fresh flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-brand-light text-brand-deep font-bold text-sm hover:bg-brand-deep hover:text-white transition-all duration-200 group border border-brand-border"
              >
                <span>Discover Amit&apos;s Full Journey</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
