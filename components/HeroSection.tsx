'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  Layers, 
  ShieldCheck,
  Calculator,
  Github
} from 'lucide-react';
import { DEVELOPER_PROFILE, ALL_PROJECTS } from '@/lib/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden cyber-grid-cyan">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs text-cyan-300 shadow-glow-cyan/20 animate-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-white tracking-wide">FULL-STACK WEB ARCHITECT</span>
            <span className="text-slate-600">&bull;</span>
            <span className="font-medium text-cyan-400">Next.js 14 & Enterprise System Engineer</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Membangun Ekosistem Web{' '}
            <span className="text-gradient-cyan">
              Berkecepatan Tinggi
            </span>{' '}
            & Berskala Enterprise.
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Portofolio resmi <strong className="text-white font-bold">{DEVELOPER_PROFILE.name}</strong> (<span className="text-cyan-400 font-mono">@raphlv</span>). Mengintegrasikan <strong className="text-white">{ALL_PROJECTS.length} proyek nyata</strong> mulai dari portal megasains skala nasional (BRIN), ekosistem akademik kampus, e-commerce, hingga SaaS manajemen operasional.
          </p>
        </div>

        {/* Action Buttons for Clients */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/projects"
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-glow-cyan transition-all flex items-center gap-2 group"
          >
            <span>Eksplorasi 20 Proyek Nyata</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/estimator"
            className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2"
          >
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Hitung Estimasi Proyek Anda</span>
          </Link>

          <a
            href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek pembuatan website/aplikasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold text-sm border border-emerald-500/30 transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Konsultasi WhatsApp</span>
          </a>
        </div>

        {/* 4 Live Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center hover:border-cyan-500/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code & Architecture Visual */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">architecture-stack.config.ts</span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              Next.js 14 &bull; TypeScript &bull; Production-Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-cyan-400 font-bold font-mono flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> 01. Frontend Architecture
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Next.js 14 App Router, Server Components (RSC), TypeScript strict typing, dan Tailwind CSS untuk performa maksimal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-indigo-400 font-bold font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> 02. Backend & Data Layer
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Prisma ORM, MySQL & PostgreSQL, RESTful APIs, otentikasi role-based access control, dan caching berkecepatan tinggi.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-emerald-400 font-bold font-mono flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> 03. Client ROI & Impact
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Fokus pada kecepatan loading (&lt;1s), optimasi SEO Google, dan antarmuka berdaya konversi tinggi untuk pertumbuhan bisnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
