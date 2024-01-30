import Header from '@/app/[lng]/components/layout/header/Header';
import { LocaleType } from '@/i18n/settings';

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: LocaleType };
}) {
  return (
    <>
      <Header currentLocale={lng} />
      {children}
    </>
  );
}
