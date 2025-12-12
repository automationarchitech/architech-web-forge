#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Configuration
const SITE_URL = 'https://automationarchitech.com';
const OUTPUT_PATH = './dist/public/sitemap.xml';

// Define your static pages with their priorities and change frequencies
const staticPages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    title: 'Home - Automation Architect'
  },
  {
    url: '/services/llm-applications',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'LLM Applications - Automation Architect'
  },
  {
    url: '/services/data-pipelines',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Data Pipelines - Automation Architect'
  },
  {
    url: '/services/system-workflows',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'System Workflows - Automation Architect'
  },
  {
    url: '/ai-consulting-firm',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'AI Consulting Firm - Automation Architect'
  },
  {
    url: '/vibe-coder-rescue',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Vibe Coder Rescue - Automation Architect'
  },
  {
    url: '/concurrent-function-calling',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Concurrent Function Calling - Automation Architect'
  }
];

function generateSitemap() {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  staticPages.forEach(page => {
    sitemapContent += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemapContent += `</urlset>`;

  // Ensure the output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the sitemap
  fs.writeFileSync(OUTPUT_PATH, sitemapContent);
  
  console.log(`✅ Sitemap generated with ${staticPages.length} pages`);
  console.log(`📁 Saved to: ${OUTPUT_PATH}`);
  
  return staticPages.length;
}

function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Block common bot paths (optional)
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
`;

  const robotsPath = './dist/public/robots.txt';
  fs.writeFileSync(robotsPath, robotsContent);
  console.log(`✅ robots.txt updated`);
  console.log(`📁 Saved to: ${robotsPath}`);
}

function generateSitemapIndex() {
  // For larger sites, you might want a sitemap index
  // This is optional for your current site size
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  const indexPath = './dist/public/sitemap-index.xml';
  fs.writeFileSync(indexPath, sitemapIndexContent);
  console.log(`✅ Sitemap index generated`);
  console.log(`📁 Saved to: ${indexPath}`);
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🗺️  Generating sitemap for static site...');
  console.log('');
  
  try {
    const pageCount = generateSitemap();
    generateRobotsTxt();
    generateSitemapIndex();
    
    console.log('');
    console.log('🎉 Sitemap generation complete!');
    console.log('');
    console.log('📋 What was created:');
    console.log('• sitemap.xml - Main sitemap for search engines');
    console.log('• robots.txt - Updated with sitemap location');
    console.log('• sitemap-index.xml - Sitemap index (for future scalability)');
    console.log('');
    console.log('🔗 URLs included in sitemap:');
    staticPages.forEach(page => {
      console.log(`• ${SITE_URL}${page.url}`);
    });
    console.log('');
    console.log('📝 Next steps:');
    console.log('1. Deploy your site to make the sitemap live');
    console.log('2. Submit your sitemap to Google Search Console');
    console.log('3. Submit to Bing Webmaster Tools');
    console.log(`4. Verify sitemap at: ${SITE_URL}/sitemap.xml`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

export { generateSitemap, generateRobotsTxt, staticPages };