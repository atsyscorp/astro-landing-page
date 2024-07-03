import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://atsys.co',
  output: 'static',
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        es: 'es'
      },
    },
  })],
  adapter: netlify()
});