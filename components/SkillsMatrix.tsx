'use client';

import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Flame,
  ShieldCheck
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/portfolioData';

export default function SkillsMatrix() {
  return (
    <section className="py-20 bg-[#070A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Matriks Kompetensi Rekayasa Perangkat Lunak
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Keahlian Teknis & Arsitektur Sistem
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed font-normal">
            Kombinasi teknologi modern untuk menghasilkan aplikasi yang tangguh, aman, berkinerja tinggi, dan mudah dikembangkan dalam jangka panjang.
          </p>
        </div>

        {/* 3 Skill Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {idx === 0 && <Code2 className="w-5 h-5 text-cyan-400" />}
                    {idx === 1 && <Database className="w-5 h-5 text-indigo-400" />}
                    {idx === 2 && <Server className="w-5 h-5 text-emerald-400" />}
                    <span>{cat.title}</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Teruji pada 20+ proyek produksi aktif</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
