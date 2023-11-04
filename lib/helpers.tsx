import { useServerSideTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';
import { Metadata, ResolvingMetadata } from 'next';

/**
 * Generates path name by omitting the locale from the current path
 * @param pathname
 * @returns string
 */
export const generatePathName = (path: string): string => {
  if (!path) return '';
  const splittedPath = path.split('/').filter((item) => !!item);
  if (splittedPath.length === 1) return '';
  return splittedPath.slice(1, splittedPath.length).join('/');
};

/**
 *
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
 *
 * generates default meta tags by using translation files.
 * @param currentLanguage
 * @param parent
 * @returns {MetaData<Promise>}
 * @example {
    title: "page title",
    description: "page description"
  }
 */
export const getDefaultMetaData = async (
  currentLanguage: string,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerSideTranslation(currentLanguage, 'translation'); // This is not actually a hook, so you I intentionally ignored it here.
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: {
      template: `'%s | ${t('metaData.pageTitle')}`,
      default: t('metaData.pageTitle'),
    },
    description: t('metaData.pageDescription'),
    applicationName: t('metaData.applicationName'),
    category: t('metaData.category'),
    creator: 'Ahmet Ulutaş',
    authors: [{ name: 'Ahmet Ulutaş' }],
    publisher: 'Ahmet Ulutaş',
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    referrer: 'origin-when-cross-origin',
    keywords: ['Typescript', 'React', 'JavaScript', 'Frontend Development'],
    openGraph: {
      title: {
        template: `'%s | ${t('metaData.pageTitle')}`,
        default: t('metaData.pageTitle'),
      },
      images: [
        {
          url: '/images/og-image.webp',
          width: 800,
          height: 600,
        },
        {
          url: '/images/og-2.jpeg',
          width: 1800,
          height: 1600,
          alt: t('metaData.ogImageAlt'),
        },
        ...previousImages,
      ],
      locale: currentLanguage,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        template: `'%s | ${t('metaData.pageTitle')}`,
        default: t('metaData.pageTitle'),
      },
      description: t('metaData.pageDescription'),
      images: [
        {
          url: '/images/og-2.jpeg',
          alt: t('metaData.twitterImageAlt'),
          width: 1200,
          height: 675,
        },
      ],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: generateLocalesForMetaData(languages),
    },
  };
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
