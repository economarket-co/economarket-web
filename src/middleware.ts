import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: {session}} = await supabase.auth.getSession()

  const pathname = req.nextUrl.pathname as string;

  // if (pathname === "/dashboard" || pathname === '/') return NextResponse.redirect(new URL('/dashboard/meetings', req.url))

  // if (session && pathname.includes('auth')) return NextResponse.redirect(new URL('/dashboard/meetings', req.url)) 
  
  if (!session && !pathname.includes('/auth')) return NextResponse.redirect(new URL('/auth/signin', req.url))
  return res
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|images|videos|icons|fonts|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}