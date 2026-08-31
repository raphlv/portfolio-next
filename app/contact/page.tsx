import React from 'react';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Kontak — Pangeran Ryan Pahlevi (@raphlv)',
  description: 'Hubungi Pangeran Ryan Pahlevi untuk diskusi proyek pembuatan website atau sistem informasi.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'Bagaimana cara menghubungi Anda untuk diskusi proyek?',
      a: 'Cara tercepat adalah melalui WhatsApp di nomor 0882-2460-2608. Anda juga dapat mengirimkan email atau proposal ke pangeranryan080504@gmail.com.',
    },
    {
      q: 'Teknologi apa saja yang biasa Anda gunakan?',
      a: 'Saya berfokus pada Next.js 14, React 18, TypeScript, Tailwind CSS, Laravel 11, Prisma ORM, MySQL, dan PostgreSQL.',
    },
    {
      q: 'Apakah bisa melihat demonstrasi proyek yang sudah dikembangkan?',
      a: 'Tentu. Anda dapat melihat kode sumber dan rincian implementasi 20 proyek nyata di menu Galeri Proyek atau langsung melalui akun GitHub @raphlv.',
    },
  ];

  return (
    <div className="py-6 sm:py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Kontak</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Pertanyaan yang Sering Diajukan
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="clean-card p-4 sm:p-5 rounded-2xl"
            >
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2 mb-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
