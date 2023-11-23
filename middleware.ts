import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // console.log("requested URL", request.url);
  const cookies = request.cookies;
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("token", "34|hello");
  const res = NextResponse.next({});
  if (request.nextUrl.pathname.startsWith("/login")) {
    res.cookies.set({
      name: "token",
      value: "34|hello",
      path: "/",
    });
    console.log("cookies updated");
  } else {
    console.log("token:", cookies.get("token"));
  }

  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
