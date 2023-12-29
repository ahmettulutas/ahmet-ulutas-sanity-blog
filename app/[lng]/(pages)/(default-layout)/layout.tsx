import Header from '@/components/layout/header/Header';
import { LocaleTypes } from '@/i18n/settings';

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: LocaleTypes };
}) {
  return (
    <>
      <Header currentLocale={lng} />
      {children}
    </>
  );
}
