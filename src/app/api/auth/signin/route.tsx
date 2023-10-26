import { createUser } from '@/controllers/User.controller'
import prisma from '@/db/clien'
import { User } from '@prisma/client'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const fullName = requestUrl.searchParams.get('fullName');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)

    const { data: {session}} = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.redirect(requestUrl.origin);
    }
    
    await createUser(session);
  }

  const supabase = await createRouteHandlerClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session)  {
    data.session.user.user_metadata.full_name = fullName;
    createUser(data.session);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + '/')
}