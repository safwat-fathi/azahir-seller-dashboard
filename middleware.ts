import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const token = cookies.get("token");

  if (token?.value) {
    console.log("token found!!!!!!!!!!!!");
    console.log(token.name);
    console.log(token.value);
    NextResponse.next();
  } else {
    console.log(request.url, "no token found>>>>>>>>>>>>>>");

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - static (static files)
     * - images (static files)
     * - login (login page)
     * - signup (signup page)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|login|signup).*)",
  ],
};
