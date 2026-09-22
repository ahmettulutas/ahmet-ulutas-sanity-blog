# Ahmet Ulutaş Blog — Sanity Studio

This is the standalone [Sanity Studio](https://www.sanity.io/docs/sanity-studio) content authoring app for
[ahmet-ulutas-sanity-blog](https://github.com/ahmettulutas/ahmet-ulutas-sanity-blog). It only contains the
CMS schemas and configuration — the Next.js site that consumes this content lives on the `main` branch.

## Getting started

Copy your Sanity project credentials into a `.env` file (or export them in your shell):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Install dependencies and start the local Studio:

```bash
npm install
npm run dev
```

## Deploying

This Studio is meant to be deployed on its own (e.g. via Sanity's hosted Studio), separate from the
Next.js frontend, so the CMS bundle is never shipped to site visitors:

```bash
npm run deploy
```

## Structure

- `sanity.config.ts` / `sanity.cli.ts` — Studio configuration
- `sanity/schema.ts` — combined schema registry
- `sanity/blog`, `sanity/author`, `sanity/common.ts` — content type definitions
- `sanity/constants.ts` — shared constant lists (e.g. blog categories) used by the schemas
