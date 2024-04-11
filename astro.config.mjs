// @ts-check

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joao.town/',
  server: { open: true },
  devToolbar: {
    enabled: false,
  },
});
