'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Github, 
  Mail, 
  MessageCircle, 
  ArrowUp 
} from 'lucide-react';
import { DEVELOPER_PROFILE, ALL_PROJECTS } from '@/lib/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">
          {/* Brand Col */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                PR
              </div>
              <div>
                <span className="font-display font-bold text-sm text-slate-900">
                  {DEVELOPER_PROFILE.name}
                </span>
                <span className="block text-[10px] text-slate-500 font-mono">
                  @raphlv
                </span>
              </div>
            </Link>

            <p className="text-slate-600 leading-relaxed text-[11px]">
              Full-Stack Software Engineer & Web Developer. Berpengalaman membangun aplikasi web modern, terstruktur, dan berkinerja tinggi.
            </p>
          </div>

          {/* Featured Projects Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Proyek Pilihan
            </h4>
            <ul className="space-y-2 text-[11px]">
              {ALL_PROJECTS.filter(p => p.featured).slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/projects#${p.id}`} className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Menu Halaman
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Galeri 20 Proyek GitHub
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Tentang & Keahlian
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors block py-0.5">
                  Kontak Klien
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Kontak Langsung
            </h4>
            <ul className="space-y-2.5 text-[11px]">
              <li>
                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors py-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp: {DEVELOPER_PROFILE.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors py-0.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{DEVELOPER_PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors py-0.5"
                >
                  <Github className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub: @raphlv</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} <strong>{DEVELOPER_PROFILE.name}</strong> (@raphlv). Seluruh hak cipta dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors p-1"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
