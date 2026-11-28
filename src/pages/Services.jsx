import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { packageEventIds } from '../data/packagesData';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Celebration', 'Romance', 'Wedding', 'Photography', 'Bespoke'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="services-page-view royal-page-bg">
      <section
        className="page-hero-banner royal-hero-banner"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(21,55,41,.88) 0%, rgba(33,79,58,.68) 58%, rgba(33,79,58,.4) 100%), url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container">
          <span className="section-tag royal-gold-pill">⚜️ Event Services</span>
          <h1 className="page-hero-title royal-heading">Royal Event Decoration & Photography</h1>
          <p className="page-hero-desc">
            Discover our curated portfolio of grand celebration stages, romantic candlelit canopies, and cinematic drone captures.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filters" style={{ marginBottom: '3.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill royal-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card royal-service-card">
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" loading="lazy" />
                  <span className="service-category-badge royal-cat-badge">{service.category}</span>
                </div>

                <div className="service-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>

                  <ul className="service-features-list">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="service-feature-item">
                        <span className="check-bullet">✦</span> {feat}
                      </li>
                    ))}
                  </ul>

                  {packageEventIds.includes(service.id) ? (
                    <button
                      onClick={() => navigate(`/packages/${service.id}`)}
                      className="btn btn-outline-gold service-btn royal-gold-action-btn"
                    >
                      View {service.title.split(' ')[0]} Packages (₹) →
                    </button>
                  ) : (
                    <>
                      <p className="service-desc">
                        This event is planned according to your requirements, with charges quoted accordingly.
                      </p>
                      <button
                        onClick={() => navigate('/contact', { state: { eventType: service.title } })}
                        className="btn btn-outline-gold service-btn royal-gold-action-btn"
                      >
                        Plan Your Event →
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
