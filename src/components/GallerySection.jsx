import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';

export default function GallerySection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Proposals', 'Birthdays', 'Weddings', 'Anniversaries', 'Photoshoots'];

  const filteredPhotos = filter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visual Portfolio</span>
          <h2 className="section-title">Memories Captured in Kodaikanal</h2>
          <p className="section-subtitle">
            Explore authentic setups, mountain view decorations, and romantic photoshoots crafted across resorts, private villas, and viewpoints in the hills.
          </p>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="gallery-card">
              <div className="gallery-img-container">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-category">{photo.category}</span>
                  <h3 className="gallery-title">{photo.title}</h3>
                  <span className="gallery-location">📍 {photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
