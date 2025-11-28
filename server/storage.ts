import {
  type User,
  type InsertUser,
  type Reflection,
  type PracticalTip,
  type DailyRecipePreview,
  type Event,
  type AstronomySnapshot,
  type WeatherSnapshot,
  type Recipe,
  type Insight,
} from "@shared/schema";
import { randomUUID } from "crypto";
import {
  dailyReflection,
  dailyPracticalTips,
  dailyRecipePreview,
  todayEvents,
  historyEvents,
  todayAstronomy,
  todayWeather,
  insights,
} from "./data/homepage";
import { recipes } from "./data/almanac";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getReflectionToday(): Promise<Reflection | undefined>;
  getTipsToday(): Promise<PracticalTip[]>;
  getRecipeOfDay(): Promise<DailyRecipePreview | undefined>;
  getRecipe(id: string): Promise<Recipe | undefined>;
  getEvents(): Promise<Event[]>;
  getAstronomy(): Promise<AstronomySnapshot | undefined>;
  getWeather(): Promise<WeatherSnapshot | undefined>;
  getInsights(): Promise<Insight[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getReflectionToday(): Promise<Reflection | undefined> {
    return dailyReflection;
  }

  async getTipsToday(): Promise<PracticalTip[]> {
    return dailyPracticalTips;
  }

  async getRecipeOfDay(): Promise<DailyRecipePreview | undefined> {
    return dailyRecipePreview;
  }

  async getRecipe(id: string): Promise<Recipe | undefined> {
    return recipes.find((r: Recipe) => r.id === id);
  }

  async getEvents(): Promise<Event[]> {
    return [...todayEvents, ...historyEvents];
  }

  async getAstronomy(): Promise<AstronomySnapshot | undefined> {
    return todayAstronomy;
  }

  async getWeather(): Promise<WeatherSnapshot | undefined> {
    return todayWeather;
  }

  async getInsights(): Promise<Insight[]> {
    return insights;
  }
}

export const storage = new MemStorage();
