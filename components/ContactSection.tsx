'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Github, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Portal Web / Next.js',
    budget: 'Rp 5 Juta - Rp 15 Juta',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Halo Pangeran Ryan,\n\nNama: ${formData.name || 'Klien'}\nEmail: ${formData.email || '-'}\nJenis Proyek: ${formData.projectType}\nEstimasi Budget: ${formData.budget}\n\nPesan:\n${formData.message || 'Saya ingin berdiskusi mengenai proyek web.'}`;
    return `https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-[#070A12] relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Info & Value Pitch (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                Mulai Kolaborasi
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mari Diskusikan Solusi Digital Bisnis Anda
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-normal">
                Siap membantu merealisasikan portal web perusahaan, toko online, atau sistem manajemen kustom dengan standar kode tertinggi dan performa kilat.
              </p>
            </div>

            {/* Direct Contact List */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 text-xs">
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">WhatsApp Direct Chat</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">+62 811-1933-3639</span>
                  <span className="text-[11px] text-slate-400">Respon cepat dalam hitungan menit</span>
                </div>
              </a>

              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">Email Korespondensi</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">{DEVELOPER_PROFILE.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">Lokasi & Zona Waktu</span>
                  <span className="text-xs font-bold text-white mt-0.5 block">{DEVELOPER_PROFILE.location} (WIB / GMT+7)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Kirimkan Ringkasan Kebutuhan Proyek
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                Isi rincian di bawah ini untuk menerima penawaran lingkup kerja dan konsultasi arsitektur sistem gratis.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Ringkasan Pesan Siap</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Terima kasih atas rincian yang Anda kirimkan. Anda dapat langsung meneruskannya ke WhatsApp untuk respon instan:
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-glow-emerald flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Teruskan Pesan ke WhatsApp Sekarang</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Nama Lengkap / Perusahaan:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Bpk. Hendra (PT Maju Inovasi)"
                        className="w-full px-4 py-3 bg-white/5 text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 font-medium placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Alamat Email:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hendra@perusahaan.com"
                        className="w-full px-4 py-3 bg-white/5 text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 font-medium placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Jenis Kebutuhan Aplikasi:
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1322] text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 font-medium"
                      >
                        <option value="Portal Web / Next.js">Portal Web Perusahaan / Institusi</option>
                        <option value="E-Commerce / Toko Online">E-Commerce & Toko Online UMKM</option>
                        <option value="SaaS & Custom Management System">Custom SaaS / ERP / Management System</option>
                        <option value="Media Streaming / TV / Radio">Platform Media Streaming / Video / Audio</option>
                        <option value="Konsultasi Arsitektur Web">Konsultasi Arsitektur & Modernisasi Sistem</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">
                        Estimasi Rentang Budget:
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1322] text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 font-medium"
                      >
                        <option value="Rp 3 Juta - Rp 7 Juta">Rp 3 Juta - Rp 7 Juta (Landing/Katalog)</option>
                        <option value="Rp 7 Juta - Rp 15 Juta">Rp 7 Juta - Rp 15 Juta (Portal/E-Commerce)</option>
                        <option value="Rp 15 Juta - Rp 35 Juta">Rp 15 Juta - Rp 35 Juta (SaaS/ERP Kompleks)</option>
                        <option value="Disesuaikan dengan Scope">Disesuaikan dengan Scope Khusus</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Deskripsi Kebutuhan & Fitur Utama:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan gambaran umum website yang ingin dibuat, target audiens, dan fitur khusus yang diinginkan..."
                      className="w-full px-4 py-3 bg-white/5 text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 font-medium placeholder:text-slate-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Kerahasiaan ide & data 100% terjaga
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-glow-cyan transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirimkan Rincian</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
