/**
 * This is the standalone Sanity Studio configuration, deployed on its own (see README.md).
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { codeInput } from '@sanity/code-input';
import { documentInternationalization } from '@sanity/document-internationalization';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  name: 'ahmet-ulutas-blog-studio',
  title: "Ahmet Ulutaş Blog Studio",
  basePath: '/',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    codeInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'tr', title: 'Turkish' },
        { id: 'de', title: 'German' },
      ],
      schemaTypes: ['blogs'],
    }),
  ],
});
