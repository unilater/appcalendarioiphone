import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Prayer } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Search, 
  X,
  Sparkles,
  BookOpen
} from "lucide-react";

const categoryLabels: Record<string, string> = {
  tutte: "Tutte le preghiere",
  mattino: "Preghiere del Mattino",
  sera: "Preghiere della Sera",
  rosario: "Rosario",
  angelus: "Angelus",
  liturgia_ore: "Liturgia delle Ore",
  tradizionali: "Preghiere Tradizionali",
  sacramenti: "Sacramenti",
  mariane: "Preghiere Mariane",
  varie: "Varie",
};

export default function Preghiere() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("tutte");
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);

  const { data: prayers = [], isLoading, error } = useQuery<Prayer[]>({
    queryKey: ["/api/prayers"],
  });

  const filteredPrayers = useMemo(() => {
    let filtered = prayers;

    if (selectedCategory !== "tutte") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.text.toLowerCase().includes(query) ||
        p.tags?.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [prayers, selectedCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Caricamento preghiere...</p>
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
              <p className="text-sm text-muted-foreground">
                Impossibile caricare le preghiere. Riprova più tardi.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        
        {/* Header con gradiente iOS-friendly */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl p-6 border">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide" data-testid="text-page-title">
              Preghiere
            </h1>
            <Badge variant="outline" className="shrink-0 gap-1 px-2 py-1">
              <Sparkles className="h-3 w-3" />
              <span className="text-xs hidden sm:inline">Tradizione</span>
            </Badge>
          </div>
          <p className="text-base text-foreground/70 font-serif">
            Raccolta di preghiere tradizionali della Chiesa Cattolica
          </p>
        </div>

        {/* Filtri - iOS friendly */}
        <Card>
          <CardContent className="p-4 space-y-3">
            {/* Ricerca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cerca preghiere..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
                data-testid="input-search"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setSearchQuery("")}
                  data-testid="button-clear-search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Categoria */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full" data-testid="select-category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tutte">Tutte le categorie</SelectItem>
                <SelectItem value="mattino">Preghiere del Mattino</SelectItem>
                <SelectItem value="sera">Preghiere della Sera</SelectItem>
                <SelectItem value="tradizionali">Preghiere Tradizionali</SelectItem>
                <SelectItem value="mariane">Preghiere Mariane</SelectItem>
                <SelectItem value="angelus">Angelus</SelectItem>
                <SelectItem value="rosario">Rosario</SelectItem>
                <SelectItem value="liturgia_ore">Liturgia delle Ore</SelectItem>
                <SelectItem value="sacramenti">Sacramenti</SelectItem>
                <SelectItem value="varie">Varie</SelectItem>
              </SelectContent>
            </Select>

            {/* Contatore risultati */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{filteredPrayers.length} {filteredPrayers.length === 1 ? 'preghiera' : 'preghiere'}</span>
              {selectedCategory !== "tutte" && (
                <Badge variant="secondary" className="text-xs px-2 py-0">
                  {categoryLabels[selectedCategory]}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Lista Preghiere - Cards iOS-friendly */}
        <div className="space-y-3">
          {filteredPrayers.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                <p className="text-muted-foreground">
                  Nessuna preghiera trovata
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredPrayers.map((prayer, index) => (
              <Card 
                key={prayer.id}
                className="hover-elevate active-elevate-2 cursor-pointer"
                onClick={() => setSelectedPrayer(prayer)}
                data-testid={`card-prayer-${prayer.id}`}
              >
                <CardContent className="p-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-lg text-foreground flex-1" data-testid={`text-prayer-title-${index}`}>
                        {prayer.title}
                      </h3>
                      <Badge variant="outline" className="shrink-0 text-xs px-2.5 py-1">
                        {categoryLabels[prayer.category]}
                      </Badge>
                    </div>
                    {prayer.occasion && (
                      <p className="text-sm text-foreground/70 font-medium">
                        {prayer.occasion}
                      </p>
                    )}
                    <p className="text-sm text-foreground/60 line-clamp-2 font-serif leading-relaxed">
                      {prayer.text.substring(0, 150)}...
                    </p>
                    {prayer.tags && prayer.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {prayer.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs px-2.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Dialog Dettaglio Preghiera */}
        <Dialog open={!!selectedPrayer} onOpenChange={(open) => !open && setSelectedPrayer(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto" data-testid="dialog-prayer-detail">
            {selectedPrayer && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display uppercase tracking-wide" data-testid="text-dialog-title">
                    {selectedPrayer.title}
                  </DialogTitle>
                  {selectedPrayer.occasion && (
                    <p className="text-base text-foreground/70 font-serif">
                      {selectedPrayer.occasion}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline" className="text-xs px-2.5 py-1">
                      {categoryLabels[selectedPrayer.category]}
                    </Badge>
                    {selectedPrayer.author && (
                      <Badge variant="secondary" className="text-xs px-2.5 py-1">
                        {selectedPrayer.author}
                      </Badge>
                    )}
                  </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Testo Italiano */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-base uppercase tracking-wide text-foreground/70">
                      Testo
                    </h4>
                    <Card className="bg-gradient-to-br from-primary/5 via-background to-background">
                      <CardContent className="p-6">
                        <div className="space-y-3 whitespace-pre-line text-base font-serif leading-relaxed text-foreground" data-testid="text-prayer-content">
                          {selectedPrayer.text}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Testo Latino */}
                  {selectedPrayer.latinText && (
                    <>
                      <Separator />
                      <div className="space-y-3">
                        <h4 className="font-semibold text-base uppercase tracking-wide text-foreground/70">
                          Testo Latino
                        </h4>
                        <Card className="bg-gradient-to-br from-amber-50/30 via-background to-background dark:from-amber-950/10 dark:via-background dark:to-background">
                          <CardContent className="p-6">
                            <div className="space-y-3 whitespace-pre-line text-base font-serif leading-relaxed italic text-foreground/80" data-testid="text-prayer-latin">
                              {selectedPrayer.latinText}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}

                  {/* Note */}
                  {selectedPrayer.notes && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-base uppercase tracking-wide text-foreground/70">
                          Note
                        </h4>
                        <p className="text-base text-foreground/70 font-serif leading-relaxed">
                          {selectedPrayer.notes}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Source */}
                  {selectedPrayer.source && (
                    <div className="text-sm text-foreground/60">
                      <span className="font-semibold text-foreground">Fonte:</span> {selectedPrayer.source}
                    </div>
                  )}

                  {/* Tags */}
                  {selectedPrayer.tags && selectedPrayer.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedPrayer.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-2.5 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
