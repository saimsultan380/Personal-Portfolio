import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_HOST, SITE_URL, WWW_HOST } from "@/lib/site";

/**
 * One canonical pathname.
 * Pages get a trailing slash. Files, /api, /_next, sitemap, and robots do not.
 * index and index.html collapse to the directory.
 */
function toCanonicalPath(pathname: string): string {
  const collapsed = pathname.replace(/\/{2,}/g, "/");

  if (/\/index\.html\/?$/i.test(collapsed)) {
    const directory = collapsed.replace(/\/index\.html\/?$/i, "/");
    return toCanonicalPath(directory === "" ? "/" : directory);
  }

  const lower = collapsed.toLowerCase();

  if (lower === "/sitemap.xml" || lower === "/robots.txt") return lower;

  const withoutSlash =
    collapsed.length > 1 ? collapsed.replace(/\/+$/, "") : collapsed;
  const last = withoutSlash.split("/").pop() ?? "";

  if (
    lower === "/_next" ||
    lower.startsWith("/_next/") ||
    last.includes(".")
  ) {
    return withoutSlash;
  }

  if (
    lower === "/api" ||
    lower.startsWith("/api/") ||
    lower.startsWith("/.well-known/")
  ) {
    return lower.replace(/\/+$/, "") || "/";
  }

  let path = lower.replace(/\/index\/?$/, "/");
  if (path === "") path = "/";
  if (path !== "/" && !path.endsWith("/")) path += "/";
  return path;
}

function redirectTo(request: NextRequest, pathname: string, origin: string) {
  const destination = new URL(pathname, origin);
  destination.search = request.nextUrl.search;
  return NextResponse.redirect(destination, 308);
}

export function proxy(request: NextRequest) {
  const hostname = (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    ""
  )
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();

  const proto = (
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "")
  )
    .split(",")[0]
    .trim()
    .toLowerCase();

  const canonicalPath = toCanonicalPath(request.nextUrl.pathname);
  const pathChanged = canonicalPath !== request.nextUrl.pathname;
  const onCanonicalHost = hostname === CANONICAL_HOST;
  const onWwwHost = hostname === WWW_HOST;
  const onProductionDomain = onCanonicalHost || onWwwHost;

  if (onProductionDomain && (onWwwHost || proto === "http" || pathChanged)) {
    return redirectTo(request, canonicalPath, SITE_URL);
  }

  if (!onProductionDomain && pathChanged) {
    return redirectTo(request, canonicalPath, request.nextUrl.origin);
  }

  if (!onCanonicalHost) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}
