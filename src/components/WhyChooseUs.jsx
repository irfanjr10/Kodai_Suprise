import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🏔️',
      title: 'Local Kodaikanal Experts',
      description: 'We know the mountain terrain, misty micro-climates, and resort policies intimately, ensuring seamless coordination for your event.'
    },
    {
      icon: '🎨',
      title: 'Bespoke Aesthetic Design',
      description: 'From rustic pine forest vibes to royal floral arches, each celebration is custom-crafted to reflect your personal emotion and style.'
    },
    {
      icon: '💎',
      title: 'Transparent Pricing (₹)',
      description: 'Clear, itemized packages in Indian rupees with no unexpected surcharges or hidden fees on setup day.'
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
            We blend creative flair with dependable mountain logistics so you can sit back and savor every magical moment.
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
