import Link from "next/link";
import { ArrowRight, FileCheck2, Building2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[var(--color-joglo-primary)] uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            Unit Usaha &amp; Layanan Terintegrasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-joglo-dark)] tracking-tight">
            Pilar Utama CV Joglo Makmur Perkasa
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Menghubungkan rantai pasok peternakan hulu ke hilir: mulai dari pengadaan skala tender nasional, fasilitas pembibitan, program qurban, hingga riset hilirisasi susu kambing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {siteConfig.mainServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-50 text-[var(--color-joglo-primary)] mb-4">
                  {srv.badge}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-joglo-primary)] transition-colors leading-snug">
                  {srv.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <ul className="space-y-2 text-xs text-gray-600 mb-6">
                  {srv.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--color-joglo-primary)] font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                {srv.hasDetailPage ? (
                  <Link
                    href={srv.detailUrl}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold text-white bg-[var(--color-joglo-dark)] hover:bg-[var(--color-joglo-primary)] rounded-lg shadow-sm transition group"
                  >
                    <span>Lihat Bukti &amp; Portofolio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--color-joglo-accent)]" />
                  </Link>
                ) : (
                  <a
                    href="#kontak"
                    className="inline-flex items-center justify-between w-full px-4 py-2 text-xs font-medium text-gray-600 hover:text-[var(--color-joglo-primary)] transition"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
