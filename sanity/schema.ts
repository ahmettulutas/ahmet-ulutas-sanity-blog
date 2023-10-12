import { type SchemaTypeDefinition } from 'sanity'
import {articleType} from "./articles"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleType],
}
