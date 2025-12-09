import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;
  console.log("Middleware token:", req.cookies.get("token"));

  // Public admin paths
  const publicPaths = ["/admin/login", "/admin/reset-request"];

  // Allow public routes
  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }

  // Protected routes
  if (path.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};