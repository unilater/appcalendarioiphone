import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/openwebui", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.1:8b", // puoi modificarlo
          messages: [...messages, newMessage],
          stream: false,
        }),
      });

      const data = await res.json();

      const aiReply: Message = {
        role: "assistant",
        content: data?.choices?.[0]?.message?.content || "Errore nella risposta",
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      console.error("Errore OpenWebUI:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Errore di connessione al server." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <h1 className="font-serif text-3xl mb-6">Chat</h1>

      <Card className="shadow-sm border">
        <CardHeader className="border-b py-4">
          <h2 className="font-serif text-xl">Conversazione</h2>
        </CardHeader>

        <CardContent className="space-y-4 py-4 max-h-[65vh] overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}

              <div
                className={`px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.content}
              </div>

              {msg.role === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>Tu</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <Input
          placeholder="Scrivi un messaggio…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage} disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send size={16} />}
        </Button>
      </div>
    </div>
  );
}
