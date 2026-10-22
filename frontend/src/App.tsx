import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { useLenis } from './hooks/useLenis';
import { Preloader } from './components/common/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { FullscreenMenu } from './components/common/FullscreenMenu';
import { Footer } from './components/common/Footer';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { JourneyPage } from './pages/JourneyPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [isPreloaderActive, setIsPreloaderActive] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] selection:bg-[var(--accent-color)] selection:text-black">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Fullscreen Initial Preloader */}
      {isPreloaderActive && (
        <Preloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Thin Scroll Progress Bar */}
      <ScrollProgress />

      {/* Fixed Header Navbar */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Fullscreen Overlay Menu with Circular Clip Reveal */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Animated Route Transitions */}
      <main className="w-full">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Consistent Footer */}
      <Footer />
    </div>
  );
};
