import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-color)] mb-4">
          ERROR // 404
        </span>
        <h1 className="text-6xl sm:text-8xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)] mb-4">
          PAGE NOT FOUND
        </h1>
        <p className="text-[var(--muted-color)] max-w-md mb-8 font-sans">
          The requested coordinate does not exist in this portfolio index.
        </p>
        <Link
          to="/"
          className="px-8 py-3.5 rounded-full bg-[var(--accent-color)] text-black font-heading font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </PageTransition>
  );
};
