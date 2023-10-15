import Header from '@/components/header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <main className='mx-auto max-w-6xl px-4'>
      <Header lng={lng} />
      {children}
    </main>
  );
}
