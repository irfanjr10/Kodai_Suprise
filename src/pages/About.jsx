import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsSection from '../components/ReviewsSection';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page-view royal-page-bg">
      <section
        className="page-hero-banner royal-hero-banner"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(21,55,41,.88) 0%, rgba(33,79,58,.68) 58%, rgba(33,79,58,.4) 100%), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container">
          <span className="section-tag royal-gold-pill">Our Heritage &amp; Artistry</span>
          <h1 className="page-hero-title royal-heading">Creating celebrations with meaning</h1>
          <p className="page-hero-desc">
            We bring majesty, bespoke elegance, and flawless execution to milestone celebrations, luxury resort weddings, and private surprise setups.
          </p>
        </div>
      </section>

      <AboutSection />
      <WhyChooseUs />
      <ReviewsSection />

      <section className="section-padding royal-closing-cta">
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <div className="royal-crest-small">👑</div>
          <h2 className="section-title">Ready to Orchestrate Your Event?</h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Speak directly with our event architects to arrange personalized date reservations and venue coordination.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-outline-gold royal-outline-gold-btn">
              Explore Royal Services
            </Link>
            <Link to="/contact" className="btn btn-primary royal-gold-btn">
              Reserve VIP Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
