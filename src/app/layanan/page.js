"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  QrCode,
  ShieldCheck,
  Truck,
  Award,
  FileCheck2,
  ArrowRight,
  Search,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/store/useAppStore";

export default function LayananPage() {
  const router = useRouter();
  const livestockItems = useAppStore((s) => s.livestockItems);
  const livestockBatches = useAppStore((s) => s.livestockBatches);

  const [qrInput, setQrInput] = useState("JMP-2026-088");

  const qrLivestockList = livestockItems.filter(
    (item) => item.inventory_mode === "INDIVIDUAL_QR" && item.eartag_code
  );

  const handleSearchQr = (e) => {
    e.preventDefault();
    const cleaned = qrInput.trim().toUpperCase();
    if (!cleaned) return;
    if (cleaned.startsWith("LOT-") || cleaned.startsWith("BATCH-")) {
      router.push(`/batch/${cleaned}`);
    } else {
      router.push(`/id/${cleaned}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-6 lg:space-y-8">
          {/* Header Layanan Seragam Rata Kiri */}
          <div className="max-w-3xl space-y-2">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Layanan &amp; Standar Mutu Ternak
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Standar mutu ternak bergaransi, kontrol kesehatan berkala, dan garansi pengiriman aman se-DIY.
            </p>
          </div>

          {/* 3 Layanan Utama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="nusa-card p-6 bg-white">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Pengadaan Tender Pemerintah &amp; CSR
              </h2>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Penyediaan bibit kambing PE, Jawa Randu, Domba, dan Sapi sesuai
                spesifikasi teknis LPSE/Dinas lengkap dengan berita acara
                pemeriksaan dan QR Grup Batch.
              </p>
            </div>

            <div className="nusa-card p-6 bg-white">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Pemeriksaan Medis &amp; Kontrol Kesehatan
              </h2>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Seluruh ternak melalui tahapan observasi fisik, pemberian
                vitamin, vaksinasi PMK, dan pemeriksaan berkala dokter hewan.
              </p>
            </div>

            <div className="nusa-card p-6 bg-white">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d] mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Distribusi Aman Lintas Provinsi
              </h2>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Armada pengiriman berventilasi standar kesejahteraan hewan
                dengan jaminan ternak tiba dalam kondisi sehat dan bugar di
                lokasi pembeli.
              </p>
            </div>
          </div>

          {/* HUB VERIFIKASI PASPOR DIGITAL KHUSUS PE SUPER & UNGGULAN */}
          <div
            id="cek-qr"
            className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#15803d] text-xs font-extrabold">
                  <QrCode className="w-4 h-4" /> EKSKLUSIF GRADE PREMIUM
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Cek Paspor Digital Ternak Unggulan (PE Super)
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fitur Paspor Digital &amp; Ear-Tag ini <strong>eksklusif disematkan khusus pada Kambing Peranakan Etawa (PE) Super, bibit kontes unggulan, dan hewan qurban grade premium</strong> untuk mencatat sertifikat silsilah, riwayat vaksin drh., dan bobot timbangan riil.
                </p>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500">
                  💡 <strong>Catatan:</strong> Untuk kambing reguler harian, aqiqah ekonomis, dan pengadaan partai besar, penjualan dilakukan berbasis stok kuantitas siap kirim tanpa Ear-Tag individual.
                </div>

                <form
                  onSubmit={handleSearchQr}
                  className="flex flex-col sm:flex-row gap-3 pt-2 max-w-xl"
                >
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={qrInput}
                      onChange={(e) => setQrInput(e.target.value)}
                      placeholder="Masukkan No. Ear-Tag (contoh: JMP-2026-088)"
                      className="w-full pl-10 pr-4 py-3.5 rounded-full bg-white border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#15803d]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm transition cursor-pointer inline-flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Cek Paspor Ternak</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Quick Demo Clicks: Khusus Ear-Tag PE Super Terdaftar */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-400 block mb-2">
                    Contoh hewan PE Super ber-Ear Tag di sistem:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {qrLivestockList.map((item) => (
                      <Link
                        key={item.id}
                        href={`/id/${item.eartag_code}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-[#15803d] text-xs font-bold text-slate-800 hover:text-[#15803d] transition shadow-2xs"
                      >
                        <QrCode className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>
                          {item.eartag_code} • {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Box Kanan */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Mengapa Ada 2 Mode Inventaris?
                  </h3>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900">
                        1. Mode Stok Kuantitas Reguler (Tanpa QR)
                      </div>
                      <p className="mt-1">
                        Digunakan untuk kambing/domba Aqiqah dan partai reguler
                        agar proses pemesanan cepat dan harga tetap hemat bagi
                        pembeli.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                      <div className="font-bold text-[#15803d]">
                        2. Mode Paspor QR Individual &amp; Batch Tender
                      </div>
                      <p className="mt-1">
                        Digunakan untuk ternak bernilai tinggi (Kontes PE
                        Kaligesing, Sapi Qurban Super) serta laporan audit
                        pengadaan instansi/dinas.
                      </p>
                    </div>
                  </div>
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
