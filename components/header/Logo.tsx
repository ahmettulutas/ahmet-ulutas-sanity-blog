import Image from 'next/image';
import Link from 'next/link';
import profileImg from '@/public/images/profile2.png';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark dark:text-light'>
      <div className='w-12 rounded-full overflow-hidden border border-solid border-dark-bg dark:border-gray-400  mr-2 md:mr-4'>
        <Image
          src={profileImg}
          alt='Page Logo'
          className='w-full h-auto rounded-full'
          sizes='20vw'
          priority
        />
      </div>
      <span className='font-bold dark:font-semibold text-lg md:text-xl'>Ahmet Ulutaş</span>
    </Link>
  );
};

export default Logo;
