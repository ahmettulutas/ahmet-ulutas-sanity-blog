import { Author } from '@/sanity/lib/queries';

import SanityImage from '../sanity-image/SanityImage';

const AuthorAvatar = (props: Author) => {
  const { name, picture } = props;
  return (
    <div className='flex items-center my-6'>
      {picture?.asset?._ref && (
        <SanityImage
          classesWrapper='mr-2 h-12 w-12'
          imageClasses='rounded-full'
          image={picture}
          width={96}
          height={96}
          alt={picture?.alt ?? name}
        />
      )}
      <p className='font-bold'>{name}</p>
    </div>
  );
};
export default AuthorAvatar;
