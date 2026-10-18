"use client";

import React, { useState } from "react";
import {
  TbBrandWhatsapp,
  TbArrowUpRight,
  TbShieldLock,
  TbTerminal2,
  TbDatabase,
  TbCpu,
  TbWorld,
} from "react-icons/tb";
import { SiDiscord } from "react-icons/si";
import { AkarPorosEmblem, AkarPorosLogo } from "./components/AkarPorosLogo";

interface ModalConfig {
  badge: string;
  title: string;
  desc: string;
  metrics?: string[];
  selectValue?: string;
  formHeading?: string;
  prefillGoal?: string;
  image?: string;
  secondaryImage?: string;
  externalLink?: {
    url: string;
    label: string;
  };
  secondaryLink?: {
    url: string;
    label: string;
  };
}

export default function Home() {
  const WA_LINK =
    "https://wa.me/6281220619281?text=Halo%20Akar%20Poros%2C%20saya%20tertarik%20konsultasi%20solusi%20AI%20dan%20pilot%20trial%20untuk%20bisnis%20saya.";

  // State management for interactivity
  const [activeTab, setActiveTab] = useState<"pricing" | "blog">("pricing");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("Autonomous WhatsApp Operations");
  const [formGoals, setFormGoals] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const openModal = (config: ModalConfig) => {
    setModalConfig(config);
    if (config.selectValue) {
      setFormService(config.selectValue);
    }
    if (config.prefillGoal) {
      setFormGoals(config.prefillGoal);
    } else {
      setFormGoals("");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalConfig(null);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
    showToast(
      `Terima kasih ${formName}! Permintaan untuk ${formService} telah kami terima. Tim kami akan menghubungi via email/WA dalam 24 jam.`
    );
    setFormName("");
    setFormEmail("");
    setFormGoals("");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(`Berhasil berlangganan wawasan AI Akar Poros: ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Service modal data
  const servicesData: Record<string, ModalConfig> = {
    whatsapp: {
      badge: "Autonomous WhatsApp Operations",
      title: "Asisten WhatsApp Otonom 24 Jam Non-Stop",
      desc: "Menangani pertanyaan pelanggan, kualifikasi prospek, rekomendasi produk, dan booking jam 2 pagi secara instan tanpa perlu staf lembur. Terintegrasi langsung ke Google Sheets dan CRM Anda.",
      metrics: ["< 3 Detik Waktu Respon", "100% SOP Terjaga", "Sinkronisasi Google Sheets / CRM"],
      selectValue: "Autonomous WhatsApp Operations",
      formHeading: "Mulai Pilot Trial WhatsApp (3 Hari)",
    },
    infra: {
      badge: "Private AI Infrastructure",
      title: "Infrastruktur AI Mandiri & Self-Hosted LLM",
      desc: "Deployment sistem AI di VPS atau on-premise milik perusahaan Anda. Menjamin data rahasia tidak pernah dikirim ke server pihak ketiga dengan kepatuhan penuh isolasi container.",
      metrics: ["0 Kebocoran Data Eksternal", "Isolasi Docker / VPS Privat", "Uptime Watchdog 24/7"],
      selectValue: "Private Self-Hosted AI Infrastructure",
      formHeading: "Konsultasi Infrastruktur Mandiri",
    },
    alertflow: {
      badge: "AlertFlow Realtime Intelligence",
      title: "Mesin Radar Event & Notifikasi Komunitas",
      desc: "Memantau sinyal konten live TikTok, YouTube, dan event webhook tanpa jeda. Otomatis menyiarkan alert terkontrol ke Discord, Telegram, dan WhatsApp grup tanpa duplikasi.",
      metrics: ["Aktif di 8+ Server Komunitas", "Deduplikasi Monotonik Anti-Spam", "Kontrol Admin Slash Command"],
      selectValue: "AlertFlow Realtime Engine",
      formHeading: "Pasang Radar Notifikasi Cerdas",
      image: "/alertflow/dashboard.jpg",
      secondaryImage: "/alertflow/banner.jpg",
      externalLink: {
        url: "https://alertflow.akarporos.tech",
        label: "Kunjungi Website AlertFlow ↗",
      },
      secondaryLink: {
        url: "https://discord.com/oauth2/authorize?client_id=1524069345502826696&permissions=275415026688&integration_type=0&scope=bot+applications.commands",
        label: "Undang Bot Discord ↗",
      },
    },
    scraper: {
      badge: "Custom Data Scraper & Pipeline",
      title: "Ekstraksi Intelijen Pasar & Pipeline Data Skala Besar",
      desc: "Ekstraksi jutaan data publik, katalog kompetitor, dan sinyal tren pasar menggunakan browser stealth berproteksi WAF. Mengonversi data mentah menjadi PostgreSQL dan JSON terstruktur.",
      metrics: ["Bypass Proteksi WAF / Cloudflare", "Pipeline Terjadwal & Anomali Alert", "Format Siap Analisis"],
      selectValue: "Custom Data Scraper & Pipeline",
      formHeading: "Request Pipeline Data Kustom",
    },
  };

  // Case study modal data
  const caseStudyData: Record<string, ModalConfig> = {
    umroh: {
      badge: "Studi Kasus: Biro Travel Umroh & Haji",
      title: "+42% Konversi Leads Tengah Malam via WhatsApp Agent",
      desc: "Sebelumnya, calon jamaah yang bertanya jam 22.00-05.00 baru dibalas esok siangnya sehingga banyak yang beralih ke biro lain. Dengan Agen WhatsApp Akar Poros, jawaban detail paket, hotel Mekkah, dan simulasi biaya terkirim instan dalam 3 detik.",
      metrics: ["+42% Konversi Booking", "< 3 Detik Respon 24/7", "Otomasi Rekap ke Sheets"],
      selectValue: "Autonomous WhatsApp Operations",
      formHeading: "Terapkan Solusi Ini di Bisnis Anda",
    },
    creator: {
      badge: "Studi Kasus: Komunitas Kreator & Media",
      title: "0 Delay Siaran Alert Konten di 8 Server Discord & Telegram",
      desc: "AlertFlow memantau postingan video dan sesi live streaming secara background. Dalam hitungan detik setelah kreator online, ribuan anggota komunitas langsung menerima notifikasi tanpa kendala spam dobel.",
      metrics: ["8 Komunitas Aktif", "< 10 Detik Deteksi Live", "99.98% Pengiriman Sukses"],
      selectValue: "AlertFlow Realtime Engine",
      formHeading: "Pasang AlertFlow di Komunitas Anda",
      image: "/alertflow/dashboard.jpg",
      secondaryImage: "/alertflow/banner.jpg",
      externalLink: {
        url: "https://alertflow.akarporos.tech",
        label: "Kunjungi Website AlertFlow ↗",
      },
      secondaryLink: {
        url: "https://discord.com/oauth2/authorize?client_id=1524069345502826696&permissions=275415026688&integration_type=0&scope=bot+applications.commands",
        label: "Undang Bot Discord ↗",
      },
    },
    enterprise: {
      badge: "Studi Kasus: Klinik Spesialis & Bisnis Berbasis Data",
      title: "100% Data Pasien Privat di Server Mandiri Klien",
      desc: "Klinik memerlukan ringkasan rekam medis dan tanya-jawab SOP dokter tanpa boleh mengekspos data pasien ke cloud publik. Kami memasang container LLM lokal di VPS terisolasi dengan zero external data leakage.",
      metrics: ["100% On-Premise / VPS Privat", "Zero Data Sharing ke Pihak Luar", "SOP Dokter Akurat"],
      selectValue: "Private Self-Hosted AI Infrastructure",
      formHeading: "Bangun Sistem AI Terisolasi",
    },
  };

  return (
    <div className="min-h-screen bg-[#06140E] text-[#F4F1E6] antialiased selection:bg-[#A3D9B5] selection:text-[#06140E]">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
          <div className="pointer-events-auto bg-[#0B3D2E] text-[#F4F1E6] border-2 border-[#A3D9B5] px-5 py-3.5 rounded-2xl shadow-brutal flex items-center gap-3 text-sm font-medium transition-all duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A3D9B5] flex-shrink-0 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Page Container */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-6 pb-20">
        {/* ================= NAVBAR ================= */}
        <header className="flex items-center justify-between py-4 mb-8 md:mb-12">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <AkarPorosLogo size="sm" theme="dark" showTagline={false} />
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D261C] text-[#A3D9B5] border border-[#1E4839] font-bold tracking-wider uppercase">
              STUDIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#F4F1E6]">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:underline decoration-[#A3D9B5] decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:underline decoration-[#A3D9B5] decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Solusi &amp; Agen
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="hover:underline decoration-[#A3D9B5] decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Studi Kasus
            </button>
            <button
              onClick={() => {
                setActiveTab("pricing");
                scrollToSection("pricing-section");
              }}
              className="hover:underline decoration-[#A3D9B5] decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Paket Biaya
            </button>
            <button
              onClick={() => {
                setActiveTab("blog");
                scrollToSection("pricing-section");
              }}
              className="hover:underline decoration-[#A3D9B5] decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Wawasan AI
            </button>
            <button
              type="button"
              onClick={() =>
                openModal({
                  badge: "Konsultasi Strategis",
                  title: "Konsultasi Rekayasa Sistem AI Bisnis",
                  desc: "Diskusikan proses bisnis, bot WhatsApp, atau otomasi yang ingin Anda terapkan. Tim insinyur kami siap menganalisis kelayakan dan menyusun roadmap teknis.",
                  metrics: ["Audit Alur Bisnis Gratis", "Respon < 24 Jam", "Tanpa Komitmen Awal"],
                  formHeading: "Request Jadwal Konsultasi",
                })
              }
              className="font-mono-btn text-sm border border-[#A3D9B5]/40 text-[#A3D9B5] rounded-xl px-6 py-3 hover:bg-[#A3D9B5] hover:text-[#06140E] hover:shadow-brutal-sm transition-all duration-200 active:translate-y-0.5 cursor-pointer font-bold"
            >
              Konsultasi Gratis
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label="Toggle Navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-[#0B3D2E] hover:bg-[#A3D9B5] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mb-8 p-6 rounded-3xl bg-[#EAF1EB] border border-[#0B3D2E] shadow-brutal">
            <div className="flex flex-col gap-4 text-base font-medium">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-1.5 hover:text-[#4F6F5E] font-semibold"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-1.5 hover:text-[#4F6F5E] font-semibold"
              >
                Solusi &amp; Agen
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-left py-1.5 hover:text-[#4F6F5E] font-semibold"
              >
                Studi Kasus
              </button>
              <button
                onClick={() => {
                  setActiveTab("pricing");
                  scrollToSection("pricing-section");
                }}
                className="text-left py-1.5 hover:text-[#4F6F5E] font-semibold"
              >
                Paket Biaya
              </button>
              <button
                onClick={() => {
                  setActiveTab("blog");
                  scrollToSection("pricing-section");
                }}
                className="text-left py-1.5 hover:text-[#4F6F5E] font-semibold"
              >
                Wawasan AI
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal({
                    badge: "Konsultasi Strategis",
                    title: "Konsultasi Rekayasa Sistem AI Bisnis",
                    desc: "Diskusikan sistem otomasi atau asisten WhatsApp yang Anda perlukan bersama arsitek sistem kami.",
                    metrics: ["Audit Alur Bisnis", "Respon Cepat", "Tanpa Kontrak Mengikat"],
                    formHeading: "Request Konsultasi",
                  });
                }}
                className="font-mono-btn text-sm border border-[#0B3D2E] bg-white rounded-xl px-5 py-3 text-center hover:bg-[#A3D9B5] transition-colors font-bold"
              >
                Konsultasi Gratis
              </button>
            </div>
          </div>
        )}

        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16 md:mb-24">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#A3D9B5] text-[#0B3D2E] text-xs font-mono font-bold px-3 py-1 rounded-lg border border-[#0B3D2E]/20 uppercase tracking-wider">
              Membangun sistem AI dari akarnya.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#0B3D2E]">
              Membangun sistem AI<br className="hidden sm:inline" />
              dari akarnya<br className="hidden sm:inline" />
              untuk pertumbuhan
            </h1>

            <p className="text-[#4F6F5E] text-base sm:text-[17px] leading-relaxed max-w-[480px]">
              Studio rekayasa sistem otonom 24/7 untuk bisnis nyata: asisten WhatsApp tanpa jeda, radar monitor intelijen, dan infrastruktur data privat yang menyatu dengan SOP operasional Anda.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-btn inline-flex items-center gap-2 bg-[#0B3D2E] text-[#F4F1E6] text-sm sm:text-[15px] px-7 py-4 rounded-xl hover:bg-[#A3D9B5] hover:text-[#0B3D2E] border border-[#0B3D2E] shadow-brutal hover:shadow-brutal-hover transition-all duration-200 active:translate-y-0.5 font-bold"
              >
                <TbBrandWhatsapp className="w-4 h-4 text-[#A3D9B5] group-hover:text-[#0B3D2E]" />
                <span>Uji Coba Pilot 3 Hari</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="font-mono-btn text-sm sm:text-[15px] border border-[#0B3D2E] rounded-xl px-6 py-4 bg-[#EAF1EB] hover:bg-[#D8E6DB] text-[#0B3D2E] transition-all duration-200 active:translate-y-0.5 cursor-pointer font-bold"
              >
                Jelajahi Solusi ↗
              </button>
            </div>
          </div>

          {/* Right Column: Custom Megaphone & Orbit Illustration with Akar Poros Core */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[5/4] flex items-center justify-center">
              <svg viewBox="0 0 520 430" className="w-full h-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orbital Wireframe Rings in Forest Green */}
                <ellipse cx="255" cy="245" rx="185" ry="62" transform="rotate(26 255 245)" stroke="#0B3D2E" strokeWidth="1.8" />
                <ellipse cx="248" cy="258" rx="185" ry="62" transform="rotate(26 248 258)" stroke="#0B3D2E" strokeWidth="1.8" />
                <ellipse cx="240" cy="272" rx="175" ry="56" transform="rotate(26 240 272)" stroke="#0B3D2E" strokeWidth="1.4" strokeDasharray="4 4" />

                {/* Decorative Green, Copper & Dark Accents */}
                <circle cx="96" cy="96" r="16" fill="#0B3D2E" />
                <circle cx="132" cy="128" r="9" fill="#A3D9B5" />
                <circle cx="385" cy="348" r="7" fill="#C7925B" />

                {/* Bottom Left 4-Point Star */}
                <path
                  className="animate-star"
                  style={{ transformOrigin: "112px 305px" }}
                  d="M112 272C116 293 121 298 142 305C121 312 116 317 112 338C108 317 103 312 82 305C103 298 108 293 112 272Z"
                  fill="#0B3D2E"
                />

                {/* Bottom Center Small Star */}
                <path
                  d="M275 342C277 351 280 353 289 356C280 359 277 361 275 370C273 361 270 359 261 356C270 353 273 351 275 342Z"
                  fill="#C7925B"
                />

                {/* Central Autonomous Core & Flywheel Container in Forest Green */}
                <g className="animate-float">
                  {/* Outer Core Frame */}
                  <rect x="180" y="110" width="160" height="160" rx="36" fill="#0B3D2E" stroke="#0B3D2E" strokeWidth="3" />
                  <rect x="186" y="116" width="148" height="148" rx="30" fill="#0E4D3A" />

                  {/* Brand Geometric Emblem Inside Core */}
                  <g transform="translate(195, 125) scale(0.33)">
                    <AkarPorosEmblem className="w-[390px] h-[370px]" />
                  </g>

                  {/* Radiating Signal Waves */}
                  <path d="M355 150C375 160 385 180 385 200" stroke="#0B3D2E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M368 135C395 150 410 175 410 205" stroke="#0B3D2E" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Floating Icon 1: WhatsApp Automation Node (Mint Sage Circle) */}
                <g className="animate-float-delayed">
                  <circle cx="384" cy="65" r="28" fill="#A3D9B5" stroke="#0B3D2E" strokeWidth="2" />
                  <g transform="translate(370, 51)">
                    <TbBrandWhatsapp className="w-7 h-7 text-[#0B3D2E]" />
                  </g>
                </g>

                {/* Floating Icon 2: Private Security Shield (Forest Green Circle) */}
                <g className="animate-float">
                  <circle cx="454" cy="130" r="27" fill="#0B3D2E" stroke="#0B3D2E" strokeWidth="2" />
                  <g transform="translate(440, 116)">
                    <TbShieldLock className="w-7 h-7 text-[#A3D9B5]" />
                  </g>
                </g>

                {/* Floating Icon 3: Terminal Pipeline (Copper Circle) */}
                <g className="animate-float-delayed">
                  <circle cx="430" cy="225" r="27" fill="#C7925B" stroke="#0B3D2E" strokeWidth="2" />
                  <g transform="translate(416, 211)">
                    <TbTerminal2 className="w-7 h-7 text-[#07261E]" />
                  </g>
                </g>

                {/* Floating Icon 4: PostgreSQL / Storage Node (Soft Sage Circle) */}
                <g className="animate-float">
                  <circle cx="110" cy="180" r="27" fill="#EAF1EB" stroke="#0B3D2E" strokeWidth="2" />
                  <g transform="translate(96, 166)">
                    <TbDatabase className="w-7 h-7 text-[#0B3D2E]" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ================= PARTNER LOGOS / TECH STACK STRIP ================= */}
        <section id="about" aria-label="Teknologi Pendukung" className="py-6 mb-16 md:mb-24 border-y border-[#0B3D2E]/15">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-90">
            {/* WhatsApp Business API */}
            <button
              type="button"
              onClick={() => showToast("Akar Poros mengintegrasikan protokol WhatsApp Cloud API resmi & Baileys engine.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="WhatsApp Cloud API"
            >
              <TbBrandWhatsapp className="w-6 h-6 text-[#0B3D2E] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">WhatsApp</span>
            </button>

            {/* Docker */}
            <button
              type="button"
              onClick={() => showToast("Setiap agent dideploy dalam container Docker terisolasi untuk jaminan keamanan data.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="Docker Container Isolation"
            >
              <TbCpu className="w-6 h-6 text-[#0B3D2E] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">Docker</span>
            </button>

            {/* Next.js 14 */}
            <button
              type="button"
              onClick={() => showToast("Frontend & dashboard dibangun di atas Next.js 14 App Router berperforma tinggi.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="Next.js App Engine"
            >
              <span className="font-mono text-xl font-black text-[#0B3D2E] group-hover:scale-110 transition-transform">N</span>
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">Next.js</span>
            </button>

            {/* PostgreSQL */}
            <button
              type="button"
              onClick={() => showToast("Penyimpanan transaksi terstruktur dengan PostgreSQL dan Prisma ORM.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="PostgreSQL Database"
            >
              <TbDatabase className="w-6 h-6 text-[#0B3D2E] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">PostgreSQL</span>
            </button>

            {/* Discord Gateway */}
            <button
              type="button"
              onClick={() => showToast("AlertFlow engine aktif menyiarkan sinyal webhook dan notifikasi ke Discord.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="Discord Gateway"
            >
              <SiDiscord className="w-6 h-6 text-[#0B3D2E] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">Discord</span>
            </button>

            {/* Cloudflare Edge */}
            <button
              type="button"
              onClick={() => showToast("Jaringan CDN & proteksi firewall enterprise berbasis Cloudflare Edge.")}
              className="group focus:outline-none transition-opacity hover:opacity-100 flex items-center gap-2 cursor-pointer"
              title="Cloudflare Edge"
            >
              <TbWorld className="w-6 h-6 text-[#0B3D2E] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[#0B3D2E] text-base tracking-tight">Cloudflare</span>
            </button>
          </div>
        </section>

        {/* ================= SERVICES SECTION (2x2 CHECKERBOARD GRID) ================= */}
        <section id="services" className="mb-16 md:mb-24">
          {/* Section Heading Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-10 md:mb-12">
            <h2 className="inline-block self-start bg-[#A3D9B5] text-[#0B3D2E] text-2xl sm:text-[32px] font-bold px-3 py-1 rounded-lg leading-tight border border-[#0B3D2E]/20">
              Solusi &amp; Layanan
            </h2>
            <p className="text-[#4F6F5E] text-sm sm:text-[15px] max-w-[520px] leading-relaxed">
              Arsitektur agen cerdas yang kami rekayasa dari fondasi terdalam untuk memangkas jam kerja manual, menjaga retensi pelanggan, dan melipatgandakan omset bisnis Anda:
            </p>
          </div>

          {/* 2x2 Services Grid (Neo-Brutalist Checkerboard) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
            {/* Card 1: WhatsApp Ops (Light Card) */}
            <article className="bg-[#0E2920] border border-[#1E4839] rounded-[32px] p-7 sm:p-9 shadow-brutal text-[#F4F1E6] hover:shadow-brutal-hover transition-all duration-200 flex flex-col justify-between min-h-[280px] group">
              <div className="flex justify-between items-start gap-4">
                <h3 className="flex flex-col items-start text-xl sm:text-2xl font-bold leading-snug">
                  <span className="bg-[#A3D9B5] text-[#0B3D2E] px-2.5 py-0.5 rounded-md border border-[#0B3D2E]/20">Autonomous WhatsApp</span>
                  <span className="bg-[#A3D9B5] text-[#0B3D2E] px-2.5 py-0.5 rounded-md border border-[#0B3D2E]/20 mt-1">Operations Agent</span>
                </h3>

                {/* Custom Vector Illustration */}
                <div className="w-36 sm:w-44 flex-shrink-0 pt-2">
                  <svg viewBox="0 0 180 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="130" height="85" rx="14" fill="#FFFFFF" stroke="#0B3D2E" strokeWidth="2" />
                    <rect x="38" y="42" width="70" height="14" rx="4" fill="#A3D9B5" stroke="#0B3D2E" strokeWidth="1.2" />
                    <rect x="68" y="66" width="72" height="22" rx="6" fill="#0B3D2E" />
                    <text x="76" y="81" fill="#F4F1E6" fontSize="10" fontFamily="Space Grotesk">Order Confirmed</text>
                    <circle cx="140" cy="40" r="14" fill="#A3D9B5" stroke="#0B3D2E" strokeWidth="1.5" />
                    <path d="M136 40L139 43L145 37" stroke="#0B3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openModal(servicesData.whatsapp)}
                  className="inline-flex items-center gap-3.5 text-[#0B3D2E] font-medium text-[15px] focus:outline-none cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#0B3D2E] text-[#A3D9B5] flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                  <span className="group-hover:underline underline-offset-4 font-bold">Pelajari Solusi</span>
                </button>
                <span className="text-xs font-mono text-[#4F6F5E] font-semibold">24/7 Live Agent</span>
              </div>
            </article>

            {/* Card 2: Private AI Infra (Dark Card in Forest Green) */}
            <article className="bg-[#0D261C] text-[#F4F1E6] border border-[#1E4839] rounded-[32px] p-7 sm:p-9 shadow-brutal hover:shadow-brutal-hover transition-all duration-200 flex flex-col justify-between min-h-[280px] group">
              <div className="flex justify-between items-start gap-4">
                <h3 className="flex flex-col items-start text-xl sm:text-2xl font-bold leading-snug text-dark">
                  <span className="bg-[#F4F1E6] text-[#0B3D2E] px-2.5 py-0.5 rounded-md">Private AI Infra</span>
                  <span className="bg-[#F4F1E6] text-[#0B3D2E] px-2.5 py-0.5 rounded-md mt-1">&amp; Self-Hosted LLM</span>
                </h3>

                {/* Custom Vector Illustration */}
                <div className="w-36 sm:w-44 flex-shrink-0 pt-2">
                  <svg viewBox="0 0 180 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="20" width="120" height="90" rx="10" fill="#0E4D3A" stroke="#F4F1E6" strokeWidth="2" />
                    <rect x="42" y="32" width="96" height="16" rx="4" fill="#F4F1E6" />
                    <rect x="42" y="56" width="96" height="16" rx="4" fill="#A3D9B5" stroke="#0B3D2E" strokeWidth="1.2" />
                    <rect x="42" y="80" width="96" height="16" rx="4" fill="#F4F1E6" />
                    <circle cx="124" cy="40" r="3" fill="#0B3D2E" />
                    <circle cx="124" cy="64" r="3" fill="#0B3D2E" />
                    <circle cx="124" cy="88" r="3" fill="#0B3D2E" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openModal(servicesData.infra)}
                  className="inline-flex items-center gap-3.5 text-[#F4F1E6] font-medium text-[15px] focus:outline-none cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#F4F1E6] text-[#0B3D2E] flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                  <span className="group-hover:underline underline-offset-4 font-bold">Pelajari Solusi</span>
                </button>
                <span className="text-xs font-mono text-[#A3D9B5] font-semibold">100% Data Isolasi</span>
              </div>
            </article>

            {/* Card 3: AlertFlow Engine (Dedicated Visual Card with Logo & Preview) */}
            <article className="bg-[#0B1E2B] text-[#F4F1E6] border border-[#0284C7]/40 rounded-[32px] p-7 sm:p-9 shadow-brutal hover:shadow-brutal-hover transition-all duration-200 flex flex-col justify-between min-h-[300px] group relative overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <img src="/alertflow/logo.jpg" alt="AlertFlow Logo" className="w-8 h-8 rounded-xl object-cover border border-cyan-400/50 shadow-sm" />
                    <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold px-2.5 py-0.5 rounded-md font-mono">
                      AlertFlow Engine
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">
                    Radar Sinyal Konten &amp; <br />
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Live Discord Bot</span>
                  </h3>
                  <p className="text-xs text-slate-300 max-w-[280px] leading-relaxed">
                    Memonitor TikTok &amp; YouTube secara real-time. Broadcast embed interaktif ke Discord tanpa delay.
                  </p>
                </div>

                {/* Live Preview Image Snapshot */}
                <div className="w-36 sm:w-44 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform bg-[#0B0F19]">
                  <img src="/alertflow/dashboard.jpg" alt="AlertFlow Preview" className="w-full h-auto object-cover" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 relative z-10">
                <button
                  type="button"
                  onClick={() => openModal(servicesData.alertflow)}
                  className="inline-flex items-center gap-2.5 text-cyan-300 hover:text-white font-bold text-sm focus:outline-none cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                    ↗
                  </span>
                  <span className="underline underline-offset-4">Lihat Contoh &amp; Detail</span>
                </button>
                <a
                  href="https://alertflow.akarporos.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-300 hover:text-white bg-[#06140E] px-3.5 py-1.5 rounded-full border border-cyan-500/40 hover:border-cyan-300 flex items-center gap-2 shadow-sm transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>alertflow.akarporos.tech ↗</span>
                </a>
              </div>
            </article>

            {/* Card 4: Data Scraper & Pipeline (Light Card) */}
            <article className="bg-[#0E2920] border border-[#1E4839] rounded-[32px] p-7 sm:p-9 shadow-brutal text-[#F4F1E6] hover:shadow-brutal-hover transition-all duration-200 flex flex-col justify-between min-h-[280px] group">
              <div className="flex justify-between items-start gap-4">
                <h3 className="flex flex-col items-start text-xl sm:text-2xl font-bold leading-snug">
                  <span className="bg-[#A3D9B5] text-[#0B3D2E] px-2.5 py-0.5 rounded-md border border-[#0B3D2E]/20">Custom Data Scraper</span>
                  <span className="bg-[#A3D9B5] text-[#0B3D2E] px-2.5 py-0.5 rounded-md border border-[#0B3D2E]/20 mt-1">&amp; Market Pipeline</span>
                </h3>

                {/* Custom Vector Illustration */}
                <div className="w-36 sm:w-44 flex-shrink-0 pt-2">
                  <svg viewBox="0 0 180 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 30L140 30L110 75L110 105L70 105L70 75Z" fill="#FFFFFF" stroke="#0B3D2E" strokeWidth="2" />
                    <rect x="75" y="85" width="30" height="10" fill="#A3D9B5" stroke="#0B3D2E" strokeWidth="1" />
                    <line x1="55" y1="42" x2="125" y2="42" stroke="#0B3D2E" strokeWidth="2" strokeLinecap="round" />
                    <line x1="65" y1="55" x2="115" y2="55" stroke="#0B3D2E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openModal(servicesData.scraper)}
                  className="inline-flex items-center gap-3.5 text-[#0B3D2E] font-medium text-[15px] focus:outline-none cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#0B3D2E] text-[#A3D9B5] flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                  <span className="group-hover:underline underline-offset-4 font-bold">Pelajari Solusi</span>
                </button>
                <span className="text-xs font-mono text-[#4F6F5E] font-semibold">Clean Structured ETL</span>
              </div>
            </article>
          </div>
        </section>

        {/* ================= CTA BANNER ("Wujudkan Otomasi Bisnis Anda") ================= */}
        <section className="mb-16 md:mb-24">
          <div className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[32px] px-7 sm:px-12 py-10 sm:py-12 relative overflow-visible grid grid-cols-1 md:grid-cols-12 items-center gap-8 shadow-brutal">
            {/* Left Text & CTA */}
            <div className="md:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
                Wujudkan Otomasi Bisnis Anda Bersama Kami
              </h2>
              <p className="text-[#4F6F5E] text-sm sm:text-[15px] leading-relaxed max-w-[440px]">
                Hubungi kami hari ini untuk menguji bagaimana sistem AI otonom dapat melipatgandakan kecepatan operasional dan penjualan perusahaan Anda tanpa risiko.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      badge: "Free Proposal",
                      title: "Dapatkan Proposal Kustom Akar Poros",
                      desc: "Ceritakan target efisiensi atau omset bisnis Anda. Kami kirimkan simulasi implementasi teknis dan kalkulasi ROI dalam 24 jam.",
                      metrics: ["Simulasi ROI Kustom", "Jaminan Privasi Data", "Pilot Trial 3 Hari"],
                      formHeading: "Request Proposal Gratis",
                    })
                  }
                  className="font-mono-btn bg-[#0B3D2E] text-[#F4F1E6] text-sm sm:text-[15px] px-7 py-4 rounded-xl hover:bg-[#A3D9B5] hover:text-[#0B3D2E] border border-[#0B3D2E] hover:shadow-brutal-sm transition-all duration-200 active:translate-y-0.5 font-bold cursor-pointer"
                >
                  Dapatkan Proposal Kustom ↗
                </button>
              </div>
            </div>

            {/* Right Illustration: Character, Rings & Mint Star */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="w-60 sm:w-72">
                <svg viewBox="0 0 280 210" className="w-full h-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="140" cy="110" rx="88" ry="26" stroke="#0B3D2E" strokeWidth="1.4" />
                  <ellipse cx="140" cy="122" rx="88" ry="26" stroke="#0B3D2E" strokeWidth="1.4" />
                  <ellipse cx="140" cy="134" rx="88" ry="26" stroke="#0B3D2E" strokeWidth="1.4" strokeDasharray="3 3" />

                  {/* Character Sphere in Forest Green */}
                  <g className="animate-float">
                    <circle cx="135" cy="78" r="34" fill="#0B3D2E" />
                    <ellipse cx="125" cy="76" rx="4.5" ry="10" fill="#F4F1E6" />
                    <ellipse cx="145" cy="76" rx="4.5" ry="10" fill="#F4F1E6" />
                  </g>

                  {/* Mint Green Star */}
                  <path
                    className="animate-star"
                    style={{ transformOrigin: "124px 168px" }}
                    d="M124 128C130 154 136 160 162 168C136 176 130 182 124 208C118 182 112 176 86 168C112 160 118 154 124 128Z"
                    fill="#A3D9B5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CASE STUDY SECTION ================= */}
        <section id="case-studies" className="mb-16 md:mb-24">
          {/* Section Heading Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-10 md:mb-12">
            <h2 className="inline-block self-start bg-[#A3D9B5] text-[#0B3D2E] text-2xl sm:text-[32px] font-bold px-3 py-1 rounded-lg leading-tight border border-[#0B3D2E]/20">
              Studi Kasus
            </h2>
            <p className="text-[#4F6F5E] text-sm sm:text-[15px] max-w-[480px] leading-relaxed">
              Hasil nyata implementasi sistem AI otonom yang langsung menggerakkan flywheel operasional klien kami:
            </p>
          </div>

          {/* Dark 3-Column Container in Forest Green */}
          <div className="bg-[#091E16] text-[#F4F1E6] rounded-[32px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1E4839] border border-[#1E4839] shadow-brutal">
            {/* Case 1 */}
            <div className="lg:pr-10 flex flex-col justify-between gap-6">
              <p className="text-[#F4F1E6]/90 text-sm sm:text-[15px] leading-relaxed">
                Untuk biro travel umroh, agen WhatsApp otonom menjawab konsultasi dan simulasi biaya jam 2 pagi secara instan, menghasilkan peningkatan konversi booking hingga 42%.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openModal(caseStudyData.umroh)}
                  className="inline-flex items-center gap-2.5 text-[#A3D9B5] font-medium text-[15px] hover:text-[#C7925B] hover:underline underline-offset-4 group focus:outline-none cursor-pointer"
                >
                  <span>Lihat Detail Studi</span>
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Case 2 */}
            <div className="lg:px-10 pt-8 lg:pt-0 border-t border-[#4F6F5E]/40 lg:border-t-0 flex flex-col justify-between gap-6">
              <p className="text-[#F4F1E6]/90 text-sm sm:text-[15px] leading-relaxed">
                Untuk jaringan komunitas kreator, AlertFlow mendeteksi postingan dan siaran live dalam &lt;10 detik, mem-broadcast notifikasi terkontrol ke 8 server Discord tanpa spam dobel.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openModal(caseStudyData.creator)}
                  className="inline-flex items-center gap-2.5 text-[#A3D9B5] font-medium text-[15px] hover:text-[#C7925B] hover:underline underline-offset-4 group focus:outline-none cursor-pointer"
                >
                  <span>Lihat Detail Studi</span>
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Case 3 */}
            <div className="lg:pl-10 pt-8 lg:pt-0 border-t border-[#4F6F5E]/40 lg:border-t-0 flex flex-col justify-between gap-6">
              <p className="text-[#F4F1E6]/90 text-sm sm:text-[15px] leading-relaxed">
                Untuk klinik dan bisnis berdata sensitif, arsitektur self-hosted LLM memproses rekam SOP secara lokal di VPS terisolasi tanpa ada satupun bit data yang keluar ke vendor pihak ketiga.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openModal(caseStudyData.enterprise)}
                  className="inline-flex items-center gap-2.5 text-[#A3D9B5] font-medium text-[15px] hover:text-[#C7925B] hover:underline underline-offset-4 group focus:outline-none cursor-pointer"
                >
                  <span>Lihat Detail Studi</span>
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE PRICING & INSIGHTS TABS ================= */}
        <section id="pricing-section" className="mb-16 md:mb-20 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <h2 className="inline-block self-start bg-[#A3D9B5] text-[#0B3D2E] text-2xl sm:text-[28px] font-bold px-3 py-1 rounded-lg leading-tight border border-[#0B3D2E]/20">
                Paket &amp; Wawasan
              </h2>
              <p className="text-[#4F6F5E] text-sm sm:text-[15px] max-w-[460px]">
                Skema implementasi transparan dan playbook rekayasa otomasi yang disesuaikan dengan skala bisnis Anda.
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="inline-flex bg-[#EAF1EB] p-1.5 rounded-2xl border border-[#0B3D2E] self-start">
              <button
                type="button"
                onClick={() => setActiveTab("pricing")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "pricing"
                    ? "bg-[#0B3D2E] text-[#F4F1E6]"
                    : "text-[#0B3D2E] hover:bg-[#A3D9B5]/50"
                }`}
              >
                Paket Layanan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("blog")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "blog"
                    ? "bg-[#0B3D2E] text-[#F4F1E6]"
                    : "text-[#0B3D2E] hover:bg-[#A3D9B5]/50"
                }`}
              >
                Wawasan AI
              </button>
            </div>
          </div>

          {/* Pricing Tab Panel */}
          {activeTab === "pricing" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#F4F1E6] border border-[#0B3D2E] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 text-[#0B3D2E]">
                    Starter Pilot
                  </span>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#0B3D2E]">Rp 2,5 Jt</span>
                    <span className="text-[#4F6F5E] text-sm">/bulan</span>
                  </div>
                  <p className="text-[#4F6F5E] text-sm mb-6">
                    Ideal untuk UMKM, travel, atau klinik yang ingin mengotomasi respon WhatsApp 24/7.
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#0B3D2E] mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      1 Nomor WhatsApp Bisnis Otonom 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      Integrasi Google Sheets Leads Auto-Sync
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      SOP Khusus Bisnis &amp; Human Hand-off
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      badge: "Starter Pilot",
                      title: "Pilih Paket Starter Pilot (Rp 2,5 Jt/bln)",
                      desc: "Dapatkan asisten WhatsApp bisnis yang langsung aktif dalam 48 jam dengan pendampingan penuh.",
                      metrics: ["Trial 3 Hari", "Tanpa Setup Fee Rumit", "Support Teknis 24/7"],
                      selectValue: "Autonomous WhatsApp Operations",
                      formHeading: "Konfirmasi Paket Starter Pilot",
                    })
                  }
                  className="font-mono-btn w-full py-3 rounded-xl border border-[#0B3D2E] bg-white hover:bg-[#A3D9B5] text-[#0B3D2E] font-bold text-sm transition-colors cursor-pointer"
                >
                  Pilih Starter
                </button>
              </div>

              {/* Growth Pro (Featured Dark Card in Forest Green) */}
              <div className="bg-[#0B3D2E] text-[#F4F1E6] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#A3D9B5] text-[#0B3D2E] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Paling Populer
                  </span>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#F4F1E6]">Rp 6,0 Jt</span>
                    <span className="text-[#A3D9B5] text-sm">/bulan</span>
                  </div>
                  <p className="text-[#F4F1E6]/80 text-sm mb-6">
                    Solusi lengkap otomasi WhatsApp multi-cabang ditambah radar event AlertFlow.
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#F4F1E6]/90 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] inline-block flex-shrink-0" />
                      Hingga 3 Nomor WhatsApp &amp; Routing Cabang
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] inline-block flex-shrink-0" />
                      AlertFlow Radar Komunitas (Discord / Telegram)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] inline-block flex-shrink-0" />
                      Database Dedicated &amp; Dashboard Pemantau
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      badge: "Growth Pro",
                      title: "Pilih Paket Growth Pro (Rp 6,0 Jt/bln)",
                      desc: "Akselerasikan efisiensi seluruh kanal komunikasi bisnis dengan multi-agent routing dan dashboard terpusat.",
                      metrics: ["Multi-Agent Routing", "Dashboard Analytics", "SLA 99.9% Uptime"],
                      selectValue: "Full-Funnel Growth Package",
                      formHeading: "Konfirmasi Paket Growth Pro",
                    })
                  }
                  className="font-mono-btn w-full py-3 rounded-xl bg-[#A3D9B5] text-[#0B3D2E] hover:bg-[#F4F1E6] font-bold text-sm transition-colors cursor-pointer"
                >
                  Pilih Growth Pro
                </button>
              </div>

              {/* Enterprise */}
              <div className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#F4F1E6] border border-[#0B3D2E] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 text-[#0B3D2E]">
                    Enterprise
                  </span>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#0B3D2E]">Kustom</span>
                    <span className="text-[#4F6F5E] text-sm">/kebutuhan</span>
                  </div>
                  <p className="text-[#4F6F5E] text-sm mb-6">
                    Infrastruktur AI mandiri on-premise, pipeline scraper ribuan SKU, dan arsitektur data privat.
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#0B3D2E] mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      Self-Hosted LLM di Server Mandiri Klien
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      Custom Data Scraping &amp; Market Intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#A3D9B5] border border-[#0B3D2E] inline-block flex-shrink-0" />
                      Tim Arsitek Khusus &amp; Retainer Eksklusif
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      badge: "Enterprise Dedicated",
                      title: "Konsultasi Kebutuhan Enterprise",
                      desc: "Diskusikan kebutuhan arsitektur sistem khusus dan integrasi on-premise bersama tim engineering kami.",
                      metrics: ["Non-Disclosure Agreement (NDA)", "Dedicated Lead Architect", "SLA Kustom"],
                      selectValue: "Private Self-Hosted AI Infrastructure",
                      formHeading: "Request Diskusi Enterprise",
                    })
                  }
                  className="font-mono-btn w-full py-3 rounded-xl border border-[#0B3D2E] bg-white hover:bg-[#A3D9B5] text-[#0B3D2E] font-bold text-sm transition-colors cursor-pointer"
                >
                  Hubungi Arsitek
                </button>
              </div>
            </div>
          )}

          {/* Blog / Wawasan Tab Panel */}
          {activeTab === "blog" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#A3D9B5] text-[#0B3D2E] text-xs font-bold px-2.5 py-1 rounded-md mb-3 border border-[#0B3D2E]/20">
                    Arsitektur Agen
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-[#0B3D2E]">Mengapa Chatbot Rule-Based Ketinggalan Zaman</h3>
                  <p className="text-[#4F6F5E] text-sm mb-4">
                    Bagaimana agen berbasis context-memory memproses bahasa natural tanpa membuat prospek Anda frustrasi dengan opsi angka kaku.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(servicesData.whatsapp)}
                  className="text-sm font-bold inline-flex items-center gap-2 hover:underline text-[#0B3D2E] cursor-pointer"
                >
                  <span>Baca ringkasan teknis</span>
                  <span>↗</span>
                </button>
              </article>

              <article className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#A3D9B5] text-[#0B3D2E] text-xs font-bold px-2.5 py-1 rounded-md mb-3 border border-[#0B3D2E]/20">
                    Keamanan Data
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-[#0B3D2E]">Mencegah Kebocoran Data Rahasia Perusahaan</h3>
                  <p className="text-[#4F6F5E] text-sm mb-4">
                    Strategi isolasi container dan self-hosted LLM untuk menjaga dokumen internal tidak dijadikan bahan pelatihan model cloud publik.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(servicesData.infra)}
                  className="text-sm font-bold inline-flex items-center gap-2 hover:underline text-[#0B3D2E] cursor-pointer"
                >
                  <span>Baca ringkasan teknis</span>
                  <span>↗</span>
                </button>
              </article>

              <article className="bg-[#EAF1EB] border border-[#0B3D2E] rounded-[28px] p-7 shadow-brutal-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#A3D9B5] text-[#0B3D2E] text-xs font-bold px-2.5 py-1 rounded-md mb-3 border border-[#0B3D2E]/20">
                    Otomasi Penjualan
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-[#0B3D2E]">Menangkap Leads Tengah Malam Secara Realtime</h3>
                  <p className="text-[#4F6F5E] text-sm mb-4">
                    Data empiris mengapa jeda respon di atas 15 menit menurunkan probabilitas closing sebesar 80% pada pasar digital Indonesia.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(caseStudyData.umroh)}
                  className="text-sm font-bold inline-flex items-center gap-2 hover:underline text-[#0B3D2E] cursor-pointer"
                >
                  <span>Baca ringkasan teknis</span>
                  <span>↗</span>
                </button>
              </article>
            </div>
          )}
        </section>

        {/* ================= ARSITEK / FOUNDER PROFILE ================= */}
        <section id="arsitek" className="py-12 mb-16 md:mb-20">
          <div className="p-8 sm:p-10 rounded-[32px] bg-[#EAF1EB] border border-[#0B3D2E] shadow-brutal flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-[#0B3D2E] border-2 border-[#A3D9B5] flex items-center justify-center text-[#A3D9B5] font-black text-3xl shadow-brutal-sm shrink-0">
              RP
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[11px] font-mono text-[#0B3D2E] font-bold uppercase tracking-widest block mb-1">
                Founder &amp; AI Systems Architect
              </span>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-2">Raka Putra Pratidina</h3>
              <p className="text-sm text-[#4F6F5E] leading-relaxed mb-5">
                Spesialis rekayasa sistem agen otonom, infrastruktur backend mandiri, web intelligence, dan automasi proses bisnis nyata. Membangun Akar Poros sebagai studio teknologi yang mentransformasi kapabilitas AI menjadi pengungkit omset dan efisiensi operasional bisnis.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono font-bold">
                <a
                  href="https://rakaputra.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#0B3D2E] hover:underline underline-offset-4"
                >
                  <span>rakaputra.dev</span>
                  <TbArrowUpRight className="w-3.5 h-3.5 text-[#0B3D2E]" />
                </a>
                <span className="text-[#4F6F5E]">•</span>
                <a
                  href="https://github.com/Akarptra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#0B3D2E] hover:underline underline-offset-4"
                >
                  <span>GitHub Profile</span>
                  <TbArrowUpRight className="w-3.5 h-3.5 text-[#0B3D2E]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-[#0B3D2E] text-[#F4F1E6] rounded-[32px] p-8 sm:p-12 shadow-brutal border border-[#0B3D2E]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#4F6F5E]/40">
            <a href="#hero" className="flex items-center gap-2.5">
              <AkarPorosLogo size="sm" theme="dark" showTagline={false} />
            </a>
            <div className="flex flex-wrap gap-6 text-sm text-[#F4F1E6]/80">
              <button onClick={() => scrollToSection("about")} className="hover:text-[#A3D9B5] transition-colors cursor-pointer">
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-[#A3D9B5] transition-colors cursor-pointer">
                Solusi &amp; Layanan
              </button>
              <button onClick={() => scrollToSection("case-studies")} className="hover:text-[#A3D9B5] transition-colors cursor-pointer">
                Studi Kasus
              </button>
              <button onClick={() => scrollToSection("pricing-section")} className="hover:text-[#A3D9B5] transition-colors cursor-pointer">
                Paket Biaya
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            <div className="lg:col-span-5 space-y-2 text-sm text-[#F4F1E6]/80">
              <span className="inline-block bg-[#A3D9B5] text-[#0B3D2E] font-bold px-2.5 py-0.5 rounded text-xs mb-1">
                Kontak Studio:
              </span>
              <p>WhatsApp: +62 812-2061-9281</p>
              <p>Email: rakaputra@akarporos.tech</p>
              <p>Domain Resmi: akarporos.tech</p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="lg:col-span-7 bg-[#0E4D3A] p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row gap-3 border border-[#4F6F5E]/40"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 bg-[#0B3D2E] border border-[#4F6F5E] rounded-xl px-4 py-3 text-sm text-[#F4F1E6] placeholder-[#4F6F5E] focus:outline-none focus:border-[#A3D9B5]"
              />
              <button
                type="submit"
                className="font-mono-btn bg-[#A3D9B5] text-[#0B3D2E] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#F4F1E6] transition-colors cursor-pointer"
              >
                Berlangganan Wawasan
              </button>
            </form>
          </div>

          <div className="pt-8 mt-8 border-t border-[#4F6F5E]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F1E6]/60 gap-4">
            <span>© {new Date().getFullYear()} PT Akar Poros Teknologi. Seluruh hak cipta dilindungi.</span>
            <span className="font-mono text-[#A3D9B5]">Membangun sistem AI dari akarnya.</span>
          </div>
        </footer>
      </div>

      {/* ================= INTERACTIVE MODAL (Proposal / Consultation / Showcase) ================= */}
      {modalOpen && modalConfig && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#0D261C] border-2 border-[#1E4839] rounded-[32px] shadow-brutal text-[#F4F1E6] max-w-lg w-full p-7 sm:p-9 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Tutup modal"
              onClick={closeModal}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#13382C] border border-[#1E4839] text-[#A3D9B5] flex items-center justify-center hover:bg-[#A3D9B5] hover:text-[#06140E] transition-colors cursor-pointer font-bold"
            >
              ✕
            </button>

            {/* Dynamic Modal Content Container */}
            <div>
              <span className="inline-block bg-[#A3D9B5] text-[#06140E] text-xs font-bold px-2.5 py-1 rounded-md mb-3 border border-[#A3D9B5]/40 font-mono">
                {modalConfig.badge}
              </span>
              <h3 className="text-2xl font-bold text-white leading-snug mb-2">{modalConfig.title}</h3>
              <p className="text-[#A8C7B5] text-sm leading-relaxed">{modalConfig.desc}</p>

              {modalConfig.metrics && modalConfig.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                  {modalConfig.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-[#06140E] border border-[#1E4839] rounded-xl px-3 py-2 text-xs font-bold text-[#A3D9B5] text-center"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              )}

              {/* Showcase Images (Banner, Dashboard, Discord Preview) */}
              {modalConfig.image && (
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-[#1E4839] bg-[#06140E] shadow-md">
                    <img
                      src={modalConfig.image}
                      alt={modalConfig.title}
                      className="w-full h-auto max-h-56 object-cover"
                    />
                  </div>
                  {modalConfig.secondaryImage && (
                    <div className="rounded-2xl overflow-hidden border border-[#1E4839] bg-[#06140E] shadow-md">
                      <img
                        src={modalConfig.secondaryImage}
                        alt="Preview Banner"
                        className="w-full h-auto max-h-48 object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* External CTA Links (e.g. AlertFlow Web & Bot Invite) */}
              {modalConfig.externalLink && (
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={modalConfig.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-mono-btn bg-[#A3D9B5] text-[#06140E] font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl border border-[#A3D9B5] shadow-brutal hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>{modalConfig.externalLink.label}</span>
                  </a>
                  {modalConfig.secondaryLink && (
                    <a
                      href={modalConfig.secondaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-mono-btn bg-[#06140E] text-cyan-300 font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl border border-cyan-500/40 hover:border-cyan-300 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{modalConfig.secondaryLink.label}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Shared Lead Form inside Modal */}
            <form onSubmit={handleModalSubmit} className="mt-6 pt-6 border-t border-[#1E4839] space-y-4">
              <h4 className="text-base font-bold text-[#0B3D2E]">
                {modalConfig.formHeading || "Formulir Konsultasi & Proposal"}
              </h4>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4F6F5E] mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Budi Santoso"
                  className="w-full bg-[#06140E] border border-[#1E4839] text-[#F4F1E6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A3D9B5]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4F6F5E] mb-1">
                    Email Kerja / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="budi@perusahaan.com"
                    className="w-full bg-[#06140E] border border-[#1E4839] text-[#F4F1E6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A3D9B5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4F6F5E] mb-1">
                    Fokus Solusi
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-[#06140E] border border-[#1E4839] text-[#F4F1E6] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#A3D9B5]"
                  >
                    <option value="Autonomous WhatsApp Operations">Autonomous WhatsApp Operations</option>
                    <option value="Private Self-Hosted AI Infrastructure">Private AI Infrastructure</option>
                    <option value="AlertFlow Realtime Engine">AlertFlow Realtime Engine</option>
                    <option value="Custom Data Scraper & Pipeline">Custom Data Scraper &amp; Pipeline</option>
                    <option value="Full-Funnel Growth Package">Full-Funnel Growth Package</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4F6F5E] mb-1">
                  Target Bisnis / Kebutuhan
                </label>
                <textarea
                  rows={2}
                  value={formGoals}
                  onChange={(e) => setFormGoals(e.target.value)}
                  placeholder="Ceritakan proses bisnis yang ingin diotomasi..."
                  className="w-full bg-[#06140E] border border-[#1E4839] text-[#F4F1E6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#A3D9B5]"
                />
              </div>
              <button
                type="submit"
                className="font-mono-btn w-full bg-[#0B3D2E] text-[#F4F1E6] hover:bg-[#A3D9B5] hover:text-[#0B3D2E] border border-[#0B3D2E] font-bold text-sm py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                Kirim Permintaan ↗
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
