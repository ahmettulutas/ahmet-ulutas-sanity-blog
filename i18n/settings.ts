export const fallbackLng = 'en';
export const languages = [fallbackLng, 'tr', 'de'];
export const defaultNS = 'translation';
export type LocaleTypes = (typeof languages)[number];
export const cookieName = 'language';
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
