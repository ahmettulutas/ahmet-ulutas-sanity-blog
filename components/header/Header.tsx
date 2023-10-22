import Link from 'next/link';
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useTranslation } from '@/i18n';
import { LanguageSelector } from '../language-selector';
import { SANITY_URL } from '@/constants/constants';
import { FiBook } from 'react-icons/fi';
import { SiSanity } from 'react-icons/si';
import ThemeSwitcher from '@/themes/ThemeSwitcher';

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, 'translation');

  return (
    <header className='p-10 flex justify-between items-center'>
      <div>
        <Link
          target='_blank'
          className='border-2 dark:border-white border-black p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
          href={SANITY_URL}
        >
          <SiSanity />
          <span>{t('gotoStudio')}</span>
        </Link>
        <Link
          className='border-2 dark:border-white border-black p-1 rounded-xl m-1 flex items-center gap-2 text-lg'
          href='/blogs'
        >
          <FiBook />
          <p>{t('blogs')}</p>
        </Link>
      </div>
      <div>
        {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>  */}
      </div>
      <div>
        <ThemeSwitcher />
        <LanguageSelector currentLocale={lng} />
      </div>
    </header>
  );
}
