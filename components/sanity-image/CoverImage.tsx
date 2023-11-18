import { ImageType } from '@/lib/helpers';
import { urlForImage } from '@/sanity/lib/sanity-image-fns';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type CoverImageProps = {
  image: ImageType;
  classesWrapper?: string;
  height: number;
  width: number;
  priority?: boolean;
};

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, classesWrapper, height, width } = props;
  const image = source?.asset?._ref ? (
    <div
      className={twMerge(
        'shadow-small transition-shadow duration-200 hover:shadow-medium',
        classesWrapper
      )}
    >
      <Image
        className='h-auto w-full rounded-[3px]'
        width={1200}
        height={1000}
        alt={`Image for ${source.alt}`}
        src={urlForImage(source.asset).height(height).width(width).url()}
        sizes='100vw'
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return <div className='sm:mx-0'>{image}</div>;
}
