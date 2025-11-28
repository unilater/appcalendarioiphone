import {
  Sprout,
  Flower2,
  Leaf,
  ChefHat,
  Newspaper,
  Hourglass,
  MoonStar,
  CloudSun,
  type LucideIcon,
} from "lucide-react";

export interface SectionTheme {
  colorClass: string;
  bgClass: string;
  borderClass: string;
  icon: LucideIcon;
  label: string;
}

export const SECTION_THEMES: Record<string, SectionTheme> = {
  orto: {
    colorClass: "text-green-700 dark:text-green-400",
    bgClass: "bg-green-50 dark:bg-green-950/30",
    borderClass: "border-green-200 dark:border-green-800",
    icon: Sprout,
    label: "Orto",
  },
  giardino: {
    colorClass: "text-orange-700 dark:text-orange-400",
    bgClass: "bg-orange-50 dark:bg-orange-950/30",
    borderClass: "border-orange-200 dark:border-orange-800",
    icon: Flower2,
    label: "Giardino",
  },
  piante: {
    colorClass: "text-emerald-700 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/30",
    borderClass: "border-emerald-200 dark:border-emerald-800",
    icon: Leaf,
    label: "Piante",
  },
  ricetta: {
    colorClass: "text-red-700 dark:text-red-400",
    bgClass: "bg-red-50 dark:bg-red-950/30",
    borderClass: "border-red-200 dark:border-red-800",
    icon: ChefHat,
    label: "Ricetta del Giorno",
  },
  accadeOggi: {
    colorClass: "text-amber-700 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-950/30",
    borderClass: "border-amber-200 dark:border-amber-800",
    icon: Newspaper,
    label: "Accade Oggi",
  },
  accaddeOggi: {
    colorClass: "text-stone-700 dark:text-stone-400",
    bgClass: "bg-stone-50 dark:bg-stone-950/30",
    borderClass: "border-stone-200 dark:border-stone-800",
    icon: Hourglass,
    label: "Accadde Oggi",
  },
  astronomia: {
    colorClass: "text-purple-700 dark:text-purple-400",
    bgClass: "bg-purple-50 dark:bg-purple-950/30",
    borderClass: "border-purple-200 dark:border-purple-800",
    icon: MoonStar,
    label: "Astronomia",
  },
  meteo: {
    colorClass: "text-sky-700 dark:text-sky-400",
    bgClass: "bg-sky-50 dark:bg-sky-950/30",
    borderClass: "border-sky-200 dark:border-sky-800",
    icon: CloudSun,
    label: "Meteo",
  },
};

export const getCategoryTheme = (category: string): SectionTheme => {
  return SECTION_THEMES[category] || SECTION_THEMES.orto;
};
