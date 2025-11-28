var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/data/almanac.ts
var almanac_exports = {};
__export(almanac_exports, {
  advices: () => advices,
  recipes: () => recipes
});
var recipes, advices;
var init_almanac = __esm({
  "server/data/almanac.ts"() {
    "use strict";
    recipes = [
      {
        id: "panettone-natale",
        name: "Panettone Tradizionale Milanese",
        description: "Il dolce natalizio per eccellenza, preparato secondo l'antica tradizione monastica lombarda",
        category: "natale",
        season: "inverno",
        difficulty: "difficile",
        prepTime: 180,
        cookTime: 60,
        servings: 12,
        ingredients: [
          { quantity: "500g", name: "Farina Manitoba" },
          { quantity: "200g", name: "Zucchero" },
          { quantity: "250g", name: "Burro" },
          { quantity: "5", name: "Uova" },
          { quantity: "200g", name: "Uvetta sultanina" },
          { quantity: "150g", name: "Canditi misti" },
          { quantity: "25g", name: "Lievito madre" },
          { quantity: "1", name: "Scorza di limone e arancia" },
          { quantity: "q.b.", name: "Vaniglia" }
        ],
        steps: [
          { step: 1, instruction: "Rinfrescare il lievito madre e lasciarlo lievitare per 4 ore in luogo tiepido" },
          { step: 2, instruction: "Preparare il primo impasto con farina, lievito, uova e burro morbido" },
          { step: 3, instruction: "Lasciar lievitare 12 ore coperto con un panno umido" },
          { step: 4, instruction: "Aggiungere lo zucchero, le uova restanti e impastare" },
          { step: 5, instruction: "Incorporare uvetta ammollata, canditi e scorze grattugiate" },
          { step: 6, instruction: "Formare la pagnotta e metterla nello stampo da panettone" },
          { step: 7, instruction: "Far lievitare fino al raddoppio (8-10 ore)" },
          { step: 8, instruction: "Incidere a croce la superficie e cuocere a 180\xB0C per 60 minuti" }
        ],
        traditionalNote: "Secondo la tradizione monastica, il panettone va preparato durante l'Avvento come simbolo della dolcezza della nascita di Cristo. I monaci milanesi lo benedicevano la vigilia di Natale.",
        liturgicalNote: "Il panettone si porta a benedire durante la Messa di Natale. La croce incisa sulla superficie ricorda il segno della salvezza.",
        region: "Lombardia",
        tags: ["dolce", "natale", "lievitati", "tradizione milanese"]
      },
      {
        id: "colomba-pasquale",
        name: "Colomba Pasquale Artigianale",
        description: "Il dolce pasquale simbolo dello Spirito Santo e della resurrezione",
        category: "pasqua",
        season: "primavera",
        difficulty: "difficile",
        prepTime: 240,
        cookTime: 45,
        servings: 10,
        ingredients: [
          { quantity: "500g", name: "Farina 00" },
          { quantity: "200g", name: "Zucchero" },
          { quantity: "200g", name: "Burro" },
          { quantity: "5", name: "Uova" },
          { quantity: "150g", name: "Canditi d'arancia" },
          { quantity: "20g", name: "Lievito di birra" },
          { quantity: "100g", name: "Mandorle per glassa" },
          { quantity: "q.b.", name: "Scorza d'arancia" }
        ],
        steps: [
          { step: 1, instruction: "Sciogliere il lievito in acqua tiepida con un cucchiaio di zucchero" },
          { step: 2, instruction: "Impastare farina, uova, zucchero e burro ammorbidito" },
          { step: 3, instruction: "Aggiungere il lievito sciolto e impastare fino a ottenere un impasto liscio" },
          { step: 4, instruction: "Incorporare i canditi e la scorza d'arancia grattugiata" },
          { step: 5, instruction: "Lasciar lievitare 3 ore in luogo tiepido" },
          { step: 6, instruction: "Formare la colomba e adagiarla nello stampo apposito" },
          { step: 7, instruction: "Preparare la glassa con albumi e mandorle, stendere sulla superficie" },
          { step: 8, instruction: "Cuocere a 170\xB0C per 45 minuti coprendo con carta stagnola a met\xE0 cottura" }
        ],
        traditionalNote: "La colomba rappresenta lo Spirito Santo e la pace portata dalla Resurrezione. In molte parrocchie viene benedetta il Sabato Santo.",
        liturgicalNote: "Tradizionalmente si consuma dalla domenica di Pasqua fino all'Ascensione, per prolungare la gioia pasquale in famiglia.",
        region: "Nazionale",
        tags: ["dolce", "pasqua", "lievitati", "simbolismo"]
      },
      {
        id: "quaresimali-fiorentini",
        name: "Quaresimali Fiorentini",
        description: "Biscotti tradizionali della Quaresima, senza grassi animali secondo il precetto del digiuno",
        category: "quaresima",
        season: "primavera",
        difficulty: "facile",
        prepTime: 30,
        cookTime: 20,
        servings: 40,
        ingredients: [
          { quantity: "300g", name: "Farina 00" },
          { quantity: "200g", name: "Zucchero" },
          { quantity: "100g", name: "Cacao amaro" },
          { quantity: "3", name: "Albumi" },
          { quantity: "100ml", name: "Acqua" },
          { quantity: "1 cucchiaino", name: "Cannella" },
          { quantity: "q.b.", name: "Chiodi di garofano macinati" }
        ],
        steps: [
          { step: 1, instruction: "Montare gli albumi a neve fermissima" },
          { step: 2, instruction: "Mescolare farina, cacao, zucchero e spezie" },
          { step: 3, instruction: "Incorporare delicatamente gli albumi agli ingredienti secchi" },
          { step: 4, instruction: "Aggiungere acqua fino a ottenere un impasto morbido" },
          { step: 5, instruction: "Formare bastoncini lunghi circa 8cm" },
          { step: 6, instruction: "Disporre su teglia foderata e cuocere a 180\xB0C per 20 minuti" }
        ],
        traditionalNote: "I quaresimali rispettano il precetto del digiuno quaresimale: niente uova intere n\xE9 burro. Venivano preparati nei conventi fiorentini.",
        liturgicalNote: "Si preparano dal Mercoled\xEC delle Ceneri e si consumano durante tutta la Quaresima come dolce della penitenza gioiosa.",
        region: "Toscana",
        tags: ["biscotti", "quaresima", "digiuno", "fiorentina"]
      },
      {
        id: "zeppole-san-giuseppe",
        name: "Zeppole di San Giuseppe",
        description: "Frittelle tradizionali per la festa del santo patrono dei falegnami e custode della Sacra Famiglia",
        category: "san_giuseppe",
        season: "primavera",
        difficulty: "media",
        prepTime: 60,
        cookTime: 30,
        servings: 12,
        ingredients: [
          { quantity: "250ml", name: "Acqua" },
          { quantity: "125g", name: "Burro" },
          { quantity: "150g", name: "Farina 00" },
          { quantity: "4", name: "Uova" },
          { quantity: "500ml", name: "Olio per friggere" },
          { quantity: "300g", name: "Crema pasticcera" },
          { quantity: "q.b.", name: "Amarene sciroppate" },
          { quantity: "q.b.", name: "Zucchero a velo" }
        ],
        steps: [
          { step: 1, instruction: "Portare a ebollizione acqua e burro" },
          { step: 2, instruction: "Togliere dal fuoco e aggiungere tutta la farina in una volta" },
          { step: 3, instruction: "Mescolare energicamente fino a formare una palla" },
          { step: 4, instruction: "Lasciar raffreddare e incorporare le uova una alla volta" },
          { step: 5, instruction: "Formare ciambelle con la sac-\xE0-poche su quadretti di carta da forno" },
          { step: 6, instruction: "Friggere in olio abbondante girandole delicatamente" },
          { step: 7, instruction: "Scolare, cospargere di zucchero e farcire con crema e amarena" }
        ],
        traditionalNote: "Le zeppole si preparano il 19 marzo, festa di San Giuseppe. In alcune regioni vengono benedette in chiesa e distribuite ai poveri in memoria della carit\xE0 del santo.",
        liturgicalNote: "La forma circolare ricorda l'aureola del santo, la crema la dolcezza della sua missione, l'amarena il sacrificio.",
        region: "Campania e Sud Italia",
        tags: ["dolce", "fritto", "san giuseppe", "crema"]
      },
      {
        id: "castagnaccio",
        name: "Castagnaccio Toscano",
        description: "Dolce autunnale povero fatto con farina di castagne, dono della Provvidenza",
        category: "ordinario",
        season: "autunno",
        difficulty: "facile",
        prepTime: 15,
        cookTime: 40,
        servings: 8,
        ingredients: [
          { quantity: "400g", name: "Farina di castagne" },
          { quantity: "500ml", name: "Acqua" },
          { quantity: "4 cucchiai", name: "Olio extravergine" },
          { quantity: "50g", name: "Pinoli" },
          { quantity: "50g", name: "Uvetta" },
          { quantity: "q.b.", name: "Rosmarino fresco" },
          { quantity: "1 pizzico", name: "Sale" }
        ],
        steps: [
          { step: 1, instruction: "Setacciare la farina di castagne in una ciotola" },
          { step: 2, instruction: "Aggiungere acqua poco alla volta mescolando per evitare grumi" },
          { step: 3, instruction: "Incorporare 2 cucchiai d'olio e un pizzico di sale" },
          { step: 4, instruction: "Versare in una teglia oliata (altezza 1cm circa)" },
          { step: 5, instruction: "Distribuire pinoli, uvetta ammollata e aghi di rosmarino" },
          { step: 6, instruction: "Irrorare con olio e cuocere a 200\xB0C per 40 minuti" },
          { step: 7, instruction: "La superficie deve risultare screpolata, servire tiepido" }
        ],
        traditionalNote: "Il castagnaccio era chiamato 'pane dei poveri'. Le castagne, benedizione dell'autunno, sfamavano le famiglie contadine nei mesi invernali. Si offriva ai viandanti come gesto di carit\xE0.",
        region: "Toscana",
        tags: ["autunno", "castagne", "povero", "toscano"]
      },
      {
        id: "struffoli-napoletani",
        name: "Struffoli Napoletani",
        description: "Dolce natalizio che con la sua forma circolare ricorda la corona di Cristo e l'eternit\xE0",
        category: "natale",
        season: "inverno",
        difficulty: "media",
        prepTime: 90,
        cookTime: 30,
        servings: 10,
        ingredients: [
          { quantity: "400g", name: "Farina 00" },
          { quantity: "4", name: "Uova" },
          { quantity: "50g", name: "Zucchero" },
          { quantity: "50g", name: "Burro morbido" },
          { quantity: "1 bicchierino", name: "Liquore all'anice" },
          { quantity: "300g", name: "Miele millefiori" },
          { quantity: "q.b.", name: "Confettini colorati e cedro candito" },
          { quantity: "1l", name: "Olio per friggere" }
        ],
        steps: [
          { step: 1, instruction: "Impastare farina, uova, zucchero, burro e liquore" },
          { step: 2, instruction: "Lavorare fino a ottenere un impasto liscio ed elastico" },
          { step: 3, instruction: "Far riposare coperto per 30 minuti" },
          { step: 4, instruction: "Formare cordoncini sottili e tagliare palline di 1cm" },
          { step: 5, instruction: "Friggere in olio caldo fino a doratura uniforme" },
          { step: 6, instruction: "Scaldare il miele e unire gli struffoli mescolando delicatamente" },
          { step: 7, instruction: "Disporre a ciambella su un piatto e decorare con confettini e canditi" }
        ],
        traditionalNote: "Gli struffoli si preparano per tutto il periodo natalizio. La forma a corona rappresenta l'eternit\xE0 di Cristo. In molte famiglie napoletane si preparano insieme cantando i canti natalizi.",
        liturgicalNote: "Tradizionalmente si portano struffoli ai vicini e ai bisognosi durante le novene natalizie come segno di fratellanza cristiana.",
        region: "Campania",
        tags: ["natale", "fritto", "miele", "napoletano"]
      },
      {
        id: "pane-toscano",
        name: "Pane Toscano Senza Sale",
        description: "Il pane quotidiano della tradizione monastica toscana, sciocco come la semplicit\xE0 evangelica",
        category: "ordinario",
        season: "tutte",
        difficulty: "media",
        prepTime: 180,
        cookTime: 40,
        servings: 8,
        ingredients: [
          { quantity: "500g", name: "Farina 0" },
          { quantity: "300ml", name: "Acqua tiepida" },
          { quantity: "15g", name: "Lievito di birra" }
        ],
        steps: [
          { step: 1, instruction: "Sciogliere il lievito in poca acqua tiepida" },
          { step: 2, instruction: "Impastare farina, lievito e acqua rimanente" },
          { step: 3, instruction: "Lavorare energicamente per 15 minuti" },
          { step: 4, instruction: "Far lievitare coperto per 2 ore fino al raddoppio" },
          { step: 5, instruction: "Formare pagnotte allungate e incidere in superficie" },
          { step: 6, instruction: "Lasciar lievitare ancora 1 ora" },
          { step: 7, instruction: "Cuocere in forno molto caldo (250\xB0C) per 10 minuti, poi abbassare a 200\xB0C per 30 minuti" }
        ],
        traditionalNote: "Il pane toscano nasce nei monasteri medievali. L'assenza di sale ricorda la povert\xE0 francescana e si abbina perfettamente ai sapori forti della cucina toscana.",
        region: "Toscana",
        tags: ["pane", "quotidiano", "toscano", "monastico"]
      },
      {
        id: "pasta-ceci",
        name: "Pasta e Ceci alla Romana",
        description: "Piatto povero quaresimale, nutrimento sostanzioso per i giorni di astinenza dalla carne",
        category: "quaresima",
        season: "tutte",
        difficulty: "facile",
        prepTime: 20,
        cookTime: 60,
        servings: 4,
        ingredients: [
          { quantity: "300g", name: "Ceci secchi (ammollati 12 ore)" },
          { quantity: "200g", name: "Pasta mista o maltagliati" },
          { quantity: "2 spicchi", name: "Aglio" },
          { quantity: "1 rametto", name: "Rosmarino" },
          { quantity: "4 cucchiai", name: "Olio extravergine" },
          { quantity: "q.b.", name: "Peperoncino" },
          { quantity: "q.b.", name: "Sale" }
        ],
        steps: [
          { step: 1, instruction: "Cuocere i ceci in abbondante acqua con aglio, rosmarino e sale per 1 ora" },
          { step: 2, instruction: "Frullare met\xE0 dei ceci per rendere cremosa la zuppa" },
          { step: 3, instruction: "Aggiungere la pasta e cuocere" },
          { step: 4, instruction: "A fine cottura lasciare riposare 5 minuti" },
          { step: 5, instruction: "Servire con filo d'olio crudo, rosmarino fresco e peperoncino" }
        ],
        traditionalNote: "Piatto tipico del venerd\xEC e della Quaresima romana. I ceci, legume povero, diventavano nutrimento prezioso nei giorni di digiuno. Si mangia tiepido, mai bollente.",
        liturgicalNote: "Perfetto per il venerd\xEC di Quaresima, giorno di astinenza dalla carne. La semplicit\xE0 degli ingredienti ricorda la sobriet\xE0 quaresimale.",
        region: "Lazio",
        tags: ["primi", "quaresima", "legumi", "romano"]
      },
      {
        id: "baccala-vicentino",
        name: "Baccal\xE0 alla Vicentina",
        description: "Piatto di magro per le feste di precetto, capolavoro della cucina veneta",
        category: "ordinario",
        season: "inverno",
        difficulty: "media",
        prepTime: 30,
        cookTime: 240,
        servings: 6,
        ingredients: [
          { quantity: "1kg", name: "Baccal\xE0 ammollato" },
          { quantity: "500ml", name: "Latte intero" },
          { quantity: "150g", name: "Cipolla bianca" },
          { quantity: "100g", name: "Acciughe sott'olio" },
          { quantity: "200ml", name: "Olio extravergine" },
          { quantity: "100g", name: "Farina 00" },
          { quantity: "50g", name: "Grana Padano" },
          { quantity: "q.b.", name: "Prezzemolo e sale" }
        ],
        steps: [
          { step: 1, instruction: "Tagliare il baccal\xE0 a pezzi regolari e infarinare" },
          { step: 2, instruction: "Soffriggere la cipolla tritata finissima con le acciughe sciolte" },
          { step: 3, instruction: "Disporre il baccal\xE0 in tegame di coccio, coprire con il soffritto" },
          { step: 4, instruction: "Aggiungere latte, olio, prezzemolo e grana" },
          { step: 5, instruction: "Cuocere in forno a 160\xB0C per 4 ore senza mai mescolare, solo scuotendo il tegame" },
          { step: 6, instruction: "La salsa deve diventare cremosa e bianchissima" }
        ],
        traditionalNote: "Il baccal\xE0 veniva distribuito dalle confraternite ai poveri durante le feste di precetto. La lunga cottura era simbolo di pazienza cristiana.",
        liturgicalNote: "Piatto tradizionale del Venerd\xEC Santo e delle vigilie solenni. Si serve con polenta morbida.",
        region: "Veneto",
        tags: ["pesce", "vigilia", "veneto", "quaresima"]
      },
      {
        id: "minestra-pane",
        name: "Minestra di Pane e Verdure",
        description: "Zuppa povera che non spreca nulla, secondo l'insegnamento francescano",
        category: "ordinario",
        season: "inverno",
        difficulty: "facile",
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        ingredients: [
          { quantity: "300g", name: "Pane raffermo" },
          { quantity: "1", name: "Cavolo nero" },
          { quantity: "2", name: "Patate" },
          { quantity: "1", name: "Carota" },
          { quantity: "1 costa", name: "Sedano" },
          { quantity: "2 spicchi", name: "Aglio" },
          { quantity: "q.b.", name: "Olio extravergine e sale" },
          { quantity: "1.5l", name: "Brodo vegetale" }
        ],
        steps: [
          { step: 1, instruction: "Tagliare tutte le verdure a pezzi" },
          { step: 2, instruction: "Soffriggere aglio in olio, aggiungere verdure e far insaporire" },
          { step: 3, instruction: "Coprire con brodo e cuocere 30 minuti" },
          { step: 4, instruction: "Tagliare il pane a fette e tostarlo leggermente" },
          { step: 5, instruction: "Disporre il pane in una zuppiera e versarvi sopra la minestra bollente" },
          { step: 6, instruction: "Lasciar riposare 10 minuti e servire con olio crudo" }
        ],
        traditionalNote: "Piatto che nasce dalla necessit\xE0 di non sprecare il pane avanzato. San Francesco insegnava il rispetto per il pane, dono quotidiano di Dio.",
        region: "Toscana, Umbria",
        tags: ["zuppe", "povero", "recupero", "francescano"]
      },
      {
        id: "maritozzo-quaresimale",
        name: "Maritozzo Quaresimale Romano",
        description: "Dolce di pane arricchito, permesso anche in Quaresima per la colazione dei lavoratori",
        category: "quaresima",
        season: "primavera",
        difficulty: "media",
        prepTime: 120,
        cookTime: 20,
        servings: 10,
        ingredients: [
          { quantity: "500g", name: "Farina 00" },
          { quantity: "100g", name: "Zucchero" },
          { quantity: "50g", name: "Burro" },
          { quantity: "2", name: "Uova" },
          { quantity: "20g", name: "Lievito di birra" },
          { quantity: "150ml", name: "Latte" },
          { quantity: "50g", name: "Uvetta" },
          { quantity: "50g", name: "Pinoli" },
          { quantity: "q.b.", name: "Scorza d'arancia" }
        ],
        steps: [
          { step: 1, instruction: "Sciogliere lievito nel latte tiepido" },
          { step: 2, instruction: "Impastare tutti gli ingredienti fino a ottenere un impasto morbido" },
          { step: 3, instruction: "Incorporare uvetta ammollata e pinoli" },
          { step: 4, instruction: "Far lievitare coperto per 2 ore" },
          { step: 5, instruction: "Formare panini ovali e disporre in teglia" },
          { step: 6, instruction: "Far lievitare ancora 1 ora" },
          { step: 7, instruction: "Spennellare con latte e cuocere a 180\xB0C per 20 minuti" }
        ],
        traditionalNote: "Il maritozzo veniva regalato dal fidanzato alla promessa sposa durante la Quaresima come pegno d'amore. I fornai romani lo preparavano all'alba per i lavoratori.",
        liturgicalNote: "Permesso anche in Quaresima perch\xE9 considerato 'pane arricchito' e non dolce vero e proprio. Si consuma a colazione.",
        region: "Lazio",
        tags: ["dolce", "pane", "quaresima", "romano"]
      }
    ];
    advices = [
      {
        id: "semina-fave-novembre",
        title: "Semina delle Fave di San Martino",
        content: "Seminare le fave dopo San Martino (11 novembre) per avere un raccolto primaverile abbondante. Le fave arricchiscono il terreno di azoto e proteggono le altre colture. Tracciare solchi profondi 5cm e distanziare i semi di 20cm. Coprire con terra e paglia per proteggere dal gelo. Secondo la tradizione contadina, le fave seminate in luna crescente germogliano meglio.",
        category: "orto",
        season: "autunno",
        month: 11,
        difficulty: "facile",
        tags: ["semina", "legumi", "san martino", "luna"],
        lunarPhase: "crescente"
      },
      {
        id: "potatura-rose-gennaio",
        title: "Potatura delle Rose in Gennaio",
        content: "Gennaio \xE8 il mese ideale per potare le rose. Tagliare i rami vecchi e deboli, lasciando 3-5 germogli forti. Il taglio va fatto obliquo, 5mm sopra la gemma esterna. Eliminare rami che si incrociano e quelli rivolti verso l'interno. Bruciare i rami potati per evitare malattie. La potatura severa stimola una fioritura pi\xF9 abbondante a primavera. I frati giardinieri benedivano le rose il giorno di Sant'Antonio Abate (17 gennaio).",
        category: "giardino",
        season: "inverno",
        month: 1,
        difficulty: "media",
        tags: ["potatura", "rose", "inverno", "sant'antonio"]
      },
      {
        id: "conserva-pomodoro-agosto",
        title: "Preparazione della Conserva di Pomodoro",
        content: "Agosto \xE8 il momento perfetto per preparare la conserva. Scegliere pomodori San Marzano maturi al punto giusto. Scottarli in acqua bollente per 2 minuti, pelarli e passarli al setaccio. Cuocere la passata per 30 minuti con basilico e sale. Invasare in barattoli sterilizzati, aggiungere una foglia di basilico fresco e chiudere ermeticamente. Capovolgere i barattoli e lasciarli raffreddare. Conservare in luogo fresco e buio. Una famiglia di 4 persone necessita di circa 50 barattoli per l'anno.",
        category: "casa",
        season: "estate",
        month: 8,
        difficulty: "media",
        tags: ["conserve", "pomodori", "agosto", "tradizione"]
      },
      {
        id: "bulbi-primavera",
        title: "Piantumazione Bulbi Primaverili",
        content: "Da ottobre a dicembre piantare i bulbi che fioriranno in primavera: tulipani, narcisi, giacinti, crocus. La profondit\xE0 di piantagione deve essere 3 volte l'altezza del bulbo. In terreni argillosi aggiungere sabbia. Disporre i bulbi in gruppi irregolari per un effetto naturale. I narcisi si piantano vicino alle aiuole di ortaggi perch\xE9 il loro odore allontana i parassiti. Secondo la tradizione monastica, piantare i bulbi nell'ottava dell'Immacolata porta fortuna al giardino.",
        category: "giardino",
        season: "autunno",
        month: 10,
        difficulty: "facile",
        tags: ["bulbi", "fiori", "primavera", "immacolata"]
      },
      {
        id: "raccolta-olive-novembre",
        title: "Raccolta delle Olive e Frangitura",
        content: "La raccolta delle olive inizia quando il frutto \xE8 invaiato (50% verde, 50% nero). Raccogliere a mano o con pettini, evitando di danneggiare i rami. Portare le olive al frantoio entro 24 ore per preservare la qualit\xE0. Un albero adulto produce 20-30kg di olive, che danno circa 4-6 litri d'olio. Conservare l'olio in recipienti di vetro scuro o acciaio inox, al riparo da luce e calore. Nelle comunit\xE0 monastiche, l'olio nuovo viene benedetto nel giorno di San Clemente (23 novembre).",
        category: "orto",
        season: "autunno",
        month: 11,
        difficulty: "media",
        tags: ["olive", "olio", "raccolta", "san clemente"]
      },
      {
        id: "pulizia-primavera-casa",
        title: "Grande Pulizia di Primavera",
        content: "Con l'arrivo della primavera, procedere alla pulizia profonda della casa. Lavare le finestre con acqua e aceto bianco. Battere tappeti e materassi al sole. Arieggiare armadi e cassetti, inserendo sacchetti di lavanda contro le tarme. Pulire le pareti con acqua e bicarbonato. Secondo la tradizione, la casa va preparata per la Pasqua: ogni angolo deve essere pulito come simbolo di rinnovamento spirituale. Le massaie iniziavano le pulizie il mercoled\xEC delle Ceneri.",
        category: "casa",
        season: "primavera",
        month: 3,
        difficulty: "facile",
        tags: ["pulizie", "primavera", "pasqua", "tradizione"]
      },
      {
        id: "trapianto-ortaggi-luna",
        title: "Trapianto degli Ortaggi secondo le Fasi Lunari",
        content: "Gli ortaggi da foglia (lattuga, cavoli, spinaci) si trapiantano in luna crescente. Gli ortaggi da radice (carote, rape, cipolle) in luna calante. I legumi (fagioli, piselli) in luna crescente. I pomodori e le melanzane si trapiantano 3 giorni dopo la luna nuova. Bagnare abbondantemente dopo il trapianto. Evitare di trapiantare nei giorni di nodi lunari. La tradizione contadina affida alla luna la riuscita dell'orto: 'Luna buona, orto abbondante; luna cattiva, orto scarso'.",
        category: "orto",
        season: "tutte",
        difficulty: "media",
        tags: ["trapianto", "luna", "ortaggi", "tradizione"],
        lunarPhase: "crescente/calante"
      },
      {
        id: "erbe-aromatiche-balcone",
        title: "Coltivazione Erbe Aromatiche in Balcone",
        content: "Anche in poco spazio si possono coltivare erbe aromatiche. Basilico, rosmarino, salvia, prezzemolo, timo crescono bene in vaso. Usare vasi profondi almeno 20cm con terriccio drenante. Il basilico ama il sole e l'acqua, il rosmarino resiste alla siccit\xE0. Pizzicare le cime per favorire la ramificazione. Raccogliere al mattino quando gli oli essenziali sono pi\xF9 concentrati. Nei monasteri medievali, ogni frate aveva il suo piccolo orto di erbe medicinali e aromatiche.",
        category: "piante",
        season: "tutte",
        difficulty: "facile",
        tags: ["erbe", "aromatiche", "balcone", "monastico"]
      },
      {
        id: "compost-domestico",
        title: "Realizzazione del Compost Domestico",
        content: "Il compost trasforma gli scarti in prezioso fertilizzante. Serve una compostiera da 300 litri, possibilmente in legno. Alternare strati di materiale verde (scarti di cucina, erba) e marrone (foglie secche, cartone). Mantenere umido ma non bagnato. Rivoltare ogni 15 giorni. In 6-8 mesi si ottiene terriccio maturo, ricco e profumato. Non inserire carne, pesce, latticini. Il compost \xE8 'oro nero' per l'orto. San Francesco chiamava la terra 'sorella madre': il compost \xE8 un modo di onorarla restituendole i suoi frutti.",
        category: "orto",
        season: "tutte",
        difficulty: "facile",
        tags: ["compost", "riciclo", "fertilizzante", "francescano"]
      },
      {
        id: "innesto-alberi-frutto",
        title: "Innesto degli Alberi da Frutto",
        content: "L'innesto si pratica a fine inverno (febbraio-marzo) quando le piante sono ancora in riposo vegetativo. L'innesto a spacco \xE8 il pi\xF9 semplice: tagliare il portainnesto e aprire una fessura verticale. Inserire la marza (rametto con 2-3 gemme) facendo combaciare le cortecce. Legare stretto con rafia e proteggere con mastice. L'innesto 'prende' dopo 3-4 settimane. Nei vecchi poderi i contadini innestavano nel giorno di San Giuseppe (19 marzo), chiedendo la benedizione del santo patrono dei lavoratori.",
        category: "orto",
        season: "inverno",
        month: 2,
        difficulty: "difficile",
        tags: ["innesto", "frutteto", "san giuseppe", "podere"]
      },
      {
        id: "vino-vendemmia",
        title: "Vinificazione Casalinga dopo la Vendemmia",
        content: "Vendemmiare quando l'uva ha raggiunto il giusto grado zuccherino (settembre-ottobre). Pigiare l'uva a mano o con la pigiatrice. Far fermentare il mosto in damigiana di vetro con tappo gorgogliante per 10-15 giorni a temperatura costante (18-22\xB0C). Separare il vino dalle vinacce (svinatura) e travasare in damigiana pulita. Fare 2-3 travasi nei mesi successivi. Imbottigliare dopo 6 mesi, usando bottiglie scure. Un quintale d'uva d\xE0 circa 70 litri di vino. Benedire il vino nuovo nel giorno di San Martino (11 novembre): 'A San Martino ogni mosto \xE8 vino'.",
        category: "casa",
        season: "autunno",
        month: 9,
        difficulty: "media",
        tags: ["vino", "vendemmia", "san martino", "tradizione"]
      },
      {
        id: "orto-sinergico",
        title: "Principi dell'Orto Sinergico",
        content: "L'orto sinergico imita la natura: piante diverse crescono insieme aiutandosi. Consociazioni classiche: pomodori+basilico (allontana afidi), carote+cipolle (repellono reciprocamente i parassiti), fagioli+mais+zucca (le tre sorelle). Non lavorare il terreno in profondit\xE0, solo sarchiare superficialmente. Pacciamare con paglia o foglie. Non usare concimi chimici, solo compost. L'orto si auto-fertilizza e auto-protegge. Questa sapienza agricola rispecchia l'armonia del Creato voluta da Dio, dove ogni elemento ha il suo posto e la sua funzione.",
        category: "orto",
        season: "tutte",
        difficulty: "media",
        tags: ["sinergico", "consociazioni", "naturale", "creato"]
      },
      {
        id: "sapone-naturale",
        title: "Produzione del Sapone Naturale",
        content: "Sapone fatto in casa con ingredienti naturali. Serve: 1kg olio d'oliva, 128g soda caustica, 300ml acqua distillata. ATTENZIONE: usare guanti e occhiali! Sciogliere la soda nell'acqua (non viceversa!) e lasciar raffreddare. Scaldare l'olio a 45\xB0C. Unire lentamente la soluzione di soda all'olio, mescolando continuamente per 30 minuti finch\xE9 si addensa. Versare in stampi e lasciar stagionare 4-6 settimane. Si possono aggiungere oli essenziali di lavanda o rosmarino. Nei monasteri questo era il sapone usato per la pulizia quotidiana.",
        category: "casa",
        season: "tutte",
        difficulty: "difficile",
        tags: ["sapone", "naturale", "fatto in casa", "monastico"]
      },
      {
        id: "nocino-san-giovanni",
        title: "Preparazione del Nocino di San Giovanni",
        content: "Il nocino si prepara nella notte di San Giovanni (24 giugno) con noci ancora verdi. Raccogliere 30 noci, tagliarle in quarti. Metterle in un vaso di vetro con 1 litro di alcool 95\xB0, 500g di zucchero, scorza di limone, chiodi di garofano, cannella. Esporre al sole per 40 giorni, agitando ogni giorno. Filtrare e imbottigliare. Far invecchiare almeno 2 mesi. Il nocino matura a Natale. La tradizione vuole che le noci vengano raccolte scalzi nella rugiada, per assorbire la magia della notte pi\xF9 corta dell'anno. Ottimo digestivo dopo i pasti abbondanti.",
        category: "casa",
        season: "estate",
        month: 6,
        difficulty: "facile",
        tags: ["nocino", "san giovanni", "liquore", "tradizione"]
      },
      {
        id: "semenzaio-febbraio",
        title: "Preparazione dei Semenzai in Febbraio",
        content: "A fine febbraio preparare i semenzai per ortaggi estivi. Usare cassette con terriccio da semina (leggero e drenante). Seminare pomodori, peperoni, melanzane, basilico in ambiente protetto (serra fredda o casa). Mantenere temperatura 18-20\xB0C e terreno umido. Germinazione in 7-15 giorni. Quando le piantine hanno 4-5 foglie, trapiantare in vasetti singoli. Portare nell'orto dopo l'ultima gelata (met\xE0 aprile). Un vecchio detto contadino: 'Febbraio febbraietto, corto e maledetto, ma chi ha il semenzaio pieno non ha fame tutto l'anno'.",
        category: "orto",
        season: "inverno",
        month: 2,
        difficulty: "media",
        tags: ["semenzaio", "piantine", "febbraio", "serra"]
      },
      {
        id: "marmellate-estate",
        title: "Preparazione delle Marmellate Estive",
        content: "Estate \xE8 tempo di marmellate. Proporzione base: 1kg frutta pulita, 600-700g zucchero, succo di 1 limone. Cuocere a fuoco medio mescolando spesso per 30-40 minuti. Prova piattino: una goccia non deve colare. Invasare bollente in barattoli sterilizzati. Capovolgere e lasciare raffreddare. Si creano sottovuoto. Albicocche a giugno, pesche a luglio, fichi ad agosto, prugne a settembre. Scrivere sul barattolo frutto e data. Le marmellate durano 2 anni. Benedirle nel giorno dell'Assunta (15 agosto) perch\xE9 durino abbondanti.",
        category: "casa",
        season: "estate",
        difficulty: "media",
        tags: ["marmellate", "conserve", "frutta", "assunta"]
      },
      {
        id: "lavanda-raccolta",
        title: "Raccolta e Uso della Lavanda",
        content: "Raccogliere la lavanda a inizio fioritura (giugno-luglio), al mattino dopo che la rugiada \xE8 asciugata. Tagliare gli steli lunghi e legarli in mazzi. Appendere a testa in gi\xF9 in luogo ventilato e ombreggiato. Essicca in 2 settimane. Conservare i fiori in sacchetti di tela. Usi: sacchetti profuma-biancheria negli armadi (allontana le tarme), infuso rilassante, olio essenziale, pot-pourri. Nei monasteri la lavanda si coltivava per profumare le lenzuola degli infermi e portare sollievo. \xC8 pianta benedetta, simbolo di purezza.",
        category: "piante",
        season: "estate",
        month: 6,
        difficulty: "facile",
        tags: ["lavanda", "erbe", "profumo", "monastico"]
      },
      {
        id: "cantina-vini",
        title: "Organizzazione della Cantina dei Vini",
        content: "La cantina ideale ha temperatura costante 12-14\xB0C, umidit\xE0 70-80%, buio, assenza di vibrazioni. Disporre le bottiglie orizzontali affinch\xE9 il tappo rimanga umido. Catalogare i vini per zona e annata. Separare i vini da invecchiamento da quelli pronti. Controllare periodicamente. Un buon vino migliora con gli anni se conservato bene. Nelle case di campagna, la cantina era benedetta nel giorno di San Vincenzo (22 gennaio), protettore dei vignaioli. 'In cantina buona, vino non manca; in cantina cattiva, aceto abbonda'.",
        category: "casa",
        season: "tutte",
        difficulty: "facile",
        tags: ["vino", "cantina", "conservazione", "san vincenzo"]
      },
      {
        id: "orto-quattro-stagioni",
        title: "Pianificazione dell'Orto nelle Quattro Stagioni",
        content: "Primavera: seminare insalate, ravanelli, carote, piselli. Trapiantare pomodori, zucchine, peperoni. Estate: raccogliere e seminare a scalare insalate estive, fagiolini. Trapiantare cavoli autunnali. Autunno: seminare fave, piselli, aglio. Trapiantare cipolle. Pulire e preparare l'orto per l'inverno. Inverno: raccogliere cavoli, porri, radicchio. Pianificare le semine. L'orto va diviso in 4 parti e ogni anno si ruotano le colture (rotazione). Questo preserva la fertilit\xE0 del terreno. L'orto ben pianificato d\xE0 verdure tutto l'anno, come la Provvidenza che non fa mancare il pane quotidiano.",
        category: "orto",
        season: "tutte",
        difficulty: "media",
        tags: ["pianificazione", "rotazione", "stagioni", "provvidenza"]
      },
      {
        id: "rimedi-naturali-afidi",
        title: "Rimedi Naturali contro Afidi e Parassiti",
        content: "Macerato d'aglio: frullare 5 spicchi in 1l d'acqua, lasciar macerare 24 ore, filtrare e spruzzare sulle piante. Sapone molle: sciogliere 10g di sapone di Marsiglia in 1l d'acqua, spruzzare su afidi. Macerato di ortica: 1kg di ortiche in 10l d'acqua, macerare 3 giorni, diluire 1:10 e spruzzare. Trattare al tramonto, mai in pieno sole. Ripetere dopo la pioggia. Favorire coccinelle (mangiano afidi): piantare aneto, finocchio, achillea. La natura fornisce i suoi rimedi: 'Dio ha creato l'erba medicinale e l'uomo saggio non la disprezza' (Siracide).",
        category: "orto",
        season: "primavera",
        difficulty: "facile",
        tags: ["afidi", "parassiti", "naturale", "siracide"]
      },
      {
        id: "giardino-farfalle",
        title: "Creare un Giardino per le Farfalle",
        content: "Le farfalle amano: buddleia, lavanda, verbena, zinnia, aster, sedum. Piantare in gruppi di colori vivaci (rosso, viola, giallo). Evitare pesticidi. Lasciare una zona con ortiche (cibo per bruchi). Creare piccole pozze d'acqua su pietre piatte. Piantare anche arbusti per riparo e svernamento. Le farfalle arrivano da aprile a ottobre. Un giardino ricco di farfalle \xE8 segno di salute ambientale. Nei chiostri medievali, le farfalle erano simbolo dell'anima e della Resurrezione. Contemplarle \xE8 preghiera.",
        category: "giardino",
        season: "primavera",
        difficulty: "facile",
        tags: ["farfalle", "giardino", "biodiversit\xE0", "resurrezione"]
      }
    ];
  }
});

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";

