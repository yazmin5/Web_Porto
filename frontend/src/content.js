// ============================================================
// YASMIN LUKMAN — portfolio content. Edit anything here.
// Text fields are { en, id } pairs — both languages live here.
// ============================================================
import dashData from "@/data/dashboardData.json";

export const IMAGES = {
  waves: "https://images.unsplash.com/photo-1707054437518-dfd402977b03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0JTIwYWJzdHJhY3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzg3MTA5NTE2fDA&ixlib=rb-4.1.0&q=85",
  bars: "https://images.unsplash.com/photo-1752213355138-7d08b01d2d0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMG1pbmltYWwlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0JTIwYWJzdHJhY3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzg3MTA5NTE2fDA&ixlib=rb-4.1.0&q=85",
  portrait: "https://images.unsplash.com/photo-1693464081656-c5b1368960d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGxvb2tpbmclMjBhd2F5JTIwbmF0dXJhbCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfHx8fDE3ODcxMDk1MTZ8MA&ixlib=rb-4.1.0&q=85",
  workspace: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMG9mZmljZSUyMGRlc2slMjBhcmNoaXRlY3QlMjBzZXR1cHxlbnwwfHx8fDE3ODcxMDk1MTZ8MA&ixlib=rb-4.1.0&q=85",
};

export const profile = {
  name: "Yasmin Lukman",
  initials: "YL",
  role: "Data Analyst / Business Intelligence",
  location: "Jakarta, Indonesia — GMT+7",
  email: "work.yasmin.lukman@gmail.com",
  phone: "+62 851-5977-7648",
  availability: { en: "Open to data analyst & BI opportunities", id: "Terbuka untuk peluang data analyst & BI" },
  resumeUrl: "/Yasmin_Lukman_CV.pdf",
  tableauViz:
    "https://public.tableau.com/app/profile/yasmin6310/viz/MavenBankAnalysis_16548448722190/DashboardBankMaven",
  intro: {
    en: "Detail-oriented Data Analyst with 2+ years across business intelligence, reporting and dashboard development — advanced in Excel, fluent in Python, SQL, Power BI and Tableau. I turn reconciled, trustworthy data into decisions.",
    id: "Data Analyst yang teliti dengan pengalaman 2+ tahun di business intelligence, pelaporan, dan pengembangan dashboard — mahir Excel, terampil Python, SQL, Power BI, dan Tableau. Saya mengubah data yang terekosialisasi dan tepercaya menjadi keputusan.",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yasmin-lukman" },
    { label: "Tableau Public", href: "https://public.tableau.com/app/profile/yasmin6310" },
  ],
};

export const traits = [
  { n: "01", text: { en: "Data Enthusiast", id: "Penggemar Data" } },
  { n: "02", text: { en: "Problem Solver", id: "Pemecah Masalah" } },
  { n: "03", text: { en: "Continuous Learner", id: "Pembelajar Sepanjang Hayat" } },
];

export const sparkData = [
  { v: 42 }, { v: 48 }, { v: 45 }, { v: 56 }, { v: 61 }, { v: 58 },
  { v: 70 }, { v: 76 }, { v: 72 }, { v: 86 }, { v: 94 }, { v: 100 },
];

export const marqueeItems = {
  en: ["Data to decisions", "Precision at scale", "Architecting intelligence", "Signal over noise"],
  id: ["Data jadi keputusan", "Presisi berskala", "Merancang kecerdasan", "Sinyal, bukan derau"],
};

