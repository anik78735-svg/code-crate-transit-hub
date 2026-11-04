import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/docs";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "TubePilot Documentation | Getting Started & User Guide" },
      { name: "description", content: "Read the TubePilot documentation and getting-started guide. Learn about account setup, YouTube channel authorization, AI creator tools, video uploads, scheduling, Diamonds and support." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot Documentation | Getting Started & User Guide" },
      { property: "og:description", content: "Getting-started information and product guidance for the TubePilot YouTube Creator OS." },
      { property: "og:url", content: "https://www.tubepilot.shop/docs.html" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Documentation" },
      { name: "twitter:description", content: "Learn how to get started with TubePilot and explore its YouTube creator tools." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/docs.html"}],
  }),
  component: DocsPage,
});

function DocsPage() {
  return <ParsedHtml html={pageHtml} />;
}
