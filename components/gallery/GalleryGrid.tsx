'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/siteData';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Moments' },
  { id: 'speaking', label: 'Motivational Seminars' },
  { id: 'anchoring', label: 'Stage Hosting & Anchoring' },
  { id: 'students', label: 'School & Youth Programs' },
  { id: 'events', label: 'Large Audiences & Summits' },
  { id: 'programs', label: 'VASTRO & Transformations' },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              'px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200',
              activeCategory === cat.id
                ? 'bg-brand-deep text-white shadow-button'
                : 'bg-white text-brand-text hover:bg-brand-light border border-slate-200'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-[4/3] cursor-pointer border border-slate-200"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
              <div className="flex justify-end">
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-brand-fresh text-white inline-block mb-2">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-heading">{item.title}</h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
