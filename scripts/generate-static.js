#!/usr/bin/env node

import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = [
  '/',
  '/services/llm-applications',
  '/services/data-pipelines', 
  '/services/system-workflows',
  '/ai-consulting-firm',
  '/vibe-coder-rescue',
  '/concurrent-function-calling'
];

async function generateStatic() {
  // Create a vite server in middleware mode
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    root: path.resolve(__dirname, '../client')
  });

  const distPath = path.resolve(__dirname, '../dist/public');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  for (const route of routes) {
    try {
      console.log(`Generating ${route}...`);
      
      // For the root route, save as index.html
      const fileName = route === '/' ? 'index.html' : `${route}/index.html`;
      const filePath = path.join(distPath, fileName);
      
      // Create directory if needed
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Generate the HTML template for now
      const html = generateHTMLTemplate(route);
      fs.writeFileSync(filePath, html);
      
      console.log(`Generated ${filePath}`);
    } catch (error) {
      console.error(`Failed to generate ${route}:`, error);
    }
  }

  await vite.close();
  console.log('Static generation complete!');
}

function generateHTMLTemplate(route) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Automation Architect${route !== '/' ? ` - ${route}` : ''}</title>
    <meta name="description" content="Automation Architect specializes in LLM applications, data pipelines, and system workflows." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

generateStatic().catch(console.error);