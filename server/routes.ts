import type { Express } from "express";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import type { InsertUser, SelectUser } from "@shared/schema";
import { storageService } from "./storage";
import { generateSitemap, getSitemapEntries } from "./sitemap";

export function registerRoutes(app: Express) {
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
}