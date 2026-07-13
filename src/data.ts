import { Skill, Project, Experience, GuestbookMessage } from './types';

export const LANGUAGES = {
  EN: 'en',
  ID: 'id',
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type CategoryType = 'islamic_science' | 'literacy' | 'finance' | 'soft';

export interface ProfileBio {
  name: string;
  title: string;
  tagline: {
    en: string;
    id: string;
  };
  aboutText: {
    en: string;
    id: string;
  };
  subAboutText: {
    en: string;
    id: string;
  };
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export const PROFILE_BIO: ProfileBio = {
  name: 'Ahmad Syafii',
  title: 'Bridging Scientific Manuscripts & Technology',
  tagline: {
    en: "An Interdisciplinary Mind - from Qur'anic Studies to Digital Technology. Connecting Islamic Intellectual Heritage with Digital Modernization",
    id: "Pikiran Interdisipliner - dari Ilmu Al Qur'an ke Teknologi Digital. Menghubungkan Warisan Intelektual Islam dengan Modernisasi Digital",
  },
  aboutText: {
    en: "Hello! I am Ahmad Syafii, an interdisciplinary thinker bridging Islamic intellectual traditions with financial technology innovation and artificial intelligence. Graduating with a Bachelor's degree in Qur'anic Studies and Exegesis from IAIN Surakarta (2021), I bring the distinctive analytical approaches of the exegesis world—such as ta'wil, tabayyun, and text-based reasoning—into the realm of data and blockchain.",
    id: "Hallo! saya Ahmad Syafii, seorang pemikir interdisipliner yang menjembatani nalar keilmuan Islam dengan inovasi teknologi finansial dan kecerdasan buatan. Lulusan S1 Ilmu Al-Qur'an dan Tafsir dari IAIN Surakarta (2021), ia membawa pendekatan analitis khas dunia tafsir—ta'wil, tabayyun, dan penalaran berbasis teks—ke dalam dunia data dan blockchain.",
  },
  subAboutText: {
    en: "With over 14 years of diverse cross-industry experience, active English proficiency equivalent to B2 (IELTS), and a data-driven mindset—spanning Product Marketing Specialist, Islamic Education Teacher, to currently an Independent Blockchain Analyst—I have proven high adaptability, analytical sharpness, and self-reliance in mastering new systems and technologies.",
    id: "Dengan pengalaman lintas industri selama lebih dari 14 tahun, kemampuan bahasa Inggris aktif setara B2 (IELTS) dan pola pikir berbasis data —dari Product Marketing Specialist, Guru Pendidikan Islam, hingga kini sebagai Blockchain Analyst Independen— telah membuktikan kemampuan adaptasi yang tinggi, ketajaman analitis, serta kemandirian dalam menguasai sistem dan teknologi baru secara otodidak.",
  },
  location: 'Jawa Barat, ID',
  email: 'safeyzhanacaraka@gmail.com',
  github: 'https://github.com/safeyz93',
  linkedin: 'https://www.linkedin.com/in/ahmad-syafii-08922420b/',
  resumeUrl: '#',
};

export const SKILLS: Skill[] = [
  // Islamic Science
  {
    id: 'tafsir',
    name: { en: "Qur'anic Studies & Tafsir", id: "Studi Al-Qur'an & Tafsir" },
    category: 'islamic_science',
    level: 96,
    icon: 'BookOpen',
    description: {
      en: "Deep understanding of Qur'anic analysis methods, text-based analytical reasoning, and classic manuscript context.",
      id: "Pemahaman mendalam tentang metode analisis Al-Qur'an, penalaran analitis berbasis teks, dan konteks naskah klasik."
    },
  },
  {
    id: 'quran-mgmt',
    name: { en: "Qur'anic Education Management", id: "Manajemen Pendidikan Al-Qur'an" },
    category: 'islamic_science',
    level: 95,
    icon: 'GraduationCap',
    description: {
      en: "7+ years of experience directing Islamic boarding school curricula, Tajweed, Tahfidz learning structures, and spiritual educational systems.",
      id: "Pengalaman 7+ tahun mengarahkan kurikulum pesantren, struktur pembelajaran Tajwid, program Tahfidz, dan sistem pendidikan spiritual."
    },
  },
  {
    id: 'arabic-ling',
    name: { en: "Islamic Philosophy Studies", id: "Studi Filsafat Islam" },
    category: 'islamic_science',
    level: 85,
    icon: 'Compass',
    description: {
      en: "Studying classical logic, theology, history of Islamic thought, and the integration of scientific disciplines.",
      id: "Mempelajari logika klasik, teologi, sejarah pemikiran Islam, serta integrasi berbagai disiplin keilmuan secara umum."
    },
  },
  
  // Literation
  {
    id: 'manuscript-analysis',
    name: { en: "Islamic Manuscript Analysis", id: "Analisis Manuskrip Islam" },
    category: 'literacy',
    level: 88,
    icon: 'FileText',
    description: {
      en: "Critically studying historical text sources, literature reviews, and translating classical Arabic commentaries (Tafsir).",
      id: "Mempelajari sumber teks sejarah secara kritis, tinjauan pustaka, dan menerjemahkan tafsir bahasa Arab klasik."
    },
  },
  {
    id: 'academic-writing',
    name: { en: "Academic & Creative Writing", id: "Penulisan Akademik & Kreatif" },
    category: 'literacy',
    level: 84,
    icon: 'PenTool',
    description: {
      en: "Drafting structural research papers, educational modules, and articles with strong logical flow and academic citation standards.",
      id: "Menyusun karya tulis ilmiah terstruktur, modul pendidikan, dan artikel dengan alur logika yang kuat dan standar sitasi akademik."
    },
  },
  {
    id: 'digital-literacy',
    name: { en: "Digital Literacy & Research", id: "Literasi Digital & Riset" },
    category: 'literacy',
    level: 85,
    icon: 'Search',
    description: {
      en: "Proficient with advanced database indexing, academic library search tools, and documenting cross-disciplinary data.",
      id: "Sangat mahir dengan indeks basis data tingkat lanjut, alat pencarian perpustakaan akademik, dan pendokumentasian data lintas disiplin."
    },
  },

  // Finance
  {
    id: 'crypto-analysis',
    name: { en: "Crypto & Web3 Analysis", id: "Analisis Kripto & Web3" },
    category: 'finance',
    level: 84,
    icon: 'Coins',
    description: {
      en: "3+ years of tracking decentralized finance (DeFi), market micro-structures, tokenomics models, and blockchain investigation strategies.",
      id: "Pengalaman 3+ tahun melacak keuangan terdesentralisasi (DeFi), mikro-struktur pasar, model tokenomics, dan strategi investigasi blockchain."
    },
  },
  {
    id: 'blockchain-architecture',
    name: { en: "Blockchain Architecture Learning", id: "Pembelajaran Arsitektur Blockchain" },
    category: 'finance',
    level: 85,
    icon: 'Network',
    description: {
      en: "In-depth understanding of blockchain ledger validation, consensus protocols, smart contract patterns, and crypto wallets transaction safety.",
      id: "Pemahaman mendalam tentang validasi buku besar blockchain, protokol konsensus, pola smart contract, dan keamanan transaksi dompet kripto."
    },
  },
  {
    id: 'finance-mgmt',
    name: { en: "Financial Management", id: "Manajemen Keuangan" },
    category: 'finance',
    level: 80,
    icon: 'Wallet',
    description: {
      en: "Budgeting, bookkeeping, cash flow tracking, and financial allocation planning for community-driven educational programs.",
      id: "Penganggaran, pembukuan, pelacakan arus kas, dan perencanaan alokasi keuangan untuk program pendidikan berbasis komunitas."
    },
  },
  {
    id: 'ai-tech-adaptation',
    name: { en: "AI Tech Adaptation", id: "AI Tech Adaptation" },
    category: 'finance',
    level: 82,
    icon: 'Cpu',
    description: {
      en: "Utilizing Generative AI models and smart workflows to optimize personal finance, market research, and cross-disciplinary productivity.",
      id: "Memanfaatkan model AI Generatif dan alur kerja cerdas untuk mengoptimalkan keuangan pribadi, riset pasar, dan produktivitas lintas disiplin."
    },
  },

  // Soft Skills
  {
    id: 'integrity-trust',
    name: { en: "Integritas & Trustworthy", id: "Integritas & Trustworthy" },
    category: 'soft',
    level: 96,
    icon: 'ShieldCheck',
    description: {
      en: "Highly reliable in carrying responsibilities, maintaining commitments, and keeping stakeholder and community trust.",
      id: "Bisa dipegang dalam menyelesaikan tanggung jawab, baik sebagai individu maupun dalam tim. Menjaga komitmen terhadap apa yang sudah disepakati."
    },
  },
  {
    id: 'adaptive-learner',
    name: { en: "Adaptive & Fast Learner", id: "Adaptif & Cepat Belajar" },
    category: 'soft',
    level: 95,
    icon: 'Zap',
    description: {
      en: "Quick to adjust to new technologies and dynamic environments. Agile, responsive, and always ready to learn new concepts.",
      id: "Mampu menyesuaikan diri dengan teknologi dan lingkungan baru. Tidak kaku — siap belajar hal baru kapan pun diperlukan."
    },
  },
  {
    id: 'problem-solver-skill',
    name: { en: "Problem Solver", id: "Problem Solver" },
    category: 'soft',
    level: 90,
    icon: 'Lightbulb',
    description: {
      en: "Resilient in facing hurdles. Capable of locating paths out of blocks using logical analysis and available resources.",
      id: "Tidak gampang menyerah saat menghadapi kendala. Selalu mencari jalan keluar dengan sumber daya yang ada."
    },
  },
  {
    id: 'creative-initiative',
    name: { en: "Creative & Initiative", id: "Kreatif & Inisiatif" },
    category: 'soft',
    level: 92,
    icon: 'Sparkles',
    description: {
      en: "Proactive self-starter with a wealth of ideas. Does not wait for orders to act; actively seeks out solutions and opportunities.",
      id: "Punya id dan keberanian untuk memulai. Tidak perlu menunggu perintah untuk bertindak — aktif mencari solusi dan peluang."
    },
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-blockchain-analyst',
    role: { en: 'Blockchain Analyst', id: 'Analis Blockchain' },
    company: { en: 'Self-employed / Independent Contractor', id: 'Pekerja Mandiri / Kontraktor Independen' },
    period: { en: '2023 - Present', id: '2023 - Sekarang' },
    description: {
      en: 'Conducting on-chain forensics, transaction analysis, and automated monitoring for crypto projects and decentralized finance (DeFi) protocols.',
      id: 'Melakukan forensik on-chain, analisis transaksi, dan pemantauan otomatis untuk proyek kripto dan protokol keuangan terdesentralisasi (DeFi).'
    },
    achievements: [
      {
        en: 'Conducted on-chain forensics and transaction analysis for crypto projects and DeFi protocols.',
        id: 'Melakukan forensik on-chain dan analisis transaksi untuk proyek kripto dan protokol DeFi.'
      },
      {
        en: 'Developed automated monitoring systems for token trading signals and wallet activity.',
        id: 'Mengembangkan sistem pemantauan otomatis untuk sinyal perdagangan token dan aktivitas dompet.'
      },
      {
        en: 'Analyzed blockchain data to identify suspicious patterns and provided intelligence reports.',
        id: 'Menganalisis data blockchain untuk mengidentifikasi pola mencurigakan dan memberikan laporan intelijen.'
      },
      {
        en: 'Managed real-time trading and monitoring systems using Python, APIs, and WebSocket connections.',
        id: 'Mengelola sistem perdagangan dan pemantauan waktu nyata menggunakan Python, API, dan koneksi WebSocket.'
      }
    ],
    skillsUsed: ['Blockchain Forensics', 'DeFi Analysis', 'Python', 'WebSockets', 'On-Chain Data']
  },
  {
    id: 'exp-teacher',
    role: { en: 'Teacher / Educator', id: 'Guru / Pendidik' },
    company: { en: 'PPMI Assalaam Sukoharjo (Islamic Boarding School)', id: 'PPMI Assalaam Sukoharjo (Pondok Pesantren)' },
    period: { en: '2017 - 2024', id: '2017 - 2024' },
    description: {
      en: 'Delivered curriculum and managed classroom administration, digital learning systems, and spiritual student development.',
      id: 'Menyampaikan kurikulum serta mengelola administrasi kelas, sistem pembelajaran digital, dan bimbingan karakter siswa pesantren.'
    },
    achievements: [
      {
        en: 'Delivered curriculum and managed classroom administration.',
        id: 'Menyampaikan kurikulum dan mengelola administrasi kelas secara efektif.'
      },
      {
        en: 'Developed digital learning materials and administrative reporting systems.',
        id: 'Mengembangkan materi pembelajaran digital dan sistem pelaporan administratif.'
      },
      {
        en: 'Coordinated with school leadership on program planning and student development.',
        id: 'Berkoordinasi dengan pimpinan sekolah dalam perencanaan program dan pengembangan karakter siswa.'
      }
    ],
    skillsUsed: ['Curriculum Design', 'Classroom Administration', 'Digital Learning', 'Program Planning']
  },
  {
    id: 'exp-marketing',
    role: { en: 'Product Marketing Specialist', id: 'Spesialis Pemasaran Produk' },
    company: { en: 'PT Indomarco Prismatama', id: 'PT Indomarco Prismatama' },
    period: { en: '2011 - 2013', id: '2011 - 2013' },
    description: {
      en: 'Managed product marketing campaigns and coordinated distribution logistics across multiple retail locations to drive sales goals.',
      id: 'Mengelola kampanye pemasaran produk dan mengoordinasikan logistik distribusi di berbagai lokasi ritel untuk mencapai target penjualan.'
    },
    achievements: [
      {
        en: 'Managed product marketing campaigns and inventory reporting across multiple retail locations.',
        id: 'Mengelola kampanye pemasaran produk dan pelaporan inventaris di berbagai lokasi ritel.'
      },
      {
        en: 'Coordinated with suppliers, logistics, and sales teams to optimize product distribution.',
        id: 'Berkoordinasi dengan pemasok, logistik, dan tim penjualan untuk mengoptimalkan distribusi produk.'
      },
      {
        en: 'Prepared weekly sales analysis reports and inventory forecasting using MS Office.',
        id: 'Menyusun laporan analisis penjualan mingguan dan prakiraan inventaris menggunakan MS Office.'
      }
    ],
    skillsUsed: ['Product Marketing', 'Inventory Reporting', 'Logistics Coordination', 'Sales Analysis']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'discord-auto-ai',
    title: { en: 'Discord Auto Reply with AI', id: 'Discord Auto Balas dengan AI' },
    description: {
      en: 'Auto-reply and auto-interact Discord bot using Gemini API to simulate organic, context-aware conversations.',
      id: 'Bot balas otomatis dan interaksi otomatis Discord menggunakan Gemini API untuk menyimulasikan percakapan organik.'
    },
    longDescription: {
      en: 'A highly configurable automation application designed to integrate with Discord gateways. Powered by Google Gemini AI, the bot analyzes group chat contexts and automatically generates professional, context-aware replies to facilitate organic community growth.',
      id: 'Aplikasi otomasi yang sangat dapat dikonfigurasi untuk berintegrasi dengan gateway Discord. Didukung oleh Google Gemini AI, bot ini menganalisis konteks obrolan grup dan secara otomatis menghasilkan balasan cerdas.'
    },
    category: 'scratch',
    tags: ['Node.js', 'Discord.js', 'Gemini API', 'TypeScript', 'WebSockets'],
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/safeyz93/Discord-auto-with-AI',
    liveUrl: 'https://github.com/safeyz93/Discord-auto-with-AI',
    features: [
      {
        en: 'Contextual AI auto-responses using Google Gemini API.',
        id: 'Respons otomatis AI berbasis konteks menggunakan Google Gemini API.'
      },
      {
        en: 'Custom delay pacing to look like organic human typing.',
        id: 'Pengaturan jeda waktu khusus agar terlihat seperti ketikan manusia asli.'
      },
      {
        en: 'Multi-channel monitoring with discrete token configurations.',
        id: 'Pemantauan multi-saluran dengan konfigurasi token akun terpisah.'
      },
      {
        en: 'Error resilient WebSocket connection recovery.',
        id: 'Pemulihan koneksi WebSocket yang tangguh terhadap error.'
      }
    ],
    challenges: {
      en: 'Handling sudden Discord API rate limits and preventing spam-detection flags while maintaining real-time conversations.',
      id: 'Menangani batas laju (rate limit) API Discord yang tiba-tiba dan menghindari deteksi spam sembari mempertahankan obrolan waktu nyata.'
    },
    solutions: {
      en: 'Implemented custom message throttling, human-like typing simulation, and randomized delays between message analysis.',
      id: 'Menerapkan pelambatan pesan kustom, simulasi pengetikan mirip manusia, dan jeda waktu acak di antara analisis pesan.'
    }
  },
  {
    id: 'ganti-proxy-tools',
    title: { en: 'Ganti Proxy Tools', id: 'Ganti Proxy Tools' },
    description: {
      en: 'A fast proxy switching scripting tool to rotate IPs and secure network request routes.',
      id: 'Alat skrip pengubah proxy cepat untuk merotasi IP dan mengamankan rute permintaan jaringan.'
    },
    longDescription: {
      en: 'A network administration script package designed to scrape, validate, and rotate proxies easily. It verifies proxy health, tests latency, and changes network routes on the fly, ensuring secure data collection and online privacy.',
      id: 'Paket skrip administrasi jaringan yang dirancang untuk mengambil, memvalidasi, dan merotasi proxy dengan mudah. Ini menguji latensi dan mengubah rute jaringan secara instan.'
    },
    category: 'scratch',
    tags: ['Python', 'Shell Script', 'Proxy Rotation', 'Network Security', 'Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/safeyz93/Ganti-Proxy-Tools',
    liveUrl: 'https://github.com/safeyz93/Ganti-Proxy-Tools',
    features: [
      {
        en: 'Automated proxy scraping and active rotation mechanisms.',
        id: 'Pencarian proxy otomatis dan mekanisme rotasi aktif.'
      },
      {
        en: 'Low-latency checking and bandwidth measurement concurrently.',
        id: 'Pemeriksaan latensi rendah dan pengukuran bandwidth secara bersamaan.'
      },
      {
        en: 'One-click routing updates for local systems and scripts.',
        id: 'Pembaruan rute sekali klik untuk koneksi sistem lokal dan skrip.'
      }
    ],
    challenges: {
      en: 'Filtering out dead, high-latency, or blacklisted proxies in real-time without blocking execution.',
      id: 'Menyaring proxy yang mati, berlatensi tinggi, atau masuk daftar hitam secara waktu nyata tanpa menghambat proses.'
    },
    solutions: {
      en: 'Designed a multi-threaded validation pool that queries standard reference sites concurrently to test speed.',
      id: 'Merancang pool validasi multi-threaded yang menanyakan situs referensi standar secara bersamaan untuk menguji kecepatan.'
    }
  },
  {
    id: 'zkapp-browser-ui',
    title: { en: 'Mina zkApp Browser UI', id: 'Mina zkApp Browser UI' },
    description: {
      en: 'User interface template for zero-knowledge smart contracts on the Mina Protocol blockchain.',
      id: 'Templat antarmuka pengguna untuk smart contract zero-knowledge pada blockchain Mina Protocol.'
    },
    longDescription: {
      en: 'A modern Web3 browser user interface designed for Mina Protocol zkApps. It integrates o1js (formerly SnarkyJS) to compile smart contracts directly in the browser and proves transactions without exposing raw private user inputs.',
      id: 'Antarmuka pengguna browser Web3 modern yang dirancang untuk Mina Protocol zkApps. Mengintegrasikan o1js untuk mengompilasi smart contract langsung di browser tanpa mengekspos input pribadi.'
    },
    category: 'finance',
    tags: ['o1js', 'Next.js', 'React', 'Mina Protocol', 'Zero-Knowledge'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/safeyz93/04-zkapp-browser-ui',
    liveUrl: 'https://github.com/safeyz93/04-zkapp-browser-ui',
    features: [
      {
        en: 'Browser-based o1js smart contract compilation monitors.',
        id: 'Pemantau kompilasi smart contract o1js berbasis browser.'
      },
      {
        en: 'Secure Mina wallet integration including Auro Wallet.',
        id: 'Integrasi dompet Mina yang aman termasuk Auro Wallet.'
      },
      {
        en: 'Interactive state monitors for on-chain smart contract variables.',
        id: 'Pemantau status interaktif untuk variabel smart contract on-chain.'
      }
    ],
    challenges: {
      en: 'Mina zkApp compilation in the browser is heavy and can freeze the main thread, resulting in a laggy UI.',
      id: 'Kompilasi zkApp Mina di dalam browser sangat berat dan dapat membekukan thread utama, mengakibatkan UI macet.'
    },
    solutions: {
      en: 'Offloaded contract compilation and proof generation to standard Web Workers, showing a step-by-step progress UI.',
      id: 'Memindahkan kompilasi kontrak dan pembuatan bukti ke Web Workers standar, menampilkan UI kemajuan langkah-demi-langkah.'
    }
  },
  {
    id: 'ziesha-node-automator',
    title: { en: 'Ziesha Node Automator', id: 'Ziesha Node Automator' },
    description: {
      en: 'Script package to easily deploy, manage, and monitor a Ziesha blockchain validator node.',
      id: 'Paket skrip untuk menyebarkan, mengelola, dan memantau node validator blockchain Ziesha dengan mudah.'
    },
    longDescription: {
      en: 'A comprehensive automation suite for Ziesha Network node operators. It simplifies node installation, automates synchronization recovery, and configures smart system alerts to ensure maximum validator uptime.',
      id: 'Rangkaian otomasi komprehensif untuk operator node Jaringan Ziesha. Ini menyederhanakan instalasi node, mengotomatiskan pemulihan sinkronisasi, dan mengonfigurasi peringatan sistem.'
    },
    category: 'finance',
    tags: ['Bash Scripting', 'Rust', 'Linux VPS', 'Node Automation', 'Blockchain'],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/safeyz93/Ziesha-Node',
    liveUrl: 'https://github.com/safeyz93/Ziesha-Node',
    features: [
      {
        en: 'One-click Bazuka node and Uzi-miner setup scripts.',
        id: 'Skrip penyiapan satu klik untuk node Bazuka dan Uzi-miner.'
      },
      {
        en: 'Auto-healing scripts to restart nodes on connection failures.',
        id: 'Skrip pemulihan otomatis untuk memulai ulang node jika koneksi gagal.'
      },
      {
        en: 'Real-time wallet balance and mining rewards tracking.',
        id: 'Pelacakan saldo dompet dan hadiah penambangan secara waktu nyata.'
      }
    ],
    challenges: {
      en: 'Handling frequent Ziesha network hard forks and synchronization stalls without manual server access.',
      id: 'Menangani hard fork jaringan Ziesha yang sering terjadi dan kemacetan sinkronisasi tanpa akses server manual.'
    },
    solutions: {
      en: 'Created a cron-based health checking script that automatically compares block height and auto-boots on stalls.',
      id: 'Membuat skrip pemeriksaan kesehatan berbasis cron yang membandingkan tinggi blok secara otomatis dan memulai ulang saat macet.'
    }
  },
  {
    id: 'defi-vault-protocol',
    title: { en: 'DeFi Yield Vault', id: 'DeFi Yield Vault' },
    description: {
      en: 'Smart contracts and architecture for a decentralized asset yield optimizer vault on EVM chains.',
      id: 'Smart contract dan arsitektur untuk vault pengoptimal hasil aset terdesentralisasi pada rantai EVM.'
    },
    longDescription: {
      en: 'A secure decentralized yield vault protocol inspired by ERC-4626. Users deposit ERC-20 tokens to earn optimized yields across compound lending protocols, built with robust security standards.',
      id: 'Protokol vault hasil terdesentralisasi yang aman terinspirasi oleh ERC-4626. Pengguna menyetor token ERC-20 untuk mendapatkan hasil optimal.'
    },
    category: 'finance',
    tags: ['Solidity', 'Hardhat', 'DeFi', 'Smart Contracts', 'ERC-4626'],
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://github.com/0xsafeyz93/defi-vault',
    liveUrl: 'https://github.com/0xsafeyz93/defi-vault',
    features: [
      {
        en: 'ERC-4626 standard compliance for vault tokens.',
        id: 'Kepatuhan standar ERC-4626 untuk token vault.'
      },
      {
        en: 'Automated yield compounding with secure flash-loan protection.',
        id: 'Pemajemukan hasil otomatis dengan perlindungan pinjaman kilat (flash-loan) yang aman.'
      },
      {
        en: 'Comprehensive unit testing suites using Hardhat.',
        id: 'Paket pengujian unit yang komprehensif menggunakan Hardhat.'
      }
    ],
    challenges: {
      en: 'Protecting user funds from flash loan manipulation and sandwich attacks during deposit pricing.',
      id: 'Melindungi dana pengguna dari manipulasi pinjaman kilat dan serangan sandwich selama penentuan harga setoran.'
    },
    solutions: {
      en: 'Integrated slippage tolerance limits and dynamic deposit/withdraw caps based on running asset-share reserves.',
      id: 'Mengintegrasikan batas toleransi slippage dan batas setoran/penarikan dinamis berdasarkan cadangan saham aset.'
    }
  },
  {
    id: 'tafsir-exegesis-essay',
    title: { en: 'Quranic Exegesis on Truth', id: 'Studi Tafsir tentang Kebenaran' },
    description: {
      en: 'An academic reflection analyzing truth, misinformation, and verification methods in contemporary life.',
      id: 'Refleksi akademis yang menganalisis kebenaran, disinformasi, dan metode verifikasi dalam kehidupan kontemporer.'
    },
    longDescription: {
      en: 'A comprehensive theological essay reflecting on Quranic exegesis (Tafsir), specifically referencing teachings about truth, misinformation, and the erosion of objective reality in modern post-truth society (tying into my Bachelor of Religion thesis).',
      id: 'Esai teologis komprehensif yang merefleksikan tafsir Al-Qur\'an, merujuk pada ajaran tentang kebenaran, disinformasi, dan pengikisan realitas objektif di era modern.'
    },
    category: 'article',
    tags: ['Tafsir', 'Islamic Studies', 'Academic Writing', 'Philosophy', 'Post-Truth'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://web.facebook.com/share/p/14kPrp2T4zz/',
    liveUrl: 'https://web.facebook.com/share/p/14kPrp2T4zz/',
    features: [
      {
        en: 'Exploration of Al-Hujurat Verse 6 regarding tabayyun (verification).',
        id: 'Eksplorasi Surat Al-Hujurat Ayat 6 tentang pentingnya tabayyun (verifikasi).'
      },
      {
        en: 'Analyzing how post-truth narratives erode public trust in news.',
        id: 'Menganalisis bagaimana narasi pasca-kebenaran mengikis kepercayaan publik.'
      },
      {
        en: 'Applying classical exegetical methods to modern digital communication challenges.',
        id: 'Menerapkan metode penafsiran klasik pada tantangan komunikasi digital modern.'
      }
    ],
    challenges: {
      en: 'Bridging complex 7th-century theological exegesis with fast-paced 21st-century social media communication paradigms.',
      id: 'Menjembatani tafsir teologis abad ke-7 yang kompleks dengan paradigma komunikasi media sosial abad ke-21 yang cepat.'
    },
    solutions: {
      en: 'Framed the core argument around the concept of Tabayyun (verification) as a practical, logical tool for info vetting.',
      id: 'Membingkai argumen utama seputar konsep Tabayyun (verifikasi) sebagai alat praktis dan logis untuk penyaringan informasi.'
    }
  },
  {
    id: 'crypto-defi-literacy',
    title: { en: 'Crypto & DeFi Financial Literacy', id: 'Literasi Keuangan Kripto & DeFi' },
    description: {
      en: 'A deep-dive educational article on blockchain consensus, liquidity pools, and decentralized finance risks.',
      id: 'Artikel edukasi mendalam tentang konsensus blockchain, liquidity pool, dan risiko keuangan terdesentralisasi.'
    },
    longDescription: {
      en: 'An educational article detailing the mechanics of decentralized finance (DeFi), explaining blockchain consensus models, and outlining essential security guidelines for Web3 retail participants to avoid exploits.',
      id: 'Artikel edukasi yang merinci mekanisme keuangan terdesentralisasi (DeFi), menjelaskan model konsensus blockchain, dan menguraikan pedoman keamanan penting untuk partisipan Web3.'
    },
    category: 'article',
    tags: ['Substack', 'DeFi', 'Blockchain', 'Financial Literacy', 'Market Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://substack.com/home/post/p-206393878',
    liveUrl: 'https://substack.com/home/post/p-206393878',
    features: [
      {
        en: 'Mathematical breakdowns of DeFi liquidity pool equations.',
        id: 'Penjelasan matematis tentang persamaan liquidity pool DeFi.'
      },
      {
        en: 'Comparison of proof-of-work vs proof-of-stake security thresholds.',
        id: 'Perbandingan ambang batas keamanan proof-of-work vs proof-of-stake.'
      },
      {
        en: 'Actionable security checklists for everyday smart contract interaction.',
        id: 'Daftar periksa keamanan praktis untuk interaksi smart contract sehari-hari.'
      }
    ],
    challenges: {
      en: 'Explaining highly complex cryptographic and economic protocols in an accessible way for general readers.',
      id: 'Menjelaskan protokol kriptografi dan ekonomi yang sangat kompleks dengan cara yang mudah diakses pembaca umum.'
    },
    solutions: {
      en: 'Used intuitive flowcharts, simple real-world analog banking analogies, and bold formatted sectioning.',
      id: 'Menggunakan diagram alir yang intuitif, analogi perbankan dunia nyata yang sederhana, dan pemformatan tebal.'
    }
  },
  {
    id: 'ai-equity-stake-analysis',
    title: { en: 'AI Equity Regulation Analysis', id: 'Analisis Regulasi Ekuitas AI' },
    description: {
      en: 'A policy brief analyzing the financial impacts of government-led AI equity stake rules.',
      id: 'Ulasan kebijakan yang menganalisis dampak finansial dari aturan kepemilikan saham AI oleh pemerintah.'
    },
    longDescription: {
      en: 'A professional analysis on the policy debate around governments potentially requiring AI research companies to grant public equity stakes in exchange for compute power/funding.',
      id: 'Analisis profesional tentang debat kebijakan seputar pemerintah yang berpotensi mewajibkan perusahaan riset AI memberikan bagian kepemilikan publik sebagai imbalan atas daya komputasi/pendanaan.'
    },
    category: 'article',
    tags: ['LinkedIn', 'AI Regulation', 'Technology Policy', 'Venture Capital', 'Fintech'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    githubUrl: 'https://www.linkedin.com/posts/ahmad-syafii-08922420b_us-government-ai-equity-stake-share-7468477037595291649-O7JZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU_hWkBry-FxXx-_AQXUHIcKurTQBbZIq0',
    liveUrl: 'https://www.linkedin.com/posts/ahmad-syafii-08922420b_us-government-ai-equity-stake-share-7468477037595291649-O7JZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU_hWkBry-FxXx-_AQXUHIcKurTQBbZIq0',
    features: [
      {
        en: 'Breakdown of state-capitalism versus open-market AI innovation.',
        id: 'Rincian inovasi AI antara kapitalisme negara versus pasar terbuka.'
      },
      {
        en: 'Projections of capital cost adjustments for computing clusters.',
        id: 'Proyeksi penyesuaian biaya modal untuk klaster komputasi.'
      },
      {
        en: 'Sovereign wealth fund influence on private AI startups.',
        id: 'Pengaruh sovereign wealth fund pada startup AI swasta.'
      }
    ],
    challenges: {
      en: 'Structuring a multi-layered regulatory and financial debate into a highly engaging, scannable social post.',
      id: 'Menstrukturkan debat regulasi dan keuangan multi-tier menjadi postingan sosial yang sangat menarik dan mudah dipindai.'
    },
    solutions: {
      en: 'Organized the analysis into concise, thesis-driven bullet points with custom thematic headers.',
      id: 'Mengorganisasikan analisis ke dalam poin-poin singkat berbasis tesis dengan header tematik kustom.'
    }
  }
];

export const GUESTBOOK_PLACEHOLDERS: GuestbookMessage[] = [
  {
    id: 'msg-1',
    name: 'Budi Santoso',
    role: 'Tech Lead',
    message: 'Awesome portfolio Ahmad! Clean layout, and very impressive Laravel and React integrations. Let\'s connect for future projects!',
    timestamp: '2026-07-09T14:30:00Z',
    avatarSeed: 'budi'
  },
  {
    id: 'msg-2',
    name: 'Sarah Wijaya',
    role: 'UI/UX Designer',
    message: 'Desainnya sangat bersih dan interaksinya sangat responsif. Suka sekali dengan kombinasi warna gelap dan aksen emerald-nya! Sukses selalu!',
    timestamp: '2026-07-10T09:15:00Z',
    avatarSeed: 'sarah'
  },
  {
    id: 'msg-3',
    name: 'David Miller',
    role: 'Recruiter',
    message: 'Superb technical background. Your explanation on the challenges & solutions shows you understand real-world engineering. Sent you an email!',
    timestamp: '2026-07-10T18:45:00Z',
    avatarSeed: 'david'
  }
];
