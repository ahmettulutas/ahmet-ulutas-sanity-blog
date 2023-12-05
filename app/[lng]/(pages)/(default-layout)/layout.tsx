import Header from '@/components/header/Header';

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <>
      <Header currentLocale={lng} />
      {children}
    </>
  );
}
