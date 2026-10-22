import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram, FileText, Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useTime } from '../hooks/useTime';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeader } from '../components/common/SectionHeader';
import { submitContactForm } from '../services/api';
import { MagneticButton } from '../components/common/MagneticButton';

export const ContactPage: React.FC = () => {
  const { profile } = useData();
  const localTime = useTime(profile.timezone || 'Asia/Kolkata');

  // Click to copy state
  const [copied, setCopied] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // bot trap
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || formData.name.length < 2) {
      setFormStatus('error');
      setStatusMessage('Name must be at least 2 characters long.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setFormStatus('error');
      setStatusMessage('Message must be at least 10 characters long.');
      return;
    }

    setFormStatus('loading');
    setStatusMessage('');

    const res = await submitContactForm(formData);

    if (res.success) {
      setFormStatus('success');
      setStatusMessage(res.message || 'Your message has been sent successfully! I will reply shortly.');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } else {
      setFormStatus('error');
      setStatusMessage(res.message || 'Failed to submit. Please try reaching out directly via email.');
    }
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          label="Direct Correspondence"
          title="Contact"
          subtitle="Let's discuss internship opportunities, software architecture, technical roles, or collegiate collaborations."
        />

        {/* Huge Headline */}
        <div className="my-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tight text-[var(--text-color)]"
          >
            LET'S START A <br />
            <span className="text-[var(--accent-color)] text-outline hover:text-[var(--accent-color)] transition-colors">
              CONVERSATION.
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Direct Details, Click-to-copy, Socials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Click-to-Copy Email Element */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] block">
                Primary Email Address
              </span>
              <button
                onClick={handleCopyEmail}
                className="w-full text-left p-4 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all flex items-center justify-between group"
                aria-label="Click to copy email address"
              >
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-5 h-5 text-[var(--accent-color)] shrink-0" />
                  <span className="font-heading font-bold text-base sm:text-lg text-[var(--text-color)] truncate">
                    {profile.email}
                  </span>
                </div>
                <div className="ml-2 px-3 py-1.5 rounded-full bg-[var(--surface-color)] font-mono text-xs flex items-center gap-1.5 shrink-0 text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Quick Details Cards: Phone, Location, Live Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="p-5 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-color)] block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${profile.phone}`}
                    className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-color)] block">
                    Physical Location
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface-color)] border border-[var(--border-color)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--card-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-color)] block">
                    Live Local Time
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-base text-[var(--text-color)]">
                    {localTime || 'Calculating...'} IST
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons & Resume Download */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted-color)] block">
                External Profiles & Dossier
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-2 font-mono text-xs"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-2 font-mono text-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all flex items-center gap-2 font-mono text-xs"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="px-4 py-2.5 rounded-full bg-[var(--accent-color)] text-black dark:text-black light:text-white hover:opacity-90 transition-all flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] shadow-xl relative">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text-color)] mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-[var(--muted-color)] mb-8 font-sans">
                Fill in the details below. Messages are validated, stored securely, and notified instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from legitimate humans, traps automated spam bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]"
                  >
                    Your Name <span className="text-[var(--accent-color)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder:text-[var(--muted-color)]/50 focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]"
                  >
                    Your Email Address <span className="text-[var(--accent-color)]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder:text-[var(--muted-color)]/50 focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-[var(--muted-color)]"
                  >
                    Your Message <span className="text-[var(--accent-color)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your proposition, internship query, or greetings here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] text-[var(--text-color)] placeholder:text-[var(--muted-color)]/50 focus:outline-none focus:border-[var(--accent-color)] transition-colors font-sans text-sm resize-none"
                  />
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <MagneticButton
                  onClick={() => {}}
                  className="w-full py-4 rounded-2xl bg-[var(--accent-color)] text-black dark:text-black light:text-white font-heading font-extrabold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
