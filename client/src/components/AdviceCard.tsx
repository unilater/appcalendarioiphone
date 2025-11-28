import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AdviceCardProps {
  title: string;
  content: string;
  category: 'casa' | 'giardino' | 'cucina' | 'orto';
  season: 'Inverno' | 'Primavera' | 'Estate' | 'Autunno';
  icon: LucideIcon;
  featured?: boolean;
}

const categoryColors = {
  casa: 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  giardino: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  cucina: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
  orto: 'bg-secondary/50 text-secondary-foreground border-secondary/30'
};

export default function AdviceCard({ title, content, category, season, icon: Icon, featured }: AdviceCardProps) {
  return (
    <Card className="h-full" data-testid={`card-advice-${category}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className={`p-2.5 rounded-md ${categoryColors[category]}`}>
            <Icon className="h-5 w-5" data-testid={`icon-${category}`} />
          </div>
          <Badge variant="outline" className="text-xs" data-testid="badge-season">
            {season}
          </Badge>
        </div>
        <CardTitle className="font-serif text-xl mt-3" data-testid="text-advice-title">
          {title}
        </CardTitle>
        {featured && (
          <Badge className="w-fit mt-2" data-testid="badge-featured">
            Consiglio del giorno
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground" data-testid="text-advice-content">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
