import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Heart } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS, PROGRAMS } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/40">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-fresh flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                AD
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                AMIT DOBARIYA<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Motivational Speaker • Anchor • Transformational Coach
            </p>
            <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm">
              Empowering students, professionals, and families across Gujarat with actionable motivation, stage presence, and spiritual self-awareness.
            </p>

            {/* Tasteful Gujarati Tagline */}
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 text-xs font-medium italic">
                &ldquo;{SITE_CONFIG.contact.gujaratiTagline}&rdquo;
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/70 hover:text-emerald-400 transition-colors inline-flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Programs */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs font-heading">
              Programs & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PROGRAMS.slice(0, 5).map((program) => (
                <li key={program.id}>
                  <Link
                    href="/programs"
                    className="text-emerald-100/70 hover:text-emerald-400 transition-colors block text-xs md:text-sm"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-xs font-heading">
              Direct Booking Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.contact.phoneLink}
                  className="flex items-center text-emerald-100/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2.5 text-emerald-400 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-100/80 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2.5 text-[#25D366] flex-shrink-0" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.emailLink}
                  className="flex items-center text-emerald-100/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center text-emerald-100/80">
                  <MapPin className="w-4 h-4 mr-2.5 text-emerald-400 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-100/60 space-y-4 md:space-y-0">
          <p>© {currentYear} {SITE_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Surat, Gujarat, India</span>
            <span>•</span>
            <span className="flex items-center">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 mx-1 fill-rose-500" /> for Maximum Impact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
