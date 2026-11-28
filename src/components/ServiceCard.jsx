import React from 'react';

export default function ServiceCard({ service, onSelectService }) {
  const { title, shortDesc, image, features, category } = service;

  return (
    <div className="service-card">
      <div className="service-img-wrapper">
        <img src={image} alt={title} className="service-img" loading="lazy" />
        <span className="service-category-badge">{category}</span>
      </div>

      <div className="service-body">
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{shortDesc}</p>

        <ul className="service-features-list">
          {features.map((item, index) => (
            <li key={index} className="service-feature-item">
              <span className="check-bullet">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="service-actions">
          <button
            onClick={() => onSelectService(service)}
            className="btn btn-outline-gold service-btn"
          >
            Explore & Enquire
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
