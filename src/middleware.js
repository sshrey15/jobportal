  import { NextResponse } from 'next/server'
  import jwt from 'jsonwebtoken'

  
  export function middleware(request) {
    const currentUser = request.cookies.get('jwt')?.value
  
    if (currentUser) {
      return NextResponse.redirect(new URL('/home', request.url))
    }
    return NextResponse.redirect(new URL('/page', request.url))
  }
  
  export const config = {
    matcher: ['/((?!api|_next/static|_next/image|signIn/applicants|home|page|.*\\.png$|localhost:3000).*)'],
  }