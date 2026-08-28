'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { ESTIMATOR_PACKAGES } from '@/lib/portfolioData';

export default function ClientEstimator() {
  const [selectedPackage, setSelectedPackage] = useState<string>('portal');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'seo',
    'admin',
  ]);

  const addonOptions = [
    { id: 'auth', name: 'Multi-Role Auth & RBAC', desc: 'Hak akses bertingkat admin, editor, staff, dan user' },
    { id: 'payment', name: 'Payment Gateway Integration', desc: 'Midtrans, Xendit, atau QRIS instan' },
    { id: 'realtime', name: 'Live Streaming / Audio Player', desc: 'Continuous stream & background audio/video playback' },
    { id: 'seo', name: 'Advanced SEO & Speed Score (>95)', desc: 'Optimasi Core Web Vitals, Schema.org, & Google Indexing' },
    { id: 'admin', name: 'Custom CMS Control Center', desc: 'Panel dashboard analitik, ekspor PDF/Excel & kelola data' },
    { id: 'devops', name: 'Cloud Deployment & CI/CD', desc: 'Vercel / VPS Linux, SSL, Domain kustom, & automated backup' },
  ];

  const currentPkg = ESTIMATOR_PACKAGES.find(p => p.id === selectedPackage) || ESTIMATOR_PACKAGES[0];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const generateWhatsAppMessage = () => {
    const selectedAddonNames = addonOptions
      .filter(a => selectedAddons.includes(a.id))
      .map(a => `- ${a.name}`)
      .join('\n');

    const msg = `Halo Pangeran Ryan (@raphlv),\n\nSaya tertarik berkonsultasi mengenai pembuatan sistem/aplikasi:\n*Paket Utama:* ${currentPkg.name}\n*Estimasi Durasi Standar:* ${currentPkg.estimatedDuration}\n\n*Fitur Tambahan yang Dipilih:*\n${selectedAddonNames || '- Fitur Standar Paket'}\n\nMohon informasi jadwal diskusi dan konsultasi lebih lanjut. Terima kasih!`;
    return `https://wa.me/6281119333639?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="py-20 bg-[#090E1A] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparansi Lingkup Kerja Klien
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Kalkulator Estimasi Proyek Klien
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed font-normal">
            Pilih jenis sistem yang ingin Anda bangun dan sesuaikan fitur tambahannya untuk mendapatkan rekomendasi arsitektur dan estimasi waktu pengerjaan secara instan.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Choices (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Select Base Package */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                1. Pilih Kategori Sistem / Web Aplikasi:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATOR_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackage === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400 shadow-glow-cyan/30'
                          : 'glass-panel hover:bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white">{pkg.name}</h4>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-500'}`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {pkg.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Add-on Features */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                2. Pilih Kebutuhan Fitur Tambahan (Opsional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-start gap-3 ${
                        isChecked
                          ? 'bg-indigo-950/40 border-indigo-400'
                          : 'glass-panel hover:bg-white/5 border-white/10'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${isChecked ? 'bg-indigo-500 border-indigo-400 text-white' : 'border-slate-500'}`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white">{addon.name}</h5>
                        <p className="text-[11px] text-slate-400 mt-0.5">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 shadow-2xl relative overflow-hidden sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Ringkasan Estimasi
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                  Ready to Start
                </span>
              </div>

              {/* Package Summary */}
              <div className="mb-6 space-y-3">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Kategori Dipilih:</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{currentPkg.name}</h3>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Estimasi Durasi Pengerjaan:</span>
                  <div className="flex items-center gap-2 text-base font-extrabold text-cyan-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                    <span>{currentPkg.estimatedDuration}</span>
                  </div>
                </div>
              </div>

              {/* Included Scope */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-slate-300 block">
                  Lingkup Termasuk ({currentPkg.features.length + selectedAddons.length} Fitur):
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentPkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {addonOptions.filter(a => selectedAddons.includes(a.id)).map(a => (
                    <li key={a.id} className="flex items-center gap-2 text-indigo-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{a.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-glow-cyan flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Estimasi ke WhatsApp Ryan</span>
                </a>
                <p className="text-[11px] text-slate-400 text-center">
                  Konsultasi awal 100% gratis & tanpa komitmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
