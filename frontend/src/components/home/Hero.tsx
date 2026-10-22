import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const Hero: React.FC = () => {
  const { profile } = useData();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax spring for the arch portrait
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    mouseX.set(x * 18);
    mouseY.set(y * 18);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Letter reveal variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const firstNameLetters = (profile.firstName || 'YOUR').split('');
  const lastNameLetters = (profile.lastName || 'NAME').split('');

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden px-4 sm:px-8 md:px-12"
    >
      {/* Top Meta info */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] pt-2 pb-6 border-b border-[var(--border-color)]/60">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-color)]" />
          <span>PORTFOLIO / CA3 ARCHIVE & PLACEMENT RESUME</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{profile.title}</span>
          <span>•</span>
          <span className="text-[var(--text-color)]">{profile.location}</span>
        </div>
      </div>

      {/* Main Center Stage: Huge Name & Arch Portrait */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Giant Typography */}
        <div className="lg:col-span-8 flex flex-col z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="select-none"
          >
            {/* First Name - Filled */}
            <div className="overflow-hidden flex flex-wrap leading-none">
              {firstNameLetters.map((letter, idx) => (
                <motion.span
                  key={`first-${idx}`}
                  variants={letterVariants}
                  className="font-heading font-extrabold text-[15vw] sm:text-[13vw] lg:text-[9.5vw] tracking-tighter text-[var(--text-color)] inline-block uppercase"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Last Name - Outlined */}
            <div className="overflow-hidden flex flex-wrap leading-none -mt-2 sm:-mt-4 lg:-mt-6">
              {lastNameLetters.map((letter, idx) => (
                <motion.span
                  key={`last-${idx}`}
                  variants={letterVariants}
                  className="font-heading font-extrabold text-[15vw] sm:text-[13vw] lg:text-[9.5vw] tracking-tighter text-outline inline-block uppercase hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Subtitle / Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 md:mt-8 max-w-xl flex items-start gap-3"
          >
            <ArrowDownRight className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-1" />
            <p className="text-base sm:text-lg text-[var(--muted-color)] leading-relaxed font-sans">
              {profile.tagline || 'Building resilient distributed architectures and avant-garde interactive web experiences.'}
            </p>
          </motion.div>
        </div>

        {/* Right Col: Arch Portrait & Rotating Badge */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
          {/* Rotating Circular 'Open to Work' Badge */}
          <div className="absolute -top-6 -left-4 sm:-left-8 z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center bg-[var(--surface-color)] border border-[var(--border-color)] shadow-xl"
            >
              <svg className="w-full h-full p-1.5" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] uppercase font-mono tracking-widest fill-[var(--text-color)] font-semibold">
                  <textPath href="#circlePath">
                    • OPEN TO WORK • HIRE ME • 2025 •
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-3 h-3 rounded-full bg-[var(--accent-color)]" />
            </motion.div>
          </div>

          {/* Arch Shape Portrait with Parallax */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[430px] arch-mask border-2 border-[var(--border-color)] bg-[var(--surface-color)] shadow-2xl overflow-hidden group"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Two Horizontal Marquee Bands Scrolling in Opposite Directions */}
      <div className="w-full mt-6 space-y-3 overflow-hidden select-none">
        {/* Top Marquee (Scrolling Left) */}
        <div className="w-full bg-[var(--surface-color)] border-y border-[var(--border-color)] py-2.5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-left">
            {[...profile.marqueeRolesTop, ...profile.marqueeRolesTop].map((role, i) => (
              <span
                key={`top-${i}`}
                className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--text-color)] px-6 flex items-center gap-4"
              >
                <span>{role}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Scrolling Right) */}
        <div className="w-full bg-[var(--card-color)] border-y border-[var(--border-color)] py-2.5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-right">
            {[...profile.marqueeRolesBottom, ...profile.marqueeRolesBottom].map((role, i) => (
              <span
                key={`bottom-${i}`}
                className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--muted-color)] px-6 flex items-center gap-4"
              >
                <span>{role}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
