/**
 * Types and interfaces for Ahmad Syafii's Portfolio Application.
 */

export interface Skill {
  id: string;
  name: { en: string; id: string };
  category: 'islamic_science' | 'literacy' | 'finance' | 'soft';
  level: number; // 0 to 100
  icon: string; // Lucide icon name
  description: { en: string; id: string };
}

export interface Project {
  id: string;
  title: { en: string; id: string };
  description: { en: string; id: string };
  longDescription: { en: string; id: string };
  category: 'scratch' | 'finance' | 'article';
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  features: { en: string; id: string }[];
  challenges: { en: string; id: string };
  solutions: { en: string; id: string };
}

export interface Experience {
  id: string;
  role: { en: string; id: string };
  company: { en: string; id: string };
  period: { en: string; id: string };
  description: { en: string; id: string };
  achievements: { en: string; id: string }[];
  skillsUsed: string[];
}

export interface GuestbookMessage {
  id: string;
  name: string;
  role: string;
  message: string;
  timestamp: string;
  avatarSeed: string;
}
