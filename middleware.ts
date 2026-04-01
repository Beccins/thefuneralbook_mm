import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const host = hostname.split(':')[0] // strip port for local dev

  const parts = host.split('.')

  // Only act on *.thefuneralbook.com.au (exactly 4 parts)
  const isMemorialSubdomain =
    parts.length === 4 &&
    parts[1] === 'thefuneralbook' &&
    parts[2] === 'com' &&
    parts[3] === 'au'

  if (isMemorialSubdomain) {
    const slug = parts[0]
    const url = request.nextUrl.clone()

    // Silently rewrite / → /slug, /contact → /slug/contact etc.
    if (!url.pathname.startsWith(`/${slug}`)) {
      url.pathname = `/${slug}${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)'],
}
