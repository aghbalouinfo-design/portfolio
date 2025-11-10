// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],

  // Votre nom de domaine racine
  site: 'https://cs-lycee.com', 

  // Le nom de votre nouveau dépôt
  base: '/portfolio',
});