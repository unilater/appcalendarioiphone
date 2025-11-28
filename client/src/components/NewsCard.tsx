import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, AlertTriangle, Shield, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface NewsSource {
  name: string;
  url?: string;
  verifiedBy?: string;
}

interface NewsCardProps {
  title: string;
  excerpt: string;
  source: string;
  timestamp: string;
  verified?: boolean;
  reliabilityScore?: number;
  sources?: NewsSource[];
  factCheckSummary?: string;
  onClick?: () => void;
}

export default function NewsCard({ 
  title, 
  excerpt, 
  source, 
  timestamp, 
  verified = false,
  reliabilityScore,
  sources = [],
  factCheckSummary,
  onClick 
}: NewsCardProps) {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);

  const getReliabilityColor = (score?: number) => {
    if (!score) return "text-muted-foreground";
    if (score >= 80) return "text-green-600 dark:text-green-500";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-500";
    return "text-red-600 dark:text-red-500";
  };

  const getReliabilityText = (score?: number) => {
    if (!score) return "Non verificato";
    if (score >= 80) return "Alta affidabilità";
    if (score >= 60) return "Media affidabilità";
    return "Bassa affidabilità";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const getAccentColor = () => {
    if (!verified) return 'rgb(239 68 68)';
    return (reliabilityScore ?? 0) >= 80 ? 'rgb(34 197 94)' : 'rgb(234 179 8)';
  };

  return (
    <Card 
      className="hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group relative overflow-visible" 
      data-testid="card-news"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Accent stripe */}
      <div 
        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full" 
        style={{ backgroundColor: getAccentColor() }}
      />
      <CardContent className="p-0">
        <div className="p-5 pl-6">
          <div className="mb-4">
            <div className="w-full">
              <div className="flex items-start gap-3 mb-2">
                <h3 
                  className="font-serif font-bold text-lg md:text-xl leading-tight line-clamp-2 flex-1" 
                  data-testid="text-news-title"
                >
                  {title}
                </h3>
                {verified && (
                  <Badge 
                    variant="outline" 
                    className="flex-shrink-0 gap-1 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 font-semibold"
                    data-testid="badge-verified"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verificato
                  </Badge>
                )}
              </div>
              <p 
                className="text-sm text-muted-foreground line-clamp-2 mb-3" 
                data-testid="text-news-excerpt"
              >
                {excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                <span data-testid="text-news-source">{source}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span data-testid="text-news-timestamp">{timestamp}</span>
                </div>
                {sources.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span data-testid="text-news-sources-count">{sources.length} {sources.length === 1 ? 'fonte' : 'fonti'}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {reliabilityScore !== undefined && (
            <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-muted/50 rounded-md">
              <Shield className={`h-4 w-4 ${getReliabilityColor(reliabilityScore)}`} />
              <span className="text-sm font-medium" data-testid="text-reliability-label">
                {getReliabilityText(reliabilityScore)}
              </span>
              <span className={`text-sm font-semibold ml-auto ${getReliabilityColor(reliabilityScore)}`} data-testid="text-reliability-score">
                {reliabilityScore}%
              </span>
            </div>
          )}

          {factCheckSummary && (
            <div className="mb-3 px-3 py-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 dark:text-blue-100" data-testid="text-fact-check-summary">
                  {factCheckSummary}
                </p>
              </div>
            </div>
          )}

          {sources.length > 0 && (
            <Collapsible open={isSourcesOpen} onOpenChange={setIsSourcesOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between"
                  data-testid="button-toggle-sources"
                >
                  <span className="text-sm font-medium">Fonti verificate ({sources.length})</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSourcesOpen ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 pt-2">
                {sources.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2 p-2 rounded-md bg-muted/30 text-sm"
                    data-testid={`source-item-${idx}`}
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium" data-testid={`source-name-${idx}`}>{src.name}</div>
                      {src.verifiedBy && (
                        <div className="text-xs text-muted-foreground" data-testid={`source-verified-by-${idx}`}>
                          Verificato da: {src.verifiedBy}
                        </div>
                      )}
                    </div>
                    {src.url && (
                      <a 
                        href={src.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-elevate p-1 rounded"
                        data-testid={`link-source-${idx}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
