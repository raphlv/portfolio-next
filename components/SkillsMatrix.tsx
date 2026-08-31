'use client';

import React from 'react';
import { 
  Code2, 
  Database, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/portfolioData';

export default function SkillsMatrix() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Code2 className="w-3.5 h-3.5 shrink-0" />
            Penguasaan Teknologi & Arsitektur
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keahlian Teknis & Alat Pengembangan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            Kombinasi teknologi modern untuk menghasilkan aplikasi web yang tangguh, aman, dan mudah dirawat dalam jangka panjang.
          </p>
        </div>

        {/* 3 Skill Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="clean-card p-4 sm:p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    {idx === 0 && <Code2 className="w-4 h-4 text-blue-600 shrink-0" />}
                    {idx === 1 && <Database className="w-4 h-4 text-indigo-600 shrink-0" />}
                    {idx === 2 && <Wrench className="w-4 h-4 text-slate-700 shrink-0" />}
                    <span>{cat.title}</span>
                  </h3>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-2.5"
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 block truncate">{skill.name}</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">{skill.desc}</span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Terimplementasi pada 20 proyek GitHub aktif</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
