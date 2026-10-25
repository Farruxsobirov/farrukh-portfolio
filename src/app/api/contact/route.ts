// Receives the contact form and forwards it to Telegram.
// Needs two environment variables (set them in Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  – token from @BotFather
//   TELEGRAM_CHAT_ID    – your chat id (the bot sends messages here)

const LIMITS = { name: 100, email: 200, message: 4000 };

// Very small in-memory rate limit: max 5 messages per IP per 10 minutes.
// Resets when the serverless instance restarts, which is fine for a portfolio.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real people never fill the hidden "website" field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, LIMITS.name);
  const email = String(body.email ?? "").trim().slice(0, LIMITS.email);
  const message = String(body.message ?? "").trim().slice(0, LIMITS.message);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) {
    return Response.json({ ok: false, error: "too_many" }, { status: 429 });
  }

  const text = [
    "📩 <b>New message from your portfolio</b>",
    "",
    `<b>Name:</b> ${escape(name)}`,
    `<b>Email:</b> ${escape(email)}`,
    "",
    escape(message),
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    if (!res.ok) {
      console.error("Telegram error", res.status, await res.text());
      return Response.json({ ok: false, error: "telegram" }, { status: 502 });
    }
  } catch (err) {
    console.error("Telegram request failed", err);
    return Response.json({ ok: false, error: "telegram" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
