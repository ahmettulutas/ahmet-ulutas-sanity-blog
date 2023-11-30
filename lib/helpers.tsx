import { useServerSideTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';
import { Metadata, ResolvingMetadata } from 'next';
import { urlForImage } from '@/sanity/lib/sanity-image-fns';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

import opengraphImage from '../public/images/opengraph-image.webp';
import { ogImageSizes, twitterImageSizes } from './constants';

/**
 * Regenerates the current path name with new locale
 * @param pathname
 * @returns string
 */
export const omitLocaleFromPath = (path: string): string => {
  if (!path) return '';
  const splittedPath = path.split('/').filter((item) => !!item);
  if (splittedPath.length === 1) return '';
  return splittedPath.slice(1, splittedPath.length).join('/');
};

/**
 * generates locale object from languages array
 * @param languages
 * @returns Record<string, string>
 * @example {en: en, tr: tr, de: de}
 */
export const generateLocalesForMetaData = (languages: Array<string>) => {
  const locales: Record<string, string> = {};
  for (const key of languages) {
    locales[key] = key;
  }
  return locales;
};

/**
 * generates default meta tags by using translation files.
 * @param currntLocale
 * @param parent
 * @returns {MetaData<Promise>}
 * @example {
    title: "page title",
    description: "page description"
  }
 */
export const getDefaultMetaData = async (
  currntLocale: string,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerSideTranslation(currntLocale, 'translation'); // This is not actually a hook, so I intentionally ignored it here.
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t('metaData.pageTitle'),
    description: t('metaData.pageDescription'),
    applicationName: t('metaData.applicationName'),
    category: t('metaData.category'),
    creator: 'Ahmet Ulutaş',
    authors: [{ name: 'Ahmet Ulutaş' }],
    publisher: 'Ahmet Ulutaş',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    referrer: 'origin-when-cross-origin',
    keywords: ['Typescript', 'React', 'JavaScript', 'Frontend Development'],
    verification: {
      google: 'TuZFznP70RvAIXp',
    },
    openGraph: {
      title: t('metaData.pageTitle'),
      images: [
        ...generateMetaImages({
          staticImage: {
            url: opengraphImage.src,
            alt: t('metaData.twitterImageAlt'),
          },
          sizes: ogImageSizes,
        }),
        ...previousImages,
      ],
      locale: currntLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaData.pageTitle'),
      description: t('metaData.pageDescription'),
      images: [
        ...generateMetaImages({
          staticImage: {
            url: opengraphImage.src,
            alt: t('metaData.twitterImageAlt'),
          },
          sizes: twitterImageSizes,
        }),
        ...previousImages,
      ],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
      languages: generateLocalesForMetaData(languages),
    },
  };
};
export type ImageType = {
  _type: 'image';
  alt?: string;
  asset: SanityAsset;
};

type GenerateMetaImageProps = {
  sanityImage?: ImageType;
  sizes: Array<{ width: number; height: number }>;
  staticImage?: { url: string | URL; alt?: string };
};

export const generateMetaImages = ({
  sanityImage,
  sizes,
  staticImage,
}: GenerateMetaImageProps): Array<any> => {
  if (!sanityImage && !staticImage?.url) return [];
  const metaImages = [];
  if (sanityImage) {
    for (let { width, height } of sizes) {
      metaImages.push({
        width,
        height,
        alt: sanityImage?.alt || '',
        url: urlForImage(sanityImage)?.height(height).width(width).fit('crop').url(),
      });
    }
  }

  if (staticImage?.url) {
    for (let { width, height } of sizes) {
      metaImages.push({
        width,
        height,
        alt: staticImage?.alt || '',
        url: staticImage.url,
      });
    }
  }
  return metaImages;
};

/*   const handleMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();

        setIsOpen((currentState) => !currentState);
        break;
      case 'Escape':
        e.preventDefault();

        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMenuItemKeydown = (
    e: KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.stopPropagation();
        e.preventDefault();

        e.currentTarget?.click();

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        e.stopPropagation();
        e.preventDefault();

        const items = [...(menuRef.current?.children || [])];

        if (e.key === 'ArrowUp') {
          (items?.[index - 1] || items?.[items.length - 1])
            ?.querySelector('a')
            ?.focus();
        }

        if (e.key === 'ArrowDown') {
          (items?.[index + 1] || items?.[0])?.querySelector('a')?.focus();
        }

        break;
      default:
        break;
    }
  }; */
export const agoFromNow = (dateTime: number | Date | string) => {
  const date = typeof dateTime === 'string' ? parseISO(dateTime) : dateTime;
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
  });
};
