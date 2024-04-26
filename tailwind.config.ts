import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.astro'],
  theme: {
    fontFamily: {
      sans: ['"Work Sans Variable"', 'sans-serif'],
      title: ['"Bricolage Grotesque Variable"', 'sans-serif'],
    },
    extend: {
      cursor: {
        'kenney-feedzai-pointer': 'url(hand_point-feedzai.svg), pointer',
        'kenney-github-pointer': 'url(hand_point-github.svg), pointer',
      },
    },
  },
} satisfies Config;
