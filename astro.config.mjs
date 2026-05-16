import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jasavote.my.id', // Domain asli JasaVote kamu
  integrations: [sitemap()],
});
