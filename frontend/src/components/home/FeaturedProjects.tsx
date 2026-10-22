import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../common/SectionHeader';

export const FeaturedProjects: React.FC = () => {
  const { projects } = useData();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Take top 3 featured projects
  const featured = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 md:px-12 border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <SectionHeader
            number="02"
            label="Selected Works"
            title="Featured Projects"
            subtitle="Architectural case studies demonstrating full-stack engineering and scalable execution."
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[var(--accent-color)] hover:translate-x-2 transition-transform self-start md:self-auto mb-12"
          >
            <span>View All ({projects.length}) Works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Numbered Rows */}
        <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {featured.map((project, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative block py-8 md:py-12 transition-all duration-500 overflow-hidden"
              >
                {/* Background hover fill with accent color */}
                <motion.div
                  className="absolute inset-0 bg-[var(--accent-color)] -z-10 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-4 md:px-8">
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className={`font-mono text-sm sm:text-base md:text-xl font-bold transition-colors duration-300 ${
                        isHovered ? 'text-black' : 'text-[var(--muted-color)]'
                      }`}
                    >
                      {project.number}
                    </span>
                    <h3
                      className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight transition-all duration-300 ${
                        isHovered ? 'text-black translate-x-3' : 'text-[var(--text-color)]'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Right: Category, Year, Tags & Arrow */}
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-6 lg:justify-end">
                    <span
                      className={`font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                        isHovered ? 'text-black/80 font-semibold' : 'text-[var(--muted-color)]'
                      }`}
                    >
                      {project.category}
                    </span>

                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border transition-colors duration-300 ${
                        isHovered
                          ? 'border-black/30 text-black font-semibold'
                          : 'border-[var(--border-color)] text-[var(--muted-color)]'
                      }`}
                    >
                      {project.year}
                    </span>

                    {/* Tech stack badge preview */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors duration-300 ${
                            isHovered
                              ? 'bg-black/10 text-black'
                              : 'bg-[var(--surface-color)] text-[var(--muted-color)]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'border-black text-black bg-black/10 rotate-45 scale-110'
                          : 'border-[var(--border-color)] text-[var(--text-color)]'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Optional Floating Project Thumbnail Preview for Desktop */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="hidden xl:block absolute right-32 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-64 h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
