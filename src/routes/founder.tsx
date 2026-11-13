import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/founder";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder Anik Kumar | TubePilot" },
      { name: "description", content: "Learn about Anik Kumar, founder of TubePilot, and the creator-first purpose behind the platform." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Founder Anik Kumar | TubePilot" },
      { property: "og:description", content: "Meet Anik Kumar, founder of TubePilot, an AI-powered YouTube Creator OS." },
      { property: "og:url", content: "https://code-crate-transit-hub.lovable.app/founder" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Founder Anik Kumar | TubePilot" },
      { name: "twitter:description", content: "Meet Anik Kumar, founder of TubePilot, an AI-powered YouTube Creator OS." },
    ],
    links: [{"rel":"canonical","href":"https://code-crate-transit-hub.lovable.app/founder"}],
  }),
  component: FounderPage,
});

function FounderPage() {
  return <ParsedHtml html={pageHtml} />;
}
