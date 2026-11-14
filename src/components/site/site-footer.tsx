import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.tubepilot.app";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/tubepilot.app", Icon: Instagram },
  { label: "Founder LinkedIn", href: "https://www.linkedin.com/in/bharatcloudtechnologies", Icon: Linkedin },
  { label: "Company LinkedIn", href: "https://www.linkedin.com/company/tubepilotapp/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/TubePilotApp", Icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@officialtubepilot", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/share/1Emmw34QZi/", Icon: Facebook },
];

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
            <Link to="/">AI YouTube Creator OS by Bharat Cloud Technologies</Link> for planning,
            optimizing and publishing videos. Explore our{" "}
            <Link to="/features">YouTube Growth Tools</Link> and{" "}
            <Link to="/ai-studio">AI YouTube Title &amp; Description Generator</Link>. Official app:{" "}
            <a href={PLAY_STORE} rel="noopener">
              Google Play
            </a>
          </p>
          <div className="footer-social">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} title={label} target="_blank" rel="noopener noreferrer">
                <Icon size={18} aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <p className="label">Explore</p>
          <Link to="/">TubePilot AI YouTube Creator OS</Link>
          <Link to="/about">About TubePilot</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/ai-studio">AI YouTube Title &amp; Description Generator</Link>
          <Link to="/faq">Frequently Asked Questions</Link>
          <Link to="/features">YouTube Growth Tools</Link>
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
          Made in India · Official:{" "}
          <a href="https://www.tubepilot.shop" target="_blank" rel="noopener noreferrer">www.tubepilot.shop</a> ·{" "}
          <a href="mailto:support@tubepilot.shop">support@tubepilot.shop</a>
        </span>
      </div>
    </footer>
  );
}
