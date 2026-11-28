import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { getWhatsAppUrl } from './utils/links';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl(
    'Hello Kodai Surprise Events, I would like to check availability for an event decoration or photoshoot.'
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:serviceId" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Actions */}
        <div className="floating-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-btn"
            aria-label="Chat with us on WhatsApp"
          >
            <span className="floating-wa-icon">💬</span>
            <span className="floating-wa-label">WhatsApp Us</span>
          </a>

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="floating-top-btn"
              aria-label="Scroll back to top"
            >
              ↑
            </button>
          )}
        </div>
      </div>
    </Router>
  );
}
