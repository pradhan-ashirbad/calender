import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#334155',
        canvas: '#FAFAF8',
        accent: {
          DEFAULT: '#0D9488',
          dark: '#0B7C72',
          light: '#2DD4BF',
        },
        ink: '#1E293B',
        muted: '#64748B',
        line: '#E2E8F0',
        gold: '#B45309',
      },
      borderColor: {
        DEFAULT: '#E2E8F0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
