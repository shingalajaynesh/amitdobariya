import React from 'react';
import { Metadata } from 'next';
import SectionHeading from '@/components/common/SectionHeading';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import VideoShowcase from '@/components/home/VideoShowcase';
import BookingCTA from '@/components/home/BookingCTA';

export const metadata: Metadata = {
  title: 'Gallery & Videos | Amit Dobariya',
  description:
    'Browse photos and video showreel of Amit Dobariya speaking live at 250+ school seminars, hosting corporate events, and leading transformational sessions in Surat, Gujarat.',
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-16 md:pt-36">
      
      {/* Photo Gallery Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Moments That Create"
          highlightText="Impact"
          subtitle="Explore stage keynotes, youth seminars, event anchoring moments, and large audience connections across Gujarat."
        />

        <GalleryGrid />
      </section>

      {/* Video Showreel Section */}
      <section className="py-12">
        <VideoShowcase />
      </section>

      <BookingCTA />
    </div>
  );
}
