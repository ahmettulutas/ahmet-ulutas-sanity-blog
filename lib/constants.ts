// export const metadata: Metadata = {
//   title: {
//     template: '%s | Ahmet Ulutaş Blog Site',
//     default: 'Ahmet Ulutaş Blog Site', // a default is required when creating a template
//   },
//   description: 'This is Ahmet Ulutaş Blog for frontend development.',
//   metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
//   generator: 'Next.js',
//   applicationName: 'Frontend Developer Blog',
//   referrer: 'origin-when-cross-origin',
//   keywords: ['Typescript', 'React', 'JavaScript', 'Frontend Development'],
//   authors: [{ name: 'Ahmet Ulutaş' }],
//   creator: 'Ahmet Ulutaş',
//   publisher: 'Ahmet Ulutaş',

//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
// };
export const SANITY_URL = '/en/studio';
export const ogImageSizes = [
  { width: 800, height: 600 },
  { width: 1800, height: 1600 },
];
export const twitterImageSizes = [
  { width: 800, height: 418 },
  { width: 1600, height: 900 },
];
export const isAuthenticated = 'authenticated';
