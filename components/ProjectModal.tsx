'use client';

import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  AlertCircle, 
  Lightbulb, 
  Sparkles 
} from 'lucide-react';
import { Project } from '@/lib/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0D1322] border border-white/15 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
        {/* Top Header with Image Backdrop */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-[#0D1322]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 inline-block mb-1.5">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Tagline */}
          <p className="text-sm font-semibold text-cyan-400 italic">
            "{project.tagline}"
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                  {m.label}
                </span>
                <span className="text-base font-bold text-white mt-0.5 block font-display">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
              <div className="text-rose-400 font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Tantangan & Masalah Klien
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
              <div className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4" /> Solusi Arsitektur Teknis
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Fitur Utama & Keunggulan Implementasi:
            </span>
            <ul className="space-y-2">
              {project.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Teknologi yang Digunakan:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-white/5 text-slate-200 text-xs font-medium border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#070A12] flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>Lihat Repositori GitHub ({project.repoName})</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/6281119333639?text=${encodeURIComponent(`Halo Pangeran Ryan, saya tertarik membuat proyek seperti ${project.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-glow-cyan transition-all flex items-center gap-2"
            >
              <span>Bangun Solusi Serupa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
