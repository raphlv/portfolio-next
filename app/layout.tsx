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
  metadataBase: new URL('https://pangeranryan.vercel.app'),
  title: {
    default: 'Pangeran Ryan Pahlevi — Software Engineer & Full-Stack Developer',
    template: '%s | Pangeran Ryan Pahlevi',
  },
  description: 'Portofolio resmi Pangeran Ryan Pahlevi (@raphlv). Software Engineer & Full-Stack Web Developer lulusan Universitas Budi Luhur. Berpengalaman dalam Next.js, React, TypeScript, Laravel, dan AI Application Engineering.',
  keywords: [
    'Pangeran Ryan',
    'Pangeran Ryan Pahlevi',
    'raphlv',
    'Ryan Pahlevi',
    'Pangeran Ryan Budi Luhur',
    'Software Engineer Indonesia',
    'Full Stack Web Developer Jakarta',
    'Next.js Developer Indonesia',
    'Programmer Budi Luhur',
    'Pengembang DIGISMART',
    'Portofolio Pangeran Ryan',
    'github.com/raphlv',
    'Full Stack Engineer',
    'React TypeScript Developer',
  ],
  authors: [{ name: 'Pangeran Ryan Pahlevi', url: 'https://github.com/raphlv' }],
  creator: 'Pangeran Ryan Pahlevi',
  publisher: 'Pangeran Ryan Pahlevi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'id_ID',
    url: 'https://pangeranryan.vercel.app',
    title: 'Pangeran Ryan Pahlevi — Software Engineer & Full-Stack Developer',
    description: 'Portofolio resmi Pangeran Ryan Pahlevi (@raphlv). Full-Stack Web & Mobile Developer dengan 20+ proyek nyata.',
    siteName: 'Portofolio Pangeran Ryan Pahlevi',
    firstName: 'Pangeran Ryan',
    lastName: 'Pahlevi',
    username: 'raphlv',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pangeran Ryan Pahlevi — Software Engineer & Full-Stack Developer',
    description: 'Portofolio resmi Pangeran Ryan Pahlevi (@raphlv). Full-Stack Web & Mobile Developer.',
    creator: '@raphlv',
  },
  alternates: {
    canonical: 'https://pangeranryan.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// JSON-LD Structured Data Schema for Google Knowledge Graph
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pangeran Ryan Pahlevi',
  alternateName: ['Pangeran Ryan', 'raphlv', 'Ryan Pahlevi'],
  url: 'https://pangeranryan.vercel.app',
  image: 'https://avatars.githubusercontent.com/u/raphlv',
  jobTitle: 'Software Engineer & Full-Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Universitas Budi Luhur',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Universitas Budi Luhur',
  },
  sameAs: [
    'https://github.com/raphlv',
    'https://instagram.com/jspryourbae',
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Laravel',
    'Full-Stack Web Development',
    'UI/UX Design',
    'Cyber Security',
    'Artificial Intelligence Tools',
  ],
  description: 'Mahasiswa Teknik Informatika Universitas Budi Luhur dengan keahlian Full Stack Web & Mobile Development, UI/UX Design, serta Cyber Security.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
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
