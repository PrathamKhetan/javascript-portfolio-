import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { useTime } from '../../hooks/useTime';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu }) => {
  const { theme, toggleTheme } = useTheme();
  const { profile } = useData();
  const localTime = useTime(profile.timezone || 'Asia/Kolkata');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-4 sm:px-6 py-2.5 rounded-full border shadow-sm">
        {/* Initials Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] rounded-lg p-1"
          aria-label="Navigate to Home"
        >
          <div className="w-9 h-9 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] flex items-center justify-center font-heading font-extrabold text-sm sm:text-base text-[var(--accent-color)] group-hover:scale-105 transition-transform">
            {profile.initials || 'YN'}
          </div>
          <span className="hidden sm:inline font-heading font-bold text-xs tracking-wider uppercase text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
            {profile.name}
          </span>
        </Link>

        {/* Live Local Time & Pulsing Availability Pill */}
        <div className="hidden lg:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[var(--text-color)] font-medium">AVAILABLE</span>
          <span className="text-[var(--muted-color)]">•</span>
          <span className="text-[var(--muted-color)] tracking-wide">{localTime || 'LIVE'} IST</span>
        </div>

        {/* Action Controls: Theme Toggle & Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile indicator */}
          <div className="flex lg:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--surface-color)] text-[11px] font-mono text-[var(--muted-color)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{localTime ? localTime.slice(0, 5) : 'LIVE'}</span>
          </div>

          {/* Theme Toggle Button */}
          <MagneticButton
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)]"
          >
            <span className="sr-only">Toggle theme (Current: {theme})</span>
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-violet-600" />
            )}
          </MagneticButton>

          {/* Menu Button */}
          <MagneticButton
            onClick={onOpenMenu}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--accent-color)] text-black dark:text-black light:text-white font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)]"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>MENU</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
