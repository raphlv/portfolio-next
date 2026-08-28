import React from 'react';
import Link from 'next/link';
import { Layers, Github, ArrowLeft } from 'lucide-react';
import ProjectsGrid from '@/components/ProjectsGrid';
import { ALL_PROJECTS } from '@/lib/portfolioData';

export const metadata = {
  title: 'Galeri 20 Proyek Nyata — Pangeran Ryan Pahlevi (raphlv)',
  description: 'Eksplorasi 20 repositori GitHub nyata mencakup portal institusi skala nasional (BRIN), portal universitas, e-commerce, sistem rental, dan aplikasi smart city.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 bg-[#070A12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-cyan-400">Beranda</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">Galeri 20 Proyek</span>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/40 via-[#0D1322] to-indigo-950/40 shadow-2xl mb-8">
            <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Arsip Repositori GitHub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Galeri Lengkap 20 Proyek Rekayasa Perangkat Lunak
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
              Mulai dari modernisasi portal riset nasional BRIN, ekosistem siaran TV & Radio kampus, toko online UMKM, hingga sistem ERP persewaan kendaraan dan platform kebencanaan geospasial.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid Component */}
      <ProjectsGrid />
    </div>
  );
}
