import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rename from 'astro-rename';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://atsys.co',
  output: 'server',
  integrations: [tailwind(), react(), sitemap(), rename()],
  adapter: netlify()
});