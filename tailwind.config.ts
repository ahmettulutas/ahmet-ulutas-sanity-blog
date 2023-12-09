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
        overlaydark: '#1b1b1b',
        brandDark: '#ffdb4d',
        brand: '#7B00D3',
        dark: {
          bg: '#1f2937',
          text: '#FFFFFF',
          primary: '#27B5E2',
          secondary: '#1A97BF',
        },
        light: {
          bg: '#E6E6E6',
          text: '#000000',
          primary: '#D56C6C',
          secondary: '#EE1B1B',
        },
      },
      gridTemplateColumns: {
        twoIcons: 'auto 1fr auto',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
