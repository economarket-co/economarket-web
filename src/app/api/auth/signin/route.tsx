import { createUser } from '@/controllers/User.controller'
import { user } from '@nextui-org/react'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const fullName = requestUrl.searchParams.get('fullName');

  console.log('hola');
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.redirect(requestUrl.origin);
    }

    const user = await createUser(session);
    if (user.isAdmin) {
      cookies().set('isAdmin', 'true');
      return NextResponse.redirect(requestUrl.origin + '/admin');
    }

    return NextResponse.redirect(requestUrl.origin + '/');
  }

  const supabase = await createRouteHandlerClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    data.session.user.user_metadata.full_name = fullName;
    const user = await createUser(data.session);
    if (user.isAdmin) {
      cookies().set('isAdmin', 'true');
      return NextResponse.redirect(requestUrl.origin + '/admin');
    }
  }


  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + '/')
}