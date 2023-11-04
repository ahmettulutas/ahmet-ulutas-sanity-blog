import Link from 'next/link';
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useServerSideTranslation } from '@/i18n';
import { AppSettings } from '../app-settings';

import { FiBook } from 'react-icons/fi';
import { SiSanity } from 'react-icons/si';
import { Container } from '../container';
import { SANITY_URL } from '@/lib/constants';

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useServerSideTranslation(lng, 'translation');

  return (
    <header>
      <Container className='py-10 flex justify-between items-center'>
        <div>
          <Link
            target='_blank'
            className='shadow-sm hover:shadow-md dark:shadow-white p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
            href={SANITY_URL}
          >
            <SiSanity />
            <span>{t('gotoStudio')}</span>
          </Link>
          <Link
            className='shadow-sm hover:shadow-md dark:shadow-white p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
            href='/blogs'
          >
            <FiBook />
            <p>{t('blogs')}</p>
          </Link>
        </div>
        {/* <Trans i18nKey='languageSwitcher' t={t}>
          Switch from <strong>{lng}</strong> to:{' '}
        </Trans> */}
        <AppSettings currentLocale={lng} />
      </Container>
    </header>
  );
}
