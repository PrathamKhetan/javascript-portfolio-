import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight, Github, Linkedin, Instagram, FileText } from 'lucide-react';
import { useData } from '../../context/DataContext';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { number: '01', title: 'HOME', path: '/' },
  { number: '02', title: 'ABOUT', path: '/about' },
  { number: '03', title: 'EDUCATION', path: '/education' },
  { number: '04', title: 'WORK', path: '/work' },
  { number: '05', title: 'CREDENTIALS', path: '/credentials' },
  { number: '06', title: 'JOURNEY', path: '/journey' },
  { number: '07', title: 'GALLERY', path: '/gallery' },
  { number: '08', title: 'CONTACT', path: '/contact' },
];

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { profile } = useData();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 50px) 40px)',
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 50px) 40px)',
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkContainerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.25,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const linkItemVariants = {
    closed: { y: 60, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[80] bg-dark-bg text-dark-text flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-y-auto selection:bg-dark-accent selection:text-black"
        >
          {/* Top Header inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-mono text-xs tracking-widest text-dark-muted uppercase">
              INDEX // NAVIGATION DIRECTORY
            </span>
            <button
              onClick={onClose}
              className="p-3 rounded-full border border-white/20 hover:border-dark-accent hover:text-dark-accent transition-colors flex items-center gap-2 group"
              aria-label="Close menu"
            >
              <span className="font-mono text-xs uppercase tracking-wider group-hover:translate-x-[-2px] transition-transform">
                CLOSE
              </span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Links List */}
          <div className="my-auto py-8">
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-2 md:space-y-4 max-w-4xl"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <div key={link.path} className="overflow-hidden">
                    <motion.div variants={linkItemVariants}>
                      <Link
                        to={link.path}
                        className={`group flex items-baseline gap-4 md:gap-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase transition-all duration-300 ${
                          isActive
                            ? 'text-dark-accent translate-x-3'
                            : 'text-dark-text/80 hover:text-dark-accent hover:translate-x-4'
                        }`}
                      >
                        <span className="font-mono text-sm sm:text-lg md:text-xl font-normal text-dark-muted group-hover:text-dark-accent transition-colors">
                          {link.number}
                        </span>
                        <span>{link.title}</span>
                        <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-dark-accent" />
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.nav>
          </div>

          {/* Bottom Footer inside Menu */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm font-mono text-dark-muted">
            <div>
              <p className="text-white font-sans font-semibold mb-1">Direct Inquiries</p>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-dark-accent transition-colors block"
              >
                {profile.email}
              </a>
              <span className="text-[11px] text-dark-muted/70">{profile.location}</span>
            </div>

            <div>
              <p className="text-white font-sans font-semibold mb-1">Resume & Credentials</p>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 hover:text-dark-accent transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Download Curriculum Vitae (PDF)
              </a>
            </div>

            <div>
              <p className="text-white font-sans font-semibold mb-2">Social Channels</p>
              <div className="flex items-center gap-4">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dark-accent transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dark-accent transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dark-accent transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
