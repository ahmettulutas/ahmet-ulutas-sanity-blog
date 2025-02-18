import { createTranslation } from '@/i18n';
import { LocaleType, availableLocales, defaultLanguage } from '@/i18n/settings';
import { Metadata, ResolvingMetadata } from 'next';
import { urlForImage } from '@/sanity/sanity-lib/sanity-image-fns';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import opengraphImage from '../public/images/opengraph-image.webp';
import { ogImageSizes, twitterImageSizes } from './constants';
/**
 * Omits locale from the path
 * @param pathname
 * @returns string
 */
export const omitLocaleFromPath = (path: string): string => {
  if (!path) return '';
  const splittedPath = path.split('/').filter((item) => !!item);
  const isFirstSegmentLocale = availableLocales.includes(splittedPath[0]);
  if (splittedPath.length === 1 && (isFirstSegmentLocale || defaultLanguage === splittedPath[0])) {
    return '';
  }
  const startIdx = isFirstSegmentLocale ? 1 : 0;

  return splittedPath.slice(startIdx).join('/');
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
  currntLocale: LocaleType,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await createTranslation(currntLocale, 'translation'); // This is not actually a hook, so I intentionally ignored it here.
  const previousImages = (await parent).openGraph?.images || [];
  const baseUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL as string);
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
      google: '3SXiPm6wc4OTk7JcwvRy4ednleq_oJ6qd9EJR41reZ4',
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
      url: baseUrl,
      siteName: 'Ahmet Ulutaş Blog',
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
      canonical: baseUrl,
      languages: generateLocalesForMetaData(availableLocales),
    },
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,

      'max-image-preview': 'large',
      'max-snippet': 200,
      googleBot: {
        index: true,
        follow: true,
        noarchive: false,
        nosnippet: false,
        noimageindex: false,
        'max-image-preview': 'large',
        'max-snippet': 200,
      },
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
    for (const { width, height } of sizes) {
      const imgUrl = urlForImage(sanityImage)
        ?.height(height)
        .width(width)
        .fit('crop')
        .auto('format')
        .url();
      metaImages.push({
        width,
        height,
        alt: sanityImage?.alt,
        url: imgUrl,
        secureUrl: imgUrl,
      });
    }
  }

  if (staticImage?.url) {
    sizes.forEach(({ width, height }) => {
      metaImages.push({
        width,
        height,
        alt: staticImage?.alt || '',
        url: staticImage.url,
        secureUrl: staticImage.url,
      });
    });
  }
  return metaImages;
};

export const agoFromNow = (dateTime: number | Date | string) => {
  const date = typeof dateTime === 'string' ? parseISO(dateTime) : dateTime;
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
  });
};

export type Category = {
  id: number;
  name: string;
  shortDescription: string;
  iconPath: string;
  detailUrl: string;
  isSpecialUrlPath: boolean;
  specialUrlPath?: null | string;
  parentCategory: null | Category;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
