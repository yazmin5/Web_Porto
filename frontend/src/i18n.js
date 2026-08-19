import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export const pick = (v, lang) =>
  v && typeof v === "object" && ("en" in v || "id" in v) ? v[lang] ?? v.en : v;

export const ui = {
  en: {
    navAbout: "About", navSkills: "Skills", navWork: "Work", navPlayground: "Playground",
    navResearch: "Research", navExperience: "Experience", navContact: "Contact",
    navResume: "Resume", navResumeMobile: "Download resume",
    heroLines: [<>Turning raw</>, <><em className="font-light">data</em> into</>, <>decisions<span className="text-accent">.</span></>],
    ctaWork: "View case studies", ctaCv: "Download CV", ctaContact: "Get in touch",
    scrollHint: "Scroll to explore", forecastLabel: "Forecast — Revenue index",
    aboutLabel: "About",
    aboutHead: [<>Signal, <em className="font-light">not noise</em>.</>],
    aboutLede: "a data analyst who treats every dashboard like a product and every metric like a promise.",
    changePhoto: "Change photo", uploading: "Uploading…",
    photoUpdated: "Profile photo updated", photoFailed: "Upload failed — try a smaller image",
    skillsLabel: "Capabilities",
    skillsHead: [<>The toolbox,</>, <><em className="font-light">quantified</em>.</>],
    profLabel: "Core proficiency — self-assessed / 100",
    domainLabel: "Skill domains — coverage map",
    ordersLabel: "Real data — orders per month, 2026",
    driversLabel: "Daily drivers",
    mastersLabel: "Master of Computer Science",
    gpaText: "GPA at IPB University — thesis on spatio-temporal hotspot & PM2.5 analysis with Scikit-learn.",
    profStatement: "Proficient in data analysis & visualization",
    profSub: "From raw tables to clear, decision-ready stories.",
    profTag: "Playground below",
    workLabel: "Selected work",
    workHead: [<>Case studies</>, <>with <em className="font-light">receipts</em>.</>],
    viewCase: "View case study", downloadWorkbook: "Download workbook", openLive: "Open live dashboard",
    problemLabel: "The problem", approachLabel: "The approach", outcomeLabel: "The outcome",
    playgroundLabel: "Live dashboards",
    playgroundHead: [<>Don't take my word —</>, <><em className="font-light">play with the data</em>.</>],
    filterRegion: "Region", filterChannel: "Channel", filterYear: "Year", allLabel: "All",
    kpiRevenue: "Revenue", kpiOrders: "Orders", kpiUnits: "Units sold", kpiAov: "Avg order value",
    chartMonthly: "Revenue by month — 2026", chartCategory: "Revenue by category",
    chartChannelShare: "Channel share of revenue", chartRegionShare: "Region share of revenue",
    kpiValue: "Portfolio value", kpiSavings: "Savings tracked", kpiProjects: "Projects", kpiProfit: "Profitable",
    chartTargetActual: "Target vs actual — $K per year", chartDept: "Savings by department",
    chartStatus: "Project status mix", actualLabel: "Actual", targetLabel: "Target",
    sourceLabel: "Source", tableauSource: "Maven Bank Analysis — published on Tableau Public",
    openTableau: "Open on Tableau Public",
    researchLabel: "Research",
    researchHead: [<>Published</>, <><em className="font-light">research</em>.</>],
    readPaper: "Read the paper", peerReviewed: "Peer-reviewed journal article",
    expLabel: "Experience",
    expHead: [<>The road</>, <><em className="font-light">so far</em>.</>],
    educationLabel: "Education",
    contactLabel: "Contact",
    contactHead: [<>Let's find</>, <>your <em className="font-light">signal</em>.</>],
    formName: "Name *", formCompany: "Company", formMessage: "Message *",
    phName: "Jane Smith", phCompany: "Acme Inc.", phMessage: "Tell me about your data problem...",
    sendBtn: "Send message", sendingBtn: "Sending",
    toastOk: "Message sent — I'll get back to you within 24 hours.",
    toastErr: "Something went wrong — please email me directly instead.",
    footerTag: "Precision at scale", backTop: "Back to top",
  },
  id: {
    navAbout: "Tentang", navSkills: "Keahlian", navWork: "Karya", navPlayground: "Playground",
    navResearch: "Riset", navExperience: "Pengalaman", navContact: "Kontak",
    navResume: "Resume", navResumeMobile: "Unduh resume",
    heroLines: [<>Mengubah <em className="font-light">data</em></>, <>mentah menjadi</>, <>keputusan<span className="text-accent">.</span></>],
    ctaWork: "Lihat studi kasus", ctaCv: "Unduh CV", ctaContact: "Hubungi saya",
    scrollHint: "Gulir untuk menjelajah", forecastLabel: "Prakiraan — Indeks pendapatan",
    aboutLabel: "Tentang",
    aboutHead: [<>Sinyal, <em className="font-light">bukan derau</em>.</>],
    aboutLede: "data analyst yang memperlakukan setiap dashboard seperti produk dan setiap metrik seperti janji.",
    changePhoto: "Ganti foto", uploading: "Mengunggah…",
    photoUpdated: "Foto profil diperbarui", photoFailed: "Unggahan gagal — coba gambar yang lebih kecil",
    skillsLabel: "Keahlian",
    skillsHead: [<>Keahlian,</>, <><em className="font-light">terukur</em>.</>],
    profLabel: "Kemahiran inti — penilaian mandiri / 100",
    domainLabel: "Domain keahlian — peta cakupan",
    ordersLabel: "Data nyata — pesanan per bulan, 2026",
    driversLabel: "Andalan harian",
    mastersLabel: "Magister Ilmu Komputer",
    gpaText: "IPK di IPB University — tesis analisis spasial-temporal titik panas & PM2.5 dengan Scikit-learn.",
    profStatement: "Mahir dalam analisis & visualisasi data",
    profSub: "Dari tabel mentah menjadi cerita yang jelas dan siap diputuskan.",
    profTag: "Playground di bawah",
    workLabel: "Karya pilihan",
    workHead: [<>Studi kasus</>, <>dengan <em className="font-light">bukti</em>.</>],
    viewCase: "Lihat studi kasus", downloadWorkbook: "Unduh workbook", openLive: "Buka dashboard live",
    problemLabel: "Masalah", approachLabel: "Pendekatan", outcomeLabel: "Hasil",
    playgroundLabel: "Dashboard live",
    playgroundHead: [<>Jangan percaya begitu saja —</>, <><em className="font-light">mainkan datanya</em>.</>],
    filterRegion: "Wilayah", filterChannel: "Kanal", filterYear: "Tahun", allLabel: "Semua",
    kpiRevenue: "Pendapatan", kpiOrders: "Pesanan", kpiUnits: "Unit terjual", kpiAov: "Rata-rata nilai pesanan",
    chartMonthly: "Pendapatan per bulan — 2026", chartCategory: "Pendapatan per kategori",
    chartChannelShare: "Pangsa kanal pendapatan", chartRegionShare: "Pangsa wilayah pendapatan",
    kpiValue: "Nilai portofolio", kpiSavings: "Penghematan terlacak", kpiProjects: "Proyek", kpiProfit: "Menguntungkan",
    chartTargetActual: "Target vs realisasi — $K per tahun", chartDept: "Penghematan per departemen",
    chartStatus: "Komposisi status proyek", actualLabel: "Aktual", targetLabel: "Target",
    sourceLabel: "Sumber", tableauSource: "Maven Bank Analysis — terbit di Tableau Public",
    openTableau: "Buka di Tableau Public",
    researchLabel: "Riset",
    researchHead: [<>Riset</>, <><em className="font-light">terpublikasi</em>.</>],
    readPaper: "Baca artikel", peerReviewed: "Artikel jurnal ter-review",
    expLabel: "Pengalaman",
    expHead: [<>Perjalanan</>, <><em className="font-light">sejauh ini</em>.</>],
    educationLabel: "Pendidikan",
    contactLabel: "Kontak",
    contactHead: [<>Mari temukan</>, <><em className="font-light">insight</em> Anda.</>],
    formName: "Nama *", formCompany: "Perusahaan", formMessage: "Pesan *",
    phName: "Nama Anda", phCompany: "PT Contoh", phMessage: "Ceritakan masalah data Anda…",
    sendBtn: "Kirim pesan", sendingBtn: "Mengirim",
    toastOk: "Pesan terkirim — saya akan membalas dalam 24 jam.",
    toastErr: "Ada kendala — silakan email saya langsung.",
    footerTag: "Presisi berskala", backTop: "Kembali ke atas",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => localStorage.getItem("lang") || "en");
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };
  const t = (k) => ui[lang]?.[k] ?? ui.en[k] ?? k;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
