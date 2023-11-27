import Link from 'next/link';
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useServerSideTranslation } from '@/i18n';
import { FiBook } from 'react-icons/fi';
import { SiSanity } from 'react-icons/si';
import { SANITY_URL } from '@/lib/constants';

import { Container } from '../container';
import { AppSettings, AppSettingsProps } from '../app-settings';

type HeaderProps = AppSettingsProps;
export default async function Header({
  currentLocale,
  dynamicLinks,
}: HeaderProps) {
  const { t } = await useServerSideTranslation(currentLocale, 'translation');

  return (
    <header>
      <Container className='py-10 flex justify-between items-center'>
        <div>
          {process.env.NODE_ENV === 'development' && (
            <Link
              target='_blank'
              className='shadow-sm hover:shadow-md dark:shadow-white p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
              href={SANITY_URL}
            >
              <SiSanity />
              <p>{t('gotoStudio')}</p>
            </Link>
          )}
          <Link
            className='shadow-sm hover:shadow-md dark:shadow-white p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
            href={`/${currentLocale}/blogs`}
          >
            <FiBook />
            <p>{t('home')}</p>
          </Link>
        </div>
        <AppSettings
          dynamicLinks={dynamicLinks}
          currentLocale={currentLocale}
        />
      </Container>
    </header>
  );
}
