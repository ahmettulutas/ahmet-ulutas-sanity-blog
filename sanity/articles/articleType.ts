import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  type: 'document',
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,

  fields: [
    defineField({
      type: 'string',
      name: 'pageTitle',
      title: 'Page Title',
    }),

    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
    }),

    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    }),
  ],
})