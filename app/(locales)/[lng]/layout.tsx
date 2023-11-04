import { dir } from 'i18next';
import './globals.css';
import type { ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import NextThemeProvider from '@/themes/ThemeProvider';
import { languages } from '@/i18n/settings';
import { getDefaultMetaData } from '@/lib/helpers';

const inter = Inter({ subsets: ['latin'] });

export type SharedPageProps = {
  params: { lng: string };
};
type RootLayoutProps = SharedPageProps & {
  children: React.ReactNode;
};

export async function generateMetadata(
  { params }: SharedPageProps,
  parent: ResolvingMetadata
) {
  return getDefaultMetaData(params.lng, parent);
}

export async function generateStaticParams() {
  // generates default paths for each locale domain/locale1, domain/locale2, etc.
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} dark:bg-dark-bg dark:text-dark-text text-light-text transition-all duration-150 ease-in`}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
