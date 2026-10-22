import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const Footer: React.FC = () => {
  const { profile } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Work & Projects', path: '/work' },
    { label: 'Credentials', path: '/credentials' },
    { label: 'Journey', path: '/journey' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-[var(--surface-color)] border-t border-[var(--border-color)] text-[var(--text-color)] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[var(--border-color)]">
          {/* Col 1 & 2: Brand & Short Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-full bg-[var(--accent-color)] text-black font-heading font-extrabold flex items-center justify-center text-sm">
                {profile.initials}
              </span>
              <span className="font-heading font-bold text-lg tracking-wider uppercase text-[var(--text-color)]">
                {profile.name}
              </span>
            </Link>
            <p className="text-sm md:text-base text-[var(--muted-color)] max-w-sm font-sans leading-relaxed">
              {profile.tagline || 'Software engineer and creative developer engineering scalable, high-impact digital products.'}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-color)] bg-[var(--card-color)] border border-[var(--border-color)] px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {profile.availability}
              </span>
            </div>
          </div>

          {/* Col 3: Sitemap */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[var(--accent-color)] mb-4">
              Sitemap
            </h3>
            <ul className="space-y-2 text-sm text-[var(--muted-color)]">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[var(--accent-color)] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sitemap continued & Documents */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[var(--accent-color)] mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[var(--muted-color)]">
              {navLinks.slice(4).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[var(--accent-color)] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="hover:text-[var(--accent-color)] transition-colors inline-flex items-center gap-1 py-0.5 text-xs font-mono uppercase"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[var(--accent-color)] mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-[var(--muted-color)]">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[var(--accent-color)] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="hover:text-[var(--accent-color)] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                <span>{profile.location}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted-color)]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>DESIGNED & ARCHITECTED WITH CARE</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[var(--accent-color)] flex items-center gap-1 transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
