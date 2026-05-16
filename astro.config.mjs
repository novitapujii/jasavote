// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasavote.my.id', // <-- WAJIB TAMBAHKAN BARIS INI
  integrations: [sitemap()]
});
