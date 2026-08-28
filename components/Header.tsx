'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Code2, 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquare, 
  Github,
  Calculator
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/projects', label: 'Portofolio Proyek (20)' },
    { href: '/estimator', label: 'Kalkulator Estimasi', isBadge: true },
    { href: '/about', label: 'Tentang & Keahlian' },
    { href: '/contact', label: 'Kontak Klien' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#070A12]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40 py-3' 
        : 'bg-[#070A12] border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-glow-cyan/50 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-[#070A12] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg text-white tracking-tight">
                  Pangeran Ryan
                </span>
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                  raphlv
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] text-emerald-400 font-semibold tracking-wide">
                  Available for Projects
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`h-9 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                    active 
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.isBadge && <Calculator className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: GitHub & WhatsApp CTA */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-all flex items-center gap-1.5"
              title="Kunjungi Profil GitHub raphlv"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">GitHub (20 Repos)</span>
            </a>

            <a
              href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya ingin konsultasi kebutuhan pembuatan website/sistem aplikasi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-glow-cyan transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Konsultasi Proyek</span>
              <span className="sm:hidden">Kontak</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#070A12]/98 backdrop-blur-2xl z-40 p-6 overflow-y-auto border-b border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  pathname === item.href ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.isBadge && <Calculator className="w-4 h-4 text-cyan-400" />}
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-2">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                className="p-3.5 rounded-xl bg-white/5 text-slate-300 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" /> Profil GitHub (raphlv)
              </a>
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                target="_blank"
                className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Hubungi WhatsApp Langsung
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
