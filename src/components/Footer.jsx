import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">

          {/* ── Col 1: Brand ── */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img src={footerLogo} alt="Orange Cowboy Light Academy" className="footer__logo" />
            </div>
            <p className="footer__tagline">
              Spiritual training · Mind–Body healing ·<br />
              Storytelling for transformation
            </p>
            <div className="footer__socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social-btn" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Quick Links</h4>
            <ul className="footer__col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* ── Col 3: Support & Legal ── */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Support &amp; Legal</h4>
            <ul className="footer__col-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* ── Col 4: Stay Connected ── */}
          <div className="footer__col footer__col--newsletter">
            <h4 className="footer__col-heading">
              Stay Connected <span className="footer__leaf">🌿</span>
            </h4>
            <p className="footer__newsletter-desc">
              Receive insights and updates from Radiant Light Academy.
            </p>
            <div className="footer__newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-btn">Subscribe</button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © 2026 Orange Cowboy Light Academy. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;