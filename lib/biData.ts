import { EconomicIndicator, ExchangeRate, HistoricalRate, NewsItem, PublicationItem, RegulationItem } from './biTypes';

export const economicIndicators: EconomicIndicator[] = [
  {
    id: 'bi-rate',
    name: 'BI-Rate (Suku Bunga Acuan)',
    shortName: 'BI-Rate',
    value: '6.00',
    unit: '%',
    change: 'Tetap 6,00%',
    isPositive: true,
    period: 'RDG BI Agustus 2026',
    description: 'Suku bunga kebijakan moneter Bank Indonesia untuk menjaga stabilitas Rupiah dan inflasi.',
    category: 'moneter'
  },
  {
    id: 'inflasi',
    name: 'Tingkat Inflasi (YoY)',
    shortName: 'Inflasi',
    value: '2.12',
    unit: '%',
    change: '-0.06% MoM',
    isPositive: true,
    period: 'Juli 2026 (Sasaran: 2,5±1%)',
    description: 'Indeks Harga Konsumen (IHK) terjaga dalam rentang sasaran target 2,5% ± 1%.',
    category: 'moneter'
  },
  {
    id: 'cadangan-devisa',
    name: 'Cadangan Devisa Nasional',
    shortName: 'Cadangan Devisa',
    value: '150.2',
    unit: 'Miliar USD',
    change: '+1.8 Miliar USD',
    isPositive: true,
    period: 'Akhir Juli 2026',
    description: 'Setara pembiayaan 6,5 bulan impor atau 6,3 bulan impor dan pembayaran utang luar negeri pemerintah.',
    category: 'makroprudensial'
  },
  {
    id: 'jisdor',
    name: 'Jakarta Interbank Spot Dollar Rate (JISDOR)',
    shortName: 'JISDOR USD/IDR',
    value: '15,845',
    unit: 'IDR',
    change: '-35 IDR (Menguat)',
    isPositive: true,
    period: '1 Sep 2026 15:30 WIB',
    description: 'Kurs referensi representasi nilai tukar Rupiah terhadap Dolar AS di pasar domestik.',
    category: 'moneter'
  },
  {
    id: 'pdb',
    name: 'Pertumbuhan Ekonomi (PDB YoY)',
    shortName: 'Pertumbuhan PDB',
    value: '5.05',
    unit: '%',
    change: '+0.03% vs Q1',
    isPositive: true,
    period: 'Triwulan II 2026',
    description: 'Didukung permintaan domestik yang kuat serta kinerja ekspor manufaktur berdaya saing.',
    category: 'sektor_riil'
  },
  {
    id: 'kredit-perbankan',
    name: 'Pertumbuhan Kredit Perbankan',
    shortName: 'Kredit Perbankan',
    value: '12.40',
    unit: '% YoY',
    change: '+0.85% YoY',
    isPositive: true,
    period: 'Juni 2026',
    description: 'Pertumbuhan kredit terdistribusi seimbang pada segmen modal kerja, investasi, dan konsumsi.',
    category: 'makroprudensial'
  }
];

export const exchangeRates: ExchangeRate[] = [
  {
    currency: 'USD',
    currencyName: 'Dolar Amerika Serikat',
    flag: '🇺🇸',
    symbol: '$',
    buy: 15766.00,
    sell: 15924.00,
    middle: 15845.00,
    change: -0.22,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'EUR',
    currencyName: 'Euro Uni Eropa',
    flag: '🇪🇺',
    symbol: '€',
    buy: 17150.00,
    sell: 17325.00,
    middle: 17237.50,
    change: 0.15,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'SGD',
    currencyName: 'Dolar Singapura',
    flag: '🇸🇬',
    symbol: 'S$',
    buy: 12150.00,
    sell: 12275.00,
    middle: 12212.50,
    change: -0.08,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'JPY',
    currencyName: 'Yen Jepang (per 100)',
    flag: '🇯🇵',
    symbol: '¥',
    buy: 108.50,
    sell: 109.65,
    middle: 109.07,
    change: -0.35,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'CNY',
    currencyName: 'Yuan Tiongkok (Renminbi)',
    flag: '🇨🇳',
    symbol: '¥',
    buy: 2195.00,
    sell: 2218.00,
    middle: 2206.50,
    change: 0.05,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'GBP',
    currencyName: 'Poundsterling Inggris',
    flag: '🇬🇧',
    symbol: '£',
    buy: 20120.00,
    sell: 20325.00,
    middle: 20222.50,
    change: 0.28,
    isUp: true,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'AUD',
    currencyName: 'Dolar Australia',
    flag: '🇦🇺',
    symbol: 'A$',
    buy: 10540.00,
    sell: 10650.00,
    middle: 10595.00,
    change: -0.18,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  },
  {
    currency: 'SAR',
    currencyName: 'Riyal Arab Saudi',
    flag: '🇸🇦',
    symbol: '﷼',
    buy: 4202.00,
    sell: 4245.00,
    middle: 4223.50,
    change: -0.12,
    isUp: false,
    lastUpdated: '01 Sep 2026 - 15:00 WIB'
  }
];

