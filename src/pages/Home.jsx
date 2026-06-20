import { useState, useEffect } from "react";
import "./Home.css";
import slide1 from "../assets/slide1-mountain.png";
import slide2 from "../assets/slide2-meditation.png";
import slide3 from "../assets/slide3-monk.png";
import slide4 from "../assets/slide4-arch.png";
import logo from "../assets/logo.png";
import card1 from "../assets/card1-reading.png";
import card2 from "../assets/card2-workshop.png";
import card3 from "../assets/card3-presentation.png";
import collabAyurveda from "../assets/collab-ayurveda.png";
import collabAcademic from "../assets/collab-academic.png";
import swamiPhoto from "../assets/swami-photo.png";
import booksMedal from "../assets/books-medal.png";
import booksAmazonBadge from "../assets/books-amazon-badge.png";
import bookCoverAyurveda from "../assets/book-cover-ayurveda.png";
import bookCoverMiracles from "../assets/book-cover-miracles.png";
import blogSwamiVideo from "../assets/Rectangle_7__1_.png";
import blogCard1Img from "../assets/Group_21__1_.png";
import swamiSpeak from "../assets/swami-speak.png";

const slides = [
  {
    id: 1,
    bg: slide1,
    badge: "Featured Course",
    badgeClass: "badge--gold",
    headline: "Feeling Drained & Uninspired? – many people feel disconnected, exhausted, and overwhelmed.",
    subtext: "Chakraveda helps you reconnect with calm, clarity, and energy through simple chakra-based practices.",
    cta: "Enroll in Chakraveda →",
    overlay: "overlay--dark",
  },
  {
    id: 2,
    bg: slide2,
    badge: "Featured Experience",
    badgeClass: "badge--olive",
    headline: "Tired of fragmented, impersonal healing tools that leave you guessing?",
    subtext: "Learn one unified approach that connects body, emotions, and spirit through practical Ayurvedic wisdom.",
    cta: "Join Today →",
    overlay: "overlay--medium",
  },
  {
    id: 3,
    bg: slide3,
    badge: "A Different Way to Understand Yourself",
    badgeClass: "badge--olive",
    headline: "Feel like life's running you ragged?",
    subtext: "You're not alone — modern life feels chaotic for many people.",
    cta: "Join Today →",
    overlay: "overlay--warm",
  },
  {
    id: 4,
    bg: slide4,
    badge: "Neurodivergent Career Program",
    badgeClass: "badge--orange",
    headline: "Can't find a training/career that helps you and your clients self-regulate?",
    subtext: "You're not broken — many traditional systems simply aren't designed for different ways of thinking and learning.",
    cta: "Join Today →",
    overlay: "overlay--amber",
  },
];

const navLinks = ["Service", "Books", "Products", "Academy", "Blog", "Contact"];

const testimonials = [
  {
    name: "Adria Firestone",
    role: "Speaker, Author, Coach",
    quote: "Swamiji is a joy-generating machine! His speaking is humorous, authentic and deeply transformative...",
    stars: 5,
  },
  {
    name: "Guru Amrit",
    role: "Kundalini Yoga Teacher",
    quote: "Swamiji is a rare combination of healer, intuitive, teacher, and scholar...",
    stars: 5,
  },
  {
    name: "Orange Storytelling Hour",
    role: "Community Member",
    quote: "Every Thursday, I leave the Orange Storytelling Hour feeling lighter, more connected, and deeply inspired. This community is pure magic.",
    stars: 5,
  },
];

const blogs = [
  {
    id: 1,
    img: blogCard1Img,
    tag: "Calm, Healing & Storytelling Focus",
    desc: "Gentle insights, uplifting stories, and simple spiritual wisdom to help you heal, grow, and reconnect with your true self.",
  },
  {
    id: 2,
    img: blogCard1Img,
    tag: "Emotional, Modern & Relatable",
    desc: "Life can feel overwhelming — but small moments of guidance can open big doors. Explore Swamiji's reflections on healing, intuition,",
    highlight: true,
  },
  {
    id: 3,
    img: blogCard1Img,
    tag: "Spiritual Growth & Ayurveda",
    desc: "Ancient wisdom meets modern life. Discover how Ayurvedic principles can transform your daily routine.",
  },
  {
    id: 4,
    img: blogCard1Img,
    tag: "Mind Body Connection",
    desc: "Learn how the mind and body communicate and how to listen to what your body is telling you every day.",
  },
];

const faqTabs = ["Ayurveda Consultation", "Ayurveda Integrative", "Ayurveda Certification"];

