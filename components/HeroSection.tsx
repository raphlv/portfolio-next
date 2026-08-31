'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Github, 
  GraduationCap,
  Award,
  Code2, 
  ShieldCheck
} from 'lucide-react';
import { DEVELOPER_PROFILE, CERTIFICATIONS } from '@/lib/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex items-center justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] sm:text-xs text-slate-700 text-center">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-semibold text-slate-900">{DEVELOPER_PROFILE.availability}</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-5">
            Full-Stack Software Engineer &{' '}
            <span className="text-blue-600">
              Web Developer
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Halo, saya <strong className="text-slate-900 font-bold">{DEVELOPER_PROFILE.name}</strong> (<span className="text-blue-600 font-mono">@raphlv</span>). Mahasiswa Teknik Informatika Universitas Budi Luhur dengan pengalaman mengembangkan aplikasi web & mobile (Next.js 14, React, Laravel, FilamentPHP), UI/UX Design, serta Cyber Security berstandar kompetensi BNSP.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto mb-10 sm:mb-14">
          <Link
            href="/projects"
            className="h-11 sm:h-10 px-5 sm:px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 group"
          >
            <span>Lihat 20 Proyek Nyata</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek website/aplikasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-10 px-5 sm:px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: {DEVELOPER_PROFILE.whatsappFormatted}</span>
          </a>

          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="h-11 sm:h-10 px-4 sm:px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>{DEVELOPER_PROFILE.email}</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="clean-card p-4 sm:p-5 rounded-2xl text-center"
            >
              <div className="text-xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Bar */}
        <div className="clean-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-slate-200 mb-5">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Profil Akademik & Sertifikasi Resmi
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 self-start sm:self-auto">
              Universitas Budi Luhur &bull; BNSP Certified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 text-xs">
            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" /> Pendidikan Sarjana
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                S1 Teknik Informatika Universitas Budi Luhur. Fokus studi pada Rekayasa Perangkat Lunak, Cyber Security, dan IoT.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" /> Sertifikasi Profesi BNSP
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Tersertifikasi resmi Badan Nasional Sertifikasi Profesi (BNSP) bidang Teknik Komputer Jaringan & Keamanan Jaringan.
              </p>
            </div>

            <div className="space-y-1.5 sm:col-span-2 md:col-span-1">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600 shrink-0" /> Prestasi GEMASTIK
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Peraih nominasi kelompok terpilih tingkat nasional dari 357 kelompok kompetisi teknologi mahasiswa (Puspresnas).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
