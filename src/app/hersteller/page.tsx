import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Hersteller & Partner | Schöner Fliesen Sankt Augustin",
  description: "Unsere Partner: Villeroy & Boch, Grohe, Hansgrohe, Kermi, Viessmann & mehr. 30+ Premium-Hersteller für höchste Material- und Designqualität.",
  keywords: "Villeroy Boch Händler, Grohe Fachpartner, Hansgrohe Sankt Augustin, Kermi Heizung, Premium Fliesen Hersteller",
  openGraph: {
    title: "Hersteller & Partner | Schöner Fliesen",
    description: "30+ Premium-Hersteller für höchste Material- und Designqualität",
    type: "website",
  },
};

// Heizungs-Partner (erste Reihe wie im Screenshot)
const heatingPartners = [
  { name: "Kermi", src: "/Logos/kermi.png" },
  { name: "Viessmann", src: "/Logos/viessmann_logo.jpg" },
];

// Weitere Material-/Hersteller-Logos (nur vorhandene Dateien referenziert)
const baseMaterialPartners: { name: string; src: string }[] = [
  { name: "Avenarius", src: "/Logos/neu/avenarius.png" },
  { name: "Föhrer Panno", src: "/Logos/neu/fohrer panno.png" },
  { name: "Laguna", src: "/Logos/neu/laguna.png" },
  { name: "MR Spanndecken", src: "/Logos/neu/mrspanndecken.png" },
  { name: "Primabad", src: "/Logos/neu/primabad.png" },
  { name: "Repabad", src: "/Logos/neu/repabad.png" },
  { name: "Thebalux", src: "/Logos/neu/thebalux.png" },
  { name: "Villeroy & Boch", src: "/Logos/villeroy-und-boch.jpg" },
  { name: "Dornbracht", src: "/Logos/dornbracht.jpg" },
  { name: "Kaldewei", src: "/Logos/kaldewei.jpg" },
  { name: "Hansgrohe", src: "/Logos/hans-grohe.jpg" },
  { name: "Hoesch", src: "/Logos/hoesch.jpg" },
  { name: "Grohe", src: "/Logos/grohe.jpg" },
  { name: "Geberit", src: "/Logos/geberit.jpg" },
  { name: "Viega", src: "/Logos/viega.jpg" },
  { name: "Zehnder", src: "/Logos/zehnder.jpg" },
  { name: "Uponor", src: "/Logos/uponor.jpg" },
  { name: "Swarovski", src: "/Logos/swarovski.jpg" },
  { name: "Steinberg", src: "/Logos/steinberg.jpg" },
  { name: "burgbad", src: "/Logos/burgbad.jpg" },
  { name: "EMCO", src: "/Logos/emco.jpg" },
  { name: "HSK", src: "/Logos/hsk-badexperten.jpg" },
  { name: "Keuco", src: "/Logos/keuco.jpg" },
  { name: "Artweger", src: "/Logos/artweger.jpg" },
  { name: "Extenzo", src: "/Logos/extenzo-spanndecken.jpg" },
  { name: "Smedbo", src: "/Logos/smedbo.jpg" },
  { name: "Gira", src: "/Logos/gira.jpg" },
  { name: "Brumberg", src: "/Logos/brumberg.jpg" },
  { name: "Nordholm", src: "/Logos/nordholm.jpg" },
  { name: "Weber Deitermann", src: "/Logos/weber-deitermann.jpg" },
  { name: "Schonbek", src: "/Logos/schonbek.jpg" },
  { name: "Clage", src: "/Logos/clage.jpg" },
  { name: "Hansa", src: "/Logos/hansa.jpg" },
  { name: "Alape", src: "/Logos/alape.jpg" },
  { name: "Agrob Buchtal", src: "/Logos/agrob-buchtal.jpg" },
  { name: "Burger Küchenmöbel", src: "/Logos/burger-kuechenmoebel.jpg" },
  { name: "Decor Walther", src: "/Logos/decor-walther.jpg" },
  { name: "Abyss & Habidecor", src: "/Logos/abyss-und-habidecor.jpg" },
  { name: "Aquanova", src: "/Logos/aquanova.jpg" },
  { name: "nicol", src: "/Logos/nicol-wohnbadausstattungen.jpg" },
  { name: "Heinrich Baustoffzentrum", src: "/Logos/heinrich-baustoffzentrum.jpg" },
  { name: "Pung Fliesen Center", src: "/Logos/pung-fliesen-center.jpg" },
  { name: "Schmidt + Rudersdorf", src: "/Logos/schmidt-rudersdorf.jpg" },
  { name: "Raab Karcher", src: "/Logos/raab-karcher.jpg" },
  { name: "Brenner & Klaudt", src: "/Logos/brenner-und-klaudt.jpg" },
  { name: "Richter + Frenzel", src: "/Logos/richter-frenzel.jpg" },
];

