import { useState } from "react";
import "./Academy.css";
import academyHero from "../assets/academy-hero.jpg";
import academyMeditation from "../assets/academy-meditation.jpg";
import academyChakraveda from "../assets/academy-chakraveda.png";
import academyConsultation from "../assets/academy-consultation.png";
import academyHands from "../assets/academy-hands.png";
import academySwamiOrange from "../assets/academy-swami-orange.png";

/* ── Data ── */
const streamingCourses = [
  {
    tag: "Streaming / On-demand",
    tagDark: false,
    title: "21 Days of Joy",
    desc: "A guided journey into emotional freedom and daily joy practices.",
    features: ["Streaming On-demand", "Certificate of Completion"],
    price: "$188",
    btnLabel: "Enroll Live",
    btnDark: false,
  },
  {
    tag: "Streaming / On-demand",
    tagDark: false,
    title: "Medical Intuition Level 1",
    desc: "Develop intuitive awareness and diagnostic clarity.",
    features: ["Streaming On-demand", "Includes: Workbook + Q&A", "Certificate of Completion"],
    price: "$288",
    btnLabel: "Enroll Now",
    btnDark: false,
  },
  {
    tag: "LIVE • ADVANCED",
    tagDark: true,
    title: "Instant Energy/Healing through the Heart",
    desc: "Deep dive into energy healing techniques and spiritual practices.",
    features: ["Streaming On-demand", "8 classes (1.5 hours/class)", "Certificate of Completion"],
    price: "$288",
    btnLabel: "Enroll Live",
    btnDark: true,
  },
];

const doshas = [
  {
    icon: "🌬️",
    element: "Air + Space",
    name: "Vata",
    color: "#b8b0e8",
    bg: "linear-gradient(135deg, #e8e4f8 0%, #d4cff0 100%)",
    nature: "Movement & change",
    traits: "Creative, fast-thinking, energetic.",
    imbalance: "Anxiety, restlessness, overthink",
  },
  {
    icon: "🔥",
    element: "Fire + Water",
    name: "Pitta",
    color: "#e07a30",
    bg: "linear-gradient(135deg, #fff3e8 0%, #fde8d0 100%)",
    nature: "Transformation & intensity",
    traits: "Focused, driven, sharp",
    imbalance: "Anger, burnout, irritation",
  },
  {
    icon: "🌿",
    element: "Earth + Water",
    name: "Kapha",
    color: "#5aab7a",
    bg: "linear-gradient(135deg, #e8f5ec 0%, #d4edd9 100%)",
    nature: "Stability & structure",
    traits: "Calm, grounded, supportive",
    imbalance: "Laziness, heaviness, low motivation",
  },
];

const playlists = [
  { label: "TV Shows", active: true },
  { label: "Podcasts", active: false },
  { label: "Inner Peace", active: false },
  { label: "Prophetic Dreams & Visions", active: false },
  { label: "Mission Ignited", active: false },
  { label: "Orange Cowboy Light Academy", active: false },
  { label: "Swami is Interview", active: false },
];

const mediaVideos = [
  {
    img: academyChakraveda,
    title: "Discover the Secrets of ChakraVeda Healing",
    sub: "1 min method for anxiety relief",
  },
  {
    img: academyConsultation,
    title: "Herb & Supplement Education",
    sub: "How to sit comfortably for 20 mins.",
  },
  {
    img: academyHands,
    title: "Ignite Your Life – with Radiance",
    sub: "A cinematic introduction to the path.",
  },
];

const instantCourses = [
  {
    tag: "Integrative Ayurveda Certification Level 1",
    desc: "Discover how you can tune each chakra to support calm, peace, & energy",
    features: ["12 months", "Evidence based", "Earn: Certified Ayurveda Lifestyle Practitioner"],
    price: "$198",
    btn: "Start Learning",
  },
  {
    tag: "Ayurveda Foundations (Level 1)",
    desc: "Evidence-based root-cause approach to wellness and healing.",
    features: ["8 Lessons", "Evidence-Based", "Certificate of Completion"],
    price: "$2000",
    btn: "Start Now",
  },
  {
    tag: "Intro to Psychic Intuition",
    desc: "Master the fundamentals of energy work and healing practices.",
    features: ["Beneficial for the gifted neurodiverse", "Lifetime Access", "Explore your 8 senses", "1.5 hour class", "Lifetime access"],
    price: "$28",
    btn: "Start Now",
  },
  {
    tag: "Meditation for Nervous System Regulation",
    desc: "Deep meditation techniques for spiritual growth and clarity.",
    features: ["5 sessions", "See how anyone can meditate", "Certificate of Completion"],
    price: "$188",
    btn: "Start Learning",
  },
];

