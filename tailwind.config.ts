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
    },
  },
  plugins: [],
};

export default config;
