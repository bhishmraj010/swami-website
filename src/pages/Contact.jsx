import React, { useState } from "react";
import { submitContactForm } from "../firebase/services";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill in required fields.");
      return;
    }
    setStatus("loading");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1 className="contact-hero-title">
          Let's <span className="orange-italic">Connect</span> with{" "}
          <em className="cursive">Love &amp; Joy</em>
        </h1>
        <p className="contact-hero-sub">
          Have a question, want to share your story, or interested in joining
          our community? We'd love to hear from you.
        </p>
      </section>

      {/* FORM */}
      <section className="contact-form-section">
        <div className="contact-form-container">

          <div className="contact-left">
            <div className="contact-quote-img">
              <blockquote className="contact-quote">
                "I am listening with an open heart. Speak freely."
                <cite>— Swami Tirtha</cite>
              </blockquote>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-bg-text" aria-hidden>SWAMI</div>
            <h2 className="form-title">Send a Message</h2>
            <p className="form-hint">Fields marked with * are required</p>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="firstName" placeholder="Enter your name" value={form.firstName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Enter your name" value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" placeholder="How can swami ji help today" rows={5} value={form.message} onChange={handleChange} />
            </div>

            <div className="form-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">ig</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">▶</a>
            </div>

            {status === "success" && <p className="form-success">✅ Message sent! Swami ji will get back to you soon.</p>}
            {status === "error" && <p className="form-error">Something went wrong. Please try again.</p>}

            <button className="btn-send" onClick={handleSubmit} disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="socials-section">
        <div className="socials-bg-text" aria-hidden>Connect</div>
        <h2 className="socials-title">Connect <span className="orange-italic">On Socials</span><span className="leaf">🌿</span></h2>
        <p className="socials-sub">Join the community on your favorite platform</p>

        <div className="socials-cards">
          <div className="social-card">
            <div className="social-thumb youtube" />
            <h3>Orange Cowboy Channel</h3>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-card-btn">SUBSCRIBE →</a>
          </div>
          <div className="social-card">
            <div className="social-thumb instagram" />
            <h3>Swami Profile</h3>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card-btn">CONNECT →</a>
          </div>
          <div className="social-card">
            <div className="social-thumb email" />
            <h3>contact@orangecowboy.com</h3>
            <a href="mailto:contact@orangecowboy.com" className="social-card-btn">TEXT →</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;