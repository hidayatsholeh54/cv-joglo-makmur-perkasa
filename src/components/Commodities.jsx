import { siteConfig } from "@/data/content";

export default function Commodities() {
  return (
    <section id="komoditas" className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest text-[var(--color-joglo-primary)] uppercase bg-emerald-100/70 px-3 py-1 rounded-full">
            Komoditas Ternak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-joglo-dark)] tracking-tight">
            Kambing, Domba, dan Sapi Berkualitas
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Hewan diseleksi dari peternak binaan di Jawa &amp; DIY, melalui tahapan pemeriksaan kesehatan terpadu, uji lab bebas penyakit, dan penimbangan akurat sesuai spesifikasi kontrak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.commodities.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 p-8 hover:border-[var(--color-joglo-primary)] transition-all bg-gradient-to-br from-white to-emerald-50/30"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-[var(--color-joglo-dark)] text-[var(--color-joglo-accent)] text-xs font-bold uppercase tracking-wider mb-4">
                Komoditas Unggulan
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <span className="text-xs font-semibold text-gray-500 block mb-1">Standarisasi &amp; Kualifikasi:</span>
                <span className="text-sm font-bold text-[var(--color-joglo-primary)]">{item.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
