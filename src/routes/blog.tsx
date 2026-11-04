import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { name: "description", content: "Explore TubePilot's practical guides for YouTube creators. Learn about video planning, titles, descriptions, metadata optimization and consistent publishing workflows." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { property: "og:description", content: "Practical guidance for YouTube creators covering content planning, video optimization and publishing workflows." },
      { property: "og:url", content: "https://www.tubepilot.shop/blog.html" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot Blog | YouTube Creator Guides & Tips" },
      { name: "twitter:description", content: "Guides and insights for YouTube creators. Create, optimize, schedule and grow." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/blog.html"}],
  }),
  component: BlogPage,
});

function BlogPage() {
  return <ParsedHtml html={pageHtml} />;
}
