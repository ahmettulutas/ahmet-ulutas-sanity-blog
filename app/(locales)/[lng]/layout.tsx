import { dir } from 'i18next';
import './globals.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/themes/ThemeProvider';
import { languages } from '@/i18n/settings';
import { generateLocalesForMeta } from '@/lib/helpers';
import { useServerSideTranslation } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export type SharedPageProps = {
  params: { lng: string };
};

export async function generateMetadata(
  { params }: SharedPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerSideTranslation(params.lng, 'translation'); // This is not actually a hook, so you can ignore eslint here.
  return {
    title: t('metaData.pageTitle'),
    description: t('metaData.pageDescription'),
    applicationName: t('metaData.applicationName'),
    category: t('metaData.category'),
    creator: 'Ahmet Ulutaş',
    authors: [{ name: 'Ahmet Ulutaş' }],
    publisher: 'Ahmet Ulutaş',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    referrer: 'origin-when-cross-origin',
    keywords: ['Typescript', 'React', 'JavaScript', 'Frontend Development'],
    openGraph: {
      title: {
        template: `'%s | ${t('metaData.pageTitle')}`,
        default: t('metaData.pageTitle'),
      },
      images: [
        {
          url: '/images/og-image.webp',
          width: 800,
          height: 600,
        },
        {
          url: '/images/og-image.webp',
          width: 1800,
          height: 1600,
          alt: 'Ahmet Ulutaş Blog OG Image Alt' /* todo */,
        },
        ...previousImages,
      ],
      locale: params.lng,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaData.pageTitle'),
      description: t('metaData.pageDescription'),
      images: [
        {
          url: '/images/og-image.webp',
          alt: 'Ahmet Ulutaş Blog OG Image Alt' /* todo */,
          width: 1200,
          height: 675,
        },
      ],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: generateLocalesForMeta(languages),
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} dark:bg-dark-bg dark:text-dark-text text-light-text transition-all duration-150 ease-in`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