export const historicalData: HistoricalRate[] = [
  { date: '25 Agu', jisdor: 15920, biRate: 6.00, inflation: 2.15 },
  { date: '26 Agu', jisdor: 15895, biRate: 6.00, inflation: 2.15 },
  { date: '27 Agu', jisdor: 15880, biRate: 6.00, inflation: 2.15 },
  { date: '28 Agu', jisdor: 15865, biRate: 6.00, inflation: 2.12 },
  { date: '29 Agu', jisdor: 15850, biRate: 6.00, inflation: 2.12 },
  { date: '31 Agu', jisdor: 15860, biRate: 6.00, inflation: 2.12 },
  { date: '01 Sep', jisdor: 15845, biRate: 6.00, inflation: 2.12 }
];

export const newsArticles: NewsItem[] = [
  {
    id: 'sp-26-140',
    title: 'BI-Rate Tetap 6,00%: Memperkuat Stabilitas Nilai Tukar Rupiah dan Mendukung Pertumbuhan Ekonomi Berkelanjutan',
    slug: 'bi-rate-tetap-6-persen-rdg-agustus-2026',
    category: 'Siaran Pers',
    date: '21 Agustus 2026',
    summary: 'Rapat Dewan Gubernur (RDG) Bank Indonesia memutuskan untuk mempertahankan BI-Rate sebesar 6,00%, suku bunga Deposit Facility 5,25%, dan suku bunga Lending Facility 6,75%.',
    content: 'Keputusan ini konsisten dengan fokus kebijakan moneter yang pro-stability untuk penguatan stabilisasi nilai tukar Rupiah.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Komunikasi Bank Indonesia',
    readTime: '4 menit baca',
    featured: true
  },
  {
    id: 'sp-26-139',
    title: 'Akselerasi QRIS Antarnegara: Indonesia Perluas Interkoneksi Pembayaran Digital dengan Uni Emirat Arab dan Korea Selatan',
    slug: 'akselerasi-qris-antarnegara-korsel-uae',
    category: 'Siaran Pers',
    date: '28 Agustus 2026',
    summary: 'Bank Indonesia terus memperluas inisiatif Cross-Border QR Payment guna memfasilitasi transaksi perdagangan dan pariwisata lintas batas yang cepat, murah, transparan, dan inklusif.',
    content: 'Sinergi sistem pembayaran lintas negara semakin memperkuat ekosistem digital nasional.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: 'Departemen Kebijakan Sistem Pembayaran',
    readTime: '3 menit baca',
    featured: true
  }
];

export const publications: PublicationItem[] = [
  {
    id: 'pub-lpi-2025',
    title: 'Laporan Perekonomian Indonesia (LPI) 2025',
    category: 'Laporan Perekonomian',
    period: 'Tahunan 2025 / 2026',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    fileSize: '14.8 MB (PDF)',
    downloadCount: 8420,
    summary: 'Analisis komprehensif perkembangan makroekonomi, inflasi, sektor riil, moneter, dan stabilitas sistem keuangan.',
    fileUrl: '#'
  },
  {
    id: 'pub-lkm-q2-2026',
    title: 'Laporan Kebijakan Moneter (LKM) Triwulan II 2026',
    category: 'Kebijakan Moneter',
    period: 'Triwulan II 2026',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    fileSize: '8.2 MB (PDF)',
    downloadCount: 5120,
    summary: 'Evaluasi pelaksanaan kebijakan moneter dan transmisi suku bunga terhadap pertumbuhan kredit perbankan.',
    fileUrl: '#'
  }
];
