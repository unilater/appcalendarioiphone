import { DiaryEntry, diaryEntrySchema } from "@shared/schema";

const DIARY_STORAGE_KEY = "almanacco_diary";

function isClient(): boolean {
  return typeof window !== 'undefined';
}

export function saveDiaryEntry(date: string, content: string): void {
  if (!isClient()) return;
  try {
    const entries = getAllDiaryEntries();
    entries[date] = {
      date,
      content,
      timestamp: Date.now(),
    };
    localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error("Errore nel salvare la nota del diario:", error);
  }
}

export function getDiaryEntry(date: string): DiaryEntry | null {
  if (!isClient()) return null;
  try {
    const entries = getAllDiaryEntries();
    const entry = entries[date];
    if (!entry) return null;
    
    const validated = diaryEntrySchema.safeParse(entry);
    return validated.success ? validated.data : null;
  } catch (error) {
    console.error("Errore nel recuperare la nota del diario:", error);
    return null;
  }
}

export function deleteDiaryEntry(date: string): void {
  if (!isClient()) return;
  try {
    const entries = getAllDiaryEntries();
    delete entries[date];
    localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error("Errore nell'eliminare la nota del diario:", error);
  }
}

export function getAllDiaryEntries(): Record<string, DiaryEntry> {
  if (!isClient()) return {};
  try {
    const stored = localStorage.getItem(DIARY_STORAGE_KEY);
    if (!stored) return {};
    return JSON.parse(stored);
  } catch (error) {
    console.error("Errore nel recuperare tutte le note del diario:", error);
    return {};
  }
}

export function hasDiaryEntry(date: string): boolean {
  if (!isClient()) return false;
  const entries = getAllDiaryEntries();
  return !!entries[date];
}

export function getDiaryEntriesForDateRange(startDate: string, endDate: string): DiaryEntry[] {
  if (!isClient()) return [];
  const entries = getAllDiaryEntries();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return Object.values(entries).filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= start && entryDate <= end;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
