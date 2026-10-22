import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, FileText, X, Eye, Filter, Calendar } from 'lucide-react';
import { useData } from '../context/DataContext';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';
import { CertificateItem } from '../types';

export const CredentialsPage: React.FC = () => {
  const { certificates, achievements } = useData();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Course' | 'Internship' | 'Hackathon'>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filterOptions: ('All' | 'Course' | 'Internship' | 'Hackathon')[] = [
    'All',
    'Course',
    'Internship',
    'Hackathon',
  ];

  const filteredCerts = certificates.filter((cert) => {
    if (activeFilter === 'All') return true;
    return cert.type === activeFilter;
  });

  // Handle ESC key for modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        {/* Achievements Section */}
        <SectionHeader
          number="01"
          label="Distinctions & Honors"
          title="Achievements"
          subtitle="Competitive coding ranks, national hackathon podium finishes, and academic felicitations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--accent-color)] font-semibold">
                    {item.rankBadge}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted-color)]">{item.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[var(--muted-color)] mb-4">
                  {item.organization}
                </p>
                <p className="text-sm text-[var(--text-color)]/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="pt-16 border-t border-[var(--border-color)]">
          <SectionHeader
            number="02"
            label="Industry Specializations"
            title="Certificates"
            subtitle="Verified credentials issued by accredited global cloud platforms, software companies, and collegiate hackathons."
          />

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-10 pb-6 border-b border-[var(--border-color)]">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              Category:
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === opt
                    ? 'bg-[var(--accent-color)] text-black font-bold shadow-md'
                    : 'bg-[var(--surface-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] border border-[var(--border-color)]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Certificate Image Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-black/20">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {cert.type}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
                    <Eye className="w-4 h-4 text-[var(--accent-color)]" />
                    <span>Quick View</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-color)] mb-2">
                      <span>{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors mb-3">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--muted-color)]">
                    <span className="truncate max-w-[180px]">ID: {cert.credentialId}</span>
                    <span className="text-[var(--accent-color)] flex items-center gap-1 font-semibold">
                      Inspect
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick-View Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Modal Top Header */}
                <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[var(--accent-color)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-color)]">
                      {selectedCert.type} Certificate
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full hover:bg-[var(--card-color)] text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[var(--border-color)]">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text-color)] mb-2">
                      {selectedCert.title}
                    </h3>
                    <p className="font-sans text-base text-[var(--muted-color)]">
                      Issued by <strong className="text-[var(--text-color)]">{selectedCert.issuer}</strong> on {selectedCert.issueDate}
                    </p>
                  </div>

                  {/* Credential ID Banner */}
                  <div className="p-4 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                    <div>
                      <span className="text-[var(--muted-color)] block text-[10px] uppercase">
                        Credential ID
                      </span>
                      <span className="text-[var(--text-color)] font-bold">
                        {selectedCert.credentialId}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Authentic & Verified</span>
                    </div>
                  </div>

                  {/* Skills Acquired */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--muted-color)] mb-3">
                      Skills & Topics Validated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="p-6 border-t border-[var(--border-color)] bg-[var(--card-color)] flex flex-wrap items-center justify-end gap-3">
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="px-5 py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-color)] font-heading font-bold text-xs uppercase tracking-wider hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Download Original PDF</span>
                  </a>

                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[var(--accent-color)] text-black dark:text-black light:text-white font-heading font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify at Issuer</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
