import { Request, Response, NextFunction } from "express";

const OPENWEBUI_URL =
  "https://stream.calendariodellafede.it/api/chat/completions";


const OPENWEBUI_API_KEY = "sk-c081102b8ef34d9093bca49d0b1140e2";

export async function openwebuiProxy(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
    const response = await fetch(OPENWEBUI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENWEBUI_API_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    try {
      const json = JSON.parse(text);
      return res.status(response.status).json(json);
    } catch {
      console.error("❌ Risposta non JSON:", text);
      return res.status(500).json({
        error: "Invalid JSON received from OpenWebUI",
        raw: text,
      });
    }
  } catch (error) {
    console.error("❌ Proxy OpenWebUI ERROR:", error);
    return res.status(500).json({
      error: "Proxy error",
      details: String(error),
    });
  }
}
