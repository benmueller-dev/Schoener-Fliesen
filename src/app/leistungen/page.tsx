import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import { Bath, Droplets, Wrench, Flame, Lightbulb, Palette } from "lucide-react";

export const metadata = {
  title: "Leistungen | Badsanierung, Fliesen & Heizung Sankt Augustin",
  description: "Badsanierung, Fliesenverlegung, Heizungsmodernisierung & mehr in Sankt Augustin. CAD-Planung, barrierefreie Bäder, Spanndecken. Jetzt beraten lassen!",
  keywords: "Badsanierung Sankt Augustin, Fliesenverlegung Bonn, Heizungsmodernisierung Rhein-Sieg, barrierefreies Bad, Naturstein verlegen, Sanitärinstallation",
  openGraph: {
    title: "Unsere Leistungen | Schöner Fliesen",
    description: "Badsanierung, Fliesenverlegung, Heizungsmodernisierung & mehr in Sankt Augustin",
    type: "website",
  },
};

const services = [
  {
    icon: Bath,
    title: "Badsanierung & Bäderbau",
    subtitle: "Von der Planung bis zur Fertigstellung – alles aus einer Hand.",
    features: [
      "Beratung & Planung",
      "CAD-Visualisierung",
      "Barrierefreie Bäder",
      "Fachbauleitung aller Gewerke",
    ],
  },
  {
    icon: Droplets,
    title: "Fliesen & Naturstein",
    subtitle: "Präzise Verlegung für langlebige Ergebnisse.",
    features: [
      "Wand- und Bodenfliesen",
      "Naturstein & Mosaike",
      "Untergrundvorbereitung",
      "Fugen- und Abdichtungsarbeiten",
    ],
  },
  {
    icon: Wrench,
    title: "Sanitärinstallation & Kundendienst",
    subtitle: "Zuverlässige Arbeit – sauber ausgeführt.",
    features: [
      "Sanitär- und Klima-Installationen",
      "Armaturentausch",
      "Reparatur & Wartung",
      "Kundendienst im Bestand",
    ],
  },
  {
    icon: Flame,
    title: "Heizungsmodernisierung",
    subtitle: "Effiziente Technik für Wärme mit Zukunft.",
    features: [
      "Heizungsplanung & Montage",
      "Modernisierung bestehender Anlagen",
      "ATAG-Premiumsysteme",
      "Wartung & Inspektion",
    ],
  },
  {
    icon: Lightbulb,
    title: "Spanndecken & Beleuchtung",
    subtitle: "Licht schafft Atmosphäre.",
    features: [
      "Spanndecken mit LED-Technik",
      "Individuelle Lichtkonzepte",
      "Integration in Bad- und Wohnräume",
    ],
  },
  {
    icon: Palette,
    title: "Hochwertiges Baddesign & Beratung",
    subtitle: "Raumgestaltung mit Persönlichkeit.",
    features: [
      "Farb- und Materialberatung",
      "3D-Planung",
      "Dekor- und Ausstattungsauswahl",
      "Kooperation mit Swarovski Lighting",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1920&auto=format&fit=crop"
              alt="Badezimmer Renovierung"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Leistungen" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  Unsere Kompetenz{" "}
                  <span className="gold-gradient">im Überblick</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Vom ersten Entwurf bis zur fertigen Wohlfühloase – hier finden Sie alle
                  Leistungen, die wir für Sie realisieren.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimateIn key={index} delay={index * 0.1}>
                  <div className="group p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/20 transition-colors">
                      <service.icon className="w-6 h-6 text-[var(--gold)]" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-light text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6">{service.subtitle}</p>

                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-zinc-600 mb-3">Leistungen:</p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                          <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop"
              alt="Luxuriöses Badezimmer"
              fill
              className="object-cover"
            />
            {/* Blur + Gradient Overlay */}
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
                Bereit für Ihr neues Bad?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihr Projekt.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm"
              >
                Jetzt Planung anfragen
              </a>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
