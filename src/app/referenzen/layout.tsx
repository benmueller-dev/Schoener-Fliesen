import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen | Badsanierung Vorher-Nachher Sankt Augustin",
  description: "Unsere Referenzen: Vorher-Nachher Bilder von Badsanierungen in Sankt Augustin & Umgebung. Sehen Sie die Qualität unserer Arbeit. Jetzt inspirieren lassen!",
  keywords: "Badsanierung Vorher Nachher, Badezimmer Referenzen Sankt Augustin, Badrenovierung Beispiele, Fliesenleger Arbeiten Bonn",
  openGraph: {
    title: "Referenzen | Badsanierung Vorher-Nachher",
    description: "Unsere Referenzen: Vorher-Nachher Bilder von Badsanierungen in Sankt Augustin & Umgebung",
    type: "website",
  },
  alternates: {
    canonical: "https://www.schoener-fliesen.com/referenzen",
  },
};

export default function ReferenzenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
