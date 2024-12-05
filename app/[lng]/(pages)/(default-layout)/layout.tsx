import Header from '@/app/[lng]/components/layout/header';

import { LocaleRouteLayout } from '../../layout';

export default function PageLayout({ children, params: { lng } }: LocaleRouteLayout) {
  return (
    <>
      <Header currentLocale={lng} />
      {children}
    </>
  );
}
