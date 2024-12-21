import { type SchemaTypeDefinition } from 'sanity';

import blogSchema from './blog/blogSchema';
import authorSchema from './author/authorSchema';
import { tableSchema } from './common';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogSchema, authorSchema, tableSchema],
};
