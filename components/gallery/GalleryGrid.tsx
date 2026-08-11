'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Maximize2, Play, Video, Image as ImageIcon, ChevronDown } from 'lucide-react';
import { MEDIA_ITEMS, MediaItem } from '@/data/mediaData';
import { GalleryItem, VideoItem } from '@/data/siteData';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import VideoModal from '@/components/gallery/VideoModal';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Media', count: MEDIA_ITEMS.length },
  { 
    id: 'Motivational Photos', 
    label: 'Motivational Seminars (Photos)', 
    count: MEDIA_ITEMS.filter(m => m.folderCategory === 'Motivational Photos').length 
  },
  { 
    id: 'Anchor Photos', 
    label: 'Event Anchoring (Photos)', 
    count: MEDIA_ITEMS.filter(m => m.folderCategory === 'Anchor Photos').length 
  },
  { 
    id: 'Motivational Videos', 
    label: 'Motivational Speeches (Videos)', 
    count: MEDIA_ITEMS.filter(m => m.folderCategory === 'Motivational Videos').length 
  },
  { 
    id: 'Anchoring Videos', 
    label: 'Stage Hosting (Videos)', 
    count: MEDIA_ITEMS.filter(m => m.folderCategory === 'Anchoring Videos').length 
  },
];

const INITIAL_PAGE_SIZE = 18;
const PAGE_INCREMENT = 18;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MEDIA_ITEMS;
    return MEDIA_ITEMS.filter((item) => item.folderCategory === activeCategory);
  }, [activeCategory]);

  // Extract photos for lightbox navigation
  const photoItems: GalleryItem[] = useMemo(() => {
    return filteredItems
      .filter((item) => item.type === 'photo')
      .map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category,
        imageUrl: item.url,
        caption: item.caption,
      }));
  }, [filteredItems]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(INITIAL_PAGE_SIZE);
    setPhotoIndex(null);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_INCREMENT);
  };

  const handleItemClick = (item: MediaItem) => {
    if (item.type === 'video') {
      const vItem: VideoItem = {
        id: item.id,
        title: item.title,
        category: item.category,
        thumbnailUrl: item.thumbnailUrl,
        videoUrl: item.url,
        duration: item.folderCategory.includes('Anchor') ? 'Stage Host' : 'Motivational',
        description: item.caption,
      };
      setActiveVideo(vItem);
    } else {
      // Find index in photoItems
      const pIdx = photoItems.findIndex((p) => p.id === item.id);
      if (pIdx !== -1) {
        setPhotoIndex(pIdx);
      }
    }
  };

  const handlePrevPhoto = () => {
    if (photoIndex !== null && photoItems.length > 0) {
      setPhotoIndex((prev) => (prev === 0 ? photoItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNextPhoto = () => {
    if (photoIndex !== null && photoItems.length > 0) {
      setPhotoIndex((prev) => (prev === photoItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={cn(
              'px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 flex items-center space-x-2',
              activeCategory === cat.id
                ? 'bg-brand-deep text-white shadow-button scale-105'
                : 'bg-white text-brand-text hover:bg-brand-light border border-slate-200'
            )}
          >
            <span>{cat.label}</span>
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[10px] font-extrabold',
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-brand-muted'
              )}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => {
          const isVideo = item.type === 'video';

          return (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-900 aspect-[4/3] cursor-pointer border border-slate-200 hover:border-brand-deep transition-all duration-300"
            >
              {isVideo ? (
                <video
                  src={`${item.url}#t=0.5`}
                  poster={item.thumbnailUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              ) : (
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              )}

              {/* Media Badge Top Left */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className={cn(
                    'px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1 shadow-md backdrop-blur-md',
                    isVideo
                      ? 'bg-amber-500 text-white'
                      : 'bg-brand-deep/90 text-white'
                  )}
                >
                  {isVideo ? (
                    <>
                      <Video className="w-3 h-3 mr-1" />
                      <span>Video</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3 h-3 mr-1" />
                      <span>Photo</span>
                    </>
                  )}
                </span>
              </div>

              {/* Center Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isVideo ? (
                  <div className="w-14 h-14 rounded-full bg-brand-deep/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-brand-fresh transition-all border-2 border-white/40">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/30">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Bottom Gradient Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                <h3 className="text-sm font-bold font-heading line-clamp-1">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-brand-deep text-white font-bold text-base shadow-button hover:bg-brand-dark transition-all duration-200 group active:scale-95"
          >
            <span>Load More Media ({filteredItems.length - visibleCount} remaining)</span>
            <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Lightbox Modal for Photos */}
      <GalleryLightbox
        items={photoItems}
        currentIndex={photoIndex}
        onClose={() => setPhotoIndex(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Video Modal Player */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
