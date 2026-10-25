# Farrukh Sobirov — Portfolio

Personal portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, **GSAP ScrollTrigger**, **Lenis**, **Framer Motion** and **React Three Fiber**.

## Features

- Shutter intro and smooth scrolling (Lenis)
- Hero with an animated halftone canvas and a wordmark whose letters turn away on scroll
- Live dot-matrix charts in the About cards
- Pinned "Journey" timeline: a dotted calendar ruler that becomes a perspective road
- Dark → light dot transition into a 3D curved project carousel (Three.js)
- Services, tech-stack marquee, FAQ, contact form (opens the visitor's email app)
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

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repository.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.

Every push to `main` redeploys automatically.

## Contact form → Telegram

The form posts to `/api/contact`, which forwards the message to Telegram.
Set two environment variables in Vercel (**Settings → Environment Variables**), then redeploy:

| Name | Value |
|---|---|
| `TELEGRAM_BOT_TOKEN` | token from [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | your chat id (send `/start` to your bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `message.chat.id`) |

Without them the form falls back to opening the visitor's email app. Includes a honeypot field and a simple per-IP rate limit.

## Credits

Typeface: [Overused Grotesk](https://github.com/RandomMaerks/Overused-Grotesk) by Bao Nguyen, SIL Open Font License 1.1 (`src/fonts/OFL-LICENSE.txt`).
