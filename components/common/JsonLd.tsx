import React from 'react';
import { SITE_CONFIG } from '@/data/siteData';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    jobTitle: 'Motivational Speaker, Professional Anchor & Transformational Coach',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Gujarat Technological University (GTU)',
    },
    knowsAbout: [
      'Motivational Speaking',
      'Public Speaking',
      'Event Anchoring & Stage Hosting',
      'Student Motivation & Career Guidance',
      'Self Awareness & Mindfulness',
      'Spiritual Coaching',
    ],
  };

  const vastroSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VASTRO',
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
    },
    description: 'A platform bridging practical science and spirituality for human transformation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vastroSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
