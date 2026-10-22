import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    // Check if user already saw preloader in this session to prevent annoyance on multiple reloads if needed,
    // or run every time as requested for college evaluation. We will run it cleanly on initial load.
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 1;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 900);
        }, 300);
      } else {
        setCount(current);
      }
    }, 25);

    const safetyTimeout = setTimeout(() => {
      setIsFinished(true);
      onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-14 bg-dark-bg text-dark-text select-none cursor-wait"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs md:text-sm tracking-widest uppercase font-mono text-dark-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-dark-accent animate-ping" />
              SYSTEM INITIALIZING
            </span>
            <span>PORTFOLIO // 2026</span>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="font-heading font-extrabold text-[18vw] leading-none text-dark-accent tracking-tighter"
              >
                {count}%
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 font-mono text-xs md:text-sm tracking-widest text-dark-muted uppercase text-center"
            >
              Curating editorial engineering artifacts...
            </motion.p>
          </div>

          {/* Bottom Progress Tracker */}
          <div className="space-y-3">
            <div className="w-full h-[2px] bg-dark-border/40 overflow-hidden">
              <motion.div
                className="h-full bg-dark-accent"
                style={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-dark-muted">
              <span>DESIGN • LOGIC • ARCHITECTURE</span>
              <span>STANDBY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
