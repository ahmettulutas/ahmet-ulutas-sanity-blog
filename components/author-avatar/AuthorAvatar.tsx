import SanityImage from '../sanity-image/SanityImage';
import { Author } from '@/sanity/lib/queries';

const AuthorAvatar = (props: Author) => {
  const { name, picture } = props;
  return (
    <div className='flex items-center'>
      <div className='relative mr-4 h-12 w-12'>
        <SanityImage
          image={picture}
          classesWrapper='rounded-full'
          height={48}
          width={48}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className='font-bold'>{name}</div>
    </div>
  );
};
export default AuthorAvatar;
