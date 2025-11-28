import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PenLine, Save, Trash2, X } from "lucide-react";
import { saveDiaryEntry, getDiaryEntry, deleteDiaryEntry } from "@/lib/diary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface DiaryEditorProps {
  date: string;
  festa: string;
  diaryVersion?: number;
  onDiaryChange?: () => void;
}

export default function DiaryEditor({ date, festa, diaryVersion = 0, onDiaryChange }: DiaryEditorProps) {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      const entry = getDiaryEntry(date);
      const initialContent = entry?.content || "";
      setContent(initialContent);
      setSavedContent(initialContent);
    }
  }, [date, isOpen]);

  // Recompute hasContent whenever diaryVersion changes
  const hasContent = useMemo(() => {
    const entry = getDiaryEntry(date);
    return !!entry?.content;
  }, [date, diaryVersion]);

  const handleSave = () => {
    saveDiaryEntry(date, content);
    setSavedContent(content);
    onDiaryChange?.();
    toast({
      title: "Nota salvata",
      description: "La tua riflessione è stata salvata con successo.",
    });
  };

  const handleDelete = () => {
    deleteDiaryEntry(date);
    setContent("");
    setSavedContent("");
    onDiaryChange?.();
    toast({
      title: "Nota eliminata",
      description: "La riflessione è stata eliminata.",
      variant: "destructive",
    });
  };

  const handleClose = () => {
    if (content !== savedContent) {
      const confirmed = window.confirm(
        "Hai modifiche non salvate. Vuoi uscire senza salvare?"
      );
      if (!confirmed) return;
    }
    setIsOpen(false);
  };

  const hasUnsavedChanges = content !== savedContent;

  const formatDateLong = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('it-IT', { 
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        handleClose();
      } else {
        setIsOpen(true);
      }
    }}>
      <DialogTrigger asChild>
        <Button 
          variant={hasContent ? "default" : "outline"}
          size="sm" 
          className="gap-1"
          data-testid={`button-diary-${date}`}
        >
          <PenLine className="h-3 w-3" />
          {hasContent ? "Modifica nota" : "Aggiungi nota"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Diario Spirituale
          </DialogTitle>
          <DialogDescription className="space-y-1">
            <div className="font-medium text-foreground">
              {formatDateLong(date)}
            </div>
            <div className="text-sm italic">
              {festa}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <label htmlFor="diary-content" className="text-sm font-medium mb-2 block">
              Le tue riflessioni personali
            </label>
            <Textarea
              id="diary-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Scrivi qui le tue riflessioni, preghiere, o note personali per questo giorno..."
              className="min-h-[300px] font-serif resize-none"
              data-testid={`textarea-diary-${date}`}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">
                {content.length} caratteri
              </span>
              {hasUnsavedChanges && (
                <Badge variant="outline" className="text-xs">
                  Modifiche non salvate
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4 border-t">
            <Button 
              onClick={handleSave}
              disabled={!hasUnsavedChanges}
              className="gap-1"
              data-testid={`button-save-diary-${date}`}
            >
              <Save className="h-4 w-4" />
              Salva
            </Button>
            {hasContent && (
              <Button 
                onClick={handleDelete}
                variant="destructive"
                className="gap-1"
                data-testid={`button-delete-diary-${date}`}
              >
                <Trash2 className="h-4 w-4" />
                Elimina
              </Button>
            )}
            <Button 
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="ml-auto gap-1"
            >
              <X className="h-4 w-4" />
              Chiudi
            </Button>
          </div>

          <Card className="border-dashed bg-muted/30">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground italic">
                💡 <strong>Suggerimento:</strong> Usa questo spazio per annotare le tue riflessioni sulle letture del giorno, 
                preghiere personali, o momenti di grazia vissuti. Il diario è salvato localmente sul tuo dispositivo.
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
