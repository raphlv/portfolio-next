export interface EconomicIndicator {
  id: string;
  name: string;
  shortName: string;
  value: string;
  unit: string;
  change: string;
  isPositive: boolean;
  period: string;
  description: string;
  category: 'moneter' | 'makroprudensial' | 'sektor_riil';
}

export interface ExchangeRate {
  currency: string;
  currencyName: string;
  flag: string;
  symbol: string;
  buy: number;
  sell: number;
  middle: number;
  change: number;
  isUp: boolean;
  lastUpdated: string;
}

export interface HistoricalRate {
  date: string;
  jisdor: number;
  biRate: number;
  inflation: number;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Siaran Pers' | 'Berita' | 'Pidato' | 'Edukasi';
  date: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  downloadUrl?: string;
  readTime: string;
  featured?: boolean;
}

export interface PublicationItem {
  id: string;
  title: string;
  category: 'Laporan Perekonomian' | 'Kebijakan Moneter' | 'Kajian Stabilitas' | 'Laporan Tahunan' | 'Working Paper';
  period: string;
  coverImage: string;
  fileSize: string;
  downloadCount: number;
  summary: string;
  fileUrl: string;
}

export interface RegulationItem {
  id: string;
  number: string;
  year: number;
  type: 'PBI' | 'PADG' | 'Surat Edaran';
  title: string;
  status: 'Berlaku' | 'Diubah' | 'Dicabut';
  datePublished: string;
  summary: string;
  category: 'Moneter' | 'Sistem Pembayaran' | 'Makroprudensial' | 'Pasar Uang';
  fileSize: string;
}
