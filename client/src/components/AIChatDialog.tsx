import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  initialPrompt?: string;
  context?: string;
}

export function AIChatDialog({
  open,
  onOpenChange,
  title,
  initialPrompt,
  context,
}: AIChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset messages when dialog closes
  useEffect(() => {
    if (!open) {
      setMessages([]);
      setInput("");
    }
  }, [open]);

  // Auto-send initial prompt when dialog opens OR when prompt changes
  useEffect(() => {
    if (open && initialPrompt) {
      // Reset messages when new prompt arrives
      setMessages([]);
      handleSend(initialPrompt);
    }
  }, [open, initialPrompt]);

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simula una risposta AI fittizia basata sul contesto
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const responses: Record<string, string> = {
      // Riflessioni spirituali
      "spiegami meglio": `Certamente. La riflessione spirituale ci invita a riconoscere la presenza divina nelle piccole cose quotidiane. 

Questo insegnamento ha radici profonde nella spiritualità cattolica, in particolare nella tradizione benedettina del "ora et labora" e nella spiritualità ignaziana di "trovare Dio in tutte le cose".

San Francesco d'Assisi ci ha mostrato come ogni creatura sia un riflesso del Creatore. Anche nelle attività più semplici - preparare il pane, coltivare l'orto, prendersi cura della casa - possiamo trovare un momento di preghiera e gratitudine.

La chiave è vivere con consapevolezza e attenzione, trasformando ogni gesto in un atto d'amore.`,

      "quale salmo": `Il Salmo 23 (22) "Il Signore è il mio pastore" è particolarmente adatto per questa riflessione.

Ecco il testo completo:

"Il Signore è il mio pastore:
non manco di nulla.
Su pascoli erbosi mi fa riposare,
ad acque tranquille mi conduce.
Rinfranca l'anima mia,
mi guida per il giusto cammino
a motivo del suo nome.

Anche se vado per una valle oscura,
non temo alcun male, perché tu sei con me.
Il tuo bastone e il tuo vincastro
mi danno sicurezza."

Questo salmo ci ricorda che, anche nei momenti difficili, il Signore ci accompagna e provvede a noi.`,

      "autori": `Diversi autori spirituali hanno approfondito questo tema:

• **Santa Teresa d'Avila** - "Il Castello Interiore"
Insegna come trovare Dio nell'intimità dell'anima attraverso la preghiera contemplativa.

• **San Giovanni della Croce** - "Salita al Monte Carmelo"
Descrive il cammino di purificazione spirituale per unirsi a Dio.

• **Fratello Lawrence** - "La Pratica della Presenza di Dio"
Un classico sulla vita spirituale nel quotidiano, scritto da un umile cuoco carmelitano.

• **San Francesco di Sales** - "Introduzione alla Vita Devota"
Una guida pratica per vivere la santità nel mondo.

Ti consiglio di iniziare con Fratello Lawrence, è molto accessibile e pratico.`,

      default: `Grazie per la tua domanda sulla riflessione spirituale.

${context ? `Basandomi sul testo: "${context.substring(0, 150)}..."` : ""}

Posso aiutarti ad approfondire questo tema da diverse prospettive:

• **Aspetto liturgico**: Come questo si collega alle letture del giorno
• **Riferimenti scritturali**: Passi biblici correlati
• **Applicazione pratica**: Come vivere questa riflessione nel quotidiano
• **Padri della Chiesa**: Cosa hanno detto i santi su questo tema

Cosa ti interessa approfondire?`,
    };

    // Trova la risposta più appropriata
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("spiegami") || lowerMessage.includes("approfondisci")) {
      return responses["spiegami meglio"];
    } else if (lowerMessage.includes("salmo") || lowerMessage.includes("psalm")) {
      return responses["quale salmo"];
    } else if (lowerMessage.includes("autori") || lowerMessage.includes("libri") || lowerMessage.includes("letture")) {
      return responses["autori"];
    } else {
      return responses.default;
    }
  };

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await simulateAIResponse(textToSend);
      
      // Simula typing effect
      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages((prev) => [...prev, assistantMessage]);

      const words = aiResponse.split(" ");
      for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 10));
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage && lastMessage.role === "assistant") {
            lastMessage.content = words.slice(0, i + 1).join(" ");
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Errore AI:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="font-serif text-xl flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 min-h-[300px]">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm font-serif whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t px-6 py-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Scrivi la tua domanda..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              data-testid="input-ai-chat"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              size="icon"
              data-testid="button-send-ai"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Nota: Questa è una demo con risposte simulate
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
