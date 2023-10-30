import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import prisma from './db/clien'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: {session}} = await supabase.auth.getSession()

  const pathname = req.nextUrl.pathname as string;

  if (pathname === "/" ) return NextResponse.redirect(new URL('/v1', req.url))

  if (pathname.includes("/admin")) {
    if (!session) return NextResponse.redirect(new URL('/v1/auth/signin', req.url));
    
    const isAdmin = req.cookies.get('isAdmin');
    console.log(isAdmin)

    if (!isAdmin) return NextResponse.redirect(new URL('/v1', req.url));
  }

  // if (pathname === "/dashboard" || pathname === '/') return NextResponse.redirect(new URL('/dashboard/meetings', req.url))

  // if (session && pathname.includes('auth')) return NextResponse.redirect(new URL('/dashboard/meetings', req.url)) 
  
  // if (!session && !pathname.includes('/auth')) return NextResponse.redirect(new URL('/auth/signin', req.url))
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