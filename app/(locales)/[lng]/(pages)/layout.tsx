import Header from '@/components/header/Header';
// todo -- Add meta export here.

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <>
      <Header lng={lng} />
      {children}
    </>
  );
}
