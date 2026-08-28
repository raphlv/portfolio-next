'use client';

import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';

export default function WorkTimeline() {
  const experiences = [
    {
      role: 'Full-Stack Developer & Next.js Architect',
      organization: 'Proyek Modernisasi Riset Nasional & Portal Enterprise',
      period: '2023 - Sekarang',
      type: 'Portal & Enterprise Systems',
      highlights: [
        'Merancang arsitektur portal Badan Riset dan Inovasi Nasional (BRIN) berbasis Next.js 14 App Router yang memuat 12 Organisasi Riset dan 380+ instrumen lab.',
        'Membangun sistem portal Universitas Budi Luhur dan platform streaming penyiaran Budi Luhur TV & Radio.',
        'Mengimplementasikan optimasi performa Core Web Vitals dan standardisasi TypeScript ketat.',
      ],
    },
    {
      role: 'Web Developer & System Engineer',
      organization: 'Pengembangan Aplikasi Bisnis & UMKM',
      period: '2022 - 2024',
      type: 'E-Commerce & Management Systems',
      highlights: [
        'Mengembangkan sistem persewaan armada kendaraan (Rental System) dengan pencatatan unit dan kalkulasi otomatis berbasis Laravel 11.',
        'Membangun platform toko online UMKM kerajinan (Kusuma Craft) dan kuliner (Khumaira Snack).',
        'Merancang sistem informasi tanggap bencana berbasis peta (GIS) dan pelayanan administrasi warga desa.',
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-slate-200" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            Rekam Jejak & Pengalaman
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman Pengembangan Perangkat Lunak
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            Pengalaman nyata dalam merancang dan mengimplementasikan aplikasi web fungsional untuk instansi dan kebutuhan bisnis.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="clean-card p-6 sm:p-7 rounded-2xl flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="md:w-1/3 shrink-0">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-2 inline-block">
                  {exp.type}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-slate-600 mb-2">
                  {exp.organization}
                </p>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  {exp.period}
                </span>
              </div>

              <div className="md:w-2/3 space-y-2 pt-4 md:pt-0 md:border-l md:border-slate-200 md:pl-6">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                  Cakupan Tanggung Jawab & Implementasi:
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