const faqs = [
  {
    q: "How do we get to the root cause?",
    a: "Ayurveda is an ancient healing science from India focused on balancing the body, mind, and spirit. It helps you understand your unique nature and supports lasting health through diet, lifestyle, herbs, and daily routines.",
  },
  { q: "How do we personalize and analyze?", a: "" },
  { q: "How long will it take?", a: "" },
  { q: "What happens after the 4 weeks?", a: "" },
  { q: "How do we personalize and analyze?", a: "" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [testimonialStart, setTestimonialStart] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [blogStart, setBlogStart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const prevBlog = () => setBlogStart((p) => (p === 0 ? blogs.length - 2 : p - 1));
  const nextBlog = () => setBlogStart((p) => (p + 1) % (blogs.length - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToSlide = (index) => {
    if (index === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const goToNext = () => {
    const next = (current + 1) % slides.length;
    goToSlide(next);
  };

  const slide = slides[current];

  const prevTestimonial = () => {
    setTestimonialStart((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };
  const nextTestimonial = () => {
    setTestimonialStart((p) => (p + 1) % testimonials.length);
  };

  return (
    <div className="home-wrapper">

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Orange Cowboy Logo" />
        </div>
        <ul className="navbar__links">
          <li>
            <a href="/" className="navbar__link navbar__link--active">Home</a>
          </li>
          {navLinks.map((navItem) => (
            <li key={navItem}>
              <a href={`/${navItem.toLowerCase()}`} className="navbar__link">{navItem}</a>
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
            className="navbar__mobile-link navbar__mobile-link--active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          {navLinks.map((navItem) => (
            <a
              key={navItem}
              href={`/${navItem.toLowerCase()}`}
              className="navbar__mobile-link"
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

      {/* ── HERO SLIDER ── */}
      <section className="hero">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`hero__bg ${i === current ? "hero__bg--active" : ""}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          />
        ))}

        <div className={`hero__overlay ${slide.overlay}`} />

        <div className={`hero__content ${animating ? "hero__content--fade" : "hero__content--show"}`}>
          <span className={`hero__badge ${slide.badgeClass}`}>{slide.badge}</span>
          <h1 className="hero__headline">{slide.headline}</h1>
          <p className="hero__subtext">{slide.subtext}</p>
          <button className="hero__btn">{slide.cta}</button>
        </div>

        <div className="hero__thumbs">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`hero__thumb ${i === current ? "hero__thumb--active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{ backgroundImage: `url(${s.bg})` }}
            />
          ))}
        </div>

        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? "hero__dot--active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── PATHWAYS SECTION ── */}
      <section className="pathways">
        <div className="pathways__label-wrap">
          <div className="pathways__label">
            <span className="pathways__label-icon">📖</span>
            <span>Swami Services</span>
          </div>
          <span className="pathways__label-spark">✦</span>
        </div>

        <h2 className="pathways__heading">
          Pathways to Inner <em>Wisdom + Health</em>
        </h2>
        <p className="pathways__subtext">
          Choose the guidance that resonates with your current journey. Each offering is crafted with love to support your unique path.
        </p>

        <div className="pathways__cards">
          <div className="pathways__card pathways__card--orange">
            <a href="#" className="pathways__card-arrow pathways__card-arrow--top">↗</a>
            <div className="pathways__card-img-wrap">
              <img src={card1} alt="1-on-1 and Group Readings" className="pathways__card-img" />
            </div>
            <div className="pathways__card-body">
              <h3 className="pathways__card-title">1-on-1 &amp; Group Readings</h3>
              <p className="pathways__card-desc">
                Interactive talks and podcast transforming anxiety &amp; overwhelm to calm &amp; centered
              </p>
              <button className="pathways__card-btn">Book a Session</button>
            </div>
          </div>

          <div className="pathways__card pathways__card--cream">
            <div className="pathways__card-top-row">
              <span className="pathways__card-tag">Community Experiences</span>
              <a href="#" className="pathways__card-arrow">↗</a>
            </div>
            <h3 className="pathways__card-title pathways__card-title--lg">Courses + Workshops</h3>
            <p className="pathways__card-desc pathways__card-desc--orange">
              Experience fun wellness games to regulate your nervous system - evidence based studies &amp; student experience find result in 60 second or less
            </p>
            <div className="pathways__card-img-wrap pathways__card-img-wrap--bottom">
              <img src={card2} alt="Courses and Workshops" className="pathways__card-img pathways__card-img--rounded" />
            </div>
          </div>

          <div className="pathways__card pathways__card--cream">
            <div className="pathways__card-top-row">
              <span className="pathways__card-tag">Community Experiences</span>
              <a href="#" className="pathways__card-arrow">↗</a>
            </div>
            <h3 className="pathways__card-title pathways__card-title--lg">Presentations + Podcasts</h3>
            <p className="pathways__card-desc">Inspiring Talks That Spark Transformation</p>
            <div className="pathways__card-img-wrap pathways__card-img-wrap--bottom">
              <img src={card3} alt="Presentations and Podcasts" className="pathways__card-img pathways__card-img--rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION SECTION ── */}
      <section className="collab">
        <div className="collab__label">
          <span className="collab__label-diamond">◇</span>
          <span>Collaboration</span>
          <span className="collab__label-diamond">◇</span>
        </div>

        <div className="collab__cards">
          <div className="collab__card">
            <div className="collab__card-photo">
              <img src={collabAyurveda} alt="Dr. Pat, MD" />
            </div>
            <div className="collab__card-body">
              <div className="collab__card-top-row">
                <h3 className="collab__card-title">Integrative Ayurveda</h3>
                <span className="collab__card-icon">🏅</span>
              </div>
              <p className="collab__card-subtitle">Co-teaching with Dr. Pat, MD</p>
              <h4 className="collab__card-heading">Integrative Ayurveda Certification</h4>
              <p className="collab__card-desc">
                Blending classical Ayurveda with modern integrative medicine for comprehensive healing.
              </p>
              <button className="collab__card-btn">View Details</button>
            </div>
          </div>

          <div className="collab__card">
            <div className="collab__card-photo">
              <img src={collabAcademic} alt="Akamai University" />
            </div>
            <div className="collab__card-body">
              <div className="collab__card-top-row">
                <h3 className="collab__card-title">Academic Pathways</h3>
                <span className="collab__card-icon">🎓</span>
              </div>
              <p className="collab__card-subtitle">Partnership with Akamai University</p>
              <h4 className="collab__card-heading">Academic Pathways &amp; CEU Credits</h4>
              <p className="collab__card-desc">
                Apply course credits toward CEU, MA &amp; PhD programs. Build your academic credentials.
              </p>
              <button className="collab__card-btn">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET SWAMI SECTION ── */}
      <section className="meet-swami">
        <div className="meet-swami__card">
          <div className="meet-swami__text">
            <div className="meet-swami__accent">
              <span className="meet-swami__accent-line"></span>
              <span className="meet-swami__accent-diamond">◆</span>
            </div>
            <h2 className="meet-swami__heading">Meet <em>Swami</em> —</h2>
            <p className="meet-swami__para">
              For over 50 years, <strong>Swami has guided people toward joy</strong>, healing, and{" "}
              <strong>spiritual reconnection.</strong> Step into experiences that{" "}
              <strong>open the heart, clear the mind,</strong> and help rediscover your true calling.{" "}
              <strong>We believe true wellness is not about escaping life — but recognizing the opportunities within it.</strong>
            </p>
            <p className="meet-swami__para">
              <strong>For over five decades, our work has focused on integrating</strong> ancient healing
              traditions with evidence-based modern science.{" "}
              <strong>We believe that true wellness is not about escaping life — but learning how to navigate it with clarity,</strong>{" "}
              energy, and balance.
            </p>
            <h3 className="meet-swami__subheading">About <em>Chakravedaa</em> —</h3>
            <p className="meet-swami__highlight">
              <strong>Chakravedaa is a guided system that helps you understand</strong>, align, and use your
              internal energy centers to create calm,{" "}
              <strong>clarity, and energy — often immediately.</strong>
            </p>
            <button className="meet-swami__btn">
              Check Course <span className="meet-swami__btn-arrow">↗</span>
            </button>
          </div>
          <div className="meet-swami__photo">
            <img src={swamiPhoto} alt="Meet Swami" />
          </div>
        </div>
      </section>

      {/* ── BOOKS BY SWAMI SECTION ── */}
      <section className="books">
        <div className="books__inner">
          <div className="books__text">
            <div className="books__label">
              <img src={booksMedal} alt="" className="books__label-medal" />
              <span className="books__label-text">Books By <em>Swami</em></span>
            </div>
            <h2 className="books__heading">
              Bestselling Books <br />Loved <em>Worldwide</em>
            </h2>
            <p className="books__subtext">
              <strong>Transform your life</strong> with wisdom from decades of healing,
              spirituality, <strong>and divine storytelling.</strong>
            </p>
            <img src={booksAmazonBadge} alt="Amazon Best Seller" className="books__amazon-badge" />
            <div className="books__btn-row">
              <button className="books__btn books__btn--solid">Buy on Amazon</button>
              <button className="books__btn books__btn--outline">Explore More Books</button>
              <span className="books__btn-spark">⚡</span>
            </div>
          </div>
          <div className="books__shelf">
            <img src={bookCoverAyurveda} alt="The Ayurveda Encyclopedia" className="books__cover books__cover--left" />
            <img src={bookCoverMiracles} alt="The Magic of the Blessed Mother's Miracles" className="books__cover books__cover--right" />
            <div className="books__shelf-board"></div>
          </div>
        </div>
      </section>

      {/* ── BLOGS SECTION ── */}
      <section className="blogs">
        <div className="blogs__inner">
          <div className="blogs__left">
            <div className="blogs__video-card">
              <img src={blogSwamiVideo} alt="Swami Ji" className="blogs__video-img" />
              <div className="blogs__video-overlay">
                <h3 className="blogs__video-title">
                  Heal Your Spirit<br />
                  Through <span>the Power<br />of Story</span>
                </h3>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="blogs__yt-btn">
                  <span className="blogs__yt-icon">▶</span>
                  Swami's On Youtube
                </a>
              </div>
            </div>
          </div>

          <div className="blogs__right">
            <div className="blogs__header">
              <div className="blogs__header-text">
                <h2 className="blogs__title">Our Latest<br /><em>Blogs</em></h2>
                <p className="blogs__subtitle">
                  <strong>Your journey doesn't end here</strong> — it evolves. Discover
                  more insights to awaken <strong>compassion, stillness, and purpose within.</strong>
                </p>
              </div>
              <div className="blogs__header-actions">
                <div className="blogs__nav">
                  <button className="blogs__nav-btn" onClick={prevBlog} aria-label="Previous">‹</button>
                  <button className="blogs__nav-btn blogs__nav-btn--active" onClick={nextBlog} aria-label="Next">›</button>
                </div>
                <a href="/blogs" className="blogs__explore">Explore more →</a>
              </div>
            </div>

            <div className="blogs__cards">
              {[0, 1].map((offset) => {
                const b = blogs[(blogStart + offset) % blogs.length];
                return (
                  <div key={b.id} className={`blogs__card ${b.highlight ? "blogs__card--highlight" : ""}`}>
                    <div className="blogs__card-img-wrap">
                      <img src={b.img} alt={b.tag} className="blogs__card-img" />
                    </div>
                    <div className="blogs__card-body">
                      <h4 className="blogs__card-tag">{b.tag}</h4>
                      <p className="blogs__card-desc">{b.desc}</p>
                      <a href="/blogs" className="blogs__card-link">Read Blog →</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SECTION ── */}
      <section className="community">
        <div className="community__head">
          <h2 className="community__heading">
            <span className="community__quote-mark">&ldquo;</span>
            Community <em>Word&apos;s</em>
          </h2>
          <div className="community__nav">
            <button className="community__nav-btn" onClick={prevTestimonial} aria-label="Previous">‹</button>
            <button className="community__nav-btn community__nav-btn--active" onClick={nextTestimonial} aria-label="Next">›</button>
          </div>
        </div>
        <div className="community__cards">
          {[0, 1, 2].map((offset) => {
            const t = testimonials[(testimonialStart + offset) % testimonials.length];
            return (
              <div className="community__card" key={offset}>
                <div className="community__card-sparkles">✦ ✦ ✦</div>
                <h3 className="community__card-name">{t.name}</h3>
                <p className="community__card-role">{t.role}</p>
                <p className="community__card-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="community__card-stars">{"★".repeat(t.stars)}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className="faqs">
        <h2 className="faqs__heading">Ayurveda <em>FAQs</em></h2>
        <div className="faqs__tabs">
          {faqTabs.map((tab, i) => (
            <button
              key={tab}
              className={`faqs__tab ${activeFaqTab === i ? "faqs__tab--active" : ""}`}
              onClick={() => setActiveFaqTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="faqs__list">
          {faqs.map((item, i) => (
            <div className={`faqs__item ${openFaq === i ? "faqs__item--open" : ""}`} key={i}>
              <button
                className="faqs__item-question"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faqs__item-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && item.a && (
                <p className="faqs__item-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SPEAK SECTION ── */}
      <section className="speak">
        <div className="speak__card">
          <div className="speak__content">
            <span className="speak__eyebrow">INVITE SWAMI TO SPEAK</span>
            <h2 className="speak__heading">Schools, Charities &amp; Wellness Associations</h2>
            <p className="speak__desc">
              Bring the wisdom of{" "}
              <a href="/academy" className="speak__link">Orange Cowboy Light Academy</a>{" "}
              to your organization. Inspiring talks on mindfulness, spiritual resilience,
              and discovering one's higher purpose.
            </p>
            <button className="speak__btn">Request Speaking</button>
          </div>
          <div className="speak__img-wrap">
            <img src={swamiSpeak} alt="Swami Ji Speaking" className="speak__img" />
          </div>
        </div>
      </section>

    </div>
  );
}
