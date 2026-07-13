import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowRight, ChevronRight, Terminal, Heart } from 'lucide-react';
import { Language, PROFILE_BIO } from '../data';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#guestbook');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden min-h-screen bg-[#0A0A0B]"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[35rem] h-[35rem] bg-[#2DD4BF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[20rem] h-[20rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Headline & Introduction */}
          <motion.div
            id="hero-content"
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-teal-950/20 border border-teal-500/20 rounded-full py-1.5 px-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DD4BF]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#2DD4BF] tracking-wider">
                {currentLang === 'en' ? 'AVAILABLE FOR FREELANCE & FULLTIME' : 'TERSEDIA UNTUK FREELANCE & FULLTIME'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.p variants={itemVariants} className="text-sm md:text-base font-mono font-semibold text-[#2DD4BF]">
                {currentLang === 'en' ? "Hi, my name is" : "Halo, nama saya adalah"}
              </motion.p>
              <motion.h1
                id="hero-name"
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight"
              >
                {PROFILE_BIO.name}
              </motion.h1>
              <motion.h2
                id="hero-title"
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-slate-400 tracking-tight max-w-[700px] md:min-h-[83px] flex items-center pl-0 ml-0"
              >
                {currentLang === 'en' ? 'Bridging Scientific Manuscripts & Technology' : 'Menjembatani Manuskrip Ilmiah dan Teknologi'}
              </motion.h2>
            </div>

            {/* Tagline / Subtitle */}
            <motion.p
              id="hero-tagline"
              variants={itemVariants}
              className="text-slate-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed"
            >
              {PROFILE_BIO.tagline[currentLang]}
            </motion.p>

            {/* Social Icons & CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <div className="flex items-center gap-4">
                <button
                  id="hero-btn-projects"
                  onClick={handleScrollToProjects}
                  className="group inline-flex items-center space-x-2 bg-white text-black hover:bg-[#2DD4BF] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-7 rounded-sm transition-all hover:shadow-lg hover:shadow-teal-500/15 active:scale-95 cursor-pointer"
                >
                  <span>{currentLang === 'en' ? 'View My Work' : 'Lihat Proyek Saya'}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-btn-contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center space-x-2 border border-white/20 hover:border-white bg-transparent hover:bg-white/5 text-white font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-7 rounded-sm transition-all active:scale-95 cursor-pointer"
                >
                  <span>{currentLang === 'en' ? 'Get In Touch' : 'Hubungi Saya'}</span>
                </button>
              </div>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-4 sm:border-l sm:border-slate-800 sm:pl-6 h-8 mt-2 sm:mt-0">
                <a
                  id="hero-social-github"
                  href={PROFILE_BIO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  id="hero-social-linkedin"
                  href={PROFILE_BIO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Immersive Visual / Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              id="hero-visual"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
              className="relative w-full max-w-sm"
            >
              {/* Spinning background neon ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-[#2DD4BF] rounded-2xl blur-xl opacity-20 animate-pulse pointer-events-none" />
              
              {/* Terminal Frame */}
              <div className="relative bg-[#0A0A0B] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0A0A0B] border-b border-white/10 font-mono">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#2DD4BF]/80 block"></span>
                  </div>
                  <span className="text-slate-400 text-xs">ahmad-profile.ts</span>
                  <Terminal className="h-3.5 w-3.5 text-slate-500" />
                </div>

                {/* Terminal Content (Profile Picture) */}
                <div className="p-4 flex flex-col items-center">
                  <div className="relative group w-48 h-48 rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0B] flex items-center justify-center">
                    <img
                      id="hero-avatar"
                      src="/src/assets/images/regenerated_image_1783742026474.png"
                      alt="Ahmad Syafii Avatar"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/10 to-transparent opacity-40" />
                  </div>

                  {/* Terminal Code lines underneath */}
                  <div className="w-full mt-4 bg-[#0A0A0B]/80 border border-white/5 rounded-xl p-3 font-mono text-xs leading-relaxed text-left text-slate-400">
                    <div className="text-slate-500 flex items-center space-x-1">
                      <span>$</span>
                      <span className="text-slate-300">whoami</span>
                    </div>
                    <div className="mt-1.5 grid grid-cols-3 gap-y-1">
                      <span className="text-[#2DD4BF] font-bold">Userinfo</span>
                      <span className="col-span-2 text-slate-300">Ahmad Syafi'i</span>
                      
                      <span className="text-[#2DD4BF] font-bold">Kernel</span>
                      <span className="col-span-2 text-slate-300">Blockchain & AI</span>
                      
                      <span className="text-[#2DD4BF] font-bold">Shell</span>
                      <span className="col-span-2 text-slate-300">IELTS B2 | Blockchain Investigator | Web3 | Philosophy</span>
                      
                      <span className="text-[#2DD4BF] font-bold">Uptime</span>
                      <span className="col-span-2 text-slate-300">
                        {currentLang === 'en' ? '2017 - 2026 (9+ Years)' : '2017 - 2026 (9+ tahun)'}
                      </span>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                      <span>status: active</span>
                      <span className="flex items-center gap-1">
                        Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />
                      </span>
                    </div>
                  </div>

                </div>

              </div>
              
              {/* Floating micro items for playfulness */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-[#0A0A0B]/90 border border-white/10 py-2 px-3 rounded-lg shadow-lg font-mono text-[11px] text-[#2DD4BF] flex items-center space-x-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]"></div>
                <span>Blockchain</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-[#0A0A0B]/90 border border-white/10 py-2 px-3 rounded-lg shadow-lg font-mono text-[11px] text-[#2DD4BF] flex items-center space-x-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]"></div>
                <span>Web3</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
