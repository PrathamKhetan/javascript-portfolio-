import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../common/SectionHeader';
import { CountUpNumber } from '../common/CountUpNumber';

export const AboutStatement: React.FC = () => {
  const { profile } = useData();

  // Helper to highlight words from profile.aboutHighlights
  const renderStatementWithHighlights = () => {
    const text = profile.aboutStatement || '';
    const highlights = (profile.aboutHighlights || []).map((h) => h.toLowerCase());

    const words = text.split(/\s+/);
    return (
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-heading font-medium leading-[1.65] md:leading-[1.75] text-[var(--text-color)] tracking-normal">
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          const isHighlighted =
            cleanWord.length > 3 &&
            highlights.some((h) => h.includes(cleanWord));
          return (
            <React.Fragment key={idx}>
              <span
                className={
                  isHighlighted
                    ? 'text-[var(--accent-color)] font-semibold transition-colors hover:underline decoration-2 underline-offset-8'
                    : 'text-[var(--text-color)]/90'
                }
              >
                {word}
              </span>
              {' '}
            </React.Fragment>
          );
        })}
      </p>
    );
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 md:px-12 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="About Statement"
          title="Philosophy & Focus"
          subtitle="Engineering resilient digital platforms with high aesthetic sensitivity."
        />

        {/* Big Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {renderStatementWithHighlights()}

          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[var(--accent-color)] hover:translate-x-2 transition-transform group"
            >
              <span>Read Full Biography & Technical Skillsets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Count-up Stats Row */}
        <div className="mt-20 pt-12 border-t border-[var(--border-color)] grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Stat 1: Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2 p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]"
          >
            <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--accent-color)]">
              <CountUpNumber value={profile.stats?.projects ?? 15} suffix="+" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]">
              Completed Projects
            </p>
            <p className="text-xs text-[var(--muted-color)]/80 font-sans">
              Production web applications & systems
            </p>
          </motion.div>

          {/* Stat 2: Academic CGPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]"
          >
            <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-color)]">
              <CountUpNumber value={profile.stats?.cgpa ?? 9.0} decimals={1} suffix=" /10" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]">
              Cumulative CGPA
            </p>
            <p className="text-xs text-[var(--muted-color)]/80 font-sans">
              Top 5% of B.Tech CSE engineering cohort
            </p>
          </motion.div>

          {/* Stat 3: Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]"
          >
            <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--accent-color)]">
              <CountUpNumber value={profile.stats?.certificates ?? 12} suffix="+" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]">
              Verified Credentials
            </p>
            <p className="text-xs text-[var(--muted-color)]/80 font-sans">
              Meta, AWS & accredited industry specializations
            </p>
          </motion.div>

          {/* Stat 4: Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2 p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]"
          >
            <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-color)]">
              <CountUpNumber value={profile.stats?.hackathons ?? 6} suffix="+" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]">
              Hackathons & Contests
            </p>
            <p className="text-xs text-[var(--muted-color)]/80 font-sans">
              SIH Winner & GDSC Solution Finalist
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
