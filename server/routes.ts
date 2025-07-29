import type { Express } from "express";
import { createServer, type Server } from "http";
import { generateSitemap, getSitemapEntries } from "./sitemap";

export function registerRoutes(app: Express): Server {
  // Sitemap route - must come before static middleware
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const entries = getSitemapEntries();
    const sitemap = generateSitemap(baseUrl, entries);

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // API routes
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the API!" });
  });

  const httpServer = createServer(app);
  return httpServer;
}