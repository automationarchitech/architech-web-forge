import type { Express } from "express";
import { createServer, type Server } from "http";
import { generateSitemap, getSitemapEntries } from "./sitemap";

export function registerRoutes(app: Express): Server {
  // API routes will be added here
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the API!" });
  });

  // Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const entries = getSitemapEntries();
    const sitemap = generateSitemap(baseUrl, entries);

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  const httpServer = createServer(app);
  return httpServer;
}