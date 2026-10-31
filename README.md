# Farrukh Sobirov — Portfolio

Personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, **GSAP ScrollTrigger**, **Lenis**, **Framer Motion** and **React Three Fiber**.

## Features

- Shutter intro and smooth scrolling (Lenis)
- Hero with an animated halftone canvas and a wordmark whose letters turn away on scroll
- Live dot-matrix charts in the About cards
- Pinned "Journey" timeline: a dotted calendar ruler that becomes a perspective road
- Dark → light dot transition into a 3D curved project carousel (Three.js)
- Services, tech-stack marquee, FAQ, contact form (sent to Telegram)
- Products section and Logvia plugin pages with light/dark mode and a mega menu
- Optional UI sounds (off by default), reduced-motion support, responsive down to phones

## Edit the content

- Wording in each language: [`src/i18n/dictionaries/en.ts`](src/i18n/dictionaries/en.ts), [`uz.ts`](src/i18n/dictionaries/uz.ts), [`ru.ts`](src/i18n/dictionaries/ru.ts). TypeScript fails the build if a language is missing a key.
- Facts shared by all languages (links, prices, project images, tags): [`src/content/site.ts`](src/content/site.ts).

## Languages

The site is served at `/en`, `/uz` and `/ru`. Visiting `/` redirects to the visitor's saved choice, then their browser language, then English (`src/proxy.ts`). Each page has its own title, description and `hreflang` links.
Project images are in `public/projects/` (16:9 WebP or JPG works best).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Products

Plugin pages live next to the portfolio and share its design, with a light/dark switch and a mega menu:

- `/{lang}/logvia/` – Logvia overview, pricing and FAQ
- `/{lang}/logvia/docs/`, `/{lang}/logvia/changelog/`
- `/{lang}/terms/`, `/{lang}/privacy/`, `/{lang}/refund/`

Copy and prices: [`src/content/logvia.ts`](src/content/logvia.ts). Docs and legal text: [`src/content/logvia-pages.ts`](src/content/logvia-pages.ts). Screenshots: `public/logvia/`.

## Deploy on Cloudflare

The site is a static export (`out/`) served by a small Cloudflare Worker ([`worker/index.js`](worker/index.js)) that
sends `/` to the right language and forwards the contact form to Telegram.

1. In Cloudflare: **Workers & Pages → Create → Import a repository** and pick this repository.
2. Build command: `npm run build` · Deploy command: `npx wrangler deploy` (settings come from [`wrangler.jsonc`](wrangler.jsonc)).
3. Every push to the production branch redeploys automatically.

Run it locally like production: `npm run build && npx wrangler dev`.

## Contact form → Telegram

The form posts to `/api/contact`, which the Worker forwards to Telegram.
Add two secrets in Cloudflare (**Worker → Settings → Variables and Secrets**, type *Secret*):

| Name | Value |
|---|---|
| `TELEGRAM_BOT_TOKEN` | token from [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | your chat id (send `/start` to your bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id`) |

Without them the form falls back to opening the visitor's email app. Includes a honeypot field and a simple per-IP rate limit.

## Credits

Typeface: [Overused Grotesk](https://github.com/RandomMaerks/Overused-Grotesk) by Bao Nguyen, SIL Open Font License 1.1 (`src/fonts/OFL-LICENSE.txt`).
