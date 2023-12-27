import { Author } from '@/sanity/sanity-lib/queries';

import SanityImage from '../sanity-image/SanityImage';

const AuthorAvatar = (props: Author) => {
  const { name, picture } = props;
  return (
    <div className='flex items-center mt-6 mb-2'>
      {picture?.asset?._ref && (
        <SanityImage
          wrapperStyles='mr-2 h-12 w-12 rounded-full border border-solid border-dark-bg dark:border-gray-400'
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
