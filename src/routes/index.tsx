import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TubePilot AI — YouTube Creator Tools & App | Official Website" },
      { name: "description", content: "TubePilot AI is an all-in-one YouTube creator platform by Anik Kumar. Create video ideas, generate titles and descriptions, optimize SEO, schedule uploads and track channel performance." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot AI — YouTube Creator Tools & App | Official Website" },
      { property: "og:description", content: "Create, optimize, schedule and grow your YouTube channel with TubePilot. Official website tubepilot.shop" },
      { property: "og:url", content: "https://code-crate-transit-hub.lovable.app/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot — AI-Powered YouTube Creator OS" },
      { name: "twitter:description", content: "AI-powered YouTube Creator OS by Anik Kumar" },
    ],
    links: [{"rel":"canonical","href":"https://code-crate-transit-hub.lovable.app/"}],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <ParsedHtml html={pageHtml} />;
}
