// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],

  // 1. Mettez ici votre NOUVEAU sous-domaine
  site: 'https://portfolio.cs-lycee.com', 

  // 2. Supprimez la ligne 'base' (il n'y en a plus)
});