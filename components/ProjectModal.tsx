'use client';

import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Code2 
} from 'lucide-react';
import { Project, DEVELOPER_PROFILE } from '@/lib/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
        {/* Top Image Banner */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 shadow-md transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-600 inline-block mb-1.5 shadow-sm">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Tagline */}
          <p className="text-sm font-semibold text-blue-700 italic">
            "{project.tagline}"
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-slate-900 mt-0.5 block font-display">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
              <div className="text-rose-800 font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" /> Tantangan Kebutuhan
              </div>
              <p className="text-rose-950/80 leading-relaxed text-[11px]">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1.5">
              <div className="text-blue-800 font-bold flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-blue-600" /> Solusi Arsitektur Teknis
              </div>
              <p className="text-blue-950/80 leading-relaxed text-[11px]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              Fitur & Keunggulan Implementasi:
            </span>
            <ul className="space-y-2">
              {project.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Teknologi yang Digunakan:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs border border-slate-300 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Lihat Repositori GitHub ({project.repoName})</span>
          </a>

          <a
            href={`https://wa.me/${DEVELOPER_PROFILE.whatsapp}?text=${encodeURIComponent(`Halo Pangeran Ryan, saya tertarik berdiskusi mengenai proyek seperti ${project.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
          >
            <span>Diskusi Proyek Serupa via WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
