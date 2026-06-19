import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Academy.css";

/* ── DATA ── */
const streamingCourses = [
  {
    tag: "BESTSELLER",
    title: "Chakravedaa Foundations",
    subtitle: "Spiritual Healing · Mind Body Healing",
    price: "$198",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
  },
  {
    tag: "POPULAR",
    title: "Practical Meditation for All",
    subtitle: "Mind Body Health · Daily Practice",
    price: "$298",
    img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80",
  },
  {
    tag: "NEW",
    title: "Spiritual Storytelling & Self-Discovery",
    subtitle: "Storytelling · Transformation",
    price: "$198",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
];

const doshaData = [
  { name: "Vata", emoji: "🌬️", desc: "Air & Space — Creative, quick, imaginative. Prone to anxiety when out of balance." },
  { name: "Pitta", emoji: "🔥", desc: "Fire & Water — Focused, intense, driven. Prone to anger when out of balance." },
  { name: "Kapha", emoji: "🌊", desc: "Earth & Water — Calm, nurturing, strong. Prone to lethargy when out of balance." },
];

const popularCourses = [
  { title: "Browse Popular", tag: "COURSE", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80" },
  { title: "Swami Meditation Sessions", tag: "LIVE", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&q=80" },
];

const featuredCourses = [
  { title: "Natural Talent Story", tag: "Media · Appearances", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80" },
  { title: "Chakra Awakening", tag: "Spiritual", img: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=400&q=80" },
  { title: "Mind Clarity Course", tag: "Mind Body", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
];

const instantCourses = [
  { title: "Chakravedaa Starter Pack", price: "$84", oldPrice: "$120", tag: "BESTSELLER" },
  { title: "Advanced Chakra Mastery", price: "$0/mo", oldPrice: null, tag: "FREE" },
  { title: "Storytelling Intensive", price: "200", oldPrice: null, tag: "POPULAR" },
  { title: "Mindful Living Bundle", price: "$195", oldPrice: "$240", tag: "BUNDLE" },
];

const stats = [
  { value: "12K+", label: "Students Enrolled" },
  { value: "48", label: "Courses Available" },
  { value: "96%", label: "Satisfaction Rate" },
  { value: "8+", label: "Years Teaching" },
];

/* ── COMPONENT ── */
const Academy = () => {
  const [activeDosha, setActiveDosha] = useState(null);

  return (
    <div className="academy-page">

      {/* ── HERO ── */}
      <section className="academy-hero">
        <div className="academy-hero-overlay" />
        <div className="academy-hero-content">
          <p className="academy-hero-eyebrow">OrangeCowboy Light Academy</p>
          <h1 className="academy-hero-title">
            Streaming <span className="orange-text">Courses</span>
          </h1>
          <p className="academy-hero-sub">
            Transform your life with Swami Tirtha's signature courses on Chakra healing,
            Mind Body health, and the power of storytelling.
          </p>
          <Link to="/contact" className="btn-enroll">Enroll Now →</Link>
        </div>
      </section>

      {/* ── STREAMING COURSES ── */}
      <section className="streaming section-pad">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Streaming</p>
            <h2 className="sec-title">Streaming <em>Courses</em></h2>
          </div>
          <div className="streaming-grid">
            {streamingCourses.map((c) => (
              <div className="stream-card" key={c.title}>
                <div className="stream-img" style={{ backgroundImage: `url(${c.img})` }}>
                  <span className={`stream-tag tag-${c.tag.toLowerCase()}`}>{c.tag}</span>
                </div>
                <div className="stream-body">
                  <h3>{c.title}</h3>
                  <p>{c.subtitle}</p>
                  <div className="stream-footer">
                    <span className="stream-price">{c.price}</span>
                    <button className="btn-sm-orange">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOSHA SECTION ── */}
      <section className="dosha section-pad" style={{ background: "var(--warm-bg)" }}>
        <div className="container dosha-inner">
          <div className="dosha-text">
            <p className="eyebrow">Ayurvedic Wisdom</p>
            <h2 className="sec-title">
              Your Body Has a <em>Natural Pattern.</em>
              <br />This is Your <strong>Dosha.</strong>
            </h2>
            <p className="dosha-desc">
              Discover your unique mind-body type through Swami Tirtha's Ayurvedic
              teachings. Understanding your Dosha is the first step to lasting health,
              energy, and inner peace.
            </p>
            <Link to="/contact" className="btn-orange">Discover Your Dosha →</Link>
          </div>
          <div className="dosha-cards">
            {doshaData.map((d) => (
              <div
                className={`dosha-card ${activeDosha === d.name ? "active" : ""}`}
                key={d.name}
                onClick={() => setActiveDosha(activeDosha === d.name ? null : d.name)}
              >
                <div className="dosha-emoji">{d.emoji}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container" style={{ marginTop: "40px" }}>
          <div className="dosha-quiz-banner">
            <p>Discover Your Own Dosha</p>
            <button className="btn-sm-orange">Take the Quiz →</button>
          </div>
        </div>
      </section>

      {/* ── POPULAR + MEDITATION ── */}
      <section className="popular section-pad">
        <div className="container">
          <div className="popular-grid">
            {popularCourses.map((c) => (
              <div
                className="popular-card"
                key={c.title}
                style={{ backgroundImage: `url(${c.img})` }}
              >
                <div className="popular-overlay" />
                <div className="popular-body">
                  <span className="popular-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <button className="btn-sm-white">Watch Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ── */}
      <section className="featured section-pad" style={{ background: "var(--warm-bg)" }}>
        <div className="container">
          <p className="eyebrow">Natural Talent Story &amp; Media Appearances</p>
          <h2 className="sec-title">Featured <em>Courses</em></h2>
          <div className="featured-grid">
            {featuredCourses.map((c) => (
              <div className="featured-card" key={c.title}>
                <div
                  className="featured-img"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="featured-body">
                  <span className="featured-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <button className="btn-sm-orange">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAKRAVEDAA BANNER ── */}
      <section className="chakra-banner">
        <div className="chakra-overlay" />
        <div className="container chakra-content">
          <h2>Chakravedaa</h2>
          <p>
            The complete system for Chakra healing, energy alignment, and
            spiritual transformation — created by Swami Tirtha.
          </p>
          <div className="chakra-stats">
            {stats.map((s) => (
              <div className="chakra-stat" key={s.label}>
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-orange-outline">Start Chakravedaa →</Link>
        </div>
      </section>

      {/* ── INSTANT ACCESS COURSES ── */}
      <section className="instant section-pad">
        <div className="container">
          <p className="eyebrow">Get Instant Access</p>
          <h2 className="sec-title">Instant Access <em>Courses</em></h2>
          <p className="instant-sub">
            Get Lifetime Access · Download Resources · Learn at Your Own Pace
          </p>
          <div className="instant-grid">
            {instantCourses.map((c) => (
              <div className="instant-card" key={c.title}>
                <div className="instant-thumb" />
                <div className="instant-body">
                  <span className={`instant-tag itag-${c.tag.toLowerCase()}`}>{c.tag}</span>
                  <h3>{c.title}</h3>
                  <div className="instant-price-row">
                    <span className="instant-price">{c.price}</span>
                    {c.oldPrice && <span className="instant-old">{c.oldPrice}</span>}
                  </div>
                  <button className="btn-sm-orange" style={{ width: "100%", marginTop: "12px" }}>
                    Get Access
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOLS / CHARITIES BANNER ── */}
      <section className="schools-banner">
        <div className="container schools-inner">
          <div className="schools-text">
            <p className="eyebrow" style={{ color: "#fff" }}>Community Impact</p>
            <h2>Schools, Charities &amp; Wellness Associations</h2>
            <p>
              Swami Tirtha partners with educational institutions, charities, and
              wellness organizations to bring transformative healing to communities
              across the world.
            </p>
            <Link to="/contact" className="btn-white">Get In Touch →</Link>
          </div>
          <div className="schools-img">
            <div className="swami-img-placeholder">🧡</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academy;