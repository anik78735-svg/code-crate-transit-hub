import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TubePilot — Data Collection & Protection" },
      { name: "description", content: "Read the TubePilot Privacy Policy to understand how we collect, use, store and protect account information, video content and YouTube API data." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Privacy Policy | TubePilot — Data Collection & Protection" },
      { property: "og:description", content: "Learn how TubePilot handles account information, video content, YouTube API data and privacy choices." },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Privacy Policy" },
      { name: "twitter:description", content: "Understand how TubePilot collects, uses and protects your data." },
    ],
    links: [{"rel":"canonical","href":"/privacy"}],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <ParsedHtml html={pageHtml} />;
}
