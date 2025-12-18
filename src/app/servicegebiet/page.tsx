import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import { MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Servicegebiet | Fliesenleger & Badsanierung Rhein-Sieg-Kreis",
  description: "Wir sind Ihr Meisterbetrieb für Fliesen & Bad in Sankt Augustin, Bonn, Siegburg, Troisdorf, Hennef, Königswinter, Niederkassel und Umgebung. 50km Radius.",
  keywords: "Fliesenleger Bonn, Badsanierung Siegburg, Badezimmer Troisdorf, Fliesen Hennef, Bad Königswinter, Fliesenleger Niederkassel, Bornheim, Alfter, Meckenheim, Rheinbach",
  openGraph: {
    title: "Servicegebiet | Fliesenleger Rhein-Sieg-Kreis",
    description: "Ihr Meisterbetrieb für Fliesen & Bad in der Region",
    type: "website",
  },
};

const serviceAreas = [
  {
    category: "Hauptstädte",
    cities: [
      { name: "Sankt Augustin", distance: "0 km", highlight: true },
      { name: "Bonn", distance: "8 km" },
      { name: "Siegburg", distance: "6 km" },
      { name: "Troisdorf", distance: "7 km" },
      { name: "Hennef", distance: "12 km" },
      { name: "Königswinter", distance: "15 km" },
      { name: "Bad Honnef", distance: "18 km" },
      { name: "Niederkassel", distance: "10 km" },
    ],
  },
  {
    category: "Weitere Städte",
    cities: [
      { name: "Bornheim", distance: "10 km" },
      { name: "Alfter", distance: "12 km" },
      { name: "Meckenheim", distance: "14 km" },
      { name: "Rheinbach", distance: "16 km" },
      { name: "Swisttal", distance: "18 km" },
      { name: "Wachtberg", distance: "11 km" },
      { name: "Much", distance: "20 km" },
      { name: "Lohmar", distance: "15 km" },
      { name: "Ruppichteroth", distance: "22 km" },
      { name: "Eitorf", distance: "20 km" },
      { name: "Neunkirchen-Seelscheid", distance: "18 km" },
    ],
  },
  {
    category: "Stadtteile Sankt Augustin",
    cities: [
      { name: "Menden", distance: "2 km" },
      { name: "Niederpleis", distance: "3 km" },
      { name: "Hangelar", distance: "4 km" },
      { name: "Mülldorf", distance: "2 km" },
      { name: "Birlinghoven", distance: "3 km" },
    ],
  },
  {
    category: "Stadtteile Bonn",
    cities: [
      { name: "Beuel", distance: "5 km" },
      { name: "Bad Godesberg", distance: "10 km" },
      { name: "Poppelsdorf", distance: "9 km" },
      { name: "Duisdorf", distance: "11 km" },
      { name: "Mehlem", distance: "14 km" },
      { name: "Vilich", distance: "6 km" },
      { name: "Holzlar", distance: "4 km" },
    ],
  },
  {
    category: "Köln (teilweise)",
    cities: [
      { name: "Porz", distance: "15 km" },
      { name: "Rodenkirchen", distance: "20 km" },
      { name: "Ensen", distance: "18 km" },
    ],
  },
];

const services = [
  "Badsanierung & Komplettrenovierung",
  "Fliesenverlegung (Wand & Boden)",
  "Naturstein & Mosaike",
  "Heizungsmodernisierung",
  "Barrierefreie Bäder",
  "Sanitärinstallation",
  "Spanndecken mit LED-Beleuchtung",
  "Notdienst & Reparaturen",
];

export default function ServicegebietPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop"
              alt="Servicegebiet Rhein-Sieg-Kreis"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Servicegebiet" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  Ihr Meisterbetrieb im{" "}
                  <span className="gold-gradient">Rhein-Sieg-Kreis</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Von Sankt Augustin aus betreuen wir Kunden in der gesamten Region.
                  Unser Einzugsgebiet umfasst einen Radius von 50 km – für kurze Anfahrtswege
                  und schnelle Reaktionszeiten.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Service Area Overview */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <AnimateIn>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">50 km Radius</h3>
                  <p className="text-zinc-400 text-sm">Unser Einzugsgebiet rund um Sankt Augustin</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[var(--gold)]" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">30+ Städte</h3>
                  <p className="text-zinc-400 text-sm">Im gesamten Rhein-Sieg-Kreis und darüber hinaus</p>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-[var(--gold)]">25+</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Jahre Erfahrung</h3>
                  <p className="text-zinc-400 text-sm">Lokaler Meisterbetrieb seit 1999</p>
                </div>
              </AnimateIn>
            </div>

            {/* Cities Grid */}
            <div className="space-y-12">
              {serviceAreas.map((area, areaIdx) => (
                <AnimateIn key={areaIdx} delay={areaIdx * 0.1}>
                  <div>
                    <h2 className="text-2xl font-light text-white mb-6">{area.category}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {area.cities.map((city, cityIdx) => (
                        <div
                          key={cityIdx}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            city.highlight
                              ? "bg-[var(--gold)]/10 border-[var(--gold)]/30"
                              : "bg-white/5 border-white/10 hover:border-[var(--gold)]/30"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className={`font-light ${city.highlight ? "text-[var(--gold)]" : "text-white"}`}>
                              {city.name}
                            </h3>
                            <span className="text-xs text-zinc-500">{city.distance}</span>
                          </div>
                          {city.highlight && (
                            <p className="text-xs text-[var(--gold)]/70 mt-1">Unser Hauptsitz</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Region */}
        <section className="py-20 md:py-28 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-12">
                Unsere Leistungen in der Region
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {services.map((service, idx) => (
                <AnimateIn key={idx} delay={idx * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-[var(--gold)] shrink-0" />
                    <span className="text-sm text-zinc-300">{service}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Auch in Ihrer Stadt?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Sie finden Ihre Stadt nicht in der Liste? Kein Problem – kontaktieren Sie uns einfach.
                Wir prüfen gerne, ob wir auch bei Ihnen tätig werden können.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm"
                >
                  Jetzt Kontakt aufnehmen
                </a>
                <a
                  href="tel:+491754018760"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:border-[var(--gold)]/30 transition-colors font-medium text-sm"
                >
                  0175 4018760
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
