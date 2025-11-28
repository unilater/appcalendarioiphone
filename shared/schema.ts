import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const letturaSchema = z.object({
  id: z.string(),
  tipo: z.string(),
  riferimento: z.string(),
  testo: z.string(),
  snippet: z.string().optional(),
});

export const liturgiaSchema = z.object({
  date: z.string(),
  season: z.string(),
  color_key: z.string(),
  color_label: z.string(),
  week: z.string(),
  rank: z.string(),
  festa: z.string(),
  letture: z.array(letturaSchema),
});

export const naturaSchema = z.object({
  data: z.string(),
  orto: z.string(),
  giardino: z.string(),
  piante: z.string(),
  cucina: z.string(),
  consiglio: z.string(),
  fase_lunare: z.string(),
  testo: z.string().optional(),
});

export type Lettura = z.infer<typeof letturaSchema>;
export type Liturgia = z.infer<typeof liturgiaSchema>;
export type Natura = z.infer<typeof naturaSchema>;

export const diaryEntrySchema = z.object({
  date: z.string(),
  content: z.string(),
  timestamp: z.number(),
});

export type DiaryEntry = z.infer<typeof diaryEntrySchema>;

// Almanacco Pratico - Ricette & Consigli Tradizionali

export const ingredientSchema = z.object({
  quantity: z.string(),
  name: z.string(),
});

export const recipeStepSchema = z.object({
  step: z.number(),
  instruction: z.string(),
});

export const recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.enum([
    'natale',
    'pasqua',
    'quaresima',
    'avvento',
    'pentecoste',
    'festa_patronale',
    'ordinario',
    'epifania',
    'candelora',
    'san_giuseppe',
    'assunzione',
    'tutti_santi',
    'immacolata'
  ]),
  season: z.enum(['primavera', 'estate', 'autunno', 'inverno', 'tutte']),
  difficulty: z.enum(['facile', 'media', 'difficile']),
  prepTime: z.number(),
  cookTime: z.number(),
  servings: z.number(),
  ingredients: z.array(ingredientSchema),
  steps: z.array(recipeStepSchema),
  imageUrl: z.string().optional(),
  traditionalNote: z.string().optional(),
  liturgicalNote: z.string().optional(),
  region: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const adviceSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  category: z.enum(['casa', 'orto', 'giardino', 'piante', 'stagionale']),
  season: z.enum(['primavera', 'estate', 'autunno', 'inverno', 'tutte']),
  month: z.number().optional(),
  difficulty: z.enum(['facile', 'media', 'difficile']),
  tags: z.array(z.string()).optional(),
  lunarPhase: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type Ingredient = z.infer<typeof ingredientSchema>;
export type RecipeStep = z.infer<typeof recipeStepSchema>;
export type Recipe = z.infer<typeof recipeSchema>;
export type Advice = z.infer<typeof adviceSchema>;

// Homepage - Riflessione Spirituale
export const reflectionSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  excerpt: z.string(),
  body: z.string(),
  suggestions: z.array(z.object({
    author: z.string(),
    text: z.string(),
    source: z.string().optional(),
  })),
});

export type Reflection = z.infer<typeof reflectionSchema>;

// Homepage - Consigli Pratici Compatti
export const practicalTipSchema = z.object({
  id: z.string(),
  date: z.string(),
  category: z.enum(['orto', 'giardino', 'piante']),
  summary: z.string(),
  details: z.string(),
  icon: z.string(),
  color: z.string(),
  link: z.string().optional(),
});

export type PracticalTip = z.infer<typeof practicalTipSchema>;

// Homepage - Ricetta del Giorno (Preview)
export const dailyRecipePreviewSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  summary: z.string(),
  recipeId: z.string(),
  category: z.string(),
  imageUrl: z.string().optional(),
});

export type DailyRecipePreview = z.infer<typeof dailyRecipePreviewSchema>;

// Homepage - Eventi (Accade Oggi / Accadde Oggi)
export const eventSchema = z.object({
  id: z.string(),
  date: z.string(),
  type: z.enum(['oggi', 'storia']),
  title: z.string(),
  summary: z.string(),
  year: z.number().optional(),
  source: z.string().optional(),
});

export type Event = z.infer<typeof eventSchema>;

// Homepage - Astronomia
export const astronomySnapshotSchema = z.object({
  id: z.string(),
  date: z.string(),
  sunrise: z.string(),
  sunset: z.string(),
  moonPhase: z.string(),
  moonIllumination: z.number(),
  saintNote: z.string().optional(),
  liturgicalNote: z.string().optional(),
});

export type AstronomySnapshot = z.infer<typeof astronomySnapshotSchema>;

// Homepage - Meteo
export const weatherSnapshotSchema = z.object({
  id: z.string(),
  date: z.string(),
  location: z.string(),
  conditions: z.string(),
  temperatureMin: z.number(),
  temperatureMax: z.number(),
  humidity: z.number().optional(),
  liturgicalNote: z.string().optional(),
});

export type WeatherSnapshot = z.infer<typeof weatherSnapshotSchema>;

// News - Approfondimenti
export const insightSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  content: z.string(),
  author: z.string(),
  publishedDate: z.string(),
  category: z.enum(['teologia', 'storia', 'spiritualita', 'liturgia', 'cultura']),
  tags: z.array(z.string()),
  relatedNewsIds: z.array(z.string()).optional(),
});

export type Insight = z.infer<typeof insightSchema>;

// Santo del Giorno
export const saintSchema = z.object({
  id: z.string(),
  date: z.string(),
  name: z.string(),
  title: z.string().optional(),
  biography: z.string(),
  excerpt: z.string(),
  feast: z.string().optional(),
  patronOf: z.array(z.string()).optional(),
  attributes: z.array(z.string()).optional(),
  quotes: z.array(z.object({
    text: z.string(),
    source: z.string().optional(),
  })).optional(),
  liturgicalNote: z.string().optional(),
  imageUrl: z.string().optional(),
  lifeYears: z.string().optional(),
  canonizationDate: z.string().optional(),
});

export type Saint = z.infer<typeof saintSchema>;

// Preghiere
export const prayerSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(['mattino', 'sera', 'rosario', 'angelus', 'liturgia_ore', 'tradizionali', 'sacramenti', 'mariane', 'varie']),
  subcategory: z.string().optional(),
  text: z.string(),
  occasion: z.string().optional(),
  author: z.string().optional(),
  source: z.string().optional(),
  latinText: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type Prayer = z.infer<typeof prayerSchema>;
