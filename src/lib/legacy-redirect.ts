const PRIMARY_HOST = "www.tubepilot.shop";
const LEGACY_HOSTS = new Set([
  "tubepilot.shop",
  "tubepilot.app",
  "www.tubepilot.app",
]);

/**
 * Canonicalize legacy domains, HTTP requests, and migrated .html URLs before
 * SSR so crawlers and visitors reach one HTTPS origin and clean route.
 */
export function redirectCanonicalRequest(request: Request): Response | null {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const isLegacyHost = LEGACY_HOSTS.has(hostname);
  const isPrimaryHttp = hostname === PRIMARY_HOST && url.protocol !== "https:";
  const hasLegacyHtmlPath = /\.html$/i.test(url.pathname);

  if (!isLegacyHost && !isPrimaryHttp && !hasLegacyHtmlPath) {
    return null;
  }

  if (isLegacyHost || isPrimaryHttp) {
    url.protocol = "https:";
    url.hostname = PRIMARY_HOST;
  }

  if (hasLegacyHtmlPath) {
    const cleanPath = url.pathname.replace(/\.html$/i, "");
    url.pathname = cleanPath === "/index" || cleanPath === "" ? "/" : cleanPath;
  }

  return Response.redirect(url.toString(), 308);
}
