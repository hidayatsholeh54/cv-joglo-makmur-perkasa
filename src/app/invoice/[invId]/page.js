"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  QrCode,
  Copy,
  Check,
  AlertTriangle,
  CheckCircle2,
  Upload,
  ArrowRight,
  MessageCircle,
  FileText,
  Building2,
  Calendar,
  XCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppStore, formatRupiah } from "@/store/useAppStore";

export default function InvoiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const rawInvId = decodeURIComponent(params?.invId || "").toUpperCase();

  const orders = useAppStore((s) => s.orders);
  const submitPaymentProof = useAppStore((s) => s.submitPaymentProof);
  const markOrderExpired = useAppStore((s) => s.markOrderExpired);

  const order = orders.find((o) => o.invoice_code.toUpperCase() === rawInvId);

  const isExpired = Boolean(order && order.payment_status === "EXPIRED");
  const [copiedAmount, setCopiedAmount] = useState(false);
  const [copiedBca, setCopiedBca] = useState(false);
  const [copiedMandiri, setCopiedMandiri] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "AMOUNT") {
      setCopiedAmount(true);
      setTimeout(() => setCopiedAmount(false), 2000);
    } else if (type === "BCA") {
      setCopiedBca(true);
      setTimeout(() => setCopiedBca(false), 2000);
    } else {
      setCopiedMandiri(true);
      setTimeout(() => setCopiedMandiri(false), 2000);
    }
  };

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 py-20">
          <div className="container-nusa max-w-xl text-center space-y-4 bg-white p-10 rounded-[32px] border border-slate-200">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
            <h1 className="font-heading text-2xl font-bold text-slate-900">
              Invoice &ldquo;{rawInvId}&rdquo; Tidak Ditemukan
            </h1>
            <p className="text-xs text-slate-500">
              Periksa kembali kode invoice Anda atau lihat daftar pesanan aktif di Member Area.
            </p>
            <Link
              href="/pesanan-saya"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] text-white text-xs font-bold"
            >
              <span>Buka Pesanan Saya</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isStatusUnpaid = order.payment_status === "UNPAID" && !isExpired;
  const isStatusWaiting = order.payment_status === "WAITING_VERIFICATION";
  const isStatusPaid = order.payment_status === "PAID_FULL" || order.payment_status === "DP_PAID";
  const isStatusExpired = order.payment_status === "EXPIRED" || isExpired;

  // WhatsApp prefilled confirmation
  const waConfirmText = encodeURIComponent(
    `Halo Keuangan CV Joglo Makmur Perkasa, saya telah mentransfer pembayaran:\n\n` +
    `• No Invoice: ${order.invoice_code}\n` +
    `• Pemesan: ${order.customer_name}\n` +
    `• Nominal Transfer: ${formatRupiah(order.amount_to_pay_rp)}\n` +
    `• Produk: ${order.item_title} (Qty: ${order.quantity})\n\n` +
    `Mohon dicek dan diverifikasi. Terima kasih.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1 py-6 lg:py-8">
        <div className="container-nusa space-y-6">
          {/* HEADER STATUS INVOICE */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {order.invoice_code}
                </span>

                {isStatusUnpaid && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-extrabold border border-amber-200">
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                    <span>MENUNGGU PEMBAYARAN</span>
                  </span>
                )}
                {isStatusWaiting && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold border border-blue-200">
                    <Clock className="w-3.5 h-3.5" />
                    <span>BUKTI DIKIRIM (VERIFIKASI ADMIN)</span>
                  </span>
                )}
                {isStatusPaid && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#15803d] text-xs font-extrabold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>LUNAS TERVERIFIKASI</span>
                  </span>
                )}
                {isStatusExpired && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-extrabold border border-red-200">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>KADALUARSA (LEWAT 1 JAM)</span>
                  </span>
                )}
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Invoice Resmi CV Joglo Makmur Perkasa
              </h1>
              <p className="text-xs text-slate-500">
                Diterbitkan pada {new Date(order.created_at).toLocaleString("id-ID")} • Pemesan: {order.customer_name} ({order.customer_wa})
              </p>
            </div>

            {/* STATUS INVOICE RESMI (TENANG & ELEGAN) */}
            {isStatusUnpaid && (
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-center shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803d] block">
                  STATUS INVOICE
                </span>
                <div className="font-heading text-lg font-bold text-slate-900 mt-0.5">
                  Menunggu Pembayaran
                </div>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Konfirmasi mudah via WhatsApp
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* SISI KIRI: NOMINAL TRANSFER & INSTRUKSI PEMBAYARAN */}
            <div className="lg:col-span-7 space-y-6">
              {/* Box Nominal Transfer Presisi Unik */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Total Yang Harus Ditransfer
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-[#15803d] font-bold px-2.5 py-0.5 rounded-full">
                    Termasuk 3 Digit Kode Unik
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Nominal Tepat (Wajib sama persis hingga 3 digit terakhir)
                    </span>
                    <span className="font-heading text-3xl font-extrabold text-[#15803d]">
                      {formatRupiah(order.amount_to_pay_rp)}
                    </span>
                  </div>
                  <button
                    onClick={() => copyText(String(order.amount_to_pay_rp), "AMOUNT")}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-[#15803d] text-xs font-bold text-slate-700 hover:text-[#15803d] transition cursor-pointer shadow-2xs"
                  >
                    {copiedAmount ? <Check className="w-4 h-4 text-[#15803d]" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedAmount ? "Tersalin!" : "Salin Nominal"}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  💡 3 digit terakhir merupakan kode verifikasi otomatis sistem keuangan kami agar pembayaran langsung terdeteksi tanpa tertukar dengan pesanan lain.
                </p>
              </div>

              {/* Box Pilihan Saluran Bayar Resmi */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Saluran Rekening Resmi Perusahaan
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Rekening BCA */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">
                        BANK BCA
                      </span>
                      <button
                        onClick={() => copyText("8020991823", "BCA")}
                        className="text-[11px] font-bold text-[#15803d] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedBca ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedBca ? "Disalin" : "Salin Rekening"}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-extrabold text-slate-900">
                      802-099-1823
                    </div>
                    <div className="text-[11px] text-slate-500">
                      a.n. <strong className="text-slate-700">CV JOGLO MAKMUR PERKASA</strong>
                    </div>
                  </div>

                  {/* Rekening Mandiri */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md">
                        BANK MANDIRI
                      </span>
                      <button
                        onClick={() => copyText("1370019283741", "MANDIRI")}
                        className="text-[11px] font-bold text-[#15803d] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedMandiri ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedMandiri ? "Disalin" : "Salin Rekening"}</span>
                      </button>
                    </div>
                    <div className="font-mono text-base font-extrabold text-slate-900">
                      137-00-1928374-1
                    </div>
                    <div className="text-[11px] text-slate-500">
                      a.n. <strong className="text-slate-700">CV JOGLO MAKMUR PERKASA</strong>
                    </div>
                  </div>
                </div>

                {/* QRIS Statis CV */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-24 h-24 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 shrink-0">
                    <QrCode className="w-full h-full text-slate-800" />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                      QRIS RESMI (GOPAY, OVO, SHOPEEPAY, BCA MOBILE)
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      Scan QRIS CV Joglo Makmur Perkasa
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Cukup buka m-banking atau e-wallet Anda, arahkan kamera, dan pastikan penerima tertulis <strong>CV JOGLO MAKMUR PERKASA</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* UPLOAD BUKTI TRANSFER & KONFIRMASI WA */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Konfirmasi Pembayaran
                </h3>

                {isStatusUnpaid && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Setelah melakukan transfer via ATM / m-Banking, silakan kirimkan foto struk pembayaran Anda langsung ke WhatsApp Admin resmi CV Joglo Makmur Perkasa. Tim kami akan segera memverifikasi pesanan Anda.
                    </p>
                    <div>
                      <a
                        href={`https://wa.me/6285162581872?text=${waConfirmText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                        <span>Kirim Bukti Transfer via WhatsApp Admin</span>
                      </a>
                    </div>
                  </div>
                )}

                {isStatusWaiting && (
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs space-y-2">
                    <div className="font-bold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>Bukti Pembayaran Sedang Diverifikasi</span>
                    </div>
                    <p className="text-blue-800 text-[11px]">
                      Tim admin kami sedang mencocokkan mutasi rekening. Hewan Anda tetap aman dan dikunci. Anda juga bisa mengingatkan CS via WhatsApp.
                    </p>
                    <a
                      href={`https://wa.me/6285162581872?text=${waConfirmText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline"
                    >
                      <span>Kirim pesan pengingat ke CS WA →</span>
                    </a>
                  </div>
                )}

                {isStatusPaid && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-3">
                    <div className="font-bold flex items-center gap-1.5 text-[#15803d]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Pembayaran Sah &amp; Terverifikasi 100%!</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Alhamdulillah, pesanan Anda telah resmi tercatat. Hewan sedang dipelihara di kandang transit Kulon Progo / dipersiapkan untuk pengiriman.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Link
                        href="/pesanan-saya"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#15803d] text-white font-bold text-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Lihat di Member Area &amp; Sertifikat</span>
                      </Link>
                    </div>
                  </div>
                )}

                {isStatusExpired && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-xs space-y-2">
                    <div className="font-bold flex items-center gap-1.5 text-red-700">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Invoice Ini Telah Hangus</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Waktu pembayaran 1 jam telah berakhir sehingga stok hewan otomatis dikembalikan ke katalog publik. Anda dapat membuat pesanan baru kapan saja.
                    </p>
                    <Link
                      href="/katalog"
                      className="inline-flex items-center gap-1.5 text-red-700 font-bold hover:underline"
                    >
                      <span>Buka Katalog untuk Pesan Ulang →</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* SISI KANAN: RINCIAN PRODUK & ALAMAT */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Rincian Hewan / Produk Dipesan
                </h3>

                <div className="space-y-3">
                  <div className="font-heading text-lg font-bold text-slate-900">
                    {order.item_title}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-400 block text-[10px]">Kategori</span>
                      <strong className="text-slate-800">{order.order_category}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-400 block text-[10px]">Jumlah</span>
                      <strong className="text-slate-800">{order.quantity} Ekor/Paket</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-400 block text-[10px]">Skema Bayar</span>
                      <strong className="text-[#15803d]">
                        {order.payment_scheme === "DP_50_PERCENT" ? "Uang Muka (DP 50%)" : "Lunas 100%"}
                      </strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50">
                      <span className="text-slate-400 block text-[10px]">Total Nilai Pesanan</span>
                      <strong className="text-slate-800">{formatRupiah(order.total_amount_rp)}</strong>
                    </div>
                  </div>
                </div>

                {/* Alamat Pengiriman */}
                <div className="border-t border-slate-100 pt-4 space-y-1.5 text-xs">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase tracking-wider">
                    Tujuan Pengiriman / Serah Terima:
                  </span>
                  <div className="p-3 rounded-xl bg-slate-50 text-slate-700 font-medium">
                    {order.shipping_address}
                  </div>
                </div>

                {/* Kontak Layanan Cepat CV */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="font-bold text-slate-900">Butuh Bantuan Layanan?</div>
                  <p className="text-[11px]">
                    Hubungi Customer Service CV Joglo Makmur Perkasa di <strong>0851-6258-1872</strong> (Kulon Progo, DIY).
                  </p>
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
