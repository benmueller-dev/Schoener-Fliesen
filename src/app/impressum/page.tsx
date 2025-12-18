import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionBadge } from "@/components/SectionBadge";

export const metadata = {
  title: "Impressum | Schöner Fliesen GmbH Sankt Augustin",
  description: "Impressum der Schöner Fliesen GmbH, Meisterbetrieb für Bad & Heizung, Hennefer Str. 25, 53757 Sankt Augustin. Kontakt & rechtliche Informationen.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <AnimateIn>
                <SectionBadge text="Impressum" />
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-6">
                  Impressum
                </h1>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-zinc max-w-none">
              <AnimateIn>
                <h2 className="text-2xl font-light text-white mb-6">Angaben gemäß § 5 TMG</h2>
                <div className="text-zinc-400 space-y-4 leading-relaxed">
                  <p>Meisterbetrieb Schöner Fliesen GmbH Bad & Heizung<br />
                  Hennefer Straße 25<br />
                  53757 Sankt Augustin</p>

                  <p><strong className="text-white">Vertreten durch:</strong><br />
                  Ramin Rostamitorab</p>

                  <p><strong className="text-white">Kontakt:</strong><br />
                  Telefon: 02241 - 34 33 07<br />
                  Mobil: 0175 - 401 87 60<br />
                  Fax: 02241 - 84 66 041<br />
                  E-Mail: info@schoener-fliesen.com</p>

                  <p><strong className="text-white">Registereintrag:</strong><br />
                  Das Unternehmen ist eingetragen und zugelassen beim<br />
                  Amtsgericht Siegburg: HRB 6141</p>

                  <p><strong className="text-white">Umsatzsteuer-ID:</strong><br />
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE215683539</p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
