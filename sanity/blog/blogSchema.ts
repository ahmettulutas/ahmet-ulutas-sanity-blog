import { BookIcon } from '@sanity/icons';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';
import { blogCategories } from '@/lib/constants';

import authorSchema from '../author/authorSchema';

export default defineType({
  name: 'blogs',
  title: 'blogs',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().error('A slug is required to generate a page on the website'),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required().min(1).max(1),
      options: {
        list: blogCategories,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Check to mark as featured',
      options: {
        layout: 'checkbox',
      },
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/png, image/jpeg, image/gif, image/mov',
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
        {
          name: 'code',
          title: 'Code Block',
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'Javascript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'css', value: 'css' },
            ],
            withFilename: true, // optional
            highlightedLines: true, // optional
          },
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorSchema.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'metaFields',
      title: 'Meta Fields',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'string' },
        {
          name: 'shareImage',
          title: 'Share Image',
          type: 'image',
          validation: (rule) => rule.required(),
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(' ') };
    },
  },
});
