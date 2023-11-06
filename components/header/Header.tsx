import Link from 'next/link';
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useServerSideTranslation } from '@/i18n';
import { AppSettings } from '../app-settings';

import { FiBook } from 'react-icons/fi';
import { SiSanity } from 'react-icons/si';
import { Container } from '../container';
import { SANITY_URL } from '@/lib/constants';

type HeaderProps = {
  currentLocale: string;
};
export default async function Header({ currentLocale }: HeaderProps) {
  const { t } = await useServerSideTranslation(currentLocale, 'translation');

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
            <p>{t('gotoStudio')}</p>
          </Link>
          <Link
            className='shadow-sm hover:shadow-md dark:shadow-white p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
            href={`/${currentLocale}/blogs`}
          >
            <FiBook />
            <p>{t('blogPosts')}</p>
          </Link>
        </div>
        {/* <Trans i18nKey='languageSwitcher' t={t}>
          Switch from <strong>{lng}</strong> to:{' '}
        </Trans> */}
        <AppSettings currentLocale={currentLocale} />
      </Container>
    </header>
  );
}
