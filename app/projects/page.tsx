import React from 'react';
import Link from 'next/link';
import { Layers, ArrowLeft } from 'lucide-react';
import ProjectsGrid from '@/components/ProjectsGrid';
import { ALL_PROJECTS } from '@/lib/portfolioData';

export const metadata = {
  title: 'Galeri 20 Proyek Nyata — Pangeran Ryan Pahlevi (@raphlv)',
  description: 'Eksplorasi 20 repositori GitHub nyata mencakup portal institusi skala nasional (BRIN), portal universitas, e-commerce, sistem rental, dan aplikasi smart city.',
};

export default function ProjectsPage() {
  return (
    <div className="py-6 sm:py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 sm:mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Galeri 20 Proyek</span>
          </div>

          <div className="clean-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5 inline-block">
              Arsip Repositori GitHub
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galeri Lengkap 20 Proyek Perangkat Lunak
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Mulai dari modernisasi portal riset nasional BRIN, ekosistem siaran TV & Radio kampus, toko online UMKM, hingga sistem manajemen persewaan kendaraan dan aplikasi kebencanaan berbasis peta.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid Component */}
      <ProjectsGrid />
    </div>
  );
}
