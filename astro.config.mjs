// @ts-check

import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    open: true,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind()],
});
