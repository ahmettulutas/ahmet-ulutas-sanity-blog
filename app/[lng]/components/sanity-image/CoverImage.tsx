import { ImageType } from '@/lib/helpers';
import { urlForImage } from '@/sanity/sanity-lib/sanity-image-fns';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type CoverImageProps = {
  image: ImageType;
  wrapperStyles?: string;
  height: number;
  width: number;
  priority?: boolean;
  imageStyles?: string;
  fill?: boolean;
};

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, wrapperStyles, height, width, imageStyles, fill } = props;
  const image = source?.asset?._ref ? (
    <div
      className={twMerge(
        'shadow-small transition-shadow duration-200 hover:shadow-medium relative w-full h-full',
        wrapperStyles
      )}
    >
      <Image
        src={urlForImage(source.asset).height(height).width(width).url()}
        className={twMerge('h-auto w-full rounded-[3px]', imageStyles)}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        alt={`Image for ${source.alt}`}
        priority={priority}
        sizes='100vw'
        fill={fill}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return image;
}
