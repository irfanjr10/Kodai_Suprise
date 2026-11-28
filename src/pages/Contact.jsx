import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/links';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Birthday Celebrations',
    selectedPackage: '',
    eventDate: '',
    requirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  // If user navigated here with state from a Service or Package button:
  useEffect(() => {
    if (location.state) {
      if (location.state.eventType) {
        setFormData((prev) => ({
          ...prev,
          eventType: location.state.eventType,
          selectedPackage: location.state.package || ''
        }));
      }
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappMessage = `Hello Kodai Surprise Events, I would like to book an event:
- Event Type: ${formData.eventType}
${formData.selectedPackage ? `- Selected Package: ${formData.selectedPackage}\n` : ''}- Date: ${formData.eventDate || 'Upcoming'}
- Client Name: ${formData.name || 'Friend'}`;

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="contact-page-view royal-page-bg">
      <section
        className="page-hero-banner royal-hero-banner"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(21,55,41,.88) 0%, rgba(33,79,58,.68) 58%, rgba(33,79,58,.4) 100%), url('https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container">
          <span className="section-tag royal-gold-pill">⚜️ VIP Concierge</span>
          <h1 className="page-hero-title royal-heading">Reservations & Enquiries</h1>
          <p className="page-hero-desc">
            Reserve your preferred date for a bespoke luxury event, resort setup, or private celebration.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Left Card: Info & WhatsApp */}
            <div className="contact-info-card royal-info-card">
              <div className="concierge-crown">👑</div>
              <h3 className="contact-card-title">VIP Hospitality Desk</h3>
              <p className="contact-card-desc">
                Tell us about your event and we’ll help plan it to your requirements.
              </p>

              <div className="info-items-list">
                <div className="info-item">
                  <span className="info-icon">✦</span>
                  <div>
                    <h4>Event Travel</h4>
                    <p>No travel charges are collected for events within a 10 km radius of Kodaikanal. Beyond 10 km, travel charges are calculated according to distance.</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">01</span>
                  <div>
                    <h4>Priority Concierge Line</h4>
                    <p><a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phoneDisplay}</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">02</span>
                  <div>
                    <h4>Official Concierge Email</h4>
                    <p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
                  </div>
                </div>
              </div>

              <div className="quick-whatsapp-box royal-wa-box">
                <h4>Instant WhatsApp Assistance</h4>
                <p>Connect immediately with our chief designer for fast dates & decor advice.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp royal-whatsapp-btn"
                  style={{ width: '100%' }}
                >
                  <span>💬 Chat with Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Card: Dynamic Enquiry Form */}
            <div className="contact-form-wrapper royal-form-card">
              {formSubmitted ? (
                <div className="form-success-box">
                  <span className="success-icon">👑</span>
                  <h3>Thank You, {formData.name || 'Friend'}!</h3>
                  <p>
                    Your reservation request for <strong>{formData.eventType}</strong> {formData.selectedPackage ? `(${formData.selectedPackage})` : ''} has been received. Our VIP desk will reach you shortly on <strong>{formData.phone}</strong>.
                  </p>
                  <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp royal-whatsapp-btn"
                    >
                      Connect on WhatsApp as well →
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          eventType: 'Birthday Celebrations',
                          selectedPackage: '',
                          eventDate: '',
                          requirements: ''
                        });
                      }}
                      className="btn btn-outline-gold royal-outline-gold-btn"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <h3 className="form-title">
                    {formData.selectedPackage ? `Reserve: ${formData.selectedPackage}` : 'VIP Event Reservation Form'}
                  </h3>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        min={today}
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input royal-input"
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
                        className="form-input royal-input"
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
                        className="form-input royal-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventType" className="form-label">Event Service *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="form-select royal-input"
                      >
                        <option value="Birthday Celebrations">Birthday Celebrations</option>
                        <option value="Anniversary Decorations">Anniversary Decorations</option>
                        <option value="Proposal Decorations">Proposal Decorations</option>
                        <option value="Bride and Groom Decorations">Bride and Groom Decorations</option>
                        <option value="Wedding Decorations">Wedding Decorations</option>
                        <option value="Reception Decorations">Reception Decorations</option>
                        <option value="Pre-Wedding Photoshoots">Pre-Wedding Photoshoots</option>
                        <option value="Post-Wedding Photoshoots">Post-Wedding Photoshoots</option>
                        <option value="Custom Event Decorations">Custom Event Decorations</option>
                      </select>
                    </div>
                  </div>

                  {formData.selectedPackage && (
                    <div className="form-group">
                      <label htmlFor="selectedPackage" className="form-label">Selected Tier & Price</label>
                      <input
                        type="text"
                        id="selectedPackage"
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleChange}
                        className="form-input royal-input royal-selected-tier-input"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="eventDate" className="form-label">Celebration Date *</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="form-input royal-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements" className="form-label">Resort Name & Bespoke Wishes</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows="3"
                      placeholder="Tell us about your event, preferred setup, or custom theme..."
                      value={formData.requirements}
                      onChange={handleChange}
                      className="form-textarea royal-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn royal-gold-btn">
                    Submit VIP Reservation
                    <span className="btn-arrow">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
