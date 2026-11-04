import { siteConfig } from "@/data/content";

export default function Workflow() {
  return (
    <section id="distribusi" className="py-20 bg-[var(--color-joglo-dark)] text-white relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[var(--color-joglo-accent)] uppercase bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            SOP Pemeriksaan &amp; Logistik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Alur Pengadaan &amp; Pengiriman Lintas Pulau
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Menjamin keamanan hukum, kepatuhan dinas peternakan resmi, serta kesehatan fisik hewan sampai ke tangan penerima manfaat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {siteConfig.workflow.map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-950/60 border border-emerald-800/40 rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-[var(--color-joglo-accent)] block mb-3 opacity-90">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
