import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCategorySchema, insertMenuItemSchema, insertFeaturedItemSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories endpoints
  app.get("/api/categories", async (_req: Request, res: Response) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:slug", async (req: Request, res: Response) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error fetching category:", error);
      res.status(500).json({ error: "Failed to fetch category" });
    }
  });

  app.post("/api/categories", async (req: Request, res: Response) => {
    try {
      const parseResult = insertCategorySchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid category data", details: parseResult.error });
      }
      
      const category = await storage.createCategory(parseResult.data);
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating category:", error);
      res.status(500).json({ error: "Failed to create category" });
    }
  });

  // Menu items endpoints
  app.get("/api/menu-items/category/:id", async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.id);
      if (isNaN(categoryId)) {
        return res.status(400).json({ error: "Invalid category ID" });
      }
      
      const items = await storage.getMenuItemsByCategory(categoryId);
      res.json(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  app.get("/api/menu-items/subcategory/:categoryId/:subcategory", async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      if (isNaN(categoryId)) {
        return res.status(400).json({ error: "Invalid category ID" });
      }
      
      const items = await storage.getMenuItemsBySubcategory(categoryId, req.params.subcategory);
      res.json(items);
    } catch (error) {
      console.error("Error fetching menu items by subcategory:", error);
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  app.get("/api/menu-items/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid menu item ID" });
      }
      
      const item = await storage.getMenuItemById(id);
      if (!item) {
        return res.status(404).json({ error: "Menu item not found" });
      }
      
      res.json(item);
    } catch (error) {
      console.error("Error fetching menu item:", error);
      res.status(500).json({ error: "Failed to fetch menu item" });
    }
  });

  app.post("/api/menu-items", async (req: Request, res: Response) => {
    try {
      const parseResult = insertMenuItemSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid menu item data", details: parseResult.error });
      }
      
      const menuItem = await storage.createMenuItem(parseResult.data);
      res.status(201).json(menuItem);
    } catch (error) {
      console.error("Error creating menu item:", error);
      res.status(500).json({ error: "Failed to create menu item" });
    }
  });

  // Featured items endpoints
  app.get("/api/featured-items", async (_req: Request, res: Response) => {
    try {
      const featuredItems = await storage.getFeaturedItems();
      res.json(featuredItems);
    } catch (error) {
      console.error("Error fetching featured items:", error);
      res.status(500).json({ error: "Failed to fetch featured items" });
    }
  });

  app.post("/api/featured-items", async (req: Request, res: Response) => {
    try {
      const parseResult = insertFeaturedItemSchema.safeParse(req.body);
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid featured item data", details: parseResult.error });
      }
      
      const featuredItem = await storage.createFeaturedItem(parseResult.data);
      res.status(201).json(featuredItem);
    } catch (error) {
      console.error("Error creating featured item:", error);
      res.status(500).json({ error: "Failed to create featured item" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
