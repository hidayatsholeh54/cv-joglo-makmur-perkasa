import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white py-16 lg:py-24">
      {/* Background Accent Grid / Glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />

      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Teks Kiri */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-joglo-dark)] bg-emerald-100/80 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-[var(--color-joglo-primary)] animate-pulse" />
              Tender Rekanan Pemerintah & Swasta • Berbasis di D.I. Yogyakarta
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-joglo-dark)] tracking-tight leading-tight">
              Mitra Terpercaya Pengadaan Hewan Ternak &amp; Distribusi Antar-Pulau
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-gray-900 font-semibold">CV Joglo Makmur Perkasa</strong> berpengalaman dalam penyediaan bibit dan bakalan ternak berkualitas tinggi (Kambing, Domba, dan Sapi) dengan standar perawatan terpadu, jaminan kesehatan dokter hewan, dan kesiapan logistik lintas pulau se-Indonesia.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[var(--color-joglo-dark)] hover:bg-[var(--color-joglo-primary)] rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-200 text-center"
              >
                Konsultasi Pengadaan / Tender
              </a>
              <a
                href="#layanan"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition duration-200 text-center"
              >
                Lihat Spesifikasi &amp; Layanan
              </a>
            </div>

            {/* Ringkasan Sertifikasi / Trust Badges */}
            <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[var(--color-joglo-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Legalitas NIB Lengkap
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[var(--color-joglo-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Uji Lab Bebas PMK &amp; Antraks
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[var(--color-joglo-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Jaminan Kesehatan Dokter Hewan
              </span>
            </div>
          </div>

          {/* Visual Kanan - Card Profil Kapasitas */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[var(--color-joglo-dark)] p-7 sm:p-8 text-white shadow-2xl overflow-hidden border border-emerald-950">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-joglo-accent)] opacity-10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between pb-6 border-b border-emerald-800/60">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-joglo-accent)] font-semibold">Profil Singkat</span>
                  <h3 className="text-xl font-bold mt-0.5">CV JOGLO MAKMUR PERKASA</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-800/50 flex items-center justify-center text-[var(--color-joglo-accent)]">
                  ★
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="bg-emerald-900/50 p-4 rounded-xl border border-emerald-800/40">
                  <span className="text-xs text-emerald-300 font-medium">Spesialisasi Utama</span>
                  <p className="text-sm font-semibold text-white mt-1">
                    Pengadaan Kambing, Domba, dan Sapi skala tender kedinasan &amp; pengiriman antar-pulau.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-800/30">
                    <span className="text-gray-400 block">Titik Transit</span>
                    <strong className="text-white text-sm">Yogyakarta</strong>
                  </div>
                  <div className="bg-emerald-900/40 p-3 rounded-lg border border-emerald-800/30">
                    <span className="text-gray-400 block">Jangkauan</span>
                    <strong className="text-white text-sm">Seluruh Indonesia</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-200">
                <span>Perawatan Prima &amp; Animal Welfare Certified</span>
                <span className="font-semibold text-[var(--color-joglo-accent)]">Ready Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
