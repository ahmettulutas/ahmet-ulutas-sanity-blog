import Image from 'next/image';
import { LocaleType } from '@/i18n/settings';
import { PROFILE_PHOTO } from '@/lib/constants';
import Link from 'next/link';

const Logo = ({ currentLocale }: { currentLocale: LocaleType }) => {
  return (
    <Link href={`/${currentLocale}`} className='flex items-center text-dark dark:text-light'>
      <div className='w-12 rounded-full overflow-hidden border border-solid border-dark-bg dark:border-gray-400  mr-2 md:mr-4'>
        <Image
          src={PROFILE_PHOTO}
          alt='Page Logo'
          className='w-full h-auto rounded-full'
          priority
        />
      </div>
      <span className='font-bold dark:font-semibold text-lg md:text-xl'>Ahmet Ulutaş</span>
    </Link>
  );
};

export default Logo;
