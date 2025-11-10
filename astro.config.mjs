// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // Remplissez ceci avant le déploiement final
  // ex: site: 'https://votre-domaine.com',
  // ex: base: '/mon-portfolio', 
});