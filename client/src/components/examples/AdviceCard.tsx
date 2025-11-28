import AdviceCard from '../AdviceCard';
import { Home, Flower2, CookingPot, Sprout } from 'lucide-react';

export default function AdviceCardExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
      <AdviceCard
        title="Pulire i vetri senza aloni"
        content="Usa una soluzione di acqua e aceto in parti uguali. Asciuga con carta di giornale per un risultato perfetto e senza striature."
        category="casa"
        season="Inverno"
        icon={Home}
        featured
      />
      <AdviceCard
        title="Proteggere le rose dal freddo"
        content="Copri la base delle rose con pacciamatura di corteccia o foglie secche per proteggerle dal gelo invernale."
        category="giardino"
        season="Inverno"
        icon={Flower2}
      />
      <AdviceCard
        title="Minestrone di stagione"
        content="Prepara un minestrone con cavolo, patate e fagioli. Perfetto per le giornate fredde, ricco di nutrienti e sapore."
        category="cucina"
        season="Inverno"
        icon={CookingPot}
      />
      <AdviceCard
        title="Seminare le fave"
        content="Novembre è il momento ideale per seminare le fave nell'orto. Resisteranno al freddo e saranno pronte in primavera."
        category="orto"
        season="Autunno"
        icon={Sprout}
      />
    </div>
  );
}
