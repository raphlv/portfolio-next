'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Code2, 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  Github,
  MessageCircle,
  Mail,
  ExternalLink
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/projects', label: 'Proyek (20)' },
    { href: '/about', label: 'Tentang & Keahlian' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5 sm:py-3' 
          : 'bg-white border-b border-slate-200 py-3 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm group-hover:bg-blue-600 transition-colors shrink-0">
                PR
              </div>

              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 tracking-tight truncate">
                    {DEVELOPER_PROFILE.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0 hidden xs:inline-block">
                    @raphlv
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden md:inline truncate">
                  Software Engineer & Web Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`h-9 px-3.5 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center transition-colors ${
                      active 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp & GitHub & Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-2.5 sm:px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center gap-1.5"
                title="GitHub raphlv"
              >
                <Github className="w-3.5 h-3.5 text-slate-700" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai pembuatan website/aplikasi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-2.5 sm:px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{DEVELOPER_PROFILE.whatsappFormatted}</span>
                <span className="sm:hidden">Chat WA</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors shrink-0"
                aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Modal */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 flex flex-col justify-start">
          <div 
            className="absolute inset-0"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative bg-white border-b border-slate-200 shadow-2xl p-5 pt-20 max-h-[90vh] overflow-y-auto flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Menu Navigasi</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`h-12 px-4 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                      active 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'text-slate-800 hover:bg-slate-100 bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <Github className="w-4 h-4" /> Repositori GitHub (@raphlv)
              </a>
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: {DEVELOPER_PROFILE.whatsappFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
