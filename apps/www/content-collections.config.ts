import { defineCollection, defineConfig } from "@content-collections/core";

const docs = defineCollection({
  name: "docs",
  directory: "./content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    author: z.string().optional(),
    published: z.boolean().optional(),
    toc: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  name: "blog",
  directory: "./content/blog",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    author: z.string().optional(),
    published: z.boolean().optional(),
  }),
});

const showcase = defineCollection({
  name: "showcase",
  directory: "./content/showcase",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

export default defineConfig({
  collections: [docs, blog, showcase],
});
