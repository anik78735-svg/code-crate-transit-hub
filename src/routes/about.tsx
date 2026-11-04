import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TubePilot | Founded by Anik Kumar | AI-Powered YouTube Creator OS" },
      { name: "description", content: "TubePilot is founded by Anik Kumar. An AI-powered YouTube Creator OS built by Bharat Cloud Technologies to help creators ideate, optimize, schedule and grow." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "About TubePilot | Founded by Anik Kumar | AI-Powered YouTube Creator OS" },
      { property: "og:description", content: "TubePilot is an AI-powered YouTube Creator OS founded by Anik Kumar. Learn about the founder and the mission behind TubePilot & Bharat Cloud Technologies." },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About TubePilot | Founder Anik Kumar" },
      { name: "twitter:description", content: "Meet Anik Kumar, Founder of TubePilot & Bharat Cloud Technologies. Building the AI-powered OS for YouTube creators." },
    ],
    links: [{"rel":"canonical","href":"/about"}],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ParsedHtml html={pageHtml} />;
}
