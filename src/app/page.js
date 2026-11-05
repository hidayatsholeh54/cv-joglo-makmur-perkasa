"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Award,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Building2,
  Truck,
  HeartHandshake,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/store/useAppStore";

export default function HomePage() {
  const partnerFarms = useAppStore((s) => s.partnerFarms);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* ================================================================= */}
        {/* 1. HERO SECTION (PAS SATU KOTAK PROPORSI HARMONIS DI LAPTOP)      */}
        {/* ================================================================= */}
        <section className="relative overflow-hidden py-6 lg:py-8 border-b border-slate-100 bg-gradient-to-b from-emerald-50/20 to-white">
          <div className="container-nusa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* SISI KIRI: Headline & Value Proposition */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] text-xs font-extrabold uppercase tracking-wider">
                  <span>CV JOGLO MAKMUR PERKASA • YOGYAKARTA</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 leading-[1.16]">
                  Pemberdayaan Ekosistem{" "}
                  <span className="text-[#15803d]">Peternakan Modern</span> &amp;
                  Inovasi Nutrisi.
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  Menghubungkan jaringan kandang plasma rakyat di Yogyakarta
                  dengan standarisasi hewan ternak, pengadaan Aqiqah, Qurban,
                  Tender Pemerintah, serta produk olahan Susu Kambing Bubuk Murni
                  berizin BPOM RI.
                </p>

                {/* Tombol Aksi */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/katalog"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm shadow-sm transition"
                  >
                    <span>Buka Katalog &amp; Belanja</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/pengadaan"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-emerald-50 text-slate-800 border border-slate-300 hover:border-[#15803d] font-bold text-sm transition"
                  >
                    <Building2 className="w-4 h-4 text-[#15803d]" />
                    <span>Layanan Pengadaan &amp; Proyek</span>
                  </Link>
                </div>

                {/* Indikator Trust Ringkas */}
                <div className="pt-3 grid grid-cols-3 gap-3 max-w-lg border-t border-slate-100 text-xs">
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-[#15803d]">
                      100% Sehat
                    </div>
                    <div className="text-slate-500 font-medium text-[11px]">
                      Sesuai Syariat &amp; Aktif
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {partnerFarms.length} Kandang
                    </div>
                    <div className="text-slate-500 font-medium text-[11px]">
                      Mitra Plasma DIY
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                      BPOM RI MD
                    </div>
                    <div className="text-slate-500 font-medium text-[11px]">
                      Susu Bubuk Murni
                    </div>
                  </div>
                </div>
              </div>

              {/* SISI KANAN: GRID 4 FOTO RAPI KOTAK SIMETRIS (SESUAI REQUEST USER) */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
                  {/* Foto 1: Kambing PE / Aqiqah (Kiri Atas) */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80"
                      alt="Bibit PE, Qurban & Aqiqah"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" />
                        <span>Bibit PE, Qurban &amp; Aqiqah</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 2: Sapi Pengadaan Tender (Kanan Atas) */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=700&q=80"
                      alt="Tender Pemerintah & Dinas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" />
                        <span>Tender Pemerintah</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 3: Susu Kambing Bubuk Murni (Kiri Bawah) */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="/images/DSCF7005_hero.jpg?v=2"
                      alt="Susu Kambing BPOM RI CV Joglo Makmur Perkasa"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" />
                        <span>Susu Kambing BPOM</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 4: Kambing di Kandang Mitra Bersih (Kanan Bawah) */}
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1588466585717-f8041aec7875?auto=format&fit=crop&w=700&q=80"
                      alt="Jaringan Kandang Partner DIY"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" />
                        <span>Jaringan Kandang Partner</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* TRUST BADGES CARD (RAPI DI DALAM CONTAINER, TIDAK BLEED FULL)     */}
        {/* ================================================================= */}
        <div className="container-nusa py-3 sm:py-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">BPOM RI MD &amp; Halal</div>
                  <div className="text-[11px] text-slate-500">Izin Edar Susu Bubuk Murni</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">SKKH Dokter Hewan</div>
                  <div className="text-[11px] text-slate-500">Pemeriksaan Bebas PMK &amp; Sehat</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Sesuai Syariat</div>
                  <div className="text-[11px] text-slate-500">Cukup Umur, Poel &amp; Bertanduk</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Gratis Antar DIY</div>
                  <div className="text-[11px] text-slate-500">Armada Hewan Bergaransi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. PILAR DIVISI UTAMA (KOTAK RAPI TERTATA)                         */}
        {/* ================================================================= */}
        <section className="py-14 lg:py-20 bg-white border-b border-slate-100">
          <div className="container-nusa">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                DIVISI &amp; SOLUSI
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Fokus Layanan CV Joglo Makmur Perkasa
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Dirancang terintegrasi dari hulu peternakan hingga produk hilir bernilai tambah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Kotak 1: Ternak Hidup */}
              <div className="nusa-card p-6 sm:p-7 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-5">
                    <PackageCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                    01 • RETAIL &amp; AQIQAH
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Ternak Hidup &amp; Qurban
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Kambing Jawa Randu, Bligon, PE Kaligesing, domba, dan sapi.
                    Mendukung stok kuantitas reguler serta ternak ber-Paspor QR
                    untuk kelas bibit unggul.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href="/katalog"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] hover:underline"
                  >
                    <span>Masuk ke Katalog Ternak</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Kotak 2: Susu Kambing BPOM */}
              <div className="nusa-card p-6 sm:p-7 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                    02 • PRODUK HILIR &amp; GIZI
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Susu Kambing Bubuk BPOM
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Pengolahan susu kambing murni kemasan pouch 250g.
                    Higienis, tidak berbau prengus, ramah lambung, dan resmi
                    memiliki izin edar BPOM RI MD.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href="/katalog?tab=susu"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] hover:underline"
                  >
                    <span>Lihat Produk Susu Kambing</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Kotak 3: Pengadaan Ternak Skala Besar */}
              <div className="nusa-card p-6 sm:p-7 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-5">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                    03 • B2B &amp; KEMITRAAN PROYEK
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Pengadaan Ternak Skala Besar
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Mitra penyedia ternak berbadan hukum resmi untuk bantuan
                    ketahanan pangan BUMDes, dinas pemerintah, CSR perusahaan,
                    maupun kemitraan suplai proyek.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href="/pengadaan"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] hover:underline"
                  >
                    <span>Lihat Layanan Pengadaan &amp; Proyek</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. PERTANYAAN UMUM (FAQ) DALAM KOTAK-KOTAK RAPI                    */}
        {/* ================================================================= */}
        <section id="faq" className="py-14 lg:py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="container-nusa">
            <div className="max-w-2xl mb-8 lg:mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                PERTANYAAN UMUM (FAQ)
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                Keterangan &amp; Pertanyaan Pembeli
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Jawaban praktis seputar jaminan syariat, produk susu BPOM, pengantaran, hingga titip rawat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Q1: Qurban & Aqiqah Syariat */}
              <div className="nusa-card p-6 bg-white space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                  <span>Apakah hewan qurban dan aqiqah dijamin sehat dan sah syariat?</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Seluruh ternak dijamin <strong>100% sehat, cukup umur (poel), bertanduk, dan bebas cacat fisik</strong> sesuai syarat sah syariat Islam. Kami memberikan garansi penggantian hewan sekelas secara gratis jika ditemukan hewan sakit sebelum serah terima.
                </p>
              </div>

              {/* Q2: Susu Kambing BPOM */}
              <div className="nusa-card p-6 bg-white space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                  <span>Apakah Susu Kambing Etawa Joglo Makmur berbau prengus?</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  <strong>Sama sekali tidak berbau prengus.</strong> Susu diolah melalui teknologi modern yang menghilangkan aroma khas kambing tanpa mengurangi nutrisi alami. Rasanya gurih murni, lembut di tenggorokan, dan resmi berizin edar BPOM RI MD.
                </p>
              </div>

              {/* Q3: Pengiriman DIY */}
              <div className="nusa-card p-6 bg-white space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                  <span>Apakah pengiriman hewan ternak ke area DIY benar-benar gratis?</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  <strong>Ya, 100% gratis ongkir</strong> untuk seluruh wilayah Daerah Istimewa Yogyakarta (Bantul, Sleman, Kota Jogja, Kulon Progo, Gunungkidul). Armada pengiriman kami dilengkapi sekat longgar dan pakan agar hewan tiba dalam kondisi bugar dan tidak stres.
                </p>
              </div>

              {/* Q4: Titip Rawat & Paspor QR */}
              <div className="nusa-card p-6 bg-white space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                  <span>Bagaimana cara titip rawat dan pantau hewan qurban saya?</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Pembeli hewan qurban mendapatkan fasilitas <strong>titip rawat gratis hingga Hari H Idul Adha</strong>. Perkembangan fisik, riwayat penimbangan bobot, serta catatan kesehatan hewan dapat dipantau secara transparan melalui menu <strong>Cek Paspor QR</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
