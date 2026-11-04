import { Link } from "@tanstack/react-router";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.tubepilot.app";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <h2>Download Our Android App on Play Store</h2>
          <p>TubePilot — AI-powered YouTube Creator OS by Anik Kumar. Free to install.</p>
        </div>
        <a className="btn btn-lg" href={PLAY_STORE} rel="noopener">
          Get it on Google Play →
        </a>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="mark">
              <img src="/images/logo.png" alt="TubePilot logo" />
            </span>
            TubePilot
          </Link>
          <p>
            AI-powered tools for the YouTube creator workflow. Create, optimize, schedule and
            grow. Official App:{" "}
            <a href={PLAY_STORE} rel="noopener">
              Play Store
            </a>
          </p>
        </div>
        <div className="footer-col">
          <p className="label">Explore</p>
          <Link to="/about">About TubePilot</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/faq">Frequently Asked Questions</Link>
          <Link to="/features">Features</Link>
          <Link to="/mcp">MCP</Link>
          <Link to="/docs">Documentation</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer-col">
          <p className="label">Policies &amp; Support</p>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/refund">Refund Policy</Link>
          <Link to="/delete-account">Delete Account</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} TubePilot by Anik Kumar. All rights reserved.</span>
        <span>
          Made in India · Official: tubepilot.shop ·{" "}
          <a href="mailto:support@tubepilot.shop">support@tubepilot.shop</a>
        </span>
      </div>
    </footer>
  );
}
