import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // Springs for smooth lagging motion of outer ring
  const cursorX = useSpring(-100, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(-100, { damping: 28, stiffness: 350 });

  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-card, .hover-target');
        setIsHovered(!!interactive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Lagging outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 64 : 34,
          height: isHovered ? 64 : 34,
          borderColor: isHovered ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.45)',
          backgroundColor: isHovered ? 'rgba(198, 255, 61, 0.1)' : 'transparent',
          transition: { type: 'spring', damping: 25, stiffness: 300 },
        }}
      />

      {/* Instant tiny center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none bg-[var(--accent-color)]"
        style={{
          transform: `translate3d(${dotPos.x - 4}px, ${dotPos.y - 4}px, 0)`,
          transition: 'transform 0.04s linear',
        }}
      />
    </div>
  );
};
