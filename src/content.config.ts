import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: /* ... */
});
const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: /* ... */
});

const probes = defineCollection({
  // `loader` can accept an array of multiple patterns as well as string patterns
  // Load all markdown files in the space-probes directory, except for those that start with "voyager-"
  loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
    launch_date: z.date(),
    status: z.enum(['Active', 'Inactive', 'Decommissioned']),
    destination: z.string(),
    operator: z.string(),
    notable_discoveries: z.array(z.string()),
  }),
});

export const collections = { blog, dogs, probes };