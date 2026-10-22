import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar, Tag } from 'lucide-react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';
import { initialGalleryPhotos } from '../data/gallery';
import { GalleryPhoto } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto: GalleryPhoto | null =
    selectedIndex !== null ? initialGalleryPhotos[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! + 1) % initialGalleryPhotos.length));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? initialGalleryPhotos.length - 1 : prev! - 1
    );
  }, [selectedIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Visual Moments"
          title="Campus & Event Gallery"
          subtitle="Glimpses from hackathon stages, collegiate symposiums, code sprints, and community workshops."
        />

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 my-12">
          {initialGalleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onClick={() => setSelectedIndex(idx)}
              className="break-inside-avoid group cursor-pointer relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-color)] shadow-md"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-color)] mb-1">
                  {photo.category} • {photo.date}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 font-sans mb-3">
                  {photo.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-color)]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
                <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent-color)]">
                  <span>
                    {(selectedIndex! + 1).toString().padStart(2, '0')} / {initialGalleryPhotos.length.toString().padStart(2, '0')}
                  </span>
                  <span>•</span>
                  <span>{selectedPhoto.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline font-mono text-xs text-white/50 mr-2">
                    Use ← → arrow keys to navigate • Esc to close
                  </span>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="relative my-auto flex items-center justify-center max-w-5xl mx-auto w-full max-h-[70vh]">
                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Animated Image */}
                <motion.img
                  key={selectedPhoto.id}
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[68vh] max-w-full rounded-2xl object-contain shadow-2xl"
                />

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="max-w-2xl mx-auto text-center text-white space-y-1">
                <h3 className="font-heading font-bold text-lg sm:text-xl">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans">
                  {selectedPhoto.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[var(--accent-color)] pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedPhoto.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {selectedPhoto.category}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
