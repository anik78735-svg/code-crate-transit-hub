import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/mcp";

export const Route = createFileRoute("/mcp")({
  head: () => ({
    meta: [
      { title: "TubePilot MCP | Model Context Protocol for YouTube Creator Workflows" },
      { name: "description", content: "Explore TubePilot MCP (Model Context Protocol), its purpose, supported AI-agent workflows, compatibility requirements, authentication and permission considerations." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot MCP | Model Context Protocol for YouTube Creator Workflows" },
      { property: "og:description", content: "Learn how TubePilot MCP is designed to connect compatible AI assistants and agents with supported YouTube creator workflows." },
      { property: "og:url", content: "https://www.tubepilot.shop/mcp.html" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TubePilot MCP" },
      { name: "twitter:description", content: "Explore the Model Context Protocol integration direction of TubePilot." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/mcp.html"}],
  }),
  component: McpPage,
});

function McpPage() {
  return <ParsedHtml html={pageHtml} />;
}
