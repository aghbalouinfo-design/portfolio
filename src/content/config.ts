// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// 1. Vos Séquences (Plans de cours, Section 4)
const sequencesCollection = defineCollection({
  type: 'content', // Fichiers Markdown
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    // Liens vers vos "artefacts"
    lien_cours: z.string().optional(), // PDF du cours
    lien_evaluation: z.string().optional(), // PDF de l'évaluation
  }),
});

// 2. Vos Outils TICE (Vos Projets, Section 5)
const outilsTiceCollection = defineCollection({
  type: 'content', // Fichiers Markdown
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    lien_demo: z.string().url().optional(), // Lien vers l'outil
    lien_code: z.string().url().optional(), // Lien GitHub
  }),
});

// 3. Votre Impact (Travaux d'élèves, Section 6)
const impactCollection = defineCollection({
  type: 'data', 
  
  // --- CORRECTION ICI ---
  // Dites à Zod que ce schéma est un TABLEAU (array) d'objets
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: z.string(), 
    })
  ),
  // --- FIN DE LA CORRECTION ---
});

// Export de toutes les collections
export const collections = {
  'sequences': sequencesCollection,
  'outils-tice': outilsTiceCollection,
  'impact': impactCollection,
};