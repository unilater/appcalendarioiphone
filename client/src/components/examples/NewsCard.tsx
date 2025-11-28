import NewsCard from '../NewsCard';
import popeImage from '@assets/generated_images/Pope_greeting_faithful_Vatican_9f60b570.png';
import churchImage from '@assets/generated_images/Church_interior_morning_light_7d95c4e9.png';
import pilgrimsImage from '@assets/generated_images/Pilgrims_praying_at_shrine_52395b4e.png';

export default function NewsCardExample() {
  return (
    <div className="space-y-4 max-w-2xl">
      <NewsCard
        title="Papa Francesco incontra i fedeli in Piazza San Pietro"
        excerpt="Durante l'udienza generale, il Santo Padre ha parlato dell'importanza della preghiera e della misericordia nella vita quotidiana dei cristiani."
        imageUrl={popeImage}
        source="Vatican News"
        timestamp="2 ore fa"
        onClick={() => console.log('News clicked: Papa Francesco')}
      />
      <NewsCard
        title="Nuova iniziativa per il restauro delle chiese storiche"
        excerpt="La Conferenza Episcopale annuncia un programma di recupero del patrimonio artistico e architettonico delle chiese italiane."
        imageUrl={churchImage}
        source="Avvenire"
        timestamp="5 ore fa"
        onClick={() => console.log('News clicked: Restauro chiese')}
      />
      <NewsCard
        title="Pellegrinaggio mariano: migliaia di fedeli a Lourdes"
        excerpt="Grande partecipazione al pellegrinaggio annuale al santuario della Madonna, con momenti di preghiera e riflessione spirituale."
        imageUrl={pilgrimsImage}
        source="Catholic News"
        timestamp="1 giorno fa"
        onClick={() => console.log('News clicked: Pellegrinaggio')}
      />
    </div>
  );
}
