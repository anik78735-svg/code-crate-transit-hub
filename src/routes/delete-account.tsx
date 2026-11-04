import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/delete-account";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Account &amp; Data Deletion — TubePilot" },
      { name: "description", content: "Learn how to delete your TubePilot account and request deletion of associated personal data through the app or email." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Account &amp; Data Deletion — TubePilot" },
      { property: "og:description", content: "Learn how to delete your TubePilot account and request deletion of associated personal data." },
      { property: "og:url", content: "https://www.tubepilot.shop/delete-account.html" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Account &amp; Data Deletion — TubePilot" },
      { name: "twitter:description", content: "Instructions for deleting your TubePilot account and associated data." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    links: [{"rel":"canonical","href":"https://www.tubepilot.shop/delete-account.html"}],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return <ParsedHtml html={pageHtml} />;
}
