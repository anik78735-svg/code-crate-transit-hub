import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "TubePilot FAQ – AI YouTube Creator Tools" },
      { name: "description", content: "Get answers about TubePilot, the AI YouTube Creator OS, including video ideas, SEO, scheduling, analytics and account support." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "TubePilot FAQ – AI YouTube Creator Tools" },
      { property: "og:description", content: "Answers about TubePilot's AI tools, YouTube publishing workflow, scheduling, analytics and support." },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot FAQ – AI YouTube Creator Tools" },
      { name: "twitter:description", content: "Answers about TubePilot's AI tools, YouTube publishing workflow, scheduling, analytics and support." },
    ],
    links: [{"rel":"canonical","href":"/faq"}],
  }),
  component: FaqPage,
});

function FaqPage() {
  return <ParsedHtml html={pageHtml} />;
}
