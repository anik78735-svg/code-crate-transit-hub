import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { redirectLegacyHtmlRequest } from "@/lib/legacy-redirect";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  // Every page of the migrated TubePilot site must have its own route.
  const pages = [
    "/",
    "/about",
    "/features",
    "/founder",
    "/mcp",
    "/docs",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/refund",
    "/delete-account",
  ];

  it.each(pages)("matches a page for %s instead of falling back to not found", (path) => {
    const matches = router.matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});


describe("Legacy .html redirects", () => {
  it.each([
    ["/faq.html", "/faq"],
    ["/blog.html", "/blog"],
    ["/features.html", "/features"],
    ["/mcp.html", "/mcp"],
    ["/contact.html", "/contact"],
    ["/privacy.html", "/privacy"],
    ["/terms.html", "/terms"],
    ["/delete-account.html", "/delete-account"],
    ["/index.html", "/"],
  ])("permanently redirects %s to %s", (legacyPath, cleanPath) => {
    const response = redirectLegacyHtmlRequest(
      new Request(`https://www.tubepilot.shop${legacyPath}?utm_source=legacy`),
    );

    expect(response?.status).toBe(308);
    expect(response?.headers.get("location")).toBe(
      `https://www.tubepilot.shop${cleanPath}?utm_source=legacy`,
    );
  });

  it("does not redirect clean routes", () => {
    expect(
      redirectLegacyHtmlRequest(new Request("https://www.tubepilot.shop/faq")),
    ).toBeNull();
  });
});
