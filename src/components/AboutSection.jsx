import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Visual Imagery Column */}
          <div className="about-images-col">
            <div className="about-image-wrapper primary-img">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Romantic candlelight cabana setup"
                className="about-img"
              />
              <div className="about-experience-badge">
                <span className="badge-icon">01</span>
                <span className="badge-text">Thoughtfully styled celebrations</span>
              </div>
            </div>
            <div className="about-image-wrapper secondary-img">
              <img
                src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80"
                alt="Floral event backdrop in the hills"
                className="about-img"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="about-content-col">
            <span className="section-tag">About Kodai Surprise</span>
            <h2 className="section-title">
              Thoughtful celebrations, shaped in the Princess of Hill Stations
            </h2>
            <p className="about-lead">
              Welcome to <strong>Kodai Surprise Events</strong>. We are an event decoration and photography team creating thoughtful celebrations.
            </p>
            <p className="about-body">
              Whether you are planning a secret birthday surprise, a fairytale candlelit proposal, or a grand wedding, we orchestrate every detail with artistry and punctuality.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mission-vision-grid">
              <div className="mv-card">
                <div className="mv-icon">01</div>
                <div>
                  <h3 className="mv-title">Our Mission</h3>
                  <p className="mv-desc">
                    To deliver heartwarming, stress-free celebration setups tailored to each client.
                  </p>
                </div>
              </div>

              <div className="mv-card">
                <div className="mv-icon">02</div>
                <div>
                  <h3 className="mv-title">Our Vision</h3>
                  <p className="mv-desc">
                    To be the most trusted, creative celebration and destination photography team across the Dindigul hill district.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
