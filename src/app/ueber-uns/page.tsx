import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { Stats } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Über uns | Meisterbetrieb Schöner Fliesen Sankt Augustin",
  description: "Seit über 25 Jahren Ihr Meisterbetrieb für Bad & Heizung in Sankt Augustin. Höchste Qualität, transparente Festpreise, termingerechte Fertigstellung.",
  keywords: "Meisterbetrieb Sankt Augustin, Fliesenleger Meister, Bad Heizung Fachbetrieb, Handwerker Rhein-Sieg-Kreis",
  openGraph: {
    title: "Über uns | Meisterbetrieb Schöner Fliesen",
    description: "Seit über 25 Jahren Ihr Meisterbetrieb für Bad & Heizung in Sankt Augustin",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schoener-fliesen.com/ueber-uns",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <Navigation />
      <Breadcrumbs />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop"
              alt="Modernes Badezimmer"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Über uns" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  Ihr Bad- und Heizungspartner{" "}
                  <span className="gold-gradient">in Sankt Augustin</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                  Willkommen bei Schöner Fliesen – Bad & Heizung, Ihrem Meisterbetrieb für
                  ganzheitliche Bad- und Heizungslösungen im Rhein-Sieg-Kreis.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* About Content */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <AnimateIn>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
                    Seit über 25 Jahren gestalten wir Bäder, die Funktion und Ästhetik verbinden
                  </h2>
                </AnimateIn>
                <AnimateIn delay={0.1}>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Von der barrierefreien Modernisierung bis zum luxuriösen Wellnessbad –
                      unsere Arbeit beginnt mit einer individuellen Beratung und endet erst,
                      wenn Sie Ihr neues Bad mit einem Lächeln betreten.
                    </p>
                    <p>
                      Als Meisterbetrieb legen wir höchsten Wert auf Qualität und Präzision.
                      Jedes Projekt wird von unserem erfahrenen Team mit Leidenschaft und
                      handwerklichem Können umgesetzt.
                    </p>
                    <p>
                      Wir arbeiten mit führenden Herstellern zusammen, um Ihnen die beste
                      Material- und Designqualität zu garantieren. Transparente Festpreise
                      und termingerechte Fertigstellung sind für uns selbstverständlich.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              <AnimateIn delay={0.2} from="right">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/Fotos (neu)/Schöner-Fliesen-laden.jpg"
                      alt="Schöner Fliesen Laden"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-light text-white mb-1">25+</div>
                    <div className="text-sm text-[var(--gold)]">Jahre Erfahrung</div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/47894596_logo_make_11_06_2023_272 1.jpg"
              alt="Unsere Werte"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <AnimateIn>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
                  Unsere Werte
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Was uns als Meisterbetrieb auszeichnet
                </p>
              </AnimateIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Qualität",
                  description: "Höchste handwerkliche Standards und ausschließlich erstklassige Materialien für langlebige Ergebnisse."
                },
                {
                  title: "Transparenz",
                  description: "Faire Festpreise ohne versteckte Kosten. Sie wissen von Anfang an, was Ihr Projekt kostet."
                },
                {
                  title: "Zuverlässigkeit",
                  description: "Termingerechte Fertigstellung und saubere Arbeitsweise sind für uns selbstverständlich."
                }
              ].map((value, index) => (
                <AnimateIn key={index} delay={0.1 * index}>
                  <div className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-[var(--gold)]/30 transition-colors h-full">
                    <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
