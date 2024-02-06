/* eslint-disable quotes */

import { format } from 'date-fns';

export const SANITY_URL = '/en/studio';
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
export const staticPageUrls = ['/about', '']; // empty string is for index page.
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
const today = new Date();
const thisMonth = format(today, 'yyyy-MM');
export const experiences = [
  {
    companyName: 'Paramtech',
    title: 'Frontend Developer',
    date: `2022-05 - ${thisMonth}`,
    responsibilities: {
      tr: [
        {
          id: 0,
          tag: "'Kredim ile Öde': Akbank ile iş birliği yaparak, kullanıcıların kendi ürünümüz olan Kredim'i Akbank platformları aracılığıyla kullanarak ödeme yapmalarını sağlayan üçüncü parti ödeme uygulamasının geliştirilmesinde tam sorumluluk aldım.",
        },
        {
          id: 1,
          tag: 'BNPL, KYC, Posrapor, Netekstre: Kredim, Param ve Finrota gibi öncü uygulamalarımızdaki müşteri ihtiyaçlarını belirleme ve ele alma konusunda kilit rol oynadım.',
        },
        {
          id: 2,
          tag: 'Back-Office: Şirketin back office projesinin geliştirilmesinde etkin rol aldım.',
        },
        {
          id: 3,
          tag: "Finrota Uygulamasındaki 'Ödeme Modülü'ün TypeScript Yeniden Yapılandırılması: Başlangıçta JavaScript'te yazılan ödeme modülünün eski kodlarını TypeScript'e dönüştürme sürecinde önemli bir rol oynadım.",
        },
        {
          id: 4,
          tag: 'E-Fatura: React.js ve Redux kullanarak bir e-fatura uygulamasının geliştirilmesini öncülük ettim. Bu uygulama, şirket muhasebecilerinin faturaları etkili bir şekilde yönetmelerine, izlemelerine ve raporlamalarına olanak tanıdı.',
        },
        {
          id: 5,
          tag: "Case API: Şirketimizde başvuran adaylara gönderdiğimiz frontend case'lerinde kullanmaları için bir Next.js 13++ ile bir api geliştirdim. Bu uygulama, adayların kendi case projelerinde API'ları test etmelerini sağlayan swagger benzeri bir arayüze ve cross-origin çalışan endpointlere sahip.",
        },
        {
          id: 6,
          tag: 'Çeşitli CMS Platformları ile Web Sitesi Geliştirme: Şirketin ve yan kuruluşlarının landing sayfalarına çeşitli CMS sistemlerini (ContentfulCMS, Strapi CMS) entegre ettim ve ayrıca bu siteleri Next.js 13++ kullanarak geliştirdim. Şirketin yeni web sitesinin geliştirilmesinde liderlik rolü üstlendim.',
          url: 'https://www.paramtech.com.tr/',
        },
        {
          id: 7,
          tag: 'Mobil Uyum Dönüşümü: Bankacılık web uygulamalarından birinin tamamen mobil uyumlu bir platforma dönüştürülmesini başarıyla gerçekleştirdim.',
          url: 'https://isube.param.com.tr/',
        },
        {
          id: 8,
          tag: 'Next.js ve TypeScript Web Sitesi Geliştirme: Şirketin çeşitli web sitelerini Next.js ve TypeScript kullanarak tasarladım ve geliştirdim, modern ve verimli bir web varlığı sağladım.',
          url: 'https://param.eu',
        },
        {
          id: 9,
          tag: 'Gatsby.js Blog: Gatsby.js ve Netlify CMS kullanarak ssg yöntemiyle kişisel bir blog oluşturdum.',
          url: 'https://psikologmeltemulutas.com',
        },
      ],

      en: [
        {
          id: 0,
          tag: "Developed the 'Kredim ile Ode' application in collaboration with Akbank, enabling users to make payments using my company's own product, Kredim, through Akbank platforms.",
        },
        {
          id: 1,
          tag: 'BNPL, KYC, Posrapor, Netekstre: Played a pivotal role in identifying and addressing customer needs within our flagship apps, including Kredim, Param, and Finrota.',
        },
        {
          id: 2,
          tag: "Back-Office: Played an active role in the development of the company's back-office project.",
        },
        {
          id: 3,
          tag: "Typescript Refactor of 'Payment Module' in Finrota App: Played a key role in transforming the legacy code of payment module which was initially written in JavaScript into TypeScript.",
        },
        {
          id: 4,
          tag: 'E-Fatura: Spearheaded the development of an e-billing application using React.js and Redux. This app empowered company accountants to efficiently manage, track, and report bills.',
        },
        {
          id: 5,
          tag: 'Case Api: Developed a full stack Next.js App which provides both an cross-origin-api and ui to test the api endpoints for the frontend case we send to applicants at our company. The application contains Next.js APIs that can work across origins, allowing candidates to test and consume the APIs in their case projects through a frontend interface similar to Swagger.',
        },
        {
          id: 6,
          tag: "Website Development with various CMS Platforms: Integrated various CMS systems (ContentfulCMS, Strapi CMS) into company's and also it's sub-companies' landing pages while also developing them using Next.js 13++. Took the lead in crafting our company's brand-new website using Next.js in conjunction with Contentful CMS.",
          url: 'https://www.paramtech.com.tr/',
        },
        {
          id: 7,
          tag: 'Mobile Responsiveness Transformation: Successfully transformed one of our banking web applications into a fully mobile-responsive platform.',
          url: 'https://isube.param.com.tr',
        },
        {
          id: 8,
          tag: 'Designed and developed various company websites using Next.js and Typescript, ensuring a modern and efficient web presence.',
          url: 'https://param.eu',
        },
        {
          id: 9,
          tag: 'Gatsby.js Blog & Landing Page: Created an engaging blog and captivating landing page using Gatsby.js and Netlify CMS.',
          url: 'https://psikologmeltemulutas.com',
        },
      ],

      de: [
        {
          id: 0,
          tag: "Entwicklung der Anwendung 'Kredim ile Öde': Übernahm die volle Verantwortung für die Entwicklung einer Drittanbieter-Kassenanwendung in Zusammenarbeit mit Akbank. Diese ermöglicht es Benutzern, Zahlungen über die Akbank-Plattformen mit unserem eigenen Produkt, Kredim, durchzuführen",
        },
        {
          id: 1,
          tag: 'BNPL, KYC, Posrapor, Netekstre: Spielte eine entscheidende Rolle bei der Identifizierung und Ansprache von Kundenbedürfnissen innerhalb unserer Flaggschiff-Apps, einschließlich Kredim, Param und Finrota.',
        },
        {
          id: 2,
          tag: 'Back-Office: Spielte eine aktive Rolle in der Entwicklung des Backoffice-Projekts des Unternehmens.',
        },
        {
          id: 3,
          tag: "Typescript-Refaktorisierung des 'Zahlungsmoduls' in der Finrota-App: Spielte eine Schlüsselrolle bei der Transformation des Legacy-Codes des Zahlungsmoduls, der ursprünglich in JavaScript geschrieben wurde, in TypeScript.",
        },
        {
          id: 4,
          tag: 'E-Fatura: Leitete die Entwicklung einer E-Rechnungsanwendung mit React.js und Redux. Diese Anwendung ermöglichte es den Unternehmensbuchhaltern, Rechnungen effizient zu verwalten, zu verfolgen und zu berichten.',
        },
        {
          id: 5,
          tag: 'Case API: Entwickelte eine Full-Stack-Next.js-Anwendung, die sowohl eine cross-origin-API als auch eine Benutzeroberfläche bietet, um die API-Endpunkte für den Frontend-Fall, den wir Bewerbern in unserem Unternehmen senden, zu testen.',
        },
        {
          id: 6,
          tag: 'Website-Entwicklung mit verschiedenen CMS-Plattformen: Integrierte verschiedene CMS-Systeme (ContentfulCMS, Strapi CMS) in die Landing Pages des Unternehmens und seiner Tochterunternehmen und entwickelte sie auch mit Next.js 13++. Übernahm die Führung bei der Entwicklung der brandneuen Website des Unternehmens mit Next.js in Verbindung mit Contentful CMS.',
          url: 'https://www.paramtech.com.tr/',
        },
        {
          id: 7,
          tag: 'Mobile Responsiveness Transformation: Transformierte erfolgreich eine unserer Banken-Webanwendungen in eine vollständig mobil reaktionsfähige Plattform.',
          url: 'https://isube.param.com.tr/',
        },
        {
          id: 8,
          tag: 'Next.js und Typescript Website-Entwicklung: Entwickelte und gestaltete verschiedene Unternehmenswebsites mit Next.js und Typescript, um eine moderne und effiziente Webpräsenz sicherzustellen.',
          url: 'https://param.eu/',
        },
        {
          id: 9,
          tag: 'Gatsby.js Blog & Landing Page: Erstellte einen ansprechenden Blog und eine überzeugende Landing Page mit Gatsby.js und Netlify CMS.',
          url: 'https://psikologmeltemulutas.com',
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

export const personalLinks = {
  linkedin: 'https://www.linkedin.com/in/ahmet-ulutas/',
  gmail: 'mailto:ahmetulutas93@gmail.com',
  github: 'https://github.com/ahmettulutas/',
  youtube: 'https://youtube.com/@learncodingwithahmet?si=pgKM4ms9fVCP-k51',
};
