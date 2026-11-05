"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  FileCheck2,
  Truck,
  CheckCircle2,
  PhoneCall,
  Layers,
  ArrowRight,
  MapPin,
  Calendar,
  Check,
  Scale,
  Activity,
  HeartHandshake,
  Sparkles,
  MessageCircle,
  Clock,
  Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PengadaanPage() {
  // 4 Komoditas Ternak Skala Besar Lengkap dengan Foto Asli
  const komoditasPengadaan = [
    {
      title: "Kambing Jawa Randu / Bligon",
      category: "Komoditas Bibit & Potong",
      spec: "Bobot 18 – 25 Kg • Tinggi 62 – 70 cm",
      desc: "Pilihan utama program ketahanan pangan desa dan bantuan kelompok tani. Adaptif iklim lokal dan perawatan sangat mudah.",
      img: "https://images.unsplash.com/photo-1717250225322-cf8bfdec0fc6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Kambing Peranakan Etawa (PE)",
      category: "Komoditas Bibit Unggul",
      spec: "Bobot 24 – 35 Kg • Tinggi 70 – 80 cm",
      desc: "Bibit unggul ras Kaligesing untuk program peningkatan mutu genetik perah maupun pembibitan kelompok ternak binaan.",
      img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Domba Batur & Ekor Gemuk (DEG)",
      category: "Komoditas Penggemukan",
      spec: "Bobot 20 – 30 Kg • Tahan Iklim Kering",
      desc: "Pertumbuhan bobot harian (ADG) cepat dan efisien pakan. Sangat ideal untuk siklus penggemukan cepat atau sentra kurban.",
      img: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Sapi Potong (PO & Limousin Cross)",
      category: "Komoditas Sapi Bakalan",
      spec: "Bobot 250 – 400 Kg • Usia 1.5 – 2 Tahun",
      desc: "Rangka tulang lebar, postur tegap, bebas penyakit mulut & kuku (PMK), siap untuk indukan maupun pembesaran.",
      img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Dokumentasi Lapangan (Aktivitas Pengiriman Bersih Tanpa Label Berlebihan)
  const dokumentasiOperasional = [
    {
      title: "Pemeriksaan Kesehatan & Ear-Tagging",
      category: "Tahap 1 • Sentra Peternakan Terpadu",
      desc: "Pemeriksaan fisik hewan, pemberian vitamin anti-stres, dan penandaan ear-tag di Sentra Kandang Kulon Progo & DIY.",
      img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pemuatan Truk Ekspedisi Bersekat",
      category: "Tahap 2 • Logistik Darat",
      desc: "Armada truk ekspedisi bersekat longgar, lantai beralas jerami tebal, dan pasokan pakan konsentrat sepanjang rute jalan.",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pemuatan Kapal Roro Lintasan Laut",
      category: "Tahap 3 • Logistik Laut",
      desc: "Distribusi antarpulau via kapal roro dengan sirkulasi palka baik dan supir ekspedisi ternak berpengalaman.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Serah Terima Fisik di Lokasi Mitra",
      category: "Tahap 4 • Serah Terima",
      desc: "Pemeriksaan fisik dan timbang ulang disaksikan bersama pihak penerima di lokasi titik kumpul tujuan pengantaran.",
      img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-8 lg:space-y-10">
          {/* ============================================================== */}
          {/* 1. HEADER PENGADAAN (SINKRON DENGAN MENU, RESMI & BERWIBAWA)   */}
          {/* ============================================================== */}
          <div className="max-w-3xl space-y-2">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Pengadaan Ternak &amp; Kerjasama Proyek
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Penyedia resmi bibit kambing, domba, dan sapi berbadan hukum untuk program ketahanan pangan BUMDes, Dinas Instansi, dan CSR Perusahaan.
            </p>
          </div>

          {/* ============================================================== */}
          {/* 2. IDENTITAS LEGALITAS PENYEDIA RESMI                          */}
          {/* ============================================================== */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                  BADAN USAHA PENYEDIA RESMI
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  CV JOGLO MAKMUR PERKASA
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#15803d] text-xs font-extrabold flex items-center gap-1.5 w-fit">
                <CheckCircle2 className="w-4 h-4" />
                Terdaftar di SIKaP / INAPROC LKPP
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium text-[11px]">Bentuk Usaha</span>
                <strong className="text-slate-900 text-sm font-bold block mt-0.5">Persekutuan Komanditer (CV)</strong>
                <span className="text-slate-500 block text-[11px] mt-1">Akta Notaris &amp; SK Kemenkumham</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium text-[11px]">KBLI Utama</span>
                <strong className="text-[#15803d] text-sm font-bold block mt-0.5">01441 &amp; 46201</strong>
                <span className="text-slate-500 block text-[11px] mt-1">Peternakan &amp; Perdagangan Besar Hewan</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium text-[11px]">Sentra Peternakan Terpadu</span>
                <strong className="text-slate-900 text-sm font-bold block mt-0.5">Kulon Progo &amp; DIY</strong>
                <span className="text-slate-500 block text-[11px] mt-1">Fasilitas Transit &amp; Perawatan Hewan</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium text-[11px]">Legalitas Usaha</span>
                <strong className="text-slate-900 text-sm font-bold block mt-0.5">NIB Berbasis Risiko</strong>
                <span className="text-slate-500 block text-[11px] mt-1">Izin Berusaha Resmi OSS</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 3. 4 STANDAR KAPASITAS PASOKAN & MITIGASI RISIKO               */}
          {/* ============================================================== */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                STANDAR LAYANAN &amp; KAPASITAS
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Kapasitas Pasokan &amp; Pengendalian Susut Medis
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Garansi Ternak Sehat 100%</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Jaminan penggantian ternak utuh jika ditemukan hewan sakit berat atau mati saat serah terima fisik di lokasi tujuan.
                </p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Toleransi Susut Terkendali</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protokol pemberian elektrolit anti-stres, jerami kering, dan pakan konsentrat sepanjang rute darat maupun laut.
                </p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Kapasitas Transit 500+ Ekor</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kandang transit seluas 2.000 m² di Yogyakarta untuk persiapan seragamisasi bobot, umur, dan perawatan prima sebelum keberangkatan.
                </p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Pemeriksaan Medis &amp; SKKH</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Didampingi dokter hewan berwenang untuk penerbitan SKKH kolektif resmi dan izin lalu lintas ternak antarpulau.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 4. PILIHAN KOMODITAS DENGAN FOTO ASLI MENARIK                  */}
          {/* ============================================================== */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                  PILIHAN KOMODITAS RESMI
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Komoditas Ternak Skala Besar Siap Kirim
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                Populasi Siap Pasokan Partai
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {komoditasPengadaan.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/95 backdrop-blur-xs text-[#15803d] shadow-2xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-[#15803d] transition-colors">
                        {item.title}
                      </h3>
                      <div className="p-2 rounded-xl bg-slate-50 text-xs font-bold text-slate-700 border border-slate-100">
                        {item.spec}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 5. DOKUMENTASI LAPANGAN (BERSIH, TANPA LABEL BERLEBIHAN)       */}
          {/* ============================================================== */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                  DOKUMENTASI OPERASIONAL
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Dokumentasi Lapangan &amp; Distribusi Ternak
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                Aktivitas Pengiriman Lintas Wilayah
              </span>
            </div>

            {/* Grid 4 Foto Dokumentasi Lapangan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dokumentasiOperasional.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-extrabold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================================== */}
          {/* 6. PERTANYAAN PENTING SEPUTAR PENGADAAN (FAQ TEKNIS)           */}
          {/* ============================================================== */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#15803d]">
                KETENTUAN KERJASAMA
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Pertanyaan Penting Seputar Pengadaan &amp; Kemitraan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  Bisakah survei langsung ke kandang sebelum memesan?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sangat bisa dan dipersilakan. Sentra peternakan terpadu kami di Samigaluh, Kulon Progo terbuka untuk peninjauan langsung melihat fasilitas kandang, tata kelola perawatan hewan, serta ketersediaan populasi ternak kami.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  Bagaimana jika terjadi kematian atau susut berlebih di perjalanan?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kami memberikan garansi penggantian ternak utuh 100% jika ditemukan hewan sakit berat atau mati saat proses serah terima fisik di titik kumpul tujuan pengantaran, didampingi berita acara bersama.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  Apakah sistem pembayaran bisa bertahap (termin) sesuai SPK?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bisa disesuaikan. Kami memfasilitasi skema pembayaran bertahap (termin) sesuai kesepakatan Surat Perjanjian Kerja (SPK) resmi BUMDes, dinas, maupun rekanan korporat.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* 7. PROCUREMENT ACTION HUB (PENUTUP KLIMAKS SEBELUM FOOTER)     */}
          {/* ============================================================== */}
          <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-emerald-900 via-[#15803d] to-emerald-950 text-white shadow-xl border border-emerald-500/20 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
              {/* Kolom Kiri: Informasi Singkat & Padat */}
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-emerald-300" /> Konsultasi Pengadaan &amp; Proyek
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Kebutuhan Pengadaan Ternak Skala Besar?
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Hubungi kami untuk ketersediaan kuota pasokan, penawaran harga, jadwal kunjungan ke kandang Kulonprogo, maupun kebutuhan dokumen kemitraan proyek.
                </p>

                {/* 3 Poin Kunci Ringkas & Informatif */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-emerald-100 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Survei Kandang Terbuka</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Siap SPK &amp; Kuitansi Resmi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>Pengiriman Darat &amp; Kapal Laut</span>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan: Tombol WhatsApp Langsung & Kontak */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-center gap-3 shrink-0">
                <a
                  href="https://wa.me/6285162581872?text=Halo%20Tim%20Pengadaan%20CV%20Joglo%20Makmur%2C%20kami%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pengadaan%20ternak"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-[#15803d] font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Hubungi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#15803d]" />
                </a>

                <div className="text-left sm:text-center lg:text-right text-[11px] text-emerald-200/80">
                  <span className="block font-bold text-white">Hotline: 0851-6258-1872</span>
                  <span>Senin – Sabtu (08.00 – 17.00 WIB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
