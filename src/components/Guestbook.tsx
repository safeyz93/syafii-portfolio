import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, Trash2, Shield, ShieldCheck, Mail, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { GuestbookMessage } from '../types';
import { GUESTBOOK_PLACEHOLDERS, Language, PROFILE_BIO } from '../data';

interface GuestbookProps {
  currentLang: Language;
}

export default function Guestbook({ currentLang }: GuestbookProps) {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Visitor');
  const [messageText, setMessageText] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load from local storage, merging with placeholders if empty
  useEffect(() => {
    const saved = localStorage.getItem('ahmadsyafii_guestbook_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(GUESTBOOK_PLACEHOLDERS);
      }
    } else {
      setMessages(GUESTBOOK_PLACEHOLDERS);
      localStorage.setItem('ahmadsyafii_guestbook_messages', JSON.stringify(GUESTBOOK_PLACEHOLDERS));
    }
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) {
      setFeedback({
        type: 'error',
        text: currentLang === 'en' ? 'Name and Message are required!' : 'Nama dan Pesan wajib diisi!',
      });
      return;
    }

    const newMessage: GuestbookMessage = {
      id: `msg-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Visitor',
      message: messageText.trim(),
      timestamp: new Date().toISOString(),
      avatarSeed: name.toLowerCase().replace(/\s+/g, '-'),
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('ahmadsyafii_guestbook_messages', JSON.stringify(updated));

    // Clear inputs
    setName('');
    setMessageText('');
    setRole('Visitor');

    setFeedback({
      type: 'success',
      text: currentLang === 'en' ? 'Message posted successfully!' : 'Pesan berhasil dikirim!',
    });

    // Auto clear feedback
    setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem('ahmadsyafii_guestbook_messages', JSON.stringify(updated));
    
    setFeedback({
      type: 'success',
      text: currentLang === 'en' ? 'Message deleted successfully.' : 'Pesan berhasil dihapus.',
    });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminInput.toLowerCase() === 'admin') {
      setIsAdmin(true);
      setAdminInput('');
      setFeedback({
        type: 'success',
        text: currentLang === 'en' ? 'Admin Mode Activated!' : 'Mode Admin Diaktifkan!',
      });
    } else {
      setFeedback({
        type: 'error',
        text: currentLang === 'en' ? 'Incorrect secret passphrase!' : 'Kata sandi rahasia salah!',
      });
    }
    setTimeout(() => setFeedback(null), 3000);
  };

  // Helper to generate custom colored initials avatar
  const getAvatarStyle = (seed: string) => {
    const colors = [
      'bg-teal-500/10 text-teal-400 border-teal-500/20',
      'bg-white/5 text-white border-white/10',
      'bg-teal-400/10 text-teal-300 border-teal-400/20',
      'bg-slate-900 text-slate-300 border-white/5',
    ];
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0]![0] + parts[1]![0]).toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  return (
    <section id="guestbook" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative BG Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-mono font-bold text-[#2DD4BF] uppercase tracking-widest"
          >
            {currentLang === 'en' ? '05 . DIGITAL CORNER' : '05 . POJOK DIGITAL'}
          </motion.p>
          <motion.h2
            id="guestbook-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-extrabold text-white mt-1 tracking-tight"
          >
            {currentLang === 'en' ? 'Contact & Guestbook' : 'Kontak & Buku Tamu'}
          </motion.h2>
          <div className="h-1 w-12 bg-[#2DD4BF] mt-4 mx-auto md:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact details & Form */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Info */}
            <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 text-left space-y-4">
              <h3 className="font-sans font-bold text-base text-white">
                {currentLang === 'en' ? 'Get in Touch' : 'Hubungi Lebih Lanjut'}
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed">
                {currentLang === 'en' 
                  ? 'Feel free to leave a public word, a recruitment offer, or ask for developer consultations. I will reply as soon as possible.' 
                  : 'Silakan tinggalkan pesan publik, penawaran kerja, atau tanyakan tentang konsultasi pengembangan. Saya akan membalas secepat mungkin.'}
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs text-slate-300">
                <div className="flex items-center space-x-3 bg-black/20 border border-white/5 rounded-xl p-3">
                  <Mail className="h-4.5 w-4.5 text-[#2DD4BF] shrink-0" />
                  <span className="truncate">{PROFILE_BIO.email}</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/20 border border-white/5 rounded-xl p-3">
                  <MapPin className="h-4.5 w-4.5 text-[#2DD4BF] shrink-0" />
                  <span>{PROFILE_BIO.location}</span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  id="guest-social-github"
                  href={PROFILE_BIO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-[#0A0A0B] border border-white/10 hover:border-white/20 text-slate-400 hover:text-white font-mono text-xs cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  id="guest-social-linkedin"
                  href={PROFILE_BIO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-[#0A0A0B] border border-white/10 hover:border-white/20 text-slate-400 hover:text-white font-mono text-xs cursor-pointer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Submision Contact Form */}
            <form onSubmit={handleSendMessage} className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 text-left space-y-4">
              <h3 className="font-sans font-bold text-base text-white flex items-center gap-1.5">
                <Sparkles className="h-4.5 w-4.5 text-[#2DD4BF]" />
                <span>{currentLang === 'en' ? 'Leave a Message' : 'Tinggalkan Pesan'}</span>
              </h3>

              {/* Toast Feedback Area */}
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`p-3 rounded-xl border text-xs font-mono flex items-center ${
                      feedback.type === 'success'
                        ? 'bg-teal-500/10 text-teal-400 border-teal-500/25'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/25'
                    }`}
                  >
                    <span>{feedback.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  {currentLang === 'en' ? 'Your Name' : 'Nama Anda'}
                </label>
                <input
                  id="guestbook-input-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#0A0A0B] border border-white/10 focus:border-[#2DD4BF]/50 rounded-sm py-2.5 px-3.5 font-sans text-sm text-white focus:outline-none transition-colors placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Role/Affiliation Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  {currentLang === 'en' ? 'Role / Status' : 'Peran / Status'}
                </label>
                <select
                  id="guestbook-input-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 focus:border-[#2DD4BF]/50 rounded-sm py-2.5 px-3.5 font-mono text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Visitor">{currentLang === 'en' ? 'Visitor' : 'Pengunjung'}</option>
                  <option value="Recruiter">{currentLang === 'en' ? 'Recruiter' : 'Perekrut / HRD'}</option>
                  <option value="Client">{currentLang === 'en' ? 'Client' : 'Klien Kerja'}</option>
                  <option value="Fellow Dev">{currentLang === 'en' ? 'Fellow Developer' : 'Rekan Pengembang'}</option>
                  <option value="Friend">{currentLang === 'en' ? 'Friend' : 'Teman'}</option>
                </select>
              </div>

              {/* Message Content Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  {currentLang === 'en' ? 'Your Message' : 'Pesan Anda'}
                </label>
                <textarea
                  id="guestbook-input-message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Write some nice words or questions...' : 'Tulis kata-kata atau pertanyaan Anda...'}
                  rows={4}
                  className="w-full bg-[#0A0A0B] border border-white/10 focus:border-[#2DD4BF]/50 rounded-sm py-2.5 px-3.5 font-sans text-sm text-white focus:outline-none transition-colors resize-none placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Submit CTA */}
              <button
                id="guestbook-submit-btn"
                type="submit"
                className="w-full group inline-flex items-center justify-center space-x-2 bg-white text-black hover:bg-[#2DD4BF] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-5 rounded-sm transition-all hover:shadow-lg hover:shadow-teal-500/15 active:scale-95 cursor-pointer"
              >
                <span>{currentLang === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>
                <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Side: Message Feed Wall */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-4">
            
            {/* Board Header details */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-[#2DD4BF]" />
                <h3 className="font-sans font-bold text-base text-white">
                  {currentLang === 'en' ? 'Visitor Guestbook Board' : 'Papan Buku Tamu Pengunjung'}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {messages.length} {currentLang === 'en' ? 'messages' : 'pesan'}
              </span>
            </div>

            {/* Scrollable messages viewport */}
            <div className="max-h-[580px] overflow-y-auto space-y-4 pr-2 text-left scrollbar-thin scrollbar-thumb-slate-800">
              <AnimatePresence initial={false} mode="popLayout">
                {messages.map((msg) => (
                  <motion.div
                    id={`guestbook-bubble-${msg.id}`}
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="relative group bg-[#0A0A0B] border border-white/10 p-5 rounded-2xl flex gap-4 hover:border-white/20 transition-colors"
                  >
                    {/* Generative Colored Avatar */}
                    <div className={`h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center font-mono text-sm font-bold ${getAvatarStyle(msg.avatarSeed)}`}>
                      {getInitials(msg.name)}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1.5">
                      {/* Name, Badge & Timestamp header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-sans font-bold text-sm text-white truncate max-w-[150px]">
                            {msg.name}
                          </span>
                          <span className="text-[10px] font-mono font-medium py-0.5 px-2 bg-[#0A0A0B] border border-white/10 rounded-sm text-slate-500">
                            {msg.role}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-500">
                          {new Date(msg.timestamp).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'id-ID', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Content text */}
                      <p className="font-sans text-sm text-slate-300 leading-relaxed break-words whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>

                    {/* Admin delete action trigger */}
                    {isAdmin && (
                      <button
                        id={`delete-msg-btn-${msg.id}`}
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="absolute top-4 right-4 p-2 text-rose-500 bg-rose-500/10 border border-rose-500/25 hover:bg-rose-500 hover:text-white rounded-lg transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                        title="Delete message"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Admin toggle area */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <button
                id="admin-panel-toggle"
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="text-[10px] font-mono font-bold text-slate-500 hover:text-[#2DD4BF] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Shield className="h-3 w-3" />
                <span>{showAdminPanel ? (currentLang === 'en' ? 'Close Panel' : 'Tutup Panel') : (currentLang === 'en' ? 'Admin Access' : 'Akses Admin')}</span>
              </button>

              <AnimatePresence>
                {showAdminPanel && (
                  <motion.form
                    onSubmit={handleAdminAuth}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="flex items-center gap-2"
                  >
                    <input
                      id="admin-secret-input"
                      type="password"
                      value={adminInput}
                      onChange={(e) => setAdminInput(e.target.value)}
                      placeholder="Input Password"
                      className="bg-[#0A0A0B] border border-white/10 rounded-sm py-1 px-2 font-mono text-[10px] text-white focus:outline-none placeholder:text-slate-700"
                    />
                    <button
                      id="admin-auth-btn"
                      type="submit"
                      className="py-1 px-2 bg-[#2DD4BF]/10 hover:bg-[#2DD4BF]/25 border border-[#2DD4BF]/30 text-[#2DD4BF] font-mono text-[10px] font-bold rounded-sm transition-colors cursor-pointer"
                    >
                      Auth
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {isAdmin && (
                <div className="flex items-center space-x-1.5 text-[10px] font-mono font-bold text-[#2DD4BF]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{currentLang === 'en' ? 'ADMIN AUTHORIZED' : 'ADMIN TEROTORISASI'}</span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
