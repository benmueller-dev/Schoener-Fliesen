import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Schöner Fliesen | Meisterbetrieb für exklusive Fliesen",
  description: "Wir erschaffen Räume der Stille und Eleganz. Meisterbetrieb für exklusive Fliesen und edle Badezimmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-amber-900/50 selection:text-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
