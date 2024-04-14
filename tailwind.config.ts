import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.astro'],
  theme: {
    fontFamily: {
      sans: ['"Work Sans Variable"', 'sans-serif'],
      title: ['"Bricolage Grotesque Variable"', 'sans-serif'],
    },
  },
} satisfies Config;
