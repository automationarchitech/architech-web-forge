#!/usr/bin/env node

import { createServer } from 'http';
import { createReadStream, existsSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_DIR = path.join(__dirname, 'dist', 'public');
const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function serveFile(res, filePath) {
  const mimeType = getMimeType(filePath);
  const stream = createReadStream(filePath);
  
  res.writeHead(200, {
    'Content-Type': mimeType,
    'Cache-Control': filePath.includes('/assets/') ? 'public, max-age=31536000' : 'no-cache'
  });
  
  stream.pipe(res);
  stream.on('error', () => {
    res.writeHead(404);
    res.end('File not found');
  });
}

const server = createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // Remove query parameters
  
  // Handle hash routing - all routes should serve index.html
  if (urlPath === '/' || urlPath.startsWith('/#/')) {
    urlPath = '/index.html';
  }
  
  // Remove leading slash and construct full path
  const filePath = path.join(STATIC_DIR, urlPath.slice(1));
  
  // Security check - ensure the file is within the static directory
  if (!filePath.startsWith(STATIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  
  // Check if file exists
  if (!existsSync(filePath)) {
    // For SPA routing, serve index.html for non-existent routes
    const indexPath = path.join(STATIC_DIR, 'index.html');
    if (existsSync(indexPath)) {
      serveFile(res, indexPath);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
    return;
  }
  
  // Check if it's a directory
  const stats = statSync(filePath);
  if (stats.isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (existsSync(indexPath)) {
      serveFile(res, indexPath);
    } else {
      res.writeHead(404);
      res.end('Directory listing not allowed');
    }
    return;
  }
  
  // Serve the file
  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`🌐 Static site preview server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${STATIC_DIR}`);
  console.log('');
  console.log('Available routes:');
  console.log('• http://localhost:3000/');
  console.log('• http://localhost:3000/#/services/llm-applications');
  console.log('• http://localhost:3000/#/services/data-pipelines');
  console.log('• http://localhost:3000/#/services/system-workflows');
  console.log('• http://localhost:3000/#/ai-consulting-firm');
  console.log('• http://localhost:3000/#/vibe-coder-rescue');
  console.log('• http://localhost:3000/#/concurrent-function-calling');
  console.log('');
  console.log('Press Ctrl+C to stop the server');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down static preview server...');
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});