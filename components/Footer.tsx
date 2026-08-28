'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Github, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  ArrowUp 
} from 'lucide-react';
import { DEVELOPER_PROFILE, ALL_PROJECTS } from '@/lib/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-white/10 text-slate-400 text-xs py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#070A12] rounded-[9px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-display font-black text-base text-white">
                  {DEVELOPER_PROFILE.name}
                </span>
                <span className="block text-[10px] text-cyan-400 font-mono">
                  @{DEVELOPER_PROFILE.github.split('/').pop()}
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              Full-Stack Web Architect & Next.js Specialist. Membangun platform web skalabel, modern, dan berkinerja tinggi untuk institusi dan pelaku bisnis.
            </p>
          </div>

          {/* Featured Projects Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
              Proyek Unggulan
            </h4>
            <ul className="space-y-2 text-[11px]">
              {ALL_PROJECTS.filter(p => p.featured).slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/projects#${p.id}`} className="hover:text-cyan-400 transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-indigo-400 pl-2">
              Menu Utama
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Galeri 20 Proyek GitHub
                </Link>
              </li>
              <li>
                <Link href="/estimator" className="hover:text-white transition-colors">
                  Kalkulator Estimasi Biaya
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Keahlian & Pengalaman
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Kontak Klien
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-400 pl-2">
              Tautan & Sosial
            </h4>
            <ul className="space-y-2.5 text-[11px]">
              <li>
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub: /raphlv</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: +62 811-1933-3639</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{DEVELOPER_PROFILE.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} <strong>{DEVELOPER_PROFILE.name}</strong>. Seluruh hak cipta dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
