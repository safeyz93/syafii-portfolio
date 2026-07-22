import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lightbulb, Sparkles, Download } from 'lucide-react';
import { Language, PROFILE_BIO } from '../data';
import { decrypt } from '../utils/crypto';
import { ENCRYPTED_CV_DATA } from '../assets/cv_encrypted';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const values = [
    {
      id: 'val-integrity',
      icon: ShieldCheck,
      title: {
        en: 'Integrity & Trustworthy',
        id: 'Integritas & Trustworthy',
      },
      desc: {
        en: 'Reliable in executing responsibilities, both individually and in a team. Keeping commitments to agreed terms.',
        id: 'Bisa dipegang dalam menyelesaikan tanggung jawab, baik sebagai individu maupun dalam tim. Menjaga komitmen terhadap apa yang sudah disepakati.',
      },
      color: 'text-[#2DD4BF] bg-teal-500/10 border-teal-500/20',
    },
    {
      id: 'val-adaptive',
      icon: Zap,
      title: {
        en: 'Adaptive & Fast Learner',
        id: 'Adaptif & Cepat Belajar',
      },
      desc: {
        en: 'Highly responsive and adaptive to new technologies and environments. Dynamic and ready to learn anytime needed.',
        id: 'Mampu menyesuaikan diri dengan teknologi dan lingkungan baru. Tidak kaku — siap belajar hal baru kapan pun diperlukan.',
      },
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      id: 'val-solver',
      icon: Lightbulb,
      title: {
        en: 'Problem Solver',
        id: 'Problem Solver',
      },
      desc: {
        en: 'Resilient when facing hurdles and challenges. Always seeking creative solutions with available resources.',
        id: 'Tidak gampang menyerah saat menghadapi kendala. Selalu mencari jalan keluar dengan sumber daya yang ada.',
      },
      color: 'text-[#2DD4BF] bg-teal-500/10 border-teal-500/20',
    },
    {
      id: 'val-creative',
      icon: Sparkles,
      title: {
        en: 'Creative & Initiative',
        id: 'Kreatif & Inisiatif',
      },
      desc: {
        en: 'Empowered with fresh ideas and the courage to act. Self-starting and proactive in discovering solutions and opportunities.',
        id: 'Punya ide dan keberanian untuk memulai. Tidak perlu menunggu perintah untuk bertindak — aktif mencari solusi dan peluang.',
      },
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
  ];

  const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // Decrypt CV PDF data in memory — privacy protection
      const decryptedBase64 = decrypt(ENCRYPTED_CV_DATA);
      if (!decryptedBase64) {
        throw new Error("Decryption failed.");
      }
      
      // Decode base64 to binary and trigger download
      const byteChars = atob(decryptedBase64);
      const byteNumbers = new Uint8Array(byteChars.length);
      for (let i = 0; i < byteChars.length; i++) {
        byteNumbers[i] = byteChars.charCodeAt(i);
      }
      const blob = new Blob([byteNumbers], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ahmad_Syafii_CV_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to decrypt and download CV:", err);
      alert(currentLang === 'en' 
        ? 'Failed to download CV. Please try again later.' 
        : 'Gagal mengunduh CV. Silakan coba lagi nanti.'
      );
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono font-bold text-[#2DD4BF] uppercase tracking-widest"
          >
            {currentLang === 'en' ? '01 . GET TO KNOW ME' : '01 . KENALI SAYA'}
          </motion.p>
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-1 tracking-tight"
          >
            {currentLang === 'en' ? 'About Me' : 'Tentang Saya'}
          </motion.h2>
          <div className="h-1 w-12 bg-[#2DD4BF] mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Column */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-left">
            <motion.p
              id="about-bio-p1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-base leading-relaxed text-justify"
            >
              {PROFILE_BIO.aboutText[currentLang]}
            </motion.p>
            <motion.p
              id="about-bio-p2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-base leading-relaxed text-slate-400 text-justify"
            >
              {PROFILE_BIO.subAboutText[currentLang]}
            </motion.p>

            {/* Quick Profile Details List */}
            <motion.div
              id="about-quick-details"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 gap-4 pt-4 font-mono text-xs max-w-xs"
            >
              <div className="flex items-center space-x-2 bg-[#0A0A0B] border border-white/10 rounded-xl p-3">
                <span className="text-[#2DD4BF] font-bold">Location:</span>
                <span className="text-slate-300">{PROFILE_BIO.location}</span>
              </div>
            </motion.div>

            {/* Resume Call-to-Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <button
                id="about-cv-btn"
                onClick={handleDownloadCV}
                className="inline-flex items-center space-x-2 bg-white text-black hover:bg-[#2DD4BF] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-sm transition-all hover:shadow-lg hover:shadow-teal-500/15 active:scale-95 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>{currentLang === 'en' ? 'Download CV / Resume' : 'Unduh CV / Resume'}</span>
              </button>
            </motion.div>
          </div>

          {/* Work Beliefs / Values Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  id={val.id}
                  key={val.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 text-left hover:border-white/20 transition-colors shadow-lg"
                >
                  <div className={`p-2.5 rounded-xl border w-fit mb-4 ${val.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-white">
                    {val.title[currentLang]}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-2 leading-relaxed text-justify">
                    {val.desc[currentLang]}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
