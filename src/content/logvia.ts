// Logvia product facts and copy (English for every language for now).

export const logvia = {
  name: "Logvia",
  version: "1.3.1",
  wporg: "https://wordpress.org/plugins/logvia/",
  support: "https://wordpress.org/support/plugin/logvia/",
  inReview: true, // set to false once WordPress.org approves the plugin
  waitlist: (plan: string) =>
    `mailto:farrux.work.in@gmail.com?subject=${encodeURIComponent(`Logvia Pro ${plan} waitlist`)}`,
};

export const facts = [
  { title: "A real free version", text: "No trials, no locked buttons." },
  { title: "Private by default", text: "Nothing leaves your site unless you switch it on." },
  { title: "Light and fast", text: "Plain JavaScript, no jQuery." },
  { title: "Any theme", text: "Classic, block or page builder." },
];

export const features = [
  {
    eyebrow: "Verified sign-ups",
    title: "Only real customers get accounts.",
    text: "New customers receive a six-digit code by email. The account is created only after they type it in, so bots and fake addresses never reach your user list.",
    points: ["Only a password hash is stored while the code is pending", "Codes expire and wrong guesses are limited", "Password reset by link or by code"],
    image: { src: "/logvia/verify.webp", w: 1240, h: 910, alt: "Verify your email screen with six code boxes" },
    wide: false,
  },
  {
    eyebrow: "Form builder",
    title: "Ask for exactly what you need.",
    text: "Drag in names, phone with country code, country and state, dropdowns, checkboxes and dates. Save every answer to the profile, WooCommerce billing details or a custom field.",
    points: ["15 field types", "Half and full width fields", "Live preview before you save"],
    image: { src: "/logvia/builder.webp", w: 1400, h: 972, alt: "Logvia drag and drop form builder in the WordPress dashboard" },
    wide: true,
  },
  {
    eyebrow: "Google sign-in",
    title: "One click, no extra plugin.",
    text: "Google's official OAuth flow with PKCE, built in. No SDK and no tracking scripts. Staff accounts stay protected: they cannot use Google sign-in unless you allow it.",
    points: ["Sign up and log in with one button", "Links to existing accounts by verified email", "Admins blocked by default"],
    image: { src: "/logvia/login.webp", w: 1240, h: 1302, alt: "Login form with a Continue with Google button" },
    wide: false,
  },
];

export const extras = [
  { title: "Popup or slide-in", text: "Opens from menus, links, a CSS class or after a delay.", icon: "window" },
  { title: "Smart menu items", text: "Log in for guests, My account and Log out for customers.", icon: "menu" },
  { title: "WooCommerce built in", text: "My Account, checkout login, and accounts required to check out.", icon: "cart" },
  { title: "Bot protection", text: "Turnstile, reCAPTCHA v2 and v3, lockouts and password rules.", icon: "shield" },
  { title: "Every word editable", text: "Headings, buttons and labels. Translation and WPML ready.", icon: "pen" },
  { title: "Your brand", text: "Accent colour, split layout with an image, theme templates.", icon: "palette" },
] as const;

export const plans = [
  { name: "Personal", sites: "1 website", price: "$49", perks: ["All Pro features", "One year of updates", "Email support"], featured: false },
  { name: "Business", sites: "5 websites", price: "$99", perks: ["All Pro features", "One year of updates", "Priority email support"], featured: true },
  { name: "Agency", sites: "Unlimited websites", price: "$199", perks: ["All Pro features", "One year of updates", "Priority email support"], featured: false },
];

export const compare: { label: string; free: boolean }[] = [
  { label: "Login, registration, password reset and email codes", free: true },
  { label: "Popup, smart menu items and Google sign-in", free: true },
  { label: "Form builder with 15 field types", free: true },
  { label: "Captcha, rate limits and accounts required at checkout", free: true },
  { label: "File upload, profile photo, username and account type fields", free: false },
  { label: "Manual approval for B2B and wholesale", free: false },
  { label: "Log in to add to cart, protected cart and members-only popup", free: false },
  { label: "Password-less sign-up and editable emails", free: false },
  { label: "Extra fields in My Account and on the Users screen", free: false },
];

export const faq = [
  { q: "Does Logvia work with my theme?", a: "Yes. The login screens live on a normal WordPress page, so your theme's header and footer stay. Classic themes, block themes and page builders all work." },
  { q: "Do I need WooCommerce?", a: "No. Login, registration, password reset and Google sign-in work on any WordPress site. WooCommerce options appear when it is active." },
  { q: "Can I still use wp-login.php?", a: "Yes. It keeps working by default. You can choose to send its visitors to Logvia instead." },
  { q: "The verification email does not arrive. Why?", a: "Logvia sends email through WordPress. Many hosts do not deliver it reliably, so install an SMTP plugin and send a test email." },
  { q: "Do I need the free plugin to use Pro?", a: "Yes. Pro is an add-on that sits on top of free Logvia." },
  { q: "What happens when my licence expires?", a: "Pro keeps working. Updates and support pause until you renew." },
];

export const releases = [
  {
    version: "1.3.1",
    date: "31 October 2026",
    iso: "2026-10-31",
    title: "First public release",
    notes: [
      "Login, registration, email verification codes and password reset on your own branded screens",
      "Popup and slide-in panel, with menu items that change for guests and customers",
      "Google sign-in with OAuth 2.0 and PKCE",
      "Drag and drop form builder with 15 field types",
      "Cloudflare Turnstile and Google reCAPTCHA v2 and v3, rate limits and password rules",
      "WooCommerce My Account and checkout login, and an optional account requirement at checkout",
    ],
  },
];
