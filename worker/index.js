// Cloudflare Worker in front of the static Next.js export (the "out" folder).
// 1. "/" and any path without a language prefix → redirect to /en, /uz or /ru
//    (saved cookie first, then the browser's Accept-Language, then English).
// 2. POST /api/contact → forwards the contact form to Telegram.
// Everything else is served from the static files.
//
// Telegram secrets (Cloudflare → Worker → Settings → Variables and Secrets):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

const LOCALES = ["en", "uz", "ru"];
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "lang";
const LIMITS = { name: 100, email: 200, message: 4000 };

function pickLocale(request) {
  const cookie = request.headers.get("cookie") || "";
  const saved = cookie.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([a-z]+)`));
  if (saved && LOCALES.includes(saved[1])) return saved[1];
  const header = request.headers.get("accept-language") || "";
  const wanted = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { base } of wanted) if (LOCALES.includes(base)) return base;
  return DEFAULT_LOCALE;
}

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const json = (data, status = 200) => Response.json(data, { status });

// Small per-instance rate limit: 5 messages per IP per 10 minutes.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

async function contact(request, env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return json({ ok: false, error: "not_configured" }, 503);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ ok: true });

  const name = String(body.name ?? "").trim().slice(0, LIMITS.name);
  const email = String(body.email ?? "").trim().slice(0, LIMITS.email);
  const message = String(body.message ?? "").trim().slice(0, LIMITS.message);
  const lang = LOCALES.includes(String(body.lang)) ? String(body.lang).toUpperCase() : "EN";
  const topic = String(body.topic ?? "").trim().slice(0, 60);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "invalid" }, 422);

  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  if (limited(ip)) return json({ ok: false, error: "too_many" }, 429);

  const text = [
    "📩 <b>New message from your website</b>",
    "",
    `<b>Name:</b> ${escape(name)}`,
    `<b>Email:</b> ${escape(email)}`,
    `<b>Language:</b> ${lang}`,
    ...(topic ? [`<b>Topic:</b> ${escape(topic)}`] : []),
    "",
    escape(message),
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    if (!res.ok) {
      console.error("Telegram error", res.status, await res.text());
      return json({ ok: false, error: "telegram" }, 502);
    }
  } catch (err) {
    console.error("Telegram request failed", err);
    return json({ ok: false, error: "telegram" }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname === "/api/contact") {
      if (request.method !== "POST") return json({ ok: false, error: "method" }, 405);
      return contact(request, env);
    }

    const hasPrefix = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
    const isFile = /\.[a-z0-9]+$/i.test(pathname) || pathname.startsWith("/_next/");
    if (!hasPrefix && !isFile) {
      url.pathname = `/${pickLocale(request)}${pathname === "/" ? "/" : pathname}`;
      return Response.redirect(url.toString(), 302);
    }

    return env.ASSETS.fetch(request);
  },
};
