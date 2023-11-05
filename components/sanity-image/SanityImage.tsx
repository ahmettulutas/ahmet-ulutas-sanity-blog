import { urlForImage } from '@/sanity/lib/sanity-image-fns';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type SanityImageProps = {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  classesWrapper?: string;
  priority?: boolean;
};

export default function SanityImage({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  sizes = '(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px',
  classesWrapper,
  priority = false,
}: SanityImageProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();
  /*   const blurUrl = urlForImage(image).width(20).quality(20).url(); todo - bugfix here for deployment. */

  return (
    <div
      className={twMerge(
        'w-full overflow-hidden rounded-[3px] bg-gray-50 relative aspect-[16/9] h-full',
        classesWrapper
      )}
    >
      {imageUrl && (
        <Image
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
