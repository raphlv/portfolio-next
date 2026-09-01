'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ArrowRight,
  Calculator,
  Globe,
  ShieldCheck,
  Building2,
  Phone,
  BarChart3,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  ArrowLeftRight,
  Clock,
  Calendar
} from 'lucide-react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { economicIndicators, exchangeRates, historicalData, newsArticles, publications } from '@/lib/biData';

export default function BankIndonesiaShowcasePage() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [amount, setAmount] = useState<number>(1000);
  const [rateType, setRateType] = useState<'middle' | 'buy' | 'sell'>('middle');
  const [activeChart, setActiveChart] = useState<'jisdor' | 'birate'>('jisdor');

  const curr = exchangeRates.find((c) => c.currency === selectedCurrency) || exchangeRates[0];
  const effectiveRate = rateType === 'buy' ? curr.buy : rateType === 'sell' ? curr.sell : curr.middle;
  const result = (curr.currency === 'JPY') ? (amount / 100) * effectiveRate : amount * effectiveRate;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs & Portfolio Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Portofolio Ryan</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Galeri Proyek</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Bank Indonesia Portal Next.js</span>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/raphlv/bi-portal-next"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
            <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              Standalone & Integrated
            </span>
          </div>
        </div>

        {/* Official Header Banner */}
        <div className="bg-gradient-to-r from-[#001428] via-[#002642] to-[#003F87] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#C5A059] text-[#001428]">
                Enterprise & Public Portal
              </span>
              <span className="text-xs text-[#E7CB8E] font-semibold">
                Bank Sentral Republik Indonesia
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Bank Indonesia Portal — Modern Central Bank Web Platform
            </h1>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Modernisasi portal resmi Bank Indonesia menggunakan Next.js 14 App Router, TypeScript, dan Tailwind CSS. Menghadirkan indikator moneter realtime, kurs referensi JISDOR, dan sistem konversi valas interaktif.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lucide-React'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] font-semibold backdrop-blur-sm border border-white/15">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Realtime Monetary Indicators Ticker */}
        <div className="bg-gradient-to-r from-[#001D38] to-[#002B49] text-white rounded-2xl p-4 sm:p-5 shadow-md">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs">
            <span className="font-extrabold text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Indikator Kebijakan Moneter & Finansial Terkini
            </span>
            <span className="text-slate-300 font-mono text-[11px]">Update Resmi 2026</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {economicIndicators.map((item) => (
              <div key={item.id} className="bg-white/10 rounded-xl p-3 border border-white/10">
                <span className="text-[10px] text-slate-300 block truncate">{item.shortName}</span>
                <div className="text-base sm:text-lg font-black text-white my-0.5 tabular-nums">
                  {item.value} <span className="text-[11px] text-[#C5A059] font-normal">{item.unit}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold block truncate">{item.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Currency Calculator & Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Calculator */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase">Kalkulator Kurs Valas JISDOR</span>
              <span className="text-[11px] text-slate-400 font-mono">15:30 WIB</span>
            </div>

            <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              {(['middle', 'buy', 'sell'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setRateType(t)}
                  className={`py-1.5 rounded-lg capitalize transition-all ${
                    rateType === t ? 'bg-[#003F87] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Kurs {t === 'middle' ? 'Tengah' : t === 'buy' ? 'Beli' : 'Jual'}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Jumlah Valas</label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    className="w-full pl-3 pr-24 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#003F87]"
                  />
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-xs font-bold text-slate-800 py-1 px-2 rounded-lg border border-slate-200 focus:outline-none"
                  >
                    {exchangeRates.map((c) => (
                      <option key={c.currency} value={c.currency}>{c.flag} {c.currency}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#002B49] to-[#003F87] text-white rounded-xl shadow-inner">
                <span className="text-[10px] text-[#C5A059] font-bold block mb-0.5">Nilai Konversi ke Rupiah:</span>
                <div className="text-xl sm:text-2xl font-black tabular-nums">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(result)}
                </div>
                <span className="text-[10px] text-slate-300 block mt-1">1 {curr.currency} = Rp {effectiveRate.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Right Rates Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xs font-extrabold uppercase text-[#002B49]">Tabel Kurs Transaksi Bank Indonesia</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Valuta</th>
                    <th className="py-2.5 px-4 text-right">Beli</th>
                    <th className="py-2.5 px-4 text-right">Jual</th>
                    <th className="py-2.5 px-4 text-right">Tengah</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {exchangeRates.map((r) => (
                    <tr key={r.currency} className={selectedCurrency === r.currency ? 'bg-blue-50/70 font-semibold' : 'hover:bg-slate-50'}>
                      <td className="py-2.5 px-4 flex items-center gap-2">
                        <span>{r.flag}</span>
                        <span className="font-bold text-slate-900">{r.currency}</span>
                      </td>
                      <td className="py-2.5 px-4 text-right font-mono">{r.buy.toLocaleString('id-ID')}</td>
                      <td className="py-2.5 px-4 text-right font-mono">{r.sell.toLocaleString('id-ID')}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-[#003F87]">{r.middle.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Market Visual Charts */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <h3 className="text-sm font-extrabold uppercase text-[#002B49] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#003F87]" /> Grafik Tren Nilai Tukar JISDOR USD/IDR
            </h3>
            <span className="text-[11px] text-slate-400">Data Historis Bank Indonesia 7 Hari Terakhir</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={historicalData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorJisdorPort" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#003F87" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#003F87" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis domain={[15800, 15950]} stroke="#64748b" fontSize={11} tickLine={false} tickFormatter={(val) => `Rp ${val}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#002B49', color: '#fff', borderRadius: '8px', fontSize: '11px' }}
                  formatter={(value: any) => [`Rp ${Number(value).toLocaleString('id-ID')}`, 'JISDOR']}
                />
                <Area type="monotone" dataKey="jisdor" stroke="#003F87" strokeWidth={2.5} fillOpacity={1} fill="url(#colorJisdorPort)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer info & Links */}
        <div className="p-6 bg-slate-900 text-slate-300 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-white block">Ingin melihat kode sumber lengkap proyek ini?</span>
            <span className="text-slate-400">Dibuat oleh Pangeran Ryan Pahlevi menggunakan Next.js 14 dan TypeScript.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/raphlv/bi-portal-next"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#003F87] hover:bg-[#002B49] text-white font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <span>Buka Repositori GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
