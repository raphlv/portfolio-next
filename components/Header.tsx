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
  MessageCircle
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

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/projects', label: 'Proyek (20)' },
    { href: '/about', label: 'Tentang & Keahlian' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-white border-b border-slate-200 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-600 transition-colors">
              PR
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base text-slate-900 tracking-tight">
                  {DEVELOPER_PROFILE.name}
                </span>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                  @raphlv
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
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

          {/* Right Action: WhatsApp & GitHub */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center gap-1.5"
              title="GitHub raphlv"
            >
              <Github className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai pembuatan website/aplikasi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{DEVELOPER_PROFILE.whatsappFormatted}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-40 p-6 border-b border-slate-200 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col gap-2 max-w-sm mx-auto">
            {navLinks.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`h-11 px-4 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col gap-2">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                className="h-11 px-4 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" /> Repositori GitHub (@raphlv)
              </a>
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                target="_blank"
                className="h-11 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: {DEVELOPER_PROFILE.whatsappFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
