import { Sparkles, GraduationCap, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Products() {
  return (
    <section id="produk" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[var(--color-joglo-primary)] uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            Inovasi Hilirisasi Peternakan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-joglo-dark)] tracking-tight">
            Produk Olahan Susu Kambing &amp; Edukasi
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Tidak hanya memasok ternak hidup, kami mengembangkan produk turunan bernilai tambah tinggi sekaligus menjadi wahana transfer pengetahuan bagi universitas dan instansi dinas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                  {idx === 1 ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Obyek Studi Riset &amp; Dinas
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Produk Siap Edar
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>

                <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                    Keunggulan &amp; Nilai Tambah:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-joglo-primary)]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {idx === 0 ? "Bisa dipesan satuan / partai besar" : "Menerima jadwal kunjungan dinas & studi"}
                </span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-xs font-bold text-white bg-[var(--color-joglo-dark)] hover:bg-[var(--color-joglo-primary)] rounded-lg shadow-sm transition"
                >
                  {idx === 0 ? "Pesan Susu Bubuk" : "Jadwalkan Kunjungan"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
