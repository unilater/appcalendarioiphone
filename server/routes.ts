import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  liturgiaSchema, 
  naturaSchema,
  reflectionSchema,
  practicalTipSchema,
  dailyRecipePreviewSchema,
  eventSchema,
  astronomySnapshotSchema,
  weatherSnapshotSchema,
  insightSchema,
  saintSchema,
  prayerSchema,
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/liturgy/range", async (req, res) => {
    try {
      const start = req.query.start as string;
      const end = req.query.end as string;
      
      if (!start || !end) {
        return res.status(400).json({ 
          error: "Parametri 'start' e 'end' obbligatori (formato YYYY-MM-DD)" 
        });
      }

      const startDate = new Date(start + 'T00:00:00');
      const endDate = new Date(end + 'T00:00:00');
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return res.status(400).json({ 
          error: "Date non valide. Usa formato YYYY-MM-DD" 
        });
      }

      if (startDate > endDate) {
        return res.status(400).json({ 
          error: "La data di inizio deve essere precedente o uguale alla data di fine" 
        });
      }

      const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff > 30) {
        return res.status(400).json({ 
          error: "Il range massimo è di 30 giorni" 
        });
      }

      const promises = [];
      const currentDate = new Date(startDate);
      
      while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        promises.push(
          fetch(`https://calendariodellafede.it/api/liturgia.php?date=${dateStr}`)
            .then(async (response) => {
              if (!response.ok) {
                console.warn(`Fetch fallita per ${dateStr}, status: ${response.status}`);
                return null;
              }
              const data = await response.json();
              try {
                return liturgiaSchema.parse(data);
              } catch (parseError) {
                console.warn(`Parse fallito per ${dateStr}:`, parseError);
                return null;
              }
            })
            .catch(error => {
              console.warn(`Errore fetch per ${dateStr}:`, error.message);
              return null;
            })
        );
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const results = await Promise.all(promises);
      const validResults = results.filter(r => r !== null);
      
      if (validResults.length === 0) {
        return res.status(503).json({ 
          error: "Nessun dato liturgico disponibile per il periodo richiesto" 
        });
      }
      
      res.json(validResults);
    } catch (error: any) {
      console.error("Errore API liturgy/range:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/liturgy/:date", async (req, res) => {
    try {
      const date = req.params.date || new Date().toISOString().split('T')[0];
      
      const response = await fetch(`https://calendariodellafede.it/api/liturgia.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({ 
          error: "Errore nel recupero dei dati liturgici" 
        });
      }

      const data = await response.json();
      const validated = liturgiaSchema.parse(data);
      
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API liturgia/:date:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/liturgy", async (req, res) => {
    try {
      const date = (req.query.date as string) || new Date().toISOString().split('T')[0];
      
      const response = await fetch(`https://calendariodellafede.it/api/liturgia.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({ 
          error: "Errore nel recupero dei dati liturgici" 
        });
      }

      const data = await response.json();
      const validated = liturgiaSchema.parse(data);
      
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API liturgia:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/nature", async (req, res) => {
    try {
      const date = (req.query.date as string) || new Date().toISOString().split('T')[0];
      
      const response = await fetch(`https://calendariodellafede.it/api/natura.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({ 
          error: "Errore nel recupero dei consigli sulla natura" 
        });
      }

      const data = await response.json();
      const validated = naturaSchema.parse(data);
      
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API natura:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  // Almanacco Pratico - Ricette & Consigli
  const { recipes, advices } = await import("./data/almanac");

  app.get("/api/recipes", (req, res) => {
    try {
      let filtered = [...recipes];
      
      const { category, season, difficulty, search } = req.query;
      
      if (category && typeof category === 'string') {
        filtered = filtered.filter(r => r.category === category);
      }
      
      if (season && typeof season === 'string') {
        filtered = filtered.filter(r => r.season === season || r.season === 'tutte');
      }
      
      if (difficulty && typeof difficulty === 'string') {
        filtered = filtered.filter(r => r.difficulty === difficulty);
      }
      
      if (search && typeof search === 'string') {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(r => 
          r.name.toLowerCase().includes(searchLower) ||
          r.description.toLowerCase().includes(searchLower) ||
          r.tags?.some(t => t.toLowerCase().includes(searchLower))
        );
      }
      
      res.json(filtered);
    } catch (error: any) {
      console.error("Errore API recipes:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/recipes/:id", (req, res) => {
    try {
      const recipe = recipes.find(r => r.id === req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: "Ricetta non trovata" });
      }
      res.json(recipe);
    } catch (error: any) {
      console.error("Errore API recipe:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/advice", (req, res) => {
    try {
      let filtered = [...advices];
      
      const { category, season, difficulty, search, month } = req.query;
      
      if (category && typeof category === 'string') {
        filtered = filtered.filter(a => a.category === category);
      }
      
      if (season && typeof season === 'string') {
        filtered = filtered.filter(a => a.season === season || a.season === 'tutte');
      }
      
      if (difficulty && typeof difficulty === 'string') {
        filtered = filtered.filter(a => a.difficulty === difficulty);
      }
      
      if (month && typeof month === 'string') {
        const monthNum = parseInt(month);
        if (!isNaN(monthNum)) {
          filtered = filtered.filter(a => !a.month || a.month === monthNum);
        }
      }
      
      if (search && typeof search === 'string') {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(a => 
          a.title.toLowerCase().includes(searchLower) ||
          a.content.toLowerCase().includes(searchLower) ||
          a.tags?.some(t => t.toLowerCase().includes(searchLower))
        );
      }
      
      res.json(filtered);
    } catch (error: any) {
      console.error("Errore API advice:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/advice/:id", (req, res) => {
    try {
      const advice = advices.find(a => a.id === req.params.id);
      if (!advice) {
        return res.status(404).json({ error: "Consiglio non trovato" });
      }
      res.json(advice);
    } catch (error: any) {
      console.error("Errore API advice:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });

  // Homepage - Nuove API usando storage interface
  app.get("/api/reflection/today", async (req, res) => {
    try {
      const reflection = await storage.getReflectionToday();
      if (!reflection) {
        return res.status(404).json({ error: "Riflessione non disponibile" });
      }
      const validated = reflectionSchema.parse(reflection);
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API reflection:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/tips/today", async (req, res) => {
    try {
      const tips = await storage.getTipsToday();
      const validated = tips.map(tip => practicalTipSchema.parse(tip));
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API tips:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/recipe-of-day", async (req, res) => {
    try {
      const recipePreview = await storage.getRecipeOfDay();
      if (!recipePreview) {
        return res.status(404).json({ error: "Ricetta del giorno non disponibile" });
      }
      const validated = dailyRecipePreviewSchema.parse(recipePreview);
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API recipe-of-day:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/events", async (req, res) => {
    try {
      const { type } = req.query;
      
      let events = await storage.getEvents();
      
      if (type && typeof type === 'string') {
        events = events.filter(e => e.type === type);
      }
      
      const validated = events.map(event => eventSchema.parse(event));
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API events:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/astronomy", async (req, res) => {
    try {
      const astronomy = await storage.getAstronomy();
      if (!astronomy) {
        return res.status(404).json({ error: "Dati astronomici non disponibili" });
      }
      const validated = astronomySnapshotSchema.parse(astronomy);
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API astronomy:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/weather", async (req, res) => {
    try {
      const weather = await storage.getWeather();
      if (!weather) {
        return res.status(404).json({ error: "Dati meteo non disponibili" });
      }
      const validated = weatherSnapshotSchema.parse(weather);
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API weather:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/insights", async (req, res) => {
    try {
      const insights = await storage.getInsights();
      const validated = insights.map(insight => insightSchema.parse(insight));
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API insights:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/saint/today", async (req, res) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const saint = {
        id: `saint-${today}`,
        date: today,
        name: "San Francesco di Sales",
        title: "Vescovo e Dottore della Chiesa",
        biography: `Francesco di Sales nacque nel castello di Sales, vicino ad Annecy, in Savoia, il 21 agosto 1567. Destinato dal padre alla carriera forense, si laureò in diritto a Padova, ma sentì la vocazione al sacerdozio.

Ordinato sacerdote nel 1593, si dedicò con passione alla predicazione e alla conversione dei calvinisti nel Chiablese, in condizioni estremamente difficili e pericolose. Il suo metodo apostolico si basava sulla dolcezza, la pazienza e l'amore, rinunciando alla violenza e alla polemica.

Nel 1602 fu consacrato vescovo di Ginevra, carica che mantenne fino alla morte. Come vescovo, si distinse per la riforma del clero, la predicazione assidua, la direzione spirituale e la visita alle parrocchie.

È autore di opere spirituali di grande valore, tra cui "Introduzione alla vita devota" (Filotea) e "Trattato dell'amor di Dio". In questi scritti promuove una spiritualità accessibile a tutti i cristiani, non solo ai religiosi, insegnando che la santità è possibile in ogni stato di vita.

Nel 1610, insieme a santa Giovanna Francesca di Chantal, fondò l'Ordine della Visitazione, un istituto religioso femminile dedicato all'assistenza dei malati e all'educazione.

Morì a Lione il 28 dicembre 1622. Fu beatificato nel 1661 e canonizzato nel 1665. Nel 1877 fu proclamato Dottore della Chiesa. È patrono dei giornalisti e degli scrittori cattolici.`,
        excerpt: "Vescovo e Dottore della Chiesa, maestro di dolcezza e vita spirituale. Fondatore dell'Ordine della Visitazione, autore della Filotea.",
        feast: "24 gennaio",
        patronOf: ["Giornalisti", "Scrittori", "Sordi"],
        attributes: ["Mitria vescovile", "Libro", "Cuore fiammeggiante"],
        quotes: [
          {
            text: "Più si raccolgono mosche con un cucchiaino di miele che con un barile di aceto.",
            source: "Introduzione alla vita devota"
          },
          {
            text: "Non temere quello che potrà accadere domani. Lo stesso Padre celeste che si prende cura di te oggi, si prenderà cura di te domani e sempre.",
          },
          {
            text: "Abbiate pazienza con tutti, ma soprattutto con voi stessi.",
            source: "Lettere spirituali"
          }
        ],
        liturgicalNote: "La memoria di San Francesco di Sales cade il 24 gennaio, data della sua morte avvenuta a Lione nel 1622.",
        lifeYears: "1567 - 1622",
        canonizationDate: "1665",
      };
      
      const validated = saintSchema.parse(saint);
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API saint/today:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  app.get("/api/prayers", async (req, res) => {
    try {
      const prayers = [
        {
          id: "padre-nostro",
          title: "Padre Nostro",
          category: "tradizionali",
          text: `Padre nostro che sei nei cieli,
sia santificato il tuo nome,
venga il tuo regno,
sia fatta la tua volontà
come in cielo così in terra.

Dacci oggi il nostro pane quotidiano,
e rimetti a noi i nostri debiti
come anche noi li rimettiamo ai nostri debitori,
e non abbandonarci alla tentazione,
ma liberaci dal male.

Amen.`,
          latinText: `Pater noster, qui es in caelis,
sanctificetur nomen tuum.
Adveniat regnum tuum.
Fiat voluntas tua,
sicut in caelo et in terra.

Panem nostrum quotidianum da nobis hodie,
et dimitte nobis debita nostra
sicut et nos dimittimus debitoribus nostris.
Et ne nos inducas in tentationem,
sed libera nos a malo.

Amen.`,
          author: "Gesù Cristo",
          source: "Vangelo di Matteo 6,9-13",
          notes: "La preghiera insegnata da Gesù ai suoi discepoli. È la preghiera cristiana per eccellenza.",
          tags: ["fondamentale", "gesù", "vangelo"]
        },
        {
          id: "ave-maria",
          title: "Ave Maria",
          category: "mariane",
          text: `Ave, o Maria, piena di grazia,
il Signore è con te.
Tu sei benedetta fra le donne
e benedetto è il frutto del tuo seno, Gesù.

Santa Maria, Madre di Dio,
prega per noi peccatori,
adesso e nell'ora della nostra morte.

Amen.`,
          latinText: `Ave Maria, gratia plena,
Dominus tecum.
Benedicta tu in mulieribus,
et benedictus fructus ventris tui, Jesus.

Sancta Maria, Mater Dei,
ora pro nobis peccatoribus,
nunc et in hora mortis nostrae.

Amen.`,
          source: "Vangelo di Luca 1,28.42",
          notes: "Preghiera mariana che riprende il saluto dell'angelo Gabriele a Maria.",
          tags: ["maria", "rosario", "fondamentale"]
        },
        {
          id: "gloria-al-padre",
          title: "Gloria al Padre",
          category: "tradizionali",
          text: `Gloria al Padre
e al Figlio
e allo Spirito Santo.

Come era nel principio, e ora e sempre
nei secoli dei secoli.

Amen.`,
          latinText: `Gloria Patri
et Filio
et Spiritui Sancto.

Sicut erat in principio, et nunc et semper
et in saecula saeculorum.

Amen.`,
          notes: "Dossologia minore, preghiera di lode alla Santissima Trinità.",
          tags: ["trinità", "lode", "liturgia"]
        },
        {
          id: "angelo-di-dio",
          title: "Angelo di Dio",
          category: "tradizionali",
          text: `Angelo di Dio,
che sei il mio custode,
illumina, custodisci,
reggi e governa me,
che ti fui affidato
dalla pietà celeste.

Amen.`,
          latinText: `Angele Dei,
qui custos es mei,
me, tibi commissum pietate superna,
illumina, custodi,
rege et guberna.

Amen.`,
          notes: "Preghiera all'Angelo Custode, tradizionalmente recitata al mattino e alla sera.",
          tags: ["angelo custode", "protezione"]
        },
        {
          id: "angelus",
          title: "Angelus Domini",
          category: "angelus",
          occasion: "Mezzogiorno e sera",
          text: `V. L'Angelo del Signore portò l'annuncio a Maria.
R. Ed ella concepì per opera dello Spirito Santo.

Ave Maria...

V. Eccomi, sono la serva del Signore.
R. Si compia in me la tua parola.

Ave Maria...

V. E il Verbo si fece carne.
R. E venne ad abitare in mezzo a noi.

Ave Maria...

V. Prega per noi, santa Madre di Dio.
R. Perché siamo resi degni delle promesse di Cristo.

Preghiamo:
Infondi nel nostro spirito la tua grazia, o Padre;
tu, che nell'annunzio dell'angelo
ci hai rivelato l'incarnazione del tuo Figlio,
per la sua passione e la sua croce
guidaci alla gloria della risurrezione.
Per Cristo nostro Signore.

Amen.`,
          notes: "Preghiera tradizionale recitata tre volte al giorno (mattino, mezzogiorno, sera) al suono delle campane.",
          tags: ["maria", "incarnazione", "tradizione"]
        },
        {
          id: "preghiera-mattino",
          title: "Preghiera del Mattino",
          category: "mattino",
          text: `Ti adoro, mio Dio,
e ti amo con tutto il cuore.
Ti ringrazio di avermi creato,
fatto cristiano e conservato in questa notte.

Ti offro le azioni della giornata:
fa' che siano tutte secondo la tua santa volontà
per la maggior tua gloria.

Preservami dal peccato
e da ogni male.

La tua grazia sia sempre con me
e con tutti i miei cari.

Amen.`,
          occasion: "Al risveglio",
          notes: "Preghiera di offerta della giornata al Signore.",
          tags: ["mattino", "offerta", "quotidiano"]
        },
        {
          id: "preghiera-sera",
          title: "Preghiera della Sera",
          category: "sera",
          text: `Ti adoro, mio Dio,
e ti amo con tutto il cuore.
Ti ringrazio di avermi creato,
fatto cristiano e conservato in questo giorno.

Perdonami il male oggi commesso
e se qualche bene ho compiuto,
accettalo.

Custodiscimi nel riposo
e liberami dai pericoli.

La tua grazia sia sempre con me
e con tutti i miei cari.

Amen.`,
          occasion: "Prima del riposo",
          notes: "Preghiera di ringraziamento e affidamento per la notte.",
          tags: ["sera", "esame", "perdono", "riposo"]
        },
        {
          id: "credo",
          title: "Credo",
          category: "tradizionali",
          subcategory: "Simbolo Apostolico",
          text: `Io credo in Dio, Padre onnipotente,
creatore del cielo e della terra;

e in Gesù Cristo, suo unico Figlio, nostro Signore,
il quale fu concepito di Spirito Santo,
nacque da Maria Vergine,
patì sotto Ponzio Pilato,
fu crocifisso, morì e fu sepolto;
discese agli inferi;
il terzo giorno risuscitò da morte;
salì al cielo,
siede alla destra di Dio Padre onnipotente;
di là verrà a giudicare i vivi e i morti.

Credo nello Spirito Santo,
la santa Chiesa cattolica,
la comunione dei santi,
la remissione dei peccati,
la risurrezione della carne,
la vita eterna.

Amen.`,
          latinText: `Credo in Deum Patrem omnipotentem,
Creatorem caeli et terrae,

et in Iesum Christum, Filium Eius unicum, Dominum nostrum,
qui conceptus est de Spiritu Sancto,
natus ex Maria Virgine,
passus sub Pontio Pilato,
crucifixus, mortuus, et sepultus,
descendit ad inferos,
tertia die resurrexit a mortuis,
ascendit ad caelos,
sedet ad dexteram Dei Patris omnipotentis,
inde venturus est iudicare vivos et mortuos.

Credo in Spiritum Sanctum,
sanctam Ecclesiam catholicam,
sanctorum communionem,
remissionem peccatorum,
carnis resurrectionem,
vitam aeternam.

Amen.`,
          notes: "Simbolo degli Apostoli, professione di fede della Chiesa cristiana.",
          tags: ["fede", "credo", "fondamentale", "liturgia"]
        },
        {
          id: "salve-regina",
          title: "Salve Regina",
          category: "mariane",
          text: `Salve, Regina,
Madre di misericordia,
vita, dolcezza e speranza nostra, salve.

A te ricorriamo, esuli figli di Eva;
a te sospiriamo, gementi e piangenti
in questa valle di lacrime.

Orsù dunque, avvocata nostra,
rivolgi a noi gli occhi tuoi misericordiosi.
E mostraci, dopo questo esilio, Gesù,
il frutto benedetto del tuo seno.

O clemente, o pia, o dolce Vergine Maria.`,
          latinText: `Salve, Regina,
Mater misericordiae,
vita, dulcedo et spes nostra, salve.

Ad te clamamus, exsules filii Evae.
Ad te suspiramus, gementes et flentes
in hac lacrimarum valle.

Eia ergo, advocata nostra,
illos tuos misericordes oculos ad nos converte.
Et Iesum, benedictum fructum ventris tui,
nobis post hoc exsilium ostende.

O clemens, o pia, o dulcis Virgo Maria.`,
          author: "Ermanno di Reichenau (attribuita)",
          occasion: "Tempo Ordinario, dopo Compieta",
          notes: "Una delle quattro antifone mariane maggiori, tradizionalmente cantata dopo Compieta.",
          tags: ["maria", "antifona", "medievale"]
        },
        {
          id: "anima-christi",
          title: "Anima Christi",
          category: "sacramenti",
          subcategory: "Dopo la Comunione",
          text: `Anima di Cristo, santificami.
Corpo di Cristo, salvami.
Sangue di Cristo, inebriami.
Acqua del costato di Cristo, lavami.
Passione di Cristo, confortami.

O buon Gesù, esaudiscimi.
Nelle tue piaghe, nascondimi.
Non permettere che io mi separi da te.
Dal nemico maligno, difendimi.
Nell'ora della mia morte, chiamami
e comandami di venire a te,
perché con i tuoi santi ti lodi
nei secoli dei secoli.

Amen.`,
          latinText: `Anima Christi, sanctifica me.
Corpus Christi, salva me.
Sanguis Christi, inebria me.
Aqua lateris Christi, lava me.
Passio Christi, conforta me.

O bone Jesu, exaudi me.
Intra tua vulnera absconde me.
Ne permittas me separari a te.
Ab hoste maligno defende me.
In hora mortis meae voca me
et iube me venire ad te,
ut cum Sanctis tuis laudem te
in saecula saeculorum.

Amen.`,
          occasion: "Dopo la Comunione eucaristica",
          notes: "Preghiera tradizionalmente recitata dopo aver ricevuto l'Eucaristia, attribuita a Sant'Ignazio di Loyola.",
          tags: ["eucaristia", "comunione", "gesù"]
        }
      ];
      
      const validated = prayers.map(prayer => prayerSchema.parse(prayer));
      res.json(validated);
    } catch (error: any) {
      console.error("Errore API prayers:", error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: "Dati non validi", 
          details: fromZodError(error).toString() 
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
