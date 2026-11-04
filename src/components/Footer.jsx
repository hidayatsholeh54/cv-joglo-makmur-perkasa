import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const gmapsUrl =
    "https://www.google.com/maps/place/JOGLO+MAKMUR+PERKASA,+Nglinggo+Barat,+Pagerharjo,+Samigaluh,+Kulon+Progo+Regency,+Special+Region+of+Yogyakarta+55673/data=!4m2!3m1!1s0x2e7aed407ff89cd3:0x9c06964f917a27ce!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjQzLjQYACDXggMq2wEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsMTAwNzk0NTA4LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDEwMDgwODY1OSw5NDI3NTE2OCw5NDI3OTYxOSwxMDA4MjUwMjUsMTAwODIwMjM3LDEwMDgyMjQ5NCwxMDA4Mjc5NzUsMTAwODM4MzU5LDEyMTgxNjQ2MSwxMDA4NDc0NDVCAklE&skid=4a740609-ed6f-436b-be16-185e864ea906&g_st=aw";

  return (
    <footer
      id="kontak"
      className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-10"
    >
      <div className="container-nusa">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Kolom 1-2: Identitas Brand & Alamat Resmi */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo href="/" />
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Ekosistem peternakan terpadu, penyedia hewan Qurban, Aqiqah,
              Layanan Pengadaan &amp; Proyek, serta Susu Kambing Bubuk Murni
              berizin BPOM RI dari Yogyakarta.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-500 pt-1">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-slate-600 hover:text-[#15803d] transition group"
              >
                <MapPin className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Nglinggo Barat, Pagerharjo, Samigaluh, Kabupaten Kulon Progo,
                  D.I. Yogyakarta 55673
                </span>
              </a>
              <a
                href="https://wa.me/6285162581872?text=Halo%20Admin%20CV%20Joglo%20Makmur%20Perkasa%2C%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-[#15803d] transition"
              >
                <Phone className="w-4 h-4 text-[#15803d] shrink-0" />
                <span className="font-semibold text-slate-800">
                  +62 851-6258-1872 (WhatsApp Resmi)
                </span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#15803d] shrink-0" />
                <span>info@joglomakmurperkasa.co.id</span>
              </div>
            </div>
          </div>

          {/* Kolom 3: Divisi & Produk */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Divisi &amp; Produk
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/katalog"
                  className="hover:text-[#15803d] transition"
                >
                  Kambing Qurban &amp; Aqiqah
                </Link>
              </li>
              <li>
                <Link
                  href="/katalog?tab=susu"
                  className="hover:text-[#15803d] transition"
                >
                  Susu Kambing Bubuk BPOM
                </Link>
              </li>
              <li>
                <Link
                  href="/pengadaan"
                  className="hover:text-[#15803d] transition font-semibold text-emerald-700"
                >
                  Layanan Pengadaan &amp; Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-[#15803d] transition"
                >
                  Kemitraan Peternak Plasma
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-[#15803d] transition"
                >
                  Pusat Kontak &amp; Alamat
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Layanan & Informasi */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Layanan &amp; Bantuan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-[#15803d] transition"
                >
                  Cek Paspor Digital QR
                </Link>
              </li>
              <li>
                <Link
                  href="/pesanan-saya"
                  className="hover:text-[#15803d] transition"
                >
                  Pelacakan Status Pesanan
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#15803d] transition"
                >
                  Pertanyaan Pembeli (FAQ)
                </Link>
              </li>
              <li>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#15803d] transition"
                >
                  <span>Petunjuk Arah Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Legalitas & Kredibilitas */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Legalitas &amp; Dokumen
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>NIB Berbasis Risiko OSS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>Terdaftar SIKaP / INAPROC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                <span>Izin Edar BPOM RI MD</span>
              </li>
              <li className="pt-1">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#15803d] hover:underline"
                >
                  <span>Lihat Rekening Terverifikasi</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta & Pintu Masuk Staf Halus */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CV Joglo Makmur Perkasa. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              SKKH Dinas Peternakan • Susu BPOM RI • Yogyakarta
            </span>
            <Link
              href="/admin"
              className="text-slate-300 hover:text-slate-500 transition text-[11px]"
              title="Akses Internal Staf"
            >
              Portal Staf
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
