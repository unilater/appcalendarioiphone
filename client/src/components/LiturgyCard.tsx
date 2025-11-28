import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book, Cross } from "lucide-react";

interface Reading {
  title: string;
  reference: string;
  excerpt: string;
  fullText?: string;
}

interface LiturgyData {
  liturgicalDay: string;
  liturgicalColor: 'red' | 'purple' | 'green' | 'white' | 'gold';
  saint: {
    name: string;
    imageUrl?: string;
  };
  readings: Reading[];
}

const colorMap = {
  red: 'hsl(0 65% 48%)',
  purple: 'hsl(270 35% 50%)',
  green: 'hsl(120 35% 40%)',
  white: 'hsl(0 0% 95%)',
  gold: 'hsl(45 85% 50%)'
};

export default function LiturgyCard({ data }: { data: LiturgyData }) {
  return (
    <Card className="relative overflow-hidden" data-testid="card-liturgy">
      <div 
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: colorMap[data.liturgicalColor] }}
      />
      <CardHeader className="pl-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <CardTitle className="font-serif text-2xl md:text-3xl" data-testid="text-liturgical-day">
            {data.liturgicalDay}
          </CardTitle>
          <Badge variant="outline" className="font-sans" data-testid="badge-liturgical-color">
            {data.liturgicalColor === 'red' && 'Rosso'}
            {data.liturgicalColor === 'purple' && 'Viola'}
            {data.liturgicalColor === 'green' && 'Verde'}
            {data.liturgicalColor === 'white' && 'Bianco'}
            {data.liturgicalColor === 'gold' && 'Oro'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pl-6 space-y-6">
        <div className="flex items-center gap-3" data-testid="section-saint">
          <Avatar className="h-14 w-14">
            {data.saint.imageUrl ? (
              <AvatarImage src={data.saint.imageUrl} alt={data.saint.name} />
            ) : null}
            <AvatarFallback className="bg-muted">
              <Cross className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Santo del giorno</p>
            <p className="font-serif text-lg font-semibold" data-testid="text-saint-name">{data.saint.name}</p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {data.readings.map((reading, index) => (
            <AccordionItem key={index} value={`reading-${index}`} data-testid={`accordion-reading-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-primary" />
                  <span className="font-serif text-lg font-semibold">{reading.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <p className="text-sm italic text-muted-foreground" data-testid={`text-reference-${index}`}>
                    {reading.reference}
                  </p>
                  <p className="font-serif text-base leading-relaxed" data-testid={`text-excerpt-${index}`}>
                    {reading.excerpt}
                  </p>
                  {reading.fullText && (
                    <p className="font-serif text-base leading-relaxed text-muted-foreground pt-3 border-t">
                      {reading.fullText}
                    </p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
