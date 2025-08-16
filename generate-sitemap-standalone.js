#!/usr/bin/env node

// Standalone sitemap generator that can be run anytime
// Usage: node generate-sitemap-standalone.js

import { generateSitemap, generateRobotsTxt, staticPages } from './generate-sitemap.js';

console.log('🗺️  Generating standalone sitemap...');
console.log('');

try {
  const pageCount = generateSitemap();
  generateRobotsTxt();
  
  console.log('');
  console.log('🎉 Standalone sitemap generation complete!');
  console.log('');
  console.log(`📊 Statistics:`);
  console.log(`• ${pageCount} pages included`);
  console.log(`• XML sitemap: dist/public/sitemap.xml`);
  console.log(`• Robots file: dist/public/robots.txt`);
  console.log('');
  console.log('🔍 SEO Benefits:');
  console.log('• Search engines can discover all your pages');
  console.log('• Faster indexing of new content');
  console.log('• Better crawl efficiency');
  console.log('• Improved search visibility');
  
} catch (error) {
  console.error('❌ Error generating standalone sitemap:', error.message);
  process.exit(1);
}