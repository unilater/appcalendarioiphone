import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AIChatDialog } from "@/components/AIChatDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Sprout,
  Moon,
  ChefHat,
  Sparkles,
  Calendar,
  Flower2,
  Leaf,
  ArrowRight,
  Sunrise,
  Sunset,
  CloudSun,
  Thermometer,
  Droplets,
  ExternalLink,
  Clock,
  Users,
} from "lucide-react";
import type {
  Liturgia,
  Natura,
  Reflection,
  PracticalTip,
  DailyRecipePreview,
  Event,
  AstronomySnapshot,
  WeatherSnapshot,
  Recipe,
} from "@shared/schema";
import { SECTION_THEMES, getCategoryTheme } from "@/lib/homepage-constants";
import { getLiturgicalColorToken } from "@/lib/liturgical-colors";

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const mesi = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ];

  const dayName = giorni[date.getDay()];
  const day = date.getDate();
  const month = mesi[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day} ${month} ${year}`;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export default function Liturgia() {
  const today = getTodayDate();
  const [reflectionOpen, setReflectionOpen] = useState(false);
  const [tipsDialogOpen, setTipsDialogOpen] = useState(false);
  const [recipeDialogOpen, setRecipeDialogOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatPrompt, setAiChatPrompt] = useState("");
  const [aiChatContext, setAiChatContext] = useState("");

  const { data: liturgia, isLoading: liturgiaLoading } = useQuery<Liturgia>({
    queryKey: ["/api/liturgy", today],
  });

  const { data: natura } = useQuery<Natura>({
    queryKey: ["/api/nature", today],
  });

  const { data: reflection } = useQuery<Reflection>({
    queryKey: ["/api/reflection/today"],
  });

  const { data: practicalTips = [] } = useQuery<PracticalTip[]>({
    queryKey: ["/api/tips/today"],
  });

  const { data: dailyRecipePreview } = useQuery<DailyRecipePreview>({
    queryKey: ["/api/recipe-of-day"],
  });

  const { data: dailyRecipe } = useQuery<Recipe>({
    queryKey: [`/api/recipes/${dailyRecipePreview?.recipeId}`],
    enabled: !!dailyRecipePreview?.recipeId && recipeDialogOpen,
  });

  const { data: allEvents = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const { data: astronomy } = useQuery<AstronomySnapshot>({
    queryKey: ["/api/astronomy"],
  });

  const { data: weather } = useQuery<WeatherSnapshot>({
    queryKey: ["/api/weather"],
  });

  const todayEvents = allEvents.filter((e) => e.type === "oggi");
  const historyEvents = allEvents.filter((e) => e.type === "storia");

  if (liturgiaLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Caricamento dell'almanacco...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Data Header - Sempre Visibile con Background Distintivo */}
      <div className="bg-primary/5 border border-primary/10 rounded-xl text-center py-6 px-4">
        <h2 className="font-serif text-2xl font-semibold text-foreground" data-testid="text-current-date">
          {formatDate(liturgia?.date || today)}
        </h2>
      </div>

      {/* Liturgical Section */}
      {liturgia && (
        <Card className="relative overflow-visible" data-testid="card-liturgia">
          <div 
            className="absolute left-0 top-6 bottom-6 w-1.5 rounded-r-full" 
            style={{ backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgia.color_key)}))` }}
          />

          <CardHeader className="pb-4 pl-6">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="space-y-3 flex-1">
                <h1 className="font-serif text-2xl md:text-3xl font-semibold" data-testid="text-liturgia-festa">
                  {liturgia.festa}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="gap-1.5" data-testid="badge-liturgical-season">
                    <BookOpen className="h-3 w-3" />
                    {liturgia.season}
                  </Badge>
                  <div 
                    className="text-xs font-semibold px-2 py-1 rounded text-white shadow-sm uppercase border"
                    style={{ 
                      backgroundColor: `hsl(var(${getLiturgicalColorToken(liturgia.color_key)}))`,
                      borderColor: `hsl(var(${getLiturgicalColorToken(liturgia.color_key)}))`
                    }}
                    data-testid="badge-liturgical-color"
                  >
                    {liturgia.color_label}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {!liturgia && (
        <Card>
          <CardContent className="pt-6 text-center space-y-4">
            <p className="text-muted-foreground">
              Impossibile caricare i dati liturgici. Riprova più tardi.
            </p>
            <Button variant="outline" onClick={() => window.location.reload()} data-testid="button-reload-liturgia">
              Ricarica
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Letture del Giorno della Messa */}
      {liturgia && liturgia.letture && liturgia.letture.length > 0 && (
        <Card data-testid="card-letture">
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2" data-testid="heading-letture">
              <BookOpen className="h-5 w-5 text-primary" />
              Letture del Giorno della Messa
            </CardTitle>
            <p className="text-sm text-muted-foreground">Tocca per leggere il testo completo</p>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="space-y-2">
              {liturgia.letture.map((lettura) => (
                <AccordionItem 
                  key={lettura.id} 
                  value={lettura.id}
                  className="border rounded-lg px-4"
                  data-testid={`lettura-${lettura.id}`}
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col items-start gap-2 text-left w-full pr-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge 
                          variant="secondary" 
                          className="text-xs font-semibold"
                        >
                          {lettura.tipo}
                        </Badge>
                        <span className="text-sm font-medium text-muted-foreground">
                          {lettura.riferimento}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 font-serif">
                        {lettura.testo.replace(/<[^>]*>/g, '').substring(0, 120)}...
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <div
                      className="font-serif text-sm leading-relaxed prose prose-sm max-w-none dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: lettura.testo }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      {/* Riflessione Spirituale */}
      {reflection && (
        <Card
          className="bg-primary/5 border-primary/20 hover-elevate cursor-pointer"
          onClick={() => setReflectionOpen(true)}
          data-testid="card-reflection"
        >
          <CardHeader>
            <CardTitle className="font-serif text-xl">
              Riflessione Spirituale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <h4 className="font-serif font-semibold text-lg">{reflection.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{reflection.excerpt}</p>
            <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
              <Sparkles className="h-4 w-4" />
              Apri meditazione
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Suggerimenti Pratici + Ricetta del Giorno */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {practicalTips.map((tip) => {
          const theme = getCategoryTheme(tip.category);
          const Icon = theme.icon;
          return (
            <Card
              key={tip.id}
              className={`${theme.bgClass} ${theme.borderClass} hover-elevate cursor-pointer`}
              onClick={() => setTipsDialogOpen(true)}
              data-testid={`card-tip-${tip.category}`}
            >
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 text-sm font-medium ${theme.colorClass}`}>
                    <Icon className="h-4 w-4" />
                    {theme.label}
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <p className="text-sm font-serif line-clamp-2">{tip.summary}</p>
                <p className="text-xs text-muted-foreground italic">Clicca per aprire</p>
              </CardContent>
            </Card>
          );
        })}

        {/* Ricetta del Giorno */}
        {dailyRecipePreview && (
          <Card
            className={`${SECTION_THEMES.ricetta.bgClass} ${SECTION_THEMES.ricetta.borderClass} hover-elevate cursor-pointer`}
            onClick={() => setRecipeDialogOpen(true)}
            data-testid="card-recipe-preview"
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 text-sm font-medium ${SECTION_THEMES.ricetta.colorClass}`}>
                  <ChefHat className="h-4 w-4" />
                  Ricetta del Giorno
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <p className="text-sm font-serif font-semibold line-clamp-2">{dailyRecipePreview.title}</p>
              <p className="text-xs text-muted-foreground italic">Clicca per aprire</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Link ad Almanacco */}
      <div className="text-center">
        <Link href="/almanacco">
          <Button variant="outline" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Scopri l'Almanacco Completo
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Accade Oggi / Accadde Oggi */}
      {(todayEvents.length > 0 || historyEvents.length > 0) && (
        <Card data-testid="card-events">
          <CardHeader>
            <CardTitle className="font-serif text-xl">Cronache del Giorno</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="oggi" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="oggi" className="gap-2" data-testid="tab-accade-oggi">
                  <SECTION_THEMES.accadeOggi.icon className="h-4 w-4" />
                  Accade Oggi
                </TabsTrigger>
                <TabsTrigger value="storia" className="gap-2" data-testid="tab-accadde-oggi">
                  <SECTION_THEMES.accaddeOggi.icon className="h-4 w-4" />
                  Accadde Oggi
                </TabsTrigger>
              </TabsList>
              <TabsContent value="oggi" className="space-y-3 mt-4">
                {todayEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="p-4 rounded-lg border-2 border-primary/30 bg-primary/5 space-y-2 shadow-sm"
                    data-testid={`event-${event.id}`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse" />
                      <div className="flex-1 space-y-1">
                        <h4 className="font-serif font-semibold text-sm">{event.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.summary}</p>
                        {event.source && (
                          <p className="text-xs text-muted-foreground italic mt-2">
                            Fonte: {event.source}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
              <TabsContent value="storia" className="space-y-3 mt-4">
                {historyEvents.map((event) => (
                  <div key={event.id} className="p-3 rounded-md border space-y-1" data-testid={`event-${event.id}`}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-semibold text-sm">{event.title}</h4>
                      {event.year && (
                        <Badge variant="outline" className="text-xs">
                          {event.year}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{event.summary}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Astronomia & Meteo */}
      {(astronomy || weather) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Astronomia */}
          {astronomy && (
            <Card className={`${SECTION_THEMES.astronomia.bgClass} ${SECTION_THEMES.astronomia.borderClass}`} data-testid="card-astronomy">
              <CardHeader>
                <CardTitle className="font-serif text-lg flex items-center gap-2">
                  <SECTION_THEMES.astronomia.icon className={`h-5 w-5 ${SECTION_THEMES.astronomia.colorClass}`} />
                  Astronomia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Sunrise className="h-3 w-3" />
                      Alba
                    </div>
                    <p className="text-sm font-semibold">{astronomy.sunrise}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Sunset className="h-3 w-3" />
                      Tramonto
                    </div>
                    <p className="text-sm font-semibold">{astronomy.sunset}</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Moon className="h-3 w-3" />
                    Fase Lunare
                  </div>
                  <p className="text-sm font-semibold">
                    {astronomy.moonPhase} ({astronomy.moonIllumination}%)
                  </p>
                </div>
                {astronomy.liturgicalNote && (
                  <p className="text-xs text-muted-foreground italic pt-2 border-t">{astronomy.liturgicalNote}</p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Meteo */}
          {weather && (
            <Card className={`${SECTION_THEMES.meteo.bgClass} ${SECTION_THEMES.meteo.borderClass}`} data-testid="card-weather">
              <CardHeader>
                <CardTitle className="font-serif text-lg flex items-center gap-2">
                  <CloudSun className={`h-5 w-5 ${SECTION_THEMES.meteo.colorClass}`} />
                  Meteo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">{weather.location}</p>
                  <p className="text-sm font-semibold">{weather.conditions}</p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Thermometer className="h-3 w-3" />
                      Min/Max
                    </div>
                    <p className="text-sm font-semibold">
                      {weather.temperatureMin}° / {weather.temperatureMax}°
                    </p>
                  </div>
                  {weather.humidity && (
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        Umidità
                      </div>
                      <p className="text-sm font-semibold">{weather.humidity}%</p>
                    </div>
                  )}
                </div>
                {weather.liturgicalNote && (
                  <p className="text-xs text-muted-foreground italic pt-2 border-t">{weather.liturgicalNote}</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Dialog Riflessione Spirituale */}
      <Dialog open={reflectionOpen} onOpenChange={setReflectionOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {reflection?.title}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">{reflection?.excerpt}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="prose prose-sm max-w-none">
              <div className="font-serif text-sm leading-relaxed whitespace-pre-wrap">{reflection?.body}</div>
            </div>
            {reflection?.suggestions && reflection.suggestions.length > 0 && (
              <div className="space-y-4 pt-6 border-t-2 border-primary/20">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <h4 className="font-serif font-bold text-base flex items-center gap-2 text-primary mb-2">
                    <Sparkles className="h-5 w-5" />
                    Approfondisci con AI
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Suggerimenti dalle Letture Spirituali - Tocca per esplorare
                  </p>
                </div>
                <div className="space-y-3">
                  {reflection.suggestions.map((suggestion, idx) => (
                    <div
                      key={idx} 
                      className="group relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-5 hover-elevate active-elevate-2 cursor-pointer transition-all"
                      onClick={() => {
                        setAiChatPrompt(`Approfondisci questa citazione: "${suggestion.text}" di ${suggestion.author}`);
                        setAiChatContext(reflection.body);
                        setReflectionOpen(false);
                        setAiChatOpen(true);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setAiChatPrompt(`Approfondisci questa citazione: "${suggestion.text}" di ${suggestion.author}`);
                          setAiChatContext(reflection.body);
                          setReflectionOpen(false);
                          setAiChatOpen(true);
                        }
                      }}
                      data-testid={`suggestion-${idx}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-1 space-y-3 min-w-0">
                          <p className="text-base font-serif leading-relaxed text-foreground font-medium">
                            "{suggestion.text}"
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <span className="font-bold">— {suggestion.author}</span>
                            {suggestion.source && <span className="ml-2 font-normal">({suggestion.source})</span>}
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Suggerimenti Pratici */}
      <Dialog open={tipsDialogOpen} onOpenChange={setTipsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Suggerimenti Pratici del Giorno</DialogTitle>
            <DialogDescription>Saggezza pratica per orto, giardino e piante</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            {practicalTips.map((tip) => {
              const theme = getCategoryTheme(tip.category);
              const Icon = theme.icon;
              return (
                <Card key={tip.id} className={`${theme.bgClass} ${theme.borderClass}`}>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${theme.colorClass}`} />
                      {theme.label}: {tip.summary}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none">
                      <div className="font-serif text-sm leading-relaxed whitespace-pre-wrap">{tip.details}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Ricetta del Giorno */}
      <Dialog open={recipeDialogOpen} onOpenChange={setRecipeDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="space-y-2">
              <DialogTitle className="font-serif text-3xl">{dailyRecipePreview?.title}</DialogTitle>
              <DialogDescription className="text-base">
                {dailyRecipePreview?.summary}
              </DialogDescription>
              {dailyRecipe && (
                <div className="flex gap-2 flex-wrap pt-2">
                  <Badge className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Tempo Ordinario
                  </Badge>
                  <Badge variant="secondary">Tutte le stagioni</Badge>
                  <Badge variant="outline">Media</Badge>
                  {dailyRecipe.region && <Badge variant="outline">{dailyRecipe.region}</Badge>}
                </div>
              )}
            </div>
          </DialogHeader>
          {dailyRecipe && (
            <div className="space-y-6 pt-4">
              {/* Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <Clock className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Preparazione</p>
                  <p className="text-xs text-muted-foreground">{dailyRecipe.prepTime} min</p>
                </div>
                <div className="space-y-1">
                  <Clock className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Cottura</p>
                  <p className="text-xs text-muted-foreground">{dailyRecipe.cookTime} min</p>
                </div>
                <div className="space-y-1">
                  <Users className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Porzioni</p>
                  <p className="text-xs text-muted-foreground">{dailyRecipe.servings}</p>
                </div>
              </div>

              {/* Ingredienti */}
              <div>
                <h3 className="font-serif font-semibold text-xl mb-3">Ingredienti</h3>
                <ul className="space-y-2">
                  {dailyRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <span className="font-medium">{ing.quantity}</span> {ing.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Procedimento */}
              <div>
                <h3 className="font-serif font-semibold text-xl mb-3">Procedimento</h3>
                <ol className="space-y-4">
                  {dailyRecipe.steps.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                      <p className="text-sm flex-1 pt-1">{step.instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Nota liturgica */}
              {dailyRecipe.liturgicalNote && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                      Significato Liturgico
                    </p>
                    <p className="text-sm">{dailyRecipe.liturgicalNote}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* AI Chat Dialog */}
      <AIChatDialog
        open={aiChatOpen}
        onOpenChange={setAiChatOpen}
        title="Assistente Spirituale AI"
        initialPrompt={aiChatPrompt}
        context={aiChatContext}
      />
    </div>
  );
}
