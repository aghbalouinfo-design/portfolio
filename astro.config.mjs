// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],

  // 1. Votre nom de domaine racine
  site: 'https://cs-lycee.com', 

  // 2. Le nom de votre dépôt (le sous-dossier)
  base: '/portfolio',
});