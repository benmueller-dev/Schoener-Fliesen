import { Navigation } from "@/components/Navigation";
import {
  Hero,
  Stats,
  About,
  GalleryMarquee,
  Benefits,
  Collection,
  Details,
  CTA,
  Footer,
} from "@/components/sections";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <GalleryMarquee />
        <About />
        <Benefits />
        <Collection />
        <Details />
        <div id="faq" className="scroll-mt-28">
          <FAQ
            headline="Häufige Fragen zur Badsanierung"
            subline="Antworten auf die häufigsten Fragen"
            items={[
              {
                question: "Was beinhaltet eine Badsanierung bei Schöner Fliesen?",
                answer:
                  "Von der ersten Planung bis zur finalen Umsetzung: Sanitärinstallation, Bäderbau, individuelle Beratung, Auswahl von Fliesen und Einrichtungselementen sowie – bei Bedarf – Einbau barrierefreier Duschen.",
              },
              {
                question: "Wie lange dauert eine typische Badsanierung?",
                answer:
                  "Abhängig von Größe und Umfang: In der Regel 2–3 Wochen für eine komplette Badsanierung.",
              },
              {
                question: "Was umfasst die 4‑Jahres‑Garantie?",
                answer:
                  "Sie deckt alle Aspekte unserer Badsanierungsarbeiten gegen Verarbeitungsfehler ab. Tritt innerhalb von 4 Jahren ein Problem aufgrund unserer Arbeit auf, beheben wir es ohne Zusatzkosten.",
              },
              {
                question: "Wie wird sichergestellt, dass meine Wünsche umgesetzt werden?",
                answer:
                  "Wir starten mit einer ausführlichen Beratung und Planung, stimmen jeden Schritt ab und halten Sie während des gesamten Prozesses transparent auf dem Laufenden.",
              },
              {
                question: "Bieten Sie ein Festpreis‑Angebot an?",
                answer:
                  "Ja. Nach Vor‑Ort‑Besichtigung und Beratung erhalten Sie ein transparentes Festpreisangebot, das alle Anforderungen berücksichtigt.",
              },
              {
                question: "Wie umweltfreundlich sind Ihre Sanierungsmethoden?",
                answer:
                  "Wir setzen – wo möglich – auf umweltfreundliche Materialien und Verfahren, minimieren Abfall und arbeiten ressourceneffizient.",
              },
              {
                question: "Wie läuft die Terminvereinbarung für eine Beratung ab?",
                answer:
                  "Einfach per Kontaktformular, E‑Mail oder Telefon. Wir richten uns nach Ihrem Zeitplan und kommen gern zur Besichtigung vorbei.",
              },
              {
                question: "Bauen Sie auch senioren- und behindertengerechte, barrierefreie Bäder?",
                answer:
                  "Ja. Wir planen und realisieren barrierefreie Lösungen nach DIN‑Empfehlungen: bodengleiche Duschen, breite Durchgänge, rutschhemmende Fliesen, Stütz‑/Haltegriffe, unterfahrbare Waschtische und angepasste Sitzmöglichkeiten – ideal für Seniorinnen/Senioren und Personen mit eingeschränkter Mobilität.",
              },
              {
                question: "In welchem Umkreis sind Sie als Meisterbetrieb tätig?",
                answer:
                  "Unser Einsatzgebiet umfasst den Rhein‑Sieg‑Kreis und Umgebung: Sankt Augustin, Bonn, Siegburg, Troisdorf, Hennef, Königswinter, Bad Honnef, Niederkassel sowie Teile von Köln. Auf Anfrage sind weitere Orte im Umkreis von ca. 80 km möglich.",
              },
              {
                question: "Übernehmen Sie auch Teilmodernisierungen oder kleine Reparaturen?",
                answer:
                  "Ja. Neben Komplettbadsanierungen führen wir auch Teilmodernisierungen (z. B. nur Dusche/Wanne, Fliesenwechsel, neue Armaturen) sowie Sanitär‑Reparaturen und Wartung aus.",
              },
              {
                question: "Gibt es Förderungen für barrierefreie Bäder (z. B. KfW/BAFA)?",
                answer:
                  "Für barrierefreie Umbauten können – je nach Programm und Verfügbarkeit – Förderungen oder Zuschüsse infrage kommen. Wir geben Hinweise und stellen die nötigen technischen Nachweise; die Antragstellung erfolgt durch die Kundschaft.",
              },
              {
                question: "Kann ich mir Materialien vorher ansehen?",
                answer:
                  "Ja. In unserem Showroom in Sankt Augustin zeigen wir Fliesen, Armaturen, Duschsysteme, Möbel und Beleuchtung. Wir beraten zu Pflege, Haptik und Preis‑Leistung und erstellen auf Wunsch Visualisierungen.",
              },
              {
                question: "Mit welchen Herstellern arbeiten Sie?",
                answer:
                  "Wir setzen auf Marken wie Villeroy & Boch, Grohe, Hansgrohe, Kermi, Viessmann u. v. m. – langlebige Qualität, schnelle Verfügbarkeit und herstellerkonforme Montage.",
              },
            ]}
          />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
