import { dir } from 'i18next';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
