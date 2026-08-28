'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Github, 
  Layers, 
  Code2, 
  ExternalLink,
  Zap
} from 'lucide-react';
import { DEVELOPER_PROFILE, ALL_PROJECTS } from '@/lib/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-12 pb-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-semibold text-slate-900">{DEVELOPER_PROFILE.availability}</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Full-Stack Software Engineer &{' '}
            <span className="text-blue-600">
              Web Developer
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Halo, saya <strong className="text-slate-900 font-bold">{DEVELOPER_PROFILE.name}</strong> (<span className="text-blue-600 font-mono">@raphlv</span>). Berpengalaman membangun aplikasi web berkinerja tinggi mulai dari portal riset skala nasional (BRIN), portal media penyiaran kampus, hingga aplikasi e-commerce dan sistem informasi manajemen.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2 group"
          >
            <span>Lihat 20 Proyek Nyata</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek website/aplikasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: {DEVELOPER_PROFILE.whatsappFormatted}</span>
          </a>

          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>{DEVELOPER_PROFILE.email}</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="clean-card p-5 rounded-2xl text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Highlights */}
        <div className="clean-card p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Prinsip Rekayasa Perangkat Lunak
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
              Next.js 14 &bull; TypeScript &bull; Laravel 11
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Frontend Berkecepatan Tinggi
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Mengutamakan Next.js 14 App Router, Server Components, dan CSS teroptimasi untuk waktu muat halaman di bawah 1 detik.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Struktur Database & API Bersih
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Pemodelan relasional yang efisien (MySQL / PostgreSQL / Prisma ORM) serta REST API terstruktur untuk kemudahan integrasi.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Siap Produksi & Teruji
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Seluruh 20 repositori dikembangkan secara fungsional dengan standardisasi kode yang rapi dan siap dipublikasikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
