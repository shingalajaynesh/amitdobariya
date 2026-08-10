'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/siteData';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const item = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 z-10">
          <span className="text-xs font-semibold uppercase tracking-widest bg-brand-deep px-3 py-1 rounded-full">
            {item.category} • {currentIndex + 1} of {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="w-full p-4 bg-slate-900/90 text-center text-white rounded-b-2xl">
          <h3 className="text-lg font-bold font-heading">{item.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl mx-auto">{item.caption}</p>
        </div>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-brand-deep text-white transition-colors focus:outline-none shadow-lg"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-brand-deep text-white transition-colors focus:outline-none shadow-lg"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
