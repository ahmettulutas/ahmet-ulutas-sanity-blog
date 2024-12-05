import { urlForImage } from '@/sanity/sanity-lib/sanity-image-fns';
import Image from 'next/image';
import { cn } from '@/lib/helpers';

type SanityImageProps = {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  wrapperStyles?: string;
  imageClasses?: string;
  priority?: boolean;
};

export default function SanityImage({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  sizes = '(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px',
  wrapperStyles,
  imageClasses,
  priority = false,
}: SanityImageProps) {
  const imageUrl =
    image?.asset && urlForImage(image?.asset)?.height(height).width(width).fit('fill').url();
  /*   const blurUrl = urlForImage(image).width(20).quality(20).url(); todo - bugfix here for deployment. */

  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-[3px] bg-gray-50 dark:bg-dark-bg relative h-full',
        wrapperStyles
      )}
    >
      {imageUrl && (
        <Image
          className={cn('h-auto w-full rounded-[3px]', imageClasses)}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          src={imageUrl}
          priority={priority}
          /* placeholder='blur'
          blurDataURL={blurUrl} */
        />
      )}
    </div>
  );
}
