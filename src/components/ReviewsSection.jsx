import React from 'react';
import { reviewsData } from '../data/galleryData';

export default function ReviewsSection() {
  return (
    <section className="reviews-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Experiences</span>
          <h2 className="section-title">Loved by Couples & Families</h2>
          <p className="section-subtitle">
            Read heartwarming impressions from clients who celebrated their milestone moments with us in Kodaikanal.
          </p>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-stars">
                {'★'.repeat(rev.rating)}
              </div>
              <p className="review-comment">"{rev.comment}"</p>
              <div className="review-footer">
                <div>
                  <h4 className="reviewer-name">{rev.name}</h4>
                  <span className="review-event">{rev.event}</span>
                </div>
                <span className="review-badge">Verified Client</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
