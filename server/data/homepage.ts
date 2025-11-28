import {
  Reflection,
  PracticalTip,
  DailyRecipePreview,
  Event,
  AstronomySnapshot,
  WeatherSnapshot,
  Insight,
} from "@shared/schema";

// Riflessione Spirituale del Giorno
export const dailyReflection: Reflection = {
  id: "refl-20251119",
  date: "2025-11-19",
  title: "La Luce nella Quotidianità",
  excerpt: "Ogni giorno ci offre l'opportunità di vedere la presenza divina nelle piccole cose...",
  body: `In questo tempo ordinario della Chiesa, siamo chiamati a riconoscere il sacro nel quotidiano. Non dobbiamo attendere le grandi feste o i momenti straordinari per incontrare il Signore: Egli è presente nel sorriso di un fratello, nel lavoro delle nostre mani, nel silenzio della preghiera mattutina.

Come ci ricorda San Benedetto nella sua Regola, "l'oziosità è nemica dell'anima". Il lavoro, la preghiera, lo studio - ogni attività può diventare un canto di lode se compiuta con il cuore rivolto a Dio.

Oggi, fermiamoci un momento. Guardiamo con occhi nuovi ciò che ci circonda. Il pane sulla tavola, l'acqua che disseta, il tetto che ci ripara - tutto è dono. Ogni respiro è grazia.

Che possiamo vivere questa giornata non come un peso, ma come un'opportunità di crescita spirituale. Che ogni nostro gesto, anche il più umile, possa essere offerto come preghiera silenziosa.`,
  suggestions: [
    {
      author: "San Benedetto da Norcia",
      text: "Preferire assolutamente nulla all'amore di Cristo.",
      source: "Regola di San Benedetto, Cap. 4",
    },
    {
      author: "Santa Teresa d'Avila",
      text: "Dio cammina tra le pentole e i tegami aiutando sia all'interno che all'esterno.",
      source: "Libro della Vita",
    },
    {
      author: "Beato Charles de Foucauld",
      text: "La santità consiste nel fare la volontà di Dio, qualunque essa sia, sempre, in tutte le cose.",
    },
  ],
};

