
import Link from 'next/link'
/* import { Trans } from 'react-i18next/TransWithoutContext' */
import { useTranslation } from '@/i18n'
import { LanguageSelector } from '../language-selector'
import { SANITY_URL } from '@/constants/constants'


export default async function Header ({ lng }: {lng: string}) {
  const { t } = await useTranslation(lng, "translation")

  return (
    <header className='p-10 flex justify-between items-center'>
      <div>
        <Link target='_blank' className="border-2 border-black p-1 rounded-xl m-1" href={SANITY_URL}>{t("gotoStudio")}</Link>
        <Link className="border-2 border-black p-1 rounded-xl m-1" href="/blogs">{t("blogs")}</Link>
      </div>
      <div> 
       {/* <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>  */}
      </div>
      <LanguageSelector currentLocale={lng} />
    </header>
  )
}