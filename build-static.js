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

// Step 2: Generate static files for each route
console.log('📝 Creating individual HTML files for each route...');

const distPath = './dist/public';
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found in build output');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

// Routes that should have their own directories and HTML files
const routes = [
  { 
    path: '/services/llm-applications', 
    title: 'LLM Applications - Automation Architect',
    description: 'Transform your business with cutting-edge Large Language Model applications. Custom AI solutions for automation and intelligent workflows.'
  },
  { 
    path: '/services/data-pipelines', 
    title: 'Data Pipelines - Automation Architect',
    description: 'Streamline your data flow with robust, scalable data pipeline solutions. ETL processes and real-time data processing.'
  },
  { 
    path: '/services/system-workflows', 
    title: 'System Workflows - Automation Architect',
    description: 'Optimize your business processes with intelligent system workflow automation. Reduce manual work and increase efficiency.'
  },
  { 
    path: '/ai-consulting-firm', 
    title: 'AI Consulting Services - Automation Architect',
    description: 'Expert AI consulting services to help your business leverage artificial intelligence. Strategic planning and implementation guidance.'
  },
  { 
    path: '/vibe-coder-rescue', 
    title: 'Vibe Coder Rescue - Automation Architect',
    description: 'Professional code rescue and optimization services. Modernize legacy systems and improve code quality.'
  },
  { 
    path: '/concurrent-function-calling', 
    title: 'Concurrent Function Calling - Automation Architect',
    description: 'Advanced concurrent function calling demonstrations and implementations. Parallel processing solutions.'
  }
];

// Create HTML files for each route with proper directory structure
routes.forEach(route => {
  // Create the directory structure
  const routeDir = path.join(distPath, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Customize the HTML content for each route with proper SEO
  const customizedContent = indexContent
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description".*?>/, `<meta name="description" content="${route.description}">`)
    .replace(/<meta property="og:title".*?>/, `<meta property="og:title" content="${route.title}">`)
    .replace(/<meta property="og:description".*?>/, `<meta property="og:description" content="${route.description}">`)
    .replace(/<meta property="og:url".*?>/, `<meta property="og:url" content="https://automationarchitech.com${route.path}">`)
    .replace(/<meta name="twitter:title".*?>/, `<meta name="twitter:title" content="${route.title}">`)
    .replace(/<meta name="twitter:description".*?>/, `<meta name="twitter:description" content="${route.description}">`);
  
  const indexFilePath = path.join(routeDir, 'index.html');
  fs.writeFileSync(indexFilePath, customizedContent);
  console.log(`✅ Created ${route.path}/index.html`);
});

// Step 3: Create enhanced _redirects file for Netlify with SPA routing
const redirectsContent = `# Static route files (these exist as real directories)
/services/llm-applications/index.html   /services/llm-applications/   200
/services/data-pipelines/index.html     /services/data-pipelines/     200
/services/system-workflows/index.html   /services/system-workflows/   200
/ai-consulting-firm/index.html          /ai-consulting-firm/          200
/vibe-coder-rescue/index.html           /vibe-coder-rescue/           200
/concurrent-function-calling/index.html /concurrent-function-calling/ 200

# SPA fallback - redirect all other routes to index.html for React Router
/*    /index.html   200
`;

fs.writeFileSync(path.join(distPath, '_redirects'), redirectsContent);
console.log('✅ Created _redirects file for Netlify SPA routing');

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
console.log('• Main index.html with enhanced SEO meta tags');
console.log('• Individual HTML files for each route (in their own directories)');
console.log('• sitemap.xml with clean URLs (no hash routing)');
console.log('• robots.txt for web crawlers');
console.log('• _redirects for Netlify SPA routing');
console.log('• Optimized CSS and JavaScript bundles');
console.log('');
console.log('🔍 SEO Benefits:');
console.log('• Clean URLs without hash routing');
console.log('• Individual HTML files for better indexing');
console.log('• Proper Open Graph and Twitter Card meta tags');
console.log('• XML sitemap for search engines');
console.log('• Robots.txt for crawler optimization');
console.log('');
console.log('🚀 Deploy options:');
console.log('• Netlify: Drag and drop the dist/public folder');
console.log('• Vercel: Deploy dist/public directory'); 
console.log('• GitHub Pages: Push contents to gh-pages branch');
console.log('• Any CDN or static hosting service');
console.log('');
console.log('📝 Post-deployment:');
console.log('• Submit sitemap to Google Search Console');
console.log('• Test all routes work correctly');
console.log('• Verify clean URLs load properly');