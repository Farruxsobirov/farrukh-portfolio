// Logvia product facts that do not change with the language.
// All visible text lives in logvia-copy/{en,uz,ru}.ts, in the same order as the lists below.

export const logvia = {
  name: "Logvia",
  version: "1.4.0",
  wporg: "https://wordpress.org/plugins/logvia/",
  support: "https://wordpress.org/support/plugin/logvia/",
  inReview: false, // approved on WordPress.org on 3 November 2026
  // Freemius checkout (product 43705, Pro plan 76919). The public key is not a secret.
  freemius: { productId: 43705, planId: 76919, publicKey: "pk_7a2375ac4a4990befe9df080cb618" },
  checkout: (licenses: number | "unlimited") =>
    `https://checkout.freemius.com/product/43705/plan/76919/licenses/${licenses}/`,
};

export const features = [
  { image: { src: "/logvia/verify.webp", w: 1240, h: 910 }, wide: false },
  { image: { src: "/logvia/builder.webp", w: 1400, h: 972 }, wide: true },
  { image: { src: "/logvia/login.webp", w: 1240, h: 1302 }, wide: false },
];

export const extras = [
  { icon: "window" },
  { icon: "menu" },
  { icon: "cart" },
  { icon: "shield" },
  { icon: "pen" },
  { icon: "palette" },
] as const;

export const plans = [
  { licenses: 1, price: "$20", featured: false },
  { licenses: 5, price: "$39", featured: true },
  { licenses: "unlimited" as const, price: "$69", featured: false },
];

// true = in the free plugin too.
export const compare = [true, true, true, true, true, false, false, false, false, false, false, false, false];

export const releases = [
  { version: "1.4.0", iso: "2026-11-13" },
  { version: "1.3.3", iso: "2026-11-03" },
  { version: "1.3.2", iso: "2026-11-02" },
  { version: "1.3.1", iso: "2026-10-31" },
];
