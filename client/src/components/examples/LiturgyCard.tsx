import LiturgyCard from '../LiturgyCard';
import saintFrancis from '@assets/generated_images/Saint_Francis_portrait_icon_5b386014.png';

export default function LiturgyCardExample() {
  const mockData = {
    liturgicalDay: "III Domenica di Avvento",
    liturgicalColor: 'purple' as const,
    saint: {
      name: "San Francesco d'Assisi",
      imageUrl: saintFrancis
    },
    readings: [
      {
        title: "Prima Lettura",
        reference: "Isaia 61, 1-2.10-11",
        excerpt: "Lo spirito del Signore Dio è su di me, perché il Signore mi ha consacrato con l'unzione; mi ha mandato a portare il lieto annuncio ai miseri...",
        fullText: "...a fasciare le piaghe dei cuori spezzati, a proclamare la libertà degli schiavi, la scarcerazione dei prigionieri."
      },
      {
        title: "Salmo Responsoriale",
        reference: "Luca 1",
        excerpt: "L'anima mia magnifica il Signore e il mio spirito esulta in Dio, mio salvatore."
      },
      {
        title: "Vangelo",
        reference: "Giovanni 1, 6-8.19-28",
        excerpt: "Venne un uomo mandato da Dio: il suo nome era Giovanni. Egli venne come testimone per dare testimonianza alla luce...",
        fullText: "...perché tutti credessero per mezzo di lui. Non era lui la luce, ma doveva dare testimonianza alla luce."
      }
    ]
  };

  return <LiturgyCard data={mockData} />;
}
