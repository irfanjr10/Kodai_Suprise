import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Proposals', 'Birthdays', 'Weddings', 'Anniversaries', 'Photoshoots'];

  const filteredPhotos = filter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === filter);

  return (
    <div className="gallery-page-view royal-page-bg">
      <section
        className="page-hero-banner royal-hero-banner"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(21,55,41,.62) 0%, rgba(33,79,58,.42) 58%, rgba(33,79,58,.25) 100%), url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container">
          <span className="section-tag royal-gold-pill">⚜️ Visual Splendor</span>
          <h1 className="page-hero-title royal-heading">Curated Royal Gallery</h1>
          <p className="page-hero-desc">
            Explore authentic moments of joy, romantic proposal decor, opulent wedding mandaps, and evening celebrations.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="category-filters" style={{ marginBottom: '3.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill royal-filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="gallery-card royal-gallery-card">
                <div className="gallery-img-container" style={{ height: '320px' }}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="gallery-img"
                    loading="lazy"
                  />
                  <div className="gallery-overlay royal-gallery-overlay">
                    <span className="gallery-category">{photo.category}</span>
                    <h3 className="gallery-title">{photo.title}</h3>
                    <span className="gallery-location">📍 {photo.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact" className="btn btn-primary royal-gold-btn" style={{ padding: '1rem 2.75rem' }}>
              Reserve Your Celebration Date →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
