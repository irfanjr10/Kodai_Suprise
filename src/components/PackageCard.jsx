import React from 'react';
import { getWhatsAppUrl } from '../utils/links';

export default function PackageCard({ pkg, onSelectPackage }) {
  const { name, priceFormatted, badge, highlight, tagline, inclusions } = pkg;

  // Direct WhatsApp booking message
  const whatsappUrl = getWhatsAppUrl(
    `Hello Kodai Surprise Events, I would like to enquire about the "${name}" Birthday Package (${priceFormatted}) in Kodaikanal.`
  );

  return (
    <div className={`package-card ${highlight ? 'highlighted' : ''}`}>
      {/* Popular Badge */}
      {badge && (
        <div className="package-badge-ribbon">
          <span>{badge}</span>
        </div>
      )}

      <div className="package-header">
        <h3 className="package-name">{name} Package</h3>
        <p className="package-tagline">{tagline}</p>
        <div className="package-price-wrap">
          <span className="package-price">{priceFormatted}</span>
          <span className="package-price-note">All-inclusive setup</span>
        </div>
      </div>

      <div className="package-body">
        <span className="package-inclusions-label">Package Inclusions:</span>
        <ul className="package-inclusions-list">
          {inclusions.map((item, idx) => (
            <li key={idx} className="inclusion-item">
              <span className="inclusion-icon">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="package-footer">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp package-cta-whatsapp"
        >
          <span>💬 Enquire on WhatsApp</span>
        </a>

        <button
          onClick={() => onSelectPackage(pkg)}
          className={`btn ${highlight ? 'btn-primary' : 'btn-outline-gold'} package-cta-details`}
        >
          Book This Package
        </button>
      </div>
    </div>
  );
}
