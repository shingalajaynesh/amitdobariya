import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16', alignmentClass, className)}>
      {eyebrow && (
        <span
          className={cn(
            'inline-block px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase mb-4',
            dark
              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50'
              : 'bg-brand-light text-brand-deep border border-brand-border'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight',
          dark ? 'text-white' : 'text-brand-text'
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-emerald-400' : 'text-gradient'}>
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            dark ? 'text-emerald-100/80' : 'text-brand-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
