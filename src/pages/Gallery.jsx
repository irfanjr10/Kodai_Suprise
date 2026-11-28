import React, { useEffect, useState } from 'react';
import { reviewsData } from '../data/galleryData';

const STORAGE_KEY = 'kodai-customer-reviews';

export default function Gallery() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [customerReviews, setCustomerReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const savedReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setCustomerReviews(Array.isArray(savedReviews) ? savedReviews : []);
    } catch {
      setCustomerReviews([]);
    }
  }, []);

  const submitReview = (event) => {
    event.preventDefault();
    if (!rating || !comment.trim()) return;

    const review = {
      id: `customer-${Date.now()}`,
      rating,
      comment: comment.trim(),
    };
    const updatedReviews = [review, ...customerReviews];

    setCustomerReviews(updatedReviews);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));
    setRating(0);
    setHoverRating(0);
    setComment('');
    setSubmitted(true);
  };

  const allReviews = [
    ...customerReviews,
    ...reviewsData.map(({ id, rating, comment }) => ({ id, rating, comment })),
  ];

  return (
    <div className="reviews-page-view royal-page-bg">
      <section className="page-hero-banner royal-hero-banner reviews-hero-banner">
        <div className="container">
          <span className="section-tag royal-gold-pill">Customer Reviews</span>
          <h1 className="page-hero-title royal-heading">Share Your Experience</h1>
          <p className="page-hero-desc">
            Leave a star rating and tell us about your celebration.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="customer-review-layout">
            <form className="customer-review-form" onSubmit={submitReview}>
              <span className="section-tag">Write a Review</span>
              <h2 className="section-title">How was your experience?</h2>

              <fieldset className="star-rating-field">
                <legend>Star rating</legend>
                <div className="star-rating-input" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={star <= (hoverRating || rating) ? 'star active' : 'star'}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      aria-pressed={rating === star}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="review-comment-label" htmlFor="customer-comment">
                Your comment
              </label>
              <textarea
                id="customer-comment"
                className="review-comment-input"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Tell us about the service..."
                rows="5"
                maxLength="800"
                required
              />

              <button
                type="submit"
                className="btn btn-primary royal-gold-btn review-submit-btn"
                disabled={!rating || !comment.trim()}
              >
                Submit Review
              </button>
              {submitted && (
                <p className="review-success" role="status">
                  Thank you! Your review has been added.
                </p>
              )}
            </form>

            <div className="customer-reviews-list">
              <span className="section-tag">Customer Feedback</span>
              <h2 className="section-title">What customers say</h2>
              <div className="reviews-grid review-page-grid">
                {allReviews.map((review) => (
                  <article key={review.id} className="review-card">
                    <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                      {'★'.repeat(review.rating)}
                      <span className="review-stars-empty">
                        {'★'.repeat(5 - review.rating)}
                      </span>
                    </div>
                    <p className="review-comment">"{review.comment}"</p>
                    <div className="review-footer">
                      <span className="review-badge">Customer Review</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