// Consigli Pratici del Giorno (Orto, Giardino, Piante)
export const dailyPracticalTips: PracticalTip[] = [
  {
    id: "tip-orto-20251119",
    date: "2025-11-19",
    category: "orto",
    summary: "Semina delle fave sotto la Luna crescente",
    details: `Novembre è il momento ideale per la semina delle fave, soprattutto durante la fase di Luna crescente. Questo legume rustico non teme il freddo e arricchisce il terreno di azoto.

**Come procedere:**
1. Scegli un'area soleggiata dell'orto, possibilmente dove l'anno scorso hai coltivato ortaggi che consumano molto azoto (pomodori, cavoli)
2. Lavora il terreno in profondità, eliminando sassi e radici
3. Traccia solchi profondi 5-7 cm, distanziati 40-50 cm
4. Disponi i semi a 15-20 cm l'uno dall'altro
5. Copri con terra e compatta leggermente
6. Se il clima è molto rigido, proteggi con paglia o tessuto non tessuto

**Nota liturgica:** La tradizione contadina vuole che si semini durante la fase crescente della Luna, ma sempre dopo aver benedetto i semi. Si può recitare una preghiera semplice chiedendo al Signore di benedire il lavoro delle nostre mani.`,
    icon: "Sprout",
    color: "#7A9D6B",
    link: "/almanacco",
  },
  {
    id: "tip-giardino-20251119",
    date: "2025-11-19",
    category: "giardino",
    summary: "Ultima potatura delle rose prima dell'inverno",
    details: `Le rose necessitano di una leggera potatura autunnale per affrontare al meglio l'inverno. Non è la potatura principale (che si farà a febbraio), ma un intervento di preparazione.

**Cosa fare:**
1. Elimina i rami secchi, malati o danneggiati
2. Accorcia i rami più lunghi che potrebbero spezzarsi con la neve
3. Rimuovi le foglie malate cadute alla base per prevenire malattie fungine
4. Non potare drasticamente - l'obiettivo è solo mettere in sicurezza la pianta
5. Raccogli tutti i residui di potatura e non lasciarli sul terreno

**Protezione invernale:**
- Nelle zone con inverni rigidi, proteggi la base con pacciamatura di paglia o foglie
- Per le rose in vaso, spostale vicino a un muro esposto a sud

**Benedizione del giardino:** I monaci cistercensi benedicevano il giardino prima dell'inverno, affidando le piante alla protezione divina durante il riposo vegetativo.`,
    icon: "Flower2",
    color: "#C46448",
    link: "/almanacco",
  },
  {
    id: "tip-piante-20251119",
    date: "2025-11-19",
    category: "piante",
    summary: "Cura delle piante d'appartamento in autunno",
    details: `Con l'arrivo dei primi freddi e l'accensione del riscaldamento, le piante d'appartamento necessitano di attenzioni particolari.

**Gestione dell'umidità:**
1. Il riscaldamento secca l'aria - nebulizza regolarmente le foglie (non i fiori)
2. Raggruppa le piante per creare un microclima umido
3. Usa sottovasi con argilla espansa e acqua (senza toccare il vaso)
4. Allontana le piante dai termosifoni

**Irrigazione:**
- Riduci l'annaffiatura: le piante rallentano la crescita
- Verifica sempre l'umidità del terreno prima di annaffiare
- Usa acqua a temperatura ambiente, mai fredda di frigo

**Pulizia:**
- Pulisci le foglie dalla polvere con un panno umido
- Rimuovi foglie secche o ingiallite
- Controlla la presenza di parassiti (cocciniglia, ragnetto rosso)

**Nota spirituale:** Le piante ci insegnano il ritmo delle stagioni e l'importanza del riposo. Anche noi, nel periodo autunnale della nostra vita spirituale, dobbiamo rallentare per prepararci a nuova crescita.`,
    icon: "Leaf",
    color: "#8B9D7C",
    link: "/almanacco",
  },
];

// Ricetta del Giorno (Preview)
export const dailyRecipePreview: DailyRecipePreview = {
  id: "daily-recipe-20251119",
  date: "2025-11-19",
  title: "Castagnaccio Toscano",
  summary: "Dolce autunnale tradizionale della Toscana, preparato con farina di castagne, perfetto per San Martino",
  recipeId: "castagnaccio-toscano",
  category: "ordinario",
};

// Eventi "Accade Oggi"
export const todayEvents: Event[] = [
  {
    id: "event-oggi-1",
    date: "2025-11-19",
    type: "oggi",
    title: "Sinodo dei Vescovi: pubblicazione documento finale",
    summary: "Il Santo Padre presenta il documento conclusivo del percorso sinodale sulla sinodalità nella Chiesa",
    source: "Vatican News",
  },
  {
    id: "event-oggi-2",
    date: "2025-11-19",
    type: "oggi",
    title: "Beatificazione di testimoni della fede in Albania",
    summary: "Cerimonia di beatificazione per i martiri dell'epoca comunista, testimoni eroici della fede cristiana",
    source: "Agenzia Fides",
  },
  {
    id: "event-oggi-3",
    date: "2025-11-19",
    type: "oggi",
    title: "Convegno nazionale delle Confraternite a Roma",
    summary: "Si conclude il convegno che ha riunito rappresentanti di confraternite da tutta Italia",
    source: "Sir - Agenzia d'Informazione",
  },
];

