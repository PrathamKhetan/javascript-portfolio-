import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      {/* Wipe overlay covering screen on transition */}
      <motion.div
        className="fixed inset-0 z-[90] bg-[var(--accent-color)] pointer-events-none origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed inset-0 z-[89] bg-[var(--surface-color)] pointer-events-none origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
};
