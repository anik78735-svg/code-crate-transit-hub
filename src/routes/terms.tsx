import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — TubePilot" },
      { name: "description", content: "Read the Terms of Service governing your use of TubePilot's YouTube-focused creator tools, accounts, uploads, scheduling and payments." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Terms of Service — TubePilot" },
      { property: "og:description", content: "The terms governing your use of TubePilot's YouTube-focused creator tools." },
      { property: "og:url", content: "https://code-crate-transit-hub.lovable.app/terms" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Service — TubePilot" },
      { name: "twitter:description", content: "Read the terms governing your use of TubePilot." },
    ],
    links: [{"rel":"canonical","href":"https://code-crate-transit-hub.lovable.app/terms"}],
  }),
  component: TermsPage,
});

function TermsPage() {
  return <ParsedHtml html={pageHtml} />;
}
