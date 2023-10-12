
"use client"
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'

import { languages } from '../../i18n/settings'

import { useTranslation } from '@/i18n/client'
import { usePathname } from 'next/navigation'

export const Header = ({ lng }: {lng: string}) => {

  const pathname = usePathname();
  const pagePathname = pathname.split("/")[2]
  const { t } = useTranslation(lng, 'footer')

  return (
    <header className='p-10 flex justify-between'>
      <Link className="border-2 border-black p-2" href={'/studio'}>GO TO STUDIO</Link>
      <Link className="border-2 border-black p-2" href={'/second-page'}>GO TO SECOND PAGE</Link>
      <div> 
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>
      <ul>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}/${pagePathname}`}>
              {l}
            </Link>
          </span>
        )
      })}
      </ul>
      </div>
      
    </header>
  )
}