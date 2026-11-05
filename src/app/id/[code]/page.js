"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  QrCode,
  MapPin,
  Stethoscope,
  Syringe,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
  Save,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

export default function LivestockQrPassportPage() {
  const params = useParams();
  const rawCode = decodeURIComponent(params?.code || "").toUpperCase();

  const livestockItems = useAppStore((s) => s.livestockItems);
  const currentUser = useAppStore((s) => s.currentUser);
  const updateLivestockFromQrScan = useAppStore(
    (s) => s.updateLivestockFromQrScan
  );

  const item = livestockItems.find(
    (x) => x.eartag_code && x.eartag_code.toUpperCase() === rawCode
  );

  const isStaff =
    currentUser?.role === "SUPER_ADMIN" || currentUser?.role === "FIELD_ADMIN";

  const [weightInput, setWeightInput] = useState(item?.weight_kg || 34.5);
  const [qtyInput, setQtyInput] = useState(item?.available_qty || 1);
  const [vaccineInput, setVaccineInput] = useState(item?.vaccine_notes || "");
  const [savedToast, setSavedToast] = useState(false);

  const handleStaffSave = (e) => {
    e.preventDefault();
    if (!item) return;
    updateLivestockFromQrScan(item.eartag_code, {
      weight_kg: Number(weightInput),
      weight_range_label: `${weightInput} Kg`,
      available_qty: Number(qtyInput),
      vaccine_notes: vaccineInput,
    });
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-12 lg:py-16">
        <div className="container-nusa max-w-6xl">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#15803d] mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Layanan &amp; Cek QR</span>
          </Link>

          {!item ? (
            <div className="nusa-card p-10 text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
              <h1 className="font-heading text-2xl font-bold text-slate-900">
                Kode Ear-Tag QR &ldquo;{rawCode}&rdquo; Tidak Ditemukan
              </h1>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Pastikan kode sesuai dengan yang tertera pada kalung/telinga
                ternak (Contoh:{" "}
                <Link
                  href="/id/JMP-2026-088"
                  className="text-[#15803d] font-bold underline"
                >
                  JMP-2026-088
                </Link>{" "}
                atau{" "}
                <Link
                  href="/id/JMP-SAPI-04"
                  className="text-[#15803d] font-bold underline"
                >
                  JMP-SAPI-04
                </Link>
                ).
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Top Passport Banner */}
              <div className="rounded-3xl bg-emerald-50/70 border border-emerald-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15803d] text-white text-xs font-extrabold">
                    <QrCode className="w-3.5 h-3.5" /> PASPOR DIGITAL TERNAK
                    TERVERIFIKASI
                  </div>
                  <h1 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900">
                    {item.title}
                  </h1>
                  <div className="text-xs font-bold text-slate-600">
                    Kode Ear-Tag Resmi:{" "}
                    <span className="text-[#15803d] font-extrabold">
                      {item.eartag_code}
                    </span>{" "}
                    • Status Medis:{" "}
                    <span className="text-[#15803d] font-extrabold">
                      {item.is_pmk_free ? "BEBAS PMK & SEHAT" : "KARANTINA"}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 text-right shrink-0">
                  <span className="text-[13px] font-bold text-slate-400 block">
                    Status Ketersediaan
                  </span>
                  <span
                    className={`text-sm font-extrabold ${
                      item.available_qty > 0
                        ? "text-[#15803d]"
                        : "text-red-600"
                    }`}
                  >
                    {item.available_qty > 0
                      ? `TERSEDIA (${item.available_qty} Ekor)`
                      : "SUDAH TERJUAL"}
                  </span>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">
                    {formatRupiah(item.sell_price_rp)}
                  </div>
                </div>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Foto & Spesifikasi */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={item.photo_main_url}
                      alt={item.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>

                  <div className="nusa-card p-6 bg-white space-y-3">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                      Spesifikasi Biometrik
                    </h2>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">Jenis / Ras</span>
                        <strong className="text-slate-900">{item.breed}</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">Kelamin</span>
                        <strong className="text-slate-900">{item.gender}</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">Bobot Riil</span>
                        <strong className="text-[#15803d]">
                          {item.weight_kg} Kg
                        </strong>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">
                          Usia / Gigi Poel
                        </span>
                        <strong className="text-slate-900">
                          {item.age_poel}
                        </strong>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">
                          Tinggi Gumba
                        </span>
                        <strong className="text-slate-900">
                          {item.shoulder_height_cm} cm
                        </strong>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50">
                        <span className="text-slate-400 block">
                          Panjang Telinga
                        </span>
                        <strong className="text-slate-900">
                          {item.ear_length_cm} cm
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vaksinasi, Kandang & Dokter Hewan */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Riwayat Vaksinasi & Surat Kesehatan */}
                  <div className="nusa-card p-6 bg-white space-y-4">
                    <div className="flex items-center gap-2 text-[#15803d] font-extrabold text-xs uppercase tracking-wider">
                      <Stethoscope className="w-4 h-4" />
                      <span>Otoritas Medis Veteriner &amp; Kesehatan</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                      <div className="text-sm font-bold text-slate-900">
                        Dokter Pemeriksa: {item.vet_name}
                      </div>
                      <div className="text-xs font-semibold text-[#15803d] mt-0.5">
                        Status Karantina: Lulus Uji Fisik &amp; Bebas Gejala PMK
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                        <Syringe className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Catatan Vaksinasi &amp; Biosekuriti:</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                        <span>{item.vaccine_notes}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Asal Kandang: {item.partner_farm_name}
                        </div>
                        <div className="text-slate-500 mt-0.5">
                          Jaringan Kemitraan Plasma CV Joglo Makmur Perkasa DIY
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PANEL KHUSUS PETUGAS KANDANG / SUPER ADMIN SAAT SCAN QR DI LAPANGAN */}
                  {isStaff && (
                    <form
                      onSubmit={handleStaffSave}
                      className="rounded-3xl bg-slate-900 text-white p-6 space-y-4 border border-slate-800"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                          <SlidersHorizontal className="w-4 h-4" /> Mode Scan
                          Petugas Kandang ({currentUser.role})
                        </span>
                        {savedToast && (
                          <span className="text-xs font-bold text-emerald-300">
                            ✓ Perubahan Tersimpan!
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">
                        Karena Anda login sebagai petugas/admin, Anda dapat
                        langsung memperbarui bobot timbangan terbaru atau sisa
                        stok dari halaman scan QR ini:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block text-slate-400 mb-1">
                            Update Bobot Timbang (Kg)
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            value={weightInput}
                            onChange={(e) => setWeightInput(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">
                            Sisa Ketersediaan (Ekor)
                          </label>
                          <input
                            type="number"
                            value={qtyInput}
                            onChange={(e) => setQtyInput(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">
                          Update Catatan Medis / Vaksin
                        </label>
                        <input
                          type="text"
                          value={vaccineInput}
                          onChange={(e) => setVaccineInput(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Simpan Perubahan Lapangan</span>
                      </button>
                    </form>
                  )}

                  {/* CTA Checkout & WhatsApp Inquiry */}
                  {item.available_qty > 0 && (
                    <div className="flex flex-wrap items-center justify-end gap-3">
                      <a
                        href={`https://wa.me/6285162581872?text=${encodeURIComponent(
                          `Halo Admin CV Joglo Makmur Perkasa, saya tertarik dengan kambing Ear-Tag ${item.eartag_code} (${item.title}, ${item.weight_kg} Kg). Apakah masih tersedia untuk pengiriman DIY?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-xs transition"
                      >
                        <span>💬 Tanya via WhatsApp</span>
                      </a>

                      <Link
                        href={`/checkout?type=LIVESTOCK&id=${item.id}&qty=1`}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>
                          Booking &amp; Bayar Ternak Ini (
                          {formatRupiah(item.sell_price_rp)})
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
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
