import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const routeLinks = [
  { label: "About", to: "/about" },
  { label: "Founder", to: "/founder" },
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

  return (
    <header className="site-header">
      <div className="container row">
        <Link className="brand" to="/">
          <span className="mark">
            <img src="/images/logo.png" alt="TubePilot logo" />
          </span>
          TubePilot
        </Link>
        <nav className={"nav-links" + (open ? " open" : "")} id="nav-links">
          {hashLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          {routeLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
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
