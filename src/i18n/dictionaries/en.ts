// English. This file defines the shape every other language must follow.

export const en = {
  meta: {
    title: "Farrukh Sobirov — Web Developer",
    description:
      "Web developer with 3+ years of experience building headless Next.js + WordPress websites, custom WordPress themes and WooCommerce stores for clients around the world.",
    ogAlt: "Farrukh Sobirov — Web Developer, Next.js and WordPress",
  },
  common: {
    role: "Web Developer",
    availability: "Available for freelance & full-time",
    location: "Tashkent, Uzbekistan",
    replyWithinHour: "Reply within 1 hour",
    usuallyReplies: "Usually replies within 1 hour",
    online: "Online",
    startProject: "Start a project",
    freeConsultation: "Free consultation",
    emailLabel: "Email",
    language: "Language",
  },
  nav: {
    top: "Home",
    about: "About",
    journey: "Journey",
    work: "Work",
    services: "Services",
    contact: "Contact",
  },
  header: {
    contact: "Contact",
    soundOn: "Turn sound on",
    soundOff: "Turn sound off",
    menu: "Menu",
    closeMenu: "Close menu",
    backToTop: "{name}, back to top",
    quickActions: "Quick actions",
  },
  hero: {
    strong: "Fast, modern websites.",
    soft: "Built with Next.js & WordPress.",
    projectsShipped: "/projects shipped",
    letsTalk: "Let's talk",
    seeWork: "See my work",
  },
  about: {
    hi: "Hi, I'm",
    roleLine: "Web Developer · Next.js & WordPress",
    portraitAlt: "Portrait of {name}",
    title: "A website that works for you.",
    soft: "Not the other way around.",
    text: "I build fast, SEO-friendly websites that clients can edit entirely on their own. From pixel-accurate Figma builds to headless Next.js frontends powered by WordPress + ACF, I take full ownership from first call to launch and beyond.",
    stats: [
      { label: "Projects", note: "Delivered for clients worldwide" },
      { label: "Rating", note: "Average client review score" },
      { label: "On time", note: "Every project delivered on schedule" },
      { label: "Years", note: "Of hands-on web development" },
    ],
  },
  journey: {
    step: "Step",
    months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    monthLabel: "MONTH {n}",
    steps: [
      {
        title: "Started freelancing.",
        text: "Began building WordPress and Elementor websites for clients across the world, learning to ship fast without cutting corners.",
      },
      {
        title: "Went fully custom.",
        text: "Hand-coded WordPress themes with ACF and full WooCommerce stores. Every section editable by the client, no page builders required.",
      },
      {
        title: "Went headless.",
        text: "Next.js and React frontends with WordPress as the CMS. Fast page loads, strong SEO and smooth, animated interfaces.",
      },
    ],
    statement: "Launch is just one step. I keep improving your site until it becomes a real asset.",
    accent: "asset.",
  },
  work: {
    titleA: "Made with care.",
    titleB: "Built to last.",
    hint: "Keep scrolling · click or tap a card to visit the site",
    listTitle: "Selected work.",
    count: { one: "{n} project · more on request", other: "{n} projects · more on request" } as Partial<
      Record<Intl.LDMLPluralRule, string>
    > & { other: string },
    siteAlt: "{name} website",
    nextCard: { a: "Your project,", b: "next.", c: "Let's build something great together." },
    tags: { "Custom code": "Custom code" } as Record<string, string>,
    projects: {
      webius: {
        kind: "Headless WordPress + Next.js",
        summary:
          "Headless architecture with WordPress + ACF as the CMS and a Next.js frontend. Flexible field groups let the team manage every page, rendered fast and SEO-ready.",
      },
      techchoice: {
        kind: "Next.js frontend, WordPress backend",
        summary:
          "Decoupled site for a Boston tech advisory firm. Enterprise dark theme, reusable React sections, smooth scroll interactions and content editors can update without a developer.",
      },
      lifeaxislabs: {
        kind: "WooCommerce store, custom theme",
        summary:
          "Online store on a custom theme built from scratch. Slide-out cart with free-shipping progress, customer accounts and a certificate library organised by product and batch.",
      },
      labpuppies: {
        kind: "Breeder website on WordPress",
        summary:
          "Website for a licensed English Labrador kennel near St. Louis. Available puppies and upcoming litters managed through ACF Pro, with custom-coded sections on top of Elementor.",
      },
      limestudio: {
        kind: "Recruitment website on WordPress",
        summary:
          "Russian-language recruitment site for a Saint Petersburg studio, with an earnings calculator, vacancies, reviews, news and FAQ. Built with Elementor Pro, ACF Pro and custom code.",
      },
      bhlabs: {
        kind: "Corporate website on WordPress",
        summary:
          "Multi-page site for a wellness technology company with landing pages per industry, video testimonials, 3D studio tours and quote request forms.",
      },
    } as Record<string, { kind: string; summary: string }>,
  },
  services: {
    eyebrow: "Services · 01/02",
    titleA: "Choose.",
    titleB: "What you need.",
    quote: "Ask for a quote",
    quoteSub: "Free, no commitment",
    popular: "Most popular",
    from: "From",
    perProject: "/project",
    stackEyebrow: "Stack · 02/02",
    technologies: "Technologies",
    items: [
      { title: "Headless WordPress + Next.js", text: "A React frontend with WordPress as the CMS. Fast, SEO-friendly and fully editable." },
      { title: "Custom WordPress with ACF Pro", text: "A hand-coded theme where every section is editable. No page builder bloat." },
      { title: "Elementor landing pages", text: "Pixel-perfect Figma to WordPress, responsive on every device." },
      { title: "Fixes & speed optimisation", text: "Errors, bugs, migrations, audits and making slow sites fast again." },
    ],
  },
  contact: {
    faqEyebrow: "FAQ",
    faqA: "Your questions.",
    faqB: "My answers.",
    faqs: [
      {
        q: "How long does a website take?",
        a: "Most landing pages take 1–7 days. Full custom WordPress or headless Next.js sites usually take 1–3 weeks, depending on the number of pages and integrations.",
      },
      {
        q: "Can I edit the content myself?",
        a: "Yes. Every section is built with ACF or a clean CMS structure, so you can change text, images and pages without touching code.",
      },
      {
        q: "Do you work from a Figma design?",
        a: "Yes, I turn Figma designs into pixel-accurate, responsive pages. If you don't have a design yet, we can start from references you like.",
      },
      {
        q: "What happens after launch?",
        a: "I offer post-launch support: fixes, updates, speed optimisation and new sections whenever you need them.",
      },
    ],
    basedIn: "Based in",
    hours: "Working hours",
    hoursValue: "8 AM – 10 PM (UTC+5)",
    languages: "Languages",
    languagesValue: "English, Russian, Uzbek",
    haveProject: "Have a project?",
    letsTalk: "Let's talk.",
    emailMe: "Email me",
    hireFiverr: "Hire on Fiverr",
    orWrite: "Or write here",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    message: "Message",
    messagePh: "Tell me about your project",
    send: "Send",
    sending: "Sending…",
    mailSubject: "New project from {name}",
    status: {
      sending: "Sending…",
      sent: "Thanks! Your message is on its way. I'll reply soon.",
      mailto: "Opening your email app…",
      error: "Something went wrong. Please try again or message me on Telegram.",
      limited: "Too many messages. Please try again in a few minutes.",
    },
  },
  footer: {
    titleA: "This is the end of the page.",
    titleB: "Your project starts here.",
    backToTop: "Back to top",
    explore: "Explore",
    elsewhere: "Elsewhere",
  },
};

export type Dict = typeof en;