export const manifesto = [
  {
    n: "01",
    title: { en: "Reconciled, or it didn't happen", id: "Terekonsiliasi, atau dianggap tidak ada" },
    text: {
      en: "At Indosat Ooredoo Hutchison I ran reconciliation and quality checks across every reporting stream. A number that can't be traced back to source is a liability, not an insight.",
      id: "Di Indosat Ooredoo Hutchison, saya menjalankan rekonsiliasi dan pemeriksaan kualitas di setiap alur pelaporan. Angka yang tidak bisa ditelusuri ke sumbernya adalah liabilitas, bukan insight.",
    },
  },
  {
    n: "02",
    title: { en: "Dashboards people actually open", id: "Dashboard yang benar-benar dibuka" },
    text: {
      en: "I design Power BI and Tableau dashboards for the Monday-morning KPI review: fast, honest, and impossible to misread — then I keep the ETL pipelines behind them quiet and reliable.",
      id: "Saya merancang dashboard Power BI dan Tableau untuk review KPI Senin pagi: cepat, jujur, dan mustahil disalahartikan — lalu menjaga pipeline ETL di belakangnya tetap andal dan senyap.",
    },
  },
  {
    n: "03",
    title: { en: "Curiosity, quantified", id: "Rasa ingin tahu, terukur" },
    text: {
      en: "A Master's in Computer Science (GPA 3.8/4) with a thesis on spatio-temporal hotspot and PM2.5 analysis. Machine learning and statistics aren't buzzwords on my CV — they're my coursework.",
      id: "Magister Ilmu Komputer (IPK 3,8/4) dengan tesis analisis spasial-temporal titik panas dan PM2.5. Machine learning dan statistika bukan sekadar buzzword di CV saya — itu mata kuliah saya.",
    },
  },
];

export const proficiency = [
  { skill: "Excel", level: 96 },
  { skill: "Power BI", level: 90 },
  { skill: "Pandas", level: 90 },
  { skill: "Python", level: 88 },
  { skill: "Tableau", level: 87 },
  { skill: "SQL", level: 85 },
  { skill: "SKLearn", level: 78 },
];

