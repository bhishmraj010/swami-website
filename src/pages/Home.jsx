import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <span className="hero-badge">Featured Course</span>
          <h1 className="hero-title">
            Feeling Drained &amp; Uninspired? – many people feel disconnected,
            exhausted, and overwhelmed.
          </h1>
          <p className="hero-subtitle">
            Chakravedaa helps you reconnect with calm, clarity, and energy through
            simple chakra-based practices.
          </p>
          <Link to="/academy" className="btn-hero">Enroll in Chakraveda →</Link>
        </div>
        <div className="hero-thumbs">
          <div className="thumb thumb-monk" />
          <div className="thumb thumb-hands" />
        </div>
      </section>

      {/* FOLLOW BAR */}
      <section className="follow-bar">
        <p>Follow Us on Swami &amp; Academy Profile</p>
        <div className="follow-links">
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="follow-btn">🎬 Subscribe</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="follow-btn">📸 Connect</a>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics section-pad">
        <div className="container">
          <p className="section-eyebrow">What Swami Teaches</p>
          <h2 className="section-title">Follow Swami to learn about: <em>Chakra</em> – Health</h2>
          <div className="topics-grid">
            {[
              { emoji: "🧘", title: "Chakra Healing", desc: "Align your energy centers for deeper vitality and balance." },
              { emoji: "💚", title: "Mind Body Health", desc: "Holistic practices connecting mental clarity with physical wellness." },
              { emoji: "📖", title: "Spiritual Learning", desc: "Ancient wisdom made practical for modern life transformation." },
              { emoji: "✍️", title: "Storytelling", desc: "The art of sharing your story to inspire and connect others." },
            ].map((item) => (
              <div className="topic-card" key={item.title}>
                <div className="topic-icon">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="books-section section-pad">
        <div className="container">
          <p className="section-eyebrow orange">Best Seller</p>
          <h2 className="section-title">Best Books by Swami Tirtha</h2>
          <div className="books-grid">
            {[
              { title: "Chakraveda: The Art of Energy", color: "#C2410C" },
              { title: "Mind Body Healing Journey", color: "#9A3412" },
              { title: "Storytelling for the Soul", color: "#7C2D12" },
            ].map((book) => (
              <div className="book-card" key={book.title}>
                <div className="book-cover" style={{ background: book.color }}><span>📗</span></div>
                <p className="book-title">{book.title}</p>
                <button className="btn-orange-sm">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community section-pad">
        <div className="container community-inner">
          <div className="community-text">
            <p className="section-eyebrow">Community</p>
            <h2 className="section-title">Join Our Growing Community</h2>
            <p className="community-desc">
              Be part of a heart-centred community dedicated to healing, growth, and
              living with purpose. Share your journey and connect with like-minded souls.
            </p>
            <Link to="/contact" className="btn-orange">Join the Community</Link>
          </div>
          <div className="community-img">
            <div className="community-placeholder">🙏<p>Join thousands on the path</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-pad">
        <div className="container">
          <p className="section-eyebrow">Swami's FAQs</p>
          <h2 className="section-title">Common Questions Answered</h2>
          <div className="faq-list">
            {[
              "What is Chakravedaa?",
              "How do I start my healing journey?",
              "Are the courses suitable for beginners?",
              "How can I connect with Swami Tirtha directly?",
            ].map((q) => (
              <details className="faq-item" key={q}>
                <summary>{q}</summary>
                <p>Swami Tirtha offers personalised guidance through live sessions,
                books, and online courses. Reach out via the Contact page for direct queries.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="highlight section-pad">
        <div className="container highlight-inner">
          <div className="highlight-img">
            <div className="highlight-placeholder">📚</div>
          </div>
          <div className="highlight-text">
            <p className="section-eyebrow">Storytelling Books</p>
            <h2 className="section-title">Level Up: <em>Storytelling</em></h2>
            <p>Discover the transformative power of sharing your authentic story.
            Swami Tirtha's storytelling framework has helped hundreds reconnect
            with their purpose and communicate with impact.</p>
            <Link to="/books" className="btn-orange" style={{ marginTop: "20px", display: "inline-block" }}>
              Explore Books
            </Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="courses section-pad">
        <div className="container">
          <p className="section-eyebrow">Latest Academy Courses</p>
          <h2 className="section-title">Begin Your Transformation Today</h2>
          <div className="courses-grid">
            {[
              { tag: "Chakra", title: "Chakra Healing Basics", duration: "4 weeks" },
              { tag: "Mind Body", title: "Mind Body Wellness", duration: "6 weeks" },
              { tag: "Stories", title: "The Art of Storytelling", duration: "3 weeks" },
            ].map((c) => (
              <div className="course-card" key={c.title}>
                <div className="course-thumb" />
                <div className="course-info">
                  <span className="course-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.duration} · Online</p>
                  <button className="btn-orange-sm" style={{ marginTop: "12px" }}>Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team section-pad" style={{ background: "var(--warm-bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Our Talent</p>
          <h2 className="section-title">Meet the People Behind the Mission</h2>
          <div className="team-grid">
            {["Swami Tirtha", "Healing Coach", "Course Creator"].map((name) => (
              <div className="team-card" key={name}>
                <div className="team-avatar">🧡</div>
                <h3>{name}</h3>
                <p>Spiritual guide &amp; transformation expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Quality of Life Guaranteed</h2>
          <p>Start your journey with Swami Tirtha today and experience real transformation.</p>
          <Link to="/contact" className="btn-white">Get Started →</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;