import { useQuery } from "@tanstack/react-query";
import { Liturgia } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  BookOpen,
  PenLine
} from "lucide-react";
import { useState } from "react";
import { hasDiaryEntry, getDiaryEntry } from "@/lib/diary";
import DiaryEditor from "@/components/DiaryEditor";
import { getLiturgicalColorToken } from "@/lib/liturgical-colors";

function getMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDateItalian(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('it-IT', { 
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

export default function Calendario() {
  const [weekStart, setWeekStart] = useState(() => getMonday(new Date()));
  const [diaryVersion, setDiaryVersion] = useState(0);

  const handleDiaryChange = () => {
    setDiaryVersion(prev => prev + 1);
  };
  
  const queryStart = weekStart;
  const queryEnd = addDays(weekStart, 13);

  const { data: liturgies, isLoading, error } = useQuery<Liturgia[]>({
    queryKey: ['/api/liturgy/range', formatDate(queryStart), formatDate(queryEnd)],
    queryFn: async () => {
      const res = await fetch(
        `/api/liturgy/range?start=${formatDate(queryStart)}&end=${formatDate(queryEnd)}`
      );
      if (!res.ok) throw new Error(`Errore ${res.status}: ${await res.text()}`);
      return res.json();
    },
  });

  const goToPreviousWeek = () => {
    setWeekStart(prev => addDays(prev, -7));
  };

  const goToNextWeek = () => {
    setWeekStart(prev => addDays(prev, 7));
  };

  const goToToday = () => {
    setWeekStart(getMonday(new Date()));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Caricamento calendario liturgico...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-destructive">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                Errore nel caricamento
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Impossibile caricare il calendario liturgico. Riprova più tardi.
              </p>
            </div>
            <Button onClick={() => window.location.reload()} variant="outline">
              Ricarica pagina
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const today = formatDate(new Date());

  // Group liturgies by week based on actual dates, not array indices
  // Normalize all boundaries to start-of-day to avoid filtering out days
  const week1Start = new Date(weekStart);
  week1Start.setHours(0, 0, 0, 0);
  
  const week1End = new Date(weekStart);
  week1End.setDate(week1End.getDate() + 6);
  week1End.setHours(23, 59, 59, 999);
  
  const week2Start = new Date(weekStart);
  week2Start.setDate(week2Start.getDate() + 7);
  week2Start.setHours(0, 0, 0, 0);
  
  const week2End = new Date(weekStart);
  week2End.setDate(week2End.getDate() + 13);
  week2End.setHours(23, 59, 59, 999);

  const week1Liturgies = liturgies?.filter(liturgy => {
    const date = new Date(liturgy.date + 'T00:00:00');
    return date >= week1Start && date <= week1End;
  }) || [];

  const week2Liturgies = liturgies?.filter(liturgy => {
    const date = new Date(liturgy.date + 'T00:00:00');
    return date >= week2Start && date <= week2End;
  }) || [];

  // Determine week titles dynamically based on position relative to today
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const isWeek1Current = todayDate >= week1Start && todayDate <= week1End;
  const isWeek2Current = todayDate >= week2Start && todayDate <= week2End;
  
  let week1Title: string;
  let week2Title: string;
  
  if (isWeek1Current) {
    // Today is in week 1
    week1Title = "Settimana Corrente";
    week2Title = "Settimana Successiva";
  } else if (isWeek2Current) {
    // Today is in week 2
    week1Title = "Settimana Precedente";
    week2Title = "Settimana Corrente";
  } else if (todayDate < week1Start) {
    // Both weeks are in the future
    week1Title = "Prima Settimana";
    week2Title = "Seconda Settimana";
  } else {
    // Both weeks are in the past
    week1Title = "Prima Settimana";
    week2Title = "Seconda Settimana";
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide" data-testid="text-page-title">
          Calendario Liturgico
        </h1>
        <p className="text-muted-foreground font-serif">
          Settimana corrente e successiva • Diario spirituale
        </p>
      </div>

      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousWeek}
              data-testid="button-prev-week"
              className="gap-1 flex-1 sm:flex-none"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Settimana precedente</span>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={goToToday}
              data-testid="button-today"
              className="gap-1"
            >
              <CalendarIcon className="h-4 w-4" />
              <span>Oggi</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNextWeek}
              data-testid="button-next-week"
              className="gap-1 flex-1 sm:flex-none"
            >
              <span className="hidden sm:inline">Settimana successiva</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Week 1 */}
      <div>
        <h2 className="font-serif text-xl font-semibold mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          {week1Title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {week1Liturgies.map((liturgy, index) => {
            const isToday = liturgy.date === today;
            // Force re-render when diary changes (diaryVersion read via comma operator)
            const hasNotes = (void diaryVersion, hasDiaryEntry(liturgy.date));
            const diaryEntry = hasNotes ? getDiaryEntry(liturgy.date) : null;
            const notePreview = diaryEntry?.content?.trim().slice(0, 80);
            
            return (
              <Card 
                key={liturgy.date}
                className={`hover-elevate transition-all ${isToday ? 'ring-2 ring-primary' : ''}`}
                data-testid={`card-day-${liturgy.date}`}
              >
                <div 
                  className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full" 
                  style={{ backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgy.color_key)}))` }}
                />
                <CardContent className="p-3 pl-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {formatDateItalian(liturgy.date)}
                      </div>
                      {isToday && (
                        <Badge variant="default" className="text-xs mt-1">Oggi</Badge>
                      )}
                    </div>
                    {hasNotes && (
                      <PenLine className="h-3 w-3 text-primary flex-shrink-0" data-testid={`icon-has-notes-${liturgy.date}`} />
                    )}
                  </div>
                  
                  <h3 className="font-serif font-semibold text-sm line-clamp-2 leading-tight" data-testid={`text-feast-${liturgy.date}`}>
                    {liturgy.festa}
                  </h3>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="text-xs">
                      <span className="text-muted-foreground font-medium">Tempo Liturgico: </span>
                      <span className="font-semibold uppercase">{liturgy.season}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground text-xs font-medium">Colore Liturgico: </span>
                      <div 
                        className="text-xs font-semibold px-2 py-0.5 rounded text-white shadow-sm uppercase"
                        style={{ backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgy.color_key)}))` }}
                      >
                        {liturgy.color_label}
                      </div>
                    </div>
                  </div>
                  
                  {notePreview && (
                    <div className="mt-1 text-xs text-muted-foreground italic line-clamp-2 px-2 py-1.5 bg-muted/30 rounded-md border border-border/50" data-testid={`note-preview-${liturgy.date}`}>
                      {notePreview}{notePreview.length >= 80 ? '...' : ''}
                    </div>
                  )}
                  
                  <DiaryEditor 
                    date={liturgy.date} 
                    festa={liturgy.festa} 
                    diaryVersion={diaryVersion}
                    onDiaryChange={handleDiaryChange}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Week 2 */}
      <div>
        <h2 className="font-serif text-xl font-semibold mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          {week2Title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {week2Liturgies.map((liturgy) => {
            // Force re-render when diary changes (diaryVersion read via comma operator)
            const hasNotes = (void diaryVersion, hasDiaryEntry(liturgy.date));
            const diaryEntry = hasNotes ? getDiaryEntry(liturgy.date) : null;
            const notePreview = diaryEntry?.content?.trim().slice(0, 80);
            
            return (
              <Card 
                key={liturgy.date}
                className="hover-elevate transition-all"
                data-testid={`card-day-${liturgy.date}`}
              >
                <div 
                  className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full" 
                  style={{ backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgy.color_key)}))` }}
                />
                <CardContent className="p-3 pl-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {formatDateItalian(liturgy.date)}
                    </div>
                    {hasNotes && (
                      <PenLine className="h-3 w-3 text-primary flex-shrink-0" data-testid={`icon-has-notes-${liturgy.date}`} />
                    )}
                  </div>
                  
                  <h3 className="font-serif font-semibold text-sm line-clamp-2 leading-tight" data-testid={`text-feast-${liturgy.date}`}>
                    {liturgy.festa}
                  </h3>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="text-xs">
                      <span className="text-muted-foreground font-medium">Tempo Liturgico: </span>
                      <span className="font-semibold uppercase">{liturgy.season}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground text-xs font-medium">Colore Liturgico: </span>
                      <div 
                        className="text-xs font-semibold px-2 py-0.5 rounded text-white shadow-sm uppercase"
                        style={{ backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgy.color_key)}))` }}
                      >
                        {liturgy.color_label}
                      </div>
                    </div>
                  </div>
                  
                  {notePreview && (
                    <div className="mt-1 text-xs text-muted-foreground italic line-clamp-2 px-2 py-1.5 bg-muted/30 rounded-md border border-border/50" data-testid={`note-preview-${liturgy.date}`}>
                      {notePreview}{notePreview.length >= 80 ? '...' : ''}
                    </div>
                  )}
                  
                  <DiaryEditor 
                    date={liturgy.date} 
                    festa={liturgy.festa} 
                    diaryVersion={diaryVersion}
                    onDiaryChange={handleDiaryChange}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
