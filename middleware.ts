import { NextResponse, NextRequest } from 'next/server';

import { defaultLanguage, availableLocales } from './i18n/settings';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${defaultLanguage}/`) || pathname === `/${defaultLanguage}`) {
    // e.g. incoming request is /en/about
    // The new URL is now /about
    return NextResponse.redirect(
      new URL(
        pathname.replace(`/${defaultLanguage}`, pathname === `/${defaultLanguage}` ? '/' : ''),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = availableLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(new URL(`/${defaultLanguage}${pathname}`, request.url));
  }
}

export const config = {
  // matcher: '/:lng*'
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|en/studio|cv.pdf|sitemap.xml).*)', // Captures any string that does not start with one of the specified patterns (api, _next/static, _next/image, assets, favicon.ico, sw.js, en/studio, cv.pdf).
  ],
};
