import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { isRouteAuthorised } from "./app/api/_api_middlewares/isRouteAuthorised";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Clone the request headers
  // ADDING BASEURL TO EVERY INCOMING REQUEST HEADER
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-base-url", req.url);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  if (
    pathname.startsWith("/secure-region") ||
    pathname.startsWith("/api/v1/users/authorised") ||
    pathname.startsWith("/api/v1/years/authorised") ||
    pathname.startsWith("/api/v1/albums/authorised") ||
    pathname.startsWith("/api/v1/images/authorised")
  ) {
    return await isRouteAuthorised(req, res);
  } else {
    return res;
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
