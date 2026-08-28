import React from 'react';
import Link from 'next/link';
import { MessageSquare, HelpCircle, ArrowLeft } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Kontak & Diskusi Proyek — Pangeran Ryan Pahlevi (raphlv)',
  description: 'Hubungi Pangeran Ryan Pahlevi untuk konsultasi kebutuhan pembuatan website, portal enterprise, atau sistem manajemen kustom.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'Berapa lama estimasi pengerjaan sebuah website?',
      a: 'Waktu pengerjaan bergantung pada kompleksitas: Landing page (1-2 minggu), E-Commerce (2-3 minggu), Portal / Sistem Manajemen Kustom (3-6 minggu).',
    },
    {
      q: 'Teknologi apa yang paling direkomendasikan untuk proyek baru?',
      a: 'Untuk portal dan web modern, saya sangat merekomendasikan Next.js 14 (React) + TypeScript + Tailwind CSS karena kecepatan muat instan, arsitektur SEO kelas atas, dan kemudahan skalabilitas.',
    },
    {
      q: 'Apakah ada garansi pemeliharaan setelah proyek selesai?',
      a: 'Ya, seluruh proyek yang saya kembangkan mendapatkan garansi bug-fix dan pemeliharaan performa server gratis selama 1 hingga 3 bulan setelah peluncuran.',
    },
    {
      q: 'Bagaimana alur pembayaran proyek?',
      a: 'Alur pembayaran fleksibel berbasis milestone: DP awal 30-40% saat kesepakatan scope, pembayaran bertahap sesuai progres fitur, dan pelunasan saat sistem siap rilis.',
    },
  ];

  return (
    <div className="py-12 bg-[#070A12] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-cyan-400">Beranda</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Kontak & Konsultasi</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Client FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
            Pertanyaan Umum Klien
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Frequently Asked Questions (FAQ)
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10"
            >
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
