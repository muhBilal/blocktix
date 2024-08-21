import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/users(.*)", "/admin(.*)"]);
const isUserDashboardRoute = createRouteMatcher(["/users(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;

  if (!auth().userId && isProtectedRoute(req)) {
    // Add custom logic to run before redirecting

    return auth().redirectToSignIn();
  }

  if (
    auth().userId === "user_2kyikQquTfg2j4BH2OFzS8cyf2D" &&
    isUserDashboardRoute(req)
  ) {
    return NextResponse.redirect(new URL("/admin", url));
  }

  if (
    (url.pathname === "/sign-in" || url.pathname === "/sign-up") &&
    auth().userId
  ) {
    const previousUrl = req.headers.get("referer") ?? "/";
    return NextResponse.redirect(new URL(previousUrl, req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
