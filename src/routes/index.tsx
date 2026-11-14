import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TubePilot - AI YouTube Creator OS" },
      { name: "description", content: "TubePilot is your AI YouTube Creator OS to CREATE videos, OPTIMIZE titles and descriptions, SCHEDULE publishing, and GROW your channel with AI tools and the TubePilot Model Context Protocol (MCP) layer." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot AI — YouTube Creator Tools & App | Official Website" },
      { property: "og:description", content: "CREATE, OPTIMIZE, SCHEDULE and GROW with TubePilot AI tools and our Model Context Protocol (MCP) layer." },
      { property: "og:url", content: "https://tubepilot.app/" },
      { property: "og:image", content: "https://tubepilot.app/images/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://tubepilot.app/images/logo.png" },
      { name: "twitter:title", content: "TubePilot — AI-Powered YouTube Creator OS" },
      { name: "twitter:description", content: "AI-powered YouTube Creator OS by Anik Kumar" },
    ],
    links: [{"rel":"canonical","href":"/"}],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <ParsedHtml html={pageHtml} />;
}
