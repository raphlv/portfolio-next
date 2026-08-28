import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import SkillsMatrix from '@/components/SkillsMatrix';
import WorkTimeline from '@/components/WorkTimeline';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Galeri 20 Proyek Nyata */}
      <ProjectsGrid />

      {/* 3. Matriks Keahlian Teknis */}
      <SkillsMatrix />

      {/* 4. Rekam Jejak Pengalaman */}
      <WorkTimeline />

      {/* 5. Kontak Langsung */}
      <ContactSection />
    </div>
  );
}
