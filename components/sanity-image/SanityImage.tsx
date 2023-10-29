import { urlForImage } from '@/sanity/lib/sanity-image-fns';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface SanityImageProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  size?: string;
  classesWrapper?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
  priority = true,
}: SanityImageProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();
  return (
    <div
      className={twMerge(
        'w-full overflow-hidden rounded-[3px] bg-gray-50 relative aspect-[16/9]',
        classesWrapper
      )}
    >
      {imageUrl && (
        <Image
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          priority={priority}
        />
      )}
    </div>
  );
}
