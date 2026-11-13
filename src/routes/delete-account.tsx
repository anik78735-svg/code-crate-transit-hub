import { createFileRoute } from "@tanstack/react-router";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/delete-account";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Account & Data Deletion — TubePilot" },
      { name: "description", content: "Learn how to delete your TubePilot account and request deletion of associated personal data through the app or email." },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "Account & Data Deletion — TubePilot" },
      { property: "og:description", content: "Learn how to delete your TubePilot account and request deletion of associated personal data." },
      { property: "og:url", content: "https://code-crate-transit-hub.lovable.app/delete-account" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Account & Data Deletion — TubePilot" },
      { name: "twitter:description", content: "Instructions for deleting your TubePilot account and associated data." },
    ],
    links: [{"rel":"canonical","href":"https://code-crate-transit-hub.lovable.app/delete-account"}],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return <ParsedHtml html={pageHtml} />;
}
