import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TubePilot | Customer Support & Help" },
      { name: "description", content: "Contact TubePilot support for account, billing, payment, video upload, product and partnership questions. Get help at support@tubepilot.shop." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Contact TubePilot | Customer Support & Help" },
      { property: "og:description", content: "Need help with TubePilot? Contact our support team for account, billing, upload and product-related questions." },
      { property: "og:url", content: "https://www.tubepilot.shop/contact.html" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact TubePilot" },
      { name: "twitter:description", content: "Contact TubePilot support for account, billing, product and partnership questions." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/contact.html"}],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ParsedHtml html={pageHtml} />;
}
