'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/siteData';

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on Desktop */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Amit Sir
      </span>

      {/* Floating Button */}
      <a
        href={SITE_CONFIG.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Amit Dobariya on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000 -z-10" />
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
