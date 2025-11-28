import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendarDayProps {
  day: number;
  saintName?: string;
  liturgicalColor?: 'red' | 'purple' | 'green' | 'white' | 'gold';
  isFeastDay?: boolean;
  isToday?: boolean;
  onClick?: () => void;
}

const colorBorderMap = {
  red: 'border-l-[3px] border-l-chart-1',
  purple: 'border-l-[3px] border-l-chart-2',
  green: 'border-l-[3px] border-l-chart-3',
  white: 'border-l-[3px] border-l-muted',
  gold: 'border-l-[3px] border-l-chart-4'
};

export default function CalendarDay({ 
  day, 
  saintName, 
  liturgicalColor, 
  isFeastDay, 
  isToday,
  onClick 
}: CalendarDayProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-auto w-full p-2 flex flex-col items-start justify-start hover-elevate",
        isToday && "bg-primary/5 border border-primary/20",
        isFeastDay && "font-semibold",
        liturgicalColor && colorBorderMap[liturgicalColor]
      )}
      data-testid={`button-calendar-day-${day}`}
    >
      <span className="text-base font-semibold" data-testid={`text-day-${day}`}>
        {day}
      </span>
      {saintName && (
        <span className="text-xs text-muted-foreground truncate w-full text-left mt-0.5" data-testid={`text-saint-${day}`}>
          {saintName}
        </span>
      )}
    </Button>
  );
}
