import AdviceCard from "@/components/AdviceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Flower2, CookingPot, Sprout } from "lucide-react";

export default function Advice() {
  const adviceData = {
    casa: [
      {
        id: 1,
        title: "Pulire i vetri senza aloni",
        content: "Usa una soluzione di acqua e aceto in parti uguali. Asciuga con carta di giornale per un risultato perfetto e senza striature. Il momento migliore è la mattina presto.",
        season: 'Inverno' as const,
        featured: true
      },
      {
        id: 2,
        title: "Profumare gli armadi naturalmente",
        content: "Prepara sacchetti di lavanda essiccata o scorze di agrumi per mantenere un gradevole profumo negli armadi. Cambia ogni 2-3 mesi.",
        season: 'Inverno' as const
      },
      {
        id: 3,
        title: "Eliminare l'umidità",
        content: "Posiziona contenitori con sale grosso negli angoli delle stanze più umide. Il sale assorbe l'umidità in eccesso naturalmente.",
        season: 'Inverno' as const
      }
    ],
    giardino: [
      {
        id: 1,
        title: "Proteggere le rose dal freddo",
        content: "Copri la base delle rose con pacciamatura di corteccia o foglie secche per proteggerle dal gelo invernale. Aggiungi uno strato di almeno 10 cm.",
        season: 'Inverno' as const,
        featured: true
      },
      {
        id: 2,
        title: "Potatura degli alberi da frutto",
        content: "Novembre è il momento ideale per la potatura degli alberi decidui. Elimina i rami secchi e quelli che si incrociano.",
        season: 'Autunno' as const
      },
      {
        id: 3,
        title: "Preparare il terreno",
        content: "Arricchisci il terreno con compost maturo per prepararlo alla stagione primaverile. Lavora il terreno quando non è gelato.",
        season: 'Inverno' as const
      }
    ],
    cucina: [
      {
        id: 1,
        title: "Minestrone di stagione",
        content: "Prepara un minestrone con cavolo, patate, fagioli e carote. Perfetto per le giornate fredde, ricco di nutrienti e sapore. Aggiungi un filo d'olio a crudo.",
        season: 'Inverno' as const,
        featured: true
      },
      {
        id: 2,
        title: "Conservare le castagne",
        content: "Le castagne fresche si conservano in frigorifero per 2-3 settimane. Sbollentale 5 minuti prima di conservarle per prolungarne la durata.",
        season: 'Autunno' as const
      },
      {
        id: 3,
        title: "Tisana digestiva",
        content: "Prepara una tisana con finocchio, menta e limone per favorire la digestione dopo i pasti abbondanti delle feste.",
        season: 'Inverno' as const
      }
    ],
    orto: [
      {
        id: 1,
        title: "Seminare le fave",
        content: "Novembre è il momento ideale per seminare le fave nell'orto. Resisteranno al freddo e saranno pronte in primavera. Distanza: 30 cm tra le file.",
        season: 'Autunno' as const,
        featured: true
      },
      {
        id: 2,
        title: "Proteggere le piantine",
        content: "Usa tunnel di tessuto non tessuto per proteggere le piantine più delicate dalle gelate notturne senza impedire il passaggio di aria e luce.",
        season: 'Inverno' as const
      },
      {
        id: 3,
        title: "Raccogliere i cavoli",
        content: "I cavoli raggiungono la massima dolcezza dopo le prime gelate. Raccoglili al mattino quando sono ancora freschi di rugiada.",
        season: 'Inverno' as const
      }
    ]
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">
          Consigli Pratici
        </h1>
        <p className="text-muted-foreground">
          Suggerimenti per casa, giardino, cucina e orto
        </p>
      </div>

      <Tabs defaultValue="casa" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8" data-testid="tabs-advice-categories">
          <TabsTrigger value="casa" className="flex items-center gap-2" data-testid="tab-casa">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Casa</span>
          </TabsTrigger>
          <TabsTrigger value="giardino" className="flex items-center gap-2" data-testid="tab-giardino">
            <Flower2 className="h-4 w-4" />
            <span className="hidden sm:inline">Giardino</span>
          </TabsTrigger>
          <TabsTrigger value="cucina" className="flex items-center gap-2" data-testid="tab-cucina">
            <CookingPot className="h-4 w-4" />
            <span className="hidden sm:inline">Cucina</span>
          </TabsTrigger>
          <TabsTrigger value="orto" className="flex items-center gap-2" data-testid="tab-orto">
            <Sprout className="h-4 w-4" />
            <span className="hidden sm:inline">Orto</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="casa">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adviceData.casa.map((advice) => (
              <AdviceCard
                key={advice.id}
                title={advice.title}
                content={advice.content}
                category="casa"
                season={advice.season}
                icon={Home}
                featured={advice.featured}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="giardino">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adviceData.giardino.map((advice) => (
              <AdviceCard
                key={advice.id}
                title={advice.title}
                content={advice.content}
                category="giardino"
                season={advice.season}
                icon={Flower2}
                featured={advice.featured}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cucina">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adviceData.cucina.map((advice) => (
              <AdviceCard
                key={advice.id}
                title={advice.title}
                content={advice.content}
                category="cucina"
                season={advice.season}
                icon={CookingPot}
                featured={advice.featured}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adviceData.orto.map((advice) => (
              <AdviceCard
                key={advice.id}
                title={advice.title}
                content={advice.content}
                category="orto"
                season={advice.season}
                icon={Sprout}
                featured={advice.featured}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
