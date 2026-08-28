'use client';

import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { WORK_EXPERIENCES } from '@/lib/portfolioData';

export default function WorkTimeline() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-slate-200" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5" />
            Rekam Jejak Karir & Proyek
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman Kerja & Pengembangan Sistem
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            Pengalaman nyata dalam merancang arsitektur sistem, memimpin proyek perangkat lunak, hingga mengimplementasikan aplikasi web & mobile.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="clean-card p-6 rounded-2xl flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-slate-300 transition-colors"
            >
              <div className="md:w-5/12 shrink-0">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-2 inline-block">
                  {exp.type}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {exp.role}
                </h3>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  {exp.organization}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="md:w-7/12 space-y-2 pt-4 md:pt-0 md:border-l md:border-slate-200 md:pl-6">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                  Ruang Lingkup & Tanggung Jawab:
                </span>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
