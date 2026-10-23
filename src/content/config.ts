import { defineCollection, z } from "astro:content";

// Mirrors docs/Handoff/Templates/templates for case studies/TEMPLATE-blog-post-AECO-optimized.md
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Automation Architech"),
    category: z.enum([
      "Process Automation",
      "AI Decision Support",
      "Data Integration",
      "Industry Insights"
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    slug: z.string().optional(), // Astro generates slug from filename
    relatedPosts: z.array(z.string()).default([]), // Array of blog slugs
    relatedCaseStudies: z.array(z.string()).default([]), // Array of case study slugs
    hero: z.string().optional(),
    draft: z.boolean().default(false),
    comments: z.boolean().default(true)
  })
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.array(z.string()), // Array to support multiple industries
    industryIcon: z.string(),
    solutionType: z.string().optional(), // Optional - not all cases have it yet
    solutionIcon: z.string().optional(),
    metric: z.string(),
    metricLabel: z.string(),
    timeline: z.string(),
    slug: z.string().optional(), // Astro generates slug from filename
    order: z.number(), // For default sorting
    featured: z.boolean(),
    summary: z.string(),
    relatedCases: z.array(z.string()), // Array of slugs
  }),
});

export const collections = {
  blog,
  'case-studies': caseStudies
};
