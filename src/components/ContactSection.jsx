import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/links';

export default function ContactSection({ selectedServiceOrPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: selectedServiceOrPackage || 'Birthday Celebrations',
    eventDate: '',
    requirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update eventType if parent passes a pre-selected service or package
  React.useEffect(() => {
    if (selectedServiceOrPackage) {
      setFormData((prev) => ({ ...prev, eventType: selectedServiceOrPackage }));
    }
  }, [selectedServiceOrPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission is intentionally front-end only until the database adapter is connected.
    setFormSubmitted(true);
  };

  const whatsappMessage = `Hi Kodai Surprise Events, I would like to enquire about:
- Event: ${formData.eventType || 'Event Decoration'}
- Date: ${formData.eventDate || 'Upcoming Date'}
- Name: ${formData.name || 'Client'}`;

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let’s Plan Your Hill Celebration</h2>
          <p className="section-subtitle">
            Fill out the form below for a customized quotation or reach us directly on WhatsApp for instant assistance.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Info Card */}
          <div className="contact-info-card">
            <h3 className="contact-card-title">Bookings & Enquiries</h3>
            <p className="contact-card-desc">
              We coordinate decorations at all major resorts, homestays, and private villas across Kodaikanal.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Base Location & Service Area</h4>
                  <p>Kodaikanal, Vattakanal, Vilpatti, Shenbaganur & Surrounding Hills, Tamil Nadu</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Phone Support</h4>
                  <p>{siteConfig.contact.phoneDisplay}</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>Email Enquiries</h4>
                  <p>{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA Button */}
            <div className="quick-whatsapp-box">
              <h4>Prefer Instant Chat?</h4>
              <p>Chat directly with our setup coordinator for quick availability & pricing.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <span>💬 Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Booking Enquiry Form */}
          <div className="contact-form-wrapper">
            {formSubmitted ? (
              <div className="form-success-box">
                <span className="success-icon">🎉</span>
                <h3>Thank You, {formData.name || 'Friend'}!</h3>
                <p>
                  Your booking enquiry for <strong>{formData.eventType}</strong> has been received. Our team will contact you shortly on <strong>{formData.phone || 'your phone'}</strong>.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Send to WhatsApp as well →
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Birthday Celebrations',
                        eventDate: '',
                        requirements: ''
                      });
                    }}
                    className="btn btn-outline-gold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <h3 className="form-title">Event Enquiry Form</h3>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. anand@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventType" className="form-label">Event Service *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <optgroup label="Birthday Packages">
                        <option value="Silver Package (₹5,999)">Silver Package – ₹5,999</option>
                        <option value="Gold Package (₹7,999)">Gold Package – ₹7,999</option>
                        <option value="Platinum Package (₹11,999)">Platinum Package – ₹11,999 (Most Popular)</option>
                        <option value="Diamond Package (₹24,999)">Diamond Package – ₹24,999</option>
                        <option value="Premium Package (₹34,999)">Premium Package – ₹34,999</option>
                      </optgroup>
                      <optgroup label="Decorations & Photoshoots">
                        <option value="Birthday Celebrations">Birthday Celebrations</option>
                        <option value="Anniversary Decorations">Anniversary Decorations</option>
                        <option value="Proposal Decorations">Proposal Decorations</option>
                        <option value="Bride and Groom Decorations">Bride and Groom Decorations</option>
                        <option value="Wedding Decorations">Wedding Decorations</option>
                        <option value="Reception Decorations">Reception Decorations</option>
                        <option value="Pre-Wedding Photoshoots">Pre-Wedding Photoshoots</option>
                        <option value="Post-Wedding Photoshoots">Post-Wedding Photoshoots</option>
                        <option value="Custom Event Decorations">Custom Event Decorations</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate" className="form-label">Event Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requirements" className="form-label">Special Requirements / Resort Name</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="3"
                    placeholder="Tell us about the celebration venue, timing, custom cake flavors, or color theme..."
                    value={formData.requirements}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Submit Booking Enquiry
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
