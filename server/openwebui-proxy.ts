import type { Request, Response } from "express";

//
// 🔥 THIS is the REAL OpenWebUI server
// (Quello che risponde a curl sulla tua macchina esterna)
//
const BASE = "https://stream.calendariodellafede.it";
const API_KEY = "sk-c081102b8ef34d9093bca49d0b1140e2";

async function forward(req: Request, res: Response, path: string) {
  try {
    const upstream = await fetch(BASE + path, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const raw = await upstream.text();

    try {
      return res.status(upstream.status).json(JSON.parse(raw));
    } catch {
      return res.status(502).json({ error: "Invalid JSON", raw });
    }

  } catch (e) {
    return res.status(500).json({ error: "Proxy failed", details: String(e) });
  }
}

// ---------------------
// REAL OpenWebUI endpoints
// ---------------------

export function proxyChatNew(req: Request, res: Response) {
  return forward(req, res, "/api/v1/chats/new");
}

export function proxyCompletion(req: Request, res: Response) {
  return forward(req, res, "/api/v1/chat/completions");
}

export function proxyFinalize(req: Request, res: Response) {
  return forward(req, res, "/api/v1/chat/completed");
}

export function proxyFollowup(req: Request, res: Response) {
  return forward(req, res, "/api/v1/tasks/follow_up/completions");
}
