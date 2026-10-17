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
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-emerald-500/20 selection:text-emerald-300 font-sans antialiased relative overflow-hidden">
      {/* Precision ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] -left-64 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-[1600px] -right-64 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Navigation — Ultra Clean, No Hash URLs */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/85 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-black font-black text-xs tracking-tight shadow-md shadow-emerald-500/20">
              AP
            </div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-2">
              Akar Poros
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                STUDIO
              </span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
            <button
              onClick={() => scrollToSection("solusi")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Solusi &amp; Produk
            </button>
            <button
              onClick={() => scrollToSection("filosofi")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Filosofi
            </button>
            <button
              onClick={() => scrollToSection("keunggulan")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Model Jasa
            </button>
            <button
              onClick={() => scrollToSection("arsitek")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Arsitek
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-white transition-all"
            >
              <TbBrandWhatsapp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kontak</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
            >
              <FiZap className="w-3.5 h-3.5 fill-black" />
              <span>Pilot 3 Hari</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section — Taste-Skill Typography & Negative Space */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-slate-400 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-emerald-400 text-[11px] font-semibold tracking-wider uppercase">
            Autonomous Systems &amp; AI Engineering Studio
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Kami Bangun Sistem AI dari{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Akar
          </span>
          ,<br /> Anda Tinggal Skalakan.
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Bukan software kaku yang memaksa Anda beradaptasi. Kami merekayasa solusi AI otonom 24/7 yang menyatu dengan SOP bisnis nyata: asisten WhatsApp tanpa jeda, radar monitor komunitas, dan infrastruktur data privat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all shadow-xl shadow-emerald-500/20"
          >
            <TbBrandWhatsapp className="w-4 h-4 text-black" />
            <span>Mulai Uji Coba Pilot (WhatsApp)</span>
            <FiArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => scrollToSection("solusi")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white font-medium text-sm transition-all cursor-pointer"
          >
            <span>Jelajahi Solusi Siap Pakai</span>
            <TbArrowUpRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Telemetry Status Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">24/7</div>
            <div className="text-xs text-slate-400 mt-0.5">Autonomous Runtime</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">&lt; 10s</div>
            <div className="text-xs text-slate-400 mt-0.5">Event Latency</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Data Isolation</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">3 Hari</div>
            <div className="text-xs text-slate-400 mt-0.5">Risk-Free Pilot</div>
          </div>
        </div>
      </section>

      {/* Bento Showcase — Asymmetric & Diverse Layout (taste-skill compliant) */}
      <section id="solusi" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
            Katalog Produk &amp; Solusi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sistem Nyata yang Kami Bangun
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Solusi yang sudah teruji melayani operasional aktif, dirancang untuk langsung mendongkrak efisiensi dan pendapatan bisnis.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-5">
          {/* Bento Card 1: Autonomous WhatsApp Ops (Large, 7 cols) */}
          <div className="col-span-12 lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c0f18] to-[#07090e] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold tracking-wide uppercase">
                  Flagship Solution • L4 Agent
                </span>
                <span className="text-xs text-slate-500 font-mono">wa.akarporos.tech</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Autonomous WhatsApp Ops
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Asisten WhatsApp bisnis otonom 24 jam non-stop. Menjawab konsultasi, harga, dan booking jam 2 pagi secara instan, kualifikasi prospek, dan merekap leads otomatis ke Google Sheets &amp; CRM Anda.
              </p>

              {/* Simulated Chat & Sheet UI Widget */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6 font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-white/[0.05]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> WhatsApp Live
                  </span>
                  <span>02:14 WIB</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Klien:</span> &quot;Jadwal paket umroh bulan depan masih ada slot?&quot;
                </div>
                <div className="text-emerald-300 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold">Akar Poros Agent:</span> &quot;Tersedia 4 seat untuk keberangkatan 12 Nov (Hotel bintang 5 Mekkah). Mau saya kirimkan detail itinerary lengkapnya ke nomor ini?&quot;
                </div>
                <div className="text-[11px] text-cyan-400 flex items-center gap-1 pt-1">
                  <TbCheck className="w-3.5 h-3.5" />
                  <span>Lead terekam otomatis ke Google Sheets [ID #8491]</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-emerald-400 shrink-0" />
                  <span>Jawab instan 24 jam tanpa jeda</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-emerald-400 shrink-0" />
                  <span>Sinkronisasi Google Sheets &amp; CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-emerald-400 shrink-0" />
                  <span>SOP akurat &amp; bebas halusinasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-emerald-400 shrink-0" />
                  <span>Human handoff cerdas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-400">Cocok untuk: Travel Umroh, Klinik, Jasa, UMKM</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Coba Demo 3 Hari</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: AlertFlow Engine (5 cols) */}
          <div className="col-span-12 lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c0f18] to-[#07090e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold tracking-wide uppercase">
                  Live in 8+ Servers
                </span>
                <span className="text-xs text-slate-500 font-mono">alertflow.akarporos.tech</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                AlertFlow Engine
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Mesin radar multi-platform otonom. Memantau konten fresh TikTok, YouTube Live, dan event webhook tanpa delay, lalu mem-broadcast notifikasi terkontrol ke Discord &amp; komunitas.
              </p>

              {/* Live Signal Telemetry */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <SiTiktok className="text-rose-400" /> Watcher Loop
                  </span>
                  <span className="text-cyan-400">Active (15m interval)</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <SiDiscord className="text-indigo-400" /> Target Guilds
                  </span>
                  <span className="text-white">8 Production Servers</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <TbShieldLock className="text-emerald-400" /> Guard Filter
                  </span>
                  <span className="text-emerald-400">Monotonic &lt; 24h</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-cyan-400 shrink-0" />
                  <span>Deduplikasi ketat (anti spam notif dobel)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-cyan-400 shrink-0" />
                  <span>Autonomous background watcher loop</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-cyan-400 shrink-0" />
                  <span>Admin slash command control panel</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-400">Untuk: Komunitas &amp; Kreator</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Pelajari Sistem</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 3: Private AI Infrastructure (5 cols) */}
          <div className="col-span-12 lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c0f18] to-[#07090e] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-wide uppercase">
                  Enterprise Security
                </span>
                <span className="text-xs text-slate-500 font-mono">On-Premise Ready</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Private Self-Hosted Infra
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Deployment sistem agent AI mandiri di server privat klien (VPS / on-premise). Menjamin data sensitif perusahaan tidak pernah bocor ke pihak ketiga lewat isolasi container terdedikasi.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-amber-400 shrink-0" />
                  <span>Isolasi container per-klien (Pterodactyl/Docker)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-amber-400 shrink-0" />
                  <span>Zero data leakage ke vendor pihak ketiga</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-amber-400 shrink-0" />
                  <span>Systemd auto-heal watchdog 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-amber-400 shrink-0" />
                  <span>Resource limits terukur &amp; anti-OOM crash</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-400">Untuk: Data-Sensitive Enterprise</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Konsultasi Infra</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: Custom Data Intelligence Pipeline (7 cols) */}
          <div className="col-span-12 lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c0f18] to-[#07090e] border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold tracking-wide uppercase">
                  Data Engine
                </span>
                <span className="text-xs text-slate-500 font-mono">Scalable Pipeline</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Custom Data Scraper &amp; Pipeline
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Ekstraksi data publik skala besar dengan bypass proteksi WAF tingkat lanjut. Mengubah jutaan titik data katalog kompetitor, tren harga, dan sinyal pasar menjadi format terstruktur siap olah.
              </p>

              {/* Terminal Pipeline Snippet */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-6 font-mono text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2 text-slate-500 mb-2">
                  <TbTerminal2 className="w-4 h-4 text-purple-400" />
                  <span>pipeline_runner.py --target=competitor_matrix</span>
                </div>
                <div className="text-emerald-400">✓ Browser cluster bypass: Cloudflare Turnstile [OK]</div>
                <div className="text-slate-300">✓ Ingested: 14,820 SKU records normalized</div>
                <div className="text-cyan-400">✓ Synced to Neon PostgreSQL database in 1.4s</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <TbCheck className="text-purple-400 shrink-0" />
                  <span>Stealth browser &amp; smart proxy pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-purple-400 shrink-0" />
                  <span>PostgreSQL &amp; JSON schema pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-purple-400 shrink-0" />
                  <span>Scheduled cron &amp; anomaly alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TbCheck className="text-purple-400 shrink-0" />
                  <span>Patuhi batasan etis data publik</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-slate-400">Untuk: Market Intel, E-Commerce, Riset</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Request Pipeline</span>
                <TbArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofi" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
            DNA &amp; Filosofi Rekayasa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Bernama Akar Poros?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-[#0c0f18] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 text-xl font-bold font-mono">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Akar — Fondasi yang Kokoh</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bukan sekadar bot tempelan. Kami membangun fondasi dari arsitektur backend terdalam: koneksi database terisolasi, self-hosted LLM gateway, dan integrasi data internal yang privat, stabil, dan tahan benturan.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0c0f18] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 text-xl font-bold font-mono">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Poros — Penggerak Tanpa Henti</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Poros adalah sumbu flywheel yang terus berputar. Begitu sistem dipasang, agen otonom bekerja di latar belakang: memantau sinyal, menjawab prospek bisnis, dan menyinkronkan data tanpa perlu dipantau manual lagi.
            </p>
          </div>
        </div>
      </section>

      {/* Done-For-You Business Model */}
      <section id="keunggulan" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
            Realitas Pasar Indonesia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendekatan &quot;Terima Beres&quot; Berbasis Dampak
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Pasar tidak butuh langganan software rumit yang ditinggal pakai. Pebisnis butuh solusi yang langsung memangkas biaya atau mendongkrak omset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c0f18] border border-white/[0.06]">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Terima Ikannya
            </span>
            <h4 className="text-lg font-bold text-white mb-2">Done-For-You Service</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Anda tidak perlu pusing belajar konfigurasi teknis. Tim kami yang merancang, memasang, dan merawat sistem dari A hingga Z.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0f18] border border-white/[0.06]">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Sesuai Kebiasaan
            </span>
            <h4 className="text-lg font-bold text-white mb-2">Menyatu dengan SOP</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bukan memaksa tim Anda belajar software baru. Agen kami beroperasi langsung di kanal yang sudah Anda gunakan: WhatsApp, Google Sheets, dan Discord.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0f18] border border-white/[0.06]">
            <span className="text-purple-400 font-mono text-xs uppercase tracking-wider block mb-3 font-semibold">
              Proaktif 24/7
            </span>
            <h4 className="text-lg font-bold text-white mb-2">Otonom di Background</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistem kami proaktif bergerak sendiri di latar belakang: memantau data, memicu notifikasi anomali, dan menangani prospek pelanggan tanpa diperintah harian.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section id="arsitek" className="py-20 px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c0f18] to-[#07090e] border border-white/[0.08] flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-black font-black text-3xl shadow-xl shadow-emerald-500/15 shrink-0">
            RP
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-semibold">
              Founder &amp; AI Systems Architect
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Raka Putra Pratidina</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
              Fokus pada rekayasa sistem AI otonom, infrastruktur backend mandiri, web intelligence, dan automasi proses bisnis nyata. Membangun Akar Poros sebagai studio teknologi yang mentransformasi kapabilitas AI menjadi pengungkit omset dan efisiensi operasional bisnis.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-medium">
              <a
                href="https://rakaputra.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors"
              >
                <span>rakaputra.dev</span>
                <TbArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://github.com/Akarptra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors"
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
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0f131f] to-[#07090e] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[90px] pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3 font-semibold">
            Validasi Cepat Tanpa Beban
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Buktikan di Bisnis Anda Selama 3 Hari.
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Kami pasang prototipe asisten WhatsApp atau sistem notifikasi di operasional Anda. Jika tidak memberikan dampak nyata, hapus tanpa biaya komitmen.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-xl shadow-emerald-500/25"
          >
            <TbBrandWhatsapp className="w-5 h-5 text-black" />
            <span>Mulai Uji Coba Pilot (WhatsApp)</span>
            <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/[0.06] text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-tight">Akar Poros</span>
            <span>—</span>
            <span>© {new Date().getFullYear()} PT Akar Poros Teknologi. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://akarporos.tech" className="hover:text-white transition-colors">
              akarporos.tech
            </a>
            <a
              href="https://rakaputra.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              rakaputra.dev
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Kontak WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
