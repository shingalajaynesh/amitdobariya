'use client';

import React, { useEffect, useState } from 'react';
import { X, Play, Volume2, AlertCircle, ExternalLink } from 'lucide-react';
import { VideoItem } from '@/data/siteData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [video]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [video, onClose]);

  if (!video) return null;

  const isYouTube = video.videoUrl && (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be'));
  
  // Format URL safely
  const formattedUrl = video.videoUrl
    ? encodeURI(decodeURIComponent(video.videoUrl))
    : '';

  const isMov = formattedUrl.toLowerCase().includes('.mov');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/90 text-white">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-full bg-brand-fresh text-white text-xs font-bold uppercase tracking-wider">
              {video.category}
            </span>
            <h3 id="video-modal-title" className="text-base font-bold truncate max-w-md">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Close Video Player"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {video.videoUrl ? (
            isYouTube ? (
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : hasError ? (
              <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 text-white max-w-md">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400">
                  <AlertCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1">
                    Direct Video Stream Notice
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isMov 
                      ? 'This video is stored in Apple QuickTime (.MOV) format which requires desktop playback.'
                      : 'This video stream format could not be played directly in this browser.'}
                  </p>
                </div>
                <a
                  href={formattedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-deep text-white font-bold text-xs hover:bg-brand-dark transition-all"
                >
                  <span>Open Video in New Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <video
                src={formattedUrl}
                controls
                autoPlay
                playsInline
                preload="auto"
                onError={(e) => {
                  if (e.currentTarget.error && e.currentTarget.error.code !== 0) {
                    setHasError(true);
                  }
                }}
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video playback.
              </video>
            )
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-fresh/20 border border-brand-fresh flex items-center justify-center text-brand-fresh">
                <Play className="w-8 h-8 fill-brand-fresh ml-1" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {video.title}
                </h4>
                <p className="text-sm text-slate-400 max-w-md">
                  {video.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Details */}
        <div className="p-5 bg-slate-900 text-slate-300 text-xs flex items-center justify-between border-t border-slate-800">
          <span>Duration: {video.duration}</span>
          <div className="flex items-center space-x-1 text-slate-400">
            <Volume2 className="w-4 h-4 text-brand-fresh" />
            <span>High Quality Audio & HD Presentation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
