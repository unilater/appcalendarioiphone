import CalendarDay from '../CalendarDay';

export default function CalendarDayExample() {
  return (
    <div className="grid grid-cols-7 gap-2 max-w-3xl p-4 bg-card rounded-lg">
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Dom</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Lun</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Mar</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Mer</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Gio</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Ven</div>
      <div className="text-center text-sm font-medium text-muted-foreground py-2">Sab</div>
      
      <CalendarDay day={1} saintName="Tutti i Santi" liturgicalColor="white" isFeastDay onClick={() => console.log('Day 1 clicked')} />
      <CalendarDay day={2} saintName="Commemorazione defunti" liturgicalColor="purple" onClick={() => console.log('Day 2 clicked')} />
      <CalendarDay day={3} saintName="S. Martino" onClick={() => console.log('Day 3 clicked')} />
      <CalendarDay day={4} saintName="S. Carlo" liturgicalColor="white" isFeastDay onClick={() => console.log('Day 4 clicked')} />
      <CalendarDay day={5} onClick={() => console.log('Day 5 clicked')} />
      <CalendarDay day={6} onClick={() => console.log('Day 6 clicked')} />
      <CalendarDay day={7} onClick={() => console.log('Day 7 clicked')} />
      <CalendarDay day={8} liturgicalColor="green" onClick={() => console.log('Day 8 clicked')} />
      <CalendarDay day={9} onClick={() => console.log('Day 9 clicked')} />
      <CalendarDay day={10} onClick={() => console.log('Day 10 clicked')} />
      <CalendarDay day={11} saintName="S. Martino" liturgicalColor="white" onClick={() => console.log('Day 11 clicked')} />
      <CalendarDay day={12} onClick={() => console.log('Day 12 clicked')} />
      <CalendarDay day={13} onClick={() => console.log('Day 13 clicked')} />
      <CalendarDay day={14} onClick={() => console.log('Day 14 clicked')} />
      <CalendarDay day={15} liturgicalColor="green" onClick={() => console.log('Day 15 clicked')} />
      <CalendarDay day={16} onClick={() => console.log('Day 16 clicked')} />
      <CalendarDay day={17} onClick={() => console.log('Day 17 clicked')} />
      <CalendarDay day={18} onClick={() => console.log('Day 18 clicked')} />
      <CalendarDay day={19} isToday onClick={() => console.log('Day 19 clicked - Today!')} />
      <CalendarDay day={20} onClick={() => console.log('Day 20 clicked')} />
      <CalendarDay day={21} saintName="Presentazione" liturgicalColor="white" isFeastDay onClick={() => console.log('Day 21 clicked')} />
    </div>
  );
}
