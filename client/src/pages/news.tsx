import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIChatDialog } from "@/components/AIChatDialog";
import { 
  CheckCircle2, 
  AlertTriangle, 
  FileText,
  Newspaper,
  Sparkles,
  BookOpen,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Insight } from "@shared/schema";
import { useLocation } from "wouter";

export default function News() {
  const [, setLocation] = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<"all" | "verified" | "unverified">("all");
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiChatPrompt, setAiChatPrompt] = useState("");
  const [aiChatContext, setAiChatContext] = useState("");
  
  const { data: insights = [] } = useQuery<Insight[]>({
    queryKey: ["/api/insights"],
  });

  const newsItems = [
    {
      id: 1,
      title: "Papa Francesco incontra i fedeli in Piazza San Pietro",
      excerpt: "Durante l'udienza generale, il Santo Padre ha parlato dell'importanza della preghiera e della misericordia nella vita quotidiana dei cristiani.",
      source: "Vatican News",
      timestamp: "2 ore fa",
      verified: true,
      reliabilityScore: 95,
      sources: [
        { name: "Vatican News", url: "https://www.vaticannews.va", verifiedBy: "Sala Stampa Vaticana" },
        { name: "Avvenire", url: "https://www.avvenire.it", verifiedBy: "CEI" },
        { name: "Catholic News Agency", url: "https://www.catholicnewsagency.com", verifiedBy: "EWTN" }
      ],
      factCheckSummary: "Notizia confermata da fonti ufficiali vaticane. L'udienza generale si è svolta regolarmente alle ore 10:00 in Piazza San Pietro.",
      sourceCredibility: 98,
      sourceIndependence: 3,
      verificationLatency: 15,
      geographicScope: "Vaticano",
      biasAssessment: "Neutrale",
      reviewer: "Mons. Giuseppe Rossi"
    },
    {
      id: 2,
      title: "Nuova iniziativa per il restauro delle chiese storiche",
      excerpt: "La Conferenza Episcopale annuncia un programma di recupero del patrimonio artistico e architettonico delle chiese italiane.",
      source: "Avvenire",
      timestamp: "5 ore fa",
      verified: true,
      reliabilityScore: 88,
      sources: [
        { name: "Avvenire", url: "https://www.avvenire.it", verifiedBy: "CEI" },
        { name: "Comunicato CEI", verifiedBy: "Ufficio Nazionale Beni Culturali" }
      ],
      factCheckSummary: "Confermato dal comunicato ufficiale della CEI. Il programma prevede stanziamenti per 50 milioni di euro nell'arco di 3 anni.",
      sourceCredibility: 92,
      sourceIndependence: 2,
      verificationLatency: 45,
      geographicScope: "Italia",
      biasAssessment: "Neutrale",
      reviewer: "Dott.ssa Maria Bianchi"
    },
    {
      id: 3,
      title: "Pellegrinaggio mariano: migliaia di fedeli a Lourdes",
      excerpt: "Grande partecipazione al pellegrinaggio annuale al santuario della Madonna, con momenti di preghiera e riflessione spirituale.",
      source: "Catholic News",
      timestamp: "1 giorno fa",
      verified: true,
      reliabilityScore: 72,
      sources: [
        { name: "Catholic News", url: "https://www.catholicnews.com" },
        { name: "Sanctuaires de Lourdes", url: "https://www.lourdes-france.org", verifiedBy: "Rettore del Santuario" }
      ],
      factCheckSummary: "Il pellegrinaggio si è svolto come programmato. Il numero esatto di partecipanti è in fase di verifica (stima tra 8.000 e 12.000 pellegrini).",
      sourceCredibility: 78,
      sourceIndependence: 2,
      verificationLatency: 180,
      geographicScope: "Francia",
      biasAssessment: "Neutrale",
      reviewer: "P. Jean Dupont"
    },
    {
      id: 4,
      title: "Celebrazioni liturgiche speciali per l'Avvento",
      excerpt: "Le parrocchie italiane si preparano al tempo di Avvento con messe solenni, adorazioni eucaristiche e momenti di catechesi per tutte le età.",
      source: "Famiglia Cristiana",
      timestamp: "2 giorni fa",
      verified: false,
      reliabilityScore: 65,
      sources: [
        { name: "Famiglia Cristiana", url: "https://www.famigliacristiana.it" }
      ],
      factCheckSummary: "Le informazioni sono generiche e non specifiche. Consigliato verificare con la propria diocesi locale per dettagli sui programmi dell'Avvento.",
      sourceCredibility: 70,
      sourceIndependence: 1,
      verificationLatency: 0,
      geographicScope: "Italia",
      biasAssessment: "Lieve positivo",
      reviewer: "In attesa"
    },
    {
      id: 5,
      title: "Presunto miracolo durante processione: esperti invitano alla cautela",
      excerpt: "Circolano sui social media immagini di un presunto evento miracoloso durante una processione. Gli esperti diocesani invitano a verificare prima di diffondere.",
      source: "Vari social media",
      timestamp: "3 giorni fa",
      verified: false,
      reliabilityScore: 35,
      sources: [
        { name: "Ufficio Diocesano", verifiedBy: "Commissione per i Fenomeni Straordinari" }
      ],
      factCheckSummary: "ATTENZIONE: Nessuna fonte attendibile conferma l'evento. La diocesi locale ha aperto un'inchiesta preliminare. Si invita a non diffondere informazioni non verificate.",
      sourceCredibility: 45,
      sourceIndependence: 1,
      verificationLatency: 0,
      geographicScope: "Italia",
      biasAssessment: "Sensazionalistico",
      reviewer: "Don Marco Verdi"
    }
  ];

  const verifiedNews = newsItems.filter(news => news.verified);
  const needsVerificationNews = newsItems.filter(news => !news.verified);
  
  const filteredNews = selectedFilter === "all" ? newsItems :
    selectedFilter === "verified" ? verifiedNews : needsVerificationNews;

  return (
    <div className="container max-w-4xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 uppercase tracking-wide" data-testid="text-page-title">
              Notizie Cattoliche
            </h1>
            <p className="text-muted-foreground font-serif">
              Notizie verificate dalla comunità monastica • Fonti attendibili
            </p>
          </div>
          <Badge variant="outline" className="gap-2 px-3 py-2 w-fit">
            <Newspaper className="h-4 w-4" />
            <span className="font-semibold">{newsItems.length} notizie</span>
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Mostra:</span>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
                data-testid="filter-all"
              >
                Tutte ({newsItems.length})
              </Button>
              <Button
                variant={selectedFilter === "verified" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("verified")}
                data-testid="filter-verified"
                className="gap-1"
              >
                <CheckCircle2 className="h-3 w-3" />
                <span className="hidden sm:inline">Verificate</span>
                <span className="sm:hidden">Verif.</span>
                <span>({verifiedNews.length})</span>
              </Button>
              <Button
                variant={selectedFilter === "unverified" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("unverified")}
                data-testid="filter-unverified"
                className="gap-1"
              >
                <AlertTriangle className="h-3 w-3" />
                <span className="hidden sm:inline">In revisione</span>
                <span className="sm:hidden">Revisione</span>
                <span>({needsVerificationNews.length})</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <div className="space-y-4">
        {filteredNews.map((news, index) => (
          <div 
            key={news.id}
            className="animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <NewsCard
              title={news.title}
              excerpt={news.excerpt}
              source={news.source}
              timestamp={news.timestamp}
              verified={news.verified}
              reliabilityScore={news.reliabilityScore}
              sources={news.sources}
              factCheckSummary={news.factCheckSummary}
              onClick={() => setLocation(`/news/${news.id}`)}
            />
          </div>
        ))}

        {/* Load More Button */}
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            onClick={() => console.log('Load more news')}
            data-testid="button-load-more"
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            Carica altre notizie
          </Button>
        </div>

        {/* Approfondimenti AI */}
        {insights.length > 0 && (
          <div className="mt-8">
            <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Approfondimenti AI
            </h2>
            <p className="text-muted-foreground mb-6 font-serif">
              Analisi approfondite su magistero, catechismo e diritto canonico. Clicca per approfondire con l'Assistente AI
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {insights.map((insight) => {
                const handleOpenAI = () => {
                  setAiChatPrompt(`Approfondisci questo tema: "${insight.title}". ${insight.summary}`);
                  setAiChatContext(insight.content);
                  setAiChatOpen(true);
                };

                return (<Card 
                  key={insight.id} 
                  className="hover-elevate active-elevate-2 cursor-pointer bg-primary/5 border-primary/20" 
                  onClick={handleOpenAI}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenAI();
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Approfondisci ${insight.title} con AI`}
                  data-testid={`card-insight-${insight.id}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {insight.category === 'teologia' && 'Teologia'}
                        {insight.category === 'spiritualita' && 'Spiritualità'}
                        {insight.category === 'storia' && 'Storia'}
                        {insight.category === 'liturgia' && 'Liturgia'}
                        {insight.category === 'cultura' && 'Cultura'}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(insight.publishedDate).toLocaleDateString('it-IT')}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-lg leading-tight">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 font-serif">
                      {insight.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium">
                        {insight.author}
                      </span>
                      <Button variant="default" size="sm" className="gap-1">
                        <Sparkles className="h-3 w-3" />
                        Approfondisci con AI
                      </Button>
                    </div>
                  </CardContent>
                </Card>);
              })}
            </div>
          </div>
        )}
      </div>

      {/* AI Chat Dialog */}
      <AIChatDialog
        open={aiChatOpen}
        onOpenChange={setAiChatOpen}
        title="Approfondimento AI - Frate Assistente"
        initialPrompt={aiChatPrompt}
        context={aiChatContext}
      />
    </div>
  );
}
