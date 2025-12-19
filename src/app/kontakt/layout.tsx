import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Schöner Fliesen Sankt Augustin | 0175 4018760",
  description: "Kontaktieren Sie uns für Badsanierung & Fliesen in Sankt Augustin. Tel: 0175 4018760, Hennefer Str. 25. Kostenlose Beratung & Angebot. Jetzt anfragen!",
  keywords: "Kontakt Fliesenleger Sankt Augustin, Badsanierung Angebot, Fliesenleger Termin, Badplanung Beratung Bonn",
  openGraph: {
    title: "Kontakt | Schöner Fliesen Sankt Augustin",
    description: "Kontaktieren Sie uns für Badsanierung & Fliesen. Tel: 0175 4018760. Kostenlose Beratung!",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schoener-fliesen.com/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