function resolveWaboLogo(): string | null {
  const base = path.join(process.cwd(), "public", "Logos");
  const candidates = [
    // root-level public files
    path.join(process.cwd(), "public", "wabo.png"),
    path.join(process.cwd(), "public", "wabo.jpg"),
    // within /Logos and /Logos/neu
    path.join(base, "wabo.png"),
    path.join(base, "wabo.jpg"),
    path.join(base, "neu", "wabo.png"),
    path.join(base, "neu", "wabo.jpg"),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        const rel = p.split("public")[1];
        return rel.replace(/\\/g, "/");
      }
    } catch {}
  }
  return null;
}

const materialPartners: { name: string; src: string }[] = (() => {
  const list = [...baseMaterialPartners];
  const waboSrc = resolveWaboLogo();
  if (waboSrc) list.push({ name: "Wabo", src: waboSrc });
  return list;
})();

export default function HerstellerPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/47894596_logo_make_11_06_2023_272 1.jpg"
              alt="Premium Materialien"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Hersteller" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
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

        {/* Heating Partners */}
        <section className="py-16 md:py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <h2 className="text-white text-lg md:text-xl font-light mb-6">Unsere Partner im Bereich Heizung</h2>
            </AnimateIn>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {heatingPartners.map((p, i) => (
                <AnimateIn key={p.name} delay={i * 0.05}>
                  <div className="p-4 md:p-6 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center">
                    <Image src={p.src} alt={`${p.name} Logo`} width={220} height={100} className="object-contain w-auto h-12 md:h-16" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Material Partners Grid */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <h2 className="text-white text-lg md:text-xl font-light mb-6">Mit hochwertigen Materialien arbeiten wir mit ausgewählten Lieferanten</h2>
            </AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {materialPartners.map((p, i) => (
                <AnimateIn key={p.name} delay={i * 0.02}>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center h-20 md:h-24">
                    <Image src={p.src} alt={`${p.name} Logo`} width={200} height={96} className="object-contain w-auto h-full" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Gallery/12.jpeg"
              alt="Partnerschaften Hintergrund"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
                Qualität durch starke Partnerschaften
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-zinc-300 leading-relaxed mb-8">
                Unsere langjährigen Partnerschaften mit renommierten Herstellern ermöglichen es uns,
                Ihnen stets die beste Qualität und neuesten Innovationen zu bieten.
                Von Premium-Armaturen über hochwertige Fliesen bis hin zu modernsten Heizsystemen –
                wir setzen auf bewährte Marken, denen wir vertrauen.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-white/15 hover:border-[var(--gold)]/30 transition-all duration-300">
                  <span className="text-2xl font-light text-white">50+</span>
                  <span className="text-sm text-zinc-300 ml-2">Partnerhersteller</span>
                </div>
                <div className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-white/15 hover:border-[var(--gold)]/30 transition-all duration-300">
                  <span className="text-2xl font-light text-white">25+</span>
                  <span className="text-sm text-zinc-300 ml-2">Jahre Zusammenarbeit</span>
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
