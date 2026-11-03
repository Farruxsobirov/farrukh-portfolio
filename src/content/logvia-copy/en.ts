// English copy for the Logvia product pages. uz.ts and ru.ts follow the same shape.
// Long pages are trusted HTML written by the site owner.
// Placeholders: {contact} = contact link, {refund} = refund page link, {v} = version.

import { docsHtml, docsToc, privacyHtml, refundHtml, termsHtml } from "../logvia-pages";

export const en = {
  meta: {
    logvia: {
      title: "Logvia: login, registration and Google sign-in for WooCommerce",
      description:
        "Replace the WooCommerce login with a popup, email-verified registration, a drag and drop form builder and Google sign-in. Free on WordPress.org, with Logvia Pro for growing stores.",
    },
    docs: {
      title: "Logvia documentation",
      description:
        "How to install and set up Logvia: account page, popup, menu items, shortcodes, form builder, Google sign-in, captcha, WooCommerce options and developer hooks.",
    },
    changelog: { title: "Logvia changelog", description: "Every Logvia release and what changed in it." },
    terms: { title: "Terms of service", description: "The terms for buying and using Farrukh Sobirov's WordPress plugins." },
    privacy: { title: "Privacy policy", description: "What data is collected, why, and how to ask for it to be deleted." },
    refund: { title: "Refund policy", description: "A 14-day money-back guarantee on paid plugin licences." },
  },

  header: {
    products: "Products",
    resources: "Resources",
    pricing: "Pricing",
    portfolio: "Portfolio",
    getLogvia: "Get Logvia",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    main: "Main",
    homeLabel: "portfolio",
    tagline: "Login, registration and Google sign-in for WooCommerce",
    overview: "Overview",
    documentation: "Documentation",
    changelog: "Changelog",
    nextTitle: "Plugin number two",
    nextText: "In the works. Tell me what your store needs next.",
    suggest: "Suggest a plugin",
    newRelease: "New release",
    isHere: "Logvia {v} is here.",
    seeChanged: "See what changed",
    more: "More",
    supportForum: "Support forum",
    contact: "Contact",
    resourceCards: {
      docs: { title: "Documentation", text: "Set up Logvia step by step." },
      changelog: { title: "Changelog", text: "Every release and what changed." },
      support: { title: "Support forum", text: "Free help on WordPress.org." },
      contact: { title: "Contact", text: "Pro, licences and ideas." },
      portfolio: { title: "Portfolio", text: "Websites I have built for clients." },
      legal: { title: "Legal", text: "Terms, privacy and refunds." },
    },
  },

  theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode", light: "Light mode", dark: "Dark mode" },

  footer: {
    titleA: "A login customers trust.",
    titleB: " In five minutes.",
    download: "Download free",
    readDocs: "Read the docs",
    about: "WordPress and WooCommerce plugins, made in Tashkent.",
    help: "Help",
    legal: "Legal",
    elsewhere: "Elsewhere",
    terms: "Terms",
    privacy: "Privacy",
    refunds: "Refunds",
    rights: "WordPress and WooCommerce are trademarks of their owners; this site is not affiliated with them.",
  },

  page: {
    inReview: " · In review on WordPress.org",
    onWporg: " · Free on WordPress.org",
    heroA: "The login your WooCommerce ",
    heroB: "store deserves.",
    heroLead:
      "Customers sign up with a verified email or one click with Google, in a popup that never takes them away from what they were buying.",
    download: "Download free",
    seePro: "See Pro plans",
    popupAlt: "Logvia popup with Log in and Sign up tabs",
    whatItDoes: "What it does",
    featuresA: "Three things your store ",
    featuresB: "gets right away.",
    extrasA: "And everything else ",
    extrasB: "a store needs.",
    pricing: "Pricing",
    pricingA: "Free forever. ",
    pricingB: "Pro when you grow.",
    pricingLead: "The free plugin is complete on its own. Pro adds tools for wholesale, members-only and custom sign-up flows.",
    mostPick: "Most stores pick this",
    perYear: "/ year",
    buy: "Buy {plan}",
    guarantee: "14-day money-back guarantee",
    pricesNote: "Every plan includes a 14-day money-back guarantee. Prices in US dollars.",
    inBoth: "In Free and Pro",
    onlyPro: "Only in Pro",
    freePlusPro: "Free + Pro",
    compareCaption: "Logvia Free and Pro compared",
    whatYouGet: "What you get",
    free: "Free",
    included: "Included",
    notIncluded: "Not included",
    faq: "FAQ",
    faqA: "Questions. ",
    faqB: "Answers.",
    somethingElse: "Something else?",
    writeToMe: "Write to me",
  },

  facts: [
    { title: "A real free version", text: "No trials, no locked buttons." },
    { title: "Private by default", text: "Nothing leaves your site unless you switch it on." },
    { title: "Light and fast", text: "Plain JavaScript, no jQuery." },
    { title: "Any theme", text: "Classic, block or page builder." },
  ],

  // Same order as `features` in logvia.ts.
  features: [
    {
      eyebrow: "Verified sign-ups",
      title: "Only real customers get accounts.",
      text: "New customers receive a six-digit code by email. The account is created only after they type it in, so bots and fake addresses never reach your user list.",
      points: ["Only a password hash is stored while the code is pending", "Codes expire and wrong guesses are limited", "Password reset by link or by code"],
      alt: "Verify your email screen with six code boxes",
    },
    {
      eyebrow: "Form builder",
      title: "Ask for exactly what you need.",
      text: "Drag in names, phone with country code, country and state, dropdowns, checkboxes and dates. Save every answer to the profile, WooCommerce billing details or a custom field.",
      points: ["15 field types", "Half and full width fields", "Live preview before you save"],
      alt: "Logvia drag and drop form builder in the WordPress dashboard",
    },
    {
      eyebrow: "Google sign-in",
      title: "One click, no extra plugin.",
      text: "Google's official OAuth flow with PKCE, built in. No SDK and no tracking scripts. Staff accounts stay protected: they cannot use Google sign-in unless you allow it.",
      points: ["Sign up and log in with one button", "Links to existing accounts by verified email", "Admins blocked by default"],
      alt: "Login form with a Continue with Google button",
    },
  ],

  // Same order as `extras` in logvia.ts.
  extras: [
    { title: "Popup or slide-in", text: "Opens from menus, links, a CSS class or after a delay." },
    { title: "Smart menu items", text: "Log in for guests, My account and Log out for customers." },
    { title: "WooCommerce built in", text: "My Account, checkout login, and accounts required to check out." },
    { title: "Bot protection", text: "Turnstile, reCAPTCHA v2 and v3, lockouts and password rules." },
    { title: "Every word editable", text: "Headings, buttons and labels. Translation and WPML ready." },
    { title: "Your brand", text: "Accent colour, split layout with an image, theme templates." },
  ],

  // Same order as `plans` in logvia.ts.
  plans: [
    { name: "Personal", sites: "1 website", perks: ["All Pro features", "One year of updates", "Email support"] },
    { name: "Business", sites: "5 websites", perks: ["All Pro features", "One year of updates", "Priority email support"] },
    { name: "Agency", sites: "Unlimited websites", perks: ["All Pro features", "One year of updates", "Priority email support"] },
  ],

  // Same order as `compare` in logvia.ts.
  compare: [
    "Login, registration, password reset and email codes",
    "Popup, smart menu items and Google sign-in",
    "Form builder with 15 field types",
    "Captcha, rate limits and accounts required at checkout",
    "Editable email texts and members-only mode",
    "File upload, profile photo, username and account type fields",
    "Manual approval for B2B and wholesale",
    "Log in to add to cart and protected cart",
    "Password-less sign-up",
    "Extra fields in My Account and on the Users screen",
  ],

  faq: [
    { q: "Does Logvia work with my theme?", a: "Yes. The login screens live on a normal WordPress page, so your theme's header and footer stay. Classic themes, block themes and page builders all work." },
    { q: "Do I need WooCommerce?", a: "No. Login, registration, password reset and Google sign-in work on any WordPress site. WooCommerce options appear when it is active." },
    { q: "Can I still use wp-login.php?", a: "Yes. It keeps working by default. You can choose to send its visitors to Logvia instead." },
    { q: "The verification email does not arrive. Why?", a: "Logvia sends email through WordPress. Many hosts do not deliver it reliably, so install an SMTP plugin and send a test email." },
    { q: "Do I need the free plugin to use Pro?", a: "Yes. Pro is an add-on that sits on top of free Logvia." },
    { q: "What happens when my licence expires?", a: "Pro keeps working. Updates and support pause until you renew." },
  ],

  changelog: {
    eyebrow: "Logvia · Changelog",
    title: "What's new.",
    lead: "Every release and what changed in it. Update from Dashboard → Updates.",
    // Keyed by version; versions and dates live in logvia.ts.
    releases: {
      "1.3.3": {
        title: "Now on WordPress.org",
        notes: [
          "Phone field with round country flags, a searchable country list and the dialling code shown in the field",
          "A pasted \"+998 …\" number picks the country by itself",
          "Popup tab colour settings under Settings → Logvia → Appearance",
          "Theme button hover colours no longer show on the popup tabs and buttons",
          "Half-width fields now line up at the top",
        ],
      },
      "1.3.2": {
        title: "Editable email texts",
        notes: [
          "Email texts and members-only mode are now editable in the plugin settings",
          "Removed the custom CSS box; use Additional CSS or the Site Editor instead",
        ],
      },
      "1.3.1": {
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
    } as Record<string, { title: string; notes: string[] }>,
  },

  long: {
    onThisPage: "On this page",
    docsEyebrow: "Logvia · Documentation",
    docsTitle: "Set up Logvia.",
    docsLead: "Everything you need to set up Logvia on your store. Most sites are ready after the first three steps.",
    legalEyebrow: "Legal · Last updated 3 November 2026",
    termsTitle: "Terms.",
    privacyTitle: "Privacy.",
    refundTitle: "Refunds.",
  },

  docsToc,
  docsHtml,
  termsHtml,
  privacyHtml,
  refundHtml,
};

export type LogviaCopy = typeof en;
