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
        dark: {
          bg: '#000000',
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
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
