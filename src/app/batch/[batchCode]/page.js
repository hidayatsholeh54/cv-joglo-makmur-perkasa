"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  MapPin,
  Stethoscope,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore } from "@/store/useAppStore";

export default function BatchQrPassportPage() {
  const params = useParams();
  const rawBatchCode = decodeURIComponent(params?.batchCode || "").toUpperCase();

  const livestockBatches = useAppStore((s) => s.livestockBatches);
  const partnerFarms = useAppStore((s) => s.partnerFarms);

  const batch = livestockBatches.find(
    (b) => b.batch_code.toUpperCase() === rawBatchCode
  );
  const farm = batch
    ? partnerFarms.find((f) => f.id === batch.partner_farm_id)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="container-nusa max-w-5xl">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#15803d] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Layanan &amp; Cek QR</span>
          </Link>

          {!batch ? (
            <div className="nusa-card p-10 text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h1 className="font-heading text-2xl font-bold text-slate-900">
                Kode Batch QR &ldquo;{rawBatchCode}&rdquo; Tidak Ditemukan
              </h1>
              <p className="text-sm text-slate-500">
                Contoh kode Batch Tender aktif:{" "}
                <Link
                  href="/batch/LOT-KALTIM-250"
                  className="text-[#15803d] font-bold underline"
                >
                  LOT-KALTIM-250
                </Link>{" "}
                atau{" "}
                <Link
                  href="/batch/LOT-BANTUL-120"
                  className="text-[#15803d] font-bold underline"
                >
                  LOT-BANTUL-120
                </Link>
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-3xl bg-emerald-50/80 border border-emerald-200 p-6 sm:p-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#15803d] text-white text-xs font-extrabold">
                  <Layers className="w-3.5 h-3.5" /> SERTIFIKAT QR BATCH
                  PENGADAAN / TENDER
                </div>
                <h1 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900">
                  {batch.project_title}
                </h1>
                <div className="text-xs font-bold text-slate-600">
                  Kode Batch:{" "}
                  <span className="text-[#15803d]">{batch.batch_code}</span> •
                  Komoditas: <strong>{batch.commodity_type}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="nusa-card p-5 bg-white">
                  <span className="text-xs text-slate-400 block">
                    Total Kuantitas Batch
                  </span>
                  <span className="text-2xl font-extrabold text-[#15803d]">
                    {batch.total_heads} Ekor
                  </span>
                </div>
                <div className="nusa-card p-5 bg-white">
                  <span className="text-xs text-slate-400 block">
                    Spesifikasi Bobot
                  </span>
                  <span className="text-xl font-extrabold text-slate-900">
                    {batch.weight_range_spec}
                  </span>
                </div>
                <div className="nusa-card p-5 bg-white">
                  <span className="text-xs text-slate-400 block">
                    Tanggal Keberangkatan
                  </span>
                  <span className="text-lg font-extrabold text-slate-900">
                    {batch.departure_date}
                  </span>
                </div>
              </div>

              <div className="nusa-card p-6 sm:p-8 bg-white space-y-5">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#15803d]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Dokumen Pemeriksaan Kesehatan Kolektif &amp; Tujuan Distribusi</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Stethoscope className="w-4 h-4 text-[#15803d]" />
                      <span>Dokter Hewan Pemeriksa:</span>
                    </div>
                    <div className="text-slate-700 font-semibold">
                      {batch.vet_name}
                    </div>
                    <div className="text-[#15803d] font-bold">
                      Dokumen: {batch.skkh_doc_url}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#15803d]" />
                      <span>Asal &amp; Tujuan Pengiriman:</span>
                    </div>
                    <div className="text-slate-700 font-semibold">
                      Asal: {farm?.farm_name || "Kandang Karantina DIY"}
                    </div>
                    <div className="text-slate-500">
                      Tujuan: {batch.destination_region}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Klausul Medis Perjalanan:</strong>{" "}
                    {batch.shrinkage_clause} (Status:{" "}
                    <strong>{batch.status}</strong>)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
