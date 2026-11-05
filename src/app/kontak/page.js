"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Clock,
  Phone,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
  ShoppingBag,
  Building2,
  CalendarCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontakPage() {
  const [copiedBca, setCopiedBca] = useState(false);

  const gmapsUrl =
    "https://www.google.com/maps/place/JOGLO+MAKMUR+PERKASA,+Nglinggo+Barat,+Pagerharjo,+Samigaluh,+Kulon+Progo+Regency,+Special+Region+of+Yogyakarta+55673/data=!4m2!3m1!1s0x2e7aed407ff89cd3:0x9c06964f917a27ce!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjQzLjQYACDXggMq2wEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk0NTA4LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDEwMDgwODY1OSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MjUwMjUsMTAwODIwMjM3LDEwMDgyMjQ5NCwxMDA4Mjc5NzUsMTAwODM4MzU5LDEyMTgxNjQ2MSwxMDA4NDc0NDVCAklE&skid=4a740609-ed6f-436b-be16-185e864ea906&g_st=aw";

  const shopeeUrl =
    "https://s.shopee.co.id/2BGAuJ6UXO?share_channel_code=1";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedBca(true);
    setTimeout(() => setCopiedBca(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-6 lg:space-y-8">
          {/* Header Kontak 100% Rata Kiri Seragam */}
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] text-xs font-extrabold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" /> HUBUNGI KAMI
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Pusat Layanan Pelanggan
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Konsultasi pemesanan Qurban &amp; Aqiqah, kemitraan reseller Susu BPOM, pengadaan proyek, atau jadwal kunjungan kandang Samigaluh, Kulon Progo.
            </p>
          </div>

          {/* Tata Letak 2 Kolom Seimbang & Rapi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* SISI KIRI: KANTOR PUSAT, ALAMAT & REKENING RESMI (6 KOLOM) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Card Lokasi Kantor & Sentra Ternak */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">
                    KANTOR PUSAT &amp; SENTRA PETERNAKAN
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Sentra Peternakan &amp; Kantor Resmi
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Sentra peternakan terintegrasi &amp; produksi olahan susu kambing BPOM RI
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 pt-1">
                  {/* Alamat */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#15803d] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Alamat Operasional:
                      </strong>
                      <span className="leading-relaxed text-slate-600 block mt-0.5">
                        Nglinggo Barat, Pagerharjo, Samigaluh, Kabupaten Kulon
                        Progo, Daerah Istimewa Yogyakarta 55673
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Resmi */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#15803d] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        WhatsApp &amp; Telepon Resmi:
                      </strong>
                      <span className="text-slate-800 font-semibold block mt-0.5">
                        +62 851-6258-1872
                      </span>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#15803d] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Jam Operasional Kandang:
                      </strong>
                      <span className="text-slate-600 block mt-0.5">
                        Senin – Minggu: 08.00 – 17.00 WIB (Buka Setiap Hari)
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#15803d] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">
                        Email Resmi:
                      </strong>
                      <span className="text-slate-700 block mt-0.5">
                        info@joglomakmurperkasa.co.id
                      </span>
                    </div>
                  </div>
                </div>

                {/* Peta Interaktif Samigaluh Kulon Progo */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-56 sm:h-64 w-full relative bg-slate-100 shadow-2xs">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.842777329598!2d110.1348574!3d-7.6997576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aed407ff89cd3%3A0x9c06964f917a27ce!2sJOGLO%20MAKMUR%20PERKASA!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Lokasi CV Joglo Makmur Perkasa Samigaluh"
                    className="w-full h-full"
                  />
                </div>

                {/* Tombol Petunjuk Arah */}
                <div className="pt-1">
                  <a
                    href={gmapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs sm:text-sm shadow-xs transition"
                  >
                    <span>Buka Rute di Aplikasi Google Maps</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Rekening Resmi Perusahaan (BCA Sholeh Hidayat) */}
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white shadow-md space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Rekening Resmi Pembayaran
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                {/* Akun BCA Terverifikasi */}
                <div className="bg-white/10 rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-300 block">
                      Bank Central Asia (BCA)
                    </span>
                    <div className="text-2xl sm:text-3xl font-mono font-black tracking-widest text-white mt-1">
                      0092732604
                    </div>
                    <span className="text-xs text-slate-300 block mt-1">
                      Atas Nama: <strong className="text-white font-bold">Sholeh Hidayat</strong>
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("0092732604")}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer shrink-0 border border-white/10"
                    title="Salin Nomor Rekening BCA"
                  >
                    {copiedBca ? (
                      <span className="flex items-center gap-1.5 text-xs text-emerald-300 font-bold">
                        <Check className="w-4 h-4" /> Tersalin
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-semibold">
                        <Copy className="w-4 h-4" /> Salin
                      </span>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-300/80 leading-relaxed">
                  Semua transaksi resmi pembayaran dan pemesanan ternak/produk CV Joglo Makmur Perkasa dilayani melalui rekening terverifikasi di atas.
                </p>
              </div>
            </div>

            {/* SISI KANAN: JALUR CUSTOMER SERVICE & TOKO SHOPEE RESMI (6 KOLOM) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Hub Kontak WhatsApp Terpadu */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#15803d]">
                    LAYANAN CHAT RESPON CEPAT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Customer Service via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Pilih jalur konsultasi sesuai kebutuhan Anda untuk terhubung langsung dengan tim kami:
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* CS 1: Aqiqah & Qurban */}
                  <a
                    href="https://wa.me/6285162581872?text=Halo%20Admin%20Joglo%20Makmur%2C%20saya%20ingin%20konsultasi%20Kambing%20Aqiqah%20%26%20Qurban"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#15803d] flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#15803d] transition">
                          Pemesanan Qurban &amp; Aqiqah
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Ternak hidup cash &amp; fasilitas titip rawat gratis hingga Hari H
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#15803d] transition shrink-0" />
                  </a>

                  {/* CS 2: Reseller Susu BPOM */}
                  <a
                    href="https://wa.me/6285162581872?text=Halo%20Admin%2C%20saya%20tertarik%20keagenan%20Reseller%20Susu%20Kambing%20BPOM"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200 hover:border-amber-300 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition">
                          Keagenan &amp; Reseller Susu BPOM
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Peluang distributor, apotek, toko herbal &amp; harga grosir
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition shrink-0" />
                  </a>

                  {/* CS 3: Pengadaan & Proyek Skala Besar */}
                  <a
                    href="https://wa.me/6285162581872?text=Halo%20Admin%2C%20kami%20ingin%20berkonsultasi%20mengenai%20Pengadaan%20Ternak%20Proyek"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                          Layanan Pengadaan &amp; Proyek
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Program ketahanan pangan BUMDes, instansi dinas &amp; CSR
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition shrink-0" />
                  </a>
                </div>
              </div>

              {/* Toko Resmi Shopee (Satu-satunya Marketplace Resmi) */}
              <a
                href={shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-3xl p-6 sm:p-7 border border-orange-200 hover:border-[#ea580c] shadow-xs hover:shadow-md transition flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] border border-orange-200 flex items-center justify-center shrink-0 font-extrabold text-base">
                    🛍️
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                      OFFICIAL SHOPEE STORE
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#ea580c] transition mt-1">
                      Beli Susu Kambing di Shopee
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Belanja praktis produk susu bubuk BPOM original dengan promo gratis ongkir &amp; opsi COD.
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#ea580c] transition shrink-0" />
              </a>

              {/* Catatan Janji Temu Kunjungan Kandang */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                <CalendarCheck className="w-5 h-5 text-[#15803d] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    Ketentuan Kunjungan Kandang:
                  </strong>
                  Bagi pembeli atau rekanan yang ingin melakukan survei fisik ternak di Samigaluh, Kulon Progo, disarankan mengonfirmasi jadwal kedatangan minimal <strong>H-1 via WhatsApp</strong> agar tim kami siap menyambut.
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
