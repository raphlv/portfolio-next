import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F172A',
};

export const metadata: Metadata = {
  title: 'Pangeran Ryan Pahlevi — Software Engineer & Web Developer',
  description: 'Portofolio resmi Pangeran Ryan Pahlevi (@raphlv). Pengembang perangkat lunak full-stack dengan 20 repositori GitHub nyata (Next.js 14, React, TypeScript, Laravel).',
  keywords: 'Pangeran Ryan Pahlevi, raphlv, Web Developer Indonesia, Next.js Developer, Full-Stack Engineer, Portofolio Programmer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
