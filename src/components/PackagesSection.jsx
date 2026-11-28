import React from 'react';
import { packagesData } from '../data/packagesData';
import PackageCard from './PackageCard';

export default function PackagesSection({ onSelectPackage }) {
  return (
    <section id="packages" className="packages-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Birthday Surprises</span>
          <h2 className="section-title">Transparent Birthday Packages</h2>
          <p className="section-subtitle">
            Choose from five birthday packages with clear pricing and inclusions.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packagesData.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={onSelectPackage}
            />
          ))}
        </div>
        <p className="section-subtitle">
          No travel charges are collected for events within a 10 km radius of Kodaikanal. Beyond 10 km, travel charges are calculated according to distance.
        </p>

        {/* Customization Callout */}
        <div className="package-custom-note">
          <div className="custom-note-icon">💡</div>
          <div className="custom-note-text">
            <h4>Need Custom Add-ons?</h4>
            <p>
              We can customize cake flavours, flower colors, LED numeric lights, and specific song playlists to match your loved one’s personality. Speak with our team for custom requests!
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-outline-gold custom-note-btn"
          >
            Custom Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
