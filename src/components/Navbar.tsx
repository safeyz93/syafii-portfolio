import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Terminal, Code } from 'lucide-react';
import { Language, PROFILE_BIO } from '../data';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: { en: 'Home', id: 'Beranda' }, href: '#home' },
    { name: { en: 'About', id: 'Tentang' }, href: '#about' },
    { name: { en: 'Skills', id: 'Keahlian' }, href: '#skills' },
    { name: { en: 'Experience', id: 'Pengalaman' }, href: '#experience' },
    { name: { en: 'Projects', id: 'Proyek' }, href: '#projects' },
    { name: { en: 'Guestbook', id: 'Buku Tamu' }, href: '#guestbook' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 text-white font-mono group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-10 w-10 rounded-lg bg-teal-950/30 border border-teal-500/30 flex items-center justify-center group-hover:border-[#2DD4BF] transition-colors">
              <Terminal className="h-5 w-5 text-[#2DD4BF] group-hover:text-teal-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-none tracking-tighter">
                SYAFII<span className="text-[#2DD4BF]">.</span>
              </span>
              <span className="text-[10px] text-teal-400 font-medium tracking-widest mt-0.5 font-mono">
                TECH ENTHUSIAST
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  id={`desktop-nav-item-${item.href.replace('#', '')}`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-300 hover:text-[#2DD4BF] font-sans text-sm font-medium transition-colors"
                >
                  {item.name[currentLang]}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center border-l border-slate-800 pl-6 space-x-2">
              <Globe className="h-4 w-4 text-slate-400" />
              <button
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                className={`text-xs font-mono font-medium py-1 px-2 rounded-md transition-colors ${
                  currentLang === 'en'
                    ? 'bg-teal-500/10 text-[#2DD4BF] border border-teal-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-id"
                onClick={() => onLanguageChange('id')}
                className={`text-xs font-mono font-medium py-1 px-2 rounded-md transition-colors ${
                  currentLang === 'id'
                    ? 'bg-teal-500/10 text-[#2DD4BF] border border-teal-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ID
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Quick Lang Switcher for Mobile */}
            <button
              id="mobile-lang-toggle"
              onClick={() => onLanguageChange(currentLang === 'en' ? 'id' : 'en')}
              className="flex items-center space-x-1 text-slate-300 hover:text-[#2DD4BF] bg-slate-900 border border-slate-800 rounded-md py-1 px-2.5 font-mono text-xs"
            >
              <Globe className="h-3 w-3" />
              <span>{currentLang.toUpperCase()}</span>
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0A0B]/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  id={`mobile-nav-item-${item.href.replace('#', '')}`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-[#2DD4BF] hover:bg-teal-950/20 transition-all border border-transparent hover:border-teal-500/10"
                >
                  {item.name[currentLang]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
