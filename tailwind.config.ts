import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#310a0c',
        canvas: '#faf7f0',
        accent: {
          DEFAULT: '#7a1115',
          dark: '#5e0c10',
          light: '#dcb054',
        },
        ink: '#1f0506',
        muted: '#6f5a52',
        line: '#eadfc7',
        gold: {
          DEFAULT: '#a3790f',
          bright: '#c9971c',
          soft: '#dcb054',
        },
      },
      borderColor: {
        DEFAULT: '#eadfc7',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,5,6,0.04), 0 10px 30px -20px rgba(31,5,6,0.18)',
        lift: '0 1px 2px rgba(31,5,6,0.04), 0 24px 48px -24px rgba(122,17,21,0.28)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
