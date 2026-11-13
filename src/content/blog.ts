// Blog posts about Logvia releases, in every site language.
// Each post: slug, date, cover image, and per-language title, description and HTML body.

import type { Locale } from "@/i18n/config";

type PostText = { title: string; description: string; html: string };

export type Post = {
  slug: string;
  iso: string;
  cover: { src: string; w: number; h: number };
  tag: string;
  text: Record<Locale, PostText>;
};

const cover = (slug: string) => ({ src: `/blog/${slug}.webp`, w: 1600, h: 900 });

export const blogCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  readMore: string;
  back: string;
  ctaTitle: string;
  ctaText: string;
  ctaFree: string;
  ctaPro: string;
  ctaPreview: string;
}> = {
  en: {
    eyebrow: "Logvia · Blog",
    title: "Notes from the workshop.",
    lead: "What is new in Logvia, why it was built and how to use it on your store.",
    metaTitle: "Logvia blog: WooCommerce login, registration and Google sign-in",
    metaDescription: "Release notes and how-to guides for Logvia, the login, registration and Google sign-in plugin for WooCommerce.",
    readMore: "Read",
    back: "All posts",
    ctaTitle: "Try it on your store.",
    ctaText: "Logvia is free on WordPress.org. Pro adds Google One Tap, smart popups and tools for wholesale stores.",
    ctaFree: "Download free",
    ctaPro: "See Pro plans",
    ctaPreview: "Live Preview",
  },
  uz: {
    eyebrow: "Logvia · Blog",
    title: "Ustaxonadan yozuvlar.",
    lead: "Logvia’dagi yangiliklar, ular nega qilingani va do‘koningizda qanday ishlatish.",
    metaTitle: "Logvia blogi: WooCommerce uchun kirish, ro‘yxatdan o‘tish va Google orqali kirish",
    metaDescription: "WooCommerce uchun kirish, ro‘yxatdan o‘tish va Google orqali kirish plagini Logvia’ning yangiliklari va qo‘llanmalari.",
    readMore: "O‘qish",
    back: "Barcha postlar",
    ctaTitle: "Do‘koningizda sinab ko‘ring.",
    ctaText: "Logvia WordPress.org’da bepul. Pro esa Google One Tap, aqlli popup va ulgurji savdo uchun vositalar qo‘shadi.",
    ctaFree: "Bepul yuklab olish",
    ctaPro: "Pro tariflari",
    ctaPreview: "Live Preview",
  },
  ru: {
    eyebrow: "Logvia · Блог",
    title: "Заметки из мастерской.",
    lead: "Что нового в Logvia, зачем это сделано и как использовать в вашем магазине.",
    metaTitle: "Блог Logvia: вход, регистрация и вход через Google для WooCommerce",
    metaDescription: "Новости и инструкции по Logvia — плагину входа, регистрации и входа через Google для WooCommerce.",
    readMore: "Читать",
    back: "Все записи",
    ctaTitle: "Попробуйте в своём магазине.",
    ctaText: "Logvia бесплатен на WordPress.org. Pro добавляет Google One Tap, умные окна и инструменты для оптовых магазинов.",
    ctaFree: "Скачать бесплатно",
    ctaPro: "Тарифы Pro",
    ctaPreview: "Live Preview",
  },
};

