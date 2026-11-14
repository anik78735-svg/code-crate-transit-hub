import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/docs";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "TubePilot Documentation | Getting Started & User Guide" },
      { name: "description", content: "Find TubePilot setup guides for YouTube channel authorization, AI creator tools, uploads, scheduling, Diamonds and support." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot Documentation | Getting Started & User Guide" },
      { property: "og:description", content: "Getting-started information and product guidance for the TubePilot YouTube Creator OS." },
      { property: "og:url", content: "https://www.tubepilot.shop/docs" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/docs" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Documentation" },
      { name: "twitter:description", content: "Learn how to get started with TubePilot and explore its YouTube creator tools." },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/docs"}],
  }),
  component: DocsPage,
});

function DocsPage() {
  return <ParsedHtml html={pageHtml} />;
}
