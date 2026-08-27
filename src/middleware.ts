import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "sinapsia_crm_super_secure_secret_key_2026_xYz"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("sinapsia_session")?.value;

  // Protect /dashboard and all subroutes
  if (pathname.startsWith("/dashboard")) {
    if (!sessionCookie) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      await jwtVerify(sessionCookie, JWT_SECRET);
      return NextResponse.next();
    } catch {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If already logged in and visiting /login, redirect to /dashboard
  if (pathname === "/login") {
    if (sessionCookie) {
      try {
        await jwtVerify(sessionCookie, JWT_SECRET);
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } catch {
        // Invalid cookie, let them see the login page
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
