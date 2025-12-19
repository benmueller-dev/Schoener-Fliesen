import { Navigation } from "@/components/Navigation";
import {
  Stats,
  About,
  GalleryMarquee,
  Benefits,
  Collection,
  Details,
  Footer,
} from "@/components/sections";
import { getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

// SEO Metadata für jede Stadt
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  return {
    title: `Badsanierung ${city.name} | Heizung & Fliesen | Schöner Fliesen`,
    description: `Ihr Meisterbetrieb für Badsanierung & Fliesen in ${city.name}. 25+ Jahre Erfahrung. Nur ${city.distance} von ${city.name}. Kostenlose Beratung! ☎ 0175 4018760`,
    keywords: city.keywords.join(", "),
    alternates: {
      canonical: `https://www.schoener-fliesen.com/${city.slug}`,
    },
    openGraph: {
      title: `Badsanierung ${city.name} | Schöner Fliesen`,
      description: `Meisterbetrieb für Badsanierung & Fliesen in ${city.name}. 25+ Jahre Erfahrung.`,
      type: "website",
    },
  };
}

// Alle Stadt-Seiten statisch generieren
export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: slug,
  }));
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <Breadcrumbs />
      <main>
        {/* Hero Section - GLEICHE Komponente wie Startseite, nur Text angepasst */}
        <section className="relative min-h-[75vh] lg:min-h-[65vh] flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Image - gleich wie Startseite */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Hero/pexels-ranamatloob567-35189673.jpg"
              alt={`Badezimmer ${city.name}`}
              fill
              className="object-cover opacity-90"
              sizes="100vw"
              priority
            />
          </div>

          {/* Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />

          {/* Content - stadtspezifisch */}
          <div className="relative z-20 text-center max-w-[823px] mx-auto px-6 md:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 mb-8 animate-title">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
              <span className="text-xs uppercase tracking-widest text-[var(--gold-light)] font-medium">
                Ihr Meisterbetrieb in {city.name}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-[0.9]">
              <span className="block text-white animate-title animate-delay-100 font-light text-[40px] md:text-[60px]">
                Badsanierung
              </span>
              <span className="block gold-gradient animate-title animate-delay-200 pb-2 pt-[11px] tracking-[-1.5px] md:tracking-[-2.7px]">
                in {city.name}
              </span>
            </h1>

            <p
              className="text-base md:text-xl text-zinc-400 font-light max-w-[728px] mx-auto mb-12 animate-title animate-delay-300 leading-relaxed px-2"
              style={{ fontFamily: "Poppins" }}
            >
              Nur {city.distance} von {city.name} entfernt.{" "}
              <br className="hidden md:block" />
              Meisterbetrieb mit 25+ Jahren Erfahrung für Ihre Badsanierung.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-title animate-delay-300 px-2">
              <a
                href="/kontakt"
                className="w-full md:w-auto px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm tracking-wide"
              >
                Jetzt Beratung anfragen
              </a>
              <a
                href="tel:+491754018760"
                className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:border-[var(--gold)]/30 transition-colors font-medium text-sm"
              >
                0175 4018760
              </a>
            </div>
          </div>
        </section>

        {/* FAQ - stadtspezifisch direkt oben */}
        <FAQ
          headline={`Badsanierung in ${city.name}: Häufige Fragen`}
          subline={`Kurz erklärt: Ablauf, Dauer, Vor-Ort-Beratung in ${city.name}`}
          items={[
            {
              question: `Kommt ihr für eine Beratung nach ${city.name}?`,
              answer:
                `Ja. Wir vereinbaren gern einen Termin direkt bei Ihnen in ${city.name}. Auf Basis des Aufmaßes erhalten Sie ein transparentes Festpreisangebot.`,
            },
            {
              question: "Wie lange dauert die Badsanierung?",
              answer:
                "Je nach Größe und Umfang rund 2–3 Wochen bis zur schlüsselfertigen Übergabe.",
            },
            {
              question: "Barrierefrei und seniorengerecht in eurer Region?",
              answer:
                "Wir realisieren bodengleiche Duschen, rutschhemmende Beläge, Haltegriffe, Sitzlösungen und unterfahrbare Waschtische – ideal für Seniorinnen/Senioren und Mobilitätseinschränkungen.",
            },
            {
              question: `Zeigt ihr Referenzen aus ${city.name} oder der Nähe?`,
              answer:
                `Ja – in unseren Referenzen finden sich Projekte aus ${city.name} und den Nachbarorten. Auf Wunsch zeigen wir passende Beispiele im Beratungstermin.`,
            },
          ]}
        />

        {/* Stats Section - EXAKT wie auf Startseite */}
        <Stats />

        {/* Gallery Marquee - EXAKT wie auf Startseite */}
        <GalleryMarquee />

        {/* About Section - mit stadtspezifischem Text */}
        <section className="py-24 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Left */}
              <div>
                <AnimateIn>
                  <SectionBadge text="Über uns" />
                </AnimateIn>

                <AnimateIn delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
                    Ihr Meisterbetrieb für{" "}
                    <span className="gold-gradient">Bad & Heizung in {city.name}</span>
                  </h2>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Von Sankt Augustin aus betreuen wir seit über 25 Jahren Kunden in {city.name} und Umgebung.
                      Als Meisterbetrieb im Rhein-Sieg-Kreis stehen wir für höchste Qualität und handwerkliche Präzision.
                    </p>
                    <p>
                      Von der ersten Beratung bis zur Schlüsselübergabe begleiten wir Sie persönlich in {city.name} –
                      mit transparenten Festpreisen und termingerechter Fertigstellung.
                    </p>
                    <p className="text-sm">
                      <strong className="text-white">Anfahrt:</strong> Nur {city.distance} von {city.name} zu unserem Hauptsitz in Sankt Augustin.
                      Kostenlose Vor-Ort-Beratung in {city.name}!
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delay={0.3}>
                  <a
                    href="/ueber-uns"
                    className="inline-flex items-center gap-2 mt-8 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors group"
                  >
                    <span className="text-sm font-medium">Mehr über uns erfahren</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </AnimateIn>
              </div>

              {/* Image Right - GLEICH wie Startseite */}
              <AnimateIn delay={0.2} from="right">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/Fotos/Badezimmer-Waschbecken-Sankt-Augustin.png"
                      alt={`Schöner Fliesen Handwerk in ${city.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-light text-white mb-1">25+</div>
                    <div className="text-sm text-[var(--gold)]">Jahre Erfahrung</div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Benefits - EXAKT wie auf Startseite */}
        <Benefits />

        {/* Collection - EXAKT wie auf Startseite */}
        <Collection />

        {/* Details - EXAKT wie auf Startseite */}
        <Details />

        {/* FAQ - allgemeine Fragen wie auf Startseite */}
        <FAQ
          headline="Allgemeine Fragen zur Badsanierung"
          subline="Leistungen, Dauer, Garantie, Festpreis & Showroom"
          items={[
            {
              question: "Was beinhaltet eine Badsanierung bei Schöner Fliesen?",
              answer:
                "Von der Planung bis zur finalen Umsetzung: Sanitärinstallation, Bäderbau, individuelle Beratung, Materialauswahl sowie – bei Bedarf – barrierefreie Lösungen.",
            },
            {
              question: "Wie lange dauert eine typische Badsanierung?",
              answer:
                "In der Regel 2–3 Wochen, abhängig von Größe und Umbauumfang.",
            },
            {
              question: "Was umfasst die 4‑Jahres‑Garantie?",
              answer:
                "Sie deckt unsere Arbeiten gegen Verarbeitungsfehler ab. Tritt innerhalb von 4 Jahren ein Problem aufgrund unserer Arbeit auf, beheben wir es kostenfrei.",
            },
            {
              question: "Bieten Sie ein Festpreis‑Angebot an?",
              answer:
                "Ja – nach Vor‑Ort‑Besichtigung erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten.",
            },
            {
              question: "Sind die Umbauten senioren- und behindertengerecht möglich?",
              answer:
                "Ja, inkl. bodengleicher Duschen, rutschhemmender Oberflächen, Haltegriffen, Sitzlösungen und unterfahrbaren Waschtischen.",
            },
            {
              question: "Kann ich Materialien vorher ansehen?",
              answer:
                "Gern im Showroom in Sankt Augustin – wir zeigen Fliesen, Armaturen, Möbel und Beleuchtung und beraten zu Pflege & Preis‑Leistung.",
            },
          ]}
        />

        {/* CTA Section - stadtspezifisch */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop"
              alt={`Luxuriöses Badezimmer ${city.name}`}
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
                Bereit für Ihr neues Bad in {city.name}?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose Vor-Ort-Beratung in {city.name}.
                Wir freuen uns auf Ihr Projekt!
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--gold-light)] transition-colors font-medium text-sm"
                >
                  Jetzt Planung anfragen
                </a>
                <a
                  href="/referenzen"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:border-[var(--gold)]/30 transition-colors font-medium text-sm"
                >
                  Referenzen ansehen
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
