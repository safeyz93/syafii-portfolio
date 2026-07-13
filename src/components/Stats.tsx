import { motion } from 'motion/react';
import { Award, FolderGit, Cpu } from 'lucide-react';
import { Language } from '../data';

interface StatsProps {
  currentLang: Language;
}

export default function Stats({ currentLang }: StatsProps) {
  const statsItems = [
    {
      id: 'stat-exp',
      value: '9+',
      label: {
        en: 'Years Experience',
        id: 'Tahun Pengalaman',
      },
      icon: Award,
      color: 'text-[#2DD4BF] border-teal-500/25 bg-teal-500/5',
    },
    {
      id: 'stat-projects',
      value: '20+',
      label: {
        en: 'Projects Completed',
        id: 'Proyek Selesai',
      },
      icon: FolderGit,
      color: 'text-teal-400 border-teal-500/25 bg-teal-500/5',
    },
    {
      id: 'stat-tech',
      value: '10+',
      label: {
        en: 'Tech Mastered',
        id: 'Teknologi Dikuasai',
      },
      icon: Cpu,
      color: 'text-[#2DD4BF] border-teal-500/25 bg-teal-500/5',
    },
  ];

  return (
    <section id="stats-section" className="py-12 bg-[#0A0A0B] border-t border-white/10 border-b border-white/10 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl justify-center">
          {statsItems.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                id={stat.id}
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-[#0A0A0B] shadow-xl`}
              >
                <div className={`p-3 rounded-xl border ${stat.color.split(' ').slice(1).join(' ')}`}>
                  <Icon className={`h-6 w-6 ${stat.color.split(' ')[0]}`} />
                </div>
                <span className="text-3xl md:text-4xl font-mono font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-sans font-medium text-slate-400 mt-1.5 text-center">
                  {stat.label[currentLang]}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
