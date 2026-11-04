import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/features";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "TubePilot Features | AI YouTube Creator Tools" },
      { name: "description", content: "Explore TubePilot features for YouTube creators, including AI video ideas, title and description generation, YouTube SEO, hashtags, video upload, scheduling, analytics and channel audit." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot Features | AI YouTube Creator Tools" },
      { property: "og:description", content: "Discover the AI-powered tools and connected workflows TubePilot provides for YouTube creators." },
      { property: "og:url", content: "/features" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Features" },
      { name: "twitter:description", content: "Explore AI-powered tools for the YouTube creator workflow." },
    ],
    links: [{"rel":"canonical","href":"/features"}],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return <ParsedHtml html={pageHtml} />;
}
