import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🏔️',
      title: 'Thoughtful Event Planning',
      description: 'We coordinate each event carefully to make your celebration feel seamless and personal.'
    },
    {
      icon: '🎨',
      title: 'Bespoke Aesthetic Design',
      description: 'Each celebration is custom-crafted to reflect your personal taste and style.'
    },
    {
      icon: '💎',
      title: 'Transparent Pricing (₹)',
      description: 'Package options are clearly listed, with travel charges shared in advance when applicable.'
    },
    {
      icon: '⏱️',
      title: 'Guaranteed On-Time Setup',
      description: 'We value your surprise moments. Our team arrives early to complete decorations well before your loved ones walk in.'
    }
  ];

  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Your Trusted Event Partner in the Hills</h2>
          <p className="section-subtitle">
            We blend creative flair with dependable planning so you can sit back and savor every magical moment.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="reason-card">
              <div className="reason-icon-wrapper">
                <span className="reason-icon">{item.icon}</span>
              </div>
              <h3 className="reason-title">{item.title}</h3>
              <p className="reason-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
