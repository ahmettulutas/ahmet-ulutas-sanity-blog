type SchemaNode = Record<string, unknown>;

/**
 * Renders schema.org structured data as a <script type="application/ld+json"> tag.
 * Server component: no client JS is shipped for this.
 * Pass a single node, or an array of nodes to be combined under one "@graph".
 * https://developers.google.com/search/docs/appearance/structured-data
 */
export default function JsonLd({ data }: { data: SchemaNode | SchemaNode[] }) {
  const document = Array.isArray(data)
    ? { '@context': 'https://schema.org', '@graph': data }
    : { '@context': 'https://schema.org', ...data };

  return (
    <script
      type='application/ld+json'
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
    />
  );
}
