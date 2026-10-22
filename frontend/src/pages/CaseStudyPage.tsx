import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, Layers, User, Tag } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PageTransition } from '../components/common/PageTransition';
import { MagneticButton } from '../components/common/MagneticButton';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = useData();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl font-heading font-extrabold text-[var(--text-color)] mb-4">
            PROJECT NOT FOUND
          </h2>
          <p className="text-[var(--muted-color)] mb-6">
            The case study you are searching for does not exist or has been archived.
          </p>
          <Link
            to="/work"
            className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-black font-heading font-bold text-xs uppercase tracking-wider"
          >
            Back to All Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/work')}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works Directory</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--accent-color)] uppercase tracking-wider">
            <span>{project.number}</span>
            <span>/</span>
            <span>{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[var(--muted-color)] max-w-4xl font-sans leading-relaxed">
            {project.summary}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MagneticButton className="px-7 py-3.5 rounded-full bg-[var(--accent-color)] text-black dark:text-black light:text-white font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:scale-105 shadow-lg transition-all flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </MagneticButton>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MagneticButton className="px-7 py-3.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl mb-16 relative"
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] flex items-center gap-1.5 mb-1">
              <User className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              My Role
            </span>
            <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
              {project.role}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              Timeline
            </span>
            <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
              {project.year}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              Category
            </span>
            <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
              {project.category}
            </p>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] flex items-center gap-1.5 mb-1">
              <Tag className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Dive: Overview, Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text-color)] mb-4">
                01 / Architectural Overview
              </h2>
              <p className="text-base sm:text-lg text-[var(--muted-color)] leading-relaxed font-sans">
                {project.overview}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]">
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-[var(--text-color)] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Engineering Challenge
                </h3>
                <p className="text-sm text-[var(--muted-color)] leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)]">
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-[var(--text-color)] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]" />
                  Adopted Solution
                </h3>
                <p className="text-sm text-[var(--muted-color)] leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text-color)] mb-6">
                02 / Core Features & Capabilities
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--surface-color)] border border-[var(--border-color)] flex items-start gap-3 text-sm sm:text-base text-[var(--text-color)]/90"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Screenshots Gallery Column */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-heading font-extrabold text-xl uppercase tracking-tight text-[var(--text-color)]">
              Screenshots & Mockups
            </h2>
            <div className="space-y-4">
              {project.screenshots.map((shot, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-md group"
                >
                  <img
                    src={shot}
                    alt={`${project.title} screenshot ${sIdx + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-[var(--border-color)] flex items-center justify-between">
          <Link
            to="/work"
            className="font-mono text-xs uppercase tracking-widest text-[var(--muted-color)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>

          <Link
            to="/contact"
            className="font-mono text-xs uppercase tracking-widest text-[var(--accent-color)] hover:underline flex items-center gap-2"
          >
            <span>Discuss This Project</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
