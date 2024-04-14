import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.astro'],
  theme: {
    fontFamily: {
      title: ['"Bricolage Grotesque Variable"', 'sans-serif'],
    },
  },
} satisfies Config;
