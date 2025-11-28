import { useQuery } from "@tanstack/react-query";
import { Saint } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

export default function Santi() {
  const { data: saint, isLoading, error } = useQuery<Saint>({
    queryKey: ["/api/saint/today"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Caricamento santo del giorno...</p>
        </div>
      </div>
    );
  }

  if (error || !saint) {
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
                Impossibile caricare il santo del giorno. Riprova più tardi.
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
        
        {/* Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h1 
                className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide" 
                data-testid="text-saint-name"
              >
                {saint.name}
              </h1>
              <Badge variant="outline" className="shrink-0 gap-1 px-2 py-1">
                <Sparkles className="h-3 w-3" />
                <span className="text-xs">Santo</span>
              </Badge>
            </div>
            {saint.title && (
              <p className="text-lg text-foreground/80 font-serif mb-2" data-testid="text-saint-title">
                {saint.title}
              </p>
            )}
            <p className="text-base text-foreground font-serif leading-relaxed" data-testid="text-saint-excerpt">
              {saint.excerpt}
            </p>
          </CardContent>
        </Card>

        {/* Info Cards Row - Compact */}
        <div className="grid grid-cols-2 gap-3">
          {/* Festa */}
          {saint.feast && (
            <Card className="hover-elevate" data-testid="card-feast">
              <CardContent className="p-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                  Festa Liturgica
                </p>
                <p className="text-sm font-semibold text-foreground" data-testid="text-feast">
                  {saint.feast}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Vita */}
          {saint.lifeYears && (
            <Card className="hover-elevate" data-testid="card-life-years">
              <CardContent className="p-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                  Vita
                </p>
                <p className="text-sm font-semibold text-foreground" data-testid="text-life-years">
                  {saint.lifeYears}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Biografia */}
        <Card data-testid="card-biography">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-semibold">
              Biografia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {saint.biography.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-base text-foreground font-serif leading-relaxed"
                data-testid={`text-biography-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Citazioni */}
        {saint.quotes && saint.quotes.length > 0 && (
          <Card data-testid="card-quotes">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-semibold">
                Citazioni
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {saint.quotes.map((quote, index) => (
                <div key={index} data-testid={`quote-${index}`}>
                  {index > 0 && <Separator className="my-6" />}
                  <blockquote className="pl-5 border-l-4 border-primary/40 py-3 space-y-3 bg-muted/30 rounded-r-lg">
                    <p className="text-base font-serif leading-relaxed text-foreground pr-3">
                      "{quote.text}"
                    </p>
                    {quote.source && (
                      <footer className="text-sm text-foreground/60 font-medium pr-3">
                        — {quote.source}
                      </footer>
                    )}
                  </blockquote>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Nota Liturgica */}
        {saint.liturgicalNote && (
          <Card className="bg-gradient-to-br from-primary/5 via-background to-background border-primary/20" data-testid="card-liturgical-note">
            <CardContent className="p-4">
              <p className="text-base text-foreground/70 font-serif leading-relaxed">
                <span className="font-semibold text-foreground">Nota liturgica:</span> {saint.liturgicalNote}
              </p>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}
