"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserCheck,
  ShoppingBag,
  Camera,
  Layers,
  Clock,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Upload,
  ArrowRight,
  ShieldCheck,
  Key,
  LogOut,
  FileText,
  Sparkles,
  HeartHandshake,
  Building2,
  Lock,
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  ExternalLink,
  PackageCheck,
  Eye,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

export default function MemberAreaPage() {
  const currentUser = useAppStore((s) => s.currentUser);
  const users = useAppStore((s) => s.users);
  const orders = useAppStore((s) => s.orders);
  const livestockItems = useAppStore((s) => s.livestockItems);
  const products = useAppStore((s) => s.products);
  const switchDemoUser = useAppStore((s) => s.switchDemoUser);
  const loginWithGoogle = useAppStore((s) => s.loginWithGoogle);
  const logout = useAppStore((s) => s.logout);
  const approveOrderPayment = useAppStore((s) => s.approveOrderPayment);

  // Active Tab Member Area: "ORDERS" | "RESELLER"
  const [activeTab, setActiveTab] = useState("ORDERS");

  // Form Google Login Cepat di Halaman
  const [googleEmailInput, setGoogleEmailInput] = useState("");
  const [googleNameInput, setGoogleNameInput] = useState("");

  // Filter pesanan user yang sedang login
  const myOrders = orders.filter((o) =>
    currentUser ? o.user_id === currentUser.id : false
  );

  const handleQuickLoginRole = (roleType) => {
    // Cari user demo berdasarkan role atau login default
    const matched = users.find((u) => u.role === roleType) || users[0];
    switchDemoUser(matched.id);
    if (roleType === "RESELLER") {
      setActiveTab("RESELLER");
    } else {
      setActiveTab("ORDERS");
    }
  };

  const handleCustomGoogleSubmit = (e) => {
    e.preventDefault();
    if (!googleEmailInput.trim()) return;
    loginWithGoogle({
      name: googleNameInput.trim() || googleEmailInput.split("@")[0],
      email: googleEmailInput.trim(),
      whatsapp: "081234567890",
    });
    setActiveTab("ORDERS");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-6 lg:space-y-8">

          {/* ================================================================ */}
          {/* JIKA BELUM LOGIN: TAMPILKAN PORTAL PINTU GERBANG MEMBER MEWAH   */}
          {/* ================================================================ */}
          {!currentUser ? (
            <div className="space-y-6 lg:space-y-8">
              {/* Header Pintu Gerbang */}
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Satu Akses Terpadu untuk Seluruh Ekosistem
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Selamat datang di Member Area CV Joglo Makmur Perkasa. Silakan pilih kategori keanggotaan Anda di bawah ini untuk langsung masuk ke dashboard sistem.
                </p>
              </div>

              {/* 4 PINTU KATEGORI MEMBER MEWAH (PAS DALAM 1 TAMPILAN VIEWPORT LAPTOP) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Pintu 1: Shohibul Qurban & Pembeli */}
                <div
                  onClick={() => handleQuickLoginRole("BUYER")}
                  className="rounded-[28px] p-5 sm:p-6 bg-white border-2 border-slate-200/80 hover:border-[#15803d] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15803d]">
                        KATEGORI 01
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 group-hover:text-[#15803d] transition">
                        Shohibul Qurban &amp; Aqiqah
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        Pantau status invoice resmi, verifikasi pembayaran, skema DP 50%, dan kuitansi digital pesanan Anda.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#15803d]">
                    <span>Masuk sebagai Pembeli</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Pintu 2: Mitra Peternak Plasma */}
                <div
                  onClick={() => handleQuickLoginRole("FIELD_ADMIN")}
                  className="rounded-[28px] p-5 sm:p-6 bg-white border-2 border-slate-200/80 hover:border-amber-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700">
                        KATEGORI 02
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 group-hover:text-amber-700 transition">
                        Mitra Peternak Plasma
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        Akses kemitraan kandang rakyat, pendampingan pakan fermentasi, dan jaminan offtaker hasil panen.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                    <span>Masuk Portal Mitra</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Pintu 3: Reseller Susu Kambing BPOM */}
                <div
                  onClick={() => handleQuickLoginRole("RESELLER")}
                  className="rounded-[28px] p-5 sm:p-6 bg-white border-2 border-slate-200/80 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
                        KATEGORI 03
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 group-hover:text-blue-700 transition">
                        Reseller Susu BPOM
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        Katalog harga grosir pabrik (diskon 25%–35%), materi banner promosi HD, serta sertifikasi izin edar BPOM MD.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                    <span>Masuk Portal Reseller</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Pintu 4: Rekanan Pengadaan & Tender (B2B) */}
                <div
                  onClick={() => handleQuickLoginRole("SUPER_ADMIN")}
                  className="rounded-[28px] p-5 sm:p-6 bg-white border-2 border-slate-200/80 hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700">
                        KATEGORI 04
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mt-0.5 group-hover:text-purple-700 transition">
                        Rekanan Pengadaan (INAPROC)
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        Akses dokumen kualifikasi dinas: NIB KBLI 01441/46201, e-Faktur PKP, BAST serah terima, dan standar armada.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                    <span>Masuk Portal B2B / Admin</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* CARD LOGIN 1-KLIK GOOGLE RESMI (PILIHAN B) */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-xl mx-auto space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto text-[#15803d]">
                  <Lock className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Masuk Cepat dengan Akun Google
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Tanpa perlu mengingat password. Akun Google Anda otomatis terhubung dengan data pemesanan, invoice resmi, dan kuitansi pembayaran Anda.
                  </p>
                </div>

                <form onSubmit={handleCustomGoogleSubmit} className="space-y-2.5 max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Nama Lengkap Anda"
                    value={googleNameInput}
                    onChange={(e) => setGoogleNameInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email (contoh: nama@gmail.com)"
                    value={googleEmailInput}
                    onChange={(e) => setGoogleEmailInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {/* Official Google G Logo SVG */}
                    <svg className="w-4 h-4 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Lanjutkan dengan Google (1-Klik)</span>
                  </button>
                </form>

                <p className="text-[11px] text-slate-400">
                  🔒 Data Anda terenkripsi aman dan tidak disebarluaskan ke pihak ketiga.
                </p>
              </div>
            </div>
          ) : (
            /* ================================================================ */
            /* JIKA SUDAH LOGIN: TAMPILKAN EXECUTIVE MEMBER & ADMIN DASHBOARD    */
            /* ================================================================ */
            <div className="space-y-8">
              {/* EXECUTIVE PROFILE CARD */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    {/* Avatar Inisial Elegan */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-[#15803d] to-[#14532d] text-white flex items-center justify-center font-heading text-xl sm:text-2xl font-bold shadow-md">
                        {currentUser.full_name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                          {currentUser.full_name}
                        </h1>
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                            currentUser.role === "SUPER_ADMIN"
                              ? "bg-purple-100 text-purple-900 border border-purple-200"
                              : currentUser.role === "FIELD_ADMIN"
                              ? "bg-amber-100 text-amber-900 border border-amber-200"
                              : "bg-emerald-100 text-[#15803d] border border-emerald-200"
                          }`}
                        >
                          {currentUser.role === "SUPER_ADMIN"
                            ? "👑 Owner & Super Admin"
                            : currentUser.role === "FIELD_ADMIN"
                            ? "🌾 Mitra Peternak Lapangan"
                            : "🏷️ Anggota Shohibul Qurban"}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          {currentUser.email}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {currentUser.phone_wa || "081392817263"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Keluar Akun */}
                  <button
                    onClick={logout}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-red-300 hover:bg-red-50 text-xs font-bold text-slate-600 hover:text-red-600 transition cursor-pointer shrink-0 self-end sm:self-center"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Keluar Akun</span>
                  </button>
                </div>

                {/* 4 KARTU STATISTIK RINGKAS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {currentUser.role === "SUPER_ADMIN" ? (
                    <>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-semibold text-slate-500 block">Total Pesanan Sistem</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{orders.length} Invoice</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                        <span className="text-[11px] font-semibold text-amber-800 block">Menunggu Konfirmasi</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-amber-900 mt-1">
                          {orders.filter((o) => o.payment_status === "WAITING_VERIFICATION" || o.payment_status === "UNPAID").length} Pesanan
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                        <span className="text-[11px] font-semibold text-emerald-800 block">Ternak di Kandang</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#15803d] mt-1">{livestockItems.length} Ekor Aktif</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                        <span className="text-[11px] font-semibold text-blue-800 block">Stok Gudang Susu</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-blue-900 mt-1">
                          {products.reduce((acc, p) => acc + (p.stock_qty || 0), 0)} Box
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-semibold text-slate-500 block">Total Pesanan Saya</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{myOrders.length} Pesanan</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                        <span className="text-[11px] font-semibold text-amber-800 block">Menunggu Bayar</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-amber-900 mt-1">
                          {myOrders.filter((o) => o.payment_status === "UNPAID").length}
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                        <span className="text-[11px] font-semibold text-emerald-800 block">Lunas / Terverifikasi</span>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#15803d] mt-1">
                          {myOrders.filter((o) => o.payment_status === "PAID_FULL" || o.payment_status === "DP_PAID").length}
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                        <span className="text-[11px] font-semibold text-purple-800 block">Status Akun</span>
                        <div className="text-sm font-extrabold text-purple-900 mt-2 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-purple-700" /> Terverifikasi
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* TAB NAVIGASI PORTAL SESUAI ROLE */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
                {currentUser.role === "SUPER_ADMIN" ? (
                  <>
                    <button
                      onClick={() => setActiveTab("ORDERS")}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                        activeTab === "ORDERS"
                          ? "bg-slate-900 text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Semua Pesanan Masuk ({orders.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("STOK")}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                        activeTab === "STOK"
                          ? "bg-slate-900 text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Stok Ternak ({livestockItems.length}) &amp; Susu ({products.length})</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveTab("ORDERS")}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                        activeTab === "ORDERS"
                          ? "bg-[#15803d] text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Pesanan &amp; Invoice Saya ({myOrders.length})</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("RESELLER")}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                        activeTab === "RESELLER"
                          ? "bg-[#15803d] text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Reseller Susu BPOM</span>
                    </button>
                  </>
                )}
              </div>

              {/* ================================================================ */}
              {/* TAB 1: PESANAN & INVOICE (ADAPTIF SUPER ADMIN / BUYER)           */}
              {/* ================================================================ */}
              {activeTab === "ORDERS" && (
                <div className="space-y-6">
                  {currentUser.role === "SUPER_ADMIN" ? (
                    /* TAMPILAN MANAJEMEN TRANSAKSI UNTUK SUPER ADMIN / OWNER */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <div>
                          <h2 className="font-heading text-lg font-bold text-slate-900">
                            Daftar Seluruh Pesanan Masuk
                          </h2>
                          <p className="text-xs text-slate-500">
                            Kelola verifikasi transfer bank pembeli dan pantau status invoice 1 jam.
                          </p>
                        </div>
                        <span className="text-xs font-extrabold text-[#15803d] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          {orders.length} Total Transaksi
                        </span>
                      </div>

                      {orders.map((order) => {
                        const isUnpaid = order.payment_status === "UNPAID";
                        const isWaiting = order.payment_status === "WAITING_VERIFICATION";
                        const isPaid = order.payment_status === "PAID_FULL" || order.payment_status === "DP_PAID";
                        const isExpired = order.payment_status === "EXPIRED";

                        return (
                          <div
                            key={order.id}
                            className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                          >
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono font-bold text-xs text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                                  {order.invoice_code}
                                </span>
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                                    isUnpaid
                                      ? "bg-amber-100 text-amber-900"
                                      : isWaiting
                                      ? "bg-blue-100 text-blue-900"
                                      : isPaid
                                      ? "bg-emerald-100 text-[#15803d]"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {order.payment_status}
                                </span>
                                <span className="text-xs font-bold text-slate-700 bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200">
                                  Pemesan: {order.customer_name} ({order.customer_wa})
                                </span>
                              </div>

                              <h3 className="text-lg font-bold text-slate-900">
                                {order.item_title} ({order.quantity} {order.item_type === "LIVESTOCK" ? "ekor" : "paket"})
                              </h3>

                              <div className="text-xs text-slate-500 space-y-0.5">
                                <div>Kategori: {order.order_category} • Skema: {order.payment_scheme}</div>
                                <div>Alamat Kirim: {order.shipping_address}</div>
                              </div>
                            </div>

                            <div className="text-left md:text-right space-y-3 shrink-0">
                              <div>
                                <span className="text-xs text-slate-400 block font-medium">Tagihan</span>
                                <div className="text-xl font-extrabold text-slate-900">
                                  {formatRupiah(order.amount_to_pay_rp)}
                                </div>
                              </div>

                              <div className="flex flex-wrap md:justify-end items-center gap-2">
                                <Link
                                  href={`/invoice/${order.invoice_code}`}
                                  target="_blank"
                                  className="px-4 py-2 rounded-full border border-slate-200 hover:border-[#15803d] text-slate-700 hover:text-[#15803d] text-xs font-bold transition flex items-center gap-1.5"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Lihat Invoice</span>
                                </Link>

                                {!isPaid && !isExpired && (
                                  <button
                                    onClick={() => approveOrderPayment(order.id)}
                                    className="px-4 py-2 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Verifikasi Lunas</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* TAMPILAN PESANAN SAYA UNTUK PEMBELI BIASA */
                    myOrders.length === 0 ? (
                      <div className="bg-white rounded-[32px] p-8 sm:p-12 text-center border border-slate-200/80 space-y-5 max-w-xl mx-auto shadow-xs">
                        <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-[#15803d] flex items-center justify-center mx-auto border border-emerald-100">
                          <ShoppingBag className="w-8 h-8" />
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                            Belum Ada Pesanan Aktif
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                            Mulai pilih hewan qurban/aqiqah bergaransi dokter hewan atau paket nutrisi susu kambing etawa murni BPOM untuk keluarga.
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                          <Link
                            href="/katalog"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs shadow-sm transition"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            <span>Buka Katalog Sekarang</span>
                          </Link>
                          <a
                            href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur,%20saya%20ingin%20konsultasi%20pemesanan%20qurban%20dan%20susu."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] font-bold text-xs hover:bg-emerald-100 transition"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Konsultasi via WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {myOrders.map((order) => {
                          const isUnpaid = order.payment_status === "UNPAID";
                          const isWaiting = order.payment_status === "WAITING_VERIFICATION";
                          const isPaid = order.payment_status === "PAID_FULL" || order.payment_status === "DP_PAID";
                          const isExpired = order.payment_status === "EXPIRED";

                          return (
                            <div
                              key={order.id}
                              className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                              <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-mono font-bold text-xs text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                                    {order.invoice_code}
                                  </span>
                                  <span
                                    className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                                      isUnpaid
                                        ? "bg-amber-100 text-amber-900"
                                        : isWaiting
                                        ? "bg-blue-100 text-blue-900"
                                        : isPaid
                                        ? "bg-emerald-100 text-[#15803d]"
                                        : "bg-red-100 text-red-800"
                                    }`}
                                  >
                                    {order.payment_status}
                                  </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                  {order.item_title}
                                </h3>

                                <div className="text-xs sm:text-sm text-slate-500 space-y-0.5">
                                  <div>Kategori: {order.order_category} • Skema: {order.payment_scheme}</div>
                                  <div>Alamat Kirim: {order.shipping_address}</div>
                                  {order.shipping_tracking_code && (
                                    <div className="text-[#15803d] font-bold">
                                      No. Resi: {order.shipping_tracking_code}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="text-left md:text-right space-y-3 shrink-0">
                                <div>
                                  <span className="text-xs text-slate-400 block">
                                    Total Tagihan
                                  </span>
                                  <div className="text-2xl font-extrabold text-slate-900">
                                    {formatRupiah(order.amount_to_pay_rp)}
                                  </div>
                                </div>

                                <div className="flex flex-wrap md:justify-end items-center gap-2">
                                  <Link
                                    href={`/invoice/${order.invoice_code}`}
                                    className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-[#15803d] text-slate-700 hover:text-[#15803d] text-xs sm:text-sm font-bold transition"
                                  >
                                    Buka Invoice &amp; QRIS →
                                  </Link>

                                  {isUnpaid && (
                                    <a
                                      href={`https://wa.me/6285162581872?text=${encodeURIComponent(
                                        `Halo Admin CV Joglo Makmur Perkasa, saya ingin konfirmasi pembayaran untuk Invoice ${order.invoice_code} (${order.item_title}) sebesar ${formatRupiah(order.amount_to_pay_rp)}.`
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-2xs"
                                    >
                                      <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                                      <span>Konfirmasi via WA</span>
                                    </a>
                                  )}
                                </div>

                                {isWaiting && (
                                  <span className="text-xs text-blue-600 font-semibold block">
                                    Menunggu Verifikasi Admin
                                  </span>
                                )}

                                {isPaid && (
                                  <span className="text-xs text-[#15803d] font-bold inline-flex items-center gap-1">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Lunas / Stok Terkunci</span>
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )
                  )}
                </div>
              )}

              {/* ================================================================ */}
              {/* TAB 1.5: MONITORING STOK TERNAK & SUSU (KHUSUS SUPER ADMIN)      */}
              {/* ================================================================ */}
              {activeTab === "STOK" && (
                <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h2 className="font-heading text-lg font-bold text-slate-900">
                        Monitoring Inventori Ternak &amp; Gudang Susu BPOM
                      </h2>
                      <p className="text-xs text-slate-500">
                        Ketersediaan stok riil yang terhubung langsung ke katalog pembeli.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {livestockItems.map((lv) => (
                      <div key={lv.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-extrabold text-slate-900">{lv.title}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {lv.eartag_code ? `Ear-Tag: ${lv.eartag_code}` : "Stok Komoditas"} • {formatRupiah(lv.sell_price_rp)}
                          </div>
                        </div>
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                          lv.available_qty > 0 ? "bg-emerald-100 text-[#15803d]" : "bg-red-100 text-red-700"
                        }`}>
                          Stok: {lv.available_qty} Ekor
                        </span>
                      </div>
                    ))}

                    {products.map((prod) => (
                      <div key={prod.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-extrabold text-slate-900">{prod.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            BPOM: {prod.bpom_number} • {formatRupiah(prod.sell_price_rp)}
                          </div>
                        </div>
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                          Stok: {prod.stock_qty} Box
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ================================================================ */}
              {/* TAB 2: RESELLER SUSU KAMBING BPOM                                */}
              {/* ================================================================ */}
              {activeTab === "RESELLER" && (
                <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#15803d]">
                      PORTAL RESELLER &amp; KEAGENAN
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      Pusat Materi Promosi &amp; Order Grosir
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Fasilitas bagi mitra toko herbal, apotek, dan reseller resmi Susu Kambing Bubuk Joglo Makmur berizin BPOM RI.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                      <span className="text-sm font-bold text-slate-900 block">Paket Starter (20 Box)</span>
                      <div className="text-2xl font-bold text-[#15803d]">Diskon 25%</div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Cocok untuk uji pasar reseller baru dengan materi banner promosi digital siap pakai.
                      </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                      <span className="text-sm font-bold text-slate-900 block">Paket Agen (100 Box)</span>
                      <div className="text-2xl font-bold text-[#15803d]">Diskon 35%</div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Harga grosir terbaik untuk agen wilayah dengan fasilitas subsidi ongkos kirim.
                      </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                      <span className="text-sm font-bold text-slate-900 block">Legalitas BPOM RI</span>
                      <div className="text-2xl font-bold text-slate-900">MD Resmi</div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        Aman diperjualbelikan di ritel modern, apotek, dan toko obat berlisensi.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/6281392817263?text=Halo%20Admin%2C%20saya%20ingin%20bergabung%20Paket%20Reseller%20Susu%20Kambing%20BPOM"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm shadow-sm transition"
                    >
                      <span>Hubungi Manajer Reseller (WhatsApp)</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
