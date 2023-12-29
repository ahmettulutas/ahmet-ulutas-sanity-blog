import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { LanguageSelector } from '@/components/language-selector';

import Counter from '../components/counter';

export default async function IndexPage({ params: { lng } }: { params: { lng: Locale } }) {
  const dictionary = await getDictionary(lng);

  return (
    <div>
      <LanguageSelector currentLocale={lng} />
      <p>Current locale: {lng}</p>
      <p>This text is rendered on the server: {dictionary['server-component'].welcome}</p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
