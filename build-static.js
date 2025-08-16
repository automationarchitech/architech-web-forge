#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting static site generation...');

// Step 1: Build the React app
console.log('📦 Building React application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ React app built successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Copy index.html to create individual route files for better SEO
console.log('📝 Creating static route files...');

const distPath = './dist/public';
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found in build output');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

// Routes that should have their own HTML files
const routes = [
  { path: 'services', file: 'services.html' },
  { path: 'services/llm-applications', file: 'llm-applications.html' },
  { path: 'services/data-pipelines', file: 'data-pipelines.html' },
  { path: 'services/system-workflows', file: 'system-workflows.html' },
  { path: 'ai-consulting-firm', file: 'ai-consulting-firm.html' },
  { path: 'vibe-coder-rescue', file: 'vibe-coder-rescue.html' },
  { path: 'concurrent-function-calling', file: 'concurrent-function-calling.html' }
];

// Create HTML files for each route
routes.forEach(route => {
  // Customize the HTML content for each route
  const customizedContent = indexContent
    .replace(/<title>.*?<\/title>/, `<title>Automation Architect - ${route.path.replace('/', ' - ')}</title>`)
    .replace(/<meta name="description".*?>/, `<meta name="description" content="Automation Architect - ${route.path.replace('/', ' - ')} page">`);
  
  const filePath = path.join(distPath, route.file);
  fs.writeFileSync(filePath, customizedContent);
  console.log(`✅ Created ${route.file}`);
});

// Step 3: Create a simple _redirects file for Netlify
const redirectsContent = `
# Redirect all routes to index.html for SPA routing
/services/llm-applications /llm-applications.html 200
/services/data-pipelines /data-pipelines.html 200
/services/system-workflows /system-workflows.html 200
/ai-consulting-firm /ai-consulting-firm.html 200
/vibe-coder-rescue /vibe-coder-rescue.html 200
/concurrent-function-calling /concurrent-function-calling.html 200
/* /index.html 200
`;

fs.writeFileSync(path.join(distPath, '_redirects'), redirectsContent);
console.log('✅ Created _redirects file for Netlify');

// Step 4: Generate sitemap and SEO files
console.log('🗺️  Generating sitemap and SEO files...');
try {
  const { generateSitemap, generateRobotsTxt } = await import('./generate-sitemap.js');
  generateSitemap();
  generateRobotsTxt();
} catch (error) {
  console.warn('⚠️  Could not generate sitemap:', error.message);
}

console.log('🎉 Static site generation complete!');
console.log(`📁 Files generated in: ${distPath}`);
console.log('');
console.log('📋 Generated files include:');
console.log('• HTML files for each route');
console.log('• Optimized CSS and JavaScript bundles');
console.log('• sitemap.xml for search engines');
console.log('• robots.txt for web crawlers');
console.log('• _redirects for Netlify routing');
console.log('');
console.log('🚀 Deploy options:');
console.log('• Netlify: Drag and drop the dist/public folder');
console.log('• Vercel: Run "vercel --prod" in the dist/public directory'); 
console.log('• GitHub Pages: Push the contents to a gh-pages branch');
console.log('• Any CDN or static hosting service');