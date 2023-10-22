import { dir } from 'i18next';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/themes/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export type SharedPageProps = {
  params: { lng: string };
};

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const languages = ['en', 'tr', 'de'];

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
        className={`${inter.className} dark:bg-dark-bg dark:text-dark-text text-light-text`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
