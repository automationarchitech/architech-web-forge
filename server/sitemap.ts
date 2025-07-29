
export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(baseUrl: string, entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

export function getSitemapEntries(): SitemapEntry[] {
  const now = new Date().toISOString().split('T')[0];
  
  return [
    {
      url: '/',
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: '/services/llm-applications',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/services/data-pipelines',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/services/system-workflows',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/ai-consulting-firm',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/vibe-coder-rescue',
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    }
  ];
}
