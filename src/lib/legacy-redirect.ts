/**
 * Redirect legacy static-site URLs to the equivalent clean TanStack route.
 * Runs before SSR so old .html links never reach the router's not-found page.
 */
export function redirectLegacyHtmlRequest(request: Request): Response | null {
  const url = new URL(request.url);

  if (!/\.html$/i.test(url.pathname)) {
    return null;
  }

  const cleanPath = url.pathname.replace(/\.html$/i, "");
  url.pathname = cleanPath === "/index" || cleanPath === "" ? "/" : cleanPath;

  return Response.redirect(url.toString(), 308);
}
