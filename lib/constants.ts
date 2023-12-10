/* eslint-disable quotes */
// export default function manifest() {
//   return {
//     name: 'Next.js App',
//     short_name: 'Next.js App',
//     description: 'Next.js App',
//     start_url: '/',
//     display: 'standalone',
//     background_color: '#fff',
//     theme_color: '#7B00D3',
//     icons: [
//       {
//         src: 'android/android-launchericon-512-512.png',
//         sizes: '512x512',
//       },
//       {
//         src: 'android/android-launchericon-192-192.png',
//         sizes: '192x192',
//       },
//       {
//         src: 'android/android-launchericon-144-144.png',
//         sizes: '144x144',
//       },
//       {
//         src: 'android/android-launchericon-96-96.png',
//         sizes: '96x96',
//       },
//       {
//         src: 'android/android-launchericon-72-72.png',
//         sizes: '72x72',
//       },
//       {
//         src: 'android/android-launchericon-48-48.png',
//         sizes: '48x48',
//       },
//       {
//         src: 'ios/16.png',
//         sizes: '16x16',
//       },
//       {
//         src: 'ios/20.png',
//         sizes: '20x20',
//       },
//       {
//         src: 'ios/29.png',
//         sizes: '29x29',
//       },
//       {
//         src: 'ios/32.png',
//         sizes: '32x32',
//       },
//       {
//         src: 'ios/40.png',
//         sizes: '40x40',
//       },
//       {
//         src: 'ios/50.png',
//         sizes: '50x50',
//       },
//       {
//         src: 'ios/57.png',
//         sizes: '57x57',
//       },
//       {
//         src: 'ios/58.png',
//         sizes: '58x58',
//       },
//       {
//         src: 'ios/60.png',
//         sizes: '60x60',
//       },
//       {
//         src: 'ios/64.png',
//         sizes: '64x64',
//       },
//       {
//         src: 'ios/72.png',
//         sizes: '72x72',
//       },
//       {
//         src: 'ios/76.png',
//         sizes: '76x76',
//       },
//       {
//         src: 'ios/80.png',
//         sizes: '80x80',
//       },
//       {
//         src: 'ios/87.png',
//         sizes: '87x87',
//       },
//       {
//         src: 'ios/100.png',
//         sizes: '100x100',
//       },
//       {
//         src: 'ios/114.png',
//         sizes: '114x114',
//       },
//       {
//         src: 'ios/120.png',
//         sizes: '120x120',
//       },
//       {
//         src: 'ios/128.png',
//         sizes: '128x128',
//       },
//       {
//         src: 'ios/144.png',
//         sizes: '144x144',
//       },
//       {
//         src: 'ios/152.png',
//         sizes: '152x152',
//       },
//       {
//         src: 'ios/167.png',
//         sizes: '167x167',
//       },
//       {
//         src: 'ios/180.png',
//         sizes: '180x180',
//       },
//       {
//         src: 'ios/192.png',
//         sizes: '192x192',
//       },
//       {
//         src: 'ios/256.png',
//         sizes: '256x256',
//       },
//       {
//         src: 'ios/512.png',
//         sizes: '512x512',
//       },
//       {
//         src: 'ios/1024.png',
//         sizes: '1024x1024',
//       },
//     ],
//   };
// }

export const SANITY_URL = '/en/studio';
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
export const ogImageSizes = [
  { width: 800, height: 600 },
  { width: 1800, height: 1600 },
];
export const twitterImageSizes = [
  { width: 800, height: 418 },
  { width: 1600, height: 900 },
];

