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
  Eye,
  Store,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

export default function HomePage() {
  const partnerFarms = useAppStore((s) => s.partnerFarms);
  const livestockItems = useAppStore((s) => s.livestockItems);
  const products = useAppStore((s) => s.products);

  const [openFaq, setOpenFaq] = useState(1); // FAQ Accordion State (default buka 1 agar ringkas di HP)

  // Ambil sample produk untuk etalase langsung di beranda
  const sampleGoat = livestockItems[0] || {
    title: "Kambing Qurban & Aqiqah Jawa Randu Standar",
    sell_price_rp: 2200000,
    photo_main_url: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80",
    weight_range_label: "24–27 Kg",
  };

  const sampleMilk = products[1] || {
    name: "Susu Kambing Etawa Murni (Milkku 250g)",
    sell_price_rp: 50000,
    image_url: "/images/DSCF7005_hero.jpg?v=2",
    bpom_number: "BPOM RI MD 803112001xxx",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* ================================================================= */}
        {/* 1. HERO SECTION (PUNCHY, SIMPLE, & VISUAL MENARIK DI HP)          */}
        {/* ================================================================= */}
        <section className="relative overflow-hidden pt-5 pb-8 sm:py-10 border-b border-slate-100 bg-gradient-to-b from-emerald-50/25 to-white">
          <div className="container-nusa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* SISI KIRI: Headline To-The-Point & CTA */}
              <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] text-xs font-extrabold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Sentra Peternakan Samigaluh, Kulon Progo
                </span>

                <h1 className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-[1.2]">
                  Pusat Hewan Qurban, Aqiqah &amp;{" "}
                  <span className="text-[#15803d]">Susu Kambing BPOM</span>
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                  Penyedia hewan ternak sehat bersertifikat SKKH dokter hewan, gratis ongkir se-DIY, serta produk olahan Susu Kambing Bubuk Murni berizin resmi BPOM RI.
                </p>

                {/* Tombol Aksi Cepat */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <Link
                    href="/katalog"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs sm:text-sm shadow-sm transition"
                  >
                    <span>Buka Katalog &amp; Belanja</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/pengadaan"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm transition"
                  >
                    <Building2 className="w-4 h-4 text-[#15803d]" />
                    <span>Layanan Pengadaan B2G</span>
                  </Link>
                </div>

                {/* 3 Indikator Ringkas */}
                <div className="pt-2 grid grid-cols-3 gap-2 max-w-md text-slate-800 text-xs border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-[#15803d] text-xs sm:text-sm">100% Syar&apos;i</div>
                    <div className="text-[10px] text-slate-500">Cukup Umur &amp; Poel</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">Gratis Antar</div>
                    <div className="text-[10px] text-slate-500">Seluruh Area DIY</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">BPOM MD</div>
                    <div className="text-[10px] text-slate-500">Susu Pouch 250g</div>
                  </div>
                </div>
              </div>

              {/* SISI KANAN: GRID 4 FOTO SIMETRIS & BERSIH */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 max-w-lg mx-auto lg:max-w-none">
                  {/* Foto 1: Kambing PE / Aqiqah */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-xs border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80"
                      alt="Kambing Qurban & Aqiqah"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3 h-3 text-[#15803d] stroke-[2.5]" />
                        <span>Qurban &amp; Aqiqah Cash</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 2: Sapi Pengadaan */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-xs border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=700&q=80"
                      alt="Tender Pemerintah & Dinas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3 h-3 text-[#15803d] stroke-[2.5]" />
                        <span>Pengadaan BUMDes</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 3: Susu Kambing Bubuk */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-xs border border-slate-100 group">
                    <img
                      src="/images/DSCF7005_hero.jpg?v=2"
                      alt="Susu Kambing BPOM RI"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3 h-3 text-[#15803d] stroke-[2.5]" />
                        <span>Susu BPOM 250g</span>
                      </span>
                    </div>
                  </div>

                  {/* Foto 4: Kandang Mitra Samigaluh */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-xs border border-slate-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1588466585717-f8041aec7875?auto=format&fit=crop&w=700&q=80"
                      alt="Kandang Samigaluh Kulon Progo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 text-[10px] sm:text-xs font-bold shadow-xs">
                        <Check className="w-3 h-3 text-[#15803d] stroke-[2.5]" />
                        <span>Sentra Kulon Progo</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. ETALASE PRODUK UNGGULAN LANGSUNG BERHARGA (VISUAL & MENARIK)   */}
        {/* ================================================================= */}
        <section className="py-8 sm:py-12 bg-slate-50/60 border-b border-slate-100">
          <div className="container-nusa space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                  ETALASE LANGSUNG
                </span>
                <h2 className="font-heading text-xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                  Pilihan Produk Siap Kirim
                </h2>
              </div>
              <Link
                href="/katalog"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#15803d] hover:text-[#14532d]"
              >
                <span>Lihat Semua di Katalog</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 KARTU PRODUK RETAIL BERSIH */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1: Kambing Qurban & Aqiqah Cash */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={sampleGoat.photo_main_url}
                      alt={sampleGoat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 text-[#15803d] text-[10px] font-black shadow-xs">
                      GRATIS RAWAT &amp; ONGKIR DIY
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block">Kambing / Domba Siap Kirim</span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#15803d] transition-colors">
                      {sampleGoat.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Bobot {sampleGoat.weight_range_label} • Syarat Sah Syar&apos;i
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Harga Tunai:</span>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900">
                      {formatRupiah(sampleGoat.sell_price_rp)}
                    </div>
                  </div>
                  <Link
                    href="/katalog"
                    className="px-4 py-2 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white text-xs font-bold shadow-xs transition"
                  >
                    Pesan Cash
                  </Link>
                </div>
              </div>

              {/* Card 2: Susu Kambing BPOM Milkku 250g */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                    <img
                      src={sampleMilk.image_url}
                      alt={sampleMilk.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#15803d] text-white text-[10px] font-black shadow-xs">
                      BPOM RI MD &amp; HALAL
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block">Susu Bubuk Murni</span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#15803d] transition-colors">
                      {sampleMilk.name}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Kemasan Pouch 250g • Nutrisi Lambung &amp; Sendi
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Harga Eceran:</span>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900">
                      {formatRupiah(sampleMilk.sell_price_rp)}
                    </div>
                  </div>
                  <Link
                    href="/katalog?tab=susu"
                    className="px-4 py-2 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white text-xs font-bold shadow-xs transition"
                  >
                    Beli Pouch
                  </Link>
                </div>
              </div>

              {/* Card 3: Pengadaan Ternak Proyek & BUMDes */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80"
                      alt="Pengadaan Ternak Sapi & Kambing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black shadow-xs">
                      LEGALITAS CV &amp; REKANAN
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block">Tender &amp; B2G</span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#15803d] transition-colors">
                      Pengadaan Bibit &amp; Ternak Skala Besar
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Kambing PE, Jawa Randu, Domba &amp; Sapi Potong
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Skema:</span>
                    <div className="text-sm font-bold text-emerald-800">
                      Kontrak &amp; SPK Resmi
                    </div>
                  </div>
                  <Link
                    href="/pengadaan"
                    className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition"
                  >
                    Info Proyek
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. LAYANAN UTAMA (RINGKAS BERGAYA APP, TANPA TEKS BERLEBIHAN)     */}
        {/* ================================================================= */}
        <section className="py-8 sm:py-14 bg-white border-b border-slate-100">
          <div className="container-nusa space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                LAYANAN UTAMA
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                Standar Kualitas CV Joglo Makmur Perkasa
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Layanan 1: Qurban & Aqiqah */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-[#15803d] flex items-center justify-center">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">Qurban &amp; Aqiqah Cash</h3>
                    <p className="text-xs text-slate-500 mt-1">Pembelian langsung tunai / DP booking amanah.</p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>100% Cukup Umur (Poel), Bertanduk &amp; Sehat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Gratis Titip Rawat &amp; Pakan sampai Hari H</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Gratis Ongkir se-Daerah Istimewa Yogyakarta</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/katalog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#15803d] hover:text-[#14532d] pt-2"
                >
                  <span>Pilih Kambing di Katalog</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Layanan 2: Susu Kambing BPOM */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-[#15803d] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">Susu Bubuk Murni BPOM</h3>
                    <p className="text-xs text-slate-500 mt-1">Olahan susu etawa kualitas higienis tanpa prengus.</p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Kemasan Praktis Pouch Segel 250g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Rasa Gurih Lembut, Kaya Kalsium &amp; Kalium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Peluang Usaha Reseller Modal Ringan Mulai 10 Pack</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#15803d] hover:text-[#14532d] pt-2"
                >
                  <span>Info Kemitraan Reseller</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Layanan 3: Pengadaan Skala Besar */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 text-[#15803d] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">Pengadaan Proyek &amp; B2G</h3>
                    <p className="text-xs text-slate-500 mt-1">Penyedia resmi bibit ternak BUMDes dan dinas.</p>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Badan Usaha CV Resmi Terdaftar SIKaP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Sertifikat Karantina &amp; SKKH Dokter Hewan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Armada Truk Ekspedisi Bersekat Antarpulau</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/pengadaan"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#15803d] hover:text-[#14532d] pt-2"
                >
                  <span>Pelajari Dokumen Pengadaan</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. PERTANYAAN UMUM (FAQ) - ACCORDION LIPAT RINGKAS DI HP          */}
        {/* ================================================================= */}
        <section id="faq" className="py-8 sm:py-14 bg-slate-50/60 border-b border-slate-100">
          <div className="container-nusa space-y-5">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                PERTANYAAN UMUM (FAQ)
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Keterangan Pembeli
              </h2>
            </div>

            <div className="space-y-2.5 max-w-3xl">
              {/* Q1 */}
              <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-[#15803d] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                    Apakah hewan qurban dan aqiqah dijamin sehat dan sah syariat?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${openFaq === 1 ? "rotate-180 text-[#15803d]" : ""}`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    Seluruh ternak dijamin <strong>100% sehat, cukup umur (poel), bertanduk, dan bebas cacat fisik</strong> sesuai syarat sah syariat Islam dengan sertifikat SKKH dokter hewan resmi. Gratis rawat dan pakan sampai serah terima.
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-[#15803d] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                    Bagaimana sistem pembelian Qurban &amp; Aqiqah?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${openFaq === 2 ? "rotate-180 text-[#15803d]" : ""}`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    Pembelian dilakukan secara <strong>Full Cash atau Booking DP 50%</strong> untuk mengunci hewan pilihan Anda di katalog. Pelunasan dapat diselesaikan saat hewan siap dikirimkan menjelang Hari H.
                  </div>
                )}
              </div>

              {/* Q3 */}
              <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-[#15803d] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                    Apakah Susu Kambing Etawa Joglo Makmur berbau prengus?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${openFaq === 3 ? "rotate-180 text-[#15803d]" : ""}`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <strong>Sama sekali tidak berbau prengus.</strong> Susu diolah higienis dengan teknologi modern, rasa gurih lembut, tidak bikin enek, dan resmi mengantongi izin edar BPOM RI MD &amp; Halal MUI.
                  </div>
                )}
              </div>

              {/* Q4 */}
              <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-[#15803d] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
                    Apakah pengiriman ke seluruh DIY benar-benar gratis?
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${openFaq === 4 ? "rotate-180 text-[#15803d]" : ""}`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <strong>Ya, 100% gratis ongkos kirim</strong> untuk wilayah Kulon Progo, Bantul, Sleman, Kota Jogja, hingga Gunungkidul menggunakan armada pengiriman bergaransi hidup &amp; bugar sampai tujuan.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
