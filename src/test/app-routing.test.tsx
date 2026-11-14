import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { redirectCanonicalRequest } from "@/lib/legacy-redirect";

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


describe("Canonical domain and legacy URL redirects", () => {
  it.each([
    ["https://tubepilot.shop/faq", "https://www.tubepilot.shop/faq"],
    ["http://tubepilot.shop/ai-studio", "https://www.tubepilot.shop/ai-studio"],
    ["http://www.tubepilot.shop/faq", "https://www.tubepilot.shop/faq"],
    ["https://www.tubepilot.shop/index.html?utm_source=legacy", "https://www.tubepilot.shop/?utm_source=legacy"],
  ])("permanently redirects %s to %s", (requestUrl, destination) => {
    const response = redirectCanonicalRequest(new Request(requestUrl));

    expect(response?.status).toBe(308);
    expect(response?.headers.get("location")).toBe(destination);
  });

  it("does not redirect clean HTTPS routes on the primary domain", () => {
    expect(
      redirectCanonicalRequest(new Request("https://www.tubepilot.shop/faq")),
    ).toBeNull();
  });

  it("does not redirect local development hosts", () => {
    expect(
      redirectCanonicalRequest(new Request("http://localhost:3000/faq")),
    ).toBeNull();
  });

  it("does not redirect domains that are not verified TubePilot aliases", () => {
    expect(
      redirectCanonicalRequest(new Request("https://tubepilot.app/")),
    ).toBeNull();
  });
});
