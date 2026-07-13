import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Heart, Terminal } from 'lucide-react';
import { Language, LANGUAGES } from './data';
import { Project } from './types';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import SkillsMatrix from './components/SkillsMatrix';
import Timeline from './components/Timeline';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectModal from './components/ProjectModal';
import Guestbook from './components/Guestbook';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id'); // Default to Indonesian for immediate localization
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to toggle the "Scroll to Top" indicator
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] antialiased overflow-x-hidden">
      
      {/* Dynamic Header / Navigation */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Main Core View Layout sections */}
      <main className="relative">
        <Hero currentLang={currentLang} />
        <Stats currentLang={currentLang} />
        <About currentLang={currentLang} />
        <SkillsMatrix currentLang={currentLang} />
        <Timeline currentLang={currentLang} />
        <ProjectsGrid onSelectProject={setSelectedProject} currentLang={currentLang} />
        <Guestbook currentLang={currentLang} />
      </main>

      {/* Fullscreen Overlay Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            currentLang={currentLang}
          />
        )}
      </AnimatePresence>

      {/* Footer Details block */}
      <footer id="main-footer" className="bg-[#0A0A0B] border-t border-white/10 py-12 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-center sm:text-left">
          
          {/* Logo & Status */}
          <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs">
            <div className="h-7 w-7 rounded-md bg-teal-950/20 border border-teal-500/30 flex items-center justify-center">
              <Terminal className="h-3.5 w-3.5 text-[#2DD4BF]" />
            </div>
            <span>© {new Date().getFullYear()} Ahmad Syafii. All rights reserved.</span>
          </div>

          {/* Core Sign-off credit */}
          <div className="flex items-center space-x-1 text-slate-500 text-xs font-mono">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </div>

        </div>
      </footer>

      {/* Animated Scroll to Top floating trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-md border border-white/10 text-slate-400 hover:text-[#2DD4BF] hover:border-teal-500/30 shadow-lg cursor-pointer transition-all active:scale-90"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
