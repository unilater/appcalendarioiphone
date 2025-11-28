import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Recipe, Advice } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  Clock,
  Users,
  ChefHat,
  Home,
  Sprout,
  Flower2,
  Leaf,
  Calendar,
  Sparkles,
  X,
  BookOpen,
} from "lucide-react";

type TabType = "tutte" | "ricette" | "casa" | "orto" | "giardino";

type CategoryLabel = {
  [key: string]: string;
};

const recipeCategoryLabels: CategoryLabel = {
  natale: "Natale",
  pasqua: "Pasqua",
  quaresima: "Quaresima",
  avvento: "Avvento",
  pentecoste: "Pentecoste",
  festa_patronale: "Feste Patronali",
  ordinario: "Tempo Ordinario",
  epifania: "Epifania",
  candelora: "Candelora",
  san_giuseppe: "San Giuseppe",
  assunzione: "Assunzione",
  tutti_santi: "Tutti i Santi",
  immacolata: "Immacolata",
};

const adviceCategoryLabels: CategoryLabel = {
  casa: "Casa",
  orto: "Orto",
  giardino: "Giardino",
  piante: "Piante",
  stagionale: "Stagionale",
};

const seasonLabels: CategoryLabel = {
  primavera: "Primavera",
  estate: "Estate",
  autunno: "Autunno",
  inverno: "Inverno",
  tutte: "Tutte le stagioni",
};

const difficultyLabels: CategoryLabel = {
  facile: "Facile",
  media: "Media",
  difficile: "Difficile",
};

const getCurrentSeason = (): string => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return "primavera";
  if (month >= 6 && month <= 8) return "estate";
  if (month >= 9 && month <= 11) return "autunno";
  return "inverno";
};

