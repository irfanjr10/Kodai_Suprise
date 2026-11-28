import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Summary */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/brand-mark.jpg" className="footer-logo-icon" alt="" aria-hidden="true" />
            <span className="footer-logo-title">Kodai Surprise</span>
          </div>
          <p className="footer-about">
            Bespoke event styling and photography for proposals, intimate celebrations, and weddings.
          </p>
          <div className="footer-social-links">
            {siteConfig.social.instagram && <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">Ig</a>}
            {siteConfig.social.facebook && <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">Fb</a>}
            {siteConfig.social.youtube && <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn">Yt</a>}
            {siteConfig.social.whatsapp && <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">Wa</a>}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Pages</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services & Packages</Link></li>
            <li><Link to="/reviews">Customer Reviews</Link></li>
            <li><Link to="/contact">Book an Event</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/packages/birthday-celebrations">Birthday Celebrations</Link></li>
            <li><Link to="/packages/wedding-decorations">Wedding Decorations</Link></li>
            <li><Link to="/packages/proposal-decorations">Proposal Decorations</Link></li>
            <li><Link to="/packages/anniversary-decorations">Anniversary Setups</Link></li>
            <li><Link to="/packages/pre-wedding-photoshoots">Pre-Wedding Photoshoots</Link></li>
            <li><Link to="/packages/custom-event-decorations">Custom Event Styling</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-direct-contact">
            <p><strong>Phone:</strong> <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phoneDisplay}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Kodai Surprise Events. All rights reserved.
          </p>
          <p className="footer-tagline">
            Crafted with care by Kodai Surprise Events.
          </p>
        </div>
      </div>
    </footer>
  );
}
