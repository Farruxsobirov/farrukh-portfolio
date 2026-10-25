// All portfolio content lives here. Edit this file to update the site.

export const site = {
  name: "Farrukh Sobirov",
  firstName: "Farrukh",
  wordmark: "FARRUKH",
  initials: "FS",
  role: "Web Developer",
  location: "Tashkent, Uzbekistan",
  timezone: "UTC+5",
  availability: "Available for freelance & full-time",
  email: "farrux.work.in@gmail.com",
  url: "https://farrukh-portfolio-three.vercel.app",
  headline: {
    strong: "Fast, modern websites.",
    soft: "Built with Next.js & WordPress.",
  },
  description:
    "Web developer with 3+ years of experience building headless Next.js + WordPress websites, custom WordPress themes and WooCommerce stores for clients around the world.",
  telegram: "https://t.me/FarruxSobirov",
  fiverr: "https://www.fiverr.com/farrux_sobirov",
  socials: [
    { label: "Telegram", href: "https://t.me/FarruxSobirov" },
    { label: "Fiverr", href: "https://www.fiverr.com/farrux_sobirov" },
    { label: "GitHub", href: "https://github.com/Farruxsobirov" },
    { label: "Email", href: "mailto:farrux.work.in@gmail.com" },
  ],
};

export const nav = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const about = {
  title: "A website that works for you.",
  soft: "Not the other way around.",
  text: "I build fast, SEO-friendly websites that clients can edit entirely on their own. From pixel-accurate Figma builds to headless Next.js frontends powered by WordPress + ACF, I take full ownership from first call to launch and beyond.",
  stats: [
    { value: "50+", label: "Projects", note: "Delivered for clients worldwide", chart: "bars" },
    { value: "5.0", label: "Rating", note: "Average client review score", chart: "pulse" },
    { value: "100%", label: "On time", note: "Every project delivered on schedule", chart: "steps" },
    { value: "3+", label: "Years", note: "Of hands-on web development", chart: "wave" },
  ] as const,
};

export const journey = {
  steps: [
    {
      year: "2023",
      label: "Step 01",
      title: "Started freelancing.",
      text: "Began building WordPress and Elementor websites for clients across the world, learning to ship fast without cutting corners.",
    },
    {
      year: "2024",
      label: "Step 02",
      title: "Went fully custom.",
      text: "Hand-coded WordPress themes with ACF and full WooCommerce stores. Every section editable by the client, no page builders required.",
    },
    {
      year: "2025",
      label: "Step 03",
      title: "Went headless.",
      text: "Next.js and React frontends with WordPress as the CMS. Fast page loads, strong SEO and smooth, animated interfaces.",
    },
  ],
  statement: ["Launch", "is", "just", "one", "step.", "I", "keep", "improving", "your", "site", "until", "it", "becomes", "a", "real", "asset."],
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  url: string;
  image: string;
  kind: string;
  summary: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "webius",
    name: "Webius",
    year: "2026",
    url: "https://webius.io/",
    image: "/projects/webius.webp",
    kind: "Headless WordPress + Next.js",
    summary:
      "Headless architecture with WordPress + ACF as the CMS and a Next.js frontend. Flexible field groups let the team manage every page, rendered fast and SEO-ready.",
    tags: ["Next.js", "WordPress", "ACF", "SEO"],
  },
  {
    slug: "techchoice",
    name: "TechChoice",
    year: "2026",
    url: "https://techchoice.com/",
    image: "/projects/techchoice.webp",
    kind: "Next.js frontend, WordPress backend",
    summary:
      "Decoupled site for a Boston tech advisory firm. Enterprise dark theme, reusable React sections, smooth scroll interactions and content editors can update without a developer.",
    tags: ["Next.js", "React", "REST API", "ACF"],
  },
  {
    slug: "lifeaxislabs",
    name: "Life Axis Labs",
    year: "2026",
    url: "https://lifeaxislabs.com/",
    image: "/projects/lifeaxislabs.webp",
    kind: "WooCommerce store, custom theme",
    summary:
      "Online store on a custom theme built from scratch. Slide-out cart with free-shipping progress, customer accounts and a certificate library organised by product and batch.",
    tags: ["WooCommerce", "PHP", "ACF", "JavaScript"],
  },
  {
    slug: "bhlabs",
    name: "BH Labs",
    year: "2025",
    url: "https://bh-labs.com/",
    image: "/projects/bhlabs.webp",
    kind: "Corporate website on WordPress",
    summary:
      "Multi-page site for a wellness technology company with landing pages per industry, video testimonials, 3D studio tours and quote request forms.",
    tags: ["WordPress", "Elementor", "ACF"],
  },
];

export const services = [
  {
    title: "Headless WordPress + Next.js",
    text: "A React frontend with WordPress as the CMS. Fast, SEO-friendly and fully editable.",
    price: "$120",
    pattern: "rings",
  },
  {
    title: "Custom WordPress with ACF Pro",
    text: "A hand-coded theme where every section is editable. No page builder bloat.",
    price: "$120",
    pattern: "grid",
  },
  {
    title: "Elementor landing pages",
    text: "Pixel-perfect Figma to WordPress, responsive on every device.",
    price: "$80",
    pattern: "diagonal",
  },
  {
    title: "Fixes & speed optimisation",
    text: "Errors, bugs, migrations, audits and making slow sites fast again.",
    price: "$40",
    pattern: "pulse",
  },
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

export const languages = ["English", "Russian", "Uzbek"];
