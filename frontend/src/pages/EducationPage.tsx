import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';
import { initialEducationTimeline, initialSemesterGrades } from '../data/education';

export const EducationPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Academic Trajectory"
          title="Education"
          subtitle="Formal computer science foundation, collegiate honors, and semester performance milestones."
        />

        {/* Vertical Timeline of B.Tech, Class XII, Class X */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[var(--border-color)] space-y-12 my-16 ml-2 sm:ml-4">
          {initialEducationTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[var(--surface-color)] border-2 border-[var(--accent-color)] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-color)] inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)] font-semibold w-fit">
                    {item.grade}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)] mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm sm:text-base font-sans text-[var(--muted-color)] mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[var(--accent-color)]" />
                  {item.institution}
                </p>

                <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[var(--muted-color)] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Semester-wise Academic Performance */}
        <div className="mt-20 pt-16 border-t border-[var(--border-color)]">
          <SectionHeader
            number="02"
            label="Semester Performance"
            title="Coursework & GPA Records"
            subtitle="Semester-by-semester grade-point averages with course breakdowns."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialSemesterGrades.map((sem, idx) => {
              const percentage = (sem.gpa / sem.maxGpa) * 100;

              return (
                <motion.div
                  key={sem.semester}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] flex flex-col justify-between hover:border-[var(--accent-color)] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-bold text-lg text-[var(--text-color)]">
                        {sem.semester}
                      </span>
                      <span className="font-mono text-xs font-extrabold text-[var(--accent-color)] bg-[var(--card-color)] px-2.5 py-1 rounded-full border border-[var(--border-color)]">
                        GPA: {sem.gpa.toFixed(2)} / {sem.maxGpa.toFixed(1)}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mb-6 space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-[var(--muted-color)]">
                        <span>Score Efficiency</span>
                        <span>{percentage.toFixed(1)}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
                          className="h-full bg-[var(--accent-color)] rounded-full"
                        />
                      </div>
                    </div>

                    {/* Key Courses */}
                    <div className="space-y-1.5 pt-3 border-t border-[var(--border-color)]">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-color)] flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-[var(--accent-color)]" />
                        Key Courses Completed
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sem.courses.map((course) => (
                          <span
                            key={course}
                            className="text-[11px] font-sans px-2.5 py-1 rounded-lg bg-[var(--card-color)] text-[var(--text-color)]/80 border border-[var(--border-color)]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
