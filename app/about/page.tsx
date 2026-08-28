import React from 'react';
import Link from 'next/link';
import { 
  User, 
  Code2, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Github, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import SkillsMatrix from '@/components/SkillsMatrix';
import WorkTimeline from '@/components/WorkTimeline';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export const metadata = {
  title: 'Tentang & Keahlian — Pangeran Ryan Pahlevi (raphlv)',
  description: 'Profil lengkap, filosofi rekayasa perangkat lunak, dan penguasaan teknologi Pangeran Ryan Pahlevi.',
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-[#070A12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-cyan-400">Beranda</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Tentang & Keahlian</span>
        </div>

        {/* Profile Card Showcase */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar & Identity */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-1 shadow-glow-cyan mb-4">
                <div className="w-full h-full bg-[#070A12] rounded-[22px] flex items-center justify-center overflow-hidden">
                  <Code2 className="w-16 h-16 text-cyan-400" />
                </div>
              </div>

              <h1 className="text-2xl font-extrabold text-white">
                {DEVELOPER_PROFILE.name}
              </h1>
              <p className="text-xs font-mono font-bold text-cyan-400 mt-0.5">
                @{DEVELOPER_PROFILE.github.split('/').pop()}
              </p>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                {DEVELOPER_PROFILE.role}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Bio & Engineering Philosophy */}
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <span className="px-3 py-1 rounded-lg bg-cyan-950/80 text-cyan-400 text-xs font-bold border border-cyan-500/30 uppercase tracking-wider inline-block">
                Filosofi Rekayasa Sistem
              </span>
              <h2 className="text-2xl font-bold text-white">
                "Kecepatan, Kerapian Kode, dan Skalabilitas adalah Standar Utama."
              </h2>
              <p>
                Saya percaya bahwa sebuah website atau aplikasi bukan hanya sekadar tampilan visual, melainkan aset digital strategis yang harus bekerja secara cepat, tanpa hambatan, dan mampu mengakomodasi pertumbuhan pengguna tanpa kendala teknis.
              </p>
              <p>
                Dengan pengalaman membangun sistem skala besar (seperti portal riset nasional BRIN dengan 12 OR dan 380+ instrumen lab, platform penyiaran media kampus, dan sistem manajemen e-commerce), setiap baris kode ditulis dengan struktur modular, pengetikan ketat TypeScript, serta optimasi Core Web Vitals tertinggi.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Waktu Muat Cepat (&lt;1s)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SEO Ready & Google Indexing</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kode Bersih & Mudah Dirawat</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dukungan Garansi & Pemeliharaan</span>
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
