import { dir } from 'i18next';
import '../globals.css';
import type { ResolvingMetadata } from 'next';
import { Manrope } from 'next/font/google';
import NextThemeProvider from '@/components/providers/themes/ThemeProvider';
import { languages } from '@/i18n/settings';
import { getDefaultMetaData } from '@/lib/helpers';
import AuthProvider from '@/components/providers/auth/AuthProvider';
import Footer from '@/components/footer/Footer';
import { Suspense } from 'react';
import HomePageSkeleton from '@/components/loading-skeletons/HomePage';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export type SharedPageProps = {
  params: { lng: string };
};
type RootLayoutProps = SharedPageProps & {
  children: React.ReactNode;
};

export async function generateMetadata({ params }: SharedPageProps, parent: ResolvingMetadata) {
  return getDefaultMetaData(params.lng, parent);
}

export async function generateStaticParams() {
  // generates default paths for each locale domain/locale1, domain/locale2, etc.
  return languages.map((lng) => ({ lng }));
}

export default function Layout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning className='scroll-smooth'>
      <head />
      <body
        className={`${manrope.className} dark:bg-dark-bg dark:text-dark-text text-light-text transition-all duration-150 ease-in`}
      >
        <AuthProvider>
          <NextThemeProvider>
            <Suspense fallback={<HomePageSkeleton />}>{children}</Suspense>
            <Footer language={lng} />
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
