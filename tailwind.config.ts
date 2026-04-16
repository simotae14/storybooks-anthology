import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4338ca', // Add your desired color value here
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
