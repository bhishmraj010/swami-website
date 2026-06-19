import React from "react";
import "./About.css";

const About = () => {
  const team = [
    {
      name: "Swami Prakashananda",
      role: "Founder & Spiritual Head",
      initials: "SP",
    },
    {
      name: "Anil Kumar Sharma",
      role: "Managing Trustee",
      initials: "AK",
    },
    {
      name: "Priya Devi",
      role: "Director of Education",
      initials: "PD",
    },
    {
      name: "Rajesh Nair",
      role: "Head of Community Outreach",
      initials: "RN",
    },
  ];

  const values = [
    { icon: "🙏", title: "Devotion", desc: "Every act of service is an act of devotion." },
    { icon: "⚖️", title: "Integrity", desc: "We hold ourselves to the highest standards of honesty." },
    { icon: "🌱", title: "Growth", desc: "Continuous learning for all those we serve." },
    { icon: "❤️", title: "Compassion", desc: "Leading with empathy in everything we do." },
    { icon: "🌍", title: "Inclusivity", desc: "Open doors and open hearts for all communities." },
    { icon: "🔥", title: "Excellence", desc: "We pursue quality with unwavering commitment." },
  ];

  return (
    <div className="about">
      {/* ── Page Hero ── */}
      <section className="page-hero page-hero--about">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <p className="section-eyebrow animate-fadeInUp">Our Story</p>
          <h1 className="animate-fadeInUp animate-delay-1">About Swami Foundation</h1>
          <div className="gold-line animate-fadeInUp animate-delay-2" />
          <p className="page-hero__subtitle animate-fadeInUp animate-delay-2">
            A legacy of service, faith, and community building spanning over two decades.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="mission">
        <div className="container mission__grid">
          <div className="mission__card mission__card--primary">
            <div className="mission__icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To nurture individuals and communities through spiritual guidance,
              quality education, and compassionate service — honouring the wisdom
              of tradition while embracing the opportunities of today.
            </p>
          </div>
          <div className="mission__card">
            <div className="mission__icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              A harmonious society where every person has access to knowledge,
              spiritual fulfilment, and a sense of belonging — rooted in values
              that transcend generations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="story">
        <div className="container story__inner">
          <div className="story__content">
            <p className="section-eyebrow">Est. 1999</p>
            <h2>How It All Began</h2>
            <div className="gold-line" />
            <p>
              Swami Foundation was established in 1999 by Swami Prakashananda with
              a single, clear purpose: to serve humanity as an expression of devotion.
              What began as a small ashram offering free education and meals to
              underprivileged children in Dehradun has grown into a multifaceted
              organisation touching thousands of lives annually.
            </p>
            <p>
              Over the years, our programmes have expanded to include vocational
              training, women's empowerment, health awareness camps, and cultural
              preservation initiatives — all driven by the same spirit of selfless
              service that defined our founding days.
            </p>
            <p>
              Today, Swami Foundation stands as a testament to what is possible
              when faith, community, and commitment converge. Our journey continues,
              and every life we touch adds a new chapter to our story.
            </p>
          </div>

          <div className="story__timeline">
            {[
              { year: "1999", event: "Foundation established in Dehradun" },
              { year: "2003", event: "First free school for 200+ children" },
              { year: "2008", event: "Community health centre inaugurated" },
              { year: "2014", event: "Women's empowerment programme launched" },
              { year: "2019", event: "Expanded to 5 districts across Uttarakhand" },
              { year: "2024", event: "Digital education wing established" },
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-event">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Stand For</p>
            <h2 className="values__title">Our Core Values</h2>
            <div className="gold-line centered" />
          </div>
          <div className="values__grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h4 className="value-card__title">{v.title}</h4>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">The People Behind The Mission</p>
            <h2 className="team__title">Our Leadership</h2>
            <div className="gold-line centered" />
          </div>
          <div className="team__grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">
                  {member.initials}
                </div>
                <h4 className="team-card__name">{member.name}</h4>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
