import Link from 'next/link';
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useServerSideTranslation } from '@/i18n';
import { FiBook } from 'react-icons/fi';
import { SiSanity } from 'react-icons/si';
import { SANITY_URL } from '@/lib/constants';

import { Container } from '../container';
import { AppSettings, AppSettingsProps } from '../app-settings';

type HeaderProps = AppSettingsProps;
export default async function Header({ currentLocale, dynamicLinks }: HeaderProps) {
  const { t } = await useServerSideTranslation(currentLocale, 'translation');

  return (
    <header>
      <Container className='py-10 flex justify-between items-center'>
        <div>
          {process.env.NODE_ENV === 'development' && (
            <Link target='_blank' className='btn-primary flex items-center gap-2' href={SANITY_URL}>
              <SiSanity />
              <p>{t('gotoStudio')}</p>
            </Link>
          )}
          <Link className='btn-primary flex items-center gap-2' href={`/${currentLocale}/blogs`}>
            <FiBook />
            <p>{t('blogPosts')}</p>
          </Link>
        </div>
        <AppSettings dynamicLinks={dynamicLinks} currentLocale={currentLocale} />
      </Container>
    </header>
  );
}
