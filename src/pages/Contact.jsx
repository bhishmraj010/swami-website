import { useState } from "react";
import "./Contact.css";
import logo from "../assets/logo.png";
import contactTree from "../assets/Frame_1410552639.png";
import { submitContactForm } from "../firebase/services";

const navLinks = ["Service", "Books", "Products", "Academy", "Blog", "Contact"];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Firebase Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Orange Cowboy Logo" />
        </div>
        <ul className="navbar__links">
          <li>
            <a href="/" className="navbar__link">Home</a>
          </li>
          {navLinks.map((navItem) => (
            <li key={navItem}>
              <a
                href={`/${navItem.toLowerCase()}`}
                className={`navbar__link ${navItem === "Contact" ? "navbar__link--active" : ""}`}
              >
                {navItem}
              </a>
            </li>
          ))}
        </ul>
        <button className="navbar__cta">Connect</button>

        {/* Hamburger — mobile only */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__ham-line ${menuOpen ? "navbar__ham-line--open1" : ""}`} />
          <span className={`navbar__ham-line ${menuOpen ? "navbar__ham-line--open2" : ""}`} />
          <span className={`navbar__ham-line ${menuOpen ? "navbar__ham-line--open3" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <a
            href="/"
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          {navLinks.map((navItem) => (
            <a
              key={navItem}
              href={`/${navItem.toLowerCase()}`}
              className={`navbar__mobile-link ${navItem === "Contact" ? "navbar__mobile-link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {navItem}
            </a>
          ))}
          <button className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Connect
          </button>
        </div>
      )}

      {/* ── HERO HEADING ── */}
      <section className="contact__hero">
        <h1 className="contact__hero-title">
          Let's <span className="contact__orange">Connect</span> with{" "}
          <em className="contact__italic">Love &amp; Joy</em>{" "}
          <span className="contact__spark">✦</span>
        </h1>
        <p className="contact__hero-sub">
          Have a question, want to share your story, or interested in
          joining our community? We'd love to hear from you.
        </p>
        <div className="contact__divider">
          <span />
          <span className="contact__divider-diamond">✦</span>
          <span />
        </div>
      </section>

      {/* ── FORM + IMAGE ── */}
      <section className="contact__body">
        <div className="contact__container">

          {/* Left: Tree image */}
          <div className="contact__img-wrap">
            <img src={contactTree} alt="Tree" className="contact__img" />
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrap">
            <h2 className="contact__form-title">Send a Message</h2>
            <p className="contact__form-sub">
              Fields marked with <span className="contact__req">*</span> are required.
            </p>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label">Your Name</label>
                  <input
                    className="contact__input"
                    type="text"
                    name="firstName"
                    placeholder="Enter your name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Last Name</label>
                  <input
                    className="contact__input"
                    type="text"
                    name="lastName"
                    placeholder="Enter your name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">Email Address</label>
                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">
                  Message <span className="contact__req">*</span>
                </label>
                <textarea
                  className="contact__textarea"
                  name="message"
                  placeholder="How can I serve / help today..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              {/* Social icons row */}
              <div className="contact__socials">
                <a href="#" className="contact__social-btn" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="contact__social-btn" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" className="contact__social-btn" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                </a>
              </div>

              {status === "success" && (
                <div className="contact__success">
                  ✅ Message sent! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="contact__error">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button
                className="contact__submit"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CONNECT ON SOCIALS ── */}
      <section className="contact__socials-section">
        <h2 className="contact__socials-title">
          Connect <em className="contact__orange contact__italic">On Socials</em>
          <span className="contact__spark"> ✦</span>
        </h2>
        <p className="contact__socials-sub">Join the community on your favorite platform</p>
        <div className="contact__divider">
          <span /><span className="contact__divider-diamond">✦</span><span />
        </div>

        <div className="contact__socials-grid">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              ),
              name: "Orange Cowboy Channel",
              handle: "Subscribe",
              link: "#",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              ),
              name: "Swami Profile",
              handle: "Connect",
              link: "#",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              ),
              name: "contact@orangecowboy.com",
              handle: "Email",
              link: "mailto:contact@orangecowboy.com",
            },
          ].map((s, i) => (
            <div key={i} className="contact__social-card">
              <div className="contact__social-card-icon">{s.icon}</div>
              <div className="contact__social-card-name">{s.name}</div>
              <a href={s.link} className="contact__social-card-handle">
                {s.handle} ↗
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
