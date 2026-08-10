export interface Program {
  id: string;
  title: string;
  category: 'speaking' | 'anchoring' | 'coaching' | 'vastro';
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  outcomes: string[];
  iconName: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'speaking' | 'anchoring' | 'students' | 'events' | 'programs';
  imageUrl: string;
  caption: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'speaking' | 'anchoring' | 'students' | 'transformation';
  thumbnailUrl: string;
  videoUrl?: string; // YouTube or direct video file URL
  duration: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: string;
}

export const SITE_CONFIG = {
  name: 'Amit Dobariya',
  title: 'Amit Dobariya | Motivational Speaker, Event Anchor & Spiritual Coach in Surat',
  description:
    'Official website of Amit Dobariya — Motivational Speaker, Professional Anchor & Event Host, Transformational Speaker, and Founder of VASTRO in Surat, Gujarat. Enquire for school seminars, corporate events, and coaching.',
  keywords: [
    'Amit Dobariya',
    'Amit Dobariya motivational speaker',
    'Amit Dobariya Surat',
    'motivational speaker Surat',
    'best motivational speaker Surat',
    'motivational speaker Gujarat',
    'Gujarati motivational speaker',
    'motivational speaker for schools',
    'school motivational speaker Surat',
    'college motivational speaker Gujarat',
    'motivational speaker for students',
    'professional anchor Surat',
    'event anchor Surat',
    'anchor in Gujarat',
    'event host Surat',
    'corporate anchor Gujarat',
    'transformational speaker Surat',
    'spiritual coach Surat',
    'public speaker Surat',
    'student motivation speaker Gujarat',
    'VASTRO Surat',
  ],
  url: 'https://amitdobariya.com',
  ogImage: '/images/og-image.jpg',
  contact: {
    name: 'Amit Dobariya',
    phone: '+91 81550 25217',
    phoneClean: '+918155025217',
    phoneLink: 'tel:+918155025217',
    whatsapp: '+91 81550 25217',
    whatsappClean: '918155025217',
    whatsappDefaultMsg: 'Hello Amit Sir, I would like to enquire about booking you for an event.',
    get whatsappLink() {
      return `https://wa.me/${this.whatsappClean}?text=${encodeURIComponent(this.whatsappDefaultMsg)}`;
    },
    email: 'adobariya989@gmail.com',
    emailLink: 'mailto:adobariya989@gmail.com',
    location: 'Surat, Gujarat, India',
    gujaratiTagline: 'વિચાર બદલાય, તો જીવન બદલાય.',
  },
  stats: [
    { value: 250, suffix: '+', label: 'Schools Reached', description: 'Empowering students across Gujarat' },
    { value: 500, suffix: '+', label: 'Motivational Programs', description: 'High-impact seminars & keynotes' },
    { value: 100, suffix: '+', label: 'Counselling Engagements', description: 'Personal & family transformations' },
    { value: 1, suffix: ' Mission', label: 'Unlock Human Potential', description: 'Connecting science & spirituality' },
  ],
  bio: {
    short:
      'Amit Dobariya is a Motivational Speaker, Professional Anchor, Transformational Speaker, and Spiritual Coach based in Surat, Gujarat. He is the founder of VASTRO, bringing together science and spirituality.',
    full:
      'Amit Dobariya holds a background in Chemical Engineering from Gujarat Technological University (GTU). Guided by a profound passion for uplifting minds, he transitioned into motivational speaking, event anchoring, and transformational coaching. Having addressed over 250 school seminars and conducted 500+ motivational programs across Gujarat, Amit combines rational critical thinking with deep spiritual self-awareness to inspire confidence, fear management, and life clarity.',
    engineeringBackground: 'Chemical Engineering Graduate from Gujarat Technological University (GTU)',
    vastroPlatform: 'Founder of VASTRO — Connecting Science & Spirituality (Meditation, Tarot, Numerology, Hypnosis)',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Motivational Speaker', href: '/motivational-speaker' },
  { label: 'Anchor / Host', href: '/anchor' },
  { label: 'Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SPEAKING_TOPICS = [
  {
    id: 'student-motivation',
    title: 'Student Motivation & Academic Excellence',
    desc: 'Building focus, exam confidence, career direction, and overcoming academic anxiety.',
    target: 'Schools, Colleges, Educational Institutes',
    icon: 'GraduationCap',
  },
  {
    id: 'fear-confidence',
    title: 'Fear Management & Confidence Mastery',
    desc: 'Transforming self-doubt, stage fear, and hesitation into decisive inner strength and public speaking confidence.',
    target: 'Youth, Students, Young Professionals',
    icon: 'ShieldCheck',
  },
  {
    id: 'goal-mindset',
    title: 'Goal Setting & High-Performance Mindset',
    desc: 'Actionable goal mapping, discipline blueprints, and habits of top achievers.',
    target: 'Corporate Teams, College Students, Entrepreneurs',
    icon: 'Target',
  },
  {
    id: 'communication-leadership',
    title: 'Effective Communication & Leadership',
    desc: 'Connecting with empathy, dynamic public speaking, and leading with purpose and emotional intelligence.',
    target: 'Leaders, Educators, Professionals',
    icon: 'MessageSquare',
  },
  {
    id: 'family-transformation',
    title: 'Family & Parent-Child Transformation',
    desc: 'Bridging generational gaps, fostering emotional understanding, and creating harmonious family environments.',
    target: 'Parents, Families, Community Gatherings',
    icon: 'HeartHandshake',
  },
  {
    id: 'spiritual-clarity',
    title: 'Self Awareness & Inner Mind Clarity',
    desc: 'Unlocking mental peace, meditation practice, critical problem-solving, and spiritual grounding.',
    target: 'Individuals, Life Seekers, Workshops',
    icon: 'Compass',
  },
];

export const ANCHOR_FORMATS = [
  {
    title: 'Corporate Events & Keynote Summits',
    desc: 'Maintaining high executive standards, flawless agenda transitions, and articulate crowd engagement.',
    icon: 'Building2',
  },
  {
    title: 'Educational & School Annual Functions',
    desc: 'High energy, youthful resonance, inspiring announcements, and vibrant student-parent connection.',
    icon: 'School',
  },
  {
    title: 'College Youth Festivals & Seminars',
    desc: 'Unmatched stage energy, interactive games, motivational momentum, and vibrant crowd management.',
    icon: 'Sparkles',
  },
  {
    title: 'Conferences & Award Ceremonies',
    desc: 'Polished protocol hosting, dignified VIP introductions, dynamic timing, and memorable stage authority.',
    icon: 'Trophy',
  },
  {
    title: 'Public Gatherings & Cultural Festivals',
    desc: 'Mass audience engagement in Gujarati and Hindi/English with charismatic presence and natural warmth.',
    icon: 'Users',
  },
  {
    title: 'Professional Seminars & Workshops',
    desc: 'Structured moderation, crisp panel facilitation, and continuous interactive crowd rapport.',
    icon: 'Mic',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'school-seminars',
    title: 'School Motivational & Career Seminars',
    category: 'speaking',
    shortDesc: 'Inspiring students across 250+ schools with actionable motivation, focus strategies, and exam clarity.',
    fullDesc:
      'Designed specifically for school students from 8th to 12th standards. Addresses pressure, goal clarity, digital distraction, and self-belief using real-life examples and energetic stage interaction.',
    targetAudience: 'School Students, Teachers & School Management',
    outcomes: ['Overcoming exam stress', 'Higher concentration & study discipline', 'Clear goal setting', 'Enhanced self-confidence'],
    iconName: 'School',
    featured: true,
  },
  {
    id: 'college-youth-programs',
    title: 'College Youth Leadership & Mindset Workshops',
    category: 'speaking',
    shortDesc: 'Dynamic sessions empowering college youth with communication, confidence, and career resilience.',
    fullDesc:
      'Focuses on undergraduate and postgraduate students preparing for career steps, interview confidence, emotional balance, and effective leadership skills.',
    targetAudience: 'College Students, Youth Clubs & Universities',
    outcomes: ['Public speaking confidence', 'Fear & anxiety management', 'Career vision mapping', 'Positive peer mindset'],
    iconName: 'GraduationCap',
    featured: true,
  },
  {
    id: 'corporate-training',
    title: 'Corporate Motivational Sessions & Team Alignment',
    category: 'speaking',
    shortDesc: 'Energizing corporate teams with positive communication, emotional strength, and shared vision.',
    fullDesc:
      'Tailored keynote and training sessions for businesses seeking to boost team morale, problem-solving skills, and empathetic communication among staff.',
    targetAudience: 'Corporate Teams, Managers, Sales Professionals',
    outcomes: ['Enhanced team synergy', 'Stress reduction & mental clarity', 'Proactive problem solving', 'Elevated communication'],
    iconName: 'Briefcase',
    featured: true,
  },
  {
    id: 'event-anchoring',
    title: 'Professional Event Anchoring & Stage Hosting',
    category: 'anchoring',
    shortDesc: 'Electrifying stage hosting that elevates corporate, educational, and public events into unforgettable experiences.',
    fullDesc:
      'Amit Dobariya brings charismatic vocal presence, impeccable timing, and warm audience interaction to host seminars, award shows, and summit stages.',
    targetAudience: 'Event Organizers, Corporations, Educational Trusts',
    outcomes: ['Flawless agenda flow', 'High audience energy', 'Professional stage decorum', 'Memorable event experience'],
    iconName: 'Mic',
    featured: true,
  },
  {
    id: 'vastro-coaching',
    title: 'VASTRO Spiritual Coaching & Self-Awareness',
    category: 'vastro',
    shortDesc: 'Integrating practical science with spiritual guidance: Meditation, Tarot, Numerology & Hypnosis.',
    fullDesc:
      'Founded by Amit Dobariya, VASTRO is a platform bridging scientific critical thinking with spiritual wisdom to help individuals discover deep personal clarity.',
    targetAudience: 'Individuals, Professionals & Seekers',
    outcomes: ['Mental balance & inner peace', 'Self-awareness & clarity', 'Stress healing techniques', 'Personal life guidance'],
    iconName: 'Compass',
    featured: true,
  },
  {
    id: 'family-transformation-program',
    title: 'Family & Parent Counselling Engagements',
    category: 'coaching',
    shortDesc: 'Transformational 1-on-1 and family sessions for emotional harmony and positive home environments.',
    fullDesc:
      'Over 100+ individual and family counselling engagements helping parents and children understand emotional needs, resolve conflicts, and communicate with empathy.',
    targetAudience: 'Parents, Couples & Families',
    outcomes: ['Better parent-child understanding', 'Conflict resolution', 'Empathy & mutual respect', 'Emotional peace'],
    iconName: 'HeartHandshake',
    featured: false,
  },
];

export const WHY_AMIT_PILLARS = [
  {
    title: 'Engineering Logic Meets Inspiration',
    desc: 'Combines GTU Chemical Engineering analytical thinking with powerful emotional resonance — no vague jargon.',
    icon: 'BrainCircuit',
  },
  {
    title: '250+ Schools & 500+ Programs Track Record',
    desc: 'Extensive on-stage experience connecting with diverse Gujarati and Indian audiences across age groups.',
    icon: 'Award',
  },
  {
    title: 'Dual Power: Speaker + Master Anchor',
    desc: 'Commands the microphone whether delivering high-octane motivational keynotes or orchestrating complex event flows.',
    icon: 'Sparkles',
  },
  {
    title: 'Bridging Science & Spirituality (VASTRO)',
    desc: 'Practical self-awareness techniques backed by meditation, mindfulness, and constructive problem solving.',
    icon: 'Compass',
  },
  {
    title: 'High Audience Energy & Interactive Connection',
    desc: 'Every session engages the audience directly through live questions, real-life stories, and unforgettable moments.',
    icon: 'Zap',
  },
  {
    title: 'Deep Roots in Gujarat & Surat',
    desc: 'Understands local cultural nuances while delivering world-class professional stage standards in Gujarati, Hindi & English.',
    icon: 'MapPin',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Amit Dobariya Keynote Address',
    category: 'speaking',
    imageUrl: '/images/amit-hero.webp',
    caption: 'Amit Dobariya inspiring thousands of students during a mega school seminar in Gujarat.',
  },
  {
    id: 'g2',
    title: 'Stage Energy & Anchoring',
    category: 'anchoring',
    imageUrl: '/images/amit-anchor-01.webp',
    caption: 'Amit holding the stage microphone during a premier corporate event ceremony.',
  },
  {
    id: 'g3',
    title: 'Interactive School Youth Seminar',
    category: 'students',
    imageUrl: '/images/amit-speaker-01.webp',
    caption: 'Engaging with young minds on fear management and goal setting in Surat.',
  },
  {
    id: 'g4',
    title: 'Large Audience Connection',
    category: 'events',
    imageUrl: '/images/audience-01.webp',
    caption: 'A packed auditorium connecting with Amit Dobariya during a transformational session.',
  },
  {
    id: 'g5',
    title: 'Professional Anchor Host',
    category: 'anchoring',
    imageUrl: '/images/amit-anchor-02.webp',
    caption: 'Master of ceremonies leading dynamic stage transitions and award presentations.',
  },
  {
    id: 'g6',
    title: 'Transformational Coaching & VASTRO',
    category: 'programs',
    imageUrl: '/images/amit-speaker-02.webp',
    caption: 'Amit sharing deep spiritual self-awareness and practical mindfulness insights.',
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Amit Dobariya Motivational Seminar Highlights',
    category: 'speaking',
    thumbnailUrl: '/images/amit-hero.webp',
    duration: '03:45',
    description: 'Watch Amit Dobariya energize over 1,500 students with practical life strategies and confidence building.',
  },
  {
    id: 'v2',
    title: 'Professional Stage Anchoring Showreel',
    category: 'anchoring',
    thumbnailUrl: '/images/amit-anchor-01.webp',
    duration: '02:30',
    description: 'Experience the electric stage presence and seamless crowd interaction delivered by Amit as an event host.',
  },
  {
    id: 'v3',
    title: 'School Seminar & Student Inspiration',
    category: 'students',
    thumbnailUrl: '/images/amit-speaker-01.webp',
    duration: '04:12',
    description: 'Highlights from 250+ school seminars empowering Gujarati youth to conquer fear and embrace success.',
  },
  {
    id: 'v4',
    title: 'VASTRO Science & Spirituality Transformation',
    category: 'transformation',
    thumbnailUrl: '/images/amit-speaker-02.webp',
    duration: '05:20',
    description: 'Understanding self-awareness, meditation, and logical spiritual growth with Amit Dobariya.',
  },
];

// Placeholder for real testimonials supplied by client in future
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Amit Sir’s session transformed the mindset of our 10th and 12th standard students. His practical advice on overcoming exam stress was truly remarkable.',
    author: 'School Principal & Educational Trustee',
    role: 'Managing Trustee',
    organization: 'Leading School Network in Surat',
    category: 'School Seminars',
  },
  {
    id: 't2',
    quote:
      'The energy Amit brought as our corporate event anchor was unmatched. He kept the audience engaged from start to finish with absolute professionalism.',
    author: 'Event Coordinator',
    role: 'Head of Operations',
    organization: 'Gujarat Corporate Summit',
    category: 'Event Anchoring',
  },
  {
    id: 't3',
    quote:
      'Amit Dobariya has a unique gift of combining engineering logic with spiritual calm. His VASTRO counselling brought immense peace to our family.',
    author: 'Counselling Client',
    role: 'Parent & Business Owner',
    organization: 'Surat',
    category: 'Personal Coaching',
  },
];