export default function Almanacco() {
  const [activeTab, setActiveTab] = useState<TabType>("tutte");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState<string>(getCurrentSeason());
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("tutte");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedAdvice, setSelectedAdvice] = useState<Advice | null>(null);

  const { data: recipes = [] } = useQuery<Recipe[]>({
    queryKey: ["/api/recipes"],
  });

  const { data: advices = [] } = useQuery<Advice[]>({
    queryKey: ["/api/advice"],
  });

  const filteredData = useMemo(() => {
    let filteredRecipes = recipes;
    let filteredAdvices = advices;

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredRecipes = filteredRecipes.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.tags?.some((t) => t.toLowerCase().includes(query))
      );
      filteredAdvices = filteredAdvices.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.content.toLowerCase().includes(query) ||
          a.tags?.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Filter by season
    if (selectedSeason && selectedSeason !== "tutte") {
      filteredRecipes = filteredRecipes.filter(
        (r) => r.season === selectedSeason || r.season === "tutte"
      );
      filteredAdvices = filteredAdvices.filter(
        (a) => a.season === selectedSeason || a.season === "tutte"
      );
    }

    // Filter by difficulty
    if (selectedDifficulty && selectedDifficulty !== "tutte") {
      filteredRecipes = filteredRecipes.filter(
        (r) => r.difficulty === selectedDifficulty
      );
      filteredAdvices = filteredAdvices.filter(
        (a) => a.difficulty === selectedDifficulty
      );
    }

    // Filter by tab
    if (activeTab === "ricette") {
      filteredAdvices = [];
    } else if (activeTab === "casa") {
      filteredRecipes = [];
      filteredAdvices = filteredAdvices.filter((a) => a.category === "casa");
    } else if (activeTab === "orto") {
      filteredRecipes = [];
      filteredAdvices = filteredAdvices.filter((a) => a.category === "orto");
    } else if (activeTab === "giardino") {
      filteredRecipes = [];
      filteredAdvices = filteredAdvices.filter(
        (a) => a.category === "giardino" || a.category === "piante"
      );
    }

    return { recipes: filteredRecipes, advices: filteredAdvices };
  }, [recipes, advices, searchQuery, selectedSeason, selectedDifficulty, activeTab]);

  const totalResults = filteredData.recipes.length + filteredData.advices.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Compatto */}
      <div className="bg-background border-b">
        <div className="container max-w-6xl mx-auto px-4 py-3">
          {/* Titolo e Badge */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <h1 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide" data-testid="text-page-title">
              Almanacco Pratico
            </h1>
            <Badge variant="outline" className="gap-1 px-2 py-1 shrink-0">
              <Sparkles className="h-3 w-3" />
              <span className="hidden sm:inline text-xs">Tradizione</span>
            </Badge>
          </div>

          {/* Search e Filtri */}
          <div className="flex flex-col sm:flex-row gap-2 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cerca..."
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

            <Select value={selectedSeason} onValueChange={setSelectedSeason}>
              <SelectTrigger className="w-full sm:w-[140px]" data-testid="select-season">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tutte">Tutte</SelectItem>
                <SelectItem value="primavera">Primavera</SelectItem>
                <SelectItem value="estate">Estate</SelectItem>
                <SelectItem value="autunno">Autunno</SelectItem>
                <SelectItem value="inverno">Inverno</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full sm:w-[140px]" data-testid="select-difficulty">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tutte">Tutte</SelectItem>
                <SelectItem value="facile">Facile</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="difficile">Difficile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            <Button
              variant={activeTab === "tutte" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("tutte")}
              className="gap-1 whitespace-nowrap"
              data-testid="tab-tutte"
            >
              <BookOpen className="h-4 w-4" />
              Tutto
            </Button>
            <Button
              variant={activeTab === "ricette" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("ricette")}
              className="gap-1 whitespace-nowrap"
              data-testid="tab-ricette"
            >
              <ChefHat className="h-4 w-4" />
              Ricette
            </Button>
            <Button
              variant={activeTab === "casa" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("casa")}
              className="gap-1 whitespace-nowrap"
              data-testid="tab-casa"
            >
              <Home className="h-4 w-4" />
              Casa
            </Button>
            <Button
              variant={activeTab === "orto" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("orto")}
              className="gap-1 whitespace-nowrap"
              data-testid="tab-orto"
            >
              <Sprout className="h-4 w-4" />
              Orto
            </Button>
            <Button
              variant={activeTab === "giardino" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("giardino")}
              className="gap-1 whitespace-nowrap"
              data-testid="tab-giardino"
            >
              <Flower2 className="h-4 w-4" />
              Giardino
            </Button>
            <div className="flex-1 flex items-center justify-end shrink-0">
              <p className="text-xs text-muted-foreground whitespace-nowrap" data-testid="text-results-count">
                {totalResults} {totalResults === 1 ? "risultato" : "risultati"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container max-w-6xl mx-auto px-4 py-6">
        {totalResults === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-muted-foreground space-y-2">
              <Search className="h-12 w-12 mx-auto opacity-50" />
              <p className="font-medium">Nessun risultato trovato</p>
              <p className="text-sm">Prova a modificare i filtri o la ricerca</p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Recipe Cards */}
            {filteredData.recipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                onClick={() => setSelectedRecipe(recipe)}
                data-testid={`card-recipe-${recipe.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <ChefHat className="h-16 w-16 text-primary/20 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-2 right-2 gap-1">
                    <Calendar className="h-3 w-3" />
                    {recipeCategoryLabels[recipe.category]}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-serif font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {recipe.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {recipe.prepTime + recipe.cookTime}min
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {recipe.servings}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {seasonLabels[recipe.season]}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {difficultyLabels[recipe.difficulty]}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Advice Cards */}
            {filteredData.advices.map((advice) => {
              const CategoryIcon =
                advice.category === "casa"
                  ? Home
                  : advice.category === "orto"
                  ? Sprout
                  : advice.category === "giardino"
                  ? Flower2
                  : Leaf;

              return (
                <Card
                  key={advice.id}
                  className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
                  onClick={() => setSelectedAdvice(advice)}
                  data-testid={`card-advice-${advice.id}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center relative overflow-hidden">
                    <CategoryIcon className="h-16 w-16 text-accent/30 group-hover:scale-110 transition-transform" />
                    <Badge className="absolute top-2 right-2 gap-1">
                      {adviceCategoryLabels[advice.category]}
                    </Badge>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="font-serif font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {advice.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mt-1">
                        {advice.content}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {seasonLabels[advice.season]}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {difficultyLabels[advice.difficulty]}
                      </Badge>
                      {advice.lunarPhase && (
                        <Badge variant="outline" className="text-xs">
                          Luna {advice.lunarPhase}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Recipe Detail Dialog */}
      {selectedRecipe && (
        <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="space-y-2">
                <DialogTitle className="font-serif text-3xl">{selectedRecipe.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedRecipe.description}
                </DialogDescription>
                <div className="flex gap-2 flex-wrap pt-2">
                  <Badge className="gap-1">
                    <Calendar className="h-3 w-3" />
                    {recipeCategoryLabels[selectedRecipe.category]}
                  </Badge>
                  <Badge variant="secondary">{seasonLabels[selectedRecipe.season]}</Badge>
                  <Badge variant="outline">{difficultyLabels[selectedRecipe.difficulty]}</Badge>
                  {selectedRecipe.region && <Badge variant="outline">{selectedRecipe.region}</Badge>}
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              {/* Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <Clock className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Preparazione</p>
                  <p className="text-xs text-muted-foreground">{selectedRecipe.prepTime} min</p>
                </div>
                <div className="space-y-1">
                  <Clock className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Cottura</p>
                  <p className="text-xs text-muted-foreground">{selectedRecipe.cookTime} min</p>
                </div>
                <div className="space-y-1">
                  <Users className="h-5 w-5 mx-auto text-muted-foreground" />
                  <p className="text-sm font-medium">Porzioni</p>
                  <p className="text-xs text-muted-foreground">{selectedRecipe.servings}</p>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="font-serif font-semibold text-xl mb-3">Ingredienti</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <span className="font-medium">{ing.quantity}</span> {ing.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h3 className="font-serif font-semibold text-xl mb-3">Procedimento</h3>
                <ol className="space-y-4">
                  {selectedRecipe.steps.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                      <p className="text-sm flex-1 pt-1">{step.instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Traditional Note */}
              {selectedRecipe.traditionalNote && (
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                      Nota Tradizionale
                    </p>
                    <p className="text-sm">{selectedRecipe.traditionalNote}</p>
                  </CardContent>
                </Card>
              )}

              {/* Liturgical Note */}
              {selectedRecipe.liturgicalNote && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                      Significato Liturgico
                    </p>
                    <p className="text-sm">{selectedRecipe.liturgicalNote}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Advice Detail Dialog */}
      {selectedAdvice && (
        <Dialog open={!!selectedAdvice} onOpenChange={() => setSelectedAdvice(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="space-y-2">
                <DialogTitle className="font-serif text-3xl">{selectedAdvice.title}</DialogTitle>
                <div className="flex gap-2 flex-wrap pt-2">
                  <Badge>{adviceCategoryLabels[selectedAdvice.category]}</Badge>
                  <Badge variant="secondary">{seasonLabels[selectedAdvice.season]}</Badge>
                  <Badge variant="outline">{difficultyLabels[selectedAdvice.difficulty]}</Badge>
                  {selectedAdvice.lunarPhase && (
                    <Badge variant="outline">Luna {selectedAdvice.lunarPhase}</Badge>
                  )}
                  {selectedAdvice.month && (
                    <Badge variant="outline">
                      {new Date(2000, selectedAdvice.month - 1).toLocaleDateString("it-IT", {
                        month: "long",
                      })}
                    </Badge>
                  )}
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4 pt-4">
              <div className="prose prose-sm max-w-none">
                <p className="text-base leading-relaxed whitespace-pre-wrap">{selectedAdvice.content}</p>
              </div>

              {selectedAdvice.tags && selectedAdvice.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap pt-4 border-t">
                  {selectedAdvice.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
