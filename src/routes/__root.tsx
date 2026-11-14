import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteFooter } from "../components/site/site-footer";
import { SiteHeader } from "../components/site/site-header";
import { ToTopButton } from "../components/site/to-top-button";
import { Scene3dEffects } from "../components/site/scene-3d";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "Gt4ppbrOmuJmEo3jyJOmvJi4cs5GIQP2_e_Qo5knyLc",
      },
      { title: "TubePilot - AI YouTube Creator OS" },
      {
        name: "description",
        content:
          "TubePilot is your AI YouTube Creator OS to CREATE videos, OPTIMIZE titles and descriptions, SCHEDULE publishing, and GROW your channel with AI tools and the TubePilot Model Context Protocol (MCP) layer.",
      },
      { name: "theme-color", content: "#64135f" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot - AI YouTube Creator OS" },
      { property: "og:description", content: "CREATE, OPTIMIZE, SCHEDULE and GROW with TubePilot AI tools and our Model Context Protocol (MCP) layer." },
      { property: "og:url", content: "https://www.tubepilot.shop/" },
      { property: "og:image", content: "https://www.tubepilot.shop/images/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://www.tubepilot.shop/" },
      { name: "twitter:title", content: "TubePilot - AI YouTube Creator OS" },
      { name: "twitter:description", content: "CREATE, OPTIMIZE, SCHEDULE and GROW with TubePilot AI tools and our MCP layer." },
      { name: "twitter:image", content: "https://www.tubepilot.shop/images/logo.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TubePilot",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Android",
          description: "An AI-powered YouTube Creator OS for video ideas, titles, descriptions, metadata, SEO, upload scheduling and creator analytics.",
          url: "https://www.tubepilot.shop/",
          downloadUrl: "https://play.google.com/store/apps/details?id=com.tubepilot.app",
          installUrl: "https://play.google.com/store/apps/details?id=com.tubepilot.app",
          publisher: { "@type": "Organization", name: "Bharat Cloud Technologies", url: "https://www.tubepilot.shop/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TubePilot",
          legalName: "Bharat Cloud Technologies",
          url: "https://www.tubepilot.shop/",
          logo: "https://www.tubepilot.shop/images/logo.png",
          founder: { "@type": "Person", name: "Anik Kumar", url: "https://www.tubepilot.shop/founder" },
          sameAs: ["https://www.linkedin.com/company/tubepilotapp/","https://www.linkedin.com/in/bharatcloudtechnologies","https://www.instagram.com/tubepilot.app","https://x.com/TubePilotApp","https://www.facebook.com/share/1Emmw34QZi/","https://youtube.com/@officialtubepilot","https://play.google.com/store/apps/details?id=com.tubepilot.app"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anik Kumar",
          jobTitle: "Founder of TubePilot",
          url: "https://www.tubepilot.shop/founder",
          image: "https://www.tubepilot.shop/images/founder.png",
          worksFor: { "@type": "Organization", name: "Bharat Cloud Technologies" },
          sameAs: ["https://www.linkedin.com/company/tubepilotapp/","https://www.linkedin.com/in/bharatcloudtechnologies","https://www.instagram.com/tubepilot.app","https://x.com/TubePilotApp","https://www.facebook.com/share/1Emmw34QZi/","https://youtube.com/@officialtubepilot","https://play.google.com/store/apps/details?id=com.tubepilot.app"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "TubePilot",
          url: "https://www.tubepilot.shop/",
          publisher: { "@type": "Organization", name: "Bharat Cloud Technologies" },
          inLanguage: "en-IN",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: "https://www.tubepilot.shop/faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is TubePilot?",
              acceptedAnswer: { "@type": "Answer", text: "TubePilot is an AI-powered YouTube Creator OS and Android app designed to help creators plan video ideas, prepare titles and descriptions, work with hashtags and metadata, optimize video SEO, upload and schedule content, and review available channel performance insights." },
            },
            {
              "@type": "Question",
              name: "Who is the founder of TubePilot?",
              acceptedAnswer: { "@type": "Answer", text: "TubePilot was founded by Anik Kumar and is operated by Bharat Cloud Technologies." },
            },
            {
              "@type": "Question",
              name: "How can creators grow on YouTube using AI?",
              acceptedAnswer: { "@type": "Answer", text: "AI can help brainstorm topics, draft and refine titles and descriptions, organize metadata, prepare a publishing plan, and review performance data. Creators should validate suggestions against their audience, channel analytics and the actual video." },
            },
            {
              "@type": "Question",
              name: "What are the best AI tools for YouTube creators?",
              acceptedAnswer: { "@type": "Answer", text: "Useful tools include topic planners, title and description assistants, hashtag and metadata helpers, YouTube SEO checklists, thumbnail planning tools, scheduling workflows and analytics." },
            },
          ],
        }),
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.tubepilot.shop/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.json" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Scene3dEffects />
      <SiteFooter />
      <ToTopButton />
    </QueryClientProvider>
  );
}
