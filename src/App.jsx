import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { getWhatsAppUrl } from './utils/links';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { AdminAuthProvider, RequireAdmin } from './context/AdminAuthProvider.jsx';
import './styles/admin.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function PublicLayout() {
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
    <>
      <ScrollToTop />
      <div className="app-layout">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="main-content">
          <Outlet />
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
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <AdminAuthProvider>
              <RequireAdmin />
            </AdminAuthProvider>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:serviceId" element={<Packages />} />
          <Route path="/reviews" element={<Gallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
