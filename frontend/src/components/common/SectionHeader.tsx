import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Numbered Category Label */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase text-[var(--accent-color)] mb-3 ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
        <span>{number} / {label}</span>
      </motion.div>

      {/* Main Big Editorial Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg text-[var(--muted-color)] max-w-2xl font-sans ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
