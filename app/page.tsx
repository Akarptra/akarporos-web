"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Server,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Radio,
  Layers,
  ChevronRight,
  Workflow,
  Database,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const WA_LINK =
    "https://wa.me/6281220619281?text=Halo%20Akar%20Poros%2C%20saya%20tertarik%20konsultasi%20solusi%20AI%20dan%20pilot%20trial%20untuk%20bisnis%20saya.";

  const products = [
    {
      id: "whatsapp-ops",
      category: "Customer Operations",
      name: "Autonomous WhatsApp Ops",
      badge: "L4 Autonomous Agent",
      status: "Production Ready",
      subdomain: "wa.akarporos.tech",
      description:
        "Asisten WhatsApp bisnis otonom 24/7. Menjawab konsultasi, jadwal, dan booking tengah malam secara instan, mengkualifikasi leads, dan merekap data otomatis ke Google Sheets & CRM tanpa intervensi manual.",
      highlights: [
        "Jawab instan 24 jam (hilangkan loss closing jam malam)",
        "Sinkronisasi multi-arah Google Sheets, Drive, & database",
        "Konteks SOP bisnis akurat tanpa halusinasi",
        "Human handoff pintar jika butuh penanganan khusus",
      ],
      idealFor: "Travel Umroh/Haji, Klinik Kesehatan, Salon, Jasa & Konsultan",
      icon: MessageSquare,
      color: "emerald",
    },
    {
      id: "alertflow",
      category: "Real-time Monitoring",
      name: "AlertFlow Engine",
      badge: "Live in 8+ Servers",
      status: "Production Ready",
      subdomain: "alertflow.akarporos.tech",
      description:
        "Mesin radar otonom multi-platform. Memonitor konten fresh TikTok, YouTube Live, dan event webhook tanpa jeda, lalu mem-broadcast notifikasi terkontrol ke Discord & komunitas dengan deduplikasi ketat.",
      highlights: [
        "Monotonic ID guard (anti-duplicate & strictly fresh)",
        "Autonomous watcher loop dengan resilient auto-retry",
        "Dashboard admin terintegrasi & monitoring instan",
        "Multi-server tenant isolation di cloud container",
      ],
      idealFor: "Komunitas Kreator, Media Network, Trader, Brand Monitoring",
      icon: Radio,
      color: "cyan",
    },
    {
      id: "data-pipeline",
      category: "Data & Intelligence",
      name: "Custom Data Scraper & Pipeline",
      badge: "Stealth Architecture",
      status: "Custom Build",
      subdomain: null,
      description:
        "Arsitektur ekstraksi data publik skala besar dengan bypass proteksi WAF tingkat lanjut. Mengubah jutaan titik data pasar, katalog kompetitor, dan sinyal industri menjadi aliran data bersih siap pakai.",
      highlights: [
        "Anti-detection browser cluster & smart proxy rotation",
        "Structured schema extraction (JSON/PostgreSQL)",
        "Automated scheduled cron dengan anomaly alerting",
        "Patuhi batasan etis & kebijakan data publik",
      ],
      idealFor: "Market Intelligence, Price Monitoring, Lead Enrichment",
      icon: Database,
      color: "purple",
    },
    {
      id: "private-infra",
      category: "Infrastructure",
      name: "Private & Self-Hosted AI Infra",
      badge: "Zero Data Leak",
      status: "Enterprise Standard",
      subdomain: null,
      description:
        "Deployment sistem AI mandiri di server privat (VPS/On-Premise) milik klien. Menjamin data internal perusahaan tidak pernah bocor ke pihak ketiga melalui isolasi container Pterodactyl/Docker.",
      highlights: [
        "100% kepemilikan data & private runtime",
        "Resource limit per-container (RAM/CPU aman)",
        "Audit trail lengkap & systemd watchdog auto-heal",
        "Zero dependency pada langganan software vendor kaku",
      ],
      idealFor: "Bisnis Menengah, Korporasi Finansial, Data-Sensitive Orgs",
      icon: Server,
      color: "amber",
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-hidden bg-grid-pattern">
      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] -left-48 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-[1400px] -right-48 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090a0f]/80 border-b border-[#1f2438]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-black text-sm tracking-tighter group-hover:scale-105 transition-transform">
              AP
            </div>
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              Akar Poros
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                STUDIO
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[#9ca3af]">
            <a href="#solusi" className="hover:text-white transition-colors">
              Produk & Solusi
            </a>
            <a href="#filosofi" className="hover:text-white transition-colors">
              Filosofi
            </a>
            <a href="#keunggulan" className="hover:text-white transition-colors">
              Mengapa Kami
            </a>
            <a href="#arsitek" className="hover:text-white transition-colors">
              Founder
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Pilot Trial 3 Hari</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11131c] border border-[#1f2438] text-xs text-[#9ca3af] mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-emerald-400 font-semibold tracking-wide uppercase text-[11px]">
            Autonomous AI Systems & Engineering Studio
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Kami Bangun Sistem AI dari{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Akar
          </span>
          ,<br className="hidden sm:inline" /> Anda Tinggal Skalakan.
        </h1>

        <p className="text-base sm:text-xl text-[#9ca3af] max-w-2xl mx-auto leading-relaxed mb-10">
          Bukan sekadar bot atau software kaku. Kami mengimplementasikan sistem otomasi otonom 24/7 yang menyatu dengan SOP bisnis nyata — dari asisten WhatsApp, radar monitor komunitas, hingga infrastruktur data privat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-sm transition-all shadow-xl shadow-emerald-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasi Proyek (WhatsApp)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#solusi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#11131c] hover:bg-[#161a29] border border-[#1f2438] text-white font-medium text-sm transition-all"
          >
            <span>Lihat Solusi Siap Pakai</span>
            <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-16 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#11131c]/70 border border-[#1f2438]/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold text-white font-mono">24/7</div>
            <div className="text-xs text-[#9ca3af] mt-1">Autonomous Runtime</div>
          </div>
          <div className="p-4 rounded-xl bg-[#11131c]/70 border border-[#1f2438]/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">&lt; 10s</div>
            <div className="text-xs text-[#9ca3af] mt-1">Event Latency</div>
          </div>
          <div className="p-4 rounded-xl bg-[#11131c]/70 border border-[#1f2438]/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold text-cyan-400 font-mono">100%</div>
            <div className="text-xs text-[#9ca3af] mt-1">Private Data Isolation</div>
          </div>
          <div className="p-4 rounded-xl bg-[#11131c]/70 border border-[#1f2438]/80 backdrop-blur-sm">
            <div className="text-2xl font-extrabold text-white font-mono">3-Day</div>
            <div className="text-xs text-[#9ca3af] mt-1">Risk-Free Pilot Trial</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofi" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#1f2438]">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            DNA &amp; Filosofi Rekayasa
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mengapa Bernama Akar Poros?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-[#11131c] border border-[#1f2438] relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Akar — Fondasi yang Kokoh</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Bukan sekadar antarmuka luar yang rapuh. Kami membangun fondasi dari arsitektur backend terdalam: koneksi database terisolasi, self-hosted LLM gateway, dan integrasi data internal yang privat dan tahan benturan.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#11131c] border border-[#1f2438] relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Poros — Roda Penggerak Tanpa Henti</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Poros adalah sumbu flywheel yang terus berputar. Begitu sistem dipasang, agent otonom bekerja di latar belakang: memantau sinyal, menjawab prospek bisnis, dan menyinkronkan data tanpa perlu disentuh manual lagi.
            </p>
          </div>
        </div>
      </section>

      {/* Products & Solutions Section */}
      <section id="solusi" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#1f2438]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Katalog Produk &amp; Solusi
            </h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sistem Nyata yang Kami Bangun
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#11131c] border border-[#1f2438] self-start md:self-auto text-xs">
            {["all", "Operations", "Monitoring", "Data", "Infrastructure"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all capitalize font-medium ${
                  activeTab === tab
                    ? "bg-emerald-500 text-black font-semibold"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                {tab === "all" ? "Semua" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="p-7 rounded-2xl bg-[#11131c] border border-[#1f2438] hover:border-[#2d3450] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#161a29] border border-[#1f2438] flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                          {p.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {p.name}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#161a29] text-[#9ca3af] border border-[#1f2438]">
                      {p.badge}
                    </span>
                  </div>

                  <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#cbd5e1]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#1f2438] flex items-center justify-between text-xs">
                  <div className="text-[#9ca3af]">
                    <span className="text-[10px] uppercase font-mono block text-[#64748b]">
                      Target Pengguna
                    </span>
                    <span className="font-medium text-[#cbd5e1]">{p.idealFor}</span>
                  </div>

                  {p.subdomain ? (
                    <a
                      href={`https://${p.subdomain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a29] hover:bg-emerald-500 hover:text-black text-white font-semibold transition-all border border-[#1f2438]"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161a29] hover:bg-emerald-500 hover:text-black text-white font-semibold transition-all border border-[#1f2438]"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Akar Poros Model — Done For You Service */}
      <section id="keunggulan" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#1f2438]">
        <div className="text-center mb-14">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Mengapa Bukan SaaS Kaku
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Pendekatan &quot;Terima Beres&quot; untuk Pasar Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#11131c] border border-[#1f2438]">
            <div className="text-emerald-400 font-mono text-sm mb-3">01 / Done-For-You</div>
            <h4 className="text-base font-bold text-white mb-2">Terima Ikannya, Bukan Pancing</h4>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Anda tidak perlu belajar prompt engineering atau menyewa tim teknis mahal. Kami rancang, pasang, dan rawat sistem A–Z hingga langsung menghasilkan dampak bisnis.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11131c] border border-[#1f2438]">
            <div className="text-cyan-400 font-mono text-sm mb-3">02 / Mengikuti SOP Anda</div>
            <h4 className="text-base font-bold text-white mb-2">Sistem Menyesuaikan Bisnis</h4>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Bukan memaksa tim Anda belajar software baru. Agen kami beroperasi langsung di kanal yang sudah Anda gunakan: WhatsApp, Google Sheets, Drive, dan email.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11131c] border border-[#1f2438]">
            <div className="text-purple-400 font-mono text-sm mb-3">03 / Autonomous 24/7</div>
            <h4 className="text-base font-bold text-white mb-2">Otonom di Latar Belakang</h4>
            <p className="text-xs text-[#9ca3af] leading-relaxed">
              Sistem kami proaktif bergerak sendiri: memantau data, memicu notifikasi saat ada anomali, dan menangani prospek pelanggan tanpa menunggu perintah harian.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section id="arsitek" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#1f2438]">
        <div className="p-8 rounded-2xl bg-[#11131c] border border-[#1f2438] flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-black font-black text-3xl shadow-xl shadow-emerald-500/10 shrink-0">
            RP
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              Founder &amp; AI Systems Architect
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">Raka Putra Pratidina</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-5">
              Fokus pada rekayasa sistem AI otonom, infrastruktur backend mandiri, web intelligence, dan automasi proses bisnis nyata. Membangun Akar Poros sebagai studio teknologi yang mentransformasi kapabilitas AI menjadi pengungkit omset dan efisiensi operasional.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-xs">
              <a
                href="https://rakaputra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 font-semibold transition-colors"
              >
                <span>rakaputra.dev</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#334155]">•</span>
              <a
                href="https://github.com/Akarptra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 font-semibold transition-colors"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#141824] to-[#0c0e17] border border-[#1f2438] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3">
            Validasi Cepat Tanpa Beban
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Buktikan di Bisnis Anda Selama 3 Hari.
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af] max-w-xl mx-auto leading-relaxed mb-8">
            Kami pasang prototipe asisten WA atau sistem notifikasi di operasional Anda. Jika tidak memberikan dampak nyata, hapus tanpa biaya komitmen.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-emerald-500/25"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Mulai Uji Coba Pilot (WhatsApp)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#1f2438] text-center text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">Akar Poros</span>
            <span>—</span>
            <span>© {new Date().getFullYear()} PT Akar Poros Teknologi. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 text-[#9ca3af]">
            <a href="https://akarporos.tech" className="hover:text-white transition-colors">
              akarporos.tech
            </a>
            <a href="https://rakaputra.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              rakaputra.dev
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              Kontak WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
