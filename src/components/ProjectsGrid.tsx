import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Language } from '../data';
import { Project } from '../types';
import { ExternalLink, Eye, Github, Cpu, Coins, FileText, Facebook, Linkedin } from 'lucide-react';

const SubstackIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.56 6.36H1.44V3.6h21.12v2.76zm0 5.16H1.44v-2.76h21.12v2.76zm-10.56 5.64L1.44 14.4v-2.76h21.12v2.76L12 17.16z" />
  </svg>
);

function getPlatformInfo(url: string, currentLang: Language, iconClass: string = "h-5 w-5") {
  const lowercaseUrl = url.toLowerCase();
  if (lowercaseUrl.includes('facebook.com')) {
    return {
      name: 'Facebook',
      icon: <Facebook className={iconClass} />,
      label: currentLang === 'en' ? 'Facebook Post' : 'Postingan Facebook',
      isRepo: false,
    };
  }
  if (lowercaseUrl.includes('linkedin.com')) {
    return {
      name: 'LinkedIn',
      icon: <Linkedin className={iconClass} />,
      label: currentLang === 'en' ? 'LinkedIn Post' : 'Postingan LinkedIn',
      isRepo: false,
    };
  }
  if (lowercaseUrl.includes('substack.com')) {
    return {
      name: 'Substack',
      icon: <SubstackIcon className={iconClass} />,
      label: currentLang === 'en' ? 'Substack Article' : 'Artikel Substack',
      isRepo: false,
    };
  }
  return {
    name: 'GitHub',
    icon: <Github className={iconClass} />,
    label: currentLang === 'en' ? 'GitHub Repository' : 'Repositori GitHub',
    isRepo: true,
  };
}

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
  currentLang: Language;
}

export default function ProjectsGrid({ onSelectProject, currentLang }: ProjectsGridProps) {
  const [filter, setFilter] = useState<'all' | 'scratch' | 'finance' | 'article'>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const renderCardImage = (proj: Project) => {
    const isError = imageErrors[proj.id];
    let bgClass = 'from-indigo-600 via-purple-600 to-slate-900';
    let Icon = FileText;
    let fallbackLabel = 'Document';

    if (proj.category === 'scratch') {
      bgClass = 'from-rose-600 via-orange-500 to-amber-700';
      Icon = Cpu;
      fallbackLabel = 'Scratch Automation';
    } else if (proj.category === 'finance') {
      bgClass = 'from-teal-600 via-emerald-600 to-[#111827]';
      Icon = Coins;
      fallbackLabel = 'DeFi & Finance';
    } else if (proj.category === 'article') {
      bgClass = 'from-indigo-600 via-violet-600 to-slate-950';
      Icon = FileText;
      fallbackLabel = 'Article & Philosophy';
    }

    if (isError) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${bgClass} flex flex-col items-center justify-center p-6 text-center relative group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
          <Icon className="h-10 w-10 text-white/80 mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase font-bold">
            {fallbackLabel}
          </span>
        </div>
      );
    }

    return (
      <img
        src={proj.imageUrl}
        alt={proj.title[currentLang]}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
        onError={() => setImageErrors((prev) => ({ ...prev, [proj.id]: true }))}
      />
    );
  };

  const filterOptions = [
    { key: 'all', label: { en: 'All Projects', id: 'Semua Proyek' } },
    { key: 'scratch', label: { en: 'Scratch', id: 'Scratch' } },
    { key: 'finance', label: { en: 'Finance', id: 'Finance' } },
    { key: 'article', label: { en: 'Article', id: 'Article' } },
  ] as const;

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono font-bold text-[#2DD4BF] uppercase tracking-widest"
          >
            {currentLang === 'en' ? '04 . HANDCRAFTED CREATIONS' : '04 . KREASI PILIHAN'}
          </motion.p>
          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-1 tracking-tight"
          >
            {currentLang === 'en' ? 'Featured Projects' : 'Proyek Unggulan'}
          </motion.h2>
          <div className="h-1 w-12 bg-[#2DD4BF] mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 border-b border-white/10 pb-4">
          {filterOptions.map((opt) => (
            <button
              id={`projects-filter-${opt.key}`}
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`py-2 px-4 rounded-lg text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                filter === opt.key
                  ? 'bg-[#2DD4BF] text-slate-950 shadow-md shadow-teal-500/10'
                  : 'text-slate-400 hover:text-white bg-[#0A0A0B] border border-white/10'
              }`}
            >
              <span>{opt.label[currentLang]}</span>
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                id={`project-card-${proj.id}`}
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-[#0A0A0B] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-black/25 transition-all h-full text-left"
              >
                {/* Project Image & quick hover triggers */}
                <div className="relative aspect-video overflow-hidden bg-[#0A0A0B] border-b border-white/10">
                  {renderCardImage(proj)}
                  
                  {/* Subtle glassmorphic categories badge */}
                  <div className="absolute top-4 left-4 bg-[#0A0A0B]/90 border border-white/10 py-1 px-3.5 rounded-full text-[10px] font-mono text-[#2DD4BF] font-bold uppercase tracking-wider">
                    {proj.category}
                  </div>

                  {/* Desktop overlay CTA menu */}
                  <div className="absolute inset-0 bg-[#0A0A0B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {(() => {
                      const platform = getPlatformInfo(proj.githubUrl, currentLang);
                      return (
                        <a
                          id={`project-icon-github-${proj.id}`}
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 bg-[#0A0A0B] text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-110 shadow-lg"
                          title={platform.label}
                        >
                          {platform.icon}
                        </a>
                      );
                    })()}
                    <button
                      id={`project-icon-view-${proj.id}`}
                      onClick={() => onSelectProject(proj)}
                      className="inline-flex items-center space-x-2 bg-white text-black hover:bg-[#2DD4BF] font-sans font-bold text-xs py-3 px-5 rounded-sm transition-all hover:scale-105 shadow-lg shadow-teal-500/10 cursor-pointer"
                    >
                      <Eye className="h-4 w-4" />
                      <span>{currentLang === 'en' ? 'Open Details' : 'Buka Detail'}</span>
                    </button>
                    {(getPlatformInfo(proj.githubUrl, currentLang).isRepo || proj.githubUrl !== proj.liveUrl) && (
                      <a
                        id={`project-icon-live-${proj.id}`}
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-[#0A0A0B] text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-110 shadow-lg"
                        title={currentLang === 'en' ? 'Live Preview' : 'Demo Langsung'}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Brief Info */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#2DD4BF] transition-colors">
                      {proj.title[currentLang]}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {proj.description[currentLang]}
                    </p>
                  </div>

                  {/* Technical list used */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono font-bold bg-[#0A0A0B] text-slate-400 border border-white/5 py-0.5 px-2 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="text-[9px] font-mono font-bold bg-[#0A0A0B] text-slate-500 border border-white/5 py-0.5 px-2 rounded-md">
                        +{proj.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Mobile Actions (Fallback since hover menu is tricky on touch) */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10 md:hidden">
                    <button
                      id={`project-mobile-details-${proj.id}`}
                      onClick={() => onSelectProject(proj)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg py-2.5 px-3 text-xs font-semibold cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>{currentLang === 'en' ? 'Details' : 'Detail'}</span>
                    </button>
                    {(() => {
                      const platform = getPlatformInfo(proj.liveUrl, currentLang, "h-3.5 w-3.5");
                      return (
                        <a
                          id={`project-mobile-live-${proj.id}`}
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center space-x-1.5 bg-[#2DD4BF] hover:bg-teal-400 text-slate-950 rounded-lg py-2.5 px-3 text-xs font-bold"
                        >
                          {platform.icon}
                          <span>
                            {platform.isRepo
                              ? 'Demo'
                              : (currentLang === 'en' ? 'Read' : 'Baca')}
                          </span>
                        </a>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
