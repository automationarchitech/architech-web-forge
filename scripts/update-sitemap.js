#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the App.tsx file
const appTsxPath = path.join(__dirname, '..', 'client', 'src', 'App.tsx');
const netlifyTomlPath = path.join(__dirname, '..', 'netlify.toml');

function extractRoutesFromAppTsx() {
  try {
    const appContent = fs.readFileSync(appTsxPath, 'utf-8');
    
    // Regular expression to match Route components with path prop
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    const routes = [];
    let match;
    
    while ((match = routeRegex.exec(appContent)) !== null) {
      const route = match[1];
      // Skip catch-all routes and dynamic routes
      if (route !== '*' && !route.includes(':')) {
        routes.push(route);
      }
    }
    
    return routes;
  } catch (error) {
    console.error('Error reading App.tsx:', error);
    return [];
  }
}

function updateNetlifyToml(routes) {
  try {
    let netlifyContent = fs.readFileSync(netlifyTomlPath, 'utf-8');
    
    // Create the includes array string
    const includesArray = routes.map(route => `      "${route}"`).join(',\n');
    const includesSection = `    includes = [\n${includesArray}\n    ]`;
    
    // Replace the existing includes section or add it if it doesn't exist
    const includesRegex = /includes\s*=\s*\[[^\]]*\]/s;
    
    if (includesRegex.test(netlifyContent)) {
      // Replace existing includes
      netlifyContent = netlifyContent.replace(includesRegex, includesSection.trim());
    } else {
      // Add includes after baseUrl
      const baseUrlRegex = /(baseUrl\s*=\s*"[^"]*")/;
      if (baseUrlRegex.test(netlifyContent)) {
        netlifyContent = netlifyContent.replace(
          baseUrlRegex,
          `$1\n    # Dynamically generated routes\n    ${includesSection.trim()}`
        );
      }
    }
    
    fs.writeFileSync(netlifyTomlPath, netlifyContent);
    console.log('✅ Updated netlify.toml with routes:', routes);
  } catch (error) {
    console.error('Error updating netlify.toml:', error);
  }
}

function main() {
  console.log('🔍 Extracting routes from App.tsx...');
  const routes = extractRoutesFromAppTsx();
  
  if (routes.length === 0) {
    console.warn('⚠️  No routes found in App.tsx');
    return;
  }
  
  console.log('📍 Found routes:', routes);
  updateNetlifyToml(routes);
}

main();