// server/data/homepage.ts
var dailyReflection = {
  id: "refl-20251119",
  date: "2025-11-19",
  title: "La Luce nella Quotidianit\xE0",
  excerpt: "Ogni giorno ci offre l'opportunit\xE0 di vedere la presenza divina nelle piccole cose...",
  body: `In questo tempo ordinario della Chiesa, siamo chiamati a riconoscere il sacro nel quotidiano. Non dobbiamo attendere le grandi feste o i momenti straordinari per incontrare il Signore: Egli \xE8 presente nel sorriso di un fratello, nel lavoro delle nostre mani, nel silenzio della preghiera mattutina.

Come ci ricorda San Benedetto nella sua Regola, "l'oziosit\xE0 \xE8 nemica dell'anima". Il lavoro, la preghiera, lo studio - ogni attivit\xE0 pu\xF2 diventare un canto di lode se compiuta con il cuore rivolto a Dio.

Oggi, fermiamoci un momento. Guardiamo con occhi nuovi ci\xF2 che ci circonda. Il pane sulla tavola, l'acqua che disseta, il tetto che ci ripara - tutto \xE8 dono. Ogni respiro \xE8 grazia.

Che possiamo vivere questa giornata non come un peso, ma come un'opportunit\xE0 di crescita spirituale. Che ogni nostro gesto, anche il pi\xF9 umile, possa essere offerto come preghiera silenziosa.`,
  suggestions: [
    {
      author: "San Benedetto da Norcia",
      text: "Preferire assolutamente nulla all'amore di Cristo.",
      source: "Regola di San Benedetto, Cap. 4"
    },
    {
      author: "Santa Teresa d'Avila",
      text: "Dio cammina tra le pentole e i tegami aiutando sia all'interno che all'esterno.",
      source: "Libro della Vita"
    },
    {
      author: "Beato Charles de Foucauld",
      text: "La santit\xE0 consiste nel fare la volont\xE0 di Dio, qualunque essa sia, sempre, in tutte le cose."
    }
  ]
};
var dailyPracticalTips = [
  {
    id: "tip-orto-20251119",
    date: "2025-11-19",
    category: "orto",
    summary: "Semina delle fave sotto la Luna crescente",
    details: `Novembre \xE8 il momento ideale per la semina delle fave, soprattutto durante la fase di Luna crescente. Questo legume rustico non teme il freddo e arricchisce il terreno di azoto.

**Come procedere:**
1. Scegli un'area soleggiata dell'orto, possibilmente dove l'anno scorso hai coltivato ortaggi che consumano molto azoto (pomodori, cavoli)
2. Lavora il terreno in profondit\xE0, eliminando sassi e radici
3. Traccia solchi profondi 5-7 cm, distanziati 40-50 cm
4. Disponi i semi a 15-20 cm l'uno dall'altro
5. Copri con terra e compatta leggermente
6. Se il clima \xE8 molto rigido, proteggi con paglia o tessuto non tessuto

**Nota liturgica:** La tradizione contadina vuole che si semini durante la fase crescente della Luna, ma sempre dopo aver benedetto i semi. Si pu\xF2 recitare una preghiera semplice chiedendo al Signore di benedire il lavoro delle nostre mani.`,
    icon: "Sprout",
    color: "#7A9D6B",
    link: "/almanacco"
  },
  {
    id: "tip-giardino-20251119",
    date: "2025-11-19",
    category: "giardino",
    summary: "Ultima potatura delle rose prima dell'inverno",
    details: `Le rose necessitano di una leggera potatura autunnale per affrontare al meglio l'inverno. Non \xE8 la potatura principale (che si far\xE0 a febbraio), ma un intervento di preparazione.

**Cosa fare:**
1. Elimina i rami secchi, malati o danneggiati
2. Accorcia i rami pi\xF9 lunghi che potrebbero spezzarsi con la neve
3. Rimuovi le foglie malate cadute alla base per prevenire malattie fungine
4. Non potare drasticamente - l'obiettivo \xE8 solo mettere in sicurezza la pianta
5. Raccogli tutti i residui di potatura e non lasciarli sul terreno

**Protezione invernale:**
- Nelle zone con inverni rigidi, proteggi la base con pacciamatura di paglia o foglie
- Per le rose in vaso, spostale vicino a un muro esposto a sud

**Benedizione del giardino:** I monaci cistercensi benedicevano il giardino prima dell'inverno, affidando le piante alla protezione divina durante il riposo vegetativo.`,
    icon: "Flower2",
    color: "#C46448",
    link: "/almanacco"
  },
  {
    id: "tip-piante-20251119",
    date: "2025-11-19",
    category: "piante",
    summary: "Cura delle piante d'appartamento in autunno",
    details: `Con l'arrivo dei primi freddi e l'accensione del riscaldamento, le piante d'appartamento necessitano di attenzioni particolari.

**Gestione dell'umidit\xE0:**
1. Il riscaldamento secca l'aria - nebulizza regolarmente le foglie (non i fiori)
2. Raggruppa le piante per creare un microclima umido
3. Usa sottovasi con argilla espansa e acqua (senza toccare il vaso)
4. Allontana le piante dai termosifoni

**Irrigazione:**
- Riduci l'annaffiatura: le piante rallentano la crescita
- Verifica sempre l'umidit\xE0 del terreno prima di annaffiare
- Usa acqua a temperatura ambiente, mai fredda di frigo

**Pulizia:**
- Pulisci le foglie dalla polvere con un panno umido
- Rimuovi foglie secche o ingiallite
- Controlla la presenza di parassiti (cocciniglia, ragnetto rosso)

**Nota spirituale:** Le piante ci insegnano il ritmo delle stagioni e l'importanza del riposo. Anche noi, nel periodo autunnale della nostra vita spirituale, dobbiamo rallentare per prepararci a nuova crescita.`,
    icon: "Leaf",
    color: "#8B9D7C",
    link: "/almanacco"
  }
];
var dailyRecipePreview = {
  id: "daily-recipe-20251119",
  date: "2025-11-19",
  title: "Castagnaccio Toscano",
  summary: "Dolce autunnale tradizionale della Toscana, preparato con farina di castagne, perfetto per San Martino",
  recipeId: "castagnaccio-toscano",
  category: "ordinario"
};
var todayEvents = [
  {
    id: "event-oggi-1",
    date: "2025-11-19",
    type: "oggi",
    title: "Sinodo dei Vescovi: pubblicazione documento finale",
    summary: "Il Santo Padre presenta il documento conclusivo del percorso sinodale sulla sinodalit\xE0 nella Chiesa",
    source: "Vatican News"
  },
  {
    id: "event-oggi-2",
    date: "2025-11-19",
    type: "oggi",
    title: "Beatificazione di testimoni della fede in Albania",
    summary: "Cerimonia di beatificazione per i martiri dell'epoca comunista, testimoni eroici della fede cristiana",
    source: "Agenzia Fides"
  },
  {
    id: "event-oggi-3",
    date: "2025-11-19",
    type: "oggi",
    title: "Convegno nazionale delle Confraternite a Roma",
    summary: "Si conclude il convegno che ha riunito rappresentanti di confraternite da tutta Italia",
    source: "Sir - Agenzia d'Informazione"
  }
];
var historyEvents = [
  {
    id: "event-storia-1",
    date: "2025-11-19",
    type: "storia",
    title: "Consacrazione della Basilica di San Pietro (1626)",
    summary: "Papa Urbano VIII consacr\xF2 solennemente la nuova Basilica di San Pietro in Vaticano, dopo 120 anni di costruzione",
    year: 1626,
    source: "Archivi Vaticani"
  },
  {
    id: "event-storia-2",
    date: "2025-11-19",
    type: "storia",
    title: "Santa Elisabetta d'Ungheria (1231)",
    summary: "Morte di Santa Elisabetta d'Ungheria, principessa e terziaria francescana, protettrice dei poveri e degli ammalati",
    year: 1231
  },
  {
    id: "event-storia-3",
    date: "2025-11-19",
    type: "storia",
    title: "Fondazione dell'Ordine dei Minimi (1436)",
    summary: "San Francesco di Paola fonda l'Ordine dei Minimi in Calabria, dedicato a vita contemplativa e penitenziale",
    year: 1436
  },
  {
    id: "event-storia-4",
    date: "2025-11-19",
    type: "storia",
    title: "Concilio Vaticano II: Costituzione Dei Verbum (1965)",
    summary: "Promulgazione della Costituzione Dogmatica sulla Divina Rivelazione, documento fondamentale del Concilio",
    year: 1965,
    source: "Acta Apostolicae Sedis"
  }
];
var todayAstronomy = {
  id: "astro-20251119",
  date: "2025-11-19",
  sunrise: "07:12",
  sunset: "16:48",
  moonPhase: "Calante",
  moonIllumination: 68,
  saintNote: "San Martino di Tours: si celebra tradizionalmente l'11 novembre, periodo dell'estate di San Martino",
  liturgicalNote: "Nel periodo autunnale, le ore di luce diminuiscono ricordandoci l'Avvento che si avvicina, tempo di attesa della Luce del mondo."
};
var todayWeather = {
  id: "weather-20251119",
  date: "2025-11-19",
  location: "Roma, Italia",
  conditions: "Parzialmente nuvoloso",
  temperatureMin: 8,
  temperatureMax: 16,
  humidity: 65,
  liturgicalNote: "Il clima mite di novembre ci permette ancora di godere del creato - un invito a rendere grazie per i doni della natura."
};
var insights = [
  {
    id: "insight-1",
    title: "La Devozione Mariana nel Magistero della Chiesa",
    summary: "Un'analisi approfondita del ruolo della Madonna nel culto cattolico attraverso i documenti del Magistero",
    content: `La devozione mariana \xE8 un elemento centrale della spiritualit\xE0 cattolica, radicata nella Sacra Scrittura e sviluppata attraverso i secoli dalla Tradizione della Chiesa. Il Concilio Vaticano II, nella Costituzione Dogmatica "Lumen Gentium", dedica l'intero capitolo VIII alla Beata Vergine Maria.

San Paolo VI, nell'Esortazione Apostolica "Marialis Cultus" (1974), chiarisce che "il culto alla Beata Vergine Maria \xE8 intrinsecamente relativo al culto del divino Salvatore". Maria non \xE8 mai fine a se stessa, ma sempre via verso Cristo.

San Giovanni Paolo II ha approfondito ulteriormente questa teologia mariana, definendo Maria come "la via che conduce a Cristo" e sottolineando il suo ruolo di Madre della Chiesa. La sua Enciclica "Redemptoris Mater" (1987) \xE8 considerata uno dei documenti pi\xF9 importanti sulla mariologia moderna.`,
    author: "Mons. Carlo Liberati",
    publishedDate: "2025-11-15",
    category: "teologia",
    tags: ["mariologia", "magistero", "devozione"]
  },
  {
    id: "insight-2",
    title: "Storia dei Pellegrinaggi Cristiani",
    summary: "Dalle origini medievali ai grandi cammini di fede contemporanei: l'evoluzione dei pellegrinaggi",
    content: `Il pellegrinaggio \xE8 una pratica religiosa antichissima che affonda le sue radici nella tradizione biblica. Gi\xE0 nell'Antico Testamento, il popolo d'Israele compiva pellegrinaggi verso Gerusalemme per le grandi feste.

Nel cristianesimo, i primi pellegrinaggi documentati risalgono al IV secolo, quando Sant'Elena, madre dell'imperatore Costantino, visit\xF2 la Terra Santa. Da allora, tre destinazioni principali hanno caratterizzato i pellegrinaggi cristiani: Gerusalemme (luoghi della Passione di Cristo), Roma (tomba di San Pietro), e Santiago de Compostela (sepolcro di San Giacomo).

Nel Medioevo, il pellegrinaggio divenne un fenomeno di massa. I pellegrini percorrevano centinaia di chilometri a piedi, spesso in condizioni difficili, mossi da devozione, penitenza o ricerca spirituale.

Oggi assistiamo a una rinascita dei cammini di fede. Il Cammino di Santiago ha registrato nel 2019 oltre 347.000 pellegrini. Anche in Italia, la Via Francigena sta vivendo un momento di grande popolarit\xE0.`,
    author: "Prof.ssa Maria Bianchi",
    publishedDate: "2025-11-12",
    category: "storia",
    tags: ["pellegrinaggi", "storia", "tradizione"]
  },
  {
    id: "insight-3",
    title: "La Preghiera del Cuore nella Tradizione Orientale",
    summary: "Introduzione alla pratica dell'esicasmo e della Preghiera di Ges\xF9 secondo i Padri del deserto",
    content: `L'esicasmo (dal greco \u1F21\u03C3\u03C5\u03C7\u03AF\u03B1, hesychia, "quiete", "pace") \xE8 una tradizione spirituale della Chiesa Orientale che enfatizza la preghiera contemplativa e la ricerca della pace interiore attraverso la Preghiera di Ges\xF9.

La Preghiera di Ges\xF9 consiste nella ripetizione costante della formula: "Signore Ges\xF9 Cristo, Figlio di Dio, abbi piet\xE0 di me peccatore". Questa pratica, documentata fin dal V secolo dai Padri del Deserto, mira all'unione continua con Dio attraverso l'invocazione incessante del Nome di Ges\xF9.

I grandi maestri dell'esicasmo, come San Gregorio Palamas (XIV secolo), insegnano che questa preghiera, praticata con sincerit\xE0 e perseveranza, conduce alla visione della Luce Increata, la stessa luce che illumin\xF2 gli Apostoli sul Monte Tabor durante la Trasfigurazione.

San Serafino di Sarov (XVIII secolo) affermava che "lo scopo della vita cristiana \xE8 l'acquisizione dello Spirito Santo". La Preghiera del Cuore \xE8 considerata uno strumento privilegiato per raggiungere questo obiettivo.`,
    author: "Archimandrita Simone Carusi",
    publishedDate: "2025-11-10",
    category: "spiritualita",
    tags: ["esicasmo", "preghiera", "tradizione orientale"]
  },
  {
    id: "insight-4",
    title: "Il Calendario Liturgico: Struttura e Significato",
    summary: "Come la Chiesa organizza l'anno liturgico per celebrare il mistero di Cristo",
    content: `L'anno liturgico non \xE8 una semplice ripetizione ciclica delle festivit\xE0, ma un percorso spirituale che accompagna i fedeli attraverso i misteri della vita di Cristo. La sua struttura attuale \xE8 stata definita dalla Riforma Liturgica seguita al Concilio Vaticano II.

Il ciclo liturgico si compone di due periodi principali: il Tempo di Natale (che include l'Avvento, il Natale e il Tempo Ordinario invernale) e il Tempo di Pasqua (che include la Quaresima, il Triduo Pasquale, la Pasqua e il Tempo Ordinario estivo).

I colori liturgici hanno un significato profondo: il viola per l'Avvento e la Quaresima (penitenza e attesa), il bianco per il Natale e la Pasqua (gioia e purezza), il verde per il Tempo Ordinario (speranza e vita), il rosso per la Passione e lo Spirito Santo (amore e martirio).

La Costituzione "Sacrosanctum Concilium" insegna che "la liturgia \xE8 il culmine verso cui tende l'azione della Chiesa e insieme la fonte da cui promana tutta la sua energia".`,
    author: "Don Luca Moretti",
    publishedDate: "2025-11-08",
    category: "liturgia",
    tags: ["calendario liturgico", "anno liturgico", "colori liturgici"]
  }
];

