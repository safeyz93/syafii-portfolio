import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS, Language, CategoryType } from '../data';
import { Skill } from '../types';
import * as LucideIcons from 'lucide-react';

interface SkillsMatrixProps {
  currentLang: Language;
}

export default function SkillsMatrix({ currentLang }: SkillsMatrixProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('islamic_science');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(
    SKILLS.find(s => s.category === 'islamic_science') || null
  );

  const categories = [
    { key: 'islamic_science', label: { en: 'Islamic Science', id: 'Islamic Science' } },
    { key: 'literacy', label: { en: 'Literacy', id: 'Literasi' } },
    { key: 'finance', label: { en: 'Finance', id: 'Finance' } },
    { key: 'soft', label: { en: 'Soft Skills', id: 'Soft Skill' } },
  ] as const;

  const filteredSkills = SKILLS.filter(skill => skill.category === activeCategory);

  // Helper to dynamically render Lucide Icons by name string
  const renderIcon = (iconName: string, className: string) => {
    // Dynamic access of lucide-react icons safely
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.HelpCircle className={className} />;
  };

  const handleCategoryChange = (cat: CategoryType) => {
    setActiveCategory(cat);
    // Auto-select the first skill of the new category to keep detail panel populated
    const firstOfCat = SKILLS.find(s => s.category === cat);
    if (firstOfCat) {
      setSelectedSkill(firstOfCat);
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono font-bold text-[#2DD4BF] uppercase tracking-widest"
          >
            {currentLang === 'en' ? '02 . TECHNICAL MATRIX' : '02 . MATRIKS TEKNIS'}
          </motion.p>
          <motion.h2
            id="skills-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-1 tracking-tight"
          >
            {currentLang === 'en' ? 'Skills & Competencies' : 'Keahlian & Kompetensi'}
          </motion.h2>
          <div className="h-1 w-12 bg-[#2DD4BF] mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              id={`skills-tab-${cat.key}`}
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`relative py-2.5 px-5 rounded-lg text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#2DD4BF] text-slate-950 shadow-lg shadow-teal-500/10'
                  : 'text-slate-400 hover:text-white bg-[#0A0A0B] border border-white/10'
              }`}
            >
              <span>{cat.label[currentLang]}</span>
            </button>
          ))}
        </div>

        {/* Content Layout: Left Grid, Right Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Skills Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  id={`skill-card-${skill.id}`}
                  key={skill.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  className={`cursor-pointer rounded-2xl border p-5 flex items-center space-x-4 transition-all hover:scale-[1.01] ${
                    selectedSkill?.id === skill.id
                      ? 'bg-teal-950/20 border-teal-500/50 shadow-md shadow-teal-500/5'
                      : 'bg-[#0A0A0B] border-white/10 hover:border-white/20 hover:bg-[#0A0A0B]/80'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center ${
                    selectedSkill?.id === skill.id
                      ? 'bg-teal-500/10 border-teal-500/30 text-[#2DD4BF]'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    {renderIcon(skill.icon, 'h-5 w-5')}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-bold text-sm text-white">
                        {skill.name[currentLang]}
                      </span>
                      <span className="font-mono text-xs text-[#2DD4BF] font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Tiny Progress bar */}
                    <div className="h-1.5 w-full bg-slate-900 rounded-full mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-[#2DD4BF] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Side: Skill Detail Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  id="skill-detail-panel"
                  key={selectedSkill.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full text-left shadow-2xl relative"
                >
                  {/* Glowing light effect behind icon */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-teal-500/10 border border-teal-500/20 text-[#2DD4BF] rounded-2xl">
                        {renderIcon(selectedSkill.icon, 'h-8 w-8')}
                      </div>
                      <div>
                        <h3 className="font-sans font-black text-lg text-white">
                          {selectedSkill.name[currentLang]}
                        </h3>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-0.5 block">
                          {selectedSkill.category.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase">
                        {currentLang === 'en' ? 'Proficiency Level' : 'Tingkat Kemahiran'}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-sans font-black text-white">
                          {selectedSkill.level}%
                        </span>
                        <span className="text-xs font-mono font-bold py-1 px-3 bg-teal-500/10 text-[#2DD4BF] border border-teal-500/20 rounded-full">
                          {selectedSkill.level >= 90
                            ? (currentLang === 'en' ? 'Expert' : 'Sangat Mahir')
                            : selectedSkill.level >= 80
                            ? (currentLang === 'en' ? 'Advanced' : 'Mahir')
                            : (currentLang === 'en' ? 'Intermediate' : 'Menengah')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <h4 className="text-xs font-mono font-bold text-[#2DD4BF] tracking-wider uppercase">
                        {currentLang === 'en' ? 'Practical Experience' : 'Pengalaman Praktis'}
                      </h4>
                      <p className="font-sans text-sm text-slate-300 leading-relaxed">
                        {selectedSkill.description[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[10px] text-slate-500 flex justify-between items-center">
                    <span>AhmadSyafii.online // Matrix</span>
                    <span className="text-[#2DD4BF] font-bold">verified status: high</span>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-8 flex items-center justify-center h-full text-center text-slate-500 text-sm font-sans">
                  {currentLang === 'en' ? 'Select a skill to see experience details.' : 'Pilih keahlian untuk melihat detail pengalaman.'}
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