export const blogCategories = [
  { title: 'Javascript', value: 'javascript' },
  { title: 'Css', value: 'css' },
  { title: 'Web Development', value: 'web-development' },
];
export const experiences = [
  {
    tr: {
      companyName: 'Paramtech',
      title: 'Frontend Developer',
      date: '2022-05 - Bugün',
      responsibilities: [
        {
          id: 0,
          tag: "Akbank ile işbirliği yaparak bankanın platformlarından kullanıcıların şirketin Kredim hizmeti ile ödemesine olanak sağlayan 'Kredim ile Öde' uygulaması geliştirdim.",
        },
        {
          id: 1,
          tag: "Şirketimize başvuran adaylara gönderdiğimiz frontend case'i için tüketebilecekleri bir api geliştirdim. Uygulama cross-origin çalışabilen nextjs apiları içeriyor ve adaylar girip kendileri apiları swagger gibi bir önyüzden test edip kendi case projelerinde tüketebiliyor.",
        },
        {
          id: 2,
          tag: "Şirketin yüksek trafikli uygulamaları olan Kredim, Param ve Finrota'da müşteri ihtiyaçlarına uygun geliştirmeler yaptım.",
        },
        {
          id: 3,
          tag: 'Şirketin back office projesinin geliştirilmesinde etkin rol aldım.',
        },
        {
          id: 4,
          tag: 'Şirketin inhouse kullanabileceği bir e-fatura uygulamasının geliştirilmesini tamamladım ve şirket muhasebecilerinin faturaları etkili bir şekilde yönetmelerine, izlemelerine ve raporlamalarına olanak tanıdım.',
        },
        {
          id: 5,
          tag: 'Next.js ve Contentful CMS ile şirketin yeni web sitesini geliştirdim. https://www.paramtech.com.tr/ ',
        },
        {
          id: 6,
          tag: 'Bankacılık web uygulamalarından birinin (İşube) mobil-responsive dönüşümünü gerçekleştirdim.',
        },
        {
          id: 7,
          tag: 'Next.js ve Typescript kullanarak çeşitli şirket web sitelerini geliştirdim. Örnek https://param.eu/ .',
        },
      ],
    },
    en: {
      companyName: 'Paramtech',
      title: 'Frontend Developer',
      date: '2022-05 - Present',
      responsibilities: [
        {
          id: 0,
          tag: "Developed the 'Pay with Kredim' application in collaboration with Akbank, enabling users to make payments using my company's own product, Kredim, through Akbank platforms.",
        },
        {
          id: 1,
          tag: 'Created an API for the frontend case we send to applicants at our company. The application contains Next.js APIs that can work across origins, allowing candidates to test and consume the APIs in their case projects through a frontend interface similar to Swagger.',
        },
        {
          id: 2,
          tag: 'Played a pivotal role in identifying and addressing customer needs within our flagship apps, including Kredim, Param, and Finrota.',
        },
        {
          id: 3,
          tag: "Played an active role in the development of the company's back-office project.",
        },
        {
          id: 4,
          tag: 'Spearheaded the development of an e-billing application (RTQ) using React.js and Redux, empowering company accountants to efficiently manage, track, and report bills.',
        },
        {
          id: 5,
          tag: "Took the lead in crafting our company's brand-new website using Next.js in conjunction with Contentful CMS. Explore the result at https://www.paramtech.com.tr/.",
        },
        {
          id: 6,
          tag: 'Successfully transformed one of our banking web applications into a fully mobile-responsive platform. Experience the mobile-friendly interface at Isube Banking.',
        },
        {
          id: 7,
          tag: 'Designed and developed various company websites using Next.js and Typescript, ensuring a modern and efficient web presence. Examples include https://param.eu/ .',
        },
      ],
    },
    de: {
      companyName: 'Paramtech',
      title: 'Frontend Developer',
      date: '2022-05 - Present',
      responsibilities: [
        {
          id: 0,
          tag: "In Zusammenarbeit mit Akbank habe ich die Anwendung 'Mit meinem Kredit bezahlen' entwickelt, die es Benutzern ermöglicht, Zahlungen über die Akbank-Plattformen mit meinem eigenen Produkt, Kredim, vorzunehmen.",
        },
        {
          id: 1,
          tag: 'Ich habe eine API für den Frontend-Case erstellt, den wir an Bewerber in unserem Unternehmen senden. Die Anwendung enthält Next.js-APIs, die über Ursprünge hinweg arbeiten können, sodass Kandidaten die APIs über eine Benutzeroberfläche ähnlich wie Swagger testen und in ihren Case-Projekten verbrauchen können.',
        },

        {
          id: 2,
          tag: 'Spielte eine entscheidende Rolle bei der Identifizierung und Ansprache von Kundenbedürfnissen in unseren Flaggschiff-Apps, einschließlich Kredim, Param und Finrota.',
        },
        {
          id: 3,
          tag: 'Ich habe eine aktive Rolle in der Entwicklung des Backoffice-Projekts des Unternehmens gespielt.',
        },
        {
          id: 4,
          tag: 'Leitete die Entwicklung einer E-Rechnungsanwendung (RTQ) mit React.js und Redux, um den Unternehmensbuchhaltern die effiziente Verwaltung, Verfolgung und Berichterstattung von Rechnungen zu ermöglichen.',
        },
        {
          id: 5,
          tag: 'Führte die Entwicklung unserer brandneuen Website des Unternehmens mit Next.js in Verbindung mit Contentful CMS an. Erkunden Sie das Ergebnis unter https://www.paramtech.com.tr/.',
        },
        {
          id: 6,
          tag: 'Verwandelte erfolgreich eine unserer Banken-Webanwendungen in eine vollständig mobil reaktionsfähige Plattform. Erleben Sie die mobile Benutzeroberfläche unter Isube Banking.',
        },
        {
          id: 7,
          tag: 'Entwickelte verschiedene Unternehmenswebsites mit Next.js und Typescript, um eine moderne und effiziente Webpräsenz sicherzustellen. Beispiele sind https://param.eu/ .',
        },
      ],
    },
  },
  {
    tr: {
      companyName: 'Vektora Software',
      date: '2021-06 - 2022-05',
      title: 'İş Analisti',
      responsibilities: [
        {
          id: 0,
          tag: 'PM (Üretim Bakım) modülünde projelere destek oldum.',
        },
        {
          id: 1,
          tag: "Türkiye'nin en büyük SAP projelerinden biri olan Sanko'da etkin bir rol aldım.",
        },
      ],
    },
    en: {
      companyName: 'Vektora Software',
      date: '2021-06 - 2022-05',
      title: 'Business Analyst',
      responsibilities: [
        {
          id: 0,
          tag: 'Responsible for PM (Plant Maintenance) module.',
        },
        {
          id: 1,
          tag: "Taken an active role in Turkey's one of the biggest SAP projects (Sanko).",
        },
      ],
    },
    de: {
      companyName: 'Vektora Software',
      date: '2021-06 - 2022-05',
      title: 'Business-Analyst',
      responsibilities: [
        {
          id: 0,
          tag: 'Verantwortlich für das PM (Anlagenwartung) Modul.',
        },
        {
          id: 1,
          tag: 'Habe eine aktive Rolle in einem der größten SAP-Projekte der Türkei (Sanko) übernommen.',
        },
      ],
    },
  },
];
type AboutPageData = {
  aboutMe: string;
};
export const staticAboutData = {
  name: 'Ahmet Ulutaş',
  currentCompany: 'Paramtech',
};
export const aboutPageData: Record<string, AboutPageData> = {
  en: {
    aboutMe:
      "Welcome to my personal blog. I am currently working as a Software Developer at a fintech company. Additionally, I am pursuing a bachelor's degree in Computer Programming. Currently, I am learning the T3 Stack and taking an algorithms course. I am actively developing web applications, mostly using Next.js. To assist others and deepen my knowledge, I share what I have learned and my experiences in software here. I can help you in delivering user-friendly web solutions by combining design and programming.",
  },
  tr: {
    aboutMe:
      'Kişisel bloguma hoş geldiniz. Şu anda bir fintech şirketinde Software Developer olarak çalışıyorum. Aynı zamanda Bilgisayar Programcılığı ön lisan okuyorum. Şu sıralar T3 Stack öğreniyorum ve algoritma kursu alıyorum. Aynı zamanda çoğunlukla Next.js kullanarak web uygulamaları geliştiriyorum. Yardımcı olmak ve bilgimi derinleştirmek amacıyla burada yazılımda öğrendiklerimi ve deneyimlerimi paylaşıyorum. Tasarımı ve programlamayı birleştirerek kullanıcı dostu web çözümleri sunma konusunda size yardımcı olabilirim. ',
  },
  de: {
    aboutMe:
      'Herzlich willkommen auf meinem persönlichen Blog. Derzeit arbeite ich als Softwareentwickler in einem Fintech-Unternehmen. Zusätzlich absolviere ich ein Bachelorstudium in Informatik. Zurzeit lerne ich den T3 Stack und nehme an einem Algorithmenkurs teil. Aktiv entwickle ich Webanwendungen, hauptsächlich mit Next.js. Um anderen zu helfen und mein Wissen zu vertiefen, teile ich hier meine Erfahrungen und Erkenntnisse in der Softwareentwicklung. Ich kann Ihnen helfen, benutzerfreundliche Web-Lösungen zu entwickeln, indem ich Design und Programmierung kombiniere.',
  },
};
