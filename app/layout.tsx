import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pangeran Ryan Pahlevi (raphlv) — Senior Full-Stack & Next.js Architect',
  description: 'Portofolio resmi Pangeran Ryan Pahlevi (raphlv). Full-Stack Web Architect & Next.js Specialist dengan 20+ repositori GitHub nyata (BRIN, Budi Luhur Portal, E-Commerce, ERP, Smart City).',
  keywords: 'Pangeran Ryan Pahlevi, raphlv, Next.js Developer Indonesia, Full-Stack Engineer, React Specialist, Web Developer Jakarta, Portofolio Web Developer',
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
    <html lang="id" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#070A12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
