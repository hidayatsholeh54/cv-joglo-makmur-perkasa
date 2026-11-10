"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Award,
  Sparkles,
  ChevronRight,
  ChevronDown,
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
  const [openFaq, setOpenFaq] = useState(0);

  const homeFaqs = [
    {
      q: "Apakah hewan qurban dan aqiqah dijamin sehat dan sah syariat?",
      a: "Seluruh ternak dijamin 100% sehat, cukup umur (poel), bertanduk, dan bebas cacat fisik sesuai syarat sah syariat Islam. Kami memberikan garansi penggantian hewan sekelas secara gratis jika ditemukan hewan sakit sebelum serah terima.",
    },
    {
      q: "Apakah Susu Kambing Etawa Joglo Makmur berbau prengus?",
      a: "Sama sekali tidak berbau prengus. Susu diolah melalui teknologi modern yang menghilangkan aroma khas kambing tanpa mengurangi nutrisi alami. Rasanya gurih murni, lembut di tenggorokan, dan resmi berizin edar BPOM RI MD & Halal MUI.",
    },
    {
      q: "Apakah pengiriman hewan ternak ke area DIY benar-benar gratis?",
      a: "Ya, 100% gratis ongkir untuk seluruh wilayah Daerah Istimewa Yogyakarta (Bantul, Sleman, Kota Jogja, Kulon Progo, Gunungkidul). Armada pengiriman kami dilengkapi sekat longgar dan pakan agar hewan tiba dalam kondisi bugar dan tidak stres.",
    },
    {
      q: "Bagaimana proses pengantaran hewan qurban ke alamat pemesan?",
      a: "Hewan qurban diantarkan langsung ke alamat rumah, mushola, atau masjid tujuan Anda menggunakan armada khusus berstandar kenyamanan ternak. Bebas biaya kirim se-DIY dengan garansi hewan tiba dalam kondisi sehat, bugar, dan sah syariat.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* ================================================================= */}
        {/* 1. HERO SECTION (BERSIH, ELEGAN & MENARIK DI HP DAN LAPTOP)       */}
        {/* ================================================================= */}
        <section className="relative overflow-hidden py-6 lg:py-8 border-b border-slate-100 bg-gradient-to-b from-emerald-50/20 to-white">
          <div className="container-nusa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* SISI KIRI: Headline & Value Proposition */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] text-xs font-extrabold uppercase tracking-wider">
                  <span>• SENTRA PETERNAKAN TERPADU YOGYAKARTA</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-slate-900 leading-[1.18]">
                  Sentra Peternakan Terpadu &amp;{" "}
                  <span className="text-[#15803d]">Olahan Susu Kambing Murni</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  Penyedia hewan Qurban &amp; Aqiqah syar&apos;i, bibit ternak unggul, serta susu kambing etawa (bubuk BPOM &amp; susu segar) langsung dari sentra Kulon Progo, Yogyakarta.
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

                {/* Indikator Trust Ringkas Ala NusaQu */}
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" /> 100% Syar&apos;i &amp; Sehat Terawat
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" /> Susu Murni BPOM RI MD
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5]" /> Gratis Antar Se-DIY
                  </span>
                </div>
              </div>

              {/* SISI KANAN: GRID 4 FOTO RAPI, SIMETRIS & MEMIKAT DI HP MAUPUN LAPTOP */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
                  {/* Foto 1: Kambing PE / Aqiqah (Kiri Atas) */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80"
                      alt="Hewan Qurban & Aqiqah"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5] shrink-0" />
                        <span className="truncate">Qurban &amp; Aqiqah</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 2: Susu Kambing Murni BPOM Milkku 250g (Kanan Atas) */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-50 shadow-sm border border-slate-100 group">
                    <img
                      src="/images/DSCF7005_hero.jpg?v=2"
                      alt="Susu Kambing Bubuk Murni BPOM RI"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5] shrink-0" />
                        <span className="truncate">Susu Kambing BPOM</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 3: Sapi & Domba Pengadaan Proyek (Kiri Bawah) */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=700&q=80"
                      alt="Pengadaan BUMDes & Instansi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5] shrink-0" />
                        <span className="truncate">Pengadaan BUMDes</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 4: Sentra Kandang Kulon Progo (Kanan Bawah) */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1588466585717-f8041aec7875?auto=format&fit=crop&w=700&q=80"
                      alt="Sentra Kandang Terpadu Kulon Progo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3.5 h-3.5 text-[#15803d] stroke-[2.5] shrink-0" />
                        <span className="truncate">Sentra Kandang DIY</span>
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
                  <div className="text-xs font-bold text-slate-900">Pemeriksaan Dokter Hewan</div>
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
                DIVISI &amp; LAYANAN
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                Fokus Layanan Utama
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Dirancang terintegrasi dari hulu sentra kandang hingga produk hilir bernilai gizi tinggi.
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
                    Ternak Qurban &amp; Aqiqah
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Kambing, domba, &amp; sapi 100% syar&apos;i dan sehat terawat. Garansi sehat dan gratis antar se-DIY.
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

              {/* Kotak 2: Program Susu Kambing Murni BPOM */}
              <div className="nusa-card p-6 sm:p-7 bg-white flex flex-col justify-between border-2 border-emerald-600/30">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                    02 • PRODUK HILIR &amp; GIZI
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Susu Bubuk BPOM &amp; Cair Segar
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Susu bubuk Milkku 250g (BPOM MD &amp; Halal) dan susu murni cair segar/frozen perahan harian Samigaluh. Gurih alami tanpa bau prengus.
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
                    Pengadaan Ternak &amp; BUMDes
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Penyedia bibit ternak resmi skala besar untuk program ketahanan pangan BUMDes, dinas pemerintah, dan CSR perusahaan.
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
        {/* 3. PERTANYAAN UMUM (FAQ) ACCORDION ELEGAN & PROFESIONAL           */}
        {/* ================================================================= */}
        <section id="faq" className="py-14 lg:py-20 bg-slate-50/60 border-b border-slate-100">
          <div className="container-nusa">
            <div className="max-w-2xl mb-8 sm:mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                TANYA JAWAB
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Jawaban praktis seputar jaminan syariat, susu BPOM, garansi sehat, hingga pengantaran se-DIY.
              </p>
            </div>

            <div className="space-y-3">
              {homeFaqs.map((faq, idx) => {
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
