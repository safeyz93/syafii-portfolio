import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES, Language } from '../data';

interface TimelineProps {
  currentLang: Language;
}

export default function Timeline({ currentLang }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono font-bold text-[#2DD4BF] uppercase tracking-widest"
          >
            {currentLang === 'en' ? '03 . CAREER TIMELINE' : '03 . GARIS WAKTU KARIR'}
          </motion.p>
          <motion.h2
            id="experience-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-1 tracking-tight"
          >
            {currentLang === 'en' ? 'Work Experience' : 'Pengalaman Kerja'}
          </motion.h2>
          <div className="h-1 w-12 bg-[#2DD4BF] mt-4 mx-auto rounded-full" />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-8">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                id={`timeline-item-${exp.id}`}
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6 md:pl-10 text-left"
              >
                {/* Bullet node on timeline line */}
                <span className={`absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                  isExpanded
                    ? 'bg-[#2DD4BF] border-[#2DD4BF] shadow-[0_0_8px_rgba(45,212,191,0.5)]'
                    : 'bg-[#0A0A0B] border-white/10'
                }`}>
                  <Briefcase className={`h-2.5 w-2.5 ${isExpanded ? 'text-slate-950' : 'text-slate-400'}`} />
                </span>

                {/* Main Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all ${
                    isExpanded
                      ? 'bg-[#0A0A0B] border-white/10 shadow-xl shadow-black/20'
                      : 'bg-[#0A0A0B] border-white/5 hover:border-white/15 hover:bg-[#0A0A0B]/80'
                  }`}
                >
                  {/* Card Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-white">
                        {exp.role[currentLang]}
                      </h3>
                      <p className="font-sans font-semibold text-sm text-[#2DD4BF] mt-0.5">
                        {exp.company[currentLang]}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs mt-1 sm:mt-0">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      <span>{exp.period[currentLang]}</span>
                    </div>
                  </div>

                  {/* High Level Short Description */}
                  <p className="font-sans text-sm text-slate-300 mt-4 leading-relaxed text-justify">
                    {exp.description[currentLang]}
                  </p>

                  {/* Skills badges quick look */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skillsUsed.map(skill => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono font-bold bg-[#0A0A0B] text-slate-400 border border-white/5 py-1 px-2.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible details indicator */}
                  <div className="flex justify-end mt-4 pt-2 border-t border-white/10">
                    <button className="flex items-center space-x-1.5 text-xs font-mono font-bold text-slate-500 hover:text-[#2DD4BF] transition-colors cursor-pointer">
                      <span>{isExpanded ? (currentLang === 'en' ? 'Show Less' : 'Sembunyikan') : (currentLang === 'en' ? 'Show Achievements' : 'Lihat Pencapaian')}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Expanded achievements block */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`timeline-achievements-${exp.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-white/10"
                      >
                        <h4 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase mb-3">
                          {currentLang === 'en' ? 'Key Achievements' : 'Pencapaian Utama'}
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, aIdx) => (
                            <motion.li
                              key={aIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: aIdx * 0.05 }}
                              className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed text-justify"
                            >
                              <CheckCircle2 className="h-4.5 w-4.5 text-[#2DD4BF] shrink-0 mt-0.5" />
                              <span>{achievement[currentLang]}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
