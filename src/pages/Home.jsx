import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ReviewsSection from '../components/ReviewsSection';
import { servicesData } from '../data/servicesData';
import { packageEventIds } from '../data/packagesData';
import { getWhatsAppUrl } from '../utils/links';

export default function Home() {
  const navigate = useNavigate();
  const whatsappUrl = getWhatsAppUrl(
    'Hello Kodai Surprise Events, I would like to plan a celebration.'
  );

  const featuredServices = servicesData.filter((service) => packageEventIds.includes(service.id));

  return (
    <div className="home-page-view royal-page-bg">
      {/* 1. Royal Hero Section (Ballroom & Chandelier Luxury Backdrop) */}
      <Hero />

      {/* 2. Intro Teaser */}
      <section className="intro-teaser-section section-padding">
        <div className="container">
          <div className="intro-teaser-grid">
            <div className="intro-text-col">
              <span className="section-tag royal-gold-pill">Welcome to Kodai Surprise</span>
              <h2 className="section-title">Every detail, considered.</h2>
              <p className="about-lead">
                We create celebrations that feel personal, considered and effortless.
              </p>
              <p className="about-body">
                Our team brings event styling and floral design together under one thoughtfully managed experience.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-outline-gold royal-outline-gold-btn">
                  Discover Our Heritage →
                </Link>
                <Link to="/services" className="btn btn-forest royal-forest-btn">
                  Explore Event Services
                </Link>
              </div>
            </div>

            <div className="intro-img-col">
              <div className="intro-img-card royal-framed-card">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                  alt="Royal Candlelight Banquet Setup"
                  className="intro-img"
                />
                <div className="intro-floating-badge royal-badge-pill">
                  <span>Bespoke event curation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Preview */}
      <section className="featured-services-section section-padding" style={{ background: 'var(--color-cream-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag royal-gold-pill">⚜️ Signature Collections</span>
            <h2 className="section-title">Bespoke Event Experiences</h2>
            <p className="section-subtitle">
              Packages are available for birthdays, anniversaries, proposals, and bride & groom decorations. Other events are planned to your requirements and quoted accordingly.
            </p>
          </div>

          <div className="services-grid">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card royal-service-card">
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" loading="lazy" />
                  <span className="service-category-badge royal-cat-badge">{service.category}</span>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>
                  <ul className="service-features-list">
                    {service.features.map((feat, i) => (
                      <li key={i} className="service-feature-item">
                        <span className="check-bullet">✦</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/packages/${service.id}`)}
                    className="btn btn-outline-gold service-btn royal-gold-action-btn"
                  >
                    View {service.title.split(' ')[0]} Packages (₹) →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-primary royal-gold-btn" style={{ padding: '1rem 2.75rem' }}>
              Explore All Event Services →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Customer Reviews */}
      <ReviewsSection />

      {/* 7. Royal VIP Booking Banner */}
      <section className="cta-banner-section section-padding">
        <div className="container">
          <div className="cta-banner-card royal-cta-card">
            <span className="section-tag royal-gold-pill">
              VIP Event Reservations
            </span>
            <h2 className="cta-title">Plan Your Royal Celebration Today</h2>
            <p className="cta-desc">
              Whether you desire a breathtaking surprise proposal setup, an opulent floral wedding banquet, or an intimate royal birthday, our event planners are at your service.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary royal-gold-btn">
                Reserve Your Date
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp royal-whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
