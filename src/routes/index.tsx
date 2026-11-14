import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TubePilot - AI YouTube Creator OS" },
      {
        name: "description",
        content:
          "TubePilot is an AI YouTube Creator OS by Bharat Cloud Technologies for video ideas, titles, SEO, smart scheduling and channel growth.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot - AI YouTube Creator OS" },
      {
        property: "og:description",
        content: "Build better videos. Grow with intention. Plan, optimize, schedule and understand your YouTube creator workflow with TubePilot.",
      },
      { property: "og:url", content: "https://www.tubepilot.shop/" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TubePilot - AI YouTube Creator OS" },
      { name: "twitter:description", content: "Build better videos. Grow with intention. Your YouTube creator workflow, in one place." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.tubepilot.shop/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return <ParsedHtml html={pageHtml} />;
}
