import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { eventPackagesData, packagesData } from '../data/packagesData';
import { getWhatsAppUrl } from '../utils/links';

export default function Packages() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Find the selected service from URL, default to 'birthday-celebrations'
  const currentService = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  // Derive singular/clean event label
  const getEventLabel = (title) => {
    if (title.includes('Birthday')) return 'Birthday';
    if (title.includes('Wedding') && !title.includes('Pre') && !title.includes('Post')) return 'Wedding';
    if (title.includes('Proposal')) return 'Proposal';
    if (title.includes('Anniversary')) return 'Anniversary';
    if (title.includes('Bride and Groom') || title.includes('Bride & Groom')) return 'Bride & Groom';
    if (title.includes('Reception')) return 'Reception';
    if (title.includes('Pre-Wedding')) return 'Pre-Wedding Shoot';
    if (title.includes('Post-Wedding')) return 'Post-Wedding Shoot';
    if (title.includes('Custom')) return 'Custom Event';
    return 'Event';
  };

  const eventLabel = getEventLabel(currentService.title);
  const eventArtwork = {
    'birthday-celebrations': { icon: '🎂', theme: 'birthday', caption: 'A little moment, made magical' },
    'anniversary-decorations': { icon: '🌹', theme: 'romance', caption: 'Celebrate your story together' },
    'proposal-decorations': { icon: '💍', theme: 'proposal', caption: 'One unforgettable question' },
    'bride-groom-decorations': { icon: '💐', theme: 'wedding', caption: 'A thoughtful welcome for two' },
    'wedding-decorations': { icon: '💒', theme: 'wedding', caption: 'A beautiful beginning, together' },
    'reception-decorations': { icon: '🥂', theme: 'celebration', caption: 'Gather, celebrate, remember' },
    'pre-wedding-photoshoots': { icon: '📷', theme: 'photography', caption: 'Your story, beautifully captured' },
    'post-wedding-photoshoots': { icon: '📸', theme: 'photography', caption: 'Keep the feeling close' },
    'custom-event-decorations': { icon: '✨', theme: 'bespoke', caption: 'Your vision, thoughtfully styled' }
  }[currentService.id] || { icon: '✨', theme: 'bespoke', caption: 'Made for your special occasion' };
  const packageOptions = currentService.id === 'birthday-celebrations'
    ? packagesData
    : eventPackagesData[currentService.id] || [];

  const handleSelectPackage = (pkg) => {
    const dynamicPackageTitle = `${pkg.name} ${eventLabel} Package (${pkg.priceFormatted})`;
    navigate('/contact', {
      state: {
        eventType: currentService.title,
        package: dynamicPackageTitle
      }
    });
  };

  // Distinct tier metadata to make cards look attractive according to price
  const getTierMeta = (id) => {
    switch (id) {
      case 'silver':
        return {
          tierClass: 'tier-silver',
          levelTag: 'Standard Collection'
        };
      case 'gold':
        return {
          tierClass: 'tier-gold',
          levelTag: 'Elegance Collection'
        };
      case 'platinum':
        return {
          tierClass: 'tier-platinum',
          levelTag: 'Grand Signature Tier'
        };
      case 'diamond':
        return {
          tierClass: 'tier-diamond',
          levelTag: 'Opulence Collection'
        };
      case 'premium':
        return {
          tierClass: 'tier-premium',
          levelTag: 'Ultra-Luxury Pinnacle'
        };
      default:
        return {
          tierClass: '',
          levelTag: 'Bespoke Package'
        };
    }
  };

  return (
    <div className="packages-page-view royal-page-bg">
      {/* Event Themed Royal Hero Banner */}
      <section
        className="event-packages-hero royal-event-hero"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(21,55,41,.88) 0%, rgba(33,79,58,.68) 58%, rgba(33,79,58,.4) 100%), url(${currentService.image})`
        }}
      >
        <div className="container event-hero-container">
          <span className="section-tag royal-gold-pill">{currentService.category} Collection</span>
          <h1 className="event-hero-title royal-heading">
            {packageOptions.length ? `${eventLabel} Celebration Packages` : `${currentService.title} Planning`}
          </h1>
          <p className="event-hero-desc">
            {currentService.fullDesc}
          </p>

          <div className="event-quick-meta">
            <span className="meta-pill royal-pill">Thoughtfully planned setup</span>
            <span className="meta-pill royal-pill">
              {packageOptions.length ? 'Five package options' : 'Planned to your requirements'}
            </span>
          </div>
        </div>
      </section>

      {/* Event Switcher Tab Bar */}
      <section className="event-switcher-bar royal-switcher-bar">
        <div className="container">
          <div className="switcher-header">
            <span className="switcher-hint">Choose an event type:</span>
          </div>
          <div className="event-tabs-scroll">
            {servicesData.map((service) => {
              const isActive = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => navigate(`/packages/${service.id}`)}
                  className={`event-tab-btn royal-tab ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-dot"></span>
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Tiered Packages Grid */}
      <section className="packages-grid-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag royal-gold-pill">
              {packageOptions.length ? 'Find your collection' : 'Tailored to your event'}
            </span>
            <h2 className="section-title">
              {packageOptions.length ? `Bespoke ${eventLabel} Packages & Pricing` : 'Custom Event Planning'}
            </h2>
            <p className="section-subtitle">
              {packageOptions.length
                ? 'Explore five thoughtfully tiered packages with clear inclusions and pricing.'
                : 'This event will be planned according to your requirements, with charges quoted accordingly.'}
            </p>
          </div>

          {packageOptions.length > 0 && (
            <div className="royal-packages-grid">
              {packageOptions.map((pkg) => {
              const tier = getTierMeta(pkg.id);
              const dynamicPackageName = `${pkg.name} ${eventLabel}`;
              const priceLabel = pkg.priceFormatted;
              const whatsappUrl = getWhatsAppUrl(
                `Hello Kodai Surprise Events, I would like to enquire about the "${dynamicPackageName} Package" (${priceLabel}).`
              );

              return (
                <article
                  key={pkg.id}
                  className={`royal-package-card ${tier.tierClass} package-theme-${eventArtwork.theme}`}
                >
                  <div className={`package-art-panel package-art-${eventArtwork.theme}`}>
                    <span className="package-art-kicker">{currentService.category}</span>
                    <span className="package-art-illustration" aria-hidden="true">{eventArtwork.icon}</span>
                    <span className="package-art-caption">{eventArtwork.caption}</span>
                  </div>

                  <div
                    className="package-price-medallion"
                    aria-label={`Price: ${priceLabel}`}
                  >
                    <span className="package-price-label">From</span>
                    <span className="package-price-value">{pkg.priceFormatted}</span>
                  </div>

                  <div className="royal-package-header">
                    <div className="package-tier-row">
                      <span className="tier-level-tag">{tier.levelTag}</span>
                      {pkg.badge && <span className="package-featured-badge">{pkg.badge}</span>}
                    </div>
                    <h3 className="royal-package-name">{dynamicPackageName}</h3>
                    <p className="royal-package-tagline">{pkg.tagline}</p>
                  </div>

                  <div className="royal-package-body">
                    <span className="royal-inclusions-label">Exclusive Inclusions:</span>
                    <ul className="royal-inclusions-list">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="royal-inclusion-item">
                          <span className="royal-bullet">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="royal-package-footer">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp royal-whatsapp-btn"
                    >
                      <span>💬 Enquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleSelectPackage(pkg)}
                      className="btn btn-primary royal-select-btn"
                    >
                      Book {pkg.name} {eventLabel}
                    </button>
                  </div>
                </article>
              );
              })}
            </div>
          )}

          {packageOptions.length ? (
            <>
              <p className="section-subtitle">
                No travel charges are collected for events within a 10 km radius of Kodaikanal. Beyond 10 km, travel charges are calculated according to distance.
              </p>
              <div className="royal-concierge-card">
                <div className="concierge-crest">⚜️</div>
                <div className="concierge-info">
                  <h3>Need a Custom Package Detail?</h3>
                  <p>Contact us to discuss custom requests for your celebration.</p>
                </div>
                <button
                  onClick={() => navigate('/contact', { state: { eventType: currentService.title } })}
                  className="btn btn-primary royal-gold-btn"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Custom Enquiry
                </button>
              </div>
            </>
          ) : (
            <div className="royal-concierge-card">
              <div className="concierge-crest">✦</div>
              <div className="concierge-info">
                <h3>Plan This Event With Us</h3>
                <p>
                  We’ll plan this event according to your requirements and share the charges accordingly. No travel charges are collected for events within a 10 km radius of Kodaikanal. Beyond 10 km, travel charges are calculated according to distance.
                </p>
              </div>
              <button
                onClick={() => navigate('/contact', { state: { eventType: currentService.title } })}
                className="btn btn-primary royal-gold-btn"
                style={{ whiteSpace: 'nowrap' }}
              >
                Request a Quote
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
