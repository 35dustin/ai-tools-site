import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updateDate: z.string().optional(),
    author: z.string().default('AI Tools Review Team'),
    category: z.enum(['chatbots', 'image-gen', 'code-assistants', 'writing', 'automation']),
    rating: z.number().min(1).max(5).optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = { reviews };
