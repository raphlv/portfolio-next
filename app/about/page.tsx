import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Github, 
  Mail, 
  MessageCircle,
  MapPin,
  Users,
  Code2
} from 'lucide-react';
import SkillsMatrix from '@/components/SkillsMatrix';
import WorkTimeline from '@/components/WorkTimeline';
import { DEVELOPER_PROFILE, CERTIFICATIONS } from '@/lib/portfolioData';

export const metadata = {
  title: 'Tentang & Profil CV — Pangeran Ryan Pahlevi (@raphlv)',
  description: 'Profil lengkap, riwayat pendidikan Universitas Budi Luhur, sertifikasi kompetensi BNSP, penghargaan GEMASTIK, dan pengalaman kerja Pangeran Ryan Pahlevi.',
};

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Tentang & Riwayat Karir</span>
        </div>

        {/* Profile Card */}
        <div className="clean-card p-5 sm:p-10 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Avatar & Identity */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-2xl sm:text-3xl shadow-sm mb-3 sm:mb-4">
                PR
              </div>

              <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                {DEVELOPER_PROFILE.name}
              </h1>
              <p className="text-xs font-mono font-semibold text-blue-600 mt-0.5">
                @{DEVELOPER_PROFILE.github.split('/').pop()}
              </p>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {DEVELOPER_PROFILE.education}
              </p>

              <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent('Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Bio & Profile Summary from CV */}
            <div className="lg:col-span-8 space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-200 pt-5 lg:pt-0 lg:pl-8">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] sm:text-[11px] font-bold border border-blue-200 uppercase tracking-wider inline-block">
                Ringkasan Profil Profesional
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Mahasiswa Teknik Informatika & Rekayasawan Perangkat Lunak
              </h2>
              <p>
                Saya adalah mahasiswa program sarjana (S1) Teknik Informatika di <strong>Universitas Budi Luhur</strong>. Memiliki ketertarikan tinggi pada bidang <strong>Cyber Security, Computer Engineering, dan IoT</strong>, serta berpengalaman luas dalam pengembangan aplikasi web dan mobile modern.
              </p>
              <p>
                Dikenal sebagai pribadi yang adaptif, komunikatif, berdaya analisis kritis, dan fokus pada pemecahan masalah (problem solving). Mampu bekerja secara mandiri maupun berkolaborasi dalam tim lintas divisi, baik sebagai Full-Stack Developer, UI Designer, maupun Project Manager.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full Stack Web & Mobile (React / Laravel)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sertifikasi Resmi BNSP Komputer Jaringan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Finalis Kelompok Terpilih GEMASTIK</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pengalaman Project Management & UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {/* Certifications Card */}
          <div className="clean-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Award className="w-5 h-5 text-blue-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Sertifikasi & Penghargaan
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900">{cert.title}</h4>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500">{cert.issuer}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Organization Card */}
          <div className="clean-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Pendidikan & Organisasi
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {/* Education */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900">S1 Teknik Informatika</h4>
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    2022 - 2026
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">Universitas Budi Luhur — Jakarta</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Program studi sarjana Teknik Informatika dengan pendalaman pada Rekayasa Perangkat Lunak, Jaringan Komputer, dan Keamanan Sistem.
                </p>
              </div>

              {/* Organization */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900">BudiLuhur Esports — Divisi Editing & Media</h4>
                  <span className="text-[10px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                    2022 - 2023
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">Organisasi Mahasiswa Kampus</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Bertanggung jawab merancang konsep kreatif, produksi editing foto/video, dan manajemen media sosial organisasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Work Timeline */}
      <WorkTimeline />
    </div>
  );
}
