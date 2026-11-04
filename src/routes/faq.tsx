import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "TubePilot FAQ – AI YouTube Creator Tools" },
      { name: "description", content: "Find answers about TubePilot, the AI-powered YouTube Creator OS. Learn about AI ideas, titles, SEO optimization, video scheduling, analytics and founder Anik Kumar." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "TubePilot FAQ – AI YouTube Creator Tools" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot FAQ – AI YouTube Creator Tools" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/faq.html"}],
  }),
  component: FaqPage,
});

function FaqPage() {
  return <ParsedHtml html={pageHtml} />;
}
