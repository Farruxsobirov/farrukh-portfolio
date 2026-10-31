// Facts that are the same in every language: links, prices, images, tags.
// All wording lives in src/i18n/dictionaries/{en,uz,ru}.ts.

export const site = {
  name: "Farrukh Sobirov",
  wordmark: "FARRUKH",
  initials: "FS",
  timezone: "UTC+5",
  email: "farrux.work.in@gmail.com",
  url: "https://farrukh-portfolio.farrux-work-in.workers.dev", // change to your own domain later
  telegram: "https://t.me/FarruxSobirov",
  telegramHandle: "@FarruxSobirov",
  fiverr: "https://www.fiverr.com/farrux_sobirov",
  socials: [
    { label: "Telegram", href: "https://t.me/FarruxSobirov" },
    { label: "Fiverr", href: "https://www.fiverr.com/farrux_sobirov" },
    { label: "GitHub", href: "https://github.com/Farruxsobirov" },
    { label: "email", href: "mailto:farrux.work.in@gmail.com" },
  ],
};

export const navIds = ["top", "about", "journey", "work", "services", "products", "contact"] as const;
export type NavId = (typeof navIds)[number];

export const stats = [
  { value: "50+", chart: "bars" },
  { value: "5.0", chart: "pulse" },
  { value: "100%", chart: "steps" },
  { value: "3+", chart: "wave" },
] as const;

export const journeyYears = ["2023", "2024", "2025"];

export type Project = {
  slug: string;
  name: string;
  year: string;
  url: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  { slug: "webius", name: "Webius", year: "2026", url: "https://webius.io/", image: "/projects/webius.webp", tags: ["Next.js", "WordPress", "ACF", "SEO"] },
  { slug: "techchoice", name: "TechChoice", year: "2026", url: "https://techchoice.com/", image: "/projects/techchoice.webp", tags: ["Next.js", "React", "REST API", "ACF"] },
  { slug: "lifeaxislabs", name: "Life Axis Labs", year: "2026", url: "https://lifeaxislabs.com/", image: "/projects/lifeaxislabs.webp", tags: ["WooCommerce", "PHP", "ACF", "JavaScript"] },
  { slug: "labpuppies", name: "Lab Puppies Illinois", year: "2026", url: "https://labpuppiesillinois.com/", image: "/projects/labpuppies.webp", tags: ["WordPress", "Elementor", "ACF Pro", "Custom code"] },
  { slug: "limestudio", name: "Lime Studio", year: "2026", url: "https://webcam-studio-lime.com/", image: "/projects/limestudio.webp", tags: ["WordPress", "Elementor Pro", "ACF Pro", "Custom code"] },
  { slug: "valence", name: "Valence Peptides", year: "2025", url: "https://valencepeptides.com/", image: "/projects/valence.webp", tags: ["WordPress", "WooCommerce", "BeTheme", "Muffin Builder"] },
  { slug: "bhlabs", name: "BH Labs", year: "2025", url: "https://bh-labs.com/", image: "/projects/bhlabs.webp", tags: ["WordPress", "Elementor", "ACF"] },
];

export const projectYears = "2025 — 2026";

export const services = [
  { price: "$120", pattern: "rings" },
  { price: "$120", pattern: "grid" },
  { price: "$80", pattern: "diagonal" },
  { price: "$40", pattern: "pulse" },
] as const;

export const stack = [
  "Next.js",
  "React",
  "JavaScript",
  "WordPress",
  "WooCommerce",
  "ACF",
  "PHP",
  "Elementor",
  "REST API",
  "HTML5",
  "CSS3",
  "Figma",
  "Tilda",
];
