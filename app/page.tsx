"use client";

import React from "react";
import {
  TbBrandWhatsapp,
  TbArrowUpRight,
  TbShieldLock,
  TbCheck,
  TbTerminal2,
} from "react-icons/tb";
import {
  SiDiscord,
  SiTiktok,
} from "react-icons/si";
import { FiArrowRight, FiZap } from "react-icons/fi";
import { AkarPorosEmblem, AkarPorosLogo } from "./components/AkarPorosLogo";

export default function Home() {
  const WA_LINK =
    "https://wa.me/6281220619281?text=Halo%20Akar%20Poros%2C%20saya%20tertarik%20konsultasi%20solusi%20AI%20dan%20pilot%20trial%20untuk%20bisnis%20saya.";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07261E] text-[#F4F1E6] selection:bg-[#C7925B]/25 selection:text-[#F4F1E6] font-sans antialiased relative overflow-hidden">
      {/* Precision ambient background glow using Forest Green & Copper */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#0B3D2E]/40 via-[#C7925B]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] -left-64 w-[500px] h-[500px] bg-[#0B3D2E]/25 blur-[160px] pointer-events-none" />
      <div className="absolute top-[1600px] -right-64 w-[500px] h-[500px] bg-[#C7925B]/10 blur-[160px] pointer-events-none" />

      {/* Grid line background overlay with subtle sage tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4F6F5E 1px, transparent 1px), linear-gradient(to bottom, #4F6F5E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Navigation — Ultra Clean, Official Brand Colors */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07261E]/90 border-b border-[#4F6F5E]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AkarPorosLogo size="sm" showTagline={false} />
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B3D2E] text-[#C7925B] border border-[#C7925B]/30 font-semibold tracking-wide uppercase">
              STUDIO
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#F4F1E6]/70">
            <button
              onClick={() => scrollToSection("solusi")}
              className="hover:text-[#C7925B] transition-colors cursor-pointer"
            >
              Solusi &amp; Produk
            </button>
            <button
              onClick={() => scrollToSection("filosofi")}
              className="hover:text-[#C7925B] transition-colors cursor-pointer"
            >
              Filosofi
            </button>
            <button
              onClick={() => scrollToSection("keunggulan")}
              className="hover:text-[#C7925B] transition-colors cursor-pointer"
            >
              Model Jasa
            </button>
            <button
              onClick={() => scrollToSection("arsitek")}
              className="hover:text-[#C7925B] transition-colors cursor-pointer"
            >
              Arsitek
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B3D2E] hover:bg-[#0E4D3A] border border-[#4F6F5E]/40 text-xs font-semibold text-[#F4F1E6] transition-all"
            >
              <TbBrandWhatsapp className="w-3.5 h-3.5 text-[#C7925B]" />
              <span>Kontak</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C7925B] hover:bg-[#D6A068] text-[#07261E] font-bold text-xs transition-all shadow-lg shadow-[#C7925B]/20"
            >
              <FiZap className="w-3.5 h-3.5 fill-[#07261E]" />
              <span>Pilot 3 Hari</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section — Taste-Skill Typography & Negative Space */}
      <section className="pt-20 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        {/* Brand Emblem Spotlight */}
        <div className="mb-6 flex justify-center">
          <div className="p-3.5 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 shadow-2xl shadow-[#0B3D2E]/60 inline-flex items-center justify-center">
            <AkarPorosEmblem className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3D2E]/80 border border-[#4F6F5E]/30 text-xs text-[#F4F1E6]/80 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C7925B] animate-pulse" />
          <span className="font-mono text-[#C7925B] text-[11px] font-semibold tracking-wider uppercase">
            Membangun sistem AI dari akarnya.
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F4F1E6] leading-[1.08] mb-6">
          Kami Bangun Sistem AI dari{" "}
          <span className="text-[#C7925B]">
            Akar
          </span>
          ,<br /> Anda Tinggal Skalakan.
        </h1>

        <p className="text-base sm:text-lg text-[#F4F1E6]/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Bukan sekadar software kaku yang memaksa Anda beradaptasi. Kami merekayasa solusi AI otonom 24/7 yang menyatu dengan SOP bisnis nyata: asisten WhatsApp tanpa jeda, radar monitor komunitas, dan infrastruktur data privat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C7925B] hover:bg-[#D6A068] text-[#07261E] font-bold text-sm transition-all shadow-xl shadow-[#C7925B]/20"
          >
            <TbBrandWhatsapp className="w-4 h-4 text-[#07261E]" />
            <span>Mulai Uji Coba Pilot (WhatsApp)</span>
            <FiArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection("solusi")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B3D2E]/70 hover:bg-[#0B3D2E] border border-[#4F6F5E]/40 text-[#F4F1E6] font-medium text-sm transition-all cursor-pointer"
          >
            <span>Jelajahi Solusi Siap Pakai</span>
            <TbArrowUpRight className="w-4 h-4 text-[#C7925B]" />
          </button>
        </div>

        {/* Telemetry Status Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#0B3D2E]/50 border border-[#4F6F5E]/30 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-[#F4F1E6] font-mono">24/7</div>
            <div className="text-xs text-[#4F6F5E] mt-0.5">Autonomous Runtime</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B3D2E]/50 border border-[#4F6F5E]/30 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-[#C7925B] font-mono">&lt; 10s</div>
            <div className="text-xs text-[#4F6F5E] mt-0.5">Event Latency</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B3D2E]/50 border border-[#4F6F5E]/30 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-[#F4F1E6] font-mono">100%</div>
            <div className="text-xs text-[#4F6F5E] mt-0.5">Data Isolation</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B3D2E]/50 border border-[#4F6F5E]/30 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-[#C7925B] font-mono">3 Hari</div>
            <div className="text-xs text-[#4F6F5E] mt-0.5">Risk-Free Pilot</div>
          </div>
        </div>
      </section>

      {/* Bento Showcase — Asymmetric & Diverse Layout (taste-skill compliant) */}
      <section id="solusi" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#4F6F5E]/20">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7925B] block mb-2 font-semibold">
            Katalog Produk &amp; Solusi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E6] tracking-tight">
            Sistem Nyata yang Kami Bangun
          </h2>
          <p className="text-sm text-[#F4F1E6]/70 mt-2 max-w-xl">
            Solusi yang sudah teruji melayani operasional aktif, dirancang untuk langsung mendongkrak efisiensi dan pendapatan bisnis.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-5">
          {/* Bento Card 1: Autonomous WhatsApp Ops (Large, 7 cols) */}
          <div className="col-span-12 lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-[#07261E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7925B]/5 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07261E] text-[#C7925B] border border-[#C7925B]/30 font-semibold tracking-wide uppercase">
                  Flagship Solution • L4 Agent
                </span>
                <span className="text-xs text-[#4F6F5E] font-mono">wa.akarporos.tech</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F1E6] mb-2 group-hover:text-[#C7925B] transition-colors">
                Autonomous WhatsApp Ops
              </h3>
              <p className="text-sm text-[#F4F1E6]/70 leading-relaxed mb-6">
                Asisten WhatsApp bisnis otonom 24 jam non-stop. Menjawab konsultasi, harga, dan booking jam 2 pagi secara instan, kualifikasi prospek, dan merekap leads otomatis ke Google Sheets &amp; CRM Anda.
              </p>

              {/* Simulated Chat & Sheet UI Widget */}
              <div className="p-4 rounded-xl bg-[#07261E]/80 border border-[#4F6F5E]/30 mb-6 font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[#4F6F5E] pb-2 border-b border-[#4F6F5E]/20">
                  <span className="flex items-center gap-1.5 text-[#C7925B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7925B]" /> WhatsApp Live
                  </span>
                  <span>02:14 WIB</span>
                </div>
                <div className="text-[#F4F1E6]/80">
                  <span className="text-[#4F6F5E]">Klien:</span> &quot;Jadwal paket umroh bulan depan masih ada slot?&quot;
                </div>
                <div className="text-[#F4F1E6] bg-[#0B3D2E] p-2.5 rounded-lg border border-[#4F6F5E]/30">
                  <span className="text-[#C7925B] font-bold">Akar Poros Agent:</span> &quot;Tersedia 4 seat untuk keberangkatan 12 Nov (Hotel bintang 5 Mekkah). Mau saya kirimkan detail itinerary lengkapnya ke nomor ini?&quot;
                </div>
                <div className="text-[11px] text-[#C7925B] flex items-center gap-1 pt-1">
                  <TbCheck className="w-3.5 h-3.5" />
                  <span>Lead terekam otomatis ke Google Sheets [ID #8491]</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F4F1E6]/80">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Jawab instan 24 jam tanpa jeda</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Sinkronisasi Google Sheets &amp; CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>SOP akurat &amp; bebas halusinasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Human handoff cerdas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#4F6F5E]/20 flex items-center justify-between">
              <span className="text-xs text-[#4F6F5E]">Cocok untuk: Travel Umroh, Klinik, Jasa, UMKM</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7925B] hover:text-[#D6A068] transition-colors"
              >
                <span>Coba Demo 3 Hari</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: AlertFlow Engine (5 cols) */}
          <div className="col-span-12 lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-[#07261E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7925B]/5 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07261E] text-[#C7925B] border border-[#C7925B]/30 font-semibold tracking-wide uppercase">
                  Live in 8+ Servers
                </span>
                <span className="text-xs text-[#4F6F5E] font-mono">alertflow.akarporos.tech</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F1E6] mb-2 group-hover:text-[#C7925B] transition-colors">
                AlertFlow Engine
              </h3>
              <p className="text-sm text-[#F4F1E6]/70 leading-relaxed mb-6">
                Mesin radar multi-platform otonom. Memantau konten fresh TikTok, YouTube Live, dan event webhook tanpa delay, lalu mem-broadcast notifikasi terkontrol ke Discord &amp; komunitas.
              </p>

              {/* Live Signal Telemetry */}
              <div className="p-4 rounded-xl bg-[#07261E]/80 border border-[#4F6F5E]/30 mb-6 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#F4F1E6]/70">
                  <span className="flex items-center gap-1.5">
                    <SiTiktok className="text-[#C7925B]" /> Watcher Loop
                  </span>
                  <span className="text-[#C7925B]">Active (15m interval)</span>
                </div>
                <div className="flex items-center justify-between text-[#F4F1E6]/70">
                  <span className="flex items-center gap-1.5">
                    <SiDiscord className="text-[#F4F1E6]" /> Target Guilds
                  </span>
                  <span className="text-[#F4F1E6]">8 Production Servers</span>
                </div>
                <div className="flex items-center justify-between text-[#F4F1E6]/70">
                  <span className="flex items-center gap-1.5">
                    <TbShieldLock className="text-[#4F6F5E]" /> Guard Filter
                  </span>
                  <span className="text-[#4F6F5E]">Monotonic &lt; 24h</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#F4F1E6]/80">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Deduplikasi ketat (anti spam notif dobel)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Autonomous background watcher loop</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Admin slash command control panel</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#4F6F5E]/20 flex items-center justify-between">
              <span className="text-xs text-[#4F6F5E]">Untuk: Komunitas &amp; Kreator</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7925B] hover:text-[#D6A068] transition-colors"
              >
                <span>Pelajari Sistem</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 3: Private AI Infrastructure (5 cols) */}
          <div className="col-span-12 lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-[#07261E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7925B]/5 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07261E] text-[#C7925B] border border-[#C7925B]/30 font-semibold tracking-wide uppercase">
                  Enterprise Security
                </span>
                <span className="text-xs text-[#4F6F5E] font-mono">On-Premise Ready</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F1E6] mb-2 group-hover:text-[#C7925B] transition-colors">
                Private Self-Hosted Infra
              </h3>
              <p className="text-sm text-[#F4F1E6]/70 leading-relaxed mb-6">
                Deployment sistem agent AI mandiri di server privat klien (VPS / on-premise). Menjamin data sensitif perusahaan tidak pernah bocor ke pihak ketiga lewat isolasi container terdedikasi.
              </p>

              <div className="space-y-2.5 text-xs text-[#F4F1E6]/80 mb-6">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Isolasi container per-klien (Pterodactyl/Docker)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Zero data leakage ke vendor pihak ketiga</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Systemd auto-heal watchdog 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Resource limits terukur &amp; anti-OOM crash</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#4F6F5E]/20 flex items-center justify-between">
              <span className="text-xs text-[#4F6F5E]">Untuk: Data-Sensitive Enterprise</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7925B] hover:text-[#D6A068] transition-colors"
              >
                <span>Konsultasi Infra</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: Custom Data Intelligence Pipeline (7 cols) */}
          <div className="col-span-12 lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-[#07261E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/50 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7925B]/5 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#07261E] text-[#C7925B] border border-[#C7925B]/30 font-semibold tracking-wide uppercase">
                  Data Engine
                </span>
                <span className="text-xs text-[#4F6F5E] font-mono">Scalable Pipeline</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F1E6] mb-2 group-hover:text-[#C7925B] transition-colors">
                Custom Data Scraper &amp; Pipeline
              </h3>
              <p className="text-sm text-[#F4F1E6]/70 leading-relaxed mb-6">
                Ekstraksi data publik skala besar dengan bypass proteksi WAF tingkat lanjut. Mengubah jutaan titik data katalog kompetitor, tren harga, dan sinyal pasar menjadi format terstruktur siap olah.
              </p>

              {/* Terminal Pipeline Snippet */}
              <div className="p-4 rounded-xl bg-[#07261E]/80 border border-[#4F6F5E]/30 mb-6 font-mono text-xs text-[#F4F1E6]/70 space-y-1">
                <div className="flex items-center gap-2 text-[#4F6F5E] mb-2">
                  <TbTerminal2 className="w-4 h-4 text-[#C7925B]" />
                  <span>pipeline_runner.py --target=competitor_matrix</span>
                </div>
                <div className="text-[#C7925B]">✓ Browser cluster bypass: Cloudflare Turnstile [OK]</div>
                <div className="text-[#F4F1E6]">✓ Ingested: 14,820 SKU records normalized</div>
                <div className="text-[#4F6F5E]">✓ Synced to Neon PostgreSQL database in 1.4s</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F4F1E6]/80">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Stealth browser &amp; smart proxy pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>PostgreSQL &amp; JSON schema pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Scheduled cron &amp; anomaly alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-[#C7925B] shrink-0" />
                  <span>Patuhi batasan etis data publik</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#4F6F5E]/20 flex items-center justify-between">
              <span className="text-xs text-[#4F6F5E]">Untuk: Market Intel, E-Commerce, Riset</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C7925B] hover:text-[#D6A068] transition-colors"
              >
                <span>Request Pipeline</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofi" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#4F6F5E]/20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7925B] block mb-2 font-semibold">
            DNA &amp; Filosofi Rekayasa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E6] tracking-tight">
            Mengapa Bernama Akar Poros?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#07261E] border border-[#C7925B]/30 flex items-center justify-center text-[#C7925B] mb-5 text-xl font-bold font-mono">
              01
            </div>
            <h3 className="text-xl font-bold text-[#F4F1E6] mb-2">Akar — Fondasi yang Kokoh</h3>
            <p className="text-sm text-[#F4F1E6]/70 leading-relaxed">
              Bukan sekadar bot tempelan. Kami membangun fondasi dari arsitektur backend terdalam: koneksi database terisolasi, self-hosted LLM gateway, dan integrasi data internal yang privat, stabil, dan tahan benturan.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 hover:border-[#C7925B]/40 transition-all shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#07261E] border border-[#C7925B]/30 flex items-center justify-center text-[#C7925B] mb-5 text-xl font-bold font-mono">
              02
            </div>
            <h3 className="text-xl font-bold text-[#F4F1E6] mb-2">Poros — Penggerak Tanpa Henti</h3>
            <p className="text-sm text-[#F4F1E6]/70 leading-relaxed">
              Poros adalah sumbu flywheel yang terus berputar. Begitu sistem dipasang, agen otonom bekerja di latar belakang: memantau sinyal, menjawab prospek bisnis, dan menyinkronkan data tanpa perlu dipantau manual lagi.
            </p>
          </div>
        </div>
      </section>

      {/* Done-For-You Business Model */}
      <section id="keunggulan" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#4F6F5E]/20">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7925B] block mb-2 font-semibold">
            Realitas Pasar Indonesia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E6] tracking-tight">
            Pendekatan &quot;Terima Beres&quot; Berbasis Dampak
          </h2>
          <p className="text-sm text-[#F4F1E6]/70 mt-2 max-w-xl mx-auto">
            Pasar tidak butuh langganan software rumit yang ditinggal pakai. Pebisnis butuh solusi yang langsung memangkas biaya atau mendongkrak omset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 shadow-sm">
            <span className="text-[#C7925B] font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Terima Ikannya
            </span>
            <h4 className="text-lg font-bold text-[#F4F1E6] mb-2">Done-For-You Service</h4>
            <p className="text-xs text-[#F4F1E6]/70 leading-relaxed">
              Anda tidak perlu pusing belajar konfigurasi teknis. Tim kami yang merancang, memasang, dan merawat sistem dari A hingga Z.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 shadow-sm">
            <span className="text-[#C7925B] font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Sesuai Kebiasaan
            </span>
            <h4 className="text-lg font-bold text-[#F4F1E6] mb-2">Menyatu dengan SOP</h4>
            <p className="text-xs text-[#F4F1E6]/70 leading-relaxed">
              Bukan memaksa tim Anda belajar software baru. Agen kami beroperasi langsung di kanal yang sudah Anda gunakan: WhatsApp, Google Sheets, dan Discord.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B3D2E] border border-[#4F6F5E]/40 shadow-sm">
            <span className="text-[#C7925B] font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Proaktif 24/7
            </span>
            <h4 className="text-lg font-bold text-[#F4F1E6] mb-2">Otonom di Background</h4>
            <p className="text-xs text-[#F4F1E6]/70 leading-relaxed">
              Sistem kami proaktif bergerak sendiri di latar belakang: memantau data, memicu notifikasi anomali, dan menangani prospek pelanggan tanpa diperintah harian.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section id="arsitek" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#4F6F5E]/20">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0B3D2E] to-[#07261E] border border-[#4F6F5E]/40 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="w-24 h-24 rounded-2xl bg-[#07261E] border-2 border-[#C7925B] flex items-center justify-center text-[#C7925B] font-black text-3xl shadow-xl shadow-[#0B3D2E] shrink-0">
            RP
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-[11px] font-mono text-[#C7925B] uppercase tracking-widest block mb-1 font-semibold">
              Founder &amp; AI Systems Architect
            </span>
            <h3 className="text-2xl font-bold text-[#F4F1E6] mb-2">Raka Putra Pratidina</h3>
            <p className="text-xs sm:text-sm text-[#F4F1E6]/70 leading-relaxed mb-5">
              Fokus pada rekayasa sistem AI otonom, infrastruktur backend mandiri, web intelligence, dan automasi proses bisnis nyata. Membangun Akar Poros sebagai studio teknologi yang mentransformasi kapabilitas AI menjadi pengungkit omset dan efisiensi operasional bisnis.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-medium">
              <a
                href="https://rakaputra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F4F1E6] hover:text-[#C7925B] transition-colors"
              >
                <span>rakaputra.dev</span>
                <TbArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#4F6F5E]">•</span>
              <a
                href="https://github.com/Akarptra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F4F1E6] hover:text-[#C7925B] transition-colors"
              >
                <span>GitHub Profile</span>
                <TbArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0B3D2E] to-[#07261E] border border-[#C7925B]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7925B]/10 blur-[90px] pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-[#C7925B] block mb-3 font-semibold">
            Validasi Cepat Tanpa Beban
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E6] tracking-tight mb-4">
            Buktikan di Bisnis Anda Selama 3 Hari.
          </h2>

          <p className="text-sm sm:text-base text-[#F4F1E6]/70 max-w-xl mx-auto leading-relaxed mb-8">
            Kami pasang prototipe asisten WhatsApp atau sistem notifikasi di operasional Anda. Jika tidak memberikan dampak nyata, hapus tanpa biaya komitmen.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C7925B] hover:bg-[#D6A068] text-[#07261E] font-extrabold text-sm transition-all shadow-xl shadow-[#C7925B]/25"
          >
            <TbBrandWhatsapp className="w-5 h-5 text-[#07261E]" />
            <span>Mulai Uji Coba Pilot (WhatsApp)</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[#4F6F5E]/20 text-xs text-[#4F6F5E]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AkarPorosLogo size="sm" showTagline={true} />
            <span className="text-[#4F6F5E] hidden sm:inline">•</span>
            <span className="text-[#F4F1E6]/60">© {new Date().getFullYear()} PT Akar Poros Teknologi.</span>
          </div>

          <div className="flex items-center gap-6 text-[#F4F1E6]/70">
            <a href="https://akarporos.tech" className="hover:text-[#C7925B] transition-colors">
              akarporos.tech
            </a>
            <a
              href="https://rakaputra.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C7925B] transition-colors"
            >
              rakaputra.dev
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C7925B] transition-colors"
            >
              Kontak WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
