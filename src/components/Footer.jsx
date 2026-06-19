import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="logo-icon">🌅</span>
          <div>
            <p className="footer-logo-main">OrangeCowboy</p>
            <p className="footer-logo-sub">Light Academy</p>
          </div>
        </div>
        <p className="footer-tagline">
          Spiritual learning · Mind Body Healing · Storytelling for transformation
        </p>
        <div className="footer-socials">
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YT</a>
        </div>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Support & Legal</h4>
        <ul>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Stay Connected 🌿</h4>
        <p style={{ fontSize: "13px", color: "#ccc", marginBottom: "12px" }}>
          Receive insights and updates from Orange Cowboy Light Academy
        </p>
        <div className="footer-subscribe">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024 Orange Cowboy Light Academy. All rights reserved.</p>
      <div className="footer-bottom-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;