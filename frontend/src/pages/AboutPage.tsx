import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Compass, CheckCircle2, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';

export const AboutPage: React.FC = () => {
  const { profile } = useData();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[var(--accent-color)]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[var(--accent-color)]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[var(--accent-color)]" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-[var(--accent-color)]" />;
    }
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Profile & Core Focus"
          title="About Me"
          subtitle="A deeper dive into my engineering journey, architectural principles, and technical proficiencies."
        />

        {/* Intro Paragraphs & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--muted-color)] leading-relaxed font-sans"
          >
            {profile.introParagraphs.map((para, i) => (
              <p key={i} className="text-[var(--text-color)]/90">
                {para}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs text-[var(--text-color)]">
              <span className="flex items-center gap-2 bg-[var(--surface-color)] border border-[var(--border-color)] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)]" />
                Cybersecurity & AppSec Practitioner
              </span>
              <span className="flex items-center gap-2 bg-[var(--surface-color)] border border-[var(--border-color)] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)]" />
                Tata Power Cyber Security Intern
              </span>
              <span className="flex items-center gap-2 bg-[var(--surface-color)] border border-[var(--border-color)] px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)]" />
                Symbiosis Institute of Technology
              </span>
            </div>
          </motion.div>

          {/* Quick-Fact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.quickFacts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(fact.icon)}
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] mb-1">
                  {fact.label}
                </p>
                <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16 pt-16 border-t border-[var(--border-color)]">
          <SectionHeader
            number="02"
            label="Technical Expertise"
            title="Skills & Technologies"
            subtitle="Curated languages, frameworks, cloud primitives, and development workflows I leverage daily."
          />

          <div className="space-y-12">
            {profile.skills.map((categoryGroup, catIdx) => (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="p-6 md:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-4 h-4 text-[var(--accent-color)]" />
                  <h3 className="font-heading font-extrabold text-xl md:text-2xl uppercase tracking-tight text-[var(--text-color)]">
                    {categoryGroup.category}
                  </h3>
                </div>

                {/* Tilt Chip Cloud */}
                <div className="flex flex-wrap gap-3">
                  {categoryGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="group cursor-default inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-300"
                    >
                      <span className="font-heading font-bold text-sm text-[var(--text-color)] group-hover:text-black transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-color)] group-hover:text-black/70 px-2 py-0.5 rounded-full bg-[var(--surface-color)] group-hover:bg-black/10 transition-colors">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
