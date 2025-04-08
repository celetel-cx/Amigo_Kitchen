import { pgTable, text, serial, integer, boolean, doublePrecision } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: doublePrecision("price").notNull(),
  isVeg: boolean("is_veg").notNull().default(false),
  description: text("description"),
  categoryId: integer("category_id").notNull(),
  subcategory: text("subcategory").notNull(),
});

export const featuredItems = pgTable("featured_items", {
  id: serial("id").primaryKey(),
  menuItemId: integer("menu_item_id").notNull(),
  image: text("image").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  slug: true,
  name: true,
});

export const insertMenuItemSchema = createInsertSchema(menuItems).pick({
  name: true,
  price: true,
  isVeg: true,
  description: true,
  categoryId: true,
  subcategory: true,
});

export const insertFeaturedItemSchema = createInsertSchema(featuredItems).pick({
  menuItemId: true,
  image: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;

export type InsertFeaturedItem = z.infer<typeof insertFeaturedItemSchema>;
export type FeaturedItem = typeof featuredItems.$inferSelect;
