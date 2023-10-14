import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './i18n/settings'


export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|en/studio).*)']
}

acceptLanguage.languages(languages)

export function middleware(req: NextRequest) {
  const {cookies, headers, nextUrl} = req;

  if (nextUrl.pathname.indexOf('icon') > -1 || nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()

  let lng;
  if (cookies.has(cookieName)) lng = acceptLanguage.get(cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng
  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  } 

  if (req.headers.has('referer')) {
    const refererUrl = new URL(headers.get('referer') as string)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}