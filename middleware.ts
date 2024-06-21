import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from "jose";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
  
    // Define paths that are considered public (accessible without a token)
    const isPublicPath = path === '/login' || path === '/signup' 
  
    // Get the token from the cookies
    const token = request.cookies.get('token')?.value || ''

    // Verify token
    const secret = await jose.base64url.decode(process.env.JWT_SECRET)
    const verified = await jose.jwtDecrypt(token, secret);
    console.log(verified)
  
    // Redirect logic based on the path and token presence
    if (isPublicPath && token) {
  
    // If trying to access a public path with a token, redirect to the home page
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    // if (!verified) {
    //   return NextResponse.redirect(new URL('/login', request.nextUrl))
    // }
  
  // If trying to access a protected path without a token, redirect to the login page
    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
      
}

// It specifies the paths for which this middleware should be executed. 
export const config = {
    matcher: [
      '/login',
      '/signup',
      '/',
    ]
}