export const posts: Post[] = [
  {
    slug: "try-logvia-live-preview",
    iso: "2026-11-13",
    cover: cover("try-logvia-live-preview"),
    tag: "Logvia 1.4.0",
    text: {
      en: {
        title: "Try Logvia in your browser before you install it",
        description: "Logvia 1.4.0 adds Live Preview on WordPress.org: a full demo store with the sign-up popup, phone field and login page, running in your browser.",
        html: `<p>Choosing a login plugin usually means installing it on a staging site, clicking through settings and hoping it looks right with your theme. With Logvia 1.4.0 you can skip that step.</p>
<h2>Live Preview on WordPress.org</h2>
<p>Open <a href="https://wordpress.org/plugins/logvia/">Logvia on WordPress.org</a> and click <strong>Live Preview</strong>. WordPress Playground starts a real WordPress site inside your browser tab, installs WooCommerce and Logvia, and opens the home page with the sign-up popup. Nothing is installed on your computer and nothing is sent to your store.</p>
<p>In the demo you can:</p>
<ul>
<li>Switch between the <strong>Log in</strong> and <strong>Sign up</strong> tabs in the popup.</li>
<li>Pick a country in the phone field and see the dialling code appear.</li>
<li>Open <strong>Account access</strong> in the menu to see the split login page with an image beside the form.</li>
<li>Create an account and receive the six-digit verification step.</li>
</ul>
<p>The demo uses Logvia's own settings: an accent colour, a logo and the split layout on the Appearance tab. Everything you see can be set up the same way on your store in a few minutes.</p>
<h2>Also in 1.4.0</h2>
<p>The settings tabs now list the features of the optional Logvia Pro add-on at the bottom, with a lock icon and a link to compare plans. The free plugin stays complete on its own. If you do not want the list, the <code>logvia_show_pro_features</code> filter hides it:</p>
<pre><code>add_filter( 'logvia_show_pro_features', '__return_false' );</code></pre>
<p>Update from <strong>Dashboard → Updates</strong>, or install Logvia from <strong>Plugins → Add New</strong>.</p>`,
      },
      uz: {
        title: "Logvia’ni o‘rnatishdan oldin brauzerda sinab ko‘ring",
        description: "Logvia 1.4.0 WordPress.org’da Live Preview qo‘shdi: Sign up popupi, telefon maydoni va login sahifasi bilan to‘liq demo do‘kon brauzeringizda ishlaydi.",
        html: `<p>Login plaginini tanlash odatda uni test saytga o‘rnatish, sozlamalarni birma-bir ko‘rish va mavzuga mos tushishini kutishdan iborat. Logvia 1.4.0 bilan bu qadamni o‘tkazib yuborishingiz mumkin.</p>
<h2>WordPress.org’da Live Preview</h2>
<p><a href="https://wordpress.org/plugins/logvia/">WordPress.org’dagi Logvia</a> sahifasini oching va <strong>Live Preview</strong> tugmasini bosing. WordPress Playground brauzer oynasining o‘zida haqiqiy WordPress saytini ishga tushiradi, WooCommerce va Logvia’ni o‘rnatadi hamda bosh sahifani Sign up popupi bilan ochadi. Kompyuteringizga hech narsa o‘rnatilmaydi va do‘koningizga hech narsa yuborilmaydi.</p>
<p>Demoda siz:</p>
<ul>
<li>Popupdagi <strong>Log in</strong> va <strong>Sign up</strong> yorliqlari orasida almashasiz.</li>
<li>Telefon maydonida mamlakatni tanlab, uning kodi paydo bo‘lishini ko‘rasiz.</li>
<li>Menyudagi <strong>Account access</strong> orqali forma yonida rasm turadigan ikki ustunli login sahifasini ochasiz.</li>
<li>Akkaunt yaratib, olti xonali tasdiqlash bosqichini ko‘rasiz.</li>
</ul>
<p>Demo Logvia’ning o‘z sozlamalaridan foydalanadi: Appearance yorlig‘idagi asosiy rang, logo va ikki ustunli ko‘rinish. Ko‘rganlaringizning hammasini o‘z do‘koningizda bir necha daqiqada xuddi shunday sozlash mumkin.</p>
<h2>1.4.0’da yana nima bor</h2>
<p>Sozlamalar yorliqlarining pastida endi ixtiyoriy Logvia Pro qo‘shimchasining imkoniyatlari qulf belgisi va tariflarni solishtirish havolasi bilan ko‘rsatiladi. Bepul plagin o‘zi to‘liq ishlashda davom etadi. Ro‘yxat kerak bo‘lmasa, <code>logvia_show_pro_features</code> filtri uni yashiradi:</p>
<pre><code>add_filter( 'logvia_show_pro_features', '__return_false' );</code></pre>
<p><strong>Dashboard → Updates</strong> orqali yangilang yoki Logvia’ni <strong>Plugins → Add New</strong> orqali o‘rnating.</p>`,
      },
      ru: {
        title: "Попробуйте Logvia в браузере до установки",
        description: "В Logvia 1.4.0 появился Live Preview на WordPress.org: полный демо-магазин с окном регистрации, полем телефона и страницей входа прямо в браузере.",
        html: `<p>Выбор плагина входа обычно означает установку на тестовый сайт, долгий просмотр настроек и надежду, что всё совпадёт с темой. С Logvia 1.4.0 этот шаг можно пропустить.</p>
<h2>Live Preview на WordPress.org</h2>
<p>Откройте <a href="https://wordpress.org/plugins/logvia/">Logvia на WordPress.org</a> и нажмите <strong>Live Preview</strong>. WordPress Playground запускает настоящий сайт WordPress прямо во вкладке браузера, устанавливает WooCommerce и Logvia и открывает главную страницу с окном регистрации. На компьютер ничего не устанавливается, в ваш магазин ничего не отправляется.</p>
<p>В демо можно:</p>
<ul>
<li>Переключаться между вкладками <strong>Log in</strong> и <strong>Sign up</strong> в окне.</li>
<li>Выбрать страну в поле телефона и увидеть код страны.</li>
<li>Открыть <strong>Account access</strong> в меню и посмотреть страницу входа с картинкой рядом с формой.</li>
<li>Создать аккаунт и дойти до шага с шестизначным кодом.</li>
</ul>
<p>Демо использует обычные настройки Logvia: цвет акцента, логотип и раскладку с картинкой на вкладке Appearance. Всё, что вы видите, можно так же настроить в своём магазине за несколько минут.</p>
<h2>Что ещё в 1.4.0</h2>
<p>Внизу вкладок настроек теперь показан список возможностей дополнения Logvia Pro со значком замка и ссылкой на сравнение тарифов. Бесплатный плагин по-прежнему полностью самостоятелен. Если список не нужен, его скрывает фильтр <code>logvia_show_pro_features</code>:</p>
<pre><code>add_filter( 'logvia_show_pro_features', '__return_false' );</code></pre>
<p>Обновитесь в <strong>Консоль → Обновления</strong> или установите Logvia через <strong>Плагины → Добавить новый</strong>.</p>`,
      },
    },
  },
  {
    slug: "google-one-tap-woocommerce",
    iso: "2026-11-13",
    cover: cover("google-one-tap-woocommerce"),
    tag: "Logvia Pro 1.1.0",
    text: {
      en: {
        title: "Google One Tap for WooCommerce: sign customers in with one click",
        description: "Logvia Pro 1.1.0 adds Google One Tap. Customers signed in to Google see a \"Continue as …\" prompt and are logged in to your store with one click.",
        html: `<p>Most of your customers are already signed in to Google in their browser. Google One Tap uses that: a small prompt appears in the corner of your store saying <strong>Continue as Anna</strong>. One click, and they are logged in, or a new customer account is created for them. No form, no password, no email code.</p>
<h2>How it works in Logvia Pro</h2>
<p>One Tap is part of Logvia Pro 1.1.0 and uses the same Google client you already set up for the free <strong>Continue with Google</strong> button. Both lead to the same account: a customer who used the button last month and One Tap today lands in one profile.</p>
<p>Behind the prompt, Logvia does the careful part on your server:</p>
<ul>
<li>Google's signed token is checked against Google's public keys, and its audience, issuer and expiry are verified.</li>
<li>Every prompt gets a one-time code, so a token cannot be reused.</li>
<li>Only verified Google email addresses are accepted.</li>
<li>Administrators, editors and shop managers still log in with their password unless you allow Google sign-in for staff.</li>
</ul>
<h2>Set it up in two minutes</h2>
<ol>
<li>Set up Google sign-in in the free plugin first (<strong>Settings → Logvia → Google sign-in</strong>).</li>
<li>In Google Cloud Console open your OAuth client and add your store address, for example <code>https://yourstore.com</code>, under <strong>Authorized JavaScript origins</strong>.</li>
<li>At the bottom of the Google sign-in tab, turn on <strong>One Tap</strong>. Choose where it shows (all pages or only shop pages) and the prompt title.</li>
<li>Optional: turn on <strong>Automatic sign-in</strong>, so returning customers are signed in without even clicking.</li>
</ol>
<p>Open your store in a private window while signed in to Google, and the prompt appears in the top corner.</p>
<h2>Why it matters</h2>
<p>Every field in a sign-up form loses some people. One Tap removes all of them for customers who already have a Google account, which on most stores is nearly everyone. It works best together with the popup: guests who prefer email can still use the normal form.</p>`,
      },
      uz: {
        title: "WooCommerce uchun Google One Tap: mijozlar bir bosishda kiradi",
        description: "Logvia Pro 1.1.0 Google One Tap’ni qo‘shdi. Google’ga kirgan mijozlar \"Continue as …\" oynasini ko‘radi va do‘koningizga bir bosishda kiradi.",
        html: `<p>Mijozlaringizning ko‘pchiligi brauzerda allaqachon Google’ga kirgan. Google One Tap aynan shundan foydalanadi: do‘koningiz burchagida <strong>Continue as Anna</strong> degan kichik oyna chiqadi. Bir bosish, va mijoz tizimga kiradi yoki unga yangi akkaunt yaratiladi. Forma ham, parol ham, email kod ham kerak emas.</p>
<h2>Logvia Pro’da qanday ishlaydi</h2>
<p>One Tap Logvia Pro 1.1.0’ning bir qismi va bepul <strong>Continue with Google</strong> tugmasi uchun sozlagan Google mijozingizdan foydalanadi. Ikkalasi bitta akkauntga olib boradi: o‘tgan oy tugmadan, bugun One Tap’dan foydalangan mijoz bitta profilga tushadi.</p>
<p>Oyna ortida Logvia serveringizda ehtiyotkor tekshiruvlarni bajaradi:</p>
<ul>
<li>Google imzolagan token Google’ning ochiq kalitlari bilan tekshiriladi, uning kimga mo‘ljallangani, kim bergani va muddati ham tekshiriladi.</li>
<li>Har bir oyna bir martalik kod oladi, shuning uchun tokenni qayta ishlatib bo‘lmaydi.</li>
<li>Faqat tasdiqlangan Google email manzillari qabul qilinadi.</li>
<li>Administratorlar, muharrirlar va do‘kon menejerlari, siz ruxsat bermasangiz, baribir parol bilan kiradi.</li>
</ul>
<h2>Ikki daqiqada sozlang</h2>
<ol>
<li>Avval bepul plaginda Google orqali kirishni sozlang (<strong>Settings → Logvia → Google sign-in</strong>).</li>
<li>Google Cloud Console’da OAuth mijozingizni oching va do‘kon manzilini, masalan <code>https://dokoningiz.uz</code>, <strong>Authorized JavaScript origins</strong> bo‘limiga qo‘shing.</li>
<li>Google sign-in yorlig‘ining pastida <strong>One Tap</strong>’ni yoqing. Qayerda chiqishini (barcha sahifalar yoki faqat do‘kon sahifalari) va oyna sarlavhasini tanlang.</li>
<li>Ixtiyoriy: <strong>Automatic sign-in</strong>’ni yoqing, shunda qaytgan mijozlar bosmasdan ham kiradi.</li>
</ol>
<p>Google’ga kirgan holda do‘koningizni yashirin oynada oching, yuqori burchakda oyna paydo bo‘ladi.</p>
<h2>Nega bu muhim</h2>
<p>Ro‘yxatdan o‘tish formasidagi har bir maydon bir qism odamni yo‘qotadi. One Tap Google akkaunti bor mijozlar uchun ularning hammasini olib tashlaydi, ko‘pchilik do‘konlarda esa bu deyarli hamma. U popup bilan birga eng yaxshi ishlaydi: email’ni afzal ko‘rgan mehmonlar oddiy formadan foydalanaveradi.</p>`,
      },
      ru: {
        title: "Google One Tap для WooCommerce: вход покупателей в один клик",
        description: "В Logvia Pro 1.1.0 появился Google One Tap. Покупатели, вошедшие в Google, видят окно «Continue as …» и входят в магазин одним кликом.",
        html: `<p>Большинство ваших покупателей уже вошли в Google в своём браузере. Google One Tap использует это: в углу магазина появляется небольшое окно <strong>Continue as Anna</strong>. Один клик — и покупатель вошёл, или для него создан новый аккаунт. Без формы, без пароля, без кода из письма.</p>
<h2>Как это работает в Logvia Pro</h2>
<p>One Tap входит в Logvia Pro 1.1.0 и использует того же клиента Google, которого вы уже настроили для бесплатной кнопки <strong>Continue with Google</strong>. Оба способа ведут в один аккаунт: покупатель, который в прошлом месяце нажал кнопку, а сегодня — One Tap, попадает в один профиль.</p>
<p>За окном Logvia выполняет проверки на вашем сервере:</p>
<ul>
<li>Подписанный токен Google сверяется с открытыми ключами Google, проверяются получатель, издатель и срок действия.</li>
<li>Каждое окно получает одноразовый код, поэтому токен нельзя использовать повторно.</li>
<li>Принимаются только подтверждённые адреса Google.</li>
<li>Администраторы, редакторы и менеджеры магазина по-прежнему входят по паролю, если вы не разрешили им вход через Google.</li>
</ul>
<h2>Настройка за две минуты</h2>
<ol>
<li>Сначала настройте вход через Google в бесплатном плагине (<strong>Settings → Logvia → Google sign-in</strong>).</li>
<li>В Google Cloud Console откройте OAuth-клиент и добавьте адрес магазина, например <code>https://yourstore.com</code>, в <strong>Authorized JavaScript origins</strong>.</li>
<li>Внизу вкладки Google sign-in включите <strong>One Tap</strong>. Выберите, где его показывать (все страницы или только страницы магазина), и заголовок окна.</li>
<li>По желанию включите <strong>Automatic sign-in</strong>, чтобы вернувшиеся покупатели входили даже без клика.</li>
</ol>
<p>Откройте магазин в приватном окне, войдя в Google, — окно появится в верхнем углу.</p>
<h2>Почему это важно</h2>
<p>Каждое поле в форме регистрации теряет часть людей. One Tap убирает их все для тех, у кого есть аккаунт Google, а в большинстве магазинов это почти все. Лучше всего он работает вместе с окном входа: кто предпочитает email, по-прежнему может заполнить обычную форму.</p>`,
      },
    },
  },
  {
    slug: "exit-intent-popup-rules",
    iso: "2026-11-13",
    cover: cover("exit-intent-popup-rules"),
    tag: "Logvia Pro 1.1.0",
    text: {
      en: {
        title: "Exit-intent and scroll popups for WooCommerce sign-ups",
        description: "Logvia Pro 1.1.0 can open the sign-up popup when a visitor is about to leave or has read part of the page, with rules for pages, devices, visitors and frequency.",
        html: `<p>A popup that opens the moment someone arrives is easy to ignore. A popup that opens when a visitor is about to leave, or after they have shown interest, is a fair question at the right time. Logvia Pro 1.1.0 adds both.</p>
<h2>Two new triggers</h2>
<ul>
<li><strong>Exit intent.</strong> On computers the popup opens when the mouse moves out of the window towards the tabs. On phones, where there is no mouse, it opens when the visitor scrolls back up quickly after reading part of the page. It is armed only after a few seconds, so it never fires on arrival.</li>
<li><strong>Scroll depth.</strong> The popup opens after 25%, 50% or 75% of the page. Someone who scrolled through half of a product page is interested.</li>
</ul>
<p>You choose which tab opens, <strong>Sign up</strong> or <strong>Log in</strong>. The popup never opens while the visitor is typing in a field or has it open already.</p>
<h2>Rules: where, to whom, how often</h2>
<ul>
<li><strong>Pages:</strong> all pages, only shop, product, category and cart pages, only the pages you list, or all pages except those.</li>
<li><strong>Devices:</strong> computers and phones, computers only or phones and tablets only.</li>
<li><strong>Visitors:</strong> everyone, first visit only or returning visitors only.</li>
<li><strong>How often:</strong> every page view, once per visit, once a day or once a week. A visitor who closes the popup is not asked again until then.</li>
</ul>
<p>The rules apply to these two triggers. Menu items, links and the timed popup from the free plugin keep working everywhere.</p>
<h2>A good starting point</h2>
<p>For most stores: exit intent on, scroll depth at 50%, open on <strong>Sign up</strong>, shop pages only, first visit only, once a day. Pair it with Google sign-in in the popup so signing up takes one click.</p>
<p>Find the settings at the bottom of <strong>Settings → Logvia → Popup</strong> after installing Logvia Pro.</p>`,
      },
      uz: {
        title: "WooCommerce’da ro‘yxatdan o‘tish uchun exit-intent va scroll popuplari",
        description: "Logvia Pro 1.1.0 mehmon saytdan ketmoqchi bo‘lganda yoki sahifaning bir qismini o‘qigach Sign up popupini ochadi. Sahifalar, qurilmalar, mehmonlar va chastota bo‘yicha qoidalar bilan.",
        html: `<p>Odam saytga kirgan zahoti ochiladigan popupni e’tiborsiz qoldirish oson. Mehmon ketmoqchi bo‘lganda yoki qiziqish bildirgandan keyin ochiladigan popup esa o‘z vaqtida berilgan o‘rinli savol. Logvia Pro 1.1.0 ikkalasini ham qo‘shadi.</p>
<h2>Ikkita yangi trigger</h2>
<ul>
<li><strong>Exit intent.</strong> Kompyuterda popup sichqoncha oynadan brauzer yorliqlari tomon chiqqanda ochiladi. Sichqonchasi yo‘q telefonda esa mehmon sahifaning bir qismini o‘qigach tez yuqoriga aylantirganda ochiladi. U bir necha soniyadan keyingina faollashadi, shuning uchun saytga kirishda hech qachon ochilmaydi.</li>
<li><strong>Scroll depth.</strong> Popup sahifaning 25%, 50% yoki 75% qismidan keyin ochiladi. Mahsulot sahifasining yarmini o‘qigan odam qiziqqan bo‘ladi.</li>
</ul>
<p>Qaysi yorliq ochilishini o‘zingiz tanlaysiz: <strong>Sign up</strong> yoki <strong>Log in</strong>. Mehmon maydonga yozayotgan bo‘lsa yoki popup allaqachon ochiq bo‘lsa, u ochilmaydi.</p>
<h2>Qoidalar: qayerda, kimga, qanchalik tez-tez</h2>
<ul>
<li><strong>Sahifalar:</strong> barcha sahifalar, faqat do‘kon, mahsulot, kategoriya va savat sahifalari, faqat siz sanagan sahifalar yoki ulardan tashqari hammasi.</li>
<li><strong>Qurilmalar:</strong> kompyuter va telefon, faqat kompyuter yoki faqat telefon va planshet.</li>
<li><strong>Mehmonlar:</strong> hamma, faqat birinchi tashrif yoki faqat qaytgan mehmonlar.</li>
<li><strong>Chastota:</strong> har ko‘rishda, har tashrifda bir marta, kuniga yoki haftasiga bir marta. Popupni yopgan mehmondan shu muddatgacha qayta so‘ralmaydi.</li>
</ul>
<p>Qoidalar shu ikki triggerga tegishli. Bepul plagindagi menyu bandlari, havolalar va vaqt bo‘yicha ochiladigan popup hamma joyda ishlashda davom etadi.</p>
<h2>Yaxshi boshlang‘ich sozlama</h2>
<p>Ko‘pchilik do‘konlar uchun: exit intent yoqilgan, scroll depth 50%, <strong>Sign up</strong> yorlig‘i ochiladi, faqat do‘kon sahifalari, faqat birinchi tashrif, kuniga bir marta. Popupda Google orqali kirishni ham yoqing, shunda ro‘yxatdan o‘tish bir bosish bo‘ladi.</p>
<p>Logvia Pro o‘rnatilgach, sozlamalar <strong>Settings → Logvia → Popup</strong> sahifasining pastida bo‘ladi.</p>`,
      },
      ru: {
        title: "Окна при уходе и после прокрутки для регистрации в WooCommerce",
        description: "Logvia Pro 1.1.0 открывает окно регистрации, когда посетитель собирается уйти или прочитал часть страницы, с правилами по страницам, устройствам, посетителям и частоте.",
        html: `<p>Окно, которое открывается сразу при входе на сайт, легко проигнорировать. Окно, которое открывается, когда посетитель собирается уйти или уже проявил интерес, — уместный вопрос в нужный момент. Logvia Pro 1.1.0 добавляет оба варианта.</p>
<h2>Два новых триггера</h2>
<ul>
<li><strong>Exit intent.</strong> На компьютере окно открывается, когда курсор уходит из окна к вкладкам браузера. На телефоне, где нет курсора, — когда посетитель быстро прокручивает вверх, прочитав часть страницы. Триггер включается только через несколько секунд, поэтому никогда не срабатывает сразу при входе.</li>
<li><strong>Scroll depth.</strong> Окно открывается после 25%, 50% или 75% страницы. Тот, кто прокрутил половину страницы товара, заинтересован.</li>
</ul>
<p>Вы выбираете, какая вкладка откроется: <strong>Sign up</strong> или <strong>Log in</strong>. Окно не откроется, пока посетитель печатает в поле или если оно уже открыто.</p>
<h2>Правила: где, кому, как часто</h2>
<ul>
<li><strong>Страницы:</strong> все страницы, только магазин, товары, категории и корзина, только указанные вами страницы или все, кроме них.</li>
<li><strong>Устройства:</strong> компьютеры и телефоны, только компьютеры или только телефоны и планшеты.</li>
<li><strong>Посетители:</strong> все, только первый визит или только вернувшиеся.</li>
<li><strong>Частота:</strong> при каждом просмотре, раз за визит, раз в день или раз в неделю. Тому, кто закрыл окно, оно до этого срока больше не показывается.</li>
</ul>
<p>Правила относятся к этим двум триггерам. Пункты меню, ссылки и окно по таймеру из бесплатного плагина продолжают работать везде.</p>
<h2>Хорошая отправная точка</h2>
<p>Для большинства магазинов: exit intent включён, scroll depth 50%, открывается <strong>Sign up</strong>, только страницы магазина, только первый визит, раз в день. Добавьте вход через Google в окне — тогда регистрация займёт один клик.</p>
<p>Настройки находятся внизу <strong>Settings → Logvia → Popup</strong> после установки Logvia Pro.</p>`,
      },
    },
  },
  {
    slug: "phone-field-country-codes",
    iso: "2026-11-03",
    cover: cover("phone-field-country-codes"),
    tag: "Logvia 1.3.3",
    text: {
      en: {
        title: "A WooCommerce phone field with country flags and dialling codes",
        description: "Logvia 1.3.3 adds a phone field with round country flags, a searchable country list and the dialling code shown in the field. Pasted numbers pick their country.",
        html: `<p>Phone numbers are where sign-up forms quietly go wrong. A customer in Tashkent types <code>90 123 45 67</code>, a customer in Berlin types <code>0151…</code>, and your store ends up with numbers nobody can call. Logvia 1.3.3 fixes that in the registration form.</p>
<h2>What the field does</h2>
<ul>
<li><strong>Country flag and code in the field.</strong> A round flag and the dialling code, for example <code>+998</code>, sit at the start of the input, so customers type only their own number.</li>
<li><strong>Searchable country list.</strong> Click the flag and type <code>uz</code>, <code>ger</code> or <code>+49</code> to find a country in a second. It works with the keyboard too.</li>
<li><strong>Pasted numbers pick their country.</strong> Paste <code>+998 90 123 45 67</code> and the flag switches to Uzbekistan by itself.</li>
<li><strong>Saved in one format.</strong> The number is stored with its code, for example <code>+998 901234567</code>, in the profile or the WooCommerce billing phone.</li>
</ul>
<p>The list starts on your store's country from <strong>WooCommerce → Settings → General</strong>, so most customers never need to open it.</p>
<h2>Add it to your form</h2>
<ol>
<li>Open <strong>Settings → Logvia → Form builder</strong>.</li>
<li>Drag a <strong>Phone</strong> field into the form.</li>
<li>Tick <strong>Show a country code picker</strong>, set <strong>Save value to</strong> to <em>Billing: phone</em>, and save the form.</li>
</ol>
<p>The country list needs WooCommerce, which provides the countries and their codes. Without WooCommerce the field stays a plain phone input.</p>
<h2>Also in 1.3.3</h2>
<p>Popup tab colours can be changed under <strong>Settings → Logvia → Appearance</strong>, theme hover colours no longer leak onto the popup buttons, and half-width fields line up at the top. It was also the first release published on WordPress.org.</p>`,
      },
      uz: {
        title: "WooCommerce uchun bayroq va mamlakat kodli telefon maydoni",
        description: "Logvia 1.3.3 dumaloq bayroqlar, qidiruvli mamlakatlar ro‘yxati va maydon ichidagi telefon kodi bilan telefon maydonini qo‘shdi. Qo‘yilgan raqam mamlakatni o‘zi tanlaydi.",
        html: `<p>Ro‘yxatdan o‘tish formalari ko‘pincha aynan telefon raqamida jimgina buziladi. Toshkentdagi mijoz <code>90 123 45 67</code> deb yozadi, Berlindagisi <code>0151…</code> deb, natijada do‘koningizda hech kim qo‘ng‘iroq qila olmaydigan raqamlar to‘planadi. Logvia 1.3.3 buni ro‘yxatdan o‘tish formasida tuzatadi.</p>
<h2>Maydon nima qiladi</h2>
<ul>
<li><strong>Maydon ichida bayroq va kod.</strong> Dumaloq bayroq va mamlakat kodi, masalan <code>+998</code>, maydon boshida turadi, mijoz faqat o‘z raqamini yozadi.</li>
<li><strong>Qidiruvli mamlakatlar ro‘yxati.</strong> Bayroqni bosib <code>uz</code>, <code>ger</code> yoki <code>+49</code> deb yozing, mamlakat bir soniyada topiladi. Klaviatura bilan ham ishlaydi.</li>
<li><strong>Qo‘yilgan raqam mamlakatni o‘zi tanlaydi.</strong> <code>+998 90 123 45 67</code> ni qo‘ysangiz, bayroq o‘zi O‘zbekistonga o‘tadi.</li>
<li><strong>Bir xil formatda saqlanadi.</strong> Raqam kodi bilan, masalan <code>+998 901234567</code> ko‘rinishida profilga yoki WooCommerce billing telefoniga yoziladi.</li>
</ul>
<p>Ro‘yxat <strong>WooCommerce → Settings → General</strong>’dagi do‘koningiz mamlakatidan boshlanadi, shuning uchun ko‘pchilik mijozlar uni ochmasa ham bo‘ladi.</p>
<h2>Formaga qo‘shish</h2>
<ol>
<li><strong>Settings → Logvia → Form builder</strong>’ni oching.</li>
<li>Formaga <strong>Phone</strong> maydonini sudrab qo‘ying.</li>
<li><strong>Show a country code picker</strong>’ni belgilang, <strong>Save value to</strong>’da <em>Billing: phone</em>’ni tanlang va formani saqlang.</li>
</ol>
<p>Mamlakatlar ro‘yxati uchun WooCommerce kerak, chunki mamlakatlar va ularning kodlari undan olinadi. WooCommerce bo‘lmasa, maydon oddiy telefon maydoni bo‘lib qoladi.</p>
<h2>1.3.3’da yana</h2>
<p>Popup yorliqlari ranglarini <strong>Settings → Logvia → Appearance</strong>’da o‘zgartirish mumkin, mavzu tugmalarining hover ranglari endi popup tugmalariga o‘tmaydi, yarim kenglikdagi maydonlar tepadan bir tekis turadi. Bu WordPress.org’da chiqqan birinchi versiya ham edi.</p>`,
      },
      ru: {
        title: "Поле телефона с флагами и кодами стран для WooCommerce",
        description: "В Logvia 1.3.3 появилось поле телефона с круглыми флагами, поиском по странам и кодом страны прямо в поле. Вставленный номер сам выбирает страну.",
        html: `<p>Именно на номере телефона формы регистрации незаметно ломаются. Покупатель из Ташкента вводит <code>90 123 45 67</code>, из Берлина — <code>0151…</code>, и в магазине копятся номера, по которым невозможно позвонить. Logvia 1.3.3 исправляет это в форме регистрации.</p>
<h2>Что умеет поле</h2>
<ul>
<li><strong>Флаг и код прямо в поле.</strong> Круглый флаг и код страны, например <code>+998</code>, стоят в начале поля, покупатель вводит только свой номер.</li>
<li><strong>Поиск по странам.</strong> Нажмите на флаг и введите <code>uz</code>, <code>ger</code> или <code>+49</code> — страна найдётся за секунду. Работает и с клавиатуры.</li>
<li><strong>Вставленный номер сам выбирает страну.</strong> Вставьте <code>+998 90 123 45 67</code>, и флаг сам переключится на Узбекистан.</li>
<li><strong>Один формат хранения.</strong> Номер сохраняется с кодом, например <code>+998 901234567</code>, в профиль или в платёжный телефон WooCommerce.</li>
</ul>
<p>Список начинается со страны магазина из <strong>WooCommerce → Настройки → Основные</strong>, поэтому большинству покупателей открывать его не нужно.</p>
<h2>Как добавить в форму</h2>
<ol>
<li>Откройте <strong>Settings → Logvia → Form builder</strong>.</li>
<li>Перетащите в форму поле <strong>Phone</strong>.</li>
<li>Отметьте <strong>Show a country code picker</strong>, в <strong>Save value to</strong> выберите <em>Billing: phone</em> и сохраните форму.</li>
</ol>
<p>Для списка стран нужен WooCommerce: страны и их коды берутся из него. Без WooCommerce поле остаётся обычным полем телефона.</p>
<h2>Что ещё в 1.3.3</h2>
<p>Цвета вкладок окна меняются в <strong>Settings → Logvia → Appearance</strong>, цвета наведения темы больше не попадают на кнопки окна, а поля половинной ширины выровнены по верху. Это был и первый выпуск на WordPress.org.</p>`,
      },
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
