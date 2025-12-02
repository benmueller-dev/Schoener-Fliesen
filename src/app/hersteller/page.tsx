import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import Image from "next/image";

export const metadata = {
  title: "Hersteller | Schöner Fliesen",
  description: "Unsere Partner – führende Marken für höchste Material- und Designqualität.",
};

const partners = [
  { name: "Villeroy & Boch", category: "Sanitär & Fliesen" },
  { name: "Grohe", category: "Armaturen" },
  { name: "Duravit", category: "Sanitärkeramik" },
  { name: "Hansgrohe", category: "Armaturen" },
  { name: "Geberit", category: "Sanitärtechnik" },
  { name: "Kermi", category: "Heizkörper & Duschen" },
  { name: "ATAG", category: "Heizsysteme" },
  { name: "Kaldewei", category: "Badewannen & Duschen" },
  { name: "Agrob Buchtal", category: "Fliesen" },
  { name: "Marazzi", category: "Fliesen" },
  { name: "Porcelanosa", category: "Fliesen" },
  { name: "Swarovski Lighting", category: "Beleuchtung" },
];

export default function HerstellerPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop"
              alt="Premium Materialien"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
                    Hersteller
                  </span>
                </span>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                  Unsere{" "}
                  <span className="gold-gradient">Partner</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Wir arbeiten mit führenden Marken für höchste Material- und Designqualität.
                  Entdecken Sie unsere Partnerhersteller.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <AnimateIn key={index} delay={index * 0.05}>
                  <div className="group p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/10 transition-colors">
                      <span className="text-2xl font-light text-white">{partner.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-white mb-1">{partner.name}</h3>
                    <p className="text-xs text-zinc-500">{partner.category}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                Qualität durch starke Partnerschaften
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Unsere langjährigen Partnerschaften mit renommierten Herstellern ermöglichen es uns,
                Ihnen stets die beste Qualität und neuesten Innovationen zu bieten.
                Von Premium-Armaturen über hochwertige Fliesen bis hin zu modernsten Heizsystemen –
                wir setzen auf bewährte Marken, denen wir vertrauen.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-2xl font-light text-white">30+</span>
                  <span className="text-sm text-zinc-400 ml-2">Partnerhersteller</span>
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-2xl font-light text-white">20+</span>
                  <span className="text-sm text-zinc-400 ml-2">Jahre Zusammenarbeit</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
