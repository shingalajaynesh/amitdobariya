'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, Video } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import VideoModal from '@/components/gallery/VideoModal';
import { VIDEOS, VideoItem } from '@/data/siteData';

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const mainVideo = VIDEOS[0];
  const gridVideos = VIDEOS.slice(1);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Video Showreel & Live Stage Moments"
          title="See Amit Dobariya"
          highlightText="in Action"
          subtitle="Experience the vocal command, high audience energy, and stage resonance through keynote clips and event hosting highlights."
        />

        {/* Featured Main Video */}
        {mainVideo && (
          <div className="mb-12">
            <div
              onClick={() => setActiveVideo(mainVideo)}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group cursor-pointer aspect-[16/9] max-h-[500px] w-full"
            >
              <Image
                src={mainVideo.thumbnailUrl}
                alt={mainVideo.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-deep/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-fresh transition-all duration-300 border-4 border-white/30 backdrop-blur-sm">
                  <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Title Info */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-brand-fresh text-white text-xs font-bold uppercase tracking-wider">
                    {mainVideo.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Duration: {mainVideo.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading">
                  {mainVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl hidden sm:block">
                  {mainVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                
                {/* Small Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-deep/80 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-fresh transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                  <span className="bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm uppercase">
                    {video.category}
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="font-bold text-brand-text text-base group-hover:text-brand-deep transition-colors line-clamp-2 font-heading">
                  {video.title}
                </h4>
                <p className="text-xs text-brand-muted line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm font-bold text-brand-deep hover:underline"
          >
            <Video className="w-4 h-4 mr-2 text-brand-fresh" />
            <span>Explore Full Video & Photo Gallery</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>

      {/* Video Modal Component */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
