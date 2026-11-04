import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/refund";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — TubePilot" },
      { name: "description", content: "Read TubePilot's refund policy for free uploads, cancelled uploads, diamond purchases, failed uploads and refund requests." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Refund Policy — TubePilot" },
      { property: "og:description", content: "Understand TubePilot's refund rules for diamond purchases and video uploads." },
      { property: "og:url", content: "/refund" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Refund Policy — TubePilot" },
      { name: "twitter:description", content: "TubePilot's refund policy for diamond purchases and uploads." },
    ],
    links: [{"rel":"canonical","href":"/refund"}],
  }),
  component: RefundPage,
});

function RefundPage() {
  return <ParsedHtml html={pageHtml} />;
}