// Eventi "Accadde Oggi" (Storia)
export const historyEvents: Event[] = [
  {
    id: "event-storia-1",
    date: "2025-11-19",
    type: "storia",
    title: "Consacrazione della Basilica di San Pietro (1626)",
    summary: "Papa Urbano VIII consacrò solennemente la nuova Basilica di San Pietro in Vaticano, dopo 120 anni di costruzione",
    year: 1626,
    source: "Archivi Vaticani",
  },
  {
    id: "event-storia-2",
    date: "2025-11-19",
    type: "storia",
    title: "Santa Elisabetta d'Ungheria (1231)",
    summary: "Morte di Santa Elisabetta d'Ungheria, principessa e terziaria francescana, protettrice dei poveri e degli ammalati",
    year: 1231,
  },
  {
    id: "event-storia-3",
    date: "2025-11-19",
    type: "storia",
    title: "Fondazione dell'Ordine dei Minimi (1436)",
    summary: "San Francesco di Paola fonda l'Ordine dei Minimi in Calabria, dedicato a vita contemplativa e penitenziale",
    year: 1436,
  },
  {
    id: "event-storia-4",
    date: "2025-11-19",
    type: "storia",
    title: "Concilio Vaticano II: Costituzione Dei Verbum (1965)",
    summary: "Promulgazione della Costituzione Dogmatica sulla Divina Rivelazione, documento fondamentale del Concilio",
    year: 1965,
    source: "Acta Apostolicae Sedis",
  },
];

// Astronomia
export const todayAstronomy: AstronomySnapshot = {
  id: "astro-20251119",
  date: "2025-11-19",
  sunrise: "07:12",
  sunset: "16:48",
  moonPhase: "Calante",
  moonIllumination: 68,
  saintNote: "San Martino di Tours: si celebra tradizionalmente l'11 novembre, periodo dell'estate di San Martino",
  liturgicalNote: "Nel periodo autunnale, le ore di luce diminuiscono ricordandoci l'Avvento che si avvicina, tempo di attesa della Luce del mondo.",
};

// Meteo
export const todayWeather: WeatherSnapshot = {
  id: "weather-20251119",
  date: "2025-11-19",
  location: "Roma, Italia",
  conditions: "Parzialmente nuvoloso",
  temperatureMin: 8,
  temperatureMax: 16,
  humidity: 65,
  liturgicalNote: "Il clima mite di novembre ci permette ancora di godere del creato - un invito a rendere grazie per i doni della natura.",
};

