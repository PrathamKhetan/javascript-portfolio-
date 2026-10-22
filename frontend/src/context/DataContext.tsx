import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProfileData, ProjectItem, CertificateItem, AchievementItem } from '../types';
import { initialProfileData } from '../data/profile';
import { initialProjectsData } from '../data/projects';
import { initialCertificatesData, initialAchievementsData } from '../data/certificates';
import { fetchProfile, fetchProjects, fetchCertificates, recordVisit } from '../services/api';

interface DataContextType {
  profile: ProfileData;
  projects: ProjectItem[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
  isLoading: boolean;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjectsData);
  const [certificates, setCertificates] = useState<CertificateItem[]>(initialCertificatesData);
  const [achievements, setAchievements] = useState<AchievementItem[]>(initialAchievementsData);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [profData, projData, certData] = await Promise.all([
        fetchProfile(),
        fetchProjects(),
        fetchCertificates(),
      ]);

      setProfile(profData);
      setProjects(projData);
      setCertificates(certData.certificates);
      setAchievements(certData.achievements);
    } catch {
      // Fallback already handled inside services/api
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    recordVisit();
  }, []);

  return (
    <DataContext.Provider
      value={{
        profile,
        projects,
        certificates,
        achievements,
        isLoading,
        refreshData: loadData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
