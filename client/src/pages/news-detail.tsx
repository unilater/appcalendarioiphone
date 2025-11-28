import { useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, AlertTriangle, ExternalLink, Calendar, User } from "lucide-react";

export default function NewsDetail() {
  const [, params] = useRoute("/news/:id");
  const [, setLocation] = useLocation();
  const newsId = params?.id ? parseInt(params.id) : null;

  const newsItems = [
    {
      id: 1,
      title: "Papa Francesco incontra i fedeli in Piazza San Pietro",
      excerpt: "Durante l'udienza generale, il Santo Padre ha parlato dell'importanza della preghiera e della misericordia nella vita quotidiana dei cristiani.",
      content: `Durante l'udienza generale di mercoledì, Papa Francesco ha rivolto un intenso messaggio ai fedeli presenti in Piazza San Pietro e a tutti coloro che lo seguivano attraverso i mezzi di comunicazione.

Il Santo Padre ha sottolineato l'importanza della preghiera quotidiana come dialogo intimo con Dio. "La preghiera non è un optional nella vita cristiana", ha affermato il Pontefice, "ma è il respiro dell'anima, il momento in cui riconosciamo la nostra dipendenza dal Padre e la nostra necessità della Sua grazia".

Nel suo discorso, Papa Francesco ha anche parlato della misericordia come cuore del messaggio evangelico. "Dio è sempre pronto a perdonare", ha detto, "è più grande del nostro peccato. Noi dobbiamo avere il coraggio di tornare a Lui, come il figlio prodigo, sapendo che ci attende con le braccia aperte".

Il Pontefice ha concluso invitando tutti i fedeli a vivere la carità concreta verso i più poveri e bisognosi, ricordando che "la fede senza le opere è morta" e che "nel volto del povero incontriamo il volto di Cristo stesso".

L'udienza si è conclusa con la benedizione apostolica impartita a tutti i presenti e alle loro intenzioni di preghiera.`,
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
      author: "Redazione Vatican News",
      date: "19 novembre 2025"
    },
    {
      id: 2,
      title: "Nuova iniziativa per il restauro delle chiese storiche",
      excerpt: "La Conferenza Episcopale annuncia un programma di recupero del patrimonio artistico e architettonico delle chiese italiane.",
      content: `La Conferenza Episcopale Italiana (CEI) ha presentato oggi un ambizioso programma di recupero e valorizzazione del patrimonio artistico e architettonico delle chiese storiche italiane.

Il progetto, denominato "Chiese Aperte", prevede uno stanziamento di 50 milioni di euro nell'arco dei prossimi tre anni, destinati al restauro di edifici di culto di particolare rilevanza storica e artistica.

Il Cardinale Matteo Zuppi, Presidente della CEI, ha spiegato durante la conferenza stampa: "Le nostre chiese sono testimoni di fede e di bellezza. Preservarle significa custodire non solo pietre e affreschi, ma la memoria viva della nostra tradizione cristiana".

Il programma darà priorità agli interventi urgenti su strutture a rischio di degrado e prevede anche attività di formazione per giovani restauratori, in collaborazione con le Soprintendenze e le Università italiane.

Particolare attenzione sarà dedicata alle chiese rurali e di montagna, spesso abbandonate o sottoutilizzate, per renderle nuovamente fruibili alle comunità locali e ai pellegrini.

L'iniziativa include anche un progetto di digitalizzazione del patrimonio, con la creazione di tour virtuali e l'implementazione di strumenti multimediali per la valorizzazione didattica e turistica.`,
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
      author: "Dott.ssa Maria Bianchi",
      date: "19 novembre 2025"
    },
    {
      id: 3,
      title: "Pellegrinaggio mariano: migliaia di fedeli a Lourdes",
      excerpt: "Grande partecipazione al pellegrinaggio annuale al santuario della Madonna, con momenti di preghiera e riflessione spirituale.",
      content: `Si è concluso ieri il pellegrinaggio annuale al santuario di Lourdes, che ha visto la partecipazione di migliaia di fedeli provenienti da tutta Europa.

Il pellegrinaggio, organizzato in collaborazione tra diverse diocesi italiane e francesi, ha offerto ai partecipanti momenti intensi di preghiera, adorazione eucaristica e processioni mariane.

Particolarmente toccante è stata la processione aux flambeaux di venerdì sera, durante la quale i pellegrini hanno percorso il lungo viale del santuario portando candele accese e cantando l'Ave Maria di Lourdes in diverse lingue.

Il Vescovo ausiliare di Parigi, Mons. Philippe Marsset, ha presieduto la celebrazione eucaristica principale, sottolineando nel suo'omelia il messaggio di conversione e speranza che la Madonna ha affidato a Bernadette Soubirous nelle apparizioni del 1858.

Numerosi sono stati i momenti dedicati ai malati e ai disabili, secondo la tradizione del santuario che fin dalle origini ha accolto chi soffre con particolare attenzione e sollecitudine.

Il pellegrinaggio si è concluso con il rinnovo delle promesse battesimali presso la Grotta di Massabielle, luogo delle apparizioni mariane.

Le testimonianze dei pellegrini parlano di un'esperienza di fede profonda e rinnovatrice, che ha permesso a molti di riscoprire la bellezza della preghiera comunitaria e della devozione mariana.`,
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
      author: "P. Jean Dupont",
      date: "18 novembre 2025"
    },
    {
      id: 4,
      title: "Celebrazioni liturgiche speciali per l'Avvento",
      excerpt: "Le parrocchie italiane si preparano al tempo di Avvento con messe solenni, adorazioni eucaristiche e momenti di catechesi per tutte le età.",
      content: `Con l'avvicinarsi della prima domenica di Avvento, le parrocchie italiane si preparano a vivere questo tempo liturgico con un ricco programma di celebrazioni ed eventi spirituali.

L'Avvento, che significa "venuta", è il periodo di quattro settimane che prepara al Natale. Durante questo tempo, i fedeli sono invitati a un cammino di conversione e di attesa vigilante del Signore che viene.

Molte parrocchie hanno organizzato adorazioni eucaristiche settimanali, particolarmente nel giovedì sera, dedicate alla meditazione sulle profezie messianiche dell'Antico Testamento.

Le messe domenicali dell'Avvento saranno arricchite dal canto dei tradizionali inni adventizi e dall'accensione progressiva delle quattro candele della Corona d'Avvento, simbolo della luce di Cristo che viene a illuminare le tenebre del mondo.

Per le famiglie sono previsti momenti di catechesi specifici, con particolare attenzione ai bambini e ai ragazzi. Diverse diocesi hanno preparato sussidi e materiali per aiutare le famiglie a vivere l'Avvento anche in casa, con piccoli gesti quotidiani di preghiera e carità.

Un'attenzione particolare è rivolta anche alle opere di carità: molte parrocchie hanno organizzato raccolte di viveri e indumenti per le famiglie bisognose, ricordando che l'attesa del Natale deve tradursi in gesti concreti di solidarietà.

I parroci invitano tutti i fedeli a riscoprire il senso autentico di questo tempo, evitando di farsi travolgere esclusivamente dall'aspetto consumistico del Natale, ma preparandosi spiritualmente all'incontro con il Dio fatto uomo.`,
      source: "Famiglia Cristiana",
      timestamp: "2 giorni fa",
      verified: false,
      reliabilityScore: 65,
      sources: [
        { name: "Famiglia Cristiana", url: "https://www.famigliacristiana.it" }
      ],
      factCheckSummary: "Le informazioni sono generiche e non specifiche. Consigliato verificare con la propria diocesi locale per dettagli sui programmi dell'Avvento.",
      sourceCredibility: 70,
      author: "Redazione Famiglia Cristiana",
      date: "17 novembre 2025"
    },
    {
      id: 5,
      title: "Presunto miracolo durante processione: esperti invitano alla cautela",
      excerpt: "Circolano sui social media immagini di un presunto evento miracoloso durante una processione. Gli esperti diocesani invitano alla cautela.",
      content: `Negli ultimi giorni hanno iniziato a circolare sui social media immagini e video relativi a un presunto evento miracoloso verificatosi durante una processione religiosa in un paese del Sud Italia.

Le immagini, diventate rapidamente virali, mostrano quello che alcuni testimoni hanno interpretato come un fenomeno straordinario legato a una statua mariana.

Tuttavia, l'Ufficio Diocesano per il Discernimento dei Fenomeni Straordinari ha immediatamente emesso un comunicato invitando i fedeli alla prudenza e al discernimento.

"La Chiesa", si legge nel comunicato, "ha procedure rigorose per l'esame di presunti eventi miracolosi. Occorre evitare conclusioni affrettate basate esclusivamente su testimonianze non verificate o su materiale foto-video che può essere facilmente alterato o mal interpretato".

Esperti in fenomeni ottici hanno suggerito che le immagini potrebbero essere spiegate da normali condizioni di illuminazione e rifrazione della luce, particolarmente in presenza di candele e di superfici riflettenti.

La Diocesi ha annunciato la costituzione di una commissione di esperti, composta da teologi, scienziati e tecnici, che esaminerà con attenzione tutte le testimonianze e il materiale documentale disponibile.

Il Vescovo della diocesi ha invitato i fedeli a "mantenere un atteggiamento di fede serena e razionale. La nostra fede non ha bisogno di miracoli sensazionali per essere solida. Si fonda sulla Risurrezione di Cristo, evento storico verificabile e testimoniato".

Nel frattempo, la parrocchia in cui si è svolta la processione ha registrato un notevole afflusso di visitatori, attratti dalla notizia. Il parroco ha chiesto rispetto e preghiera silenziosa, evitando atteggiamenti di curiosità morbosa.

La Chiesa ricorda che anche quando eventi straordinari vengono riconosciuti come autentici, essi non aggiungono nulla alla Rivelazione definitiva già compiuta in Cristo, ma servono solo a confermare la fede e a stimolare la devozione.`,
      source: "Vatican Insider",
      timestamp: "3 giorni fa",
      verified: false,
      reliabilityScore: 45,
      sources: [
        { name: "Vatican Insider", url: "https://www.lastampa.it/vatican-insider" },
        { name: "Video social media", verifiedBy: "Non verificato" }
      ],
      factCheckSummary: "Evento non confermato. La Diocesi ha aperto un'indagine ufficiale. Gli esperti suggeriscono possibili spiegazioni naturali per il fenomeno osservato.",
      sourceCredibility: 55,
      author: "Giovanni Rossi",
      date: "16 novembre 2025"
    }
  ];

  const news = newsItems.find(n => n.id === newsId);

  if (!newsId || isNaN(newsId) || !news) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardContent className="pt-6 text-center space-y-4">
            <div className="text-destructive">
              <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h2 className="font-serif text-2xl font-bold">Notizia non trovata</h2>
            <p className="text-muted-foreground">
              {!newsId || isNaN(newsId) 
                ? "ID notizia non valido. Controlla l'indirizzo e riprova."
                : "La notizia richiesta non esiste o è stata rimossa."}
            </p>
            <div className="flex gap-3 justify-center">
              <Button 
                variant="outline" 
                onClick={() => window.history.length > 1 ? window.history.back() : setLocation("/news")}
                data-testid="button-back"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Indietro
              </Button>
              <Button onClick={() => setLocation("/news")} data-testid="button-to-news">
                Vai alle notizie
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Button
        variant="ghost"
        onClick={() => window.history.length > 1 ? window.history.back() : setLocation("/news")}
        className="mb-6"
        data-testid="button-back"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Torna alle notizie
      </Button>

      <article className="space-y-8">
        {/* Header Section - Distintivo con Background */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
          <CardContent className="pt-8 pb-8 space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={news.verified ? "default" : "secondary"} className="gap-1">
                {news.verified ? (
                  <>
                    <CheckCircle2 className="h-3 w-3" />
                    Verificata
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-3 w-3" />
                    Non verificata
                  </>
                )}
              </Badge>
              <Badge variant="outline" className="gap-1">
                Affidabilità: {news.reliabilityScore}%
              </Badge>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight" data-testid="text-news-title">
              {news.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span className="font-medium">{news.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">{news.date}</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed pt-2">
              {news.excerpt}
            </p>
          </CardContent>
        </Card>

        {/* Fact-Checking Section - Distintivo con Colore Diverso */}
        <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-serif font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Verifica delle Fonti
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="bg-background/60 rounded-lg p-4 border">
              <h3 className="font-bold mb-3 text-base">Riepilogo fact-checking</h3>
              <p className="text-sm leading-relaxed">{news.factCheckSummary}</p>
            </div>
            <div className="bg-background/60 rounded-lg p-4 border">
              <h3 className="font-bold mb-3 text-base">Fonti consultate</h3>
              <ul className="space-y-3">
                {news.sources.map((source, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-3">
                    <ExternalLink className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <div>
                      <span className="font-semibold">{source.name}</span>
                      {source.verifiedBy && (
                        <div className="text-muted-foreground text-xs mt-0.5">
                          Verificato da: {source.verifiedBy}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3 text-sm bg-background/60 rounded-lg p-3 border">
              <span className="font-bold">Credibilità fonti:</span>
              <Badge variant="outline" className="font-bold">{news.sourceCredibility}%</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Content Section - Distintivo */}
        <Card className="border-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-serif font-bold">Articolo Completo</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div 
              className="prose prose-base md:prose-lg max-w-none font-serif leading-relaxed"
              style={{ whiteSpace: 'pre-line' }}
              data-testid="text-news-content"
            >
              {news.content}
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
