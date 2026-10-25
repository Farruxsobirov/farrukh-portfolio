// O‘zbekcha (lotin). Apostroflar: o‘, g‘ uchun ‘ (U+2018), tutuq belgisi uchun ’ (U+2019).
import type { Dict } from "./en";

export const uz: Dict = {
  meta: {
    title: "Farrukh Sobirov — Veb-dasturchi",
    description:
      "3 yildan ortiq tajribaga ega veb-dasturchi. Butun dunyo mijozlari uchun headless Next.js + WordPress saytlari, maxsus WordPress mavzulari va WooCommerce do‘konlarini yarataman.",
    ogAlt: "Farrukh Sobirov — Veb-dasturchi, Next.js va WordPress",
  },
  common: {
    role: "Veb-dasturchi",
    availability: "Frilans va doimiy ishga tayyorman",
    location: "Toshkent, O‘zbekiston",
    replyWithinHour: "1 soat ichida javob",
    usuallyReplies: "Odatda 1 soat ichida javob beradi",
    online: "Onlayn",
    startProject: "Loyihani boshlash",
    freeConsultation: "Bepul maslahat",
    emailLabel: "Email",
    language: "Til",
  },
  nav: {
    top: "Bosh sahifa",
    about: "Men haqimda",
    journey: "Yo‘lim",
    work: "Ishlarim",
    services: "Xizmatlar",
    contact: "Aloqa",
  },
  header: {
    contact: "Bog‘lanish",
    soundOn: "Ovozni yoqish",
    soundOff: "Ovozni o‘chirish",
    menu: "Menyu",
    closeMenu: "Menyuni yopish",
    backToTop: "{name}, yuqoriga qaytish",
    quickActions: "Tezkor amallar",
  },
  hero: {
    strong: "Tez va zamonaviy saytlar.",
    soft: "Next.js va WordPress’da.",
    projectsShipped: "/topshirilgan loyiha",
    letsTalk: "Gaplashaylik",
    seeWork: "Ishlarimni ko‘rish",
  },
  about: {
    hi: "Salom, men",
    roleLine: "Veb-dasturchi · Next.js va WordPress",
    portraitAlt: "{name} portreti",
    title: "Siz uchun ishlaydigan sayt.",
    soft: "Aksincha emas.",
    text: "Mijozlar o‘zlari to‘liq tahrirlay oladigan tez va SEO’ga mos saytlar yarataman. Figma dizaynini piksel aniqligida sahifaga aylantirishdan tortib WordPress + ACF asosidagi headless Next.js saytlargacha — birinchi suhbatdan ishga tushirishgacha va undan keyin ham butun mas’uliyatni o‘z zimmamga olaman.",
    stats: [
      { label: "Loyihalar", note: "Dunyo bo‘ylab mijozlar uchun" },
      { label: "Reyting", note: "Mijozlarning o‘rtacha bahosi" },
      { label: "O‘z vaqtida", note: "Har bir loyiha muddatida topshirilgan" },
      { label: "Yil", note: "Amaliy veb-dasturlash tajribasi" },
    ],
  },
  journey: {
    step: "Qadam",
    months: ["YAN", "FEV", "MAR", "APR", "MAY", "IYN", "IYL", "AVG", "SEN", "OKT", "NOY", "DEK"],
    monthLabel: "{n}-OY",
    steps: [
      {
        title: "Frilansni boshladim.",
        text: "Butun dunyo mijozlari uchun WordPress va Elementor saytlarini yarata boshladim — sifatdan voz kechmay, tez topshirishni o‘rgandim.",
      },
      {
        title: "To‘liq maxsus ishlarga o‘tdim.",
        text: "ACF bilan qo‘lda yozilgan WordPress mavzulari va to‘liq WooCommerce do‘konlari. Har bir bo‘limni mijozning o‘zi tahrirlaydi, sahifa quruvchilarsiz.",
      },
      {
        title: "Headless’ga o‘tdim.",
        text: "CMS sifatida WordPress, frontend esa Next.js va React’da. Tez yuklanish, kuchli SEO va silliq, animatsiyali interfeyslar.",
      },
    ],
    statement: "Ishga tushirish — atigi bir qadam. Saytingizni yaxshilashda davom etaman, toki u haqiqiy aktivga aylanadi.",
    accent: "aktivga",
  },
  work: {
    titleA: "E’tibor bilan yaratilgan.",
    titleB: "Uzoq xizmat qiladi.",
    hint: "Pastga aylantiring · saytni ochish uchun kartani bosing",
    listTitle: "Tanlangan ishlar.",
    count: { other: "{n} ta loyiha · so‘rov bo‘yicha ko‘proq" },
    siteAlt: "{name} sayti",
    nextCard: { a: "Keyingisi —", b: "sizning loyihangiz.", c: "Keling, birga ajoyib narsa yarataylik." },
    tags: { "Custom code": "Maxsus kod" },
    projects: {
      webius: {
        kind: "Headless WordPress + Next.js",
        summary:
          "Headless arxitektura: CMS sifatida WordPress + ACF, frontend esa Next.js’da. Moslashuvchan maydon guruhlari jamoaga har bir sahifani boshqarish imkonini beradi; sayt tez va SEO’ga tayyor.",
      },
      techchoice: {
        kind: "Next.js frontend, WordPress backend",
        summary:
          "Bostondagi texnologik maslahat kompaniyasi uchun alohida frontendli sayt. Korporativ qorong‘i dizayn, qayta ishlatiladigan React bo‘limlari, silliq skroll va dasturchisiz tahrirlanadigan kontent.",
      },
      lifeaxislabs: {
        kind: "WooCommerce do‘kon, maxsus mavzu",
        summary:
          "Noldan yozilgan maxsus mavzudagi internet-do‘kon. Bepul yetkazib berish ko‘rsatkichli yon savatcha, mijoz kabinetlari va mahsulot hamda partiya bo‘yicha tartiblangan sertifikatlar kutubxonasi.",
      },
      labpuppies: {
        kind: "WordPress’dagi pitomnik sayti",
        summary:
          "St. Louis yaqinidagi litsenziyali ingliz labrador pitomnigi uchun sayt. Mavjud kuchukchalar va kelgusi zotlar ACF Pro orqali boshqariladi, Elementor ustiga maxsus kodli bo‘limlar qo‘shilgan.",
      },
      limestudio: {
        kind: "WordPress’dagi rekruting sayti",
        summary:
          "Sankt-Peterburgdagi studiya uchun rus tilidagi rekruting sayti: daromad kalkulyatori, vakansiyalar, sharhlar, yangiliklar va FAQ. Elementor Pro, ACF Pro va maxsus kod bilan yaratilgan.",
      },
      bhlabs: {
        kind: "WordPress’dagi korporativ sayt",
        summary:
          "Wellness-texnologiyalar kompaniyasi uchun ko‘p sahifali sayt: har bir soha uchun alohida landinglar, video sharhlar, 3D studiya sayohatlari va narx so‘rash formalari.",
      },
    },
  },
  services: {
    eyebrow: "Xizmatlar · 01/02",
    titleA: "Tanlang.",
    titleB: "Sizga keragini.",
    quote: "Narxni so‘rash",
    quoteSub: "Bepul, majburiyatsiz",
    popular: "Eng ommabop",
    from: "Boshlang‘ich",
    perProject: "/loyiha",
    stackEyebrow: "Texnologiyalar · 02/02",
    technologies: "Texnologiyalar",
    items: [
      { title: "Headless WordPress + Next.js", text: "React frontend, CMS sifatida WordPress. Tez, SEO’ga mos va to‘liq tahrirlanadi." },
      { title: "ACF Pro bilan maxsus WordPress", text: "Har bir bo‘limi tahrirlanadigan, qo‘lda yozilgan mavzu. Sahifa quruvchilarning ortiqcha yukisiz." },
      { title: "Elementor landing sahifalari", text: "Figma’dan WordPress’ga piksel aniqligida, har qanday qurilmaga moslashadi." },
      { title: "Tuzatish va tezlashtirish", text: "Xatolar, nosozliklar, ko‘chirish, audit va sekin saytlarni yana tez ishlatish." },
    ],
  },
  contact: {
    faqEyebrow: "Savollar",
    faqA: "Savollaringiz.",
    faqB: "Javoblarim.",
    faqs: [
      {
        q: "Sayt qancha vaqtda tayyor bo‘ladi?",
        a: "Ko‘pchilik landing sahifalar 1–7 kun oladi. To‘liq maxsus WordPress yoki headless Next.js saytlari sahifalar va integratsiyalar soniga qarab odatda 1–3 hafta.",
      },
      {
        q: "Kontentni o‘zim tahrirlay olamanmi?",
        a: "Ha. Har bir bo‘lim ACF yoki toza CMS tuzilmasida qurilgan, shuning uchun matn, rasm va sahifalarni kodga tegmasdan o‘zgartirasiz.",
      },
      {
        q: "Figma dizayn asosida ishlaysizmi?",
        a: "Ha, Figma dizaynlarini piksel aniqligida, moslashuvchan sahifalarga aylantiraman. Dizayningiz bo‘lmasa, sizga yoqqan namunalardan boshlashimiz mumkin.",
      },
      {
        q: "Ishga tushirgandan keyin nima bo‘ladi?",
        a: "Ishga tushirgandan keyin ham qo‘llab-quvvatlayman: tuzatishlar, yangilanishlar, tezlashtirish va kerak bo‘lganda yangi bo‘limlar.",
      },
    ],
    basedIn: "Joylashuv",
    hours: "Ish vaqti",
    hoursValue: "8:00 – 22:00 (UTC+5)",
    languages: "Tillar",
    languagesValue: "Ingliz, rus, o‘zbek",
    haveProject: "Loyihangiz bormi?",
    letsTalk: "Gaplashaylik.",
    emailMe: "Pochtaga yozish",
    hireFiverr: "Fiverr’da yollash",
    orWrite: "Yoki shu yerda yozing",
    name: "Ism",
    namePh: "Ismingiz",
    email: "Email",
    message: "Xabar",
    messagePh: "Loyihangiz haqida yozing",
    send: "Yuborish",
    sending: "Yuborilmoqda…",
    mailSubject: "{name}dan yangi loyiha",
    status: {
      sending: "Yuborilmoqda…",
      sent: "Rahmat! Xabaringiz yuborildi. Tez orada javob beraman.",
      mailto: "Email ilovangiz ochilmoqda…",
      error: "Nimadir xato ketdi. Qayta urinib ko‘ring yoki Telegram’da yozing.",
      limited: "Xabarlar juda ko‘p. Bir necha daqiqadan so‘ng urinib ko‘ring.",
    },
  },
  footer: {
    titleA: "Sahifa shu yerda tugaydi.",
    titleB: "Loyihangiz shu yerdan boshlanadi.",
    backToTop: "Yuqoriga",
    explore: "Bo‘limlar",
    elsewhere: "Tarmoqlar",
  },
};
