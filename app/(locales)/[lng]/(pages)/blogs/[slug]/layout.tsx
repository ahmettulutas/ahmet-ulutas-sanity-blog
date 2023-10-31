/* export const metadata: Metadata = {
  title: 'Blog Title',
  description: 'Ahmet Ulutaş Blog Page Description',
  openGraph: {
    title: 'Blog Title',
    description: 'Ahmet Ulutaş Blog Page Description',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Seb', 'Josh'],
  },
}; */

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
