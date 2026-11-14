import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { name: "description", content: "Explore TubePilot guides for YouTube creators, with practical tips for video planning, SEO, titles and publishing workflows." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { property: "og:description", content: "Practical guidance for YouTube creators covering content planning, video optimization and publishing workflows." },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { name: "twitter:description", content: "Guides and insights for YouTube creators. Create, optimize, schedule and grow." },
    ],
    links: [{"rel":"canonical","href":"/blog"}],
  }),
  component: BlogPage,
});

function BlogPage() {
  return <ParsedHtml html={pageHtml} />;
}
