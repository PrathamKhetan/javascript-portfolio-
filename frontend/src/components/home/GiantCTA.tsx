import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { MagneticButton } from '../common/MagneticButton';

export const GiantCTA: React.FC = () => {
  const { profile } = useData();

  return (
    <section className="py-24 md:py-36 px-4 sm:px-8 md:px-12 bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase text-[var(--accent-color)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
          <span>03 / INITIATE COLLABORATION</span>
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)] max-w-5xl mx-auto leading-none"
        >
          LET'S BUILD <br />
          <span className="text-[var(--accent-color)] text-outline hover:text-[var(--accent-color)] transition-colors">
            SOMETHING GREAT
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-base sm:text-xl text-[var(--muted-color)] max-w-2xl mx-auto font-sans"
        >
          Whether you're looking for an engineering intern, full-time campus recruit, or an ambitious technical collaborator, my inbox is always open.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Contact Button */}
          <Link to="/contact">
            <MagneticButton className="px-8 py-4 rounded-full bg-[var(--accent-color)] text-black dark:text-black light:text-white font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider hover:scale-105 shadow-xl transition-all flex items-center gap-2 group">
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </Link>

          {/* Resume Button */}
          <a
            href={profile.resumeUrl}
            download
            className="group"
          >
            <MagneticButton className="px-8 py-4 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] font-heading font-bold text-sm sm:text-base uppercase tracking-wider hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
              <span className="font-mono text-xs text-[var(--muted-color)] group-hover:text-[var(--accent-color)]">(PDF)</span>
            </MagneticButton>
          </a>
        </motion.div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
