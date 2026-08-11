import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ClientLogosTicker from '@/components/home/ClientLogosTicker';
import AboutPreview from '@/components/home/AboutPreview';
import SpeakerSection from '@/components/home/SpeakerSection';
import AnchorSection from '@/components/home/AnchorSection';
import ProgramsGrid from '@/components/home/ProgramsGrid';
import VideoShowcase from '@/components/home/VideoShowcase';
import WhyAmitSection from '@/components/home/WhyAmitSection';
import VastroSection from '@/components/home/VastroSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import BookingCTA from '@/components/home/BookingCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientLogosTicker />
      <AboutPreview />
      <SpeakerSection />
      <AnchorSection />
      <ProgramsGrid />
      <VideoShowcase />
      <WhyAmitSection />
      <VastroSection />
      <TestimonialSection />
      <BookingCTA />
    </>
  );
}
