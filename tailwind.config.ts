import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#075E46',
          dark: '#033D30',
          fresh: '#10A77A',
          light: '#F1FAF6',
          text: '#14221E',
          muted: '#66746F',
          border: '#E1EFEA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(3, 61, 48, 0.05)',
        'card-hover': '0 20px 40px -10px rgba(7, 94, 70, 0.12)',
        'button': '0 4px 20px rgba(7, 94, 70, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
