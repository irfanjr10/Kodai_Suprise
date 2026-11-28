import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Celebration', 'Romance', 'Wedding', 'Photography', 'Bespoke'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Offerings</span>
          <h2 className="section-title">Premium Event Decoration & Photography</h2>
          <p className="section-subtitle">
            From intimate mountain proposals to majestic hill resort weddings, explore our 9 signature event services in Kodaikanal.
          </p>

          {/* Filter Pills */}
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
