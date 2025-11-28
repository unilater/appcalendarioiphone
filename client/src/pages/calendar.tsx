import CalendarDay from "@/components/CalendarDay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Calendar() {
  const [currentMonth] = useState(new Date(2024, 10, 1)); // Novembre 2024

  const calendarDays = [
    { day: 1, saintName: "Tutti i Santi", liturgicalColor: 'white' as const, isFeastDay: true },
    { day: 2, saintName: "Defunti", liturgicalColor: 'purple' as const, isFeastDay: true },
    { day: 3, saintName: "S. Martino de Porres" },
    { day: 4, saintName: "S. Carlo Borromeo", liturgicalColor: 'white' as const, isFeastDay: true },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8, liturgicalColor: 'green' as const },
    { day: 9, saintName: "Dedicazione Laterano", liturgicalColor: 'white' as const },
    { day: 10, saintName: "S. Leone Magno", liturgicalColor: 'white' as const },
    { day: 11, saintName: "S. Martino di Tours", liturgicalColor: 'white' as const, isFeastDay: true },
    { day: 12 },
    { day: 13, saintName: "S. Stanislao Kostka" },
    { day: 14 },
    { day: 15, liturgicalColor: 'green' as const },
    { day: 16, saintName: "S. Margherita di Scozia" },
    { day: 17, saintName: "S. Elisabetta d'Ungheria", liturgicalColor: 'white' as const },
    { day: 18 },
    { day: 19, isToday: true },
    { day: 20 },
    { day: 21, saintName: "Presentazione Maria", liturgicalColor: 'white' as const, isFeastDay: true },
    { day: 22, saintName: "S. Cecilia", liturgicalColor: 'red' as const, isFeastDay: true },
    { day: 23 },
    { day: 24, liturgicalColor: 'green' as const },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30, saintName: "S. Andrea Apostolo", liturgicalColor: 'red' as const, isFeastDay: true }
  ];

  const monthName = currentMonth.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">
          Calendario Liturgico
        </h1>
        <p className="text-muted-foreground">
          Santi e festività del mese
        </p>
      </div>

      <div className="bg-card rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => console.log('Previous month')}
            data-testid="button-prev-month"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="font-serif text-2xl font-semibold capitalize" data-testid="text-current-month">
            {monthName}
          </h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => console.log('Next month')}
            data-testid="button-next-month"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
          
          {/* Empty cells for days before month starts (Nov 1, 2024 is Friday) */}
          {[...Array(5)].map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {calendarDays.map((dayData) => (
            <CalendarDay
              key={dayData.day}
              day={dayData.day}
              saintName={dayData.saintName}
              liturgicalColor={dayData.liturgicalColor}
              isFeastDay={dayData.isFeastDay}
              isToday={dayData.isToday}
              onClick={() => console.log(`Day ${dayData.day} clicked`)}
            />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <h3 className="font-serif font-semibold mb-3">Legenda colori liturgici</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-chart-1" />
              <span>Rosso - Martiri</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-chart-2" />
              <span>Viola - Penitenza</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-chart-3" />
              <span>Verde - Ordinario</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted" />
              <span>Bianco - Feste</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-chart-4" />
              <span>Oro - Solennità</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