export default function Academy() {
  const [activePlaylist, setActivePlaylist] = useState(0);

  return (
    <div className="academy">

      {/* ── HERO ── */}
      <section className="ac-hero">
        <img src={academyHero} alt="Academy" className="ac-hero__bg" />
        <div className="ac-hero__overlay" />
        <div className="ac-hero__content">
          <h1 className="ac-hero__title">
            Orange Cowboy Light <em>Academy</em>
          </h1>
          <p className="ac-hero__sub">
            Teachings · Meditations · Stories · Travel · Conversations
          </p>
        </div>
        <button className="ac-hero__watch-btn">
          <span className="ac-hero__play">▶</span> Watch Featured
        </button>
      </section>

      {/* ── STREAMING COURSES ── */}
      <section className="ac-streaming">
        <div className="ac-container">
          <h2 className="ac-streaming__heading">
            Streaming <em>Courses</em>
          </h2>
          <p className="ac-streaming__sub">
            Join Swami in real-time for transformational training experiences.
          </p>

          <div className="ac-streaming__grid">
            {streamingCourses.map((c, i) => (
              <div
                key={i}
                className="ac-course-card"
                style={c.tagDark ? {
                  background: "#ffffff",
                  border: "1px solid #e8e0d8",
                  borderRadius: "20px",
                } : {}}
              >
                {/* Tag */}
                <div
                  className="ac-course-card__tag"
                  style={c.tagDark ? {
                    background: "#1c1c1e",
                    color: "#fff",
                    border: "none",
                    letterSpacing: "0.1em",
                  } : {}}
                >
                  {c.tag}
                </div>

                {/* Title */}
                <h3
                  className="ac-course-card__title"
                  style={c.tagDark ? { color: "#1a1a1a" } : {}}
                >
                  {c.title}
                </h3>

                {/* Desc */}
                <p
                  className="ac-course-card__desc"
                  style={c.tagDark ? { color: "#666666" } : {}}
                >
                  {c.desc}
                </p>

                {/* Features */}
                <ul className="ac-course-card__features">
                  {c.features.map((f, j) => (
                    <li
                      key={j}
                      style={c.tagDark ? { color: "#444444" } : {}}
                    >
                      <span className="ac-course-card__feat-icon">
                        {j === 0 ? "📺" : "🏅"}
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div
                  className="ac-course-card__price"
                  style={c.tagDark ? { color: "#1a1a1a", fontSize: "36px" } : {}}
                >
                  {c.price}
                </div>

                {/* Button */}
                <button
                  className="ac-course-card__btn"
                  style={c.tagDark ? {
                    background: "#ffffff",
                    color: "#1c1c1e",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "15px 0",
                    borderRadius: "50px",
                    boxShadow: "none",
                  } : {}}
                >
                  {c.btnLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOSHA SECTION ── */}
      <section className="ac-dosha">
        <div className="ac-container">
          <div className="ac-dosha__eyebrow">
            <span>🫀</span> Understand Your Body
          </div>
          <h2 className="ac-dosha__heading">
            Your Body Has a <em>Natural Pattern.</em><br />
            This is Your Dosha.
          </h2>
          <p className="ac-dosha__sub">
            In Ayurveda, your physical, mental, and emotional tendencies are guided by your
            Dosha — Vata, Pitta, or Kapha. Understanding it helps you bring balance,
            not guesswork.
          </p>

          <div className="ac-dosha__cards">
            {doshas.map((d, i) => (
              <div key={i} className="ac-dosha__card" style={{ background: d.bg }}>
                <span className="ac-dosha__card-icon">{d.icon}</span>
                <p className="ac-dosha__card-element">{d.element}</p>
                <h3 className="ac-dosha__card-name" style={{ color: d.color }}>{d.name}</h3>
                <div className="ac-dosha__card-details">
                  <p><span>Nature:</span> {d.nature}</p>
                  <p><span>Traits:</span> {d.traits}</p>
                  <p><span>Imbalance:</span> {d.imbalance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ac-dosha__cta-box">
            <h3 className="ac-dosha__cta-title">
              Discover Your <em>Dosha Profile</em>
            </h3>
            <p className="ac-dosha__cta-desc">
              Answer a few simple questions to understand your natural
              tendencies and get personalized guidance.
            </p>
            <button className="ac-dosha__cta-btn">Start Dosha Assessment</button>
          </div>
        </div>
      </section>

      {/* ── BROWSE PLAYLIST + VIDEO ── */}
      <section className="ac-playlist-section">
        <div className="ac-container ac-playlist-section__grid">
          <div className="ac-playlist">
            <h2 className="ac-playlist__heading">
              Browse <em>Playlist</em>
            </h2>
            <ul className="ac-playlist__list">
              {playlists.map((p, i) => (
                <li
                  key={i}
                  className={`ac-playlist__item ${activePlaylist === i ? "ac-playlist__item--active" : ""}`}
                  onClick={() => setActivePlaylist(i)}
                >
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="ac-featured-video">
            <img src={academyMeditation} alt="Featured" className="ac-featured-video__img" />
            <div className="ac-featured-video__overlay">
              <h3 className="ac-featured-video__title">
                Instant Meditation for Anxiety &amp; Calm
              </h3>
              <p className="ac-featured-video__sub">
                A simple 1-minute practice to reset your mind and body
              </p>
              <div className="ac-featured-video__yt-icon">▶</div>
            </div>
            <div className="ac-featured-video__btns">
              <button className="ac-featured-video__btn-watch">▶ Watch Now</button>
              <button className="ac-featured-video__btn-yt">
                <span className="ac-featured-video__yt-logo">▶</span> YouTube Channel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SWAMI INTERVIEWS & MEDIA ── */}
      <section className="ac-media">
        <div className="ac-container">
          <div className="ac-media__header">
            <h2 className="ac-media__heading">
              <span className="ac-media__tv">📺</span>{" "}
              Swami Interviews &amp; <em>Media Appearances</em>
            </h2>
            <a href="#" className="ac-media__explore">Explore more Videos →</a>
          </div>

          <div className="ac-media__grid">
            {mediaVideos.map((v, i) => (
              <div key={i} className="ac-media__card">
                <div className="ac-media__card-img-wrap">
                  <img src={v.img} alt={v.title} className="ac-media__card-img" />
                  <div className="ac-media__card-play">
                    <span className="ac-media__card-yt">▶</span>
                  </div>
                </div>
                <div className="ac-media__card-body">
                  <h4 className="ac-media__card-title">{v.title}</h4>
                  <p className="ac-media__card-sub">{v.sub}</p>
                  <button className="ac-media__card-btn">
                    <span className="ac-media__card-btn-yt">▶</span> Watch On Youtube
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAKRAVEDAA BANNER ── */}
      <section className="ac-chakra">
        <img src={academyHands} alt="Chakravedaa" className="ac-chakra__bg" />
        <div className="ac-chakra__overlay" />
        <div className="ac-chakra__content">
          <span className="ac-chakra__eyebrow">SIGNATURE EVERGREEN PROGRAM</span>
          <h2 className="ac-chakra__title">Chakravedaa</h2>
          <p className="ac-chakra__desc">
            A fun, simple, journey of harmonizing your energy centers<br />
            Master the 7 centers to reset your calm, peace, and energy<br />
            8 1-hour Video lessons ~ certificate of completion ~ education credit towards Akamai U
          </p>
          <div className="ac-chakra__btns">
            <button className="ac-chakra__btn-primary">Explore Chakraveda</button>
            <button className="ac-chakra__btn-outline">Join Swami</button>
          </div>
          <div className="ac-chakra__stats">
            <div className="ac-chakra__stat">
              <span className="ac-chakra__stat-num">7</span>
              <span className="ac-chakra__stat-label">MODULES</span>
            </div>
            <div className="ac-chakra__stat-divider" />
            <div className="ac-chakra__stat">
              <span className="ac-chakra__stat-num">40+</span>
              <span className="ac-chakra__stat-label">VIDEO LESSONS</span>
            </div>
            <div className="ac-chakra__stat-divider" />
            <div className="ac-chakra__stat">
              <span className="ac-chakra__stat-num">20h</span>
              <span className="ac-chakra__stat-label">CONTENT</span>
            </div>
            <div className="ac-chakra__stat-divider" />
            <div className="ac-chakra__stat">
              <span className="ac-chakra__stat-num">∞</span>
              <span className="ac-chakra__stat-label">ACCESS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTANT ACCESS COURSES ── */}
      <section className="ac-instant">
        <div className="ac-container">
          <h2 className="ac-instant__heading">Instant Access Courses</h2>
          <p className="ac-instant__sub">Start learning immediately. Watch anytime.</p>

          <div className="ac-instant__grid">
            {instantCourses.map((c, i) => (
              <div key={i} className="ac-instant__card">
                <div className="ac-instant__card-tag-bar" />
                <div className="ac-instant__card-body">
                  <h3 className="ac-instant__card-title">{c.tag}</h3>
                  <p className="ac-instant__card-desc">{c.desc}</p>
                  <ul className="ac-instant__card-features">
                    {c.features.map((f, j) => (
                      <li key={j}>
                        <span className="ac-instant__feat-icon">
                          {j === 0 ? "🕐" : j === 1 ? "✓" : "🏅"}
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="ac-instant__card-price">{c.price}</div>
                  <button className="ac-instant__card-btn">{c.btn}</button>
                  <button className="ac-instant__card-preview">Preview Course</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVITE SWAMI TO SPEAK ── */}
      <section className="ac-speak">
        <div className="ac-container">
          <div className="ac-speak__card">
            <div className="ac-speak__content">
              <span className="ac-speak__eyebrow">INVITE SWAMI TO SPEAK</span>
              <h2 className="ac-speak__heading">
                Schools, Charities &amp; Wellness Associations
              </h2>
              <p className="ac-speak__desc">
                Bring the wisdom of{" "}
                <a href="#" className="ac-speak__link">Orange Cowboy Light Academy</a>{" "}
                to your organization. Inspiring talks on mindfulness, spiritual
                resilience, and discovering one's higher purpose.
              </p>
              <button className="ac-speak__btn">Request Speaking</button>
            </div>
            <div className="ac-speak__img-wrap">
              <img src={academySwamiOrange} alt="Swami" className="ac-speak__img" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}