"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  QrCode,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Check,
  ChevronDown,
  X,
  Eye,
  CheckCircle2,
  Truck,
  HeartHandshake,
  MessageCircle,
  Activity,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

function KatalogContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(
    tabParam === "susu" ? "SUSU" : tabParam === "ternak" ? "LIVESTOCK" : "ALL"
  );
  const [prevTab, setPrevTab] = useState(tabParam);

  if (tabParam !== prevTab) {
    setPrevTab(tabParam);
    setActiveTab(
      tabParam === "susu" ? "SUSU" : tabParam === "ternak" ? "LIVESTOCK" : "ALL"
    );
  }

  const livestockItems = useAppStore((s) => s.livestockItems);
  const products = useAppStore((s) => s.products);

  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [qtyMap, setQtyMap] = useState({});

  // State Modal Detail Produk Terpadu & Galeri Foto
  const [selectedDetail, setSelectedDetail] = useState(null); // { type: "LIVESTOCK" | "PRODUCT", item: Object }
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openDetail = (type, item) => {
    setActivePhotoIndex(0);
    setSelectedDetail({ type, item });
  };

  // Keyboard shortcut ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedDetail(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getQty = (id) => qtyMap[id] || 1;
  const setQty = (id, qty, max) => {
    const safeQty = Math.max(1, Math.min(Number(qty) || 1, max || 99));
    setQtyMap((prev) => ({ ...prev, [id]: safeQty }));
  };

  // Filter Ternak
  const filteredLivestock = livestockItems.filter((item) => {
    const matchCategory =
      categoryFilter === "ALL" || item.category === categoryFilter;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.eartag_code &&
        item.eartag_code.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Filter Susu BPOM
  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.bpom_number.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const generateWhatsAppLink = (item, type) => {
    const officialPhone = "6285162581872";
    const title = type === "LIVESTOCK" ? item.title : item.name;
    const priceText = formatRupiah(item.sell_price_rp);
    const tagInfo = item.eartag_code ? ` (Ear-Tag: ${item.eartag_code})` : "";
    const msg = `Halo Tim CV Joglo Makmur Perkasa, saya tertarik dengan:\n*${title}*${tagInfo}\nHarga: ${priceText}\n\nMohon info ketersediaan dan proses pemesanan. Terima kasih.`;
    return `https://wa.me/${officialPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-6 lg:space-y-8">
          {/* Header Katalog Ringkas Langsung ke Produk */}
          <div className="max-w-3xl space-y-2">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Katalog Ternak &amp; Susu Kambing BPOM
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Pilihan hewan qurban, bibit ternak, dan susu kambing etawa BPOM siap kirim dari sentra Kulon Progo.
            </p>

            {/* Live Inventory Counter Bar Ringkas */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#15803d] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ready: {livestockItems.reduce((acc, i) => acc + (i.available_qty || 1), 0)} Ekor Ternak</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>{products.reduce((acc, p) => acc + (p.stock_qty || 0), 0)} Pouch Susu BPOM</span>
              </span>
            </div>
          </div>

          {/* FILTER TOOLBAR TERPADU (1 BARIS BERSIH & MEWAH) */}
          <div className="bg-white p-2.5 rounded-[24px] border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Tab Pill Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => {
                  setActiveTab("ALL");
                  setCategoryFilter("ALL");
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeTab === "ALL" && categoryFilter === "ALL"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Semua Koleksi ({livestockItems.length + products.length})
              </button>

              <button
                onClick={() => {
                  setActiveTab("LIVESTOCK");
                  setCategoryFilter("ALL");
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeTab === "LIVESTOCK" && categoryFilter === "ALL"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Ternak Hidup ({livestockItems.length})
              </button>

              <button
                onClick={() => {
                  setActiveTab("SUSU");
                  setCategoryFilter("ALL");
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeTab === "SUSU"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Susu Kambing BPOM ({products.length})
              </button>
            </div>

            {/* Filter Jenis Ternak & Search Bar Terpadu */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {activeTab !== "SUSU" && (
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={(e) => {
                      setCategoryFilter(e.target.value);
                      if (e.target.value !== "ALL" && activeTab === "ALL") {
                        setActiveTab("LIVESTOCK");
                      }
                    }}
                    className="w-full sm:w-auto appearance-none pl-3 pr-8 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#15803d] cursor-pointer"
                  >
                    <option value="ALL">Semua Jenis Ternak</option>
                    <option value="JANTAN">Kambing Jantan</option>
                    <option value="BETINA">Kambing Betina (Hemat &amp; Indukan)</option>
                    <option value="PAKET_BIBIT">Paket Usaha Bibit</option>
                    <option value="SAPI">Sapi Pilihan</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              )}

              {/* Input Pencarian Ramping */}
              <div className="relative flex-1 sm:w-56">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari jenis atau ear-tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#15803d]"
                />
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION TERNAK HIDUP: DISPLAY BERSIH, RAPI & KLIK-UNTUK-DETAIL  */}
          {/* ============================================================== */}
          {(activeTab === "ALL" || activeTab === "LIVESTOCK") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Ternak Hidup Siap Kirim
                  </h2>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    • Sentra Peternakan Samigaluh, Kulon Progo
                  </span>
                </div>
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold">
                  {filteredLivestock.length} Pilihan Tersedia
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredLivestock.map((item) => {
                  const isSoldOut = item.available_qty <= 0;
                  const chosenQty = getQty(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => openDetail("LIVESTOCK", item)}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#15803d]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                      {/* Foto Hewan Ternak dengan Rasio Indah */}
                      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                        <img
                          src={item.photo_main_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Badges di Foto */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider backdrop-blur-xs shadow-xs ${
                              item.gender === "BETINA"
                                ? "bg-purple-100 text-purple-900 border border-purple-200"
                                : item.gender === "JANTAN"
                                ? "bg-emerald-100 text-emerald-900 border border-emerald-200"
                                : "bg-slate-900 text-white"
                            }`}
                          >
                            {item.gender === "BETINA"
                              ? "♀ BETINA"
                              : item.gender === "JANTAN"
                              ? "♂ JANTAN"
                              : "PAKET BIBIT"}
                          </span>
                          {item.inventory_mode === "INDIVIDUAL_QR" ? (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#15803d] text-white inline-flex items-center gap-1 shadow-xs">
                              <QrCode className="w-3.5 h-3.5" />{" "}
                              {item.eartag_code}
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-white backdrop-blur-xs">
                              Stok Kuantitas
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-3 left-3 pointer-events-none">
                          {item.gallery_urls && item.gallery_urls.length > 1 && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-xs text-white inline-flex items-center gap-1 shadow-xs">
                              <Camera className="w-3 h-3" />
                              {item.gallery_urls.length} Foto
                            </span>
                          )}
                        </div>

                        <div className="absolute bottom-3 right-3 pointer-events-none">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${
                              isSoldOut
                                ? "bg-red-600 text-white"
                                : "bg-white/95 text-[#15803d]"
                            }`}
                          >
                            {isSoldOut
                              ? "HABIS"
                              : `Tersedia: ${item.available_qty} Ekor`}
                          </span>
                        </div>

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md inline-flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-[#15803d]" />
                            Lihat Detail Spesifikasi
                          </span>
                        </div>
                      </div>

                      {/* Display Info Rapi & Simple (Tidak Penuh Sesak) */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                            <span>{item.breed}</span>
                            <span className="text-emerald-900 font-extrabold bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                              Berat: {item.weight_range_label}
                            </span>
                          </div>

                          <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug group-hover:text-[#15803d] transition-colors line-clamp-1">
                            {item.title}
                          </h3>

                          {/* 2 Parameter Fisik Utama & Higienitas */}
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 pt-1">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
                              📏 Tinggi: {item.shoulder_height_cm} cm
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                              <CheckCircle2 className="w-3 h-3 text-[#15803d]" />
                              {item.inventory_mode === "INDIVIDUAL_QR"
                                ? "SKKH Dokter Hewan"
                                : "Garansi Sehat & Bebas Cacat"}
                            </span>
                          </div>
                        </div>

                        {/* Footer Harga & CTA */}
                        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] text-slate-400 block font-medium">
                              {item.dp_price_rp
                                ? `Bisa DP 50%: ${formatRupiah(item.dp_price_rp)}`
                                : "Harga Resmi"}
                            </span>
                            <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                              {formatRupiah(item.sell_price_rp)}
                            </div>
                          </div>

                          <div
                            className="flex items-center gap-1.5 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => openDetail("LIVESTOCK", item)}
                              className="px-3 py-2 rounded-full border border-slate-200 hover:border-[#15803d] hover:bg-emerald-50 text-slate-700 hover:text-[#15803d] text-xs font-bold transition flex items-center gap-1"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Detail</span>
                            </button>

                            <Link
                              href={
                                isSoldOut
                                  ? "#"
                                  : `/checkout?type=LIVESTOCK&id=${item.id}&qty=${chosenQty}`
                              }
                              className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                                isSoldOut
                                  ? "bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
                                  : "bg-[#15803d] hover:bg-[#14532d] text-white shadow-2xs"
                              }`}
                            >
                              <span>{isSoldOut ? "Habis" : "Pesan"}</span>
                              {!isSoldOut && (
                                <ArrowRight className="w-3.5 h-3.5" />
                              )}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION SUSU KAMBING BPOM: BOX SERAGAM & RAPI                   */}
          {/* ============================================================== */}
          {(activeTab === "ALL" || activeTab === "SUSU") && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Susu Kambing Bubuk Murni BPOM RI
                  </h2>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    • Kemasan Pouch Higienis 250g
                  </span>
                </div>
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold">
                  {filteredProducts.length} Varian Resmi
                </span>
              </div>

              {/* GRID 3-KOLOM IDENTIK/SERAGAM DENGAN BOX TERNAK */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((prod) => {
                  const chosenQty = getQty(prod.id);
                  const isSoldOut = prod.stock_qty <= 0;

                  return (
                    <div
                      key={prod.id}
                      onClick={() => openDetail("PRODUCT", prod)}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#15803d]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                      {/* Foto Produk Susu Kemasan */}
                      <div className="relative aspect-4/3 bg-slate-50 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
                        <img
                          src={prod.image_url || "/images/IMG-20240226-WA0002.jpg"}
                          alt={prod.name}
                          className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#15803d] text-[10px] font-extrabold shadow-2xs">
                            {prod.bpom_number}
                          </span>
                        </div>
                        {prod.badge && (
                          <div className="absolute top-3 right-3 pointer-events-none">
                            <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold shadow-2xs">
                              {prod.badge}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 pointer-events-none">
                          {prod.gallery_urls && prod.gallery_urls.length > 1 && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-xs text-white inline-flex items-center gap-1 shadow-xs">
                              <Camera className="w-3 h-3" />
                              {prod.gallery_urls.length} Foto
                            </span>
                          )}
                        </div>

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md inline-flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-[#15803d]" />
                            Lihat Manfaat &amp; Komposisi
                          </span>
                        </div>
                      </div>

                      {/* Detail Deskripsi Rapi */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                            <span>Susu Bubuk Murni 250g</span>
                            <span className="text-[#15803d] font-bold">
                              Stok: {prod.stock_qty} Pack
                            </span>
                          </div>

                          <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug group-hover:text-[#15803d] transition-colors line-clamp-1">
                            {prod.name}
                          </h3>

                          {/* 2 Highlight Mutu */}
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 pt-1">
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                              <CheckCircle2 className="w-3 h-3 text-[#15803d]" />
                              BPOM MD &amp; Halal MUI
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                              <Sparkles className="w-3 h-3 text-amber-600" />
                              Tidak Berbau Prengus
                            </span>
                          </div>
                        </div>

                        {/* Footer Harga & CTA Identik */}
                        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] text-slate-400 line-through block font-medium leading-none">
                              {formatRupiah(prod.strike_price_rp)}
                            </span>
                            <div className="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                              {formatRupiah(prod.sell_price_rp)}
                            </div>
                          </div>

                          <div
                            className="flex items-center gap-1.5 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => openDetail("PRODUCT", prod)}
                              className="px-3 py-2 rounded-full border border-slate-200 hover:border-[#15803d] hover:bg-emerald-50 text-slate-700 hover:text-[#15803d] text-xs font-bold transition flex items-center gap-1"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Detail</span>
                            </button>

                            <Link
                              href={
                                isSoldOut
                                  ? "#"
                                  : `/checkout?type=PRODUCT&id=${prod.id}&qty=${chosenQty}`
                              }
                              className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                                isSoldOut
                                  ? "bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
                                  : "bg-[#15803d] hover:bg-[#14532d] text-white shadow-2xs"
                              }`}
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>{isSoldOut ? "Habis" : "Beli"}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ================================================================= */}
      {/* MODAL POP-UP DETAIL PRODUK TERPADU & MEWAH                        */}
      {/* ================================================================= */}
      {selectedDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedDetail(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl sm:rounded-4xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Header Modal Sticky dengan Tombol Close (X) */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Detail Spesifikasi Lengkap
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-extrabold text-[#15803d]">
                  CV Joglo Makmur Perkasa
                </span>
              </div>
              <button
                onClick={() => setSelectedDetail(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition cursor-pointer"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Konten Modal: Grid 2 Kolom (Foto Kiri + Spek Kanan) */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              {/* KOLOM KIRI: Galeri Foto Spesifik & Jaminan Resmi */}
              <div className="md:col-span-5 space-y-4">
                {(() => {
                  const rawPhotos =
                    selectedDetail.type === "LIVESTOCK"
                      ? selectedDetail.item.gallery_urls &&
                        selectedDetail.item.gallery_urls.length > 0
                        ? selectedDetail.item.gallery_urls
                        : [selectedDetail.item.photo_main_url]
                      : selectedDetail.item.gallery_urls &&
                        selectedDetail.item.gallery_urls.length > 0
                      ? selectedDetail.item.gallery_urls
                      : [
                          selectedDetail.item.image_url ||
                            "/images/IMG-20240226-WA0002.jpg",
                        ];

                  const currentPhotoUrl =
                    rawPhotos[activePhotoIndex] || rawPhotos[0];

                  return (
                    <div className="space-y-2.5">
                      {/* Foto Utama dengan Efek Mewah */}
                      <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 relative aspect-4/3 flex items-center justify-center group/img">
                        <img
                          src={currentPhotoUrl}
                          alt={
                            selectedDetail.type === "LIVESTOCK"
                              ? selectedDetail.item.title
                              : selectedDetail.item.name
                          }
                          className={`w-full h-full transition-all duration-300 ${
                            selectedDetail.type === "LIVESTOCK"
                              ? "object-cover"
                              : "object-contain p-4 drop-shadow-sm"
                          }`}
                        />

                        {/* Badge Ear-Tag di Foto jika PE Super */}
                        {selectedDetail.type === "LIVESTOCK" &&
                          selectedDetail.item.inventory_mode ===
                            "INDIVIDUAL_QR" && (
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#15803d] text-white inline-flex items-center gap-1.5 shadow-md">
                                <QrCode className="w-3.5 h-3.5" />{" "}
                                {selectedDetail.item.eartag_code}
                              </span>
                            </div>
                          )}

                        {/* Badge Counter Foto jika multi-foto */}
                        {rawPhotos.length > 1 && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-xs text-white inline-flex items-center gap-1 shadow-sm">
                              <Camera className="w-3 h-3" />
                              {activePhotoIndex + 1} / {rawPhotos.length} Foto
                            </span>
                          </div>
                        )}

                        {/* Tombol Panah Navigasi Kiri Kanan jika multi-foto */}
                        {rawPhotos.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActivePhotoIndex((prev) =>
                                  prev > 0 ? prev - 1 : rawPhotos.length - 1
                                );
                              }}
                              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition opacity-80 sm:opacity-0 group-hover/img:opacity-100 cursor-pointer"
                              title="Foto Sebelumnya"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActivePhotoIndex((prev) =>
                                  prev < rawPhotos.length - 1 ? prev + 1 : 0
                                );
                              }}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition opacity-80 sm:opacity-0 group-hover/img:opacity-100 cursor-pointer"
                              title="Foto Selanjutnya"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnail Strip Gallery (Jika lebih dari 1 foto) */}
                      {rawPhotos.length > 1 && (
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
                          {rawPhotos.map((url, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActivePhotoIndex(idx)}
                              className={`relative w-16 h-14 sm:w-18 sm:h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                                activePhotoIndex === idx
                                  ? "border-[#15803d] ring-2 ring-emerald-500/30 scale-102"
                                  : "border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100"
                              }`}
                              title={`Lihat sudut foto ${idx + 1}`}
                            >
                              <img
                                src={url}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`w-full h-full ${
                                  selectedDetail.type === "LIVESTOCK"
                                    ? "object-cover"
                                    : "object-contain p-1"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Box 4 Jaminan Resmi CV Joglo Makmur Perkasa */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="text-xs font-bold text-slate-900 block">
                    Jaminan Layanan Kami:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Gratis Pengantaran Area D.I. Yogyakarta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Garansi Ternak Sehat &amp; Ganti Baru Saat Kirim</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>Gratis Biaya Perawatan s/d Hari-H Qurban</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                      <span>100% Sesuai Syariat (Cukup Umur &amp; Poel)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* KOLOM KANAN: Data Spesifik & Form Pemesanan */}
              <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Kategori & Judul */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 text-slate-800">
                        {selectedDetail.type === "LIVESTOCK"
                          ? selectedDetail.item.category
                          : "SUSU KAMBING BPOM"}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
                        {selectedDetail.type === "LIVESTOCK"
                          ? `Tersedia ${selectedDetail.item.available_qty} Ekor`
                          : `Stok ${selectedDetail.item.stock_qty} Box`}
                      </span>
                    </div>

                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {selectedDetail.type === "LIVESTOCK"
                        ? selectedDetail.item.title
                        : selectedDetail.item.name}
                    </h2>
                  </div>

                  {/* Harga & Opsi DP */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">
                        Harga Resmi Terbuka:
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-[#15803d] tracking-tight">
                        {formatRupiah(selectedDetail.item.sell_price_rp)}
                      </div>
                    </div>
                    {selectedDetail.type === "LIVESTOCK" &&
                      selectedDetail.item.dp_price_rp && (
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full block">
                            Bisa DP 50%
                          </span>
                          <span className="text-xs font-bold text-slate-700 mt-1 block">
                            {formatRupiah(selectedDetail.item.dp_price_rp)}
                          </span>
                        </div>
                      )}
                    {selectedDetail.type === "PRODUCT" &&
                      selectedDetail.item.strike_price_rp && (
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 line-through block">
                            {formatRupiah(selectedDetail.item.strike_price_rp)}
                          </span>
                          <span className="text-xs font-extrabold text-red-600">
                            Hemat Spesial
                          </span>
                        </div>
                      )}
                  </div>

                  {/* SPESIFIKASI DETAIL SESUAI TIPE */}
                  {selectedDetail.type === "LIVESTOCK" ? (
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                        Rincian Fisik &amp; Medis Hewan
                      </h4>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Ras / Jenis
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block">
                            {selectedDetail.item.breed}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Jenis Kelamin
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block">
                            {selectedDetail.item.gender}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Bobot Timbangan
                          </span>
                          <span className="font-bold text-emerald-800 mt-0.5 block">
                            {selectedDetail.item.weight_range_label ||
                              `${selectedDetail.item.weight_kg} Kg`}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Tingkat Usia / Poel
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block">
                            {selectedDetail.item.age_poel || "Poel 1 (Sah Syariat)"}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Tinggi Gumba &amp; Telinga
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block">
                            {selectedDetail.item.shoulder_height_cm || 72} cm /{" "}
                            {selectedDetail.item.ear_length_cm || 26} cm
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Kandang Asal
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block line-clamp-1">
                            {selectedDetail.item.partner_farm_name}
                          </span>
                        </div>
                      </div>

                      {selectedDetail.item.inventory_mode === "INDIVIDUAL_QR" &&
                      selectedDetail.item.vet_name ? (
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                          <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                            🩺 Cek Medis Veteriner &amp; SKKH Resmi:
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">
                            {selectedDetail.item.vaccine_notes}{" "}
                            (Dokter Pengawas:{" "}
                            <span className="font-bold text-[#15803d]">
                              {selectedDetail.item.vet_name}
                            </span>
                            )
                          </p>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                          <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                            Kondisi Fisik &amp; Jaminan Kandang:
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">
                            {selectedDetail.item.vaccine_notes ||
                              "Ternak dipelihara dengan pakan bernutrisi, kondisi aktif, lincah, dan nafsu makan baik. Garansi bebas cacat fisik."}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium">
                            💡 Layanan pengurusan SKKH Dinas tersedia atas permintaan khusus (jika diperlukan untuk pengiriman luar daerah DIY atau pengadaan instansi).
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* SPESIFIKASI SUSU KAMBING BPOM */
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                        Komposisi &amp; Sertifikasi Mutu
                      </h4>

                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Izin Edar Resmi
                          </span>
                          <span className="font-bold text-emerald-800 mt-0.5 block">
                            {selectedDetail.item.bpom_number}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block font-medium text-[11px]">
                            Berat Bersih
                          </span>
                          <span className="font-bold text-slate-900 mt-0.5 block">
                            250 Gram (Kemasan Pouch Praktis)
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 block">
                          🥛 Khasiat &amp; Manfaat Alami:
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {selectedDetail.item.benefit_note}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                          <span>Peluang Keagenan &amp; Reseller</span>
                        </div>
                        <p className="text-[11px] text-amber-800">
                          Melayani pembelian grosir mulai 50 box dengan margin
                          keuntungan menarik serta materi promosi digital lengkap.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bagian Bawah: Quantity Selector & CTA Order */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      Tentukan Jumlah:
                    </span>
                    <div className="flex items-center gap-2 border border-slate-200 rounded-full p-1 bg-slate-50">
                      <button
                        onClick={() =>
                          setQty(
                            selectedDetail.item.id,
                            getQty(selectedDetail.item.id) - 1,
                            selectedDetail.type === "LIVESTOCK"
                              ? selectedDetail.item.available_qty
                              : selectedDetail.item.stock_qty
                          )
                        }
                        className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center transition shadow-2xs cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-black text-slate-900">
                        {getQty(selectedDetail.item.id)}
                      </span>
                      <button
                        onClick={() =>
                          setQty(
                            selectedDetail.item.id,
                            getQty(selectedDetail.item.id) + 1,
                            selectedDetail.type === "LIVESTOCK"
                              ? selectedDetail.item.available_qty
                              : selectedDetail.item.stock_qty
                          )
                        }
                        className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center transition shadow-2xs cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Tombol Aksi: Pesan Sekarang & Konsultasi WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={generateWhatsAppLink(
                        selectedDetail.item,
                        selectedDetail.type
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-full border border-slate-300 hover:border-[#25D366] hover:bg-emerald-50 text-slate-800 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Tanya via WhatsApp</span>
                    </a>

                    <Link
                      href={`/checkout?type=${selectedDetail.type}&id=${
                        selectedDetail.item.id
                      }&qty=${getQty(selectedDetail.item.id)}`}
                      className="px-6 py-3.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white text-xs font-extrabold transition shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Lanjut Pemesanan</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function KatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-slate-500">
          Memuat Katalog...
        </div>
      }
    >
      <KatalogContent />
    </Suspense>
  );
}
