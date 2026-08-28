import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Quote, 
  Star, 
  Github, 
  Layers 
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import ClientEstimator from '@/components/ClientEstimator';
import SkillsMatrix from '@/components/SkillsMatrix';
import WorkTimeline from '@/components/WorkTimeline';
import ContactSection from '@/components/ContactSection';
import { CLIENT_TESTIMONIALS } from '@/lib/portfolioData';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Projects Showcase (Filtered 20 Projects) */}
      <ProjectsGrid />

      {/* 3. Client Interactive Estimator */}
      <ClientEstimator />

      {/* 4. Skills & Architecture Matrix */}
      <SkillsMatrix />

      {/* 5. Client Testimonials Section */}
      <section className="py-20 bg-[#070A12] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Kepuasan & Kepercayaan Klien
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Apa Kata Klien & Rekan Kolaborasi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((testi, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{testi.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                  <p className="text-xs text-cyan-400 font-semibold">{testi.role}</p>
                  <p className="text-[11px] text-slate-500">{testi.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Career Timeline */}
      <WorkTimeline />

      {/* 7. Contact Section */}
      <ContactSection />
    </div>
  );
}
