// O‘zbekcha (lotin). o‘, g‘ uchun ‘ (U+2018), tutuq belgisi uchun ’ (U+2019).
// WordPress va Logvia menyu nomlari ingliz tilida qoldirilgan: plagin sozlamalari hozircha inglizcha.

import type { LogviaCopy } from "./en";

export const uz: LogviaCopy = {
  meta: {
    logvia: {
      title: "Logvia: WooCommerce uchun kirish, ro‘yxatdan o‘tish va Google orqali kirish",
      description:
        "WooCommerce kirish sahifasini popup oyna, email orqali tasdiqlanadigan ro‘yxatdan o‘tish, forma konstruktori va Google orqali kirish bilan almashtiring. WordPress.org’da bepul, o‘sayotgan do‘konlar uchun Logvia Pro.",
    },
    docs: {
      title: "Logvia qo‘llanmasi",
      description:
        "Logvia’ni o‘rnatish va sozlash: akkaunt sahifasi, popup, menyu bandlari, shortkodlar, forma konstruktori, Google orqali kirish, captcha, WooCommerce sozlamalari va dasturchilar uchun hooklar.",
    },
    changelog: { title: "Logvia o‘zgarishlar tarixi", description: "Logvia’ning har bir versiyasi va unda nima o‘zgargani." },
    terms: { title: "Foydalanish shartlari", description: "Farrukh Sobirovning WordPress plaginlarini sotib olish va ishlatish shartlari." },
    privacy: { title: "Maxfiylik siyosati", description: "Qanday ma’lumot yig‘iladi, nima uchun va uni qanday o‘chirtirish mumkin." },
    refund: { title: "Pulni qaytarish siyosati", description: "Pullik plagin litsenziyalari uchun 14 kunlik pulni qaytarish kafolati." },
  },

  header: {
    products: "Mahsulotlar",
    resources: "Resurslar",
    pricing: "Narxlar",
    portfolio: "Portfolio",
    getLogvia: "Logvia’ni olish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    language: "Til",
    main: "Asosiy",
    homeLabel: "portfolio",
    tagline: "WooCommerce uchun kirish, ro‘yxatdan o‘tish va Google orqali kirish",
    overview: "Umumiy ko‘rinish",
    documentation: "Qo‘llanma",
    changelog: "O‘zgarishlar",
    nextTitle: "Ikkinchi plagin",
    nextText: "Ustida ishlayapman. Do‘koningizga yana nima kerakligini yozing.",
    suggest: "Plagin g‘oyasini taklif qilish",
    newRelease: "Yangi versiya",
    isHere: "Logvia {v} chiqdi.",
    seeChanged: "Nima o‘zgarganini ko‘ring",
    more: "Yana",
    supportForum: "Yordam forumi",
    contact: "Aloqa",
    blog: "Blog",
    resourceCards: {
      docs: { title: "Qo‘llanma", text: "Logvia’ni bosqichma-bosqich sozlang." },
      changelog: { title: "O‘zgarishlar", text: "Har bir versiya va unda nima o‘zgargani." },
      blog: { title: "Blog", text: "Yangiliklar va qo‘llanmalar." },
      support: { title: "Yordam forumi", text: "WordPress.org’da bepul yordam." },
      contact: { title: "Aloqa", text: "Pro, litsenziyalar va g‘oyalar." },
      portfolio: { title: "Portfolio", text: "Mijozlar uchun qilgan saytlarim." },
      legal: { title: "Huquqiy", text: "Shartlar, maxfiylik va pulni qaytarish." },
    },
  },

  theme: { toLight: "Yorug‘ rejimga o‘tish", toDark: "Qorong‘i rejimga o‘tish", light: "Yorug‘ rejim", dark: "Qorong‘i rejim" },

  footer: {
    titleA: "Mijozlar ishonadigan kirish sahifasi.",
    titleB: " Besh daqiqada.",
    download: "Bepul yuklab olish",
    readDocs: "Qo‘llanmani o‘qish",
    about: "WordPress va WooCommerce plaginlari, Toshkentda yaratilgan.",
    help: "Yordam",
    legal: "Huquqiy",
    elsewhere: "Boshqa joylarda",
    terms: "Shartlar",
    privacy: "Maxfiylik",
    refunds: "Pulni qaytarish",
    rights: "WordPress va WooCommerce o‘z egalarining savdo belgilari; bu sayt ular bilan bog‘liq emas.",
  },

  page: {
    inReview: " · WordPress.org’da tekshiruvda",
    onWporg: " · WordPress.org’da bepul",
    heroA: "WooCommerce do‘koningizga ",
    heroB: "munosib kirish sahifasi.",
    heroLead:
      "Mijozlar tasdiqlangan email yoki Google orqali bir bosishda ro‘yxatdan o‘tadi. Hammasi popup oynada, xarid qilayotgan sahifasidan chiqmasdan.",
    download: "Bepul yuklab olish",
    seePro: "Pro rejalarini ko‘rish",
    popupAlt: "Log in va Sign up yorliqlari bor Logvia popup oynasi",
    whatItDoes: "Nima qiladi",
    featuresA: "Do‘koningiz darhol oladigan ",
    featuresB: "uchta narsa.",
    extrasA: "Va do‘konga kerak ",
    extrasB: "bo‘lgan qolgan hammasi.",
    pricing: "Narxlar",
    pricingA: "Doim bepul. ",
    pricingB: "O‘sganingizda Pro.",
    pricingLead: "Bepul plaginning o‘zi to‘liq ishlaydi. Pro esa Google One Tap, aqlliroq popup va ulgurji savdo hamda maxsus ro‘yxatdan o‘tish uchun vositalar qo‘shadi.",
    mostPick: "Ko‘pchilik shuni tanlaydi",
    perYear: "/ yil",
    buy: "{plan} rejasini olish",
    guarantee: "14 kunlik pulni qaytarish kafolati",
    pricesNote: "Har bir rejada 14 kunlik pulni qaytarish kafolati bor. Narxlar AQSh dollarida.",
    inBoth: "Free va Pro’da",
    onlyPro: "Faqat Pro’da",
    freePlusPro: "Free + Pro",
    compareCaption: "Logvia Free va Pro taqqoslovi",
    whatYouGet: "Nimalar bor",
    free: "Free",
    included: "Bor",
    notIncluded: "Yo‘q",
    faq: "Savollar",
    faqA: "Savollar. ",
    faqB: "Javoblar.",
    somethingElse: "Boshqa savol bormi?",
    writeToMe: "Menga yozing",
  },

  facts: [
    { title: "Haqiqiy bepul versiya", text: "Sinov muddati ham, vaqt chegarasi ham yo‘q." },
    { title: "Sukut bo‘yicha maxfiy", text: "Siz yoqmaguningizcha hech narsa saytdan tashqariga chiqmaydi." },
    { title: "Yengil va tez", text: "Oddiy JavaScript, jQuery’siz." },
    { title: "Har qanday mavzu", text: "Klassik, blokli yoki page builder." },
  ],

  features: [
    {
      eyebrow: "Tasdiqlangan ro‘yxatdan o‘tish",
      title: "Akkauntni faqat haqiqiy mijozlar oladi.",
      text: "Yangi mijozga email orqali olti xonali kod keladi. Akkaunt faqat kod kiritilgandan keyin yaratiladi, shuning uchun botlar va soxta manzillar foydalanuvchilar ro‘yxatingizga tushmaydi.",
      points: ["Kod kutilayotganda faqat parol xeshi saqlanadi", "Kodlar muddati tugaydi, noto‘g‘ri urinishlar cheklangan", "Parolni havola yoki kod orqali tiklash"],
      alt: "Olti katakli emailni tasdiqlash oynasi",
    },
    {
      eyebrow: "Forma konstruktori",
      title: "Faqat kerakli ma’lumotni so‘rang.",
      text: "Ism, mamlakat kodi bilan telefon, mamlakat va viloyat, ochiluvchi ro‘yxatlar, belgilash katakchalari va sanalarni sudrab qo‘shing. Har bir javobni profilga, WooCommerce to‘lov ma’lumotlariga yoki maxsus maydonga saqlang.",
      points: ["15 xil maydon", "Yarim va to‘liq kenglikdagi maydonlar", "Saqlashdan oldin jonli ko‘rinish"],
      alt: "WordPress boshqaruv panelidagi Logvia forma konstruktori",
    },
    {
      eyebrow: "Google orqali kirish",
      title: "Bir bosish, qo‘shimcha plaginsiz.",
      text: "Google’ning rasmiy OAuth oqimi PKCE bilan, plaginning o‘zida. SDK ham, kuzatuv skriptlari ham yo‘q. Xodimlar akkauntlari himoyalangan: siz ruxsat bermaguningizcha ular Google orqali kira olmaydi.",
      points: ["Bitta tugma bilan ro‘yxatdan o‘tish va kirish", "Tasdiqlangan email orqali mavjud akkauntga bog‘lanadi", "Administratorlar sukut bo‘yicha bloklangan"],
      alt: "Continue with Google tugmasi bor kirish formasi",
    },
  ],

  extras: [
    { title: "Popup yoki yon panel", text: "Menyu, havola, CSS klass orqali yoki biroz kutib ochiladi." },
    { title: "Aqlli menyu bandlari", text: "Mehmonlarga Kirish, mijozlarga Akkauntim va Chiqish." },
    { title: "WooCommerce bilan tayyor", text: "My Account, checkout’da kirish va xarid uchun majburiy akkaunt." },
    { title: "Botlardan himoya", text: "Turnstile, reCAPTCHA v2 va v3, bloklash va parol qoidalari." },
    { title: "Har bir so‘zni o‘zgartirish mumkin", text: "Sarlavhalar, tugmalar va yozuvlar. Tarjima va WPML’ga tayyor." },
    { title: "Sizning brendingiz", text: "Asosiy rang, rasmli ikki ustunli ko‘rinish, mavzu shablonlari." },
  ],

  plans: [
    { name: "Personal", sites: "1 ta sayt", perks: ["Pro’ning barcha imkoniyatlari", "Bir yillik yangilanishlar", "Email orqali yordam"] },
    { name: "Business", sites: "5 ta sayt", perks: ["Pro’ning barcha imkoniyatlari", "Bir yillik yangilanishlar", "Birinchi navbatdagi email yordam"] },
    { name: "Agency", sites: "Cheksiz saytlar", perks: ["Pro’ning barcha imkoniyatlari", "Bir yillik yangilanishlar", "Birinchi navbatdagi email yordam"] },
  ],

  compare: [
    "Kirish, ro‘yxatdan o‘tish, parolni tiklash va email kodlar",
    "Popup, aqlli menyu bandlari va Google orqali kirish",
    "15 xil maydonli forma konstruktori",
    "Captcha, urinishlar cheklovi va xarid uchun majburiy akkaunt",
    "Email matnlarini tahrirlash va faqat a’zolar uchun rejim",
    "Fayl yuklash, profil rasmi, foydalanuvchi nomi va akkaunt turi maydonlari",
    "B2B va ulgurji savdo uchun qo‘lda tasdiqlash",
    "Savatga qo‘shish uchun kirish va himoyalangan savat",
    "Parolsiz ro‘yxatdan o‘tish",
    "My Account va Users sahifasidagi qo‘shimcha maydonlar",
    "Google One Tap: bir bosishda \"Continue as …\" orqali kirish",
    "Chiqib ketish niyati va sahifani aylantirish chuqurligi bo‘yicha popup",
    "Popup qoidalari: sahifalar, qurilmalar, yangi yoki qaytgan mehmonlar, qanchalik tez-tez",
  ],

  faq: [
    { q: "Logvia mening mavzum bilan ishlaydimi?", a: "Ha. Kirish oynalari oddiy WordPress sahifasida joylashadi, shuning uchun mavzungizning header va footer qismlari saqlanadi. Klassik, blokli mavzular va page builderlar bilan ishlaydi." },
    { q: "WooCommerce shartmi?", a: "Yo‘q. Kirish, ro‘yxatdan o‘tish, parolni tiklash va Google orqali kirish har qanday WordPress saytida ishlaydi. WooCommerce faol bo‘lsa, unga oid sozlamalar paydo bo‘ladi." },
    { q: "wp-login.php’dan foydalanishda davom etsam bo‘ladimi?", a: "Ha. Sukut bo‘yicha u ishlashda davom etadi. Xohlasangiz, uning tashrifchilarini Logvia’ga yo‘naltirishingiz mumkin." },
    { q: "Tasdiqlash xati kelmayapti. Nega?", a: "Logvia xatlarni WordPress orqali yuboradi. Ko‘p hostinglar ularni ishonchli yetkazmaydi, shuning uchun SMTP plagin o‘rnating va sinov xati yuboring." },
    { q: "Pro uchun bepul plagin kerakmi?", a: "Ha. Pro bepul Logvia ustiga o‘rnatiladigan qo‘shimcha." },
    { q: "Litsenziya muddati tugasa nima bo‘ladi?", a: "Pro ishlashda davom etadi. Yangilanishlar va yordam litsenziyani uzaytirguningizcha to‘xtaydi." },
  ],

  changelog: {
    eyebrow: "Logvia · O‘zgarishlar",
    title: "Yangiliklar.",
    lead: "Har bir versiya va unda nima o‘zgargani. Dashboard → Updates orqali yangilang.",
    releases: {
      "1.4.0": {
        title: "Sozlamalarda Pro imkoniyatlari va Live Preview",
        notes: [
          "Sozlamalar bo‘limlarida ixtiyoriy Logvia Pro imkoniyatlari ro‘yxati va tariflarni solishtirish havolasi",
          "Logvia’ni o‘rnatmasdan sinab ko‘ring: WordPress.org’da Live Preview",
          "Yangi teg: login popup",
        ],
      },
      "1.3.3": {
        title: "Endi WordPress.org’da",
        notes: [
          "Dumaloq bayroqlar, qidiruvli mamlakatlar ro‘yxati va maydon ichida ko‘rinadigan telefon kodi bilan telefon maydoni",
          "\"+998 …\" bilan qo‘yilgan raqam mamlakatni o‘zi tanlaydi",
          "Settings → Logvia → Appearance ostida popup yorliqlari rangi sozlamalari",
          "Mavzu tugmalarining hover ranglari endi popup yorliqlari va tugmalarida ko‘rinmaydi",
          "Yarim kenglikdagi maydonlar endi tepadan bir tekis turadi",
        ],
      },
      "1.3.2": {
        title: "Email matnlarini tahrirlash",
        notes: [
          "Email matnlari va faqat a’zolar uchun rejim endi plagin sozlamalarida tahrirlanadi",
          "Maxsus CSS maydoni olib tashlandi; uning o‘rniga Additional CSS yoki Site Editor’dan foydalaning",
        ],
      },
      "1.3.1": {
        title: "Birinchi ommaviy versiya",
        notes: [
          "Kirish, ro‘yxatdan o‘tish, email tasdiqlash kodlari va parolni tiklash o‘z brendingizdagi oynalarda",
          "Popup va yon panel, mehmonlar va mijozlar uchun o‘zgaradigan menyu bandlari",
          "OAuth 2.0 va PKCE bilan Google orqali kirish",
          "15 xil maydonli sudrab-tashlash forma konstruktori",
          "Cloudflare Turnstile va Google reCAPTCHA v2 va v3, urinishlar cheklovi va parol qoidalari",
          "WooCommerce My Account va checkout’da kirish, xarid uchun ixtiyoriy majburiy akkaunt",
        ],
      },
    },
  },

  long: {
    onThisPage: "Ushbu sahifada",
    docsEyebrow: "Logvia · Qo‘llanma",
    docsTitle: "Logvia’ni sozlang.",
    docsLead: "Do‘koningizda Logvia’ni sozlash uchun kerak bo‘lgan hamma narsa. Ko‘p saytlar dastlabki uch qadamdan keyin tayyor bo‘ladi.",
    legalEyebrow: "Huquqiy · Oxirgi yangilanish: 3-noyabr, 2026",
    termsTitle: "Shartlar.",
    privacyTitle: "Maxfiylik.",
    refundTitle: "Pulni qaytarish.",
  },

  docsToc: [
    { id: "install", label: "O‘rnatish" },
    { id: "pages", label: "Akkaunt sahifasi va manzillar" },
    { id: "email", label: "Xatlarni yetkazish" },
    { id: "popup", label: "Popup" },
    { id: "menus", label: "Menyu bandlari" },
    { id: "shortcodes", label: "Shortkodlar" },
    { id: "builder", label: "Forma konstruktori" },
    { id: "google", label: "Google orqali kirish" },
    { id: "captcha", label: "Captcha va xavfsizlik" },
    { id: "woocommerce", label: "WooCommerce" },
    { id: "redirects", label: "Yo‘naltirishlar" },
    { id: "design", label: "Dizayn va shablonlar" },
    { id: "pro", label: "Pro’ni o‘rnatish" },
    { id: "developers", label: "Dasturchilar uchun" },
    { id: "troubleshooting", label: "Muammolarni hal qilish" },
  ],

  docsHtml: `<h2 id="install">O‘rnatish</h2>
    <ol>
      <li>Boshqaruv panelida <strong>Plugins → Add New</strong> bo‘limiga kiring, <strong>Logvia</strong> deb qidiring, o‘rnating va faollashtiring.</li>
      <li><strong>Settings → Logvia</strong> ni oching. <strong>Appearance</strong> yorlig‘ida asosiy rangni tanlang.</li>
      <li>Akkauntdan chiqing yoki saytni maxfiy oynada oching va yangi kirish sahifasini ko‘rish uchun <strong>My account</strong> ni bosing.</li>
    </ol>

    <h2 id="pages">Akkaunt sahifasi va manzillar</h2>
    <p>Faollashtirilganda Logvia <code>/auth/</code> manzilida <strong>Account access</strong> nomli sahifa yaratadi. Barcha oynalar shu sahifa ostida:</p>
    <table>
      <tr><th>Oyna</th><th>Manzil</th></tr>
      <tr><td>Kirish</td><td><code>/auth/login/</code></td></tr>
      <tr><td>Ro‘yxatdan o‘tish</td><td><code>/auth/register/</code></td></tr>
      <tr><td>Tasdiqlash kodini kiritish</td><td><code>/auth/verify/</code></td></tr>
      <tr><td>Parolni unutdingizmi</td><td><code>/auth/forgot/</code></td></tr>
      <tr><td>Yangi parol o‘rnatish</td><td><code>/auth/reset/</code></td></tr>
    </table>
    <p>Sahifa nomini yoki slugini o‘zgartirishingiz mumkin. Sahifada <code>[logvia]</code> shortkodi bo‘lishi shart. Slugni o‘zgartirsangiz, <strong>Settings → Permalinks</strong> ga kirib, bir marta Save ni bosing.</p>

    <h2 id="email">Xatlarni yetkazish</h2>
    <p>Tasdiqlash kodlari va parolni tiklash havolalari email orqali yuboriladi, shuning uchun saytingiz xatlarni ishonchli jo‘nata olishi kerak. WP Mail SMTP kabi SMTP plagin o‘rnating, uni pochta xizmatingizga ulang va saytni ishga tushirishdan oldin sinov xati yuboring.</p>
    <div class="callout">Mijoz kod kelmadi desa, avvalo SMTP plaginingizning xatlar jurnalini tekshiring. Logvia har bir xatni WordPress’ga topshiradi.</div>

    <h2 id="popup">Popup</h2>
    <p>Popup’ni <strong>Settings → Logvia → Popup</strong> bo‘limida yoqing va markazdagi oyna yoki yondan chiqadigan panelni tanlang. U quyidagilarning istalganidan ochiladi:</p>
    <ul>
      <li><code>#logvia-login</code> yoki <code>#logvia-register</code> ga havola</li>
      <li><code>data-logvia-open="login"</code> yoki <code>data-logvia-open="register"</code> atributli istalgan element</li>
      <li><code>logvia-login-trigger</code> yoki <code>logvia-register-trigger</code> klassli istalgan element</li>
      <li><strong>Open the popup when visitors click any link to the login or registration screen</strong> yoqilgan bo‘lsa, kirish, ro‘yxatdan o‘tish yoki My Account sahifalariga havolalar</li>
      <li>Belgilangan vaqtdan keyin avtomatik: barcha sahifalarda yoki faqat siz ko‘rsatgan sahifalarda, xohlasangiz har bir tashrifchiga bir martadan</li>
    </ul>
<pre><code>&lt;a href="#logvia-login"&gt;Kirish&lt;/a&gt;
&lt;button data-logvia-open="register"&gt;Akkaunt yaratish&lt;/button&gt;</code></pre>

    <h2 id="menus">Menyu bandlari</h2>
    <p><strong>Appearance → Menus</strong> bo‘limida <strong>Logvia</strong> blokini oching va kerakli bandlarni qo‘shing. Blokli mavzularda Navigation blokiga xuddi shu manzil bilan Custom Link qo‘shing.</p>
    <table>
      <tr><th>Havola</th><th>Mehmonlar ko‘radi</th><th>Kirgan mijozlar ko‘radi</th></tr>
      <tr><td><code>#logvia-login</code></td><td>Kirish</td><td>Yashirin</td></tr>
      <tr><td><code>#logvia-register</code></td><td>Ro‘yxatdan o‘tish</td><td>Yashirin</td></tr>
      <tr><td><code>#logvia-both</code></td><td>Kirish / Ro‘yxatdan o‘tish</td><td>Yashirin</td></tr>
      <tr><td><code>#logvia-account</code></td><td>Yashirin</td><td>Akkauntim</td></tr>
      <tr><td><code>#logvia-logout</code></td><td>Yashirin</td><td>Chiqish</td></tr>
    </table>

    <h2 id="shortcodes">Shortkodlar</h2>
    <table>
      <tr><th>Shortkod</th><th>Nimani ko‘rsatadi</th></tr>
      <tr><td><code>[logvia]</code></td><td>Barcha oynalar. Akkaunt sahifasida ishlatiladi.</td></tr>
      <tr><td><code>[logvia_login]</code></td><td>Faqat kirish formasi</td></tr>
      <tr><td><code>[logvia_register]</code></td><td>Faqat ro‘yxatdan o‘tish formasi</td></tr>
      <tr><td><code>[logvia_forgot]</code></td><td>Faqat parolni tiklash formasi</td></tr>
      <tr><td><code>[logvia_link type="login"]</code></td><td>Popup’ni ochadigan havola. <code>type</code>: <code>login</code>, <code>register</code>, <code>both</code>, <code>account</code> yoki <code>logout</code>. Ixtiyoriy: <code>text</code> va <code>class</code>.</td></tr>
    </table>
    <p>Forma shortkodlari <code>redirect_to</code> parametrini qabul qiladi, masalan <code>[logvia_login redirect_to="/shop/"]</code>.</p>

    <h2 id="builder">Forma konstruktori</h2>
    <p><strong>Settings → Logvia → Form builder</strong> ni oching. Maydonni chap tomondan formaga sudrab qo‘ying yoki oxiriga qo‘shish uchun ustiga bosing. Maydonni o‘ng tomonda tahrirlash uchun uni bosing.</p>
    <ul>
      <li><strong>Width</strong>: to‘liq yoki yarim. Ikkita yarim maydon yonma-yon turadi.</li>
      <li><strong>Save value to</strong>: ism yoki familiya, WooCommerce to‘lov maydoni yoki o‘zingiz tanlagan kalitli maxsus foydalanuvchi maydoni.</li>
      <li><strong>Required</strong>, placeholder, yordamchi matn, boshlang‘ich qiymat va uzunlik cheklovlari.</li>
    </ul>
    <p>Email va parol doim formada bo‘ladi. Ularni ko‘chirish va nomlarini o‘zgartirish mumkin. Formani mijozlar ko‘rganidek ko‘rish uchun <strong>Preview</strong> ni, keyin <strong>Save form</strong> ni bosing.</p>

    <h2 id="google">Google orqali kirish</h2>
    <ol>
      <li><a href="https://console.cloud.google.com/apis/credentials">Google Cloud Console → APIs &amp; Services → Credentials</a> ni oching.</li>
      <li>So‘ralsa, OAuth consent screen’ni sozlang: ilova nomi, yordam emaili va domeningiz.</li>
      <li><strong>Create credentials → OAuth client ID</strong> ni bosing va <strong>Web application</strong> ni tanlang.</li>
      <li><strong>Authorized redirect URIs</strong> maydoniga <strong>Settings → Logvia → Google sign-in</strong> sahifasida ko‘rsatilgan manzilni qo‘ying. U <code>https://yourstore.com/auth/google/callback/</code> ko‘rinishida bo‘ladi.</li>
      <li>Client ID va Client secret’ni Logvia’ga nusxalang, <strong>Show "Continue with Google"</strong> ni belgilang va saqlang.</li>
    </ol>
    <p>Administratorlar, muharrirlar va do‘kon menejerlari siz ruxsat bermaguningizcha Google orqali kira olmaydi. Bu xodimning Google akkaunti buzilgan taqdirda boshqaruv panelingizni himoya qiladi.</p>

    <h2 id="captcha">Captcha va xavfsizlik</h2>
    <p><strong>Settings → Logvia → Security</strong> bo‘limida Cloudflare Turnstile, reCAPTCHA v2 yoki reCAPTCHA v3 ni tanlang, site key va secret key’ni qo‘ying hamda qaysi formalarda ishlatilishini belgilang. Turnstile bepul va odatda odamlarga ko‘rinmaydi.</p>
    <p>Shu yorliqda parolning minimal uzunligi va murakkabligini belgilash, murakkablik ko‘rsatkichini yoqish va qisqa bloklashdan oldin nechta muvaffaqiyatsiz kirishga ruxsat berilishini sozlash mumkin.</p>

    <h2 id="woocommerce">WooCommerce</h2>
    <ul>
      <li><strong>Replace My Account login</strong>: My Account’ni ochgan mehmonlar WooCommerce formasi o‘rniga Logvia’ni ko‘radi.</li>
      <li><strong>Checkout login</strong>: "Returning customer? Click here to login" havolasi Logvia popup’ini ochadi.</li>
      <li><strong>Require an account to check out</strong>: mehmonlar savatni to‘ldira oladi, lekin checkout’da kirishi yoki ro‘yxatdan o‘tishi kerak. Ular savati saqlangan holda darhol qaytadi.</li>
    </ul>
    <p>Yangi akkauntlarga WooCommerce Customer roli beriladi.</p>

    <h2 id="redirects">Yo‘naltirishlar</h2>
    <p><strong>General</strong> yorlig‘ida kirgandan, ro‘yxatdan o‘tgandan va chiqqandan keyin foydalanuvchi qayerga borishini tanlang: My Account, bosh sahifa, u turgan sahifa yoki siz kiritgan istalgan manzil.</p>

    <h2 id="design">Dizayn va shablonlar</h2>
    <p><strong>Appearance</strong> yorlig‘ida asosiy rang, burchaklar radiusi, popup kengligi, logotip va ko‘rinishni tanlang. Ikki ustunli ko‘rinishda forma yonida sarlavhali rasm chiqadi.</p>
    <p>Aniqroq sozlash uchun CSS o‘zgaruvchilarini qayta belgilang:</p>
<pre><code>.logvia { --logvia-radius: 4px; }</code></pre>
    <p>HTML’ni o‘zgartirish uchun faylni <code>wp-content/plugins/logvia/templates/</code> dan <code>your-theme/logvia/</code> ga nusxalang va nusxani tahrirlang. O‘zgarishlaringiz plagin yangilanganda saqlanib qoladi.</p>
    <p>Har bir sarlavha, tugma va yozuvni <strong>Texts &amp; emails</strong> bo‘limida o‘zgartirish mumkin. Logvia tarjimaga tayyor va WPML konfiguratsiyasiga ega, uni Polylang ham o‘qiydi.</p>

    <h2 id="pro">Pro’ni o‘rnatish</h2>
    <ol>
      <li>Bepul Logvia plaginini o‘rnatilgan va faol holda qoldiring.</li>
      <li>Logvia Pro’ni xarid xatingizdan yuklab oling va <strong>Plugins → Add New → Upload Plugin</strong> orqali yuklang.</li>
      <li>Faollashtiring va litsenziya kalitini kiriting. Yangi sozlamalar mavjud Logvia yorliqlari ichida paydo bo‘ladi.</li>
    </ol>
    <p><strong>Google One Tap</strong> Logvia’dagi Google orqali kirish bilan bir xil Google mijozidan foydalanadi. Google Cloud Console’da sayt manzilingizni, masalan <code>https://dokoningiz.uz</code>, <strong>Authorized JavaScript origins</strong> bo‘limiga ham qo‘shing, so‘ng <strong>Google sign-in</strong> yorlig‘ining pastida One Tap’ni yoqing.</p>
    <p><strong>Aqlli popup triggerlari.</strong> <strong>Popup</strong> yorlig‘ining pastida Pro popupni mehmon saytdan ketmoqchi bo‘lganda (sichqoncha brauzer yorliqlari tomon harakatlanganda yoki telefonda tez yuqoriga aylantirilganda) yoki sahifaning 25%, 50% yoki 75% qismi o‘qilgach ochadi. Ko‘rsatish qoidalari qayerda va kimga ekanini belgilaydi: barcha sahifalar, do‘kon sahifalari yoki siz sanab bergan sahifalar; kompyuter yoki telefon; yangi yoki qaytgan mehmonlar; va qanchalik tez-tez: har ko‘rishda, har tashrifda bir marta, kuniga yoki haftasiga bir marta.</p>

    <h2 id="developers">Dasturchilar uchun</h2>
    <p>Filtrlar:</p>
<pre><code>logvia_messages            logvia_validate_registration
logvia_default_redirect    logvia_login_redirect
logvia_template            logvia_template_args
logvia_hide_page_title     logvia_client_ip
logvia_rate_limits         logvia_text
logvia_field_types         logvia_field_maps
logvia_validate_fields     logvia_meta_key_allowed
logvia_pre_send_email      logvia_email_html
logvia_purchase_requires_login
logvia_google_user_is_privileged</code></pre>
    <p>Actionlar:</p>
<pre><code>logvia_customer_created( $user_id, $email )
logvia_fields_saved( $user_id, $values )
logvia_registration_complete( $user_id, $pending )</code></pre>
    <p>Misol: yangi mijozlarni kirgandan keyin do‘konga yo‘naltirish.</p>
<pre><code>add_filter( 'logvia_login_redirect', function ( $url, $user, $requested ) {
    return wc_get_page_permalink( 'shop' );
}, 10, 3 );</code></pre>

    <h2 id="troubleshooting">Muammolarni hal qilish</h2>
    <h3>Tasdiqlash xati kelmayapti</h3>
    <p>SMTP plagin o‘rnating va sinov xati yuboring. Mijozdan spam papkasini tekshirishni so‘rang.</p>
    <h3>Boshqaruv paneliga kira olmayapman</h3>
    <p><code>wp-config.php</code> fayliga quyidagi qatorni qo‘shing, <code>/wp-login.php</code> orqali kiring, sozlamani tuzating va qatorni olib tashlang:</p>
<pre><code>define( 'LOGVIA_DISABLE_WP_LOGIN_REDIRECT', true );</code></pre>
    <h3>/auth/ sahifasi "Page not found" ko‘rsatyapti</h3>
    <p><strong>Settings → Permalinks</strong> ga kiring va bir marta Save ni bosing.</p>
    <h3>Sozlamalarni o‘zgartirgandan keyin eski formalar chiqyapti</h3>
    <p>Logvia keshlash plaginlariga o‘z sahifalarini keshlamaslikni aytadi. Agar sizning plaginingiz buni inobatga olmasa, <code>/auth/</code> ni keshdan chiqarib tashlang va keshni tozalang.</p>
    <p>Hal bo‘lmadimi? WordPress, WooCommerce va Logvia versiyalarini ko‘rsatib <a href="{contact}">menga yozing</a>.</p>`,

  termsHtml: `<h2>Men kimman</h2>
  <p>Ushbu saytdagi plaginlarni Toshkentdagi mustaqil dasturchi Farrukh Sobirov yaratgan. Ushbu shartlarda "men" deganda Farrukh Sobirov, "siz" deganda plaginlardan foydalanadigan yoki litsenziya sotib oladigan shaxs yoki kompaniya tushuniladi.</p>
  <h2>Litsenziya</h2>
  <p>Barcha plaginlarim, bepul va pullik, GNU General Public License v2 yoki undan keyingi versiyasi ostida chiqariladi. Pullik litsenziya rejangizdagi saytlar soni uchun, to‘langan muddat davomida yangilanishlar va yordamdan foydalanish huquqini beradi.</p>
  <h2>To‘lovlar</h2>
  <p>Pullik litsenziyalar mening reselerim orqali sotiladi. U to‘lov, soliq va hisob-fakturalarni boshqaradi va bank ko‘chirmangizda aynan u ko‘rinadi. Rejalar bekor qilinmaguncha har yili avtomatik uzaytiriladi. Istalgan vaqtda akkauntingizdan yoki menga email yozib bekor qilishingiz mumkin; litsenziya to‘langan muddat oxirigacha faol qoladi.</p>
  <h2>Pulni qaytarish</h2>
  <p><a href="{refund}">Pulni qaytarish siyosatiga</a> qarang.</p>
  <h2>Yordam</h2>
  <p>Yordam plaginlarimni o‘rnatish, sozlash, ishlatish va ulardagi muammolarni tuzatishni o‘z ichiga oladi. Maxsus kod, boshqa plaginlar yoki mavzular hamda hosting muammolari bunga kirmaydi, lekin imkonim bo‘lsa, to‘g‘ri yo‘nalishni ko‘rsataman.</p>
  <h2>Kafolat yo‘qligi</h2>
  <p>Plaginlar "boricha" taqdim etiladi. Ularni ishonchli va xavfsiz qilish uchun ko‘p mehnat qilaman, lekin ularda xato yo‘qligiga kafolat bera olmayman. Saytingizning zaxira nusxalarini saqlang. Qonun ruxsat bergan darajada mening umumiy javobgarligim oxirgi o‘n ikki oyda menga to‘lagan summangiz bilan cheklanadi.</p>
  <h2>O‘zgarishlar</h2>
  <p>Ushbu shartlarni yangilashim mumkin. Yuqoridagi sana oxirgi o‘zgarishni ko‘rsatadi. Muhim o‘zgarishlar haqida mijozlarga email orqali xabar beriladi.</p>
  <h2>Aloqa</h2>
  <p>Ushbu shartlar bo‘yicha savollar: <a href="{contact}">menga yozing</a>.</p>
  <p class="note">Bu tarjima qulaylik uchun berilgan. Nizo bo‘lsa, inglizcha matn asosiy hisoblanadi.</p>`,

  privacyHtml: `<h2>Ushbu sayt</h2>
  <p>Bu sayt tashriflar sonini va sahifa tezligini o‘lchash uchun Cloudflare Web Analytics’dan foydalanadi. U cookie qo‘ymaydi, sizni boshqa saytlarda kuzatmaydi va shaxsiy ma’lumot yig‘maydi. Reklama kuzatuvchilari yo‘q. Sayt brauzeringizda bir nechta kichik sozlamani saqlaydi: tilingiz, yorug‘ yoki qorong‘i rejim tanlovingiz va, agar yoqsangiz, ovoz. Hosting provayderi Cloudflare saytni yetkazish va himoya qilish uchun IP manzillar kabi standart so‘rov ma’lumotlarini qayta ishlaydi. Aloqa formasi orqali xabar yuborsangiz, u menga Telegram orqali yetkaziladi.</p>
  <h2>Litsenziya sotib olganingizda</h2>
  <p>Buyurtmani rasmiylashtirish uchun reselerim ismingiz, emailingiz, hisob-kitob manzilingiz va to‘lov ma’lumotlaringizni yig‘adi. Men ismingiz, emailingiz, sotib olgan rejangiz va litsenziyani faollashtirgan saytlaringiz haqida ma’lumot olaman. Bundan yangilanishlarni yetkazish, yordam berish va litsenziyangiz haqidagi muhim xabarlarni yuborish uchun foydalanaman.</p>
  <h2>Menga yozganingizda</h2>
  <p>Sizga yordam berish va oldingi suhbatlarga qaytish uchun xabarlaringizni saqlayman.</p>
  <h2>Plaginlarim</h2>
  <p>Plaginlarim saytingiz yoki mijozlaringiz haqidagi ma’lumotlarni menga yubormaydi. Google orqali kirish yoki captcha kabi xizmatlarga faqat siz ularni yoqqaningizda murojaat qilinadi, bu har bir plaginning readme faylida tushuntirilgan.</p>
  <h2>Huquqlaringiz</h2>
  <p>Ma’lumotlaringiz nusxasini olish, ularni tuzatish yoki o‘chirishni so‘rashingiz mumkin. <a href="{contact}">Menga yozing</a>, 30 kun ichida javob beraman. Ma’lumotlaringizni hech qachon sotmayman.</p>
  <p class="note">Bu tarjima qulaylik uchun berilgan. Nizo bo‘lsa, inglizcha matn asosiy hisoblanadi.</p>`,

  refundHtml: `<h2>14 kunlik pulni qaytarish kafolati</h2>
  <p>Agar pullik plagin sizga mos kelmasa, xariddan keyin 14 kun ichida menga yozing va pulingizni to‘liq qaytaraman. Iloji bo‘lsa, nima noto‘g‘ri bo‘lganini ayting; bu menga yaxshilashga yordam beradi, lekin majburiy emas.</p>
  <h2>Avtomatik uzaytirishlar</h2>
  <p>Avtomatik uzaytirish uchun to‘langan pul, agar shundan beri litsenziyadan foydalanmagan bo‘lsangiz, uzaytirish sanasidan 14 kun ichida qaytariladi.</p>
  <h2>Pul qanday qaytariladi</h2>
  <p>Pul reselerim orqali dastlabki to‘lov usuliga qaytariladi. Bankingizga qarab, odatda 5–10 ish kuni ichida keladi. Pul qaytarilganda litsenziya o‘chiriladi.</p>
  <h2>Aloqa</h2>
  <p>Pulni qaytarishni so‘rash uchun xarid qilgan emailingiz bilan <a href="{contact}">menga yozing</a>.</p>
  <p class="note">Bu tarjima qulaylik uchun berilgan. Nizo bo‘lsa, inglizcha matn asosiy hisoblanadi.</p>`,
};
