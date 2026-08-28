'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  MapPin, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  ShieldCheck 
} from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/lib/portfolioData';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Halo Pangeran Ryan,\n\nNama: ${formData.name || 'Klien'}\nKontak: ${formData.contact || '-'}\n\nPesan / Kebutuhan:\n${formData.message || 'Saya ingin berdiskusi mengenai pembuatan website / aplikasi.'}`;
    return `https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 bg-white border-t border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                <MessageCircle className="w-3.5 h-3.5" />
                Kontak & Kolaborasi
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Hubungi Saya
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                Silakan hubungi saya melalui WhatsApp atau email untuk mendiskusikan kebutuhan pembuatan website, portal instansi, atau sistem manajemen aplikasi.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya ingin berdiskusi mengenai proyek website/aplikasi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">WhatsApp Direct</span>
                  <span className="text-base font-bold text-emerald-950 block mt-0.5">{DEVELOPER_PROFILE.whatsappFormatted}</span>
                  <span className="text-xs text-emerald-700">Respon cepat untuk diskusi proyek</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${DEVELOPER_PROFILE.email}`}
                className="clean-card p-4 rounded-2xl flex items-start gap-3.5 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Email</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">{DEVELOPER_PROFILE.email}</span>
                  <span className="text-xs text-slate-500">Kirimkan dokumen / proposal resmi</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="clean-card p-4 rounded-2xl flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Lokasi</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">{DEVELOPER_PROFILE.location}</span>
                  <span className="text-xs text-slate-500">Waktu Indonesia Barat (WIB / GMT+7)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="clean-card p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-slate-600 mb-6 font-normal">
                Tuliskan pesan Anda dan teruskan langsung ke WhatsApp untuk memulai percakapan.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Pesan Siap Diteruskan</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Rincian pesan Anda telah diformat. Klik tombol di bawah untuk membukanya langsung di WhatsApp:
                  </p>
                  <div className="pt-2 flex justify-center">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Kirim ke WhatsApp Sekarang</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Nama Lengkap / Instansi:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Hendra (PT Maju Inovasi)"
                      className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Nomor WhatsApp atau Email Anda:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="0812-xxxx-xxxx / email@perusahaan.com"
                      className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Pesan atau Kebutuhan Aplikasi:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan website atau aplikasi yang ingin dibuat..."
                      className="w-full px-4 py-2.5 bg-slate-50 text-slate-900 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      Komunikasi langsung & terpercaya
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan</span>
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