// server/storage.ts
init_almanac();
var MemStorage = class {
  users;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getReflectionToday() {
    return dailyReflection;
  }
  async getTipsToday() {
    return dailyPracticalTips;
  }
  async getRecipeOfDay() {
    return dailyRecipePreview;
  }
  async getRecipe(id) {
    return recipes.find((r) => r.id === id);
  }
  async getEvents() {
    return [...todayEvents, ...historyEvents];
  }
  async getAstronomy() {
    return todayAstronomy;
  }
  async getWeather() {
    return todayWeather;
  }
  async getInsights() {
    return insights;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var letturaSchema = z.object({
  id: z.string(),
  tipo: z.string(),
  riferimento: z.string(),
  testo: z.string(),
  snippet: z.string().optional()
});
var liturgiaSchema = z.object({
  date: z.string(),
  season: z.string(),
  color_key: z.string(),
  color_label: z.string(),
  week: z.string(),
  rank: z.string(),
  festa: z.string(),
  letture: z.array(letturaSchema)
});
var naturaSchema = z.object({
  data: z.string(),
  orto: z.string(),
  giardino: z.string(),
  piante: z.string(),
  cucina: z.string(),
  consiglio: z.string(),
  fase_lunare: z.string(),
  testo: z.string().optional()
});
var diaryEntrySchema = z.object({
  date: z.string(),
  content: z.string(),
  timestamp: z.number()
});
var ingredientSchema = z.object({
  quantity: z.string(),
  name: z.string()
});
var recipeStepSchema = z.object({
  step: z.number(),
  instruction: z.string()
});
var recipeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.enum([
    "natale",
    "pasqua",
    "quaresima",
    "avvento",
    "pentecoste",
    "festa_patronale",
    "ordinario",
    "epifania",
    "candelora",
    "san_giuseppe",
    "assunzione",
    "tutti_santi",
    "immacolata"
  ]),
  season: z.enum(["primavera", "estate", "autunno", "inverno", "tutte"]),
  difficulty: z.enum(["facile", "media", "difficile"]),
  prepTime: z.number(),
  cookTime: z.number(),
  servings: z.number(),
  ingredients: z.array(ingredientSchema),
  steps: z.array(recipeStepSchema),
  imageUrl: z.string().optional(),
  traditionalNote: z.string().optional(),
  liturgicalNote: z.string().optional(),
  region: z.string().optional(),
  tags: z.array(z.string()).optional()
});
var adviceSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  category: z.enum(["casa", "orto", "giardino", "piante", "stagionale"]),
  season: z.enum(["primavera", "estate", "autunno", "inverno", "tutte"]),
  month: z.number().optional(),
  difficulty: z.enum(["facile", "media", "difficile"]),
  tags: z.array(z.string()).optional(),
  lunarPhase: z.string().optional(),
  imageUrl: z.string().optional()
});
var reflectionSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  excerpt: z.string(),
  body: z.string(),
  suggestions: z.array(z.object({
    author: z.string(),
    text: z.string(),
    source: z.string().optional()
  }))
});
var practicalTipSchema = z.object({
  id: z.string(),
  date: z.string(),
  category: z.enum(["orto", "giardino", "piante"]),
  summary: z.string(),
  details: z.string(),
  icon: z.string(),
  color: z.string(),
  link: z.string().optional()
});
var dailyRecipePreviewSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  summary: z.string(),
  recipeId: z.string(),
  category: z.string(),
  imageUrl: z.string().optional()
});
var eventSchema = z.object({
  id: z.string(),
  date: z.string(),
  type: z.enum(["oggi", "storia"]),
  title: z.string(),
  summary: z.string(),
  year: z.number().optional(),
  source: z.string().optional()
});
var astronomySnapshotSchema = z.object({
  id: z.string(),
  date: z.string(),
  sunrise: z.string(),
  sunset: z.string(),
  moonPhase: z.string(),
  moonIllumination: z.number(),
  saintNote: z.string().optional(),
  liturgicalNote: z.string().optional()
});
var weatherSnapshotSchema = z.object({
  id: z.string(),
  date: z.string(),
  location: z.string(),
  conditions: z.string(),
  temperatureMin: z.number(),
  temperatureMax: z.number(),
  humidity: z.number().optional(),
  liturgicalNote: z.string().optional()
});
var insightSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  content: z.string(),
  author: z.string(),
  publishedDate: z.string(),
  category: z.enum(["teologia", "storia", "spiritualita", "liturgia", "cultura"]),
  tags: z.array(z.string()),
  relatedNewsIds: z.array(z.string()).optional()
});
var saintSchema = z.object({
  id: z.string(),
  date: z.string(),
  name: z.string(),
  title: z.string().optional(),
  biography: z.string(),
  excerpt: z.string(),
  feast: z.string().optional(),
  patronOf: z.array(z.string()).optional(),
  attributes: z.array(z.string()).optional(),
  quotes: z.array(z.object({
    text: z.string(),
    source: z.string().optional()
  })).optional(),
  liturgicalNote: z.string().optional(),
  imageUrl: z.string().optional(),
  lifeYears: z.string().optional(),
  canonizationDate: z.string().optional()
});
var prayerSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(["mattino", "sera", "rosario", "angelus", "liturgia_ore", "tradizionali", "sacramenti", "mariane", "varie"]),
  subcategory: z.string().optional(),
  text: z.string(),
  occasion: z.string().optional(),
  author: z.string().optional(),
  source: z.string().optional(),
  latinText: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional()
});

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.get("/api/liturgy/range", async (req, res) => {
    try {
      const start = req.query.start;
      const end = req.query.end;
      if (!start || !end) {
        return res.status(400).json({
          error: "Parametri 'start' e 'end' obbligatori (formato YYYY-MM-DD)"
        });
      }
      const startDate = /* @__PURE__ */ new Date(start + "T00:00:00");
      const endDate = /* @__PURE__ */ new Date(end + "T00:00:00");
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
      const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24));
      if (daysDiff > 30) {
        return res.status(400).json({
          error: "Il range massimo \xE8 di 30 giorni"
        });
      }
      const promises = [];
      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split("T")[0];
        promises.push(
          fetch(`https://calendariodellafede.it/api/liturgia.php?date=${dateStr}`).then(async (response) => {
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
          }).catch((error) => {
            console.warn(`Errore fetch per ${dateStr}:`, error.message);
            return null;
          })
        );
        currentDate.setDate(currentDate.getDate() + 1);
      }
      const results = await Promise.all(promises);
      const validResults = results.filter((r) => r !== null);
      if (validResults.length === 0) {
        return res.status(503).json({
          error: "Nessun dato liturgico disponibile per il periodo richiesto"
        });
      }
      res.json(validResults);
    } catch (error) {
      console.error("Errore API liturgy/range:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/liturgy/:date", async (req, res) => {
    try {
      const date = req.params.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const response = await fetch(`https://calendariodellafede.it/api/liturgia.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({
          error: "Errore nel recupero dei dati liturgici"
        });
      }
      const data = await response.json();
      const validated = liturgiaSchema.parse(data);
      res.json(validated);
    } catch (error) {
      console.error("Errore API liturgia/:date:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/liturgy", async (req, res) => {
    try {
      const date = req.query.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const response = await fetch(`https://calendariodellafede.it/api/liturgia.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({
          error: "Errore nel recupero dei dati liturgici"
        });
      }
      const data = await response.json();
      const validated = liturgiaSchema.parse(data);
      res.json(validated);
    } catch (error) {
      console.error("Errore API liturgia:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/nature", async (req, res) => {
    try {
      const date = req.query.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const response = await fetch(`https://calendariodellafede.it/api/natura.php?date=${date}`);
      if (!response.ok) {
        return res.status(response.status).json({
          error: "Errore nel recupero dei consigli sulla natura"
        });
      }
      const data = await response.json();
      const validated = naturaSchema.parse(data);
      res.json(validated);
    } catch (error) {
      console.error("Errore API natura:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  const { recipes: recipes2, advices: advices2 } = await Promise.resolve().then(() => (init_almanac(), almanac_exports));
  app2.get("/api/recipes", (req, res) => {
    try {
      let filtered = [...recipes2];
      const { category, season, difficulty, search } = req.query;
      if (category && typeof category === "string") {
        filtered = filtered.filter((r) => r.category === category);
      }
      if (season && typeof season === "string") {
        filtered = filtered.filter((r) => r.season === season || r.season === "tutte");
      }
      if (difficulty && typeof difficulty === "string") {
        filtered = filtered.filter((r) => r.difficulty === difficulty);
      }
      if (search && typeof search === "string") {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(
          (r) => r.name.toLowerCase().includes(searchLower) || r.description.toLowerCase().includes(searchLower) || r.tags?.some((t) => t.toLowerCase().includes(searchLower))
        );
      }
      res.json(filtered);
    } catch (error) {
      console.error("Errore API recipes:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/recipes/:id", (req, res) => {
    try {
      const recipe = recipes2.find((r) => r.id === req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: "Ricetta non trovata" });
      }
      res.json(recipe);
    } catch (error) {
      console.error("Errore API recipe:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/advice", (req, res) => {
    try {
      let filtered = [...advices2];
      const { category, season, difficulty, search, month } = req.query;
      if (category && typeof category === "string") {
        filtered = filtered.filter((a) => a.category === category);
      }
      if (season && typeof season === "string") {
        filtered = filtered.filter((a) => a.season === season || a.season === "tutte");
      }
      if (difficulty && typeof difficulty === "string") {
        filtered = filtered.filter((a) => a.difficulty === difficulty);
      }
      if (month && typeof month === "string") {
        const monthNum = parseInt(month);
        if (!isNaN(monthNum)) {
          filtered = filtered.filter((a) => !a.month || a.month === monthNum);
        }
      }
      if (search && typeof search === "string") {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(
          (a) => a.title.toLowerCase().includes(searchLower) || a.content.toLowerCase().includes(searchLower) || a.tags?.some((t) => t.toLowerCase().includes(searchLower))
        );
      }
      res.json(filtered);
    } catch (error) {
      console.error("Errore API advice:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/advice/:id", (req, res) => {
    try {
      const advice = advices2.find((a) => a.id === req.params.id);
      if (!advice) {
        return res.status(404).json({ error: "Consiglio non trovato" });
      }
      res.json(advice);
    } catch (error) {
      console.error("Errore API advice:", error);
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/reflection/today", async (req, res) => {
    try {
      const reflection = await storage.getReflectionToday();
      if (!reflection) {
        return res.status(404).json({ error: "Riflessione non disponibile" });
      }
      const validated = reflectionSchema.parse(reflection);
      res.json(validated);
    } catch (error) {
      console.error("Errore API reflection:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/tips/today", async (req, res) => {
    try {
      const tips = await storage.getTipsToday();
      const validated = tips.map((tip) => practicalTipSchema.parse(tip));
      res.json(validated);
    } catch (error) {
      console.error("Errore API tips:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/recipe-of-day", async (req, res) => {
    try {
      const recipePreview = await storage.getRecipeOfDay();
      if (!recipePreview) {
        return res.status(404).json({ error: "Ricetta del giorno non disponibile" });
      }
      const validated = dailyRecipePreviewSchema.parse(recipePreview);
      res.json(validated);
    } catch (error) {
      console.error("Errore API recipe-of-day:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/events", async (req, res) => {
    try {
      const { type } = req.query;
      let events = await storage.getEvents();
      if (type && typeof type === "string") {
        events = events.filter((e) => e.type === type);
      }
      const validated = events.map((event) => eventSchema.parse(event));
      res.json(validated);
    } catch (error) {
      console.error("Errore API events:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/astronomy", async (req, res) => {
    try {
      const astronomy = await storage.getAstronomy();
      if (!astronomy) {
        return res.status(404).json({ error: "Dati astronomici non disponibili" });
      }
      const validated = astronomySnapshotSchema.parse(astronomy);
      res.json(validated);
    } catch (error) {
      console.error("Errore API astronomy:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/weather", async (req, res) => {
    try {
      const weather = await storage.getWeather();
      if (!weather) {
        return res.status(404).json({ error: "Dati meteo non disponibili" });
      }
      const validated = weatherSnapshotSchema.parse(weather);
      res.json(validated);
    } catch (error) {
      console.error("Errore API weather:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/insights", async (req, res) => {
    try {
      const insights2 = await storage.getInsights();
      const validated = insights2.map((insight) => insightSchema.parse(insight));
      res.json(validated);
    } catch (error) {
      console.error("Errore API insights:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/saint/today", async (req, res) => {
    try {
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const saint = {
        id: `saint-${today}`,
        date: today,
        name: "San Francesco di Sales",
        title: "Vescovo e Dottore della Chiesa",
        biography: `Francesco di Sales nacque nel castello di Sales, vicino ad Annecy, in Savoia, il 21 agosto 1567. Destinato dal padre alla carriera forense, si laure\xF2 in diritto a Padova, ma sent\xEC la vocazione al sacerdozio.

Ordinato sacerdote nel 1593, si dedic\xF2 con passione alla predicazione e alla conversione dei calvinisti nel Chiablese, in condizioni estremamente difficili e pericolose. Il suo metodo apostolico si basava sulla dolcezza, la pazienza e l'amore, rinunciando alla violenza e alla polemica.

Nel 1602 fu consacrato vescovo di Ginevra, carica che mantenne fino alla morte. Come vescovo, si distinse per la riforma del clero, la predicazione assidua, la direzione spirituale e la visita alle parrocchie.

\xC8 autore di opere spirituali di grande valore, tra cui "Introduzione alla vita devota" (Filotea) e "Trattato dell'amor di Dio". In questi scritti promuove una spiritualit\xE0 accessibile a tutti i cristiani, non solo ai religiosi, insegnando che la santit\xE0 \xE8 possibile in ogni stato di vita.

Nel 1610, insieme a santa Giovanna Francesca di Chantal, fond\xF2 l'Ordine della Visitazione, un istituto religioso femminile dedicato all'assistenza dei malati e all'educazione.

Mor\xEC a Lione il 28 dicembre 1622. Fu beatificato nel 1661 e canonizzato nel 1665. Nel 1877 fu proclamato Dottore della Chiesa. \xC8 patrono dei giornalisti e degli scrittori cattolici.`,
        excerpt: "Vescovo e Dottore della Chiesa, maestro di dolcezza e vita spirituale. Fondatore dell'Ordine della Visitazione, autore della Filotea.",
        feast: "24 gennaio",
        patronOf: ["Giornalisti", "Scrittori", "Sordi"],
        attributes: ["Mitria vescovile", "Libro", "Cuore fiammeggiante"],
        quotes: [
          {
            text: "Pi\xF9 si raccolgono mosche con un cucchiaino di miele che con un barile di aceto.",
            source: "Introduzione alla vita devota"
          },
          {
            text: "Non temere quello che potr\xE0 accadere domani. Lo stesso Padre celeste che si prende cura di te oggi, si prender\xE0 cura di te domani e sempre."
          },
          {
            text: "Abbiate pazienza con tutti, ma soprattutto con voi stessi.",
            source: "Lettere spirituali"
          }
        ],
        liturgicalNote: "La memoria di San Francesco di Sales cade il 24 gennaio, data della sua morte avvenuta a Lione nel 1622.",
        lifeYears: "1567 - 1622",
        canonizationDate: "1665"
      };
      const validated = saintSchema.parse(saint);
      res.json(validated);
    } catch (error) {
      console.error("Errore API saint/today:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  app2.get("/api/prayers", async (req, res) => {
    try {
      const prayers = [
        {
          id: "padre-nostro",
          title: "Padre Nostro",
          category: "tradizionali",
          text: `Padre nostro che sei nei cieli,
sia santificato il tuo nome,
venga il tuo regno,
sia fatta la tua volont\xE0
come in cielo cos\xEC in terra.

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
          author: "Ges\xF9 Cristo",
          source: "Vangelo di Matteo 6,9-13",
          notes: "La preghiera insegnata da Ges\xF9 ai suoi discepoli. \xC8 la preghiera cristiana per eccellenza.",
          tags: ["fondamentale", "ges\xF9", "vangelo"]
        },
        {
          id: "ave-maria",
          title: "Ave Maria",
          category: "mariane",
          text: `Ave, o Maria, piena di grazia,
il Signore \xE8 con te.
Tu sei benedetta fra le donne
e benedetto \xE8 il frutto del tuo seno, Ges\xF9.

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
          notes: "Dossologia minore, preghiera di lode alla Santissima Trinit\xE0.",
          tags: ["trinit\xE0", "lode", "liturgia"]
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
dalla piet\xE0 celeste.

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
          text: `V. L'Angelo del Signore port\xF2 l'annuncio a Maria.
R. Ed ella concep\xEC per opera dello Spirito Santo.

Ave Maria...

V. Eccomi, sono la serva del Signore.
R. Si compia in me la tua parola.

Ave Maria...

V. E il Verbo si fece carne.
R. E venne ad abitare in mezzo a noi.

Ave Maria...

V. Prega per noi, santa Madre di Dio.
R. Perch\xE9 siamo resi degni delle promesse di Cristo.

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
fa' che siano tutte secondo la tua santa volont\xE0
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

e in Ges\xF9 Cristo, suo unico Figlio, nostro Signore,
il quale fu concepito di Spirito Santo,
nacque da Maria Vergine,
pat\xEC sotto Ponzio Pilato,
fu crocifisso, mor\xEC e fu sepolto;
discese agli inferi;
il terzo giorno risuscit\xF2 da morte;
sal\xEC al cielo,
siede alla destra di Dio Padre onnipotente;
di l\xE0 verr\xE0 a giudicare i vivi e i morti.

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

Ors\xF9 dunque, avvocata nostra,
rivolgi a noi gli occhi tuoi misericordiosi.
E mostraci, dopo questo esilio, Ges\xF9,
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

O buon Ges\xF9, esaudiscimi.
Nelle tue piaghe, nascondimi.
Non permettere che io mi separi da te.
Dal nemico maligno, difendimi.
Nell'ora della mia morte, chiamami
e comandami di venire a te,
perch\xE9 con i tuoi santi ti lodi
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
          tags: ["eucaristia", "comunione", "ges\xF9"]
        }
      ];
      const validated = prayers.map((prayer) => prayerSchema.parse(prayer));
      res.json(validated);
    } catch (error) {
      console.error("Errore API prayers:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Dati non validi",
          details: fromZodError(error).toString()
        });
      }
      res.status(500).json({ error: "Errore del server" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
