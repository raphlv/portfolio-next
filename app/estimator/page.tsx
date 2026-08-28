import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';
import ClientEstimator from '@/components/ClientEstimator';

export const metadata = {
  title: 'Kalkulator Estimasi Biaya & Waktu Proyek — Pangeran Ryan Pahlevi',
  description: 'Hitung estimasi waktu dan fitur proyek web aplikasi Anda secara transparan dan kirimkan ringkasan konsultasi ke WhatsApp Pangeran Ryan.',
};

export default function EstimatorPage() {
  return (
    <div className="py-12 bg-[#070A12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-cyan-400">Beranda</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Kalkulator Estimasi Proyek</span>
        </div>
      </div>

      <ClientEstimator />
    </div>
  );
}
