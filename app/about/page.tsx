import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  CheckCircle2, 
  Github, 
  Mail, 
  MessageCircle,
  MapPin 
} from 'lucide-react';
import SkillsMatrix from '@/components/SkillsMatrix';
import WorkTimeline from '@/components/WorkTimeline';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export const metadata = {
  title: 'Tentang & Keahlian — Pangeran Ryan Pahlevi (@raphlv)',
  description: 'Profil lengkap, pendekatan pengembangan perangkat lunak, dan penguasaan teknologi Pangeran Ryan Pahlevi.',
};

export default function AboutPage() {
  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Tentang & Keahlian</span>
        </div>

        {/* Profile Card */}
        <div className="clean-card p-6 sm:p-10 rounded-3xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar & Identity */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <div className="w-28 h-28 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-3xl shadow-sm mb-4">
                PR
              </div>

              <h1 className="text-xl font-bold text-slate-900">
                {DEVELOPER_PROFILE.name}
              </h1>
              <p className="text-xs font-mono font-semibold text-blue-600 mt-0.5">
                @{DEVELOPER_PROFILE.github.split('/').pop()}
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {DEVELOPER_PROFILE.role}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Bio & Engineering Approach */}
            <div className="lg:col-span-8 space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200 uppercase tracking-wider inline-block">
                Tentang Saya
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Membangun Sistem yang Cepat, Terstruktur, dan Fungsional
              </h2>
              <p>
                Saya adalah pengembang perangkat lunak dengan fokus pada pengembangan aplikasi web berbasis <strong>Next.js 14, React 18, TypeScript, dan Laravel 11</strong>.
              </p>
              <p>
                Dalam setiap proyek, saya memprioritaskan kerapian struktur kode, modularitas komponen, kemudahan pemeliharaan, serta kecepatan muat yang optimal agar memberikan pengalaman terbaik bagi pengguna akhir.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Performa Cepat & Teroptimasi</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Arsitektur SEO Friendly</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Struktur Kode Bersih & Modular</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dukungan Teknis Langsung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Career Timeline */}
      <WorkTimeline />
    </div>
  );
}
