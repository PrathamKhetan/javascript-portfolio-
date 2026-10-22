import { initialProfileData } from '../data/profile';
import { initialProjectsData } from '../data/projects';
import { initialCertificatesData, initialAchievementsData } from '../data/certificates';
import { ProfileData, ProjectItem, CertificateItem, AchievementItem } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function fetchProfile(): Promise<ProfileData> {
  try {
    const res = await fetch(`${API_BASE}/profile`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.profile || initialProfileData;
  } catch {
    // Graceful fallback to local editable data
    return initialProfileData;
  }
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  try {
    const res = await fetch(`${API_BASE}/projects`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.projects || initialProjectsData;
  } catch {
    return initialProjectsData;
  }
}

export async function fetchCertificates(): Promise<{
  certificates: CertificateItem[];
  achievements: AchievementItem[];
}> {
  try {
    const res = await fetch(`${API_BASE}/certificates`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return {
      certificates: data.certificates || initialCertificatesData,
      achievements: data.achievements || initialAchievementsData,
    };
  } catch {
    return {
      certificates: initialCertificatesData,
      achievements: initialAchievementsData,
    };
  }
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        success: false,
        message: data.error || data.message || 'Failed to submit contact message. Please try again.',
      };
    }

    return {
      success: true,
      message: data.message || 'Thank you! Your message has been received.',
    };
  } catch {
    return {
      success: false,
      message: 'Network error: could not connect to backend. Please reach out directly via email.',
    };
  }
}

export async function recordVisit(): Promise<void> {
  try {
    await fetch(`${API_BASE}/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: window.location.pathname }),
    });
  } catch {
    // Ignore visit tracking errors in offline or local mode
  }
}

export async function fetchStats(): Promise<{ uniqueVisitors: number; totalVisits: number } | null> {
  try {
    const res = await fetch(`${API_BASE}/stats`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
