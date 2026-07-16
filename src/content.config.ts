import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',  // ✅ 使用 type 而不是 loader
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    coverImage: z.any().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };