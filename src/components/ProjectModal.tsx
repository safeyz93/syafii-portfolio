import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Github, ExternalLink, Code, Layers, AlertCircle, CheckCircle2, Cpu, Coins, FileText } from 'lucide-react';
import { Project } from '../types';
import { Language } from '../data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export default function ProjectModal({ project, isOpen, onClose, currentLang }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project?.id]);

  const renderModalImage = () => {
    let bgClass = 'from-indigo-600 via-purple-600 to-slate-900';
    let Icon = FileText;
    let fallbackLabel = 'Document';

    if (project.category === 'scratch') {
      bgClass = 'from-rose-600 via-orange-500 to-amber-700';
      Icon = Cpu;
      fallbackLabel = 'Scratch Automation';
    } else if (project.category === 'finance') {
      bgClass = 'from-teal-600 via-emerald-600 to-[#111827]';
      Icon = Coins;
      fallbackLabel = 'DeFi & Finance';
    } else if (project.category === 'article') {
      bgClass = 'from-indigo-600 via-violet-600 to-slate-950';
      Icon = FileText;
      fallbackLabel = 'Article & Philosophy';
    }

    if (imageError) {
      return (
        <div className={`w-full h-full bg-gradient-to-br ${bgClass} flex flex-col items-center justify-center p-6 text-center relative`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
          <Icon className="h-12 w-12 text-white/80 mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase font-bold">
            {fallbackLabel}
          </span>
        </div>
      );
    }

    return (
      <img
        src={project.imageUrl}
        alt={project.title[currentLang]}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/90 backdrop-blur-md">
      {/* Modal Backdrop animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 cursor-pointer"
      />

      {/* Modal Dialog Content */}
      <motion.div
        id="project-detail-modal"
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative bg-[#0A0A0B] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row z-10"
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl border border-transparent hover:border-white/10 transition-all cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Column: Media Banner & Metadata */}
        <div className="md:w-5/12 bg-black/20 border-r border-white/10 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Visual Thumbnail */}
            <div className="relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0B]">
              {renderModalImage()}
              <div className="absolute top-3 left-3 bg-[#0A0A0B]/90 border border-white/10 py-1 px-3 rounded-full text-[10px] font-mono text-[#2DD4BF] font-bold uppercase tracking-wider shadow-lg">
                {project.category}
              </div>
            </div>

            {/* Title & Short Description */}
            <div className="text-left space-y-2.5">
              <h3 id="modal-project-title" className="text-xl md:text-2xl font-sans font-black text-white tracking-tight leading-tight">
                {project.title[currentLang]}
              </h3>
              <p className="text-sm font-sans text-slate-400 leading-relaxed text-justify">
                {project.description[currentLang]}
              </p>
            </div>

            {/* Technical Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono font-bold bg-[#0A0A0B] text-slate-300 border border-white/5 py-1 px-2.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions: Repo & Live links */}
          <div className="flex gap-3 pt-6 mt-6 border-t border-white/10">
            <a
              id="modal-btn-github"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#0A0A0B] hover:bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-bold text-xs py-3 px-4 rounded-sm transition-all"
            >
              <Github className="h-4 w-4" />
              <span>{currentLang === 'en' ? 'Code Repository' : 'Sumber Kode'}</span>
            </a>
            <a
              id="modal-btn-live"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#2DD4BF] hover:bg-teal-400 text-slate-950 font-sans font-black text-xs py-3 px-4 rounded-sm transition-all hover:shadow-lg hover:shadow-teal-500/20"
            >
              <ExternalLink className="h-4 w-4" />
              <span>{currentLang === 'en' ? 'Live Preview' : 'Demo Langsung'}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Challenges, features & Solutions */}
        <div className="md:w-7/12 p-6 md:p-8 space-y-6 overflow-y-auto text-left">
          
          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase flex items-center space-x-1.5">
              <Layers className="h-3.5 w-3.5" />
              <span>{currentLang === 'en' ? 'Project Overview' : 'Ikhtisar Proyek'}</span>
            </h4>
            <p className="text-sm font-sans text-slate-300 leading-relaxed text-justify">
              {project.longDescription[currentLang]}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase flex items-center space-x-1.5">
              <Code className="h-3.5 w-3.5" />
              <span>{currentLang === 'en' ? 'Core Capabilities' : 'Kapabilitas Utama'}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300 leading-relaxed text-justify">
                  <CheckCircle2 className="h-4 w-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                  <span>{feature[currentLang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/10">
            {/* Challenge */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 space-y-2">
              <h5 className="text-xs font-mono font-bold text-amber-400 tracking-wider uppercase flex items-center space-x-1.5">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{currentLang === 'en' ? 'Engineering Challenge' : 'Tantangan Rekayasa'}</span>
              </h5>
              <p className="text-xs font-sans text-slate-300 leading-relaxed text-justify">
                {project.challenges[currentLang]}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-teal-500/5 border border-teal-500/10 rounded-xl p-4 space-y-2">
              <h5 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>{currentLang === 'en' ? 'Applied Solution' : 'Solusi Yang Diterapkan'}</span>
              </h5>
              <p className="text-xs font-sans text-slate-300 leading-relaxed text-justify">
                {project.solutions[currentLang]}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              Ahmad Syafii Portfolio // c9108de9-2dc6-4c21-a852-bf408eaa5c24
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
