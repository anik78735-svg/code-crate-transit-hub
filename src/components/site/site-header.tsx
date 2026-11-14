import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const routeLinks = [
  { label: "About", to: "/about" },
  { label: "Founder", to: "/founder" },
  { label: "AI Studio", to: "/ai-studio" },
  { label: "MCP", to: "/mcp" },
  { label: "Docs", to: "/docs" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
] as const;

const hashLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container row">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="mark">
            <img src="/images/logo.png" alt="TubePilot logo" />
          </span>
          TubePilot
        </Link>
        <nav
          className={"nav-links" + (open ? " open" : "")}
          id="nav-links"
          aria-label="Main navigation"
          onClick={() => setOpen(false)}
        >
          {hashLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          {routeLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" to="/contact">
            Contact
          </Link>
        </nav>
        {open && (
          <button
            className="nav-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
        )}
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}
