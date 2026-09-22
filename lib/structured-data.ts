import { BlogPost } from '@/sanity/sanity-lib/queries';
import { urlForImage } from '@/sanity/sanity-lib/sanity-image-fns';
import { LocaleType } from '@/i18n/settings';

import { baseUrl, personalLinks, staticAboutData } from './constants';

/**
 * schema.org structured data (JSON-LD) builders.
 * Kept as plain object literals (no `sanity`/Studio dependency) so they can run
 * anywhere the consumer app runs. See https://schema.org and
 * https://developers.google.com/search/docs/appearance/structured-data.
 */

const SITE_NAME = 'Ahmet Ulutaş Blog';
const PERSON_ID = `${baseUrl}/#person`;
const WEBSITE_ID = `${baseUrl}/#website`;

/**
 * The blog's author/owner, reused across pages so search engines can tie
 * every page back to the same entity (E-E-A-T signal).
 */
export const getPersonSchema = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: staticAboutData.name,
  url: baseUrl,
  jobTitle: 'Frontend Developer',
  worksFor: {
    '@type': 'Organization',
    name: staticAboutData.currentCompany,
  },
  sameAs: [personalLinks.linkedin, personalLinks.github, personalLinks.youtube],
});

/**
 * Site-wide WebSite entity. Add once, high up the tree (root locale layout),
 * so it is emitted on every page without repeating it per-route.
 */
export const getWebsiteSchema = (locale: LocaleType) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: baseUrl,
  inLanguage: locale,
  publisher: { '@id': PERSON_ID },
});

export type BreadcrumbItem = { name: string; url: string };

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: url,
  })),
});

/**
 * The blog listing page ("/blogs"): a CollectionPage of BlogPosting summaries.
 */
export const getBlogListSchema = ({ locale, blogs }: { locale: LocaleType; blogs: BlogPost[] }) => {
  const url = `${baseUrl}/${locale}/blogs`;
  return {
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name: SITE_NAME,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: blogs.map((blog, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${baseUrl}/${locale}/blogs/${blog.slug}`,
        name: blog.title,
      })),
    },
  };
};

/**
 * A single blog post ("/blogs/[slug]").
 */
export const getBlogPostingSchema = ({ blog, locale }: { blog: BlogPost; locale: LocaleType }) => {
  const url = `${baseUrl}/${locale}/blogs/${blog.slug}`;
  const coverImageUrl = blog.coverImage
    ? urlForImage(blog.coverImage)?.width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    headline: blog.metaFields?.title || blog.title,
    description: blog.metaFields?.description || blog.excerpt,
    inLanguage: locale,
    datePublished: blog.date,
    dateModified: blog._updatedAt || blog.date,
    articleSection: Array.isArray(blog.category) ? blog.category[0] : blog.category,
    ...(coverImageUrl && { image: [coverImageUrl] }),
    author: blog.author?.name
      ? { '@type': 'Person', '@id': PERSON_ID, name: blog.author.name }
      : { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
};
