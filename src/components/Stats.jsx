import { siteConfig } from "@/data/content";

export default function Stats() {
  return (
    <section className="bg-[var(--color-joglo-dark)] py-12 text-white border-y border-emerald-950">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/30">
              <p className="text-3xl sm:text-4xl font-extrabold text-[var(--color-joglo-accent)] tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-emerald-100/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
