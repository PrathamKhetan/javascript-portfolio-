import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';

export const WorkPage: React.FC = () => {
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = ['All', 'Cybersecurity', 'AI', 'Database', 'Engineering'];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return (
      project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      project.title.toLowerCase().includes(activeCategory.toLowerCase())
    );
  });

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Portfolio Directory"
          title="All Projects"
          subtitle="Comprehensive index of open-source libraries, distributed systems, web architectures, and client projects."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-10 pb-6 border-b border-[var(--border-color)]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[var(--accent-color)]" />
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[var(--accent-color)] text-black font-bold shadow-md'
                  : 'bg-[var(--surface-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] border border-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Numbered Project Rows */}
        <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {filteredProjects.map((project, idx) => {
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
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
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
                    <div>
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight transition-all duration-300 ${
                          isHovered ? 'text-black translate-x-3' : 'text-[var(--text-color)]'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm mt-2 max-w-xl transition-colors duration-300 font-sans ${
                          isHovered ? 'text-black/80' : 'text-[var(--muted-color)]'
                        }`}
                      >
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right: Category, Year, Tech Stack & Action */}
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

                    <div className="hidden sm:flex items-center gap-1.5 flex-wrap max-w-xs">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors duration-300 ${
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

                {/* Floating Preview Thumbnail */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="hidden xl:block absolute right-44 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-72 h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-black"
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
    </PageTransition>
  );
};
