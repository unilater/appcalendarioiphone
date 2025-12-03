import { useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MODEL = "llama3.1:8b";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [chatId, setChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [followUps, setFollowUps] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, followUps]);

  // 1️⃣ CREA CHAT
async function createChat(userText: string) {
  const res = await fetch("/api/v1/chats/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat: {
        title: null,
        model: MODEL,
        system: null,
        messages: [
          { role: "user", content: userText }
        ]
      },
      folder_id: null
    })
  });

  const data = await res.json();
  return data.id;
}




  // 2️⃣ COMPLETION
 async function requestCompletion(cid: string, userText: string) {
  const res = await fetch("/api/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      chat_id: cid,
      stream: false,
      messages: [
        { role: "user", content: userText }
      ],
      background_tasks: {
        follow_up_generation: true
      }
    }),
  });

  return res.json();
}


// 3️⃣ FINALIZE — versione corretta
async function requestFinalize(cid: string, assistantId: string, assistantText: string) {
  await fetch("/api/v1/chat/completed", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: cid,
      message_id: assistantId,
      model: MODEL,
      message: {
        role: "assistant",
        content: assistantText
      }
    })
  });
}



  // 4️⃣ FOLLOW-UPS
async function requestFollowUps(fullAssistantText: string) {
  const res = await fetch("/api/v1/tasks/follow_up/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "assistant", content: fullAssistantText }],
    }),
  });

  const data = await res.json();

  let raw = data?.choices?.[0]?.message?.content || "";

  raw = raw.replace(/```json/i, "")
           .replace(/```/g, "")
           .trim();

  try {
    const parsed = JSON.parse(raw);
    setFollowUps(parsed.follow_ups || []);
  } catch {
    console.error("❌ JSON follow-up NON valido:", raw);
  }
}



  // 🌟 FLUSSO COMPLETO
  async function handleSend() {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");

    setMessages((m) => [...m, { role: "user", content: userText }]);

    // A) se la chat non esiste → creala
    let cid = chatId;
    if (!cid) {
      cid = await createChat(userText);
      setChatId(cid);
    }

    // B) manda completion
    const comp = await requestCompletion(cid!, userText);

    const assistantText =
      comp?.choices?.[0]?.message?.content ?? "…";

    const assistantId = comp?.id;

    setMessages((m) => [...m, { role: "assistant", content: assistantText }]);

    // C) finalizza
    await requestFinalize(cid!, assistantId, assistantText);

    // D) followup
    await requestFollowUps(assistantText);
  }

  return (
    <div className="container max-w-3xl mx-auto px-4 py-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <h2 className="text-2xl font-serif">Chat</h2>
          <p className="text-sm text-muted-foreground">Assistente spirituale AI</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* MESSAGGI */}
          <div className="h-[55vh] overflow-y-auto pr-2 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[85%] ${
                  msg.role === "user"
                    ? "ml-auto bg-primary text-white"
                    : "mr-auto bg-muted"
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* FOLLOW UPS */}
          {followUps.length > 0 && (
            <div className="space-y-2">
              <Separator />
              <h4 className="font-serif text-lg">Suggerimenti</h4>
              <div className="flex flex-wrap gap-2">
                {followUps.map((f, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(f)}
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* INPUT */}
          <div className="flex gap-2">
            <Input
              value={input}
              placeholder="Scrivi un messaggio…"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Invia</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
