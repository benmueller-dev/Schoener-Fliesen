import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Schöner Fliesen | Meisterbetrieb für Bad & Heizung Sankt Augustin",
  description: "Meisterbetrieb für Badsanierung, Fliesen & Heizung in Sankt Augustin. 25+ Jahre Erfahrung im Rhein-Sieg-Kreis. Jetzt Beratung anfragen!",
  keywords: "Fliesen Sankt Augustin, Badsanierung Sankt Augustin, Bad Heizung Meisterbetrieb, Fliesenleger Rhein-Sieg-Kreis, Badezimmer Renovierung Bonn, Naturstein Köln",
  openGraph: {
    title: "Schöner Fliesen | Meisterbetrieb für Bad & Heizung",
    description: "Meisterbetrieb für Badsanierung, Fliesen & Heizung in Sankt Augustin. 25+ Jahre Erfahrung.",
    url: "https://www.schoener-fliesen.com",
    siteName: "Schöner Fliesen GmbH",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schöner Fliesen | Meisterbetrieb für Bad & Heizung",
    description: "Meisterbetrieb für Badsanierung, Fliesen & Heizung in Sankt Augustin",
  },
  icons: {
    icon: "/favicon.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${poppins.className} ${poppins.variable} font-sans antialiased selection:bg-amber-900/50 selection:text-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