// Approfondimenti per pagina News
export const insights: Insight[] = [
  {
    id: "insight-1",
    title: "La Devozione Mariana nel Magistero della Chiesa",
    summary: "Un'analisi approfondita del ruolo della Madonna nel culto cattolico attraverso i documenti del Magistero",
    content: `La devozione mariana è un elemento centrale della spiritualità cattolica, radicata nella Sacra Scrittura e sviluppata attraverso i secoli dalla Tradizione della Chiesa. Il Concilio Vaticano II, nella Costituzione Dogmatica "Lumen Gentium", dedica l'intero capitolo VIII alla Beata Vergine Maria.

San Paolo VI, nell'Esortazione Apostolica "Marialis Cultus" (1974), chiarisce che "il culto alla Beata Vergine Maria è intrinsecamente relativo al culto del divino Salvatore". Maria non è mai fine a se stessa, ma sempre via verso Cristo.

San Giovanni Paolo II ha approfondito ulteriormente questa teologia mariana, definendo Maria come "la via che conduce a Cristo" e sottolineando il suo ruolo di Madre della Chiesa. La sua Enciclica "Redemptoris Mater" (1987) è considerata uno dei documenti più importanti sulla mariologia moderna.`,
    author: "Mons. Carlo Liberati",
    publishedDate: "2025-11-15",
    category: "teologia",
    tags: ["mariologia", "magistero", "devozione"],
  },
  {
    id: "insight-2",
    title: "Storia dei Pellegrinaggi Cristiani",
    summary: "Dalle origini medievali ai grandi cammini di fede contemporanei: l'evoluzione dei pellegrinaggi",
    content: `Il pellegrinaggio è una pratica religiosa antichissima che affonda le sue radici nella tradizione biblica. Già nell'Antico Testamento, il popolo d'Israele compiva pellegrinaggi verso Gerusalemme per le grandi feste.

Nel cristianesimo, i primi pellegrinaggi documentati risalgono al IV secolo, quando Sant'Elena, madre dell'imperatore Costantino, visitò la Terra Santa. Da allora, tre destinazioni principali hanno caratterizzato i pellegrinaggi cristiani: Gerusalemme (luoghi della Passione di Cristo), Roma (tomba di San Pietro), e Santiago de Compostela (sepolcro di San Giacomo).

Nel Medioevo, il pellegrinaggio divenne un fenomeno di massa. I pellegrini percorrevano centinaia di chilometri a piedi, spesso in condizioni difficili, mossi da devozione, penitenza o ricerca spirituale.

Oggi assistiamo a una rinascita dei cammini di fede. Il Cammino di Santiago ha registrato nel 2019 oltre 347.000 pellegrini. Anche in Italia, la Via Francigena sta vivendo un momento di grande popolarità.`,
    author: "Prof.ssa Maria Bianchi",
    publishedDate: "2025-11-12",
    category: "storia",
    tags: ["pellegrinaggi", "storia", "tradizione"],
  },
  {
    id: "insight-3",
    title: "La Preghiera del Cuore nella Tradizione Orientale",
    summary: "Introduzione alla pratica dell'esicasmo e della Preghiera di Gesù secondo i Padri del deserto",
    content: `L'esicasmo (dal greco ἡσυχία, hesychia, "quiete", "pace") è una tradizione spirituale della Chiesa Orientale che enfatizza la preghiera contemplativa e la ricerca della pace interiore attraverso la Preghiera di Gesù.

La Preghiera di Gesù consiste nella ripetizione costante della formula: "Signore Gesù Cristo, Figlio di Dio, abbi pietà di me peccatore". Questa pratica, documentata fin dal V secolo dai Padri del Deserto, mira all'unione continua con Dio attraverso l'invocazione incessante del Nome di Gesù.

I grandi maestri dell'esicasmo, come San Gregorio Palamas (XIV secolo), insegnano che questa preghiera, praticata con sincerità e perseveranza, conduce alla visione della Luce Increata, la stessa luce che illuminò gli Apostoli sul Monte Tabor durante la Trasfigurazione.

San Serafino di Sarov (XVIII secolo) affermava che "lo scopo della vita cristiana è l'acquisizione dello Spirito Santo". La Preghiera del Cuore è considerata uno strumento privilegiato per raggiungere questo obiettivo.`,
    author: "Archimandrita Simone Carusi",
    publishedDate: "2025-11-10",
    category: "spiritualita",
    tags: ["esicasmo", "preghiera", "tradizione orientale"],
  },
  {
    id: "insight-4",
    title: "Il Calendario Liturgico: Struttura e Significato",
    summary: "Come la Chiesa organizza l'anno liturgico per celebrare il mistero di Cristo",
    content: `L'anno liturgico non è una semplice ripetizione ciclica delle festività, ma un percorso spirituale che accompagna i fedeli attraverso i misteri della vita di Cristo. La sua struttura attuale è stata definita dalla Riforma Liturgica seguita al Concilio Vaticano II.

Il ciclo liturgico si compone di due periodi principali: il Tempo di Natale (che include l'Avvento, il Natale e il Tempo Ordinario invernale) e il Tempo di Pasqua (che include la Quaresima, il Triduo Pasquale, la Pasqua e il Tempo Ordinario estivo).

I colori liturgici hanno un significato profondo: il viola per l'Avvento e la Quaresima (penitenza e attesa), il bianco per il Natale e la Pasqua (gioia e purezza), il verde per il Tempo Ordinario (speranza e vita), il rosso per la Passione e lo Spirito Santo (amore e martirio).

La Costituzione "Sacrosanctum Concilium" insegna che "la liturgia è il culmine verso cui tende l'azione della Chiesa e insieme la fonte da cui promana tutta la sua energia".`,
    author: "Don Luca Moretti",
    publishedDate: "2025-11-08",
    category: "liturgia",
    tags: ["calendario liturgico", "anno liturgico", "colori liturgici"],
  },
];
