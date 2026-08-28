'use client';

import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function WorkTimeline() {
  const experiences = [
    {
      role: 'Senior Full-Stack & Next.js Architect',
      company: 'Proyek Modernisasi Riset & Portal Enterprise',
      period: '2023 - Sekarang',
      type: 'Enterprise & Gov Solutions',
      highlights: [
        'Merancang arsitektur portal Badan Riset dan Inovasi Nasional (BRIN) dengan 12 OR dan 380+ instrumen lab.',
        'Membangun platform Next.js 14 App Router teroptimasi dengan Server Components & Prisma ORM.',
        'Mencapai skor performa Core Web Vitals rata-rata 98+ dengan waktu muat di bawah 1 detik.',
      ],
    },
    {
      role: 'Full-Stack Developer & Media Systems Engineer',
      company: 'Universitas Budi Luhur Ecosystem',
      period: '2022 - 2024',
      type: 'Campus Media & Academic Systems',
      highlights: [
        'Mengembangkan portal resmi Universitas Budi Luhur, platform streaming Budi Luhur TV, dan Radio Budi Luhur 107.7 FM.',
        'Membangun audio streaming player interaktif dengan live chart top 20 dan live report penyiaran video.',
        'Mengintegrasikan model basis data MySQL relasional untuk manajemen konten multi-tim redaksi.',
      ],
    },
    {
      role: 'Web Developer & Digitalization Consultant',
      company: 'Independent Client Projects & UMKM',
      period: '2021 - 2023',
      type: 'Commercial & E-Commerce',
      highlights: [
        'Membangun sistem e-commerce kerajinan tangan Kusuma Craft, kuliner Khumaira Snack, dan fashion Zanilove.',
        'Merancang sistem informasi persewaan armada kendaraan (Rental System) dan IT helpdesk korporat (JIT-Resolve).',
        'Mengembangkan aplikasi smart city tanggap bencana geospasial dan pelayanan desa digital.',
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#090E1A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Rekam Jejak Profesional
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pengalaman & Pencapaian
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed font-normal">
            Dedikasi berkelanjutan dalam menciptakan perangkat lunak bernilai tinggi untuk instansi pemerintah, institusi pendidikan, dan bisnis komersial.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/3 shrink-0">
                <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 mb-2 inline-block">
                  {exp.type}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-2">
                  {exp.company}
                </p>
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
              </div>

              <div className="md:w-2/3 space-y-2.5 pt-4 md:pt-0 md:border-l md:border-white/10 md:pl-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Pencapaian Utama:
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
