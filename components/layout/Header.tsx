'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Mic } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/data/siteData';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'glass-header shadow-md py-3 border-b border-emerald-900/5'
          : 'bg-white/90 backdrop-blur-sm py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-deep flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              AD
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-text tracking-tight group-hover:text-brand-deep transition-colors">
                AMIT DOBARIYA<span className="text-brand-fresh">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-brand-muted tracking-widest hidden sm:block">
                Speaker • Host • Coach
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-brand-deep bg-brand-light font-semibold'
                      : 'text-brand-text/80 hover:text-brand-deep hover:bg-emerald-50/50'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-deep text-white font-semibold text-sm shadow-button hover:bg-brand-dark transition-all duration-200 group active:scale-95"
            >
              <span>Book Amit</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/contact"
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-deep text-white text-xs font-semibold shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-text hover:text-brand-deep hover:bg-brand-light focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-40 transition-opacity">
          <div className="bg-white border-b border-brand-border px-6 py-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-slate-100">
              <Mic className="w-5 h-5 text-brand-fresh" />
              <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                Navigation
              </span>
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-brand-light text-brand-deep font-bold border-l-4 border-brand-deep'
                      : 'text-brand-text hover:bg-emerald-50/60'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-deep text-white font-semibold text-base shadow-button hover:bg-brand-dark transition-all"
              >
                <span>Book Amit Dobariya</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
