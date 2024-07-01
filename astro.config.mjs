import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rename from 'astro-rename';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://atsys.co',
  output: 'static',
  integrations: [tailwind(), react(), sitemap(), rename()]
});