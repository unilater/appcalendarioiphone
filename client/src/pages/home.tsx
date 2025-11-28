import LiturgyCard from "@/components/LiturgyCard";
import saintTeresa from '@assets/generated_images/Saint_Teresa_portrait_icon_2b75455d.png';

export default function Home() {
  const liturgyData = {
    liturgicalDay: "Martedì della XXXIII settimana del Tempo Ordinario",
    liturgicalColor: 'green' as const,
    saint: {
      name: "Santa Teresa d'Avila",
      imageUrl: saintTeresa
    },
    readings: [
      {
        title: "Prima Lettura",
        reference: "Apocalisse 14, 14-19",
        excerpt: "Io, Giovanni, vidi: ecco una nube bianca, e sulla nube stava seduto uno simile a un Figlio d'uomo: aveva sul capo una corona d'oro e in mano una falce affilata.",
        fullText: "Un altro angelo uscì dal tempio, gridando a gran voce a colui che stava seduto sulla nube: «Getta la tua falce e mieti; è giunta l'ora di mietere, perché la messe della terra è matura»."
      },
      {
        title: "Salmo Responsoriale",
        reference: "Salmo 95",
        excerpt: "Gioiscano i cieli, esulti la terra, risuoni il mare e quanto racchiude; esultino i campi e quanto contengono, acclamino tutti gli alberi della foresta."
      },
      {
        title: "Vangelo",
        reference: "Luca 21, 5-11",
        excerpt: "In quel tempo, mentre alcuni parlavano del tempio, che era ornato di belle pietre e di doni votivi, Gesù disse: «Verranno giorni nei quali, di quello che vedete, non sarà lasciata pietra su pietra che non sarà distrutta».",
        fullText: "Gli domandarono: «Maestro, quando dunque accadranno queste cose e quale sarà il segno, quando esse staranno per accadere?». Rispose: «Badate di non lasciarvi ingannare. Molti infatti verranno nel mio nome dicendo: Sono io, e: Il tempo è vicino. Non andate dietro a loro!»."
      }
    ]
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">
          Liturgia del Giorno
        </h1>
        <p className="text-muted-foreground">
          {new Date().toLocaleDateString('it-IT', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
      <LiturgyCard data={liturgyData} />
    </div>
  );
}