export const domains = {
  en: [
    { domain: "Analysis", level: 92, target: 70 },
    { domain: "Visualisation", level: 90, target: 70 },
    { domain: "Statistics", level: 86, target: 70 },
    { domain: "Storytelling", level: 84, target: 70 },
    { domain: "ETL", level: 82, target: 70 },
    { domain: "ML", level: 76, target: 70 },
  ],
  id: [
    { domain: "Analisis", level: 92, target: 70 },
    { domain: "Visualisasi", level: 90, target: 70 },
    { domain: "Statistika", level: 86, target: 70 },
    { domain: "Storytelling", level: 84, target: 70 },
    { domain: "ETL", level: 82, target: 70 },
    { domain: "ML", level: 76, target: 70 },
  ],
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthlyRevenue = MONTHS.map((m) => ({
  m,
  revenue: Math.round(
    dashData.sales.cube.filter((r) => r.Month === m).reduce((a, r) => a + r.revenue, 0)
  ),
}));
const monthlyOrders = MONTHS.map((m) => ({
  m,
  orders: dashData.sales.cube.filter((r) => r.Month === m).reduce((a, r) => a + r.orders, 0),
}));
const infraByYear = dashData.infra.byYear.map((r) => ({
  year: String(r.Year),
  actual: Math.round(r.actual / 1000),
  target: Math.round(r.target / 1000),
}));

export const yearly = monthlyOrders;

export const toolbox = [
  "Excel", "Power BI", "Tableau", "SQL", "Python", "Pandas",
  "NumPy", "Scikit-learn", "ETL", "ACNielsen", "A/B Testing", "Data Mining",
];

export const projects = [
  {
    id: "sales-dashboard",
    index: "01",
    title: "Excel Sales Dashboard",
    category: "Excel / Sales Analytics",
    year: "2026",
    image: null,
    downloadUrl: "https://1drv.ms/x/c/8a03a04a4d2ed33d/IQCWofwQVMKSQ6c0ROEskQqTAXi5GlHFeLJ9j88IpUJVQ0o?e=KYe8YL",
    summary: {
      en: "A full-year sales performance workbook over 2,000 orders — revenue, channel mix, regional split and category trends behind one slicer-driven dashboard.",
      id: "Workbook performa penjualan setahun penuh atas 2.000 pesanan — pendapatan, komposisi kanal, sebaran wilayah, dan tren kategori dalam satu dashboard berslicer.",
    },
    challenge: {
      en: "Sales data lived as raw order rows across five regions and four channels. Leadership needed a self-serve view of revenue, order volume and product mix without waiting on analysts.",
      id: "Data penjualan tersimpan sebagai baris pesanan mentah di lima wilayah dan empat kanal. Manajemen butuh tampilan mandiri atas pendapatan, volume pesanan, dan komposisi produk tanpa menunggu analis.",
    },
    approach: {
      en: "Structured 2,000 order records into a clean model, built supporting PivotTables for every dashboard element, and wired slicers so any manager can slice by region, channel or category in seconds.",
      id: "Menata 2.000 catatan pesanan menjadi model yang bersih, membangun PivotTable pendukung untuk setiap elemen dashboard, dan memasang slicer agar manajer mana pun bisa memfilter menurut wilayah, kanal, atau kategori dalam hitungan detik.",
    },
    outcome: {
      en: "One workbook replaced ad-hoc reporting requests — a live, filterable view of $2.45M in annual revenue. Try the interactive rebuild in the Playground below, or download the workbook.",
      id: "Satu workbook menggantikan permintaan laporan ad-hoc — tampilan live dan filterable atas pendapatan tahunan $2,45 juta. Coba versi interaktifnya di Playground di bawah, atau unduh workbook-nya.",
    },
    metrics: [
      { value: "$2.45M", label: { en: "Revenue tracked", id: "Pendapatan terlacak" } },
      { value: "2,000", label: { en: "Orders analysed", id: "Pesanan dianalisis" } },
      { value: "6", label: { en: "Product categories", id: "Kategori produk" } },
    ],
    chartType: "bar",
    xKey: "m",
    chartTitle: { en: "Revenue by month — 2026 ($)", id: "Pendapatan per bulan — 2026 ($)" },
    chartData: monthlyRevenue,
  },
  {
    id: "infra-finance",
    index: "02",
    title: "Infrastructure Finance Status",
    category: "Excel / Finance",
    year: "2025",
    image: null,
    downloadUrl: "https://1drv.ms/x/c/8a03a04a4d2ed33d/IQD13EfWGiBST6MIZW3WDjzEAa9r-T-aX1o9w3x9lftAFkM?e=DzUJUi",
    summary: {
      en: "A quarterly control tower for a $42.6M infrastructure portfolio — 100 projects tracked from PO value through savings, invoicing and as-built cost.",
      id: "Control tower triwulanan untuk portofolio infrastruktur senilai $42,6 juta — 100 proyek terlacak dari nilai PO hingga penghematan, invoice, dan biaya as-built.",
    },
    challenge: {
      en: "A hundred infrastructure projects across five departments, each moving through proposal, approval, work order and invoice stages. Finance needed one quarterly status view, not a hundred spreadsheets.",
      id: "Seratus proyek infrastruktur di lima departemen, masing-masing bergerak melalui tahap proposal, persetujuan, work order, dan invoice. Keuangan butuh satu tampilan status triwulanan, bukan seratus spreadsheet.",
    },
    approach: {
      en: "Modelled every project's full financial lifecycle — PO value, savings, gaps at each approval stage, target vs actual — and built a quarterly dashboard with department and status breakdowns.",
      id: "Memodelkan seluruh siklus finansial tiap proyek — nilai PO, penghematan, gap di setiap tahap persetujuan, target vs realisasi — dan membangun dashboard triwulanan dengan rincian departemen dan status.",
    },
    outcome: {
      en: "$2.1M in savings made visible, and profit/loss status trackable per project per quarter. Explore the live data in the Playground below, or download the workbook.",
      id: "Penghematan $2,1 juta menjadi terlihat, dan status laba/rugi terlacak per proyek per triwulan. Jelajahi data langsungnya di Playground di bawah, atau unduh workbook-nya.",
    },
    metrics: [
      { value: "$42.6M", label: { en: "Portfolio value", id: "Nilai portofolio" } },
      { value: "$2.1M", label: { en: "Savings tracked", id: "Penghematan terlacak" } },
      { value: "68%", label: { en: "Projects profitable", id: "Proyek menguntungkan" } },
    ],
    chartType: "bar",
    xKey: "year",
    chartTitle: { en: "Target vs actual by year ($K)", id: "Target vs realisasi per tahun ($K)" },
    chartData: infraByYear,
  },
  {
    id: "maven-bank",
    index: "03",
    title: "Maven Bank Analysis",
    category: "Tableau / Banking",
    year: "2022",
    image: IMAGES.bars,
    link: "https://public.tableau.com/app/profile/yasmin6310/viz/MavenBankAnalysis_16548448722190/DashboardBankMaven",
    summary: {
      en: "A customer and account analysis for Maven Bank, published live on Tableau Public — demographics, balances and account behaviour in one interactive view.",
      id: "Analisis nasabah dan rekening Maven Bank, dipublikasikan live di Tableau Public — demografi, saldo, dan perilaku rekening dalam satu tampilan interaktif.",
    },
    metrics: [
      { value: "Live", label: { en: "On Tableau Public", id: "Di Tableau Public" } },
      { value: "Interactive", label: { en: "Full dashboard", id: "Dashboard penuh" } },
    ],
  },
  {
    id: "pm25-thesis",
    index: "04",
    title: "Hotspot & PM2.5 Analysis",
    category: "Python / Machine Learning",
    year: "2025",
    image: IMAGES.waves,
    link: "https://journal.ipb.ac.id/jika/article/view/66577/32366",
    summary: {
      en: "Master's thesis, published in IPB's JIKA journal: spatio-temporal analysis of fire hotspots and PM2.5 air pollution across Riau, Jambi and South Sumatra.",
      id: "Tesis magister, terbit di jurnal JIKA IPB: analisis spasial-temporal titik panas kebakaran dan polusi udara PM2.5 di Riau, Jambi, dan Sumatera Selatan.",
    },
    challenge: {
      en: "Seasonal haze from land fires affects millions across Sumatra, but the relationship between fire hotspots and PM2.5 concentration varies across space and time in ways annual averages hide.",
      id: "Kabut asap musiman dari kebakaran lahan memengaruhi jutaan orang di Sumatera, tetapi hubungan antara titik panas dan konsentrasi PM2.5 bervariasi secara ruang dan waktu — hal yang tersembunyi di balik rata-rata tahunan.",
    },
    approach: {
      en: "Combined multi-year hotspot detections with PM2.5 observations across three provinces, then modelled their spatio-temporal correlation using Pandas, NumPy and Scikit-learn.",
      id: "Menggabungkan deteksi titik panas multi-tahun dengan pengamatan PM2.5 di tiga provinsi, lalu memodelkan korelasi spasial-temporalnya dengan Pandas, NumPy, dan Scikit-learn.",
    },
    outcome: {
      en: "Identified the lag structure and regional patterns linking fire activity to air quality — peer-reviewed and published in the JIKA journal, IPB University.",
      id: "Mengidentifikasi struktur jeda waktu dan pola regional yang menghubungkan aktivitas kebakaran dengan kualitas udara — ter-review dan terbit di jurnal JIKA, IPB University.",
    },
    metrics: [
      { value: "3", label: { en: "Provinces studied", id: "Provinsi diteliti" } },
      { value: "3.8/4", label: { en: "M.Sc. GPA", id: "IPK M.Sc." } },
      { value: "JIKA", label: { en: "Published", id: "Terpublikasi" } },
    ],
  },
];

export const research = {
  href: "https://journal.ipb.ac.id/jika/article/view/66577/32366",
  year: "2025",
  title: {
    en: "Spatio-Temporal Analysis of Hotspots and PM2.5 in Riau, Jambi & South Sumatra",
    id: "Analisis Spasial-temporal Titik Panas dan PM2.5 di Riau, Jambi, dan Sumatera Selatan",
  },
  journal: {
    en: "JIKA — Jurnal Ilmu Komputer dan Agri-Informatika, IPB University",
    id: "JIKA — Jurnal Ilmu Komputer dan Agri-Informatika, IPB University",
  },
  description: {
    en: "My Master's thesis, peer-reviewed and published: modelling how fire hotspots drive PM2.5 air pollution across three Sumatran provinces, using Python, Pandas and Scikit-learn.",
    id: "Tesis magister saya, ter-review dan terbit: memodelkan bagaimana titik panas kebakaran memicu polusi udara PM2.5 di tiga provinsi Sumatera, menggunakan Python, Pandas, dan Scikit-learn.",
  },
};

export const experience = [
  {
    period: "Jan 2024 — Mar 2025",
    role: "Business Intelligence Analyst",
    company: "Indosat Ooredoo Hutchison",
    text: {
      en: "Extracted, cleaned and analysed large-scale enterprise data. Designed and maintained interactive Power BI and Tableau dashboards for business performance monitoring, ran data reconciliation across reporting streams, and kept ETL workflows and pipelines efficient — turning core KPIs into recommendations management acted on.",
      id: "Mengekstrak, membersihkan, dan menganalisis data enterprise berskala besar. Merancang dan memelihara dashboard interaktif Power BI dan Tableau untuk pemantauan kinerja bisnis, menjalankan rekonsiliasi data lintas alur pelaporan, dan menjaga alur kerja ETL tetap efisien — mengubah KPI inti menjadi rekomendasi yang ditindaklanjuti manajemen.",
    },
    tags: ["Power BI", "Tableau", "SQL", "ETL", "Reconciliation"],
  },
  {
    period: "Aug 2022 — Dec 2023",
    role: "Category Sales Analyst Assistant",
    company: "Beiersdorf Indonesia",
    text: {
      en: "Structured sales and market data using ACNielsen methodologies. Built monthly KPI reports at national and regional levels, analysed trends to surface growth opportunities, and presented findings directly to sales, marketing and stakeholders.",
      id: "Menata data penjualan dan pasar dengan metodologi ACNielsen. Membangun laporan KPI bulanan tingkat nasional dan regional, menganalisis tren untuk menemukan peluang pertumbuhan, dan mempresentasikan temuan langsung ke tim sales, marketing, dan pemangku kepentingan.",
    },
    tags: ["ACNielsen", "Excel", "KPI Reporting", "Market Analysis"],
  },
];

export const education = [
  {
    period: "2021 — 2025",
    degree: { en: "M.Sc. Computer Science", id: "S2 Ilmu Komputer" },
    school: { en: "IPB University — GPA 3.8/4", id: "IPB University — IPK 3,8/4" },
    text: {
      en: "Thesis: spatio-temporal analysis of hotspots and PM2.5 in Riau, Jambi and South Sumatra — published in the JIKA journal. Coursework in data mining, statistical analysis and machine learning.",
      id: "Tesis: analisis spasial-temporal titik panas dan PM2.5 di Riau, Jambi, dan Sumatera Selatan — terbit di jurnal JIKA. Mata kuliah data mining, analisis statistik, dan machine learning.",
    },
  },
  {
    period: "2017 — 2021",
    degree: { en: "B.Sc. Computer Science", id: "S1 Ilmu Komputer" },
    school: { en: "IPB University — GPA 3.3/4", id: "IPB University — IPK 3,3/4" },
    text: {
      en: "Thesis: EpiRank model for COVID-19 spread analysis in Jabodetabek. Focus on database systems, programming and data mining.",
      id: "Skripsi: model EpiRank untuk analisis penyebaran COVID-19 di Jabodetabek. Fokus pada sistem basis data, pemrograman, dan data mining.",
    },
  },
];
