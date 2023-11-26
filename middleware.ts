import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

import { fallbackLng, languages, cookieName } from './i18n/settings';

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|en/studio|sitemap.xml).*)', // This regular expression captures any string that does not start with one of the specified patterns (api, _next/static, _next/image, assets, favicon.ico, sw.js, en/studio).
  ],
};

acceptLanguage.languages(languages);

export function middleware(req: NextRequest) {
  const { cookies, headers, nextUrl } = req;
  if (
    nextUrl.pathname.indexOf('icon') > -1 ||
    nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next();

  let lng;
  if (cookies.has(cookieName))
    lng = acceptLanguage.get(cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;
  if (!languages.some((locale) => nextUrl.pathname.startsWith(`/${locale}`))) {
    // Redirect if lng in path is not supported
    return NextResponse.redirect(
      new URL(`/${lng}${nextUrl.pathname}`, req.url)
    );
  }

  if (headers.has('referer')) {
    const refererUrl = new URL(headers.get('referer') as string);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
