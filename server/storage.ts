import { users, type User, type InsertUser, categories, menuItems, featuredItems, type Category, type MenuItem, type FeaturedItem, type InsertCategory, type InsertMenuItem, type InsertFeaturedItem } from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Menu operations
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]>;
  getMenuItemsBySubcategory(categoryId: number, subcategory: string): Promise<MenuItem[]>;
  getMenuItemById(id: number): Promise<MenuItem | undefined>;
  createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem>;
  
  getFeaturedItems(): Promise<(FeaturedItem & { menuItem: MenuItem })[]>;
  createFeaturedItem(featuredItem: InsertFeaturedItem): Promise<FeaturedItem>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Category operations
  async getAllCategories(): Promise<Category[]> {
    return db.select().from(categories);
  }
  
  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.slug, slug));
    return category || undefined;
  }
  
  async createCategory(category: InsertCategory): Promise<Category> {
    const [newCategory] = await db
      .insert(categories)
      .values(category)
      .returning();
    return newCategory;
  }
  
  // MenuItem operations
  async getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]> {
    return db.select().from(menuItems).where(eq(menuItems.categoryId, categoryId));
  }
  
  async getMenuItemsBySubcategory(categoryId: number, subcategory: string): Promise<MenuItem[]> {
    return db
      .select()
      .from(menuItems)
      .where(and(eq(menuItems.categoryId, categoryId), eq(menuItems.subcategory, subcategory)));
  }
  
  async getMenuItemById(id: number): Promise<MenuItem | undefined> {
    const [menuItem] = await db.select().from(menuItems).where(eq(menuItems.id, id));
    return menuItem || undefined;
  }
  
  async createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem> {
    const [newMenuItem] = await db
      .insert(menuItems)
      .values(menuItem)
      .returning();
    return newMenuItem;
  }
  
  // FeaturedItem operations
  async getFeaturedItems(): Promise<(FeaturedItem & { menuItem: MenuItem })[]> {
    const featured = await db.select().from(featuredItems);
    const result = [];
    
    for (const item of featured) {
      const menuItem = await this.getMenuItemById(item.menuItemId);
      if (menuItem) {
        result.push({
          ...item,
          menuItem
        });
      }
    }
    
    return result;
  }
  
  async createFeaturedItem(featuredItem: InsertFeaturedItem): Promise<FeaturedItem> {
    const [newFeaturedItem] = await db
      .insert(featuredItems)
      .values(featuredItem)
      .returning();
    return newFeaturedItem;
  }
}

export const storage = new DatabaseStorage();
