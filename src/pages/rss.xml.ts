import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: `${siteConfig.title} Insights`,
    description: 'Automation Architech insights feed',
    site: context.site ?? new URL(siteConfig.url),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/insights/${post.slug}/`,
      pubDate: post.data.publishDate
    }))
  });
}
