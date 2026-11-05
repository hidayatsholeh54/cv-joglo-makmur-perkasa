"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Lock,
  QrCode,
  CreditCard,
  MessageCircle,
  HelpCircle,
  UserCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Query Params: ?type=LIVESTOCK&id=...&qty=1 or ?type=PRODUCT&id=...
  const typeParam = searchParams.get("type") || "LIVESTOCK";
  const idParam = searchParams.get("id") || "";
  const qtyParam = parseInt(searchParams.get("qty") || "1", 10);

  const currentUser = useAppStore((s) => s.currentUser);
  const users = useAppStore((s) => s.users);
  const livestockItems = useAppStore((s) => s.livestockItems);
  const products = useAppStore((s) => s.products);
  const switchDemoUser = useAppStore((s) => s.switchDemoUser);
  const loginWithGoogle = useAppStore((s) => s.loginWithGoogle);
  const createOrderInvoice = useAppStore((s) => s.createOrderInvoice);

  // Form State
  const [customerName, setCustomerName] = useState(currentUser?.full_name || "");
  const [customerWa, setCustomerWa] = useState(currentUser?.phone_wa || "");
  const [customerAddress, setCustomerAddress] = useState("Daerah Istimewa Yogyakarta");
  const [paymentScheme, setPaymentScheme] = useState("FULL_PAYMENT"); // "FULL_PAYMENT" | "DP_50_PERCENT"
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Quick Google Login modal state if guest
  const [googleEmail, setGoogleEmail] = useState("");
  const [googleName, setGoogleName] = useState("");
  const [prevUserId, setPrevUserId] = useState(currentUser?.id);

  // Sync form when currentUser changes
  if (currentUser && currentUser.id !== prevUserId) {
    setPrevUserId(currentUser.id);
    if (!customerName) setCustomerName(currentUser.full_name);
    if (!customerWa) setCustomerWa(currentUser.phone_wa);
  }

  // Find Target Item
  const isLivestock = typeParam === "LIVESTOCK";
  const item = isLivestock
    ? livestockItems.find((x) => x.id === idParam) || livestockItems[0]
    : products.find((x) => x.id === idParam) || products[1];

  const unitPrice = isLivestock ? item.sell_price_rp : item.sell_price_rp;
  const quantity = Math.max(1, qtyParam || 1);
  const subtotal = unitPrice * quantity;
  const isDp = paymentScheme === "DP_50_PERCENT" && isLivestock;
  const estimatedPay = isDp ? Math.round(subtotal * 0.5) : subtotal;

  const handleGoogleQuickLogin = (e) => {
    e.preventDefault();
    if (!googleEmail.trim()) return;
    loginWithGoogle({
      name: googleName.trim() || googleEmail.split("@")[0],
      email: googleEmail.trim(),
      whatsapp: customerWa || "081234567890",
    });
    setCustomerName(googleName.trim() || googleEmail.split("@")[0]);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!customerName.trim()) {
      setErrorMessage("Nama pemesan / shohibul qurban wajib diisi.");
      return;
    }

    if (!customerWa.trim()) {
      setErrorMessage("Nomor WhatsApp aktif wajib diisi untuk konfirmasi dan pengiriman invoice.");
      return;
    }

    setIsSubmitting(true);

    const result = createOrderInvoice({
      customer_name: customerName,
      customer_wa: customerWa,
      shipping_address: customerAddress,
      payment_scheme: paymentScheme,
      itemTypeOverride: isLivestock ? "LIVESTOCK" : "PRODUCT",
      itemIdOverride: item.id,
      quantityOverride: quantity,
    });

    if (!result.ok) {
      setErrorMessage(result.error);
      setIsSubmitting(false);
      return;
    }

    // Buat link pesan WhatsApp otomatis dengan rincian invoice resmi
    const originUrl = typeof window !== "undefined" ? window.location.origin : "https://joglomakmurperkasa.co.id";
    const waCheckoutText = encodeURIComponent(
      `Halo Admin CV Joglo Makmur Perkasa, saya baru saja membuat pesanan resmi:\n\n` +
      `• No. Invoice: ${result.invoice_code}\n` +
      `• Nama Pemesan: ${customerName}\n` +
      `• No. WhatsApp: ${customerWa}\n` +
      `• Pesanan: ${isLivestock ? item.title + (item.eartag_code ? ` (${item.eartag_code})` : "") : item.name}\n` +
      `• Jumlah: ${quantity} ${isLivestock ? "ekor" : "paket"}\n` +
      `• Skema: ${isDp ? "DP 50%" : "Lunas Full"}\n` +
      `• Tagihan Transfer: ${formatRupiah(result.order.amount_to_pay_rp)}\n\n` +
      `Link Invoice Resmi Saya: ${originUrl}/invoice/${result.invoice_code}\n\n` +
      `Mohon info rekening dan konfirmasi kandang transit Kulon Progo. Terima kasih.`
    );

    // Buka WhatsApp di tab baru secara otomatis
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/6285162581872?text=${waCheckoutText}`, "_blank");
    }

    // Arahkan halaman utama ke lembar Invoice resmi
    router.push(`/invoice/${result.invoice_code}`);
  };

  // WhatsApp Direct Order Draft link
  const waDraftText = encodeURIComponent(
    `Halo Admin CV Joglo Makmur Perkasa, saya tertarik memesan:\n\n` +
    `• Produk: ${isLivestock ? item.title + (item.eartag_code ? ` (${item.eartag_code})` : "") : item.name}\n` +
    `• Jumlah: ${quantity} ${isLivestock ? "ekor" : "paket"}\n` +
    `• Perkiraan Total: ${formatRupiah(subtotal)}\n` +
    `• Skema: ${isDp ? "DP 50%" : "Lunas Full"}\n\n` +
    `Mohon info ketersediaan dan panduan kandang transit Kulon Progo. Terima kasih.`
  );

  return (
    <div className="container-nusa space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/katalog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#15803d]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SISI KIRI: FORM DATA PEMESAN & METODE BAYAR */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15803d]">
                LANGKAH 01
              </span>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                Formulir Pemesanan Resmi
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Data akan tercatat pada invoice resmi CV Joglo Makmur Perkasa dengan masa hold 1 jam.
              </p>
            </div>

            {/* OPSI AUTO-FILL GOOGLE (OPSIONAL, TIDAK MEMAKSA PEMBELI) */}
            {!currentUser ? (
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white text-[#15803d] border border-emerald-200 flex items-center justify-center shrink-0 shadow-2xs">
                    <UserCheck className="w-4 h-4 text-[#15803d]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      Pernah belanja di sini? (Opsional)
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Masuk dengan Google untuk mengisi nama &amp; nomor WhatsApp otomatis.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <input
                    type="email"
                    placeholder="nama@gmail.com"
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#15803d] w-full sm:w-44"
                  />
                  <button
                    onClick={handleGoogleQuickLogin}
                    type="button"
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer shrink-0"
                  >
                    Auto-Fill
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#15803d] text-white flex items-center justify-center font-bold text-xs">
                    {currentUser.full_name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {currentUser.full_name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {currentUser.email} • Akun Terverifikasi
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#15803d] bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                  ✓ Auto-Fill Aktif
                </span>
              </div>
            )}

            {/* Error Message Box */}
            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Peringatan Sistem:</span>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* FORM INPUTS */}
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Pemesan / Shohibul Qurban
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Bpk. Ahmad Fauzi"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerWa}
                    onChange={(e) => setCustomerWa(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Alamat Pengiriman / Domisili
                </label>
                <textarea
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Kecamatan, Kabupaten / Kota (misal: Kasihan, Bantul, DIY)"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white transition"
                />
              </div>

              {/* SKEMA PEMBAYARAN KHUSUS TERNAK */}
              {isLivestock && (
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-700">
                    Pilihan Skema Pembayaran
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      onClick={() => setPaymentScheme("FULL_PAYMENT")}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 ${
                        paymentScheme === "FULL_PAYMENT"
                          ? "border-[#15803d] bg-emerald-50/50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_scheme"
                        checked={paymentScheme === "FULL_PAYMENT"}
                        onChange={() => setPaymentScheme("FULL_PAYMENT")}
                        className="mt-0.5 accent-[#15803d]"
                      />
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">
                          Pelunasan 100% (Lunas)
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Ternak langsung dikunci, bebas biaya rawat hingga hari H.
                        </div>
                      </div>
                    </label>

                    <label
                      onClick={() => setPaymentScheme("DP_50_PERCENT")}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-start gap-3 ${
                        paymentScheme === "DP_50_PERCENT"
                          ? "border-[#15803d] bg-emerald-50/50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_scheme"
                        checked={paymentScheme === "DP_50_PERCENT"}
                        onChange={() => setPaymentScheme("DP_50_PERCENT")}
                        className="mt-0.5 accent-[#15803d]"
                      />
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">
                          Uang Muka 50% (DP Ringan)
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          Booking ternak sah, pelunasan sisa 50% saat serah terima.
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-extrabold text-sm shadow-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>
                    {isSubmitting
                      ? "Menerbitkan Invoice & Menghubungkan ke WhatsApp..."
                      : `Buat Invoice & Lanjut ke WhatsApp (${formatRupiah(estimatedPay)})`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  ✅ Invoice resmi langsung terbit &amp; rincian pesanan otomatis terhubung ke WhatsApp Admin.
                </p>
              </div>
            </form>
          </div>

          {/* JEMBATAN WHATSAPP (JAWABAN REALISTIS UNTUK PEMBELI INDONESIA) */}
          <div className="rounded-[28px] p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center justify-center sm:justify-start gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> Lebih Nyaman Tanya WhatsApp?
              </span>
              <h4 className="text-xs font-bold text-slate-900">
                Punya Pertanyaan Khusus Terkait Tanduk, Bobot atau Pengiriman?
              </h4>
              <p className="text-[11px] text-slate-500">
                Kirim draf rincian pesanan ini langsung ke CS WhatsApp tanpa perlu transfer sekarang.
              </p>
            </div>
            <a
              href={`https://wa.me/6285162581872?text=${waDraftText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shrink-0 transition shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Chat CS via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* SISI KANAN: RINGKASAN PRODUK / TERNAK & TRANSPARANSI */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Ringkasan Pesanan
            </h3>

            {/* Item Card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-200">
                <img
                  src={isLivestock ? item.photo_main_url : item.image_url}
                  alt={item.title || item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                {isLivestock && item.eartag_code && (
                  <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-[#15803d] font-mono text-[10px] font-bold">
                    TAG: {item.eartag_code}
                  </span>
                )}
                <h4 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                  {item.title || item.name}
                </h4>
                <div className="text-xs text-slate-500">
                  {isLivestock
                    ? `${item.breed} • ${item.weight_range_label}`
                    : `${item.packaging_type} • ${item.net_weight_gram}g`}
                </div>
                <div className="text-xs font-bold text-[#15803d]">
                  {formatRupiah(unitPrice)} × {quantity}
                </div>
              </div>
            </div>

            {/* Kalkulasi Rincian */}
            <div className="space-y-2 text-xs border-t border-slate-100 pt-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal Produk</span>
                <span className="font-semibold text-slate-900">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Biaya Perawatan &amp; Pakan (Hingga Hari H)</span>
                <span className="font-semibold text-[#15803d]">GRATIS (Rp 0)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Jaminan Ternak Sehat</span>
                <span className="font-semibold text-[#15803d]">TERMASUK</span>
              </div>
              {isDp && (
                <div className="flex justify-between text-amber-700 bg-amber-50 p-2.5 rounded-xl font-bold">
                  <span>Sisa Pelunasan (Saat Serah Terima)</span>
                  <span>{formatRupiah(subtotal - estimatedPay)}</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-3 flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-extrabold text-slate-900 block">
                    Total Pembayaran Saat Ini
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {isDp ? "DP 50% + Kode Unik Otomatis" : "Lunas 100% + Kode Unik Otomatis"}
                  </span>
                </div>
                <span className="font-heading text-xl font-extrabold text-[#15803d]">
                  {formatRupiah(estimatedPay)}
                </span>
              </div>
            </div>

            {/* Garansi Amanah CV */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2 text-xs">
              <div className="font-bold text-[#15803d] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>3 Komitmen Keamanan CV Joglo Makmur Perkasa</span>
              </div>
              <ul className="space-y-1 text-slate-600 text-[11px]">
                <li>✓ Rekening resmi CV (BCA &amp; Mandiri) atas nama perusahaan.</li>
                <li>✓ Paspor Digital Ear-Tag diverifikasi dokter hewan medik veteriner.</li>
                <li>✓ Garansi ganti ternak jika hewan sakit/cacat sebelum pengiriman.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1 py-6 lg:py-8">
        <Suspense fallback={<div className="container-nusa py-20 text-center text-slate-400">Memuat Formulir Checkout...</div>}>
          <CheckoutContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
