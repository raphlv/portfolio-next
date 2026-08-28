'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { ALL_PROJECTS, Project } from '@/lib/portfolioData';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'Semua', label: '🌟 Semua Proyek (20)' },
    { id: 'Enterprise & Portals', label: '🏛️ Enterprise & Portals (5)' },
    { id: 'E-Commerce & UMKM', label: '🛍️ E-Commerce & UMKM (5)' },
    { id: 'Management & ERP', label: '📊 Management & ERP (4)' },
    { id: 'Smart City & Public', label: '🛰️ Smart City & Public (6)' },
  ];

  const filteredProjects = ALL_PROJECTS.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-20 bg-[#070A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Rekam Jejak 20 Repositori GitHub Nyata
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Galeri Proyek & Solusi Digital
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl font-normal">
              Seluruh proyek di bawah ini telah dikembangkan secara fungsional, memiliki repositori kode sumber di GitHub, dan siap diadaptasikan untuk kebutuhan instansi atau bisnis Anda.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek / tech stack..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 text-white rounded-2xl border border-white/10 text-xs focus:outline-none focus:border-cyan-400 placeholder:text-slate-500 font-medium"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-glow-cyan'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121B2F] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* GitHub Repo Pill */}
                  <div className="absolute top-3 right-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-black/70 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 flex items-center gap-1 text-[11px] font-mono transition-colors"
                      title="Lihat di GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3 line-clamp-1 italic">
                    "{project.tagline}"
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-white/5 text-[10px] text-slate-300 font-mono border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white font-bold border border-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Studi Kasus Klien</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 transition-colors"
                  title="Lihat Kode Sumber GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Pop-up */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
