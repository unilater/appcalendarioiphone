// ======================================================
// CONFIGURAZIONE — INSERISCI QUI LA TUA API KEY
// ======================================================

const API_URL = "https://stream.calendariodellafede.it/api/chat/completions";


export const API_KEY = "sk-c081102b8ef34d9093bca49d0b1140e2"; 



// ======================================================
// TIPI DI RISPOSTA
// ======================================================

export interface ChatResult {
  message: string;
  follow_up?: string[];
}


// ======================================================
// FUNZIONE PRINCIPALE — INVIO MESSAGGI A OPENWEBUI
// ======================================================

export async function sendMessageToOpenWebUI(prompt: string): Promise<ChatResult> {
  
  if (!API_KEY) {
    throw new Error("⚠️ Nessuna API KEY impostata in openwebui.ts");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": API_KEY,   // 🔥 API KEY inserita qui
    },
    body: JSON.stringify({
      model: "your-model-here",   // es: "llama3", "mistral", ecc.
      messages: [{ role: "user", content: prompt }],
      stream: false,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Errore API OpenWebUI (${response.status}): ${text}`);
  }

  const data = await response.json();

  return {
    message: data?.choices?.[0]?.message?.content ?? "",
    follow_up: data?.choices?.[0]?.follow_up ?? [],
  };
}
