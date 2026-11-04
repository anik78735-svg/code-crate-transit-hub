import { useRouter } from "@tanstack/react-router";
import parse from "html-react-parser";
import { useEffect, useMemo, useRef } from "react";

/**
 * Renders migrated static page content (see src/content/*).
 * Internal page links are routed client-side; the FAQ accordion and the
 * legal-page table-of-contents scrollspy are handled with the same delegated
 * DOM behaviour as the source site's script.js.
 */
export function ParsedHtml({ html }: { html: string }) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const content = useMemo(() => parse(html), [html]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      const question = target.closest(".faq-question");
      if (question) {
        const item = question.closest(".faq-item");
        if (item) {
          const wasOpen = item.classList.contains("open");
          root.querySelectorAll(".faq-item.open").forEach((other) => {
            other.classList.remove("open");
            other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
          });
          item.classList.toggle("open", !wasOpen);
          question.setAttribute("aria-expanded", wasOpen ? "false" : "true");
        }
        return;
      }

      const anchor = target.closest("a[href]");
      if (anchor) {
        const href = anchor.getAttribute("href") ?? "";
        if (href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) {
          e.preventDefault();
          void router.navigate({ to: href });
        }
      }
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [router, content]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const tocLinks = Array.from(root.querySelectorAll<HTMLElement>(".toc a"));
    if (!tocLinks.length) return;

    const sections = tocLinks
      .map((a) => root.querySelector(a.getAttribute("href") ?? ""))
      .filter((s): s is HTMLElement => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`),
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [content]);

  return <div ref={rootRef}>{content}</div>;
}
