"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Handshake,
  HeartHandshake,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall,
  Store,
  TrendingUp,
  PackageCheck,
  Users,
  Award,
  Clock,
  ChevronRight,
  ChevronDown,
  X,
  HelpCircle,
  Milk,
  Droplets,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  const [modalType, setModalType] = useState(null); // 'RESELLER' | 'SUSU_CAIR' | 'JOGLO_HUB' | 'QURBAN_PRAKTIS'
  const [openFaq, setOpenFaq] = useState(0); // FAQ Accordion State (default open item 0)

  const partnerFaqs = [
    {
      q: "Apa perbedaan antara Kemitraan Susu Bubuk BPOM dan Susu Cair Murni?",
      a: "Susu Bubuk (Milkku 250g) berizin resmi BPOM RI MD & Halal MUI dengan daya simpan panjang tanpa kulkas, ditujukan untuk reseller, apotek, toko herbal, dan pengiriman ke seluruh Indonesia. Sedangkan Susu Cair adalah susu segar/frozen murni perahan harian langsung dari kandang Samigaluh dengan rantai dingin (cold chain), cocok untuk berbagai kebutuhan usaha olahan pangan/minuman maupun konsumsi rutin harian keluarga di area Yogyakarta & sekitarnya.",
    },
    {
      q: "Berapa modal awal reseller Susu Kambing Bubuk BPOM?",
      a: "Modal awal sangat terjangkau mulai 10 bungkus Milkku 250g langsung dengan harga modal mitra. Tanpa biaya registrasi, tanpa target bulanan, dan langsung disediakan bahan foto estetik serta video promosi siap posting.",
    },
    {
      q: "Bagaimana sistem suplai dan minimal order Susu Kambing Cair?",
      a: "Susu cair tersedia dalam kemasan 1 Liter beku (frozen steril) maupun segar dingin. Pemesanan fleksibel mulai satuan 1 Liter untuk konsumsi harian hingga paket 10 Liter untuk kebutuhan usaha dengan pengemasan rantai dingin steril.",
    },
    {
      q: "Bagaimana skema pendampingan dan jaminan panen Kemitraan Kandang?",
      a: "Mitra peternak disuplai bibit bakalan unggul dan pakan fermentasi kering (bebas beban ngarit). Tim mantri melakukan kontrol kesehatan rutin, dan seluruh hasil panen 100% dibeli tunai (offtaker) oleh CV.",
    },
    {
      q: "Bagaimana sistem pembelian hewan qurban dan fasilitas titip rawat?",
      a: "Pembelian dilakukan secara tunai (Full Cash) atau DP 50% untuk mengunci fisik dan nomor telinga (Ear Tag) hewan. Hewan dirawat dan diberi pakan berkualitas secara GRATIS di kandang Kulon Progo hingga hari H kirim.",
    },
    {
      q: "Bagaimana bukti penyaluran dan laporan ibadah Qurban Praktis?",
      a: "Shohibul qurban menerima dokumentasi video personal saat penyembelihan melafalkan nama Anda, video serah terima ke warga dhuafa pelosok Menoreh & Gunungkidul, serta sertifikat resmi.",
    },
  ];

  // Tutup modal otomatis saat tombol Escape ditekan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalType(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 pt-4 pb-20 sm:pt-6 sm:pb-24">
        <div className="container-nusa space-y-6 sm:space-y-10">
          {/* Header Partner Seragam Rata Kiri */}
          <div className="max-w-3xl space-y-2">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-tight">
              Program Kemitraan Terpadu
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Bergabung bersama ekosistem terpadu kami: kemitraan reseller susu bubuk BPOM, suplai susu murni cair perahan segar, pemberdayaan peternak binaan (plasma), hingga penyaluran daging qurban tepat sasaran.
            </p>
          </div>

          {/* 4 KARTU KEMITRAAN SIMETRIS DAN RESPONSIF */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {/* KARTU 1: RESELLER & AGEN SUSU BUBUK BPOM */}
            <div
              onClick={() => setModalType("RESELLER")}
              className="rounded-[28px] p-6 bg-white border-2 border-emerald-600/30 hover:border-[#15803d] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] group-hover:scale-105 transition-transform">
                  <Store className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#15803d] block">
                    01 • SUSU BUBUK BPOM
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#15803d] transition-colors leading-snug">
                    Susu Bubuk BPOM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Peluang usaha susu etawa bubuk Milkku 250g (BPOM MD &amp; Halal). Modal 10 pcs, margin tebal, materi promosi siap pakai.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="w-full flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#15803d] group-hover:text-[#14532d]">
                  <span>PELAJARI PAKET</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-[#15803d] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#15803d] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU 2: SUPLAI SUSU KAMBING CAIR MURNI */}
            <div
              onClick={() => setModalType("SUSU_CAIR")}
              className="rounded-[28px] p-6 bg-white border-2 border-blue-600/30 hover:border-blue-700 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-105 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block">
                    02 • SUSU SEGAR CAIR
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    Susu Cair Murni
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Susu kambing murni segar &amp; frozen steril perahan harian Samigaluh. Cocok untuk usaha minuman, olahan gizi, maupun konsumsi rutin.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="w-full flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-700 group-hover:text-blue-900">
                  <span>PELAJARI SUPLAI</span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU 3: KEMITRAAN KANDANG (BINAAN RAKYAT) */}
            <div
              onClick={() => setModalType("JOGLO_HUB")}
              className="rounded-[28px] p-6 bg-white border-2 border-slate-200 hover:border-[#15803d] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                  <Handshake className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block">
                    03 • BINAAN RAKYAT
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    Kemitraan Kandang
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pemberdayaan peternak binaan. Suplai bibit unggul, pakan fermentasi tanpa ngarit, serta kepastian 100% serap panen.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="w-full flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ea580c] group-hover:text-[#c2410c]">
                  <span>PELAJARI SKEMA</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#ea580c] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU 4: QURBAN PRAKTIS (DISTRIBUSI SOSIAL) */}
            <div
              onClick={() => setModalType("QURBAN_PRAKTIS")}
              className="rounded-[28px] p-6 bg-white border-2 border-slate-200 hover:border-[#15803d] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c] group-hover:scale-105 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#ea580c] block">
                    04 • DISTRIBUSI SOSIAL
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                    Qurban Praktis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Qurban praktis syar&apos;i disalurkan langsung ke wilayah minus daging Menoreh &amp; Gunungkidul lengkap video personal.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="w-full flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ea580c] group-hover:text-[#c2410c]">
                  <span>PELAJARI DETAIL</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#ea580c] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#ea580c] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEKSI 2: 3 FONDASI KEUNGGULAN BERMITRA BERSAMA CV JOGLO MAKMUR PERKASA */}
          <div className="pt-4 border-t border-slate-200/80">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#15803d] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Legalitas &amp; Mutu Terstandar</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Susu bubuk berizin resmi BPOM RI MD &amp; Halal MUI. Hewan ternak sehat terawat, bebas penyakit dan sesuai syariat.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Materi Promosi &amp; Grup Mitra</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Disediakan bahan konten foto estetik, video khasiat, dan teks siap copas di grup WhatsApp resmi.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Jaminan Serap Panen &amp; Amanah</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kepastian offtaker panen bagi peternak plasma serta transparansi transaksi jual beli syar&apos;i bebas riba.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEKSI 3: PERTANYAAN UMUM CALON MITRA (ACCORDION PROFESIONAL) */}
          <div className="space-y-8 pt-6 max-w-4xl mx-auto w-full">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d] block mb-1">
                TANYA JAWAB MITRA
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Pertanyaan yang Sering Diajukan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Keterangan praktis seputar syarat kemitraan susu, ternak binaan, qurban cash, hingga distribusi sosial.
              </p>
            </div>

            <div className="space-y-3">
              {partnerFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-white border-[#15803d]/40 shadow-sm"
                        : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                    >
                      <span className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isOpen
                            ? "bg-[#15803d] text-white rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SEKSI 4: BANNER KONSULTASI KEMITRAAN CEPAT */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden shadow-xl">
            <div className="space-y-1.5 z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                KONSULTASI LANGSUNG
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                Ingin Diskusi Lebih Lanjut Mengenai Kemitraan?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tim Humas &amp; Kemitraan CV Joglo Makmur Perkasa siap membantu menjelaskan skema kerjasama yang paling sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <a
              href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur%2C%20saya%20ingin%20konsultasi%20program%20kemitraan."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs sm:text-sm shadow-md transition z-10 shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Admin Kemitraan</span>
            </a>
          </div>
        </div>
      </main>

      {/* ==================================================================== */}
      {/* MODAL DETAIL 1: RESELLER & AGEN SUSU BPOM (SIMPLE & ELEGAN)          */}
      {/* ==================================================================== */}
      {modalType === "RESELLER" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden"
          onClick={() => setModalType(null)}
        >
          {/* Backdrop Transparan Gelap: Klik Bebas di Luar untuk Keluar */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity cursor-pointer"
            aria-hidden="true"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl sm:rounded-4xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
          >
            {/* Visual Hero Header Sederhana & Elegan */}
            <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src="/images/IMG-20240226-WA0002.jpg"
                alt="Susu Kambing Etawa BPOM Milkku 250g"
                className="w-full h-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-black/30" />

              {/* Badge Legalitas Mengambang */}
              <div className="absolute bottom-4 left-5 sm:left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#15803d] text-xs sm:text-[13px] font-extrabold shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>BPOM RI MD &amp; Halal MUI</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-xs sm:text-[13px] font-semibold">
                  Kemasan Pouch 250g
                </span>
              </div>

              {/* Tombol X Mengambang Mewah */}
              <button
                onClick={() => setModalType(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition shadow-md cursor-pointer backdrop-blur-xs z-10"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Isi Konten Bersih & Bernapas */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#15803d] block">
                  PELUANG USAHA RESELLER &amp; AGEN
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Kemitraan Reseller &amp; Agen Susu BPOM
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Peluang bisnis memasarkan <strong>Susu Kambing Etawa Bubuk Murni (Milkku 250g)</strong>. Permintaan tinggi untuk nutrisi lambung (GERD), persendian, dan gizi harian keluarga.
                </p>
              </div>

              {/* 4 Kartu Keuntungan Ringkas (Grid 2x2 Elegan) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Store className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Modal Mulai 10 Bungkus</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sangat terjangkau untuk pemula, ibu rumah tangga, dan jualan santai via status WA.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <TrendingUp className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Margin Untung Tebal</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ruang laba yang memuaskan untuk reseller eceran maupun agen partai kartonan.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Sparkles className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Materi Promosi Siap Copas</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Disediakan bahan foto estetik, video khasiat, dan teks promosi harian di grup mitra.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Award className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Dukungan Spanduk Toko</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dukungan banner fisik agen, brosur cetak, dan prioritas pasokan stok produk.
                  </p>
                </div>
              </div>

              {/* 3 Langkah Sederhana */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <span className="text-xs sm:text-sm font-bold text-emerald-950 block mb-1.5">
                  Cara Memulai Kemitraan:
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm text-emerald-900 font-semibold">
                  <span>1. Chat Admin WA</span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                  <span>2. Terima Pricelist</span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                  <span>3. Masuk Grup Mitra</span>
                </div>
              </div>

              {/* Tombol Aksi WhatsApp (Full Width) */}
              <div className="pt-2">
                <a
                  href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur%2C%20saya%20tertarik%20mendaftar%20Kemitraan%20Reseller%2FAgen%20Susu%20Kambing%20BPOM.%20Mohon%20info%20pricelist%20dan%20syaratnya."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Minta Pricelist &amp; Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL DETAIL: KEMITRAAN SUPLAI SUSU KAMBING CAIR MURNI               */}
      {/* ==================================================================== */}
      {modalType === "SUSU_CAIR" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden"
          onClick={() => setModalType(null)}
        >
          {/* Backdrop Transparan Gelap */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity cursor-pointer"
            aria-hidden="true"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl sm:rounded-4xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
          >
            {/* Visual Hero Header */}
            <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80"
                alt="Susu Kambing Cair Murni Segar Samigaluh"
                className="w-full h-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-black/30" />

              {/* Badge Mengambang */}
              <div className="absolute bottom-4 left-5 sm:left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-blue-800 text-xs sm:text-[13px] font-extrabold shadow-sm flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span>100% Segar &amp; Frozen Murni</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-xs sm:text-[13px] font-semibold">
                  Perahan Harian Samigaluh
                </span>
              </div>

              {/* Tombol X Mengambang */}
              <button
                onClick={() => setModalType(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition shadow-md cursor-pointer backdrop-blur-xs z-10"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Isi Konten */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-700 block">
                  SUPLAI RUTIN &amp; KEBUTUHAN UMUM
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Kemitraan Susu Kambing Cair Murni
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Penyediaan susu kambing etawa cair segar dan beku (frozen steril) perahan harian dari sentra Samigaluh, Kulon Progo. Gurih alami tanpa bau prengus, kaya enzim aktif, siap suplai rutin terjadwal.
                </p>
              </div>

              {/* 4 Sasaran Kemitraan (Grid 2x2 Elegan) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Store className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span>Usaha Kuliner &amp; Minuman</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bahan baku minuman segar, kopi olahan, dan aneka racikan kuliner yang creamy gurih alami.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Droplets className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span>Mitra Usaha &amp; Gerai Pangan</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pasokan rutin harian/mingguan untuk aneka kedai minuman, toko herbal, dan gerai pangan sehat.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Sparkles className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span>Industri Olahan &amp; Kosmetik</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bahan alami fermentasi masker kefir, sabun herbal etawa murni, dan formulasi perawatan kulit.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                    <span>Konsumsi &amp; Terapi Keluarga</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Paket literan rutin untuk menjaga kebugaran tubuh, terapi lambung, anak-anak, dan lansia.
                  </p>
                </div>
              </div>

              {/* Jaminan Kualitas Rantai Dingin */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-xs sm:text-sm font-bold text-blue-950 block mb-1.5">
                  Standar Mutu &amp; Pengiriman Cold-Chain:
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm text-blue-900 font-semibold">
                  <span>1. Perahan Higienis</span>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span>2. Kemasan Steril &amp; Ice Pack</span>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span>3. Antar Suhu Dingin</span>
                </div>
              </div>

              {/* Tombol Aksi WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur%2C%20saya%20tertarik%20Kemitraan%20Suplai%20Susu%20Kambing%20Cair%20Murni.%20Mohon%20info%20pricelist%20literan%20dan%20minimal%20ordernya."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Konsultasi Suplai Susu Cair via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL DETAIL 2: JOGLO HUB (KEMITRAAN BINAAN PETERNAK)                */}
      {/* ==================================================================== */}
      {modalType === "JOGLO_HUB" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden"
          onClick={() => setModalType(null)}
        >
          {/* Backdrop Transparan Gelap: Klik Bebas di Luar untuk Keluar */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity cursor-pointer"
            aria-hidden="true"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl sm:rounded-4xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
          >
            {/* Visual Hero Header */}
            <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1588466585717-f8041aec7875?auto=format&fit=crop&w=800&q=80"
                alt="Kandang Mitra Peternak Kulon Progo"
                className="w-full h-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-black/30" />

              <div className="absolute bottom-4 left-5 sm:left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-amber-800 text-xs sm:text-[13px] font-extrabold shadow-sm flex items-center gap-1.5">
                  <Handshake className="w-4 h-4" />
                  <span>Kemitraan Plasma Rakyat</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-xs sm:text-[13px] font-semibold">
                  Kulon Progo &amp; DIY
                </span>
              </div>

              <button
                onClick={() => setModalType(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition shadow-md cursor-pointer backdrop-blur-xs z-10"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Isi Konten */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-700 block">
                  PROGRAM PEMBERDAYAAN PETERNAK
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Kemitraan Kandang Rakyat
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Program kemitraan ternak rakyat terintegrasi di Samigaluh, Kulon Progo, Sleman, Bantul, dan sekitarnya dengan jaminan pasokan dan pasar.
                </p>
              </div>

              {/* 4 Kartu Fitur */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Pasokan Bibit Sehat</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Suplai bakalan kambing Jawa Randu, Bligon &amp; PE yang telah lolos verifikasi dokter hewan.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Pakan Fermentasi Kering</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bebas beban ngarit harian, nutrisi konsentrat terstandar agar kenaikan bobot (ADG) stabil.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Jaminan Serap Panen 100%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hasil panen ternak langsung dibeli tunai (offtaker) untuk kebutuhan aqiqah dan qurban CV.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Pendampingan Medis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pemeriksaan kesehatan, vitamin, dan penanganan berkala oleh mantri kandang Joglo Makmur.
                  </p>
                </div>
              </div>

              {/* 3 Langkah Sederhana */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                <span className="text-xs sm:text-sm font-bold text-amber-950 block mb-1.5">
                  Alur Kerjasama:
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm text-amber-900 font-semibold">
                  <span>1. Survei Kandang</span>
                  <ChevronRight className="w-4 h-4 text-amber-500" />
                  <span>2. Suplai Bibit &amp; Pakan</span>
                  <ChevronRight className="w-4 h-4 text-amber-500" />
                  <span>3. Panen Dibeli Tunai</span>
                </div>
              </div>

              {/* Tombol Aksi WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur%2C%20saya%20tertarik%20bergabung%20Kemitraan%20Joglo%20Hub"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Daftar Kemitraan via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* ==================================================================== */}
      {/* MODAL DETAIL 4: QURBAN PRAKTIS (PELOSOK DIY & JATENG)                */}
      {/* ==================================================================== */}
      {modalType === "QURBAN_PRAKTIS" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden"
          onClick={() => setModalType(null)}
        >
          {/* Backdrop Transparan Gelap: Klik Bebas di Luar untuk Keluar */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity cursor-pointer"
            aria-hidden="true"
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl sm:rounded-4xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
          >
            {/* Visual Hero Header */}
            <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
                alt="Penyaluran Qurban Pelosok"
                className="w-full h-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-black/30" />

              <div className="absolute bottom-4 left-5 sm:left-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-[#ea580c] text-xs sm:text-[13px] font-extrabold shadow-sm flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Penyaluran Tepat Sasaran</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-xs sm:text-[13px] font-semibold">
                  Menoreh &amp; Gunungkidul
                </span>
              </div>

              <button
                onClick={() => setModalType(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition shadow-md cursor-pointer backdrop-blur-xs z-10"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Isi Konten */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ea580c] block">
                  DISTRIBUSI SOSIAL BERMANFAAT
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Qurban Praktis Pelosok DIY &amp; Jateng
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Ibadah qurban Anda disembelih secara syar&apos;i dan didistribusikan langsung ke warga dhuafa di wilayah pelosok yang jarang menikmati daging qurban.
                </p>
              </div>

              {/* 4 Poin Nilai Ringkas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <MapPin className="w-4.5 h-4.5 text-[#ea580c] shrink-0" />
                    <span>Fokus Daerah Dhuafa</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Perbukitan Menoreh Kulon Progo, kawasan karst Gunungkidul, &amp; pelosok Jateng sekitarnya.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Laporan Video Syar&apos;i</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dokumentasi video penyembelihan melafalkan nama pequrban &amp; serah terima ke warga.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <Award className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Sertifikat Digital QR</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sertifikat resmi tanda terima ibadah qurban ber-QR Code atas nama shohibul qurban.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] shrink-0" />
                    <span>Bebas Repot Operasional</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Seluruh biaya jagal, pakan, besek higienis, dan pengantaran sudah termasuk dalam paket.
                  </p>
                </div>
              </div>

              {/* 3 Langkah Sederhana */}
              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                <span className="text-xs sm:text-sm font-bold text-orange-950 block mb-1.5">
                  Alur Pelaksanaan:
                </span>
                <div className="flex items-center justify-between text-xs sm:text-sm text-orange-900 font-semibold">
                  <span>1. Pesan via WA</span>
                  <ChevronRight className="w-4 h-4 text-orange-400" />
                  <span>2. Penyembelihan Hari H</span>
                  <ChevronRight className="w-4 h-4 text-orange-400" />
                  <span>3. Terima Dokumentasi</span>
                </div>
              </div>

              {/* Tombol Aksi WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/6285162581872?text=Halo%20Admin%20Joglo%20Makmur%2C%20saya%20ingin%20bergabung%20program%20Qurban%20Praktis%20Pelosok%20DIY%20Jateng"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <HeartHandshake className="w-5 h-5" />
                  <span>Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
