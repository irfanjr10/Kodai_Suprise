import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section royal-hero-theme">
      <div className="hero-overlay royal-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title royal-title">
            Make Every Moment
            <span className="hero-title-accent">Special.</span>
          </h1>

          <p className="hero-description royal-description">
            <span className="hero-description-highlight">
              From heartfelt proposals to joyful birthdays and intimate celebrations,
            </span>
            <span className="hero-description-support">
              we style and photograph celebrations that feel like you.
            </span>
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => navigate('/services')}
              className="btn btn-primary hero-btn royal-gold-btn"
            >
              Explore celebrations
              <span className="btn-arrow">→</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="btn btn-outline-white hero-btn royal-outline-btn"
            >
              Plan your moment
            </button>
          </div>

          <div className="hero-stats royal-stats">
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Bespoke styling</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">5 tiers</span>
              <span className="stat-label">Clear collections</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">Photo & film</span>
              <span className="stat-label">Cinematic coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
