import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, BookOpen, Search, Briefcase, Users, HeartHandshake, Mic } from 'lucide-react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';
import { initialAspirations, initialJourneyTimeline } from '../data/journey';

export const JourneyPage: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-[var(--accent-color)]" />;
      case 'Club':
      case 'Leadership':
        return <Users className="w-4 h-4 text-[var(--accent-color)]" />;
      case 'Volunteering':
        return <HeartHandshake className="w-4 h-4 text-[var(--accent-color)]" />;
      case 'Event':
      default:
        return <Mic className="w-4 h-4 text-[var(--accent-color)]" />;
    }
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Direction & Aspirations"
          title="Career Journey"
          subtitle="My professional roadmap, technological curiosity, and collegiate leadership experiences."
        />

        {/* 4 Cards: Interests, Goals, Learning Now, Looking For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {/* Card 1: Career Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--accent-color)]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[var(--text-color)] mb-4">
                Core Interests
              </h3>
              <div className="space-y-4">
                {initialAspirations.interests.map((item) => (
                  <div key={item.title}>
                    <p className="font-heading font-bold text-base text-[var(--text-color)] mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-[var(--muted-color)] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Strategic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--accent-color)]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[var(--text-color)] mb-4">
                Strategic Goals
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-color)] block mb-1">
                    Near-Term Objective (2025 - 2026)
                  </span>
                  <p className="text-sm sm:text-base text-[var(--text-color)]/90 leading-relaxed font-sans">
                    {initialAspirations.shortTermGoal}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-color)] block mb-1">
                    Long-Term Vision
                  </span>
                  <p className="text-sm sm:text-base text-[var(--text-color)]/90 leading-relaxed font-sans">
                    {initialAspirations.longTermGoal}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: What I am Learning Now */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--accent-color)]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[var(--text-color)] mb-4">
                What I am Learning Now
              </h3>
              <ul className="space-y-3">
                {initialAspirations.learningNow.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] text-sm font-sans text-[var(--text-color)] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 4: What I am Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center mb-6 text-[var(--accent-color)]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-[var(--text-color)] mb-4">
                What I am Looking For
              </h3>
              <ul className="space-y-3">
                {initialAspirations.lookingFor.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] text-sm font-sans text-[var(--text-color)] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Vertical Timeline of Experience & Leadership */}
        <div className="mt-20 pt-16 border-t border-[var(--border-color)]">
          <SectionHeader
            number="02"
            label="Experience Milestones"
            title="Timeline & Activities"
            subtitle="Chronological track record across internships, club leadership, volunteering and speaking."
          />

          <div className="relative pl-6 sm:pl-10 border-l-2 border-[var(--border-color)] space-y-12 my-16 ml-2 sm:ml-4">
            {initialJourneyTimeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[var(--surface-color)] border-2 border-[var(--accent-color)] flex items-center justify-center group-hover:scale-125 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-color)]">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)] flex items-center gap-1.5 w-fit">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)]">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted-color)] mb-4">
                    {item.organization}
                  </p>

                  <p className="text-sm sm:text-base font-sans text-[var(--text-color)]/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="text-xs sm:text-sm text-[var(--muted-color)] flex items-start gap-2">
                        <span className="text-[var(--accent-color)] font-bold">